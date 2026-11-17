/* Asistente con IA de Panther7. Solo aparece si asistente.php responde activo
   (es decir, si el servidor tiene configurada la clave); si no, el sitio queda sin rastro de él. */
(function () {
  var TXT = {
    es: { t: 'Asistente Panther7', s: 'Asistente con IA · responde al instante', ph: 'Escribe tu pregunta…', env: 'Enviar', hola: 'Hola, soy el asistente con IA de Panther7. Puedo ayudarte en español, inglés o portugués. ¿Qué te gustaría saber?', aviso: 'No compartas claves, códigos ni datos de tu cuenta. Tus mensajes se procesan con un proveedor de IA externo. No es asesoría financiera.', err: 'No pude responder ahora. Escríbenos a contacto@panther7.com.', rate: 'Has hecho muchas preguntas seguidas. Intenta de nuevo en un rato o escríbenos a contacto@panther7.com.', abrir: 'Hablar con el asistente', cerrar: 'Cerrar' },
    en: { t: 'Panther7 assistant', s: 'AI assistant · answers instantly', ph: 'Type your question…', env: 'Send', hola: 'Hi, I am the Panther7 AI assistant. I can help you in Spanish, English or Portuguese. What would you like to know?', aviso: 'Do not share passwords, codes or account details. Your messages are processed by an external AI provider. This is not financial advice.', err: 'I could not answer right now. Write to us at contacto@panther7.com.', rate: 'You have asked many questions in a row. Try again later or write to contacto@panther7.com.', abrir: 'Talk to the assistant', cerrar: 'Close' },
    pt: { t: 'Assistente Panther7', s: 'Assistente com IA · responde na hora', ph: 'Escreva sua pergunta…', env: 'Enviar', hola: 'Olá, sou o assistente com IA da Panther7. Posso ajudar em espanhol, inglês ou português. O que você gostaria de saber?', aviso: 'Não compartilhe senhas, códigos nem dados da sua conta. Suas mensagens são processadas por um provedor de IA externo. Não é assessoria financeira.', err: 'Não consegui responder agora. Escreva para contacto@panther7.com.', rate: 'Você fez muitas perguntas seguidas. Tente de novo mais tarde ou escreva para contacto@panther7.com.', abrir: 'Falar com o assistente', cerrar: 'Fechar' }
  };
  function idioma() { var l = document.documentElement.getAttribute('data-lang') || 'es'; return TXT[l] ? l : 'es'; }
  function T() { return TXT[idioma()]; }

  fetch('asistente.php', { cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (d) {
    if (d && d.activo) iniciar();
  }).catch(function () {});

  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt) e.textContent = txt; return e; }

  function iniciar() {
    document.querySelectorAll('.asis-sec').forEach(function (s) { s.classList.add('on'); });
    var hist = [], ocupado = false;
    var fab = el('button', 'asis-fab'); fab.type = 'button';
    fab.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2zm7 11l.9 2.6L22.5 16.5l-2.6.9L19 20l-.9-2.6-2.6-.9 2.6-.9L19 13z"/></svg><span></span>';
    var panel = el('section', 'asis-panel'); panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-modal', 'false'); panel.hidden = true;
    var cab = el('header', 'asis-cab'), tt = el('div'), h = el('strong'), sub = el('small'), x = el('button', 'asis-x', '×'); x.type = 'button';
    tt.appendChild(h); tt.appendChild(sub); cab.appendChild(tt); cab.appendChild(x);
    var log = el('div', 'asis-log'); log.setAttribute('aria-live', 'polite');
    var form = el('form', 'asis-form'), inp = el('input'), env = el('button', null); inp.type = 'text'; inp.maxLength = 500; inp.autocomplete = 'off'; env.type = 'submit';
    form.appendChild(inp); form.appendChild(env);
    var av = el('p', 'asis-aviso');
    panel.appendChild(cab); panel.appendChild(log); panel.appendChild(form); panel.appendChild(av);
    document.body.appendChild(fab); document.body.appendChild(panel);

    function textos() {
      var t = T(); fab.querySelector('span').textContent = t.abrir; fab.setAttribute('aria-label', t.abrir);
      h.textContent = t.t; sub.textContent = t.s; inp.placeholder = t.ph; inp.setAttribute('aria-label', t.ph); env.textContent = t.env; av.textContent = t.aviso; x.setAttribute('aria-label', t.cerrar);
    }
    textos();
    document.querySelectorAll('.idioma button').forEach(function (b) { b.addEventListener('click', function () { setTimeout(textos, 50); }); });

    function burbuja(rol, txt) { var b = el('div', 'asis-m ' + rol, txt); log.appendChild(b); log.scrollTop = log.scrollHeight; return b; }
    function abrir() {
      panel.hidden = false; fab.classList.add('off');
      if (!log.children.length) burbuja('bot', T().hola);
      setTimeout(function () { inp.focus(); }, 50);
    }
    function cerrar() { panel.hidden = true; fab.classList.remove('off'); fab.focus(); }
    fab.addEventListener('click', abrir); x.addEventListener('click', cerrar);
    panel.addEventListener('keydown', function (e) { if (e.key === 'Escape') cerrar(); });

    function enviar(texto) {
      texto = (texto || '').trim(); if (!texto || ocupado) return;
      ocupado = true; burbuja('yo', texto); hist.push({ rol: 'usuario', texto: texto });
      var esp = burbuja('bot pen', '···');
      fetch('asistente.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ idioma: idioma(), mensajes: hist.slice(-8) }) })
        .then(function (r) { return r.json().then(function (d) { return { s: r.status, d: d }; }); })
        .then(function (o) {
          esp.classList.remove('pen');
          if (o.s === 200 && o.d.texto) { esp.textContent = o.d.texto; hist.push({ rol: 'asistente', texto: o.d.texto }); }
          else { esp.textContent = o.s === 429 ? T().rate : T().err; hist.pop(); }
        }).catch(function () { esp.classList.remove('pen'); esp.textContent = T().err; hist.pop(); })
        .then(function () { ocupado = false; log.scrollTop = log.scrollHeight; });
    }
    form.addEventListener('submit', function (e) { e.preventDefault(); var v = inp.value; inp.value = ''; enviar(v); });
    // Preguntas de ejemplo de la sección de la portada
    document.querySelectorAll('[data-asis-pregunta]').forEach(function (b) {
      b.addEventListener('click', function () { abrir(); enviar(b.textContent); });
    });
    document.querySelectorAll('[data-asis-abrir]').forEach(function (b) { b.addEventListener('click', abrir); });
  }
})();
