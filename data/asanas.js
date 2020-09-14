export default [
  {
    id: 3,
    name: 'Tadasana',
    slug: 'tadasana',
    alternateNames: ['Samasthiti'],
    meaning: 'Postura da montanha',
    family: 1,
    sanscritWords: [5, 6, 7],
    movements: [8],
    actions: {
      entering:
        '<p>Fique de pé no seu tapetinho, pés unidos e braços ao longo do corpo.</p>',
      legs:
        '<p>Bordas internas dos pés unidas; mantenha os dedões e calcanhares internos unidos e afaste os outros dedos dos pés. Pressiona os quatro cantos do pé igualmente contra o chão; eleve o centro dos arcos dos pés; absorve o tornozelo externo em direção ao interno e eleva tornozelo interno. Distribua igualmente o peso entre os calcanhares e a ponta dos dedos dos pés. Patelas dos joelhos elevadas e olhando para frente.</p>',
      core:
        '<p>Absorva as coxas externas em direção as internas, mova a parte interna das pernas em direção à pelve e para trás girando as coxas de fora para dentro. Parte frontal e superior das coxas para trás e cóccix para frente com a mesma intensidade.</p>',
      trunk:
        '<p>Coluna vertebral longa do cóccix ao topo da cabeça para isso alongue a lombar para cima em direção à torácica, torácica para frente em direção ao esterno. Laterais do tronco longas  da púbis às clavículas; alarga as clavículas do centro para as laterais.</p>',
      arms:
        '<p>Gira os ombros para trás e para baixo; escápulas para dentro em direção o peito; estende os braços ao longo do corpo, palmas viradas para as coxas; braço gira de dentro para fora (bíceps para frente e para fora, tríceps para trás e para dentro); dedos apontados para baixo; polegares unidos aos outros dedos.</p>',
      head:
        '<p>Pescoço longo, garganta relaxada, queixo paralelo ao chão. Parte posterior do crânio em linha com o sacro; olhar em linha com os olhos; relaxa o rosto e respira.</p>',
    },
    premium: {
      advancedActions: [
        'Absorve a parte interna da perna esquerda em direção a parte externa - borda externa do pé contra o chão',
        'Femur in',
      ],
      connections: [
        'Topo da coxa para trás - peso do corpo vai em direção aos calcanhares',
        'Cóccix para frente - alonga a parte anterior do tronco',
        'Escápulas para dentro - expande a caixa torácica para as laterais',
      ],
    },
    teachers: {
      observe: [
        'Patelas elevadas',
        'Pés',
        'Joelhos olhando para a frente',
        'Pela lateral: peso nos calcanhares',
        'Pela lateral: lombar longa, sem jogar costelas anteriores para frente',
      ],
    },
    krama: {
      preparations: [],
      connectedAsanas: [],
      compensations: [],
    },
    health: {
      benefits: [
        'Ensina a arte de ficar em pé corretamente',
        'Corrige problemas posturais',
        'Traz firmeza, força, quietude e solidez',
      ],
      caution: [
        'Parkinson ou problemas nos discos vertebrais posicione-se de frente a uma parede de forma que possa apoiar as palmas das mãos.',
      ],
    },
    curiosities: `<p>No <em>Light On Yoga</em> B.K.S. Iyengar diz que idealmente em tadasana os braços devem estar elevados acima da cabeça, mas por conveniência podem estar ao lado das coxas.</p>`,
  },
  {
    id: 4,
    name: 'Utthita Hasta Padasana',
    slug: 'utthita-hasta-padasana',
    meaning: 'Postura das pernas e braços estendidos',
    family: 1,
    sanscritWords: [1, 8, 9],
    movements: [9],
    actions: {
      entering:
        '<p>A partir de <a href="/asana/tadasana">Tadasana</a> (<i>Samasthiti</i>), une ponta dos dedos em frente ao peito, inspira e salta afastando pernas e braços para as laterais; mãos em linhas com os ombros, palmas viradas para o chão; pés em linhas com os punhos; bordas externas dos pés paralelas às bordas do tapetinho; eleva as patelas.</p>',
      legs:
        '<p>Pressione as bordas externas dos pés contra o chão; eleve o centro dos arcos dos pés; absorve os tornozelos externos; eleva as patelas dos joelhos.</p>',
      core:
        '<p>Topo da coxa para trás e cóccix para frente; absorve a parte externa das pernas em direção à interna e a interna em direção à externa; eleva a púbis.</p>',
      trunk:
        '<p>Estende a parte anterior do tronco da púbis às clavículas; alonga as laterais do tronco.</p>',
      arms:
        '<p>Gira ombros para trás e para baixo; afaste os ombros das orelhas; absorva os tríceps.</p>',
      head: '<p>Mantenha o olhar na altura dos olhos.</p>',
      leaving:
        '<p>Resistindo com pernas e braços bem estendidos, exala e salta voltando para <em>Tadasana</em>.</p>',
    },
    premium: {
      advancedActions: [],
      connections: [],
    },
    teachers: {
      observe: [
        'Distância das pernas',
        'Alinhamento dos pés',
        'Patelas elevadas',
        'Braços em linhas com ombros',
        'Lateral: cóccix para frente, lombar longa, sem jogar costelas anteriores para frente',
        'Tríceps absorvidos',
        'Tornozelos absorvidos',
      ],
    },
    krama: {
      preparations: [],
      connectedAsanas: [],
      compensations: [],
    },
    health: {
      benefits: [],
      caution: [],
    },
  },
  {
    id: 5,
    name: 'Parsva Hasta Padasana',
    slug: 'parsva-hasta-padasana',
    meaning: 'Postura das pernas e braços estendidos',
    family: 1,
    sanscritWords: [4, 8, 9],
    movements: [2],
    actions: {
      entering:
        '<p>A partir de <a href="/asana/tadasana">Tadasana</a> (<i>Samasthiti</i>), inspira e salta para <a href="/asana/utthita-hasta-padasana">Utthita hasta padasana</a>, afastando pernas e braços para as laterais; mãos em linhas com os ombros; pés em linhas com os punhos; eleva as patelas; gira pé esquerdo para dentro; perna e pé direito para fora; alinha calcanhar do pé direito com o centro do arco do pé da frente.</p>',
      legs:
        '<p>Pressione a borda externa do pé esquerdo contra o chão; borda interna do pé direito contra o chão; eleva as patelas dos joelhos; topo da coxa esquerda para trás e centro do glúteo direito para frente; mantenha tornozelo, joelho e topo da coxa da perna direita em linha; absorve a parte externa da perna direita em direção à interna e alonga a parte interna da virilha em direção ao joelho, joelho em direção ao tornozelo e tornozelo em direção ao calcanhar interno.</p>',
      core: '<p>Eleva a púbis.</p>',
      trunk:
        '<p>Resiste com o abdome da direita para esquerda; estende a parte anterior do tronco da púbis às clavículas; alonga as laterais do tronco.</p>',
      arms:
        '<p>Gira ombros para trás e para baixo; afaste os ombros das orelhas; absorva os tríceps.</p>',
      head: '<p>Mantenha o olhar na altura dos olhos.</p>',
      leaving:
        '<p>Gira o pé direito para dentro, perna e pé esquerdo para fora e repete do outro lado.</p>',
    },
    premium: {
      advancedActions: [],
      connections: [],
    },
    teachers: {
      observe: [
        'Patelas elevadas',
        'Alinhamento do calcanhar com arco do pé',
        'Alinhamento da perna da frente',
        'Pelve - topo do coxa e centro do glúteo',
        'Tríceps absorvidos',
      ],
    },
    krama: {
      preparations: [],
      connectedAsanas: [],
      compensations: [],
    },
    health: {
      benefits: [],
      caution: [],
    },
  },
  {
    id: 1,
    name: 'Utthita Trikonasana',
    slug: 'utthita-trikonasana',
    meaning: 'Postura do triângulo estendido',
    family: 1,
    sanscritWords: [1, 2, 3],
    movements: [1, 2, 3],
    videos: ['LyK7zmrRcwo', '1DB2ZV_5E-I'],
    actions: {
      entering:
        '<p>A partir de <a href="/asana/tadasana">Tadasana</a> (<i>Samasthiti</i>), inspira e salta* para utthita hasta padasana. Braços paralelos ao chão, palma das mãos voltada para baixo,punhos em linha com os tornozelos. Gira o pé esquerdo ligeiramente para dentro, perna e pé direito para fora 90º; alinha o calcanhar do pé direito com centro do arco do pé esquerdo (<i>Parsva Hasta Padasana</i>). Observa o alinhamento do tornozelo, joelho e centro do topo da coxa da perna direita; eleva as patelas. Resistindo com peso na borda externa do pé esquerdo e o braço esquerdo bem estendido, exala e flexiona o tronco a partir do quadril; mão direita no tornozelo; eleva o braço esquerdo em linha com o direito.</p>',
      legs:
        '<p>Pressiona a borda externa do pé esquerdo e a borda interna do pé direito contra chão; mantém as patelas elevadas.</p>',
      core:
        '<p>Giro das coxas frontais de dentro para fora; topo da coxa esquerda para trás e centro do glúteo direito para frente; elevar a púbis.</p>',
      trunk:
        '<p>Alongue as laterais do tronco; leva as costelas da lateral esquerda do tronco em direção à direita e alongue a lateral direita. Alongue a coluna lombar em direção a coluna torácica e leve a coluna torácica em direção ao peito.</p>',
      arms:
        '<p>Estende bem os braços e gire os ombros para longe das orelhas. Palma da mão esquerda voltada para frente.</p>',
      head:
        '<p>Alongar as laterais do pescoço; gira a cabeça a partir da base do crânio e olha para o polegar da mão esquerda, olhos e garganta suaves.</p>',
      leaving:
        '<p>Resistindo com o peso no pé esquerdo e braço esquerdo bem estendido; inspira e retorna; gira os pés para o outro lado, repetindo a postura; exala e salta para <i><a href="/asana/tadasana">tadasana</a></i>.</p>',
    },
    premium: {
      advancedActions: [
        'Absorve a parte interna da perna esquerda em direção a parte externa - borda externa do pé contra o chão',
        'Femur in',
      ],
      connections: [
        'Ao pressionar a borda externa e absorver a coxa interna da perna esquerda, há mais espaço para o movimento das costelas da esquerda para a direita que por sua vez gera espaço na cervical para o giro da cabeça',
      ],
    },
    teachers: {
      observe: [
        'Alinhamento de utthita hasta padasana; parte posterior da cabeça em linha com o sacro.',
        'Alinhamento da perna da frente (4 pontos): tornozelo frontal, joelho inferior, joelho superior e centro do topo da coxa.',
        'Ação de parighasana: alongamento das laterais do tronco paralelas entre si.',
        'Giro dos ombros para trás: parte frontal do tronco longa, absorver as escápulas em direção ao peito e alargar as clavículas.',
      ],
    },
    krama: {
      preparations: [{ id: 3 }],
      connectedAsanas: [],
      compensations: [
        {
          id: 3,
          why: 'Ajuda a restaurar a energia entre as posturas em pé.',
        },
      ],
    },
    health: {
      benefits: [
        'Corrige deformidades nas pernas',
        'Alivia dores nas costas e na cervical',
        'Remove rigidez das pernas e quadril',
        'Fortalece tornozelo',
        'Desenvolve o tórax',
      ],
      caution: [
        'Pessoas com problemas nos joelhos, ciclo menstrual e gestantes devem apenas afastar as pernas ao invés de saltar.',
      ],
      contraindications: [],
    },
    curiosities: `<p>Prashant Iyengar escreveu um livro inteiro sobre esta
    postura, chamado The Alpha & Omega of Trikonasana.</p>
<p><strong>Sobre a questão da distância das pernas:</strong>
<ul class="list-disc">
<li>Segundo o livro "Light On Yoga": 90cm a 1m</li>
<li>Preliminary Course - 4 pés (4 x 30,48 = aprox. 1,22 cm)</li>
<li>"Gem for women": 3 pés de distância = aprox 91 cm</li>
</ul>
<blockquote><strong>Opinião pessoal:</strong> a orientação dos punhos com os tornozelos externos parece mais didática e fácil de entender para o aluno. Geralmente dá certo, pq a distância dos pés é relativa a altura, e comprimento das pernas e tronco. Salvo algumas exceções onde o alunos tem o tronco curto e pernas e braços longos.</blockquote>

<a target="_blank" href="https://www.youtube.com/watch?v=1DB2ZV_5E-I&list=PLlpDiEFsyycw0kqefODPptzf2r8YOwXBL&index=32&t=0s">Guruji explicando a distância das pernas</a>.</p>

<p><strong>Diferenças (LoY e Gem)</strong><br />
No LoY, Guruji diz para - se possível - colocar toda a palma da mão direita no chão, enquanto que a Geetaji não fala sobre essa opção, mantendo a palma no tornozelo.<br/>
Gem diz para inspirar e retornar da postura normalmente enquanto que LoY diz para elevar a palma direita, então inspirar e retornar
</p>
    `,
  },
  {
    id: 2,
    name: 'Utthita Parsvakonasana',
    slug: 'utthita-parsvakonasana',
    meaning: 'Postura do ângulo lateral estendido',
    family: 1,
    sanscritWords: [1, 4, 3],
    movements: [1, 2, 7, 5, 6, 3, 4],
    actions: {
      entering:
        '<p>A partir de <i><a href="/asana/tadasana">Tadasana</a></i>, inspira e salta para utthita hasta padasana; gira pé esquerdo para dentro, perna e pé direito para fora 90º; alinha calcanhar do pé direito com centro do arco do pé esquerdo; eleva patelas; resistindo com peso na borda externa do pé esquerdo e braço esquerdo estendido; flexiona a perna direita A partir da virilha interna que vai em direção ao joelho interno até que a coxa fique paralela e a canela perpendicular ao chão; mantendo a lateral direita do tronco longa, exala e flexiona o tronco levando a mão no chão por fora do pé direito; estende o braço esquerdo em direção ao teto e, A partir do ombro, gira o braço até que a palma da mão esteja virada na direção da cabeça; alonga ainda mais a parte interna do braço em direção ao teto; pressionando o pé esquerdo contra o chão exala e desce o braço por cima da orelha esquerda.</p>',
      legs:
        '<p>Pressiona borda externa do pé esquerdo contra o chão; absorve a parte interna da perna esquerda e mantém ela bem estendida; pressiona borda interna do pé direito contra o chão; conecta o joelho com o braço direito</p>',
      core:
        '<p>Leva o centro do glúteo direito para frente; leva o topo da coxa esquerda para trás; cóccix para frente.</p>',
      trunk:
        '<p>Alongue as laterais do tronco; resistindo com o contato do joelho com o braço, gire o tronco em direção ao teto.</p>',
      arms:
        '<p>Estende bem o braço esquerdo e resiste com o braço direito contra o joelho direito.</p>',
      head:
        '<p>Alongue o pescoço e gire a cabeça - A partir da base do crânio - levando o nariz em direção à axila esquerda.</p>',
      all:
        '<p>Estenda bem a perna esquerda e o braço esquerdo para longe um do outro.</p>',
      leaving:
        '<p>Resistindo com o pé esquerdo firme contra o chão e braço esquerdo bem estendido; inspira e sobe; estende a perna devagar - mantendo joelho absorvido; gira os pés para o outro lado, repete; exala e salta para <i><a href="/asana/tadasana">tadasana</a></i>.</p>',
    },
    health: {
      benefits: [
        'Reduz acúmulo de gordura na cintura e quadris',
        'Alivia dores ciáticas e artríticas',
        'Ajuda na digestão e evacuação',
        'Corrige defeitos das panturrilhas e coxas',
        'Desenvolve o tórax',
      ],
      caution: [
        'Pessoas com problemas nos joelhos, ciclo menstrual e gestantes devem apenas afastar as pernas ao invés de saltar.',
      ],
      contraindications: [],
    },
    krama: {
      preparations: [
        { id: 1, why: 'Prepara a perna de trás e as laterais do tronco.' },
      ],
      connectedAsanas: [{ id: 1, why: 'Ação das costelas para dentro.' }],
      compensations: [
        { id: 3, why: 'Ajuda a restaurar a energia entre as posturas em pé' },
      ],
    },
    teachers: {
      observe: [
        'Extensão da perna de trás',
        'Ângulo da perna da frente',
        'Contato do braço com joelho',
        'Cabeça que cai',
        'Borda interna da perna de trás',
      ],
    },
  },
]
