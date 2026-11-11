/* Idioma: español por defecto; se recuerda la elección. Ejemplo para forzar uno: ?lang=pt */
(function () {
  var T = {
    es: null, // el HTML ya está en español
    en: {
      'nav.contacto':'Contact','con.h2':'Let\'s talk','con.p':'If you have questions about how to get started, write or call us.','con.mail':'Write to us','con.tel':'Call us','pie.terminos':'Terms and conditions','pie.privacidad':'Privacy policy','pie.desembolsos':'Disbursement policy',
      'skip':'Skip to content','nav.como':'How it works','nav.porque':'Why Panther7','nav.proyectos':'For your project','nav.faq':'FAQ','nav.cuenta':'My account','nav.registro':'Create account',
      'hero.h1':'Invest in real assets, from your USDT wallet.','hero.lead':'Panther7 turns real projects into tokens so you can take part from small amounts and follow every payment with full clarity.',
      'hero.cta1':'Create my account','hero.cta2':'See how it works','hero.p1':'Verified accounts','hero.p2':'A trustee for every project','hero.p3':'Deposit with USDT, ACH Panama or card',
      'flujo.a':'Real asset','flujo.as':'Project with a trustee and documents','flujo.t':'Token','flujo.ts':'Your stake, recorded on the blockchain','flujo.w':'Your wallet','flujo.nota':'Illustrative example',
      'como.h2':'Four steps, all in one place','como.p':'No scattered paperwork: you create your account, fund it, choose and track, all in the same portal.',
      'como.s1t':'Create and verify your account','como.s1p':'Sign up in minutes and complete your verification once.',
      'como.s2t':'Fund your wallet','como.s2p':'Deposit with USDT, bank transfer, ACH Panama or card. Your balance is credited 1 to 1 in USDT.',
      'como.s3t':'Choose a project','como.s3p':'Review the details, the payment schedule and the asset documents before you invest.',
      'como.s4t':'Receive and track','como.s4p':'Every payment and movement is kept with its reference in your account statement.',
      'por.h2':'Built so you always know where your money is',
      'por.a1t':'Documents in plain sight','por.a1p':'Each project gathers the asset documentation and the transfer to the token, including the notarized document, so you can review it before deciding.',
      'por.a2t':'Transparency in every movement','por.a2p':'Movements with a reference, an account statement and the detail of each payment.',
      'por.a3t':'One currency, no confusion','por.a3p':'Your wallet and investments are expressed in USDT, 1 to 1.',
      'por.a4t':'Card and wallet','por.a4p':'Manage your card and your transfers from the same portal.',
      'por.a5t':'In your language','por.a5p':'The portal is available in Spanish, English and Portuguese.',
      'pro.h2':'Do you have a project?','pro.p':'If your project needs capital, Panther7 helps you structure it, tokenize it and present it to verified investors.',
      'pro.l1':'Structure with a trustee','pro.l2':'Tokenization of the stake','pro.l3':'Scheduled payments to investors','pro.cta':'Tell us about your project',
      'inv.h2':'Want to invest?','inv.p':'Start with an amount that feels comfortable and diversify across projects at your own pace.','inv.cta':'Create my account',
      'faq.h2':'Frequently asked questions',
      'faq.q1':'What does it mean for an investment to be tokenized?','faq.a1':'Your stake in a project is represented by a token recorded on the blockchain, which keeps a clear record of who takes part and in what proportion.',
      'faq.q2':'How do I fund my wallet?','faq.a2':'You can deposit with USDT, international transfer, ACH Panama or card (with a maximum amount per deposit). Everything is credited in USDT, 1 to 1.',
      'faq.q3':'Do I have to verify my account?','faq.a3':'Yes. Verification is done once and is required to operate and to pay by card.',
      'faq.q4':'What is USDT?','faq.a4':'It is a digital currency designed to hold a value equivalent to one US dollar. At Panther7 your balance and investments are expressed in USDT.',
      'faq.q5':'How do I track my investments?','faq.a5':'From your portal you see your investments, scheduled payments and all your movements with their reference.',
      'fin.h2':'Start today, at your own pace','fin.p':'Create your account and discover the available projects.',
      'pie.aviso':'All investing involves risk, including partial or total loss of capital. Past results do not guarantee future results. Review each project\'s documentation before investing.'
    },
    pt: {
      'nav.contacto':'Contato','con.h2':'Vamos conversar','con.p':'Se tiver dúvidas sobre como começar, escreva ou ligue para nós.','con.mail':'Escreva para nós','con.tel':'Ligue para nós','pie.terminos':'Termos e condições','pie.privacidad':'Política de privacidade','pie.desembolsos':'Política de desembolsos',
      'skip':'Ir para o conteúdo','nav.como':'Como funciona','nav.porque':'Por que a Panther7','nav.proyectos':'Para o seu projeto','nav.faq':'Perguntas','nav.cuenta':'Minha conta','nav.registro':'Criar conta',
      'hero.h1':'Invista em ativos reais, direto da sua wallet em USDT.','hero.lead':'A Panther7 transforma projetos reais em tokens para que você participe a partir de valores pequenos e acompanhe cada pagamento com total clareza.',
      'hero.cta1':'Criar minha conta','hero.cta2':'Ver como funciona','hero.p1':'Contas verificadas','hero.p2':'Um fiduciário por projeto','hero.p3':'Depósitos em USDT, ACH Panamá ou cartão',
      'flujo.a':'Ativo real','flujo.as':'Projeto com fiduciário e documentos','flujo.t':'Token','flujo.ts':'Sua participação, registrada em blockchain','flujo.w':'Sua wallet','flujo.nota':'Exemplo ilustrativo',
      'como.h2':'Quatro passos, tudo em um só lugar','como.p':'Sem papelada espalhada: você cria sua conta, deposita, escolhe e acompanha, tudo no mesmo portal.',
      'como.s1t':'Crie e verifique sua conta','como.s1p':'Cadastre-se em minutos e conclua sua verificação uma única vez.',
      'como.s2t':'Deposite na sua wallet','como.s2p':'Deposite com USDT, transferência, ACH Panamá ou cartão. Seu saldo é creditado 1 para 1 em USDT.',
      'como.s3t':'Escolha um projeto','como.s3p':'Confira os dados, o cronograma de pagamentos e os documentos do ativo antes de investir.',
      'como.s4t':'Receba e acompanhe','como.s4p':'Cada pagamento e cada movimento fica registrado com sua referência no seu extrato.',
      'por.h2':'Pensado para que você saiba onde está o seu dinheiro',
      'por.a1t':'Documentação à vista','por.a1p':'Cada projeto reúne a documentação do ativo e a transferência ao token, incluindo o documento autenticado em cartório, para você consultar antes de decidir.',
      'por.a2t':'Transparência em cada movimento','por.a2p':'Movimentos com referência, extrato e detalhe de cada pagamento.',
      'por.a3t':'Uma moeda, sem confusão','por.a3p':'Sua wallet e seus investimentos são expressos em USDT, 1 para 1.',
      'por.a4t':'Cartão e wallet','por.a4p':'Gerencie seu cartão e suas transferências no mesmo portal.',
      'por.a5t':'No seu idioma','por.a5p':'Portal disponível em espanhol, inglês e português.',
      'pro.h2':'Você tem um projeto?','pro.p':'Se o seu projeto precisa de capital, a Panther7 ajuda a estruturá-lo, tokenizá-lo e apresentá-lo a investidores verificados.',
      'pro.l1':'Estrutura com fiduciário','pro.l2':'Tokenização da participação','pro.l3':'Pagamentos programados aos investidores','pro.cta':'Conte-nos sobre o seu projeto',
      'inv.h2':'Quer investir?','inv.p':'Comece com um valor confortável e diversifique entre projetos no seu ritmo.','inv.cta':'Criar minha conta',
      'faq.h2':'Perguntas frequentes',
      'faq.q1':'O que significa um investimento tokenizado?','faq.a1':'Sua participação em um projeto é representada por um token registrado em blockchain, o que mantém um registro claro de quem participa e em que proporção.',
      'faq.q2':'Como deposito na minha wallet?','faq.a2':'Você pode depositar com USDT, transferência internacional, ACH Panamá ou cartão (com valor máximo por depósito). Tudo é creditado em USDT, 1 para 1.',
      'faq.q3':'Preciso verificar minha conta?','faq.a3':'Sim. A verificação é feita uma única vez e é necessária para operar e para pagar com cartão.',
      'faq.q4':'O que é USDT?','faq.a4':'É uma moeda digital criada para manter um valor equivalente a um dólar americano. Na Panther7, seu saldo e seus investimentos são expressos em USDT.',
      'faq.q5':'Como acompanho meus investimentos?','faq.a5':'No seu portal você vê seus investimentos, os pagamentos programados e todos os seus movimentos com a referência.',
      'fin.h2':'Comece hoje, no seu ritmo','fin.p':'Crie sua conta e conheça os projetos disponíveis.',
      'pie.aviso':'Todo investimento envolve risco, incluindo perda parcial ou total do capital. Resultados passados não garantem resultados futuros. Consulte a documentação de cada projeto antes de investir.'
    }
  };
  var meta = {
    es: ['Panther7 · Invierte en activos reales desde tu wallet en USDT','Panther7 tokeniza proyectos de Latinoamérica para que participes desde montos pequeños. Fondea tu wallet en USDT, elige un proyecto y sigue cada pago desde tu portal.'],
    en: ['Panther7 · Invest in real assets from your USDT wallet','Panther7 tokenizes Latin American projects so you can take part from small amounts. Fund your USDT wallet, choose a project and follow every payment from your portal.'],
    pt: ['Panther7 · Invista em ativos reais direto da sua wallet em USDT','A Panther7 tokeniza projetos da América Latina para que você participe a partir de valores pequenos. Deposite em USDT, escolha um projeto e acompanhe cada pagamento no seu portal.']
  };
  var nodos = document.querySelectorAll('[data-i18n]');
  var originales = {};
  nodos.forEach(function (n) { originales[n.getAttribute('data-i18n')] = n.textContent; });

  function aplicar(lang) {
    document.documentElement.lang = lang;
    nodos.forEach(function (n) {
      var k = n.getAttribute('data-i18n');
      var v = lang === 'es' ? originales[k] : (T[lang] && T[lang][k]);
      if (v != null) n.textContent = v;
    });
    document.title = meta[lang][0];
    var d = document.querySelector('meta[name="description"]'); if (d) d.setAttribute('content', meta[lang][1]);
    document.querySelectorAll('.idioma button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false'); });
  }

  function guardado() {
    try {
      var q = new URLSearchParams(location.search).get('lang');
      if (q && meta[q]) return q;
      var s = localStorage.getItem('p7-idioma-web');
      if (s && meta[s]) return s;
    } catch (e) { /* sin almacenamiento */ }
    return 'es';
  }

  document.querySelectorAll('.idioma button').forEach(function (b) {
    b.addEventListener('click', function () {
      try { localStorage.setItem('p7-idioma-web', b.dataset.lang); } catch (e) { /* sin almacenamiento */ }
      aplicar(b.dataset.lang);
    });
  });

  var inicial = guardado();
  if (inicial !== 'es') aplicar(inicial);

  var nav = document.getElementById('nav');
  var alScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', alScroll, { passive: true }); alScroll();
  var a = document.getElementById('anio'); if (a) a.textContent = new Date().getFullYear();
})();
