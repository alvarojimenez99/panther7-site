/* Idioma: español por defecto; se recuerda la elección. Ejemplo para forzar uno: ?lang=pt */
(function () {
  var T = {
    es: null, // el HTML ya está en español
    en: {
      'nav.contacto':'Contact','con.h2':'Let\'s talk','con.p':'If you have questions about how to get started, write or call us.','con.mail':'Write to us','con.tel':'Call us','pie.terminos':'Terms and conditions','pie.privacidad':'Privacy policy','pie.desembolsos':'Disbursement policy',
      'skip':'Skip to content','nav.como':'How it works','nav.porque':'Why Panther7','nav.proyectos':'For your project','nav.faq':'FAQ','nav.cuenta':'My account','nav.registro':'Create account',
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
      'tbl.h2':'All your projects, on a single board',
      'tbl.p':'Funding progress and payment status, at a glance.',
      'tbl.c1':'Project',
      'tbl.c2':'Sector',
      'tbl.c3':'Progress',
      'tbl.c4':'Status',
      'tbl.n1':'Retail units',
      'tbl.n1s':'Real estate',
      'tbl.n2':'Cocoa farm',
      'tbl.n2s':'Agriculture',
      'tbl.n3':'Solar park',
      'tbl.n3s':'Energy',
      'tbl.n4':'Delivery fleet',
      'tbl.n4s':'Logistics',
      'tbl.n5':'Coffee roastery',
      'tbl.n5s':'Startup',
      'tbl.e1':'Funding',
      'tbl.e2':'Paying',
      'tbl.e3':'Coming soon',
      'tbl.nota':'Illustrative example: not real projects or figures.',
      'asi.h2':'An assistant that speaks your language',
      'asi.p':'Ask anything about Panther7 and get an instant answer, in Spanish, English or Portuguese, at any hour and from any page.',
      'asi.cta':'Talk to the assistant',
      'asi.nota':'AI assistant. It does not give financial advice.',
      'fi.q4':'Can I sell my tokens before the project ends?',
      'fi.a4':'You can list your tokens for sale on the portal\'s secondary market, and other verified investors can buy them. We do not guarantee there will be a buyer or at what price.',
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
      'ven.t3':'Blockchain wallet',
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
      'ven.addr':'Your address','ven.tk':'Your tokens','ven.tk1':'Commercial units · LOC','ven.tk2':'Verifiable on the public blockchain',
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
      'sim.monto':'Amount (USDT)',
      'sim.plazo':'Term (months)',
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
      'nav.inicio':'Home',
      'nav.portal':'Portal',
      'at.como':'The steps, from account to payment.',
      'at.proy':'Examples and a simulator.',
      'at.portal':'See your dashboard inside.',
      'at.seg':'Transparency and FAQ.',
      'at.nos':'Who we are and who we work with.',
      'at.con':'Write or call us.',
      'sim.p':'Play with the controls and see how your balance could grow.',
      'sim.freq':'Payment frequency',
      'sim.f1':'Monthly',
      'sim.f3':'Quarterly',
      'sim.f6':'Semiannual',
      'sim.esc':'Sample scenario',
      'sim.e1':'Prudent',
      'sim.e2':'Base',
      'sim.e3':'Optimistic',
      'sim.reinv':'Reinvest the payments',
      'sim.est':'Estimated earnings',
      'sim.rend':'Return',
      'sim.cada':'Each payment',
      'sim.grafico':'How your balance grows',
      'sim.cap':'Capital',
      'sim.gan':'Earnings',
      'frm.nombre':'Name',
      'frm.correo':'Email',
      'frm.tema':'Topic',
      'frm.t1':'I want to invest',
      'frm.t2':'I have a project',
      'frm.t3':'Account support',
      'frm.t4':'Other',
      'frm.msg':'Message',
      'frm.cap':'Check: what is',
      'frm.enviar':'Send message',
      'frm.ok':'Thank you! We received your message and will reply soon.',
      'frm.cap_mal':'The check is not correct. Please try again.',
      'frm.val':'Check your name, a valid email and a message of at least 10 characters.',
      'frm.rate':'You sent several messages in a row. Please try again later.',
      'frm.envio':'We could not send it. Write to us at contacto@panther7.com.',
      'hero.h1':'Where capital meets real projects.',
      'hero.lead':'Invest from small amounts in agriculture, energy, startups and more. Or submit your project and get the liquidity it needs. Everything tokenized, everything in plain sight.',
      'hero.cta1':'I want to invest',
      'hero.cta2':'I have a project',
      'hero.p1':'Every project tokenized',
      'hero.p2':'Trustee per project',
      'hero.p3':'Deposits in USDT, ACH Panama or card',
      'dual.i.h':'I want to invest',
      'dual.i.p':'Take part in real projects from small amounts, diversify across sectors and follow every payment from your portal.',
      'dual.i.c':'See how to invest',
      'dual.p.h':'I have a project',
      'dual.p.p':'Get liquidity for your project: we structure it, tokenize it and present it to verified investors.',
      'dual.p.c':'See how to fund it',
      'dif.h2':'Tokenization changes everything',
      'dif.p':'Each project becomes tokens: clear, traceable and accessible digital shares.',
      'dif.1t':'Accessible',
      'dif.1p':'By splitting the project into tokens, you can take part with small amounts.',
      'dif.2t':'Traceable',
      'dif.2p':'Your share is recorded on the blockchain, with every payment and its reference.',
      'dif.3t':'Backed',
      'dif.3p':'Each token is backed by the real asset, with a trustee and a notarized transfer.',
      'dif.c':'Learn about tokenization',
      'tip.h2':'Projects of every kind',
      'tip.p':'If it creates value and can be documented, it can be tokenized.',
      'tip.1':'Agriculture',
      'tip.2':'Energy',
      'tip.3':'Startups',
      'tip.4':'Real estate and commercial',
      'tip.5':'Transport and logistics',
      'tip.6':'And more',
      'bi.h2':'Put your money to work on something real',
      'bi.p':'Concrete projects, with assets and documents you can review before deciding.',
      'bi.1t':'Start small',
      'bi.1p':'Thanks to tokenization you can take part with small amounts, without big barriers.',
      'bi.2t':'Diversify',
      'bi.2p':'Spread your investment across agriculture, energy, startups and other sectors.',
      'bi.3t':'Scheduled payments',
      'bi.3p':'Each project has its schedule: you know when each payment is credited.',
      'bi.4t':'Documents in view',
      'bi.4p':'Review the asset documentation and the notarized transfer from your portal.',
      'bi.5t':'Everything in USDT',
      'bi.5p':'One currency, 1 to 1, no exchange math or surprises.',
      'bi.6t':'Full tracking',
      'bi.6p':'Balance, investments and movements with reference, and your tokens in your blockchain wallet, always available.',
      'fi.h2':'Questions from investors',
      'fi.q1':'How much do I need to start?',
      'fi.a1':'You can start with a small amount. Each project’s minimum appears on its page.',
      'fi.q2':'How do I know when I get paid?',
      'fi.a2':'Each project publishes its schedule. Payments are credited to your wallet and appear on your statement with a reference.',
      'fi.q3':'Does investing carry risk?',
      'fi.a3':'Yes. Any project can face delays or losses, including of capital. That is why we show the documentation and do not promise results.',
      'pr.h2':'Your project needs liquidity. We provide the structure.',
      'pr.p':'Panther7 structures your project with a trustee, tokenizes it and presents it to verified investors. You focus on executing it.',
      'pr.cta':'Submit my project',
      'pr.b1t':'Liquidity',
      'pr.b1p':'Access capital without relying only on traditional banking.',
      'pr.b2t':'More investors',
      'pr.b2p':'By splitting into tokens, many investors can contribute small amounts.',
      'pr.b3t':'Clear structure',
      'pr.b3p':'Trustee, documentation and notarized transfer from the start.',
      'pr.b4t':'Orderly payments',
      'pr.b4p':'A payment schedule to investors, recorded and visible.',
      'pt.h2':'For projects in any sector',
      'pt.p':'These are a few examples. If your project is different, tell us.',
      'pt.1t':'Agriculture',
      'pt.1p':'Crops, livestock and agribusiness that need capital to grow.',
      'pt.2t':'Energy',
      'pt.2p':'Solar, energy efficiency and other initiatives with recurring income.',
      'pt.3t':'Startups',
      'pt.3p':'Businesses with a plan, a team and a documentable cash flow.',
      'pt.4t':'Real estate and commercial',
      'pt.4p':'Retail units, offices and developments with a defined asset and income.',
      'pt.5t':'Transport and logistics',
      'pt.5p':'Fleets, warehouses and supply chains.',
      'pt.6t':'Other',
      'pt.6p':'Health, education, technology and more: we assess each case.',
      'pp.h2':'From first contact to funding',
      'pp.1t':'Tell us',
      'pp.1p':'You send the basic details of your project.',
      'pp.2t':'Assessment',
      'pp.2p':'We review the project, its asset and its viability.',
      'pp.3t':'Structuring',
      'pp.3p':'We define the structure with a trustee and gather the documentation.',
      'pp.4t':'Tokenization',
      'pp.4p':'The asset is transferred with a notarized document and the tokens are issued.',
      'pp.5t':'Opening to investors',
      'pp.5p':'Verified investors review your project and contribute from their wallet.',
      'pp.6t':'Disbursement and payments',
      'pp.6p':'You receive the funds under our disbursement policy and meet the schedule.',
      'rq.h2':'What to have ready',
      'rq.p':'You do not need everything to write to us, but this speeds up the assessment.',
      'rq.1':'Description of the project and its goal',
      'rq.2':'Asset or company documents',
      'rq.3':'Amount you seek and payment plan',
      'rq.4':'Details of those in charge',
      'rq.h3':'Ready to start?',
      'rq.p2':'Write to us and a team member will contact you to learn about your project.',
      'tk.h2':'What does it mean to tokenize a project?',
      'tk.p1':'Tokenizing means representing a share in a real asset or project with digital tokens recorded on the blockchain. Each token is a fraction of the project.',
      'tk.p2':'So instead of one big contribution, many people can take part with small amounts, and each one is clearly recorded.',
      'tk.a1':'One project',
      'tk.a2':'It is split into many shares, each one traceable.',
      'td.h2':'What changes compared with the traditional model',
      'td.p':'A general comparison to understand the difference.',
      'td.trad':'Traditional model',
      'td.r1':'Amount to take part',
      'td.r1a':'Small amounts, by fractions',
      'td.r1b':'High or closed contributions',
      'td.r2':'Record of your share',
      'td.r2a':'Token on the blockchain',
      'td.r2b':'Separate contracts and records',
      'td.r3':'Asset backing',
      'td.r3a':'Trustee and notarized transfer',
      'td.r3b':'Varies by case',
      'td.r4':'Payment tracking',
      'td.r4a':'Every payment with a reference in your portal',
      'td.r4b':'Periodic reports',
      'td.r5':'Documentation',
      'td.r5a':'In view before you decide',
      'td.r5b':'Usually on request',
      'td.r6':'Currency',
      'td.r6a':'USDT, 1 to 1',
      'td.r6b':'Depends on the market and the bank',
      'td.nota':'Indicative, non-exhaustive comparison. Each project details its own terms.',
      'tb.h1':'For investors',
      'tb.i1':'You take part with accessible amounts',
      'tb.i2':'You see your share and every payment',
      'tb.i3':'You review the asset documentation',
      'tb.h2':'For project owners',
      'tb.p1':'You reach many investors at once',
      'tb.p2':'You get liquidity with an orderly structure',
      'tb.p3':'You manage payments with a clear schedule',
      'fin.cta':'Create my account',
      'nav.inv':'Invest',
      'nav.pro':'For projects',
      'nav.tok':'Tokenization',
      'pie.aviso':'All investing involves risk, including partial or total loss of capital. Past results do not guarantee future results. Review each project\'s documentation before investing.'
    },
    pt: {
      'nav.contacto':'Contato','con.h2':'Vamos conversar','con.p':'Se tiver dúvidas sobre como começar, escreva ou ligue para nós.','con.mail':'Escreva para nós','con.tel':'Ligue para nós','pie.terminos':'Termos e condições','pie.privacidad':'Política de privacidade','pie.desembolsos':'Política de desembolsos',
      'skip':'Ir para o conteúdo','nav.como':'Como funciona','nav.porque':'Por que a Panther7','nav.proyectos':'Para o seu projeto','nav.faq':'Perguntas','nav.cuenta':'Minha conta','nav.registro':'Criar conta',
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
      'tbl.h2':'Todos os seus projetos, em um só painel',
      'tbl.p':'Andamento da captação e status dos pagamentos, de relance.',
      'tbl.c1':'Projeto',
      'tbl.c2':'Setor',
      'tbl.c3':'Andamento',
      'tbl.c4':'Status',
      'tbl.n1':'Lojas comerciais',
      'tbl.n1s':'Imobiliário',
      'tbl.n2':'Fazenda de cacau',
      'tbl.n2s':'Agricultura',
      'tbl.n3':'Parque solar',
      'tbl.n3s':'Energia',
      'tbl.n4':'Frota de entregas',
      'tbl.n4s':'Logística',
      'tbl.n5':'Torrefação de café',
      'tbl.n5s':'Empreendimento',
      'tbl.e1':'Captando',
      'tbl.e2':'Pagando',
      'tbl.e3':'Em breve',
      'tbl.nota':'Exemplo ilustrativo: não são projetos nem números reais.',
      'asi.h2':'Um assistente que fala o seu idioma',
      'asi.p':'Pergunte o que quiser sobre a Panther7 e receba resposta na hora, em espanhol, inglês ou português, a qualquer hora e de qualquer página.',
      'asi.cta':'Falar com o assistente',
      'asi.nota':'Assistente com IA. Não oferece assessoria financeira.',
      'fi.q4':'Posso vender meus tokens antes do fim do projeto?',
      'fi.a4':'Você pode colocar seus tokens à venda no mercado secundário do portal, e outros investidores verificados podem comprá-los. Não garantimos que haverá comprador nem por qual preço.',
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
      'ven.t3':'Carteira blockchain',
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
      'ven.addr':'Seu endereço','ven.tk':'Seus tokens','ven.tk1':'Salas comerciais · LOC','ven.tk2':'Verificável na blockchain pública',
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
      'sim.monto':'Valor (USDT)',
      'sim.plazo':'Prazo (meses)',
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
      'nav.inicio':'Início',
      'nav.portal':'Portal',
      'at.como':'Os passos, da conta ao pagamento.',
      'at.proy':'Exemplos e um simulador.',
      'at.portal':'Veja seu painel por dentro.',
      'at.seg':'Transparência e perguntas frequentes.',
      'at.nos':'Quem somos e com quem trabalhamos.',
      'at.con':'Escreva ou ligue.',
      'sim.p':'Brinque com os controles e veja como seu saldo poderia crescer.',
      'sim.freq':'Frequência dos pagamentos',
      'sim.f1':'Mensal',
      'sim.f3':'Trimestral',
      'sim.f6':'Semestral',
      'sim.esc':'Cenário de exemplo',
      'sim.e1':'Prudente',
      'sim.e2':'Base',
      'sim.e3':'Otimista',
      'sim.reinv':'Reinvestir os pagamentos',
      'sim.est':'Ganho estimado',
      'sim.rend':'Rendimento',
      'sim.cada':'Cada pagamento',
      'sim.grafico':'Como seu saldo cresce',
      'sim.cap':'Capital',
      'sim.gan':'Ganho',
      'frm.nombre':'Nome',
      'frm.correo':'E-mail',
      'frm.tema':'Assunto',
      'frm.t1':'Quero investir',
      'frm.t2':'Tenho um projeto',
      'frm.t3':'Suporte da minha conta',
      'frm.t4':'Outro',
      'frm.msg':'Mensagem',
      'frm.cap':'Verificação: quanto é',
      'frm.enviar':'Enviar mensagem',
      'frm.ok':'Obrigado! Recebemos sua mensagem e responderemos em breve.',
      'frm.cap_mal':'A verificação não está correta. Tente novamente.',
      'frm.val':'Confira seu nome, um e-mail válido e uma mensagem de pelo menos 10 caracteres.',
      'frm.rate':'Você enviou várias mensagens seguidas. Tente novamente mais tarde.',
      'frm.envio':'Não foi possível enviar. Escreva para contacto@panther7.com.',
      'hero.h1':'Onde o capital encontra projetos reais.',
      'hero.lead':'Invista a partir de valores pequenos em agricultura, energia, empreendimentos e mais. Ou apresente seu projeto e obtenha a liquidez de que ele precisa. Tudo tokenizado, tudo à vista.',
      'hero.cta1':'Quero investir',
      'hero.cta2':'Tenho um projeto',
      'hero.p1':'Cada projeto tokenizado',
      'hero.p2':'Fiduciária por projeto',
      'hero.p3':'Depósitos em USDT, ACH Panamá ou cartão',
      'dual.i.h':'Quero investir',
      'dual.i.p':'Participe de projetos reais a partir de valores pequenos, diversifique entre setores e acompanhe cada pagamento no seu portal.',
      'dual.i.c':'Ver como investir',
      'dual.p.h':'Tenho um projeto',
      'dual.p.p':'Consiga liquidez para o seu projeto: nós o estruturamos, tokenizamos e apresentamos a investidores verificados.',
      'dual.p.c':'Ver como financiar',
      'dif.h2':'A tokenização muda tudo',
      'dif.p':'Cada projeto vira tokens: participações digitais claras, rastreáveis e acessíveis.',
      'dif.1t':'Acessível',
      'dif.1p':'Ao fracionar o projeto em tokens, você pode participar com valores pequenos.',
      'dif.2t':'Rastreável',
      'dif.2p':'Sua participação fica registrada em blockchain, com cada pagamento e sua referência.',
      'dif.3t':'Respaldada',
      'dif.3p':'Cada token se apoia no ativo real, com fiduciária e transferência autenticada.',
      'dif.c':'Conheça a tokenização',
      'tip.h2':'Projetos de todo tipo',
      'tip.p':'Se gera valor e pode ser documentado, pode ser tokenizado.',
      'tip.1':'Agricultura',
      'tip.2':'Energia',
      'tip.3':'Empreendimentos',
      'tip.4':'Imobiliário e comercial',
      'tip.5':'Transporte e logística',
      'tip.6':'E mais',
      'bi.h2':'Faça seu dinheiro trabalhar em algo real',
      'bi.p':'Projetos concretos, com ativos e documentos que você pode revisar antes de decidir.',
      'bi.1t':'Comece com pouco',
      'bi.1p':'Graças à tokenização você participa com valores pequenos, sem grandes barreiras.',
      'bi.2t':'Diversifique',
      'bi.2p':'Divida seu investimento entre agricultura, energia, empreendimentos e outros setores.',
      'bi.3t':'Pagamentos programados',
      'bi.3p':'Cada projeto tem seu cronograma: você sabe quando cada pagamento é creditado.',
      'bi.4t':'Documentos à vista',
      'bi.4p':'Revise a documentação do ativo e a transferência autenticada no seu portal.',
      'bi.5t':'Tudo em USDT',
      'bi.5p':'Uma só moeda, 1 para 1, sem contas de câmbio nem surpresas.',
      'bi.6t':'Acompanhamento total',
      'bi.6p':'Saldo, investimentos e movimentos com referência, e seus tokens na sua carteira blockchain, sempre disponíveis.',
      'fi.h2':'Dúvidas de quem investe',
      'fi.q1':'Quanto preciso para começar?',
      'fi.a1':'Você pode começar com um valor pequeno. O mínimo de cada projeto aparece na sua ficha.',
      'fi.q2':'Como sei quando recebo meus pagamentos?',
      'fi.a2':'Cada projeto publica seu cronograma. Os pagamentos são creditados na sua wallet e ficam no seu extrato com referência.',
      'fi.q3':'Investir tem riscos?',
      'fi.a3':'Sim. Todo projeto pode ter atrasos ou perdas, inclusive do capital. Por isso mostramos a documentação e não prometemos resultados.',
      'pr.h2':'Seu projeto precisa de liquidez. Nós damos a estrutura.',
      'pr.p':'A Panther7 estrutura seu projeto com uma fiduciária, o tokeniza e o apresenta a investidores verificados. Você se concentra em executá-lo.',
      'pr.cta':'Apresentar meu projeto',
      'pr.b1t':'Liquidez',
      'pr.b1p':'Acesse capital sem depender apenas dos bancos tradicionais.',
      'pr.b2t':'Mais investidores',
      'pr.b2p':'Ao fracionar em tokens, muitos investidores podem aportar valores pequenos.',
      'pr.b3t':'Estrutura clara',
      'pr.b3p':'Fiduciária, documentação e transferência autenticada desde o início.',
      'pr.b4t':'Pagamentos organizados',
      'pr.b4p':'Um cronograma de pagamentos aos investidores, registrado e visível.',
      'pt.h2':'Para projetos de qualquer setor',
      'pt.p':'Estes são alguns exemplos. Se seu projeto é diferente, conte para nós.',
      'pt.1t':'Agricultura',
      'pt.1p':'Cultivos, pecuária e agroindústria que precisam de capital para crescer.',
      'pt.2t':'Energia',
      'pt.2p':'Solar, eficiência energética e outras iniciativas com receita recorrente.',
      'pt.3t':'Empreendimentos',
      'pt.3p':'Negócios com plano, equipe e um fluxo que possa ser documentado.',
      'pt.4t':'Imobiliário e comercial',
      'pt.4p':'Salas, escritórios e empreendimentos com ativo e renda definidos.',
      'pt.5t':'Transporte e logística',
      'pt.5p':'Frotas, armazéns e cadeias de suprimento.',
      'pt.6t':'Outros',
      'pt.6p':'Saúde, educação, tecnologia e mais: avaliamos cada caso.',
      'pp.h2':'Do primeiro contato ao aporte',
      'pp.1t':'Conte para nós',
      'pp.1p':'Você envia os dados básicos do seu projeto.',
      'pp.2t':'Avaliação',
      'pp.2p':'Analisamos o projeto, seu ativo e sua viabilidade.',
      'pp.3t':'Estruturação',
      'pp.3p':'Definimos a estrutura com uma fiduciária e reunimos a documentação.',
      'pp.4t':'Tokenização',
      'pp.4p':'O ativo é transferido com documento autenticado e os tokens são emitidos.',
      'pp.5t':'Abertura a investidores',
      'pp.5p':'Investidores verificados analisam seu projeto e aportam da sua wallet.',
      'pp.6t':'Desembolso e pagamentos',
      'pp.6p':'Você recebe os recursos conforme nossa política de desembolsos e cumpre o cronograma.',
      'rq.h2':'O que convém ter em mãos',
      'rq.p':'Não é preciso ter tudo para nos escrever, mas isso acelera a avaliação.',
      'rq.1':'Descrição do projeto e seu objetivo',
      'rq.2':'Documentos do ativo ou da empresa',
      'rq.3':'Valor buscado e plano de pagamentos',
      'rq.4':'Dados dos responsáveis',
      'rq.h3':'Pronto para começar?',
      'rq.p2':'Escreva para nós e um membro da equipe entrará em contato para conhecer seu projeto.',
      'tk.h2':'O que é tokenizar um projeto?',
      'tk.p1':'Tokenizar é representar a participação em um ativo ou projeto real com tokens digitais registrados em blockchain. Cada token é uma fração do projeto.',
      'tk.p2':'Assim, em vez de um único grande aporte, muitas pessoas podem participar com valores pequenos, e cada uma fica registrada com clareza.',
      'tk.a1':'Um projeto',
      'tk.a2':'É dividido em muitas participações, cada uma rastreável.',
      'td.h2':'O que muda frente ao modelo tradicional',
      'td.p':'Uma comparação geral para entender o diferencial.',
      'td.trad':'Modelo tradicional',
      'td.r1':'Valor para participar',
      'td.r1a':'Valores pequenos, por frações',
      'td.r1b':'Aportes altos ou fechados',
      'td.r2':'Registro da sua participação',
      'td.r2a':'Token em blockchain',
      'td.r2b':'Contratos e registros separados',
      'td.r3':'Respaldo do ativo',
      'td.r3a':'Fiduciária e transferência autenticada',
      'td.r3b':'Varia conforme o caso',
      'td.r4':'Acompanhamento de pagamentos',
      'td.r4a':'Cada pagamento com referência no seu portal',
      'td.r4b':'Relatórios periódicos',
      'td.r5':'Documentação',
      'td.r5a':'À vista antes de decidir',
      'td.r5b':'Normalmente sob solicitação',
      'td.r6':'Moeda',
      'td.r6a':'USDT, 1 para 1',
      'td.r6b':'Depende do mercado e do banco',
      'td.nota':'Comparação orientativa, não exaustiva. Cada projeto detalha suas próprias condições.',
      'tb.h1':'Para quem investe',
      'tb.i1':'Você participa com valores acessíveis',
      'tb.i2':'Você vê sua participação e cada pagamento',
      'tb.i3':'Você revisa a documentação do ativo',
      'tb.h2':'Para quem tem o projeto',
      'tb.p1':'Você alcança muitos investidores ao mesmo tempo',
      'tb.p2':'Você obtém liquidez com uma estrutura organizada',
      'tb.p3':'Você gerencia pagamentos com um cronograma claro',
      'fin.cta':'Criar minha conta',
      'nav.inv':'Investir',
      'nav.pro':'Para projetos',
      'nav.tok':'Tokenização',
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

  // simulador ilustrativo (tasas de ejemplo, no una oferta)
  var simEl = document.getElementById('sim-monto');
  if (simEl) {
    var est = { monto: 500, plazo: 12, freq: 3, tasa: 10 };
    var rango = simEl, salida = document.getElementById('sim-monto-v'), reinv = document.getElementById('sim-reinv');
    var loc = function () { var l = document.documentElement.lang; return l === 'pt' ? 'pt-BR' : l === 'en' ? 'en-US' : 'es-PA'; };
    var f2 = function (n) { return n.toLocaleString(loc(), { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };
    var simular = function () {
      var n = Math.max(1, Math.round(est.plazo / est.freq)), r = (est.tasa / 100) * est.freq / 12, saldo = est.monto, barras = [], cada = est.monto * r;
      for (var i = 1; i <= n; i++) {
        if (reinv.checked) { saldo = saldo * (1 + r); barras.push(saldo); }
        else { barras.push(est.monto + cada * i); }
      }
      var total = barras[n - 1], gan = total - est.monto;
      salida.textContent = est.monto.toLocaleString('en-US');
      document.getElementById('sim-total').textContent = f2(total) + ' USDT';
      document.getElementById('sim-pagos').textContent = f2(gan);
      document.getElementById('sim-rend').textContent = (gan / est.monto * 100).toFixed(1) + '%';
      document.getElementById('sim-cada').textContent = reinv.checked ? '—' : f2(cada);
      var max = total, cont = document.getElementById('sim-barras'); cont.innerHTML = '';
      barras.forEach(function (v, i) {
        var d = document.createElement('div'); d.className = 'barra-s'; d.style.height = (v / max * 100) + '%'; d.title = (i + 1) + ' · ' + f2(v) + ' USDT';
        d.innerHTML = '<i style="height:' + ((v - est.monto) / v * 100) + '%"></i>'; cont.appendChild(d);
      });
    };
    rango.addEventListener('input', function () { est.monto = +rango.value; marcar(); simular(); });
    reinv.addEventListener('change', simular);
    var marcar = function () {
      document.querySelectorAll('.chips[data-grupo="monto"] button').forEach(function (b) { b.classList.toggle('on', +b.dataset.v === est.monto); });
    };
    document.querySelectorAll('.chips').forEach(function (g) {
      g.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        var k = g.dataset.grupo; est[k] = +b.dataset.v;
        if (k === 'monto') rango.value = est.monto;
        g.querySelectorAll('button').forEach(function (o) { o.classList.toggle('on', o === b); });
        simular();
      });
    });
    marcar(); simular();
    document.querySelectorAll('.idioma button').forEach(function (b) { b.addEventListener('click', function () { setTimeout(simular, 0); }); });
  }

  // vistas: una sección a la vez, sin scroll largo
  var VISTAS = ['inicio', 'invertir', 'proyectos', 'tokenizacion', 'seguridad', 'nosotros', 'contacto'];
  var bloques = document.querySelectorAll('[data-vista]');
  document.documentElement.classList.add('con-vistas');
  function vistaDe(id) {
    if (VISTAS.indexOf(id) > -1) return id;
    var el = document.getElementById(id);
    var b = el && el.closest('[data-vista]');
    return b ? b.getAttribute('data-vista').split(' ')[0] : null;
  }
  function mostrar(v, id) {
    bloques.forEach(function (b) { b.hidden = b.getAttribute('data-vista').split(' ').indexOf(v) < 0; });
    document.querySelectorAll('.links a').forEach(function (a) {
      var on = a.getAttribute('href') === '#' + v;
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    var main = document.getElementById('contenido'); main.classList.remove('entra'); void main.offsetWidth; main.classList.add('entra');
    var t = id && id !== v ? document.getElementById(id) : null;
    if (t) t.scrollIntoView(); else window.scrollTo(0, 0);
    var act = document.querySelector('.links a[aria-current]'); if (act && act.scrollIntoView) act.scrollIntoView({ inline: 'center', block: 'nearest' });
  }
  function desdeHash() {
    var id = decodeURIComponent(location.hash.slice(1)); mostrar(vistaDe(id) || 'inicio', id);
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]'); if (!a) return;
    var id = a.getAttribute('href').slice(1); if (!id || id === 'contenido' || !vistaDe(id)) return;
    e.preventDefault(); history.pushState(null, '', '#' + id); desdeHash();
    if (a.dataset.tema) { var sel = document.querySelector('#form-contacto select[name="tema"]'); if (sel) sel.value = a.dataset.tema; }
  });
  window.addEventListener('popstate', desdeHash);
  desdeHash();


  // formulario de contacto con captcha propio
  var fc = document.getElementById('form-contacto');
  if (fc) {
    var capQ = document.getElementById('cap-q'), tok = '', estados = fc.querySelectorAll('.estado');
    var nuevo = function () {
      fetch('contacto.php', { cache: 'no-store' }).then(function (r) { return r.json(); })
        .then(function (d) { capQ.textContent = d.q; tok = d.t; fc.r.value = ''; })
        .catch(function () { capQ.textContent = '…'; avisar('envio'); });
    };
    var avisar = function (cual) { estados.forEach(function (e) { e.hidden = !(cual === 'ok' ? e.classList.contains('ok') : e.getAttribute('data-e') === cual); }); };
    nuevo();
    capQ.parentNode.addEventListener('click', nuevo);
    fc.addEventListener('submit', function (e) {
      e.preventDefault(); avisar('');
      var btn = fc.querySelector('button'); btn.disabled = true;
      var datos = new URLSearchParams(new FormData(fc)); datos.set('t', tok);
      fetch('contacto.php', { method: 'POST', body: datos }).then(function (r) { return r.json(); })
        .then(function (d) { if (d.ok) { fc.reset(); avisar('ok'); } else avisar(d.e || 'envio'); nuevo(); })
        .catch(function () { avisar('envio'); })
        .then(function () { btn.disabled = false; });
    });
  }


  // menú móvil desplegable
  var mb = document.getElementById('menu-btn'), headerNav = document.getElementById('nav');
  if (mb) {
    var cerrarMenu = function () { headerNav.classList.remove('abierto'); mb.setAttribute('aria-expanded', 'false'); };
    mb.addEventListener('click', function () {
      var on = headerNav.classList.toggle('abierto'); mb.setAttribute('aria-expanded', on ? 'true' : 'false');
    });
    document.querySelectorAll('.links a').forEach(function (a) { a.addEventListener('click', cerrarMenu); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') cerrarMenu(); });
    window.addEventListener('resize', function () { if (window.innerWidth > 980) cerrarMenu(); });
  }

  var nav = document.getElementById('nav');
  var alScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', alScroll, { passive: true }); alScroll();
  var a = document.getElementById('anio'); if (a) a.textContent = new Date().getFullYear();
})();

/* Tablero: las letras "giran" al entrar en pantalla (respeta reducir movimiento) */
(function () {
  var t = document.getElementById('tabl');
  if (!t || !('IntersectionObserver' in window)) return;
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var L = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%';
  function girar(el, retardo) {
    var fin = el.textContent, n = fin.length, ini = null;
    el.style.minWidth = el.offsetWidth + 'px';
    function paso(ts) {
      if (ini === null) ini = ts + retardo;
      var p = (ts - ini) / 700;
      if (p < 0) { el.textContent = fin.replace(/\S/g, ' '); return requestAnimationFrame(paso); }
      if (p >= 1) { el.textContent = fin; el.style.minWidth = ''; return; }
      var o = '';
      for (var k = 0; k < n; k++) o += (fin[k] === ' ' || k < p * n) ? fin[k] : L[Math.floor(Math.random() * L.length)];
      el.textContent = o; requestAnimationFrame(paso);
    }
    requestAnimationFrame(paso);
  }
  new IntersectionObserver(function (es, ob) {
    if (!es[0].isIntersecting) return;
    ob.disconnect();
    t.querySelectorAll('.tabl-fila').forEach(function (f, r) {
      f.querySelectorAll('.flap').forEach(function (c, k) { girar(c, r * 160 + k * 60); });
    });
  }, { threshold: 0.35 }).observe(t);
})();
