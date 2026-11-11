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
      'nav.proy':'Projects',
      'nav.seg':'Security',
      'nav.nos':'About',
      'cif.1':'Tokenized projects',
      'cif.2':'Verified investors',
      'cif.3':'USDT tokenized',
      'cif.4':'Payments credited on time',
      'fon.h2':'Fund it your way',
      'fon.p':'Everything is credited 1 to 1 in USDT.',
      'fon.ap':'Send from your crypto wallet and report your transfer.',
      'fon.bp':'Local bank transfer with proof of payment.',
      'fon.c':'Card',
      'fon.cp':'Pay on Stripe’s secure page, up to 500 USDT per deposit.',
      'fon.d':'International transfer',
      'fon.dp':'From your bank abroad.',
      'ven.h2':'Your portal at a glance',
      'ven.p':'Balance, projects and movements in one place. Sample data.',
      'ven.t1':'Dashboard',
      'ven.t2':'Project',
      'ven.t3':'Wallet',
      'ven.saldo':'Available balance',
      'ven.mov':'Latest movements',
      'ven.m1':'Deposit · card',
      'ven.m2':'Project payment',
      'ven.m3':'Investment',
      'ven.avance':'Funding progress',
      'ven.plazo':'Term',
      'ven.pagos':'Payments',
      'ven.docs':'Documents',
      'ven.d1':'Asset documentation',
      'ven.d2':'Transfer to the token (notarized)',
      'ven.addr':'Your address',
      'eje.h2':'What a project looks like',
      'eje.p':'Illustrative examples of how projects are presented. They are not offers.',
      'eje.badge':'Illustrative example',
      'eje.n1':'Commercial units',
      'eje.n2':'Coffee farm',
      'eje.n3':'Transport fleet',
      'eje.u1':'Panama City',
      'eje.u2':'Chiriquí',
      'eje.u3':'Logistics corridor',
      'eje.meta':'Goal',
      'eje.meses':'months',
      'eje.mens':'monthly',
      'eje.trim':'quarterly',
      'eje.sem':'semiannual',
      'eje.fond':'funded',
      'sim.h2':'Simulate your investment',
      'sim.p':'Move the sliders and see what the payment schedule could look like.',
      'sim.monto':'Amount (USDT)',
      'sim.plazo':'Term (months)',
      'sim.est':'Estimated payments',
      'sim.total':'Total at the end',
      'sim.aviso':'Illustrative estimate using a sample rate. It does not guarantee results and is not an offer.',
      'cic.h2':'Each project’s journey',
      'cic.s1t':'Structuring',
      'cic.s1p':'The project is defined with its trustee and the asset documentation is gathered.',
      'cic.s2t':'Transfer and tokenization',
      'cic.s2p':'The asset is transferred with a notarized document and its share becomes tokens.',
      'cic.s3t':'Opening to investors',
      'cic.s3p':'Verified investors review the file and take part from their wallet in USDT.',
      'cic.s4t':'Scheduled payments',
      'cic.s4p':'Each installment of the schedule is credited to the wallets of those taking part.',
      'cic.s5t':'Closing',
      'cic.s5p':'At the end of the term the project closes and everything stays on your statement.',
      'nos.h2':'Who we are',
      'nos.p1':'Panther7 exists to make investing in real projects across the region simpler, clearer and more accessible.',
      'nos.p2':'We combine trust structures, verifiable documentation and tokenization technology so you know what you buy and how you get paid.',
      'nos.v1':'Transparency',
      'nos.v1p':'Documents and movements always in view.',
      'nos.v2':'Access',
      'nos.v2p':'Small amounts, no needless barriers.',
      'nos.v3':'Tracking',
      'nos.v3p':'Every payment with its reference.',
      'nos.aliados':'Partners',
      'nos.slot':'Partner logo',
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
      'nav.proy':'Projetos',
      'nav.seg':'Segurança',
      'nav.nos':'Sobre nós',
      'cif.1':'Projetos tokenizados',
      'cif.2':'Investidores verificados',
      'cif.3':'USDT tokenizados',
      'cif.4':'Pagamentos creditados em dia',
      'fon.h2':'Deposite do seu jeito',
      'fon.p':'Tudo é creditado 1 para 1 em USDT.',
      'fon.ap':'Envie da sua wallet cripto e informe o envio.',
      'fon.bp':'Transferência bancária local com comprovante.',
      'fon.c':'Cartão',
      'fon.cp':'Pague na página segura da Stripe, até 500 USDT por depósito.',
      'fon.d':'Transferência internacional',
      'fon.dp':'Do seu banco no exterior.',
      'ven.h2':'Seu portal à vista',
      'ven.p':'Saldo, projetos e movimentos em um só lugar. Dados de exemplo.',
      'ven.t1':'Painel',
      'ven.t2':'Projeto',
      'ven.t3':'Wallet',
      'ven.saldo':'Saldo disponível',
      'ven.mov':'Últimos movimentos',
      'ven.m1':'Depósito · cartão',
      'ven.m2':'Pagamento de projeto',
      'ven.m3':'Investimento',
      'ven.avance':'Progresso do aporte',
      'ven.plazo':'Prazo',
      'ven.pagos':'Pagamentos',
      'ven.docs':'Documentos',
      'ven.d1':'Documentação do ativo',
      'ven.d2':'Transferência ao token (autenticada)',
      'ven.addr':'Seu endereço',
      'eje.h2':'Como é um projeto',
      'eje.p':'Exemplos ilustrativos de como os projetos são apresentados. Não são ofertas.',
      'eje.badge':'Exemplo ilustrativo',
      'eje.n1':'Salas comerciais',
      'eje.n2':'Plantação de café',
      'eje.n3':'Frota de transporte',
      'eje.u1':'Cidade do Panamá',
      'eje.u2':'Chiriquí',
      'eje.u3':'Corredor logístico',
      'eje.meta':'Meta',
      'eje.meses':'meses',
      'eje.mens':'mensais',
      'eje.trim':'trimestrais',
      'eje.sem':'semestrais',
      'eje.fond':'financiado',
      'sim.h2':'Simule seu investimento',
      'sim.p':'Mova os controles e veja como poderia ser o calendário de pagamentos.',
      'sim.monto':'Valor (USDT)',
      'sim.plazo':'Prazo (meses)',
      'sim.est':'Pagamentos estimados',
      'sim.total':'Total ao final',
      'sim.aviso':'Estimativa ilustrativa com uma taxa de exemplo. Não garante resultados nem é uma oferta.',
      'cic.h2':'A jornada de cada projeto',
      'cic.s1t':'Estruturação',
      'cic.s1p':'O projeto é definido com sua fiduciária e a documentação do ativo é reunida.',
      'cic.s2t':'Transferência e tokenização',
      'cic.s2p':'O ativo é transferido com documento autenticado e sua participação vira tokens.',
      'cic.s3t':'Abertura a investidores',
      'cic.s3p':'Investidores verificados analisam a ficha e participam da sua wallet em USDT.',
      'cic.s4t':'Pagamentos programados',
      'cic.s4p':'Cada parcela do cronograma é creditada na wallet de quem participa.',
      'cic.s5t':'Encerramento',
      'cic.s5p':'Ao fim do prazo o projeto se encerra e tudo fica no seu extrato.',
      'nos.h2':'Quem somos',
      'nos.p1':'A Panther7 nasce para tornar o investimento em projetos reais da região mais simples, claro e acessível.',
      'nos.p2':'Combinamos estrutura fiduciária, documentação verificável e tecnologia de tokenização para você saber o que compra e como recebe.',
      'nos.v1':'Transparência',
      'nos.v1p':'Documentos e movimentos sempre à vista.',
      'nos.v2':'Acesso',
      'nos.v2p':'Valores pequenos, sem barreiras desnecessárias.',
      'nos.v3':'Acompanhamento',
      'nos.v3p':'Cada pagamento com sua referência.',
      'nos.aliados':'Parceiros',
      'nos.slot':'Logo do parceiro',
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


  // pestañas de la ventana de producto
  var tabs = document.querySelectorAll('.tabs [role="tab"]');
  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      tabs.forEach(function (o) {
        var on = o === t; o.setAttribute('aria-selected', on ? 'true' : 'false');
        var p = document.getElementById(o.getAttribute('aria-controls')); if (p) p.hidden = !on;
      });
    });
  });

  // simulador ilustrativo (tasa de ejemplo, no una oferta)
  var TASA_EJEMPLO = 0.10; // anual, solo para la demostración
  var sm = document.getElementById('sim-monto'), sp = document.getElementById('sim-plazo');
  function fmtN(n) { return n.toLocaleString(document.documentElement.lang === 'es' ? 'es-PA' : document.documentElement.lang === 'pt' ? 'pt-BR' : 'en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function simular() {
    if (!sm || !sp) return;
    var m = +sm.value, p = +sp.value, g = m * TASA_EJEMPLO * (p / 12);
    document.getElementById('sim-monto-v').textContent = m.toLocaleString('en-US');
    document.getElementById('sim-plazo-v').textContent = p;
    document.getElementById('sim-pagos').textContent = fmtN(g) + ' USDT';
    document.getElementById('sim-total').textContent = fmtN(m + g) + ' USDT';
  }
  if (sm && sp) { sm.addEventListener('input', simular); sp.addEventListener('input', simular); simular(); }

  var nav = document.getElementById('nav');
  var alScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', alScroll, { passive: true }); alScroll();
  var a = document.getElementById('anio'); if (a) a.textContent = new Date().getFullYear();
})();
