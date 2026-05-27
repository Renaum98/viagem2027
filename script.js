// ===== ROTEIROS POR DESTINO =====
var roteiros = {
  patagonia: [
    {
      code:'FTE', dotClass:'dot-blue', name:'El Calafate', days:'Dias 1–3 · 2 noites', transit: null,
      attractions:[
        {wiki:'Perito_Moreno_Glacier', lat:-50.4967, lng:-73.0377, emoji:'🧊', name:'Glaciar Perito Moreno', feeType:'paid', fee:'$35 USD (~R$ 203)', feeNote:'ingresso Parque Los Glaciares', desc:'Um dos glaciares mais espetaculares do planeta — 30km de comprimento e 60m de altura. Avança até 2m/dia, causando calving de blocos gigantes. As passarelas panorâmicas estão incluídas no ingresso. Passeio de barco frontal ~$30 USD (~R$ 174) separado.', tags:['~3h de visita','78km de El Calafate','Pasarelas inclusas']},
        {wiki:'Laguna_Nimez', lat:-50.3284, lng:-72.2729, emoji:'🦩', name:'Laguna Nimez — Reserva de Aves', feeType:'paid', fee:'~$5 USD (~R$ 29)', feeNote:'reserva ecológica', desc:'Reserva a 10 minutos do centro de El Calafate. Habitat de flamingos-patagônicos, patos e 130+ espécies de aves. Ideal para manhã ou tarde antes do glaciar.', tags:['~1h de visita','No centro da cidade','Flamingos patagônicos']},
        {wiki:'El_Calafate', lat:-50.3379, lng:-72.2648, emoji:'🌅', name:'Centro e Costanera', feeType:'free', fee:'Gratuito', feeNote:'', desc:'Calçadão à beira do Lago Argentino com ótimas vistas. Restaurantes e lojas de artesanato na Av. del Libertador. Pôr do sol sobre o lago é espetacular.', tags:['Qualquer horário','A pé','Vista do Lago Argentino']},
        {wiki:'Gaucho', lat:-50.4700, lng:-72.6500, emoji:'🐴', name:'Cabalgata em estância — Nibepo Aike', feeType:'paid', fee:'~$60–90 USD (~R$ 350–520)', feeNote:'passeio opcional', desc:'Cavalgada guiada por gauchos em estância tradicional às margens do Lago Argentino, com paisagens de estepe patagônica. Costuma incluir asado (churrasco campeiro). Reserve com antecedência na alta temporada.', tags:['Opcional','~3–4h ou dia inteiro','Asado incluso em alguns pacotes']}
      ]
    },
    {
      code:'CHT', dotClass:'dot-teal', name:'El Chaltén', days:'Dias 3–6 · 3 noites',
      transit:{icon:'ti-bus', text:'3h de ônibus de El Calafate · trilhas saem da própria cidade — não precisa de carro aqui'},
      attractions:[
        {wiki:'Fitz_Roy', lat:-49.2720, lng:-72.9920, emoji:'⛰️', name:'Laguna de los Tres — Fitz Roy', feeType:'free', fee:'Gratuito', feeNote:'Parque Los Glaciares — acesso pela cidade', desc:'A trilha mais icônica da Patagônia argentina. 21km ida e volta, 1.200m de desnível. Chegando ao mirante você enfrenta o Fitz Roy de frente com a laguna turquesa abaixo. Saída recomendada às 5h para pegar o nascer do sol no cume.', tags:['~8–10h','21km / 1.200m desnível','Nível difícil']},
        {wiki:'Cerro_Torre', lat:-49.3000, lng:-73.0700, emoji:'🏔️', name:'Laguna Torre — Cerro Torre', feeType:'free', fee:'Gratuito', feeNote:'Parque Los Glaciares', desc:'18km ida e volta até a laguna com vista frontal ao Cerro Torre (3.128m). Mais tranquila que a trilha do Fitz Roy. Mirador Maestri no final oferece vista do glaciar na base do Cerro.', tags:['~6–8h','18km / 400m desnível','Nível moderado']},
        {wiki:'El_Chaltén', lat:-49.3150, lng:-72.8830, emoji:'💧', name:'Chorrillo del Salto', feeType:'free', fee:'Gratuito', feeNote:'', desc:'Cachoeira a 4km da entrada do vilarejo. Trilha fácil de 30 minutos — ótima para o primeiro dia, antes do corpo se acostumar com o esforço. Águas turquesa típicas da Patagônia.', tags:['~1h','4km da cidade','Nível fácil']},
        {wiki:'Gaucho', lat:-49.3300, lng:-72.8860, emoji:'🐴', name:'Cabalgata ao Vale do Río de las Vueltas', feeType:'paid', fee:'~$45–70 USD (~R$ 260–405)', feeNote:'passeio opcional', desc:'Cavalgada por trilhas e bosques de lengas no vale do Río de las Vueltas, com vistas ao maciço do Fitz Roy. Alternativa leve para um dia de descanso entre as trilhas pesadas. Operadores locais na cidade.', tags:['Opcional','~2–4h','Descanso entre trilhas']}
      ]
    },
    {
      code:'PNT', dotClass:'dot-purple', name:'Puerto Natales', days:'Dia 7 · 1–2 noites',
      transit:{icon:'ti-bus', text:'~5–6h de ônibus cruzando a fronteira Argentina → Chile · migração feita pela empresa'},
      attractions:[
        {wiki:'Cueva_del_Milodón_Natural_Monument', lat:-51.5670, lng:-72.6170, emoji:'🦴', name:'Cueva del Milodón', feeType:'paid', fee:'~$8.500 CLP (~R$ 56)', feeNote:'monumento natural nacional', desc:'Caverna pré-histórica onde foram encontrados restos do milodón — mamífero gigante extinto há 10.000 anos. A caverna tem 30m de altura e 80m de profundidade. Inclui réplica em tamanho real do animal. A 24km de Puerto Natales — ideal para visitar no caminho de chegada.', tags:['~2h','24km de Puerto Natales','Monumento Nacional']},
        {wiki:'Puerto_Natales', lat:-51.7236, lng:-72.5064, emoji:'🌊', name:'Costanera — Seno Última Esperanza', feeType:'free', fee:'Gratuito', feeNote:'', desc:'Puerto Natales fica num fiorde patagônico com vistas espetaculares às montanhas nevadas. O pôr do sol a partir da costanera é um dos melhores momentos da viagem. Frutos do mar frescos nos restaurantes do centro.', tags:['A qualquer hora','Centro da cidade','Vista dos fiordes']},
        {wiki:'Cerro_Dorotea', lat:-51.7000, lng:-72.4700, emoji:'🗻', name:'Mirador Cerro Dorotea', feeType:'paid', fee:'~$3.000 CLP (~R$ 20)', feeNote:'propriedade privada', desc:'Trilha de 7km com subida de 500m terminando num mirante 360° sobre Puerto Natales, o fiorde e as torres do TDP ao fundo. Ótima atividade de aquecimento antes do parque.', tags:['~3–4h','7km / 500m desnível','Vista 360° da região']}
      ]
    },
    {
      code:'TDP', dotClass:'dot-amber', name:'Torres del Paine', days:'Dias 8–11 · 3–4 dias',
      transit:{icon:'ti-car', text:'~1h de Puerto Natales · carro-dia alugado em Natales ou shuttle do parque · Ingresso: $35 USD (~R$ 203) por pessoa'},
      attractions:[
        {wiki:'Torres_del_Paine_National_Park', lat:-50.9423, lng:-72.9869, emoji:'🗼', name:'Mirador Las Torres — Base das Torres', feeType:'inc', fee:'Incluso no ingresso', feeNote:'ingresso $35 USD (~R$ 203)', desc:'A trilha mais famosa do parque. 18km ida e volta, 800m de desnível até a laguna Azul com as três torres de granito. Saída às 4h para o nascer do sol. A subida final em rocha solta é exigente, mas a vista recompensa.', tags:['~8–10h','18km / 800m desnível','Nível difícil']},
        {wiki:'French_Valley', lat:-51.0000, lng:-73.0500, emoji:'🏔️', name:'Valle del Francés', feeType:'inc', fee:'Incluso no ingresso', feeNote:'', desc:'O trecho mais selvagem do Circuito W. Vale glaciar com paredes de 2.000m, avalanches de gelo audíveis e cóndores voando. Mirador Británico no topo oferece vista das três faces do parque ao mesmo tempo.', tags:['~8–10h','Nível moderado/difícil','Cóndores e avalanches']},
        {wiki:'Grey_Glacier', lat:-51.0500, lng:-73.2000, emoji:'💎', name:'Glaciar Grey', feeType:'inc', fee:'Incluso no ingresso', feeNote:'Barco separado ~$80 USD (~R$ 464)', desc:'Glaciar de 270km² descendo do Campo de Gelo Patagônico Sul. Pode ser visto da trilha (gratuito) ou de barco, que leva até a face com icebergs ao redor. Uma das experiências mais impressionantes do parque.', tags:['Trilha ~5h gratuita','Barco ~$80 USD opcional','Campo de Gelo Sul']},
        {wiki:'Torres_del_Paine_National_Park', lat:-51.0800, lng:-72.9800, emoji:'💧', name:'Salto Grande', feeType:'inc', fee:'Incluso no ingresso', feeNote:'', desc:'Cascata onde o Lago Nordenskjöld descarrega no Lago Pehoé. Vista espetacular das Torres ao fundo. A 1km do estacionamento Pudeto — ideal ao chegar ou sair do parque. Amanhecer e pôr do sol são memoráveis.', tags:['~30min','1km do estacionamento','Vista das Torres']},
        {wiki:'Gaucho', lat:-51.0000, lng:-72.8300, emoji:'🐴', name:'Cabalgata no setor leste do parque', feeType:'paid', fee:'~$70–110 USD (~R$ 405–640)', feeNote:'passeio opcional · à parte do ingresso', desc:'Cavalgadas guiadas pelo setor Laguna Amarga / Serrano, com vistas frontais ao maciço Paine por trilhas onde não passam veículos. Operadas por estâncias parceiras do parque. Reserve com antecedência.', tags:['Opcional','~3–5h','Vistas exclusivas do maciço']}
      ]
    }
  ],

  ushuaia: [
    {
      code:'USH', dotClass:'dot-blue', name:'Ushuaia — cidade', days:'Dias 1–2 · 2 noites', transit: null,
      attractions:[
        {wiki:'Martial_Glacier', lat:-54.7830, lng:-68.4000, emoji:'🏔️', name:'Glaciar Martial', feeType:'paid', fee:'~$15–20 USD (~R$ 87–116)', feeNote:'aerosilla opcional', desc:'Mirante natural sobre Ushuaia e o Canal Beagle, a 7km do centro. Trilha curta até a base do glaciar; a aerosilla (teleférico) encurta a subida quando aberta. Ótimo para o primeiro dia de aclimatação e pôr do sol.', tags:['~2–3h','7km do centro','Vista do Canal Beagle']},
        {wiki:'Ushuaia_Prison', lat:-54.8050, lng:-68.3020, emoji:'⚓', name:'Museu Marítimo e do Presídio', feeType:'paid', fee:'~$25 USD (~R$ 145)', feeNote:'ingresso do museu', desc:'Antigo presídio do fim do mundo, hoje museu sobre a história da cidade, da navegação antártica e dos primeiros colonos. Ótima opção para um dia de vento ou chuva. Fica no centro.', tags:['~2h','No centro','História do fim do mundo']},
        {wiki:'Ushuaia', lat:-54.8074, lng:-68.3047, emoji:'🌅', name:'Centro e Costanera do Canal Beagle', feeType:'free', fee:'Gratuito', feeNote:'', desc:'Calçadão à beira do Canal Beagle, com o letreiro "Ushuaia — Fin del Mundo", restaurantes de centolla (caranguejo-real) e lojas. Pôr do sol sobre o canal e as montanhas nevadas ao fundo.', tags:['Qualquer horário','A pé','Fim do mundo']}
      ]
    },
    {
      code:'PNTF', dotClass:'dot-teal', name:'PN Tierra del Fuego', days:'Dia 3 · day trip',
      transit:{icon:'ti-car', text:'~12 km a oeste pela Ruta Nacional 3 · Ingresso: ~$26 USD (~R$ 150) por pessoa'},
      attractions:[
        {wiki:'Tierra_del_Fuego_National_Park', lat:-54.8500, lng:-68.5700, emoji:'🌲', name:'Bahía Lapataia — fim da Ruta 3', feeType:'inc', fee:'Incluso no ingresso', feeNote:'ingresso ~$26 USD (~R$ 150)', desc:'O ponto onde termina a Ruta Nacional 3, a 3.063 km de Buenos Aires — o "fim da estrada" das Américas. A Senda Costera (8km) margeia o Canal Beagle por floresta subantártica de lengas até a baía. Castores e aves pelo caminho.', tags:['~4–6h','Senda Costera 8km','Fim da Ruta 3']},
        {wiki:'Tierra_del_Fuego_National_Park', lat:-54.8300, lng:-68.5500, emoji:'🏞️', name:'Lago Roca e Laguna Negra', feeType:'inc', fee:'Incluso no ingresso', feeNote:'', desc:'Trilhas leves às margens do Lago Roca, na fronteira com o Chile, e à turfeira da Laguna Negra. Área com camping agreste dentro do parque — base para quem opta por acampar uma noite.', tags:['~2–3h','Trilhas leves','Camping no parque']},
        {wiki:'Southern_Fuegian_Railway', lat:-54.8170, lng:-68.4830, emoji:'🚂', name:'Tren del Fin del Mundo', feeType:'paid', fee:'~$45 USD (~R$ 260)', feeNote:'passeio opcional', desc:'Ferrovia histórica usada pelos presos para cortar lenha, hoje passeio turístico de bitola estreita que entra no parque por bosques e cascatas. Curto e cênico, mas opcional — dá para conhecer o parque de carro sem ele.', tags:['Opcional','~1h45','Trem histórico a vapor']}
      ]
    },
    {
      code:'BGL', dotClass:'dot-purple', name:'Canal Beagle', days:'Dia 4 · navegação',
      transit:{icon:'ti-anchor', text:'Saída do porto no centro de Ushuaia · navegações de ~3h a dia inteiro'},
      attractions:[
        {wiki:'Les_Éclaireurs_Lighthouse', lat:-54.8722, lng:-68.0814, emoji:'⛵', name:'Faro Les Éclaireurs', feeType:'paid', fee:'~$50–70 USD (~R$ 290–405)', feeNote:'navegação ~3h', desc:'O "Farol do Fim do Mundo", sobre um ilhote no Canal Beagle. A navegação clássica passa por ele e pelas ilhas com colônias de fauna. Mar costuma ser calmo dentro do canal. Reserve no porto ou online.', tags:['~3h','Saída do porto','Farol icônico']},
        {wiki:'Beagle_Channel', lat:-54.8800, lng:-68.2000, emoji:'🦭', name:'Isla de los Lobos e dos Pássaros', feeType:'inc', fee:'Incluso na navegação', feeNote:'', desc:'Ilhotas com colônias de lobos-marinhos-de-um-pelo, cormorões imperiais e gaivotas. A maioria das navegações para ao lado para fotos. Leve casaco corta-vento — o convés é frio mesmo no verão.', tags:['Incluso na navegação','Lobos-marinhos','Cormorões imperiais']},
        {wiki:'Magellanic_penguin', lat:-54.8939, lng:-67.3819, emoji:'🐧', name:'Pingüinera — Isla Martillo', feeType:'paid', fee:'~$80–100 USD (~R$ 465–580)', feeNote:'passeio opcional · Piratour', desc:'Colônia de pinguins-de-magalhães (e alguns papua e rei) na Isla Martillo, perto da Estancia Harberton. A Piratour é a única operadora autorizada a desembarcar e caminhar entre os pinguins. Esgota cedo — reserve com meses de antecedência.', tags:['Opcional','~½ dia','Desembarque entre pinguins']}
      ]
    },
    {
      code:'LAG', dotClass:'dot-amber', name:'Lagos e Cordilheira', days:'Dias 5–6 · day trips',
      transit:{icon:'ti-car', text:'Ruta 3 ao norte e Paso Garibaldi · estradas com trechos de ripio e possível neve'},
      attractions:[
        {wiki:'Fuegian_Andes', lat:-54.7170, lng:-68.1000, emoji:'💧', name:'Laguna Esmeralda', feeType:'free', fee:'Gratuito', feeNote:'acesso pelo Valle Tierra Mayor', desc:'A trilha mais bonita perto da cidade: 9km ida e volta por turfeiras e bosques até uma laguna de água turquesa-glacial ao pé de um glaciar. Pode ter lama e neve no início da primavera — bota impermeável é essencial.', tags:['~4h','9km ida e volta','Nível moderado']},
        {wiki:'Lake_Fagnano', lat:-54.6000, lng:-67.7500, emoji:'🏞️', name:'Lago Escondido e Lago Fagnano', feeType:'free', fee:'Gratuito', feeNote:'mirante no Paso Garibaldi', desc:'Subindo a Ruta 3 ao norte, o Paso Garibaldi abre um mirante sobre o Lago Escondido. Mais adiante, o imenso Lago Fagnano (Khami) cruza a ilha até o Chile. Paradas cênicas de carro, com cafés e parrillas no caminho.', tags:['~½ dia','Paso Garibaldi','Lagos fueguinos']},
        {wiki:'Gaucho', lat:-54.7200, lng:-68.0500, emoji:'🐴', name:'Cabalgata no Valle Tierra Mayor', feeType:'paid', fee:'~$50–80 USD (~R$ 290–465)', feeNote:'passeio opcional', desc:'Cavalgadas guiadas pelo Valle Tierra Mayor, entre montanhas nevadas e turfeiras, a ~20 min da cidade. Centros de aventura na Ruta 3 também oferecem trenó com cães e caminhadas com raquetes de neve no início da temporada.', tags:['Opcional','~2–3h','Vale entre montanhas']},
        {wiki:'Cerro_Castor', lat:-54.7333, lng:-68.0167, emoji:'⛷️', name:'Cerro Castor — esqui', feeType:'paid', fee:'~$60–90 USD (~R$ 350–520)', feeNote:'passe + aluguel · opcional', desc:'A estação de esqui mais austral do mundo, a 26km de Ushuaia. A temporada costuma ir de junho a início de outubro — em set/início de out ainda pode haver neve esquiável. Aluguel de equipamento no local. Totalmente opcional.', tags:['Opcional','26km do centro','Esqui mais austral']}
      ]
    }
  ],

  bariloche: [
    {
      code:'BRC', dotClass:'dot-blue', name:'Centro & Nahuel Huapi', days:'Dias 1–2 · 2 noites', transit: null,
      attractions:[
        {wiki:'San_Carlos_de_Bariloche', lat:-41.1335, lng:-71.3103, emoji:'🏛️', name:'Centro Cívico e Catedral', feeType:'free', fee:'Gratuito', feeNote:'', desc:'O coração de Bariloche em pedra e madeira estilo alpino, com vista ao Lago Nahuel Huapi. A poucos passos ficam a Catedral, a rua Mitre (chocolaterias) e os mercados para abastecer a cozinha. Ótimo primeiro dia de aclimatação, tudo a pé.', tags:['Qualquer horário','A pé','Vista do lago']},
        {wiki:'Cerro_Campanario', lat:-41.1086, lng:-71.4250, emoji:'🚡', name:'Cerro Campanario — aerosilla', feeType:'paid', fee:'~$10–12 USD (~R$ 58–70)', feeNote:'aerosilla curta e barata', desc:'Eleito uma das melhores vistas do mundo pela National Geographic: a 360° abrange Nahuel Huapi, Llao Llao, Moreno e os cerros nevados. A aerosilla é curta e barata; dá para subir a pé de graça em ~40 min por quem quiser economizar. Melhor passeio custo-benefício da viagem.', tags:['~1–2h','Subida a pé grátis opcional','Mirante 360°']},
        {wiki:'Bariloche', lat:-41.1290, lng:-71.3500, emoji:'🏖️', name:'Playa Bonita e Costanera', feeType:'free', fee:'Gratuito', feeNote:'', desc:'Praia de areia clara à beira do Nahuel Huapi, no km 8 da Av. Bustillo, com a Isla Huemul à frente. Parada gratuita perfeita para o pôr do sol no caminho do centro ao Circuito Chico.', tags:['Qualquer horário','Km 8 Av. Bustillo','Pôr do sol no lago']},
        {wiki:'Cerro_Otto', lat:-41.1500, lng:-71.3700, emoji:'🎡', name:'Cerro Otto — teleférico', feeType:'paid', fee:'~$25–35 USD (~R$ 145–203)', feeNote:'passeio opcional', desc:'Teleférico até o cume com confeitaria giratória e vista de Bariloche. Caro para o que entrega — dá para subir a pé ou de carro pela estrada de ripio de graça/quase. Mantido como opcional para dia de chuva.', tags:['Opcional','Subida grátis a pé/carro','Confeitaria giratória']}
      ]
    },
    {
      code:'CHC', dotClass:'dot-teal', name:'Circuito Chico & Llao Llao', days:'Dias 3–4 · day trips',
      transit:{icon:'ti-car', text:'Av. Bustillo a oeste · ~25 km do centro · de carro ou ônibus de linha (linha 20) — passeio quase todo gratuito'},
      attractions:[
        {wiki:'Llao_Llao_Municipal_Park', lat:-41.0560, lng:-71.5360, emoji:'🌲', name:'Bosque & trilhas do Parque Llao Llao', feeType:'free', fee:'Gratuito', feeNote:'parque municipal', desc:'Trilhas curtas e gratuitas pela floresta valdiviana: Lago Escondido, Villa Tacul, Brazo de la Tristeza e o pequeno Bosque de Arrayanes. Mirante do hotel Llao Llao logo ao lado. O melhor dia de natureza sem gastar nada.', tags:['~3–5h','Trilhas leves','Floresta e lagos']},
        {wiki:'Circuito_Chico', lat:-41.0760, lng:-71.5230, emoji:'📷', name:'Punto Panorámico do Circuito Chico', feeType:'free', fee:'Gratuito', feeNote:'', desc:'Mirante clássico sobre o Lago Moreno e a península de Llao Llao, no ponto alto do Circuito Chico. Parada rápida e gratuita de carro. Combine com a Capilla San Eduardo e a Cervecería Patagonia ao lado (consumo opcional).', tags:['~30min','Parada de carro','Vista do Lago Moreno']},
        {wiki:'Colonia_Suiza,_Río_Negro', lat:-41.0930, lng:-71.5170, emoji:'🧀', name:'Colonia Suiza', feeType:'free', fee:'Gratuito', feeNote:'feira aos fins de semana', desc:'Vilarejo fundado por colonos suíços, com feira de artesanato e o curanto (prato cozido sob a terra) preparado às quartas e domingos. Andar pela aldeia é grátis; provar o curanto é opcional. Boa pausa barata no Circuito Chico.', tags:['~2h','Feira fim de semana','Curanto opcional']},
        {wiki:'Victoria_Island_(Argentina)', lat:-40.9500, lng:-71.5300, emoji:'⛴️', name:'Isla Victoria & Bosque de Arrayanes', feeType:'paid', fee:'~$60–90 USD (~R$ 350–520)', feeNote:'navegação · passeio opcional', desc:'Navegação saindo de Puerto Pañuelo até a Isla Victoria e o bosque de árvores de arrayán de casca canela, no PN Los Arrayanes. Cênico, porém o passeio pago mais caro da região — mantido como opcional. Reserve no porto ou online.', tags:['Opcional','~½ a 1 dia','Saída de Puerto Pañuelo']}
      ]
    },
    {
      code:'CAT', dotClass:'dot-purple', name:'Catedral, Frey & Gutiérrez', days:'Dia 5 · trilha',
      transit:{icon:'ti-car', text:'~20 km ao sul pela base do Cerro Catedral · de carro ou ônibus (linha 55)'},
      attractions:[
        {wiki:'Refugio_Frey', lat:-41.1900, lng:-71.4800, emoji:'🥾', name:'Refugio Frey — trekking', feeType:'free', fee:'Gratuito', feeNote:'trilha clássica', desc:'A trilha mais clássica de Bariloche: ~20 km ida e volta saindo da base do Catedral até um refúgio à beira de uma laguna glacial cercada de agulhas de granito. Exigente mas gratuita. Leve comida e água — o refúgio vende algo, mas caro.', tags:['~7–9h','20km ida e volta','Nível difícil']},
        {wiki:'Cerro_Catedral', lat:-41.1750, lng:-71.4420, emoji:'⛷️', name:'Cerro Catedral — base e cadeirinha', feeType:'paid', fee:'~$20–35 USD (~R$ 116–203)', feeNote:'cadeirinha opcional · esqui no inverno', desc:'O maior centro de esqui da América do Sul. Em set/out pode haver neve esquiável (caro, opcional); fora do inverno a base é gratuita e a cadeirinha ao mirante é opcional. Várias trilhas, inclusive o acesso ao Frey, partem daqui.', tags:['Opcional','Base gratuita','Esqui no inverno']},
        {wiki:'Lago_Gutiérrez', lat:-41.2100, lng:-71.4000, emoji:'🛶', name:'Lago Gutiérrez', feeType:'free', fee:'Gratuito', feeNote:'', desc:'Lago de águas calmas a poucos minutos do centro, com praias de pedra, trilhas curtas à Cascada de los Duendes e ponto de saída de caiaque. Banho gelado no verão e ótimo para encerrar o dia de trilha sem custo.', tags:['~2h','Praias e trilhas','Acesso livre']}
      ]
    },
    {
      code:'TRO', dotClass:'dot-amber', name:'Tronador, Mascardi & El Bolsón', days:'Dias 6–7 · day trips',
      transit:{icon:'ti-car', text:'Ruta 40 + Ruta 81 (Tronador, ~90 km, estrada de mão única por horário) · Ruta 40 ao sul para El Bolsón (~120 km)'},
      attractions:[
        {wiki:'Mascardi_Lake', lat:-41.3200, lng:-71.5500, emoji:'🏞️', name:'Lago Mascardi', feeType:'free', fee:'Gratuito', feeNote:'', desc:'Lago de águas turquesa no caminho do Tronador, com praias e mirantes ao longo da Ruta 81. Parada gratuita obrigatória; a estrada de terra ao Tronador é de mão única controlada por horário — confira o sentido antes de entrar.', tags:['~1–2h','A caminho do Tronador','Águas turquesa']},
        {wiki:'Tronador', lat:-41.1800, lng:-71.8800, emoji:'🗻', name:'Cerro Tronador & Ventisquero Negro', feeType:'paid', fee:'Ingresso PN ~$15 USD (~R$ 87)', feeNote:'+ combustível ou excursão', desc:'O gigante de 3.491 m na fronteira com o Chile, com geleiras penduradas e o Ventisquero Negro (geleira coberta de sedimento). Day trip longo: barato se for de carro próprio dividido por 6, caro se for por excursão. Saída cedo pela estrada de horário controlado.', tags:['Dia inteiro','Barato de carro ÷6','Excursão é opcional cara']},
        {wiki:'El_Bolsón', lat:-41.9670, lng:-71.5340, emoji:'🌻', name:'El Bolsón — feria e Cabeza del Indio', feeType:'free', fee:'Gratuito', feeNote:'day trip opcional', desc:'Vilarejo hippie a ~2h ao sul pela Ruta 40, com a famosa feira artesanal (ter/qui/sáb), cervejarias e o mirante gratuito da Cabeza del Indio. Day trip opcional e barato — só combustível dividido por 6. Bom plano B se o Tronador estiver fechado.', tags:['Opcional','~2h de carro','Feira e mirantes grátis']}
      ]
    }
  ]
};

// ===== INFO DO HEADER POR DESTINO =====
var heroInfo = {
  patagonia: {
    title:'Patagônia<br><em>Argentina &amp; Chile</em>',
    sub:'El Calafate · El Chaltén · Puerto Natales · Torres del Paine',
    badges:'<span class="hero-badge">👥 6 pessoas</span><span class="hero-badge">🗓 12 dias</span><span class="hero-badge">🔄 Open-jaw: entra FTE · sai PUQ</span>',
    roteiroTitle:'Roteiro — 12 dias · ônibus + carro-dia'
  },
  ushuaia: {
    title:'Ushuaia<br><em>Terra do Fogo · Argentina</em>',
    sub:'PN Tierra del Fuego · Canal Beagle · Glaciar Martial · Lagos fueguinos',
    badges:'<span class="hero-badge">👥 6 pessoas</span><span class="hero-badge">🗓 6 dias</span><span class="hero-badge">🚗 Carro + day trips</span>',
    roteiroTitle:'Roteiro — 6 dias em Ushuaia'
  },
  bariloche: {
    title:'Bariloche<br><em>Patagônia Andina · Argentina</em>',
    sub:'Nahuel Huapi · Circuito Chico · Llao Llao · Cerro Catedral · Tronador',
    badges:'<span class="hero-badge">👥 6 pessoas</span><span class="hero-badge">🗓 7 dias</span><span class="hero-badge">💰 Custo acessível · carro ÷6</span>',
    roteiroTitle:'Roteiro — 7 dias · base única + day trips'
  }
};

var currentDest = 'patagonia';

function buildRoteiro(dest){
  var c = document.getElementById('roteiro-content');
  var cities = roteiros[dest];
  var h = '';
  cities.forEach(function(city){
    if(city.transit){
      h += '<div class="transit-bar"><i class="ti '+city.transit.icon+'"></i><span>'+city.transit.text+'</span></div>';
    }
    h += '<div class="city-block">';
    h += '<div class="city-header"><div class="city-dot '+city.dotClass+'">'+city.code+'</div><div><div class="city-name">'+city.name+'</div><div class="city-meta">'+city.days+'</div></div></div>';
    city.attractions.forEach(function(a,i){
      var feeClass = a.feeType === 'free' ? 'fee-free' : (a.feeType === 'inc' ? 'fee-inc' : 'fee-paid');
      var feeDisplay = a.fee + (a.feeNote ? ' · '+a.feeNote : '');
      var tagsHtml = a.tags.map(function(t){return '<span class="tag">'+t+'</span>';}).join('');
      h += '<div class="attr-card">';
      h += '<div class="attr-img-wrap"><div class="img-icon">'+a.emoji+'</div></div>';
      h += '<div class="attr-body">';
      h += '<div class="attr-top"><div class="attr-name">'+a.name+'</div><div class="attr-fee '+feeClass+'">'+feeDisplay+'</div></div>';
      h += '<div class="attr-desc">'+a.desc+'</div>';
      h += '<div class="attr-tags">'+tagsHtml+'</div>';
      h += '</div></div>';
    });
    h += '</div>';
  });
  c.innerHTML = h;
  renderMap(dest);
}

// ===== MAPA DAS ATRAÇÕES (Leaflet + OpenStreetMap) =====
var roteiroMap = null, roteiroMarkers = null, roteiroBounds = null;

function renderMap(dest){
  if(typeof L === 'undefined') return;
  if(!roteiroMap){
    roteiroMap = L.map('roteiro-map', { scrollWheelZoom:false });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: '&copy; OpenStreetMap'
    }).addTo(roteiroMap);
    roteiroMarkers = L.layerGroup().addTo(roteiroMap);
  }
  roteiroMarkers.clearLayers();
  var pts = [];
  roteiros[dest].forEach(function(city){
    city.attractions.forEach(function(a){
      if(typeof a.lat !== 'number' || typeof a.lng !== 'number') return;
      var icon = L.divIcon({
        className: 'map-pin',
        html: '<span>'+a.emoji+'</span>',
        iconSize: [30,30],
        iconAnchor: [15,15],
        popupAnchor: [0,-16]
      });
      L.marker([a.lat, a.lng], {icon:icon})
        .bindPopup('<strong>'+a.emoji+' '+a.name+'</strong><br><span style="color:#5a5850">'+city.name+'</span>')
        .addTo(roteiroMarkers);
      pts.push([a.lat, a.lng]);
    });
  });
  if(pts.length){
    roteiroBounds = L.latLngBounds(pts);
    roteiroMap.fitBounds(roteiroBounds, { padding:[30,30] });
  }
}

function refreshMap(){
  if(roteiroMap){
    setTimeout(function(){
      roteiroMap.invalidateSize();
      if(roteiroBounds) roteiroMap.fitBounds(roteiroBounds, { padding:[30,30] });
    }, 120);
  }
}

// ===== PREFIXO DE IDs POR DESTINO =====
function destPrefix(dest){
  return dest==='ushuaia' ? 'u-' : (dest==='bariloche' ? 'b-' : '');
}

// ===== TROCA DE DESTINO =====
function selectDest(dest){
  currentDest = dest;
  document.querySelectorAll('.dest-btn').forEach(function(b){
    b.classList.toggle('active', b.id==='dest-btn-'+dest);
  });
  document.querySelectorAll('.dest-block').forEach(function(b){
    b.style.display = (b.getAttribute('data-dest')===dest) ? '' : 'none';
  });
  var info = heroInfo[dest];
  document.getElementById('hero-title').innerHTML = info.title;
  document.getElementById('hero-sub').textContent = info.sub;
  document.getElementById('hero-badges').innerHTML = info.badges;
  document.getElementById('roteiro-title').textContent = info.roteiroTitle;
  buildRoteiro(dest);
  window.scrollTo({top:0, behavior:'smooth'});
}

// ===== NAVEGAÇÃO ENTRE ABAS =====
function show(id){
  var ids=['perfil','roteiro','orcamento','transporte','hospedagem','equipamentos','dicas'];
  document.querySelectorAll('.nav-btn').forEach(function(b,i){ b.classList.toggle('active', ids[i]===id); });
  document.querySelectorAll('.panel').forEach(function(p){ p.classList.remove('active'); });
  document.getElementById('panel-'+id).classList.add('active');
  if(id==='roteiro') refreshMap();
  window.scrollTo({top:0, behavior:'smooth'});
}

// ===== TOGGLES INTERNOS (escopo por destino) =====
function selectPerfil(dest, p){
  var pre = destPrefix(dest);
  document.getElementById(pre+'card-camping').classList.toggle('sel', p==='camping');
  document.getElementById(pre+'card-airbnb').classList.toggle('sel', p==='airbnb');
  document.getElementById(pre+'desc-camping').style.display = p==='camping'?'block':'none';
  document.getElementById(pre+'desc-airbnb').style.display = p==='airbnb'?'block':'none';
}
function showHosp(dest, p){
  var pre = destPrefix(dest);
  document.getElementById(pre+'hosp-camping').style.display = p==='camping'?'block':'none';
  document.getElementById(pre+'hosp-airbnb').style.display = p==='airbnb'?'block':'none';
  document.getElementById(pre+'btn-h-camping').classList.toggle('active', p==='camping');
  document.getElementById(pre+'btn-h-airbnb').classList.toggle('active', p==='airbnb');
}
function showOrc(dest, p){
  var pre = destPrefix(dest);
  document.getElementById(pre+'orc-camping').style.display = p==='camping'?'block':'none';
  document.getElementById(pre+'orc-airbnb').style.display = p==='airbnb'?'block':'none';
  document.getElementById(pre+'btn-o-camping').classList.toggle('active', p==='camping');
  document.getElementById(pre+'btn-o-airbnb').classList.toggle('active', p==='airbnb');
}

buildRoteiro(currentDest);
