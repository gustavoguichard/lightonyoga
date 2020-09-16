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
        '<p>A partir de <a href="/asana/tadasana">Tadasana</a> (<i>Samasthiti</i>), inspira e salta para <a href="/asana/utthita-hasta-padasana">Utthita hasta padasana</a>. Braços paralelos ao chão, palma das mãos voltada para baixo, punhos em linha com os tornozelos. Gira o pé esquerdo ligeiramente para dentro, perna e pé direito para fora 90º; alinha o calcanhar do pé direito com centro do arco do pé esquerdo (<i>Parsva Hasta Padasana</i>). Observa o alinhamento do tornozelo, joelho e centro do topo da coxa da perna direita; eleva as patelas. Resistindo com peso na borda externa do pé esquerdo e o braço esquerdo bem estendido, exala e flexiona o tronco a partir do quadril; mão direita no tornozelo; eleva o braço esquerdo em linha com o direito.</p>',
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
        '<p>A partir de <a href="/asana/tadasana">Tadasana</a> (<i>Samasthiti</i>), inspira e salta para <a href="/asana/utthita-hasta-padasana">Utthita hasta padasana</a>; gira pé esquerdo para dentro, perna e pé direito para fora 90º; alinha calcanhar do pé direito com centro do arco do pé esquerdo; eleva patelas; resistindo com peso na borda externa do pé esquerdo e braço esquerdo estendido; flexiona a perna direita A partir da virilha interna que vai em direção ao joelho interno até que a coxa fique paralela e a canela perpendicular ao chão; mantendo a lateral direita do tronco longa, exala e flexiona o tronco levando a mão no chão por fora do pé direito; estende o braço esquerdo em direção ao teto e, A partir do ombro, gira o braço até que a palma da mão esteja virada na direção da cabeça; alonga ainda mais a parte interna do braço em direção ao teto; pressionando o pé esquerdo contra o chão exala e desce o braço por cima da orelha esquerda.</p>',
      legs:
        '<p>Pressiona borda externa do pé esquerdo contra o chão; absorve a parte interna da perna esquerda e mantém ela bem estendida; pressiona borda interna do pé direito contra o chão; conecta o joelho com o braço direito.</p>',
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
  {
    id: 6,
    name: 'Virabhadrasana I',
    slug: 'virabhadrasana-1',
    meaning: 'Postura do guerreiro I',
    family: 1,
    sanscritWords: [10],
    movements: [7, 18, 5, 10],
    actions: {
      entering:
        '<p>A partir de <a href="/asana/tadasana">Tadasana</a> (<i>Samasthiti</i>), inspira e salta para <a href="/asana/utthita-hasta-padasana">Utthita hasta padasana</a>; a partir dos ombros gira braços e palmas das mãos para o teto; eleva os braços estendidos e une palma das mãos acima da cabeça; gira pé esquerdo para dentro 60º, pé e perna direita para fora 90º; alinha calcanhar do pé direito com centro do arco do pé esquerdo; eleva patelas; gira perna esquerda de fora pra dentro, gira pelve e tronco da esquerda para direita; alinha os quadris paralelos à parede lateral; resistindo com a borda externa do pé esquerdo e o cóccix para dentro, eleva ainda mais os braços e flexiona a perna direita até que a coxa fique paralela e a canela perpendicular ao chão.</p>',
      legs:
        '<p>Pressiona borda externa do pé esquerdo e a borda interna do pé direito contra o chão; eleva a patela do joelho esquerdo estendendo ao máximo essa perna.</p>',
      core:
        '<p>Leva a face interna da coxa esquerda para trás; cóccix para dentro.</p>',
      trunk:
        '<p>Eleva a parte anterior do tronco, desde a púbis até a clavículas.</p>',
      arms: '<p>Afasta os ombros das orelhas e estende bem os braços.</p>',
      head:
        '<p>Alongue as laterais do pescoço e eleva a cabeça olhando na direção das mãos.</p>',
      leaving:
        '<p>Resistindo com o pé esquerdo firme contra o chão e estendendo ainda mais os braços em direção ao teto, inspira e estende a perna direita; gira os pés para o outro lado, repete; exala e salta para <i><a href="/asana/tadasana">tadasana</a></i>.</p>',
    },
    health: {
      benefits: [
        'Facilita a respiração profunda',
        'Reduz rigidez dos ombros e das costas e pescoço',
        'Tonifica tornozelos e joelhos',
        'Reduz gordura em torno dos quadris',
        'Levando a cabeça para trás, há uma massagem nas glândulas tireóide e paratireóide',
      ],
      caution: [],
      contraindications: ['Pessoas com coração fraco.'],
    },
    krama: {
      preparations: [],
      connectedAsanas: [],
      compensations: [],
    },
    teachers: {
      observe: [
        'Ângulo do pé de trás',
        'Extensão da perna de trás',
        'Cóccix para frente',
        'Ângulo da perna da frente',
        'Braços estendidos',
        'Calcanhar do pé de trás firme contra o chão',
        'Alinhamento do quadril',
      ],
    },
  },
  {
    id: 7,
    name: 'Ardha Chandrasana',
    slug: 'ardha-chandrasana',
    meaning: 'Postura da meia-lua',
    family: 1,
    sanscritWords: [11, 12],
    movements: [1, 2, 9, 3],
    actions: {
      entering:
        '<p>A partir de <a href="/asana/tadasana">Tadasana</a> (<i>Samasthiti</i>), inspira e salta para <a href="/asana/utthita-hasta-padasana">Utthita hasta padasana</a>; gira pé esquerdo para dentro, perna e pé direito para fora 90º; alinha calcanhar do pé direito com centro do arco do pé esquerdo; eleva patelas; resistindo com peso na borda externa do pé esquerdo, exala e entra em utthita trikonasana; flexiona a perna direita; alinha o dedão da mão direita com o dedinho do pé e move a mão uns 30 cm à frente; da um passo com o pé de trás em direção a perna da frente; eleva o calcanhar do pé de trás apoiando na bola do dedão do pé no chão; gira o tronco da direita para esquerda; pressiona a borda interna do pé direito contra o chão; resistindo com a perna esquerda bem estendida, à partir da parte interna da coxa esquerda eleva a perna e ao mesmo tempo estende a perna direita.</p>',
      legs:
        '<p>Pressiona a borda interna do pé direito contra o chão e o calcanhar esquerdo para longe do quadril; eleva as patelas dos joelhos e estende bem ambas as pernas; mantém a perna esquerda paralela ao chão e os dedos do pé apontando para frente.</p>',
      core:
        '<p>Leva o topo da coxa esquerda para trás e o centro do glúteo direito para frente; cóccix para dentro.</p>',
      trunk:
        '<p>Alongue as laterais do tronco; gira o tronco da direita para a esquerda.</p>',
      arms:
        '<p>Estende bem os braços para longe do tronco; afasta os ombros das orelhas.</p>',
      head:
        '<p>Alonga o pescoço, gira a cabeça e olha para a mão esquerda.</p>',
      leaving:
        '<p>Resistindo com o braço esquerdo e perna esquerda bem estendidos, flexione a perna direita e trás o pé esquerdo ao chão; dá um passo com a perna esquerda para trás e volta para <i><a href="/asana/utthita-trikonasana">utthita trikonasana</a></i>; inspira e eleva o tronco, gira os pés para o outro lado e repete a postura.</p>',
    },
    health: {
      benefits: [
        'Benéfica para pessoas com lesões nas pernas',
        'Tonifica a parte baixa da coluna e fortalece os joelhos',
        'Cura problemas gástricos',
        'É boa para dores nas costas e dismenorréia',
      ],
      caution: [],
      contraindications: [],
    },
    premium: {
      connections: [
        'Escápula direita para dentro - para girar o tronco da direita para a esquerda',
        'Levar a energia do pé esquerdo do calcanhar em direção aos dedos - para impedir o banana shape',
        'Pontos de equilíbrio: pescoço do dedão do pé de base, extensão do cotovelo de base',
      ],
    },
    krama: {
      preparations: [],
      connectedAsanas: [],
      compensations: [],
    },
    teachers: {
      observe: [
        'Pernas estendidas e patelas elevadas',
        'Perna elevada paralela ao chão',
        'Posicionamento da mão do chão, dedão com dedinho, distância do pé',
        'Parte posterior da cabeça em linha com o sacro - banana shape',
        'Direção dos dedos do pé elevado',
        'Giro do tronco da direita para esquerda',
        'Giro do pé de base - geralmente na hora que dá um passo a frente com a perna esquerda',
      ],
    },
    curiosities: `<p>Segundo o LoY, deve-se manter a mão esquerda sobre o quadril esquerdo (ao fazer a postura para o lado direito).</p>
    <p>O alinhamento da mão de base ensinado pelo Guruji era com dedão e indicador em linha com a borda interna do pé, o que torna a postura muito mais difícil de equilibrar.</p>`,
  },
  {
    id: 8,
    name: 'Virabhadrasana III',
    slug: 'virabhadrasana-3',
    meaning: 'Postura do guerreiro III',
    family: 1,
    sanscritWords: [10],
    movements: [11, 5, 10],
    actions: {
      entering:
        '<p>A partir de <a href="/asana/tadasana">Tadasana</a> (<i>Samasthiti</i>), inspira e salta para <a href="/asana/utthita-hasta-padasana">Utthita hasta padasana</a>; mantenha as pernas firmes; a partir dos ombros gira braços e palmas das mãos para o teto; eleva os braços estendidos e une palma das mãos acima da cabeça; gira pé esquerdo para dentro, pé e perna direita para fora 90º; exala e entra em <i><a href="/asana/virabhadrasana-1">virabhadrasana I</a></i>; gira a parte interna da coxa esquerda em direção ao teto e eleva o calcanhar; flexiona o tronco sobre a perna direita até que o tronco esteja paralelo ao chão (abdômen em contato com a coxa); dá um passo com a perna esquerda a frente e mantém a perna e os braços bem estendidos; fixa o olhar em um ponto a frente; resistindo com a perna esquerda bem estendida, exala e estende a perna direita ao mesmo tempo que eleva a perna esquerda à partir do topo da coxa.</p>',
      legs:
        '<p>Pressiona a borda interna do pé direito contra o chão; eleva as patelas dos joelhos; estenda bem as pernas.</p>',
      core:
        '<p>Gira a parte interna da coxa esquerda em direção ao teto e mantém os dedos do pé olhando para baixo.</p>',
      trunk:
        '<p>Estende a parte anterior do tronco do púbis às clavículas.</p>',
      arms: '<p>Resiste com os ante-braços em direção ao teto.</p>',
      head: '<p>Mantendo o pescoço longo, olhe a frente além das mãos.</p>',
      all:
        '<p>Mantém a perna esquerda e o tronco paralelos ao chão; estenda a perna esquerda e os braços para longe um do outro.</p>',
      leaving:
        '<p>Resistindo com o topo da coxa esquerda em direção ao teto e essa perna bem estendida, exala e flexiona a perna direita levando o pé esquerdo ao chão; dá um passinho com o pé esquerdo atrás inspira e retorna para <i><a href="/asana/virabhadrasana-1">virabhadrasana I</a></i> e volta de acordo com as instruções dessa postura.</p>',
    },
    health: {
      benefits: [
        'Desenvolve equilíbrio e estabilidade',
        'Fortalece as pernas',
        'Tonifica os órgãos abdominais',
        'Traz agilidade e vigor ao corpo e à mente',
        'Melhora a postura',
      ],
      caution: [],
      contraindications: [],
    },
    premium: {
      connections: [
        'O "apoio" e elevação dos punhos externos são um dos pontos de equilíbrio da postura',
        'Sentir como se o tronco estivesse flutuando sobre um rio - ajuda no equilíbrio e leveza',
        'Puxar o umbigo com o calcanhar de trás - relaxa o ventre',
        'Deixa o coração ser recebido pela parte posterior do esterno - para a coluna torácica',
      ],
    },
    krama: {
      preparations: [],
      connectedAsanas: [],
      compensations: [],
    },
    teachers: {
      observe: [
        'Pernas estendidas e patelas elevadas',
        'Braços estendidos',
        'Paralelismo da perna e tronco em relação ao chão',
        'Giro da perna de trás',
      ],
    },
  },
  {
    id: 9,
    name: 'Parivrtta Ardha Chandrasana',
    slug: 'parivrtta-ardha-chandrasana',
    meaning: 'Postura da meia-lua revolvida',
    family: 1,
    sanscritWords: [13, 11, 12],
    movements: [11, 9, 3],
    actions: {
      entering:
        '<p>A partir de <a href="/asana/tadasana">Tadasana</a> (<i>Samasthiti</i>), inspira e salta para <a href="/asana/utthita-hasta-padasana">Utthita hasta padasana</a>; gira perna e pé direito para fora 90 e ponta do pé esquerdo bem para dentro; exala e entra em <i><a href="/asana/parivrtta-trikonasana">Parivrtta Trikonasana</a></i>. Flexiona a perna da frente levando a mão esquerda +ou- 20cm a frente do pé direito alinhando o dedão da mão esquerda com o dedão do pé direito. Dá um passinho com a perna de trás em direção ao pé da frente. Gira ainda mais o tronco da esquerda para a direita. Mantendo a perna de trás estendida, pressiona a borda interna do pé da frente, e estende a perna da frente enquanto eleva a perna de trás a partir do topo da coxa levando a parte interna da coxa em direção ao teto.</p>',
      legs:
        '<p>Pressionando a borda interna do pé da frente, eleva as patelas dos joelhos, estendendo ambas as pernas.</p>',
      core:
        '<p>Resiste com a face interna da coxa esquerda em direção ao teto; compacta o quadril.</p>',
      trunk:
        '<p>Estende a parte anterior do tronco desde a púbis até às clavículas; entre com a escápula esquerda e gira o tronco da esquerda para direita.</p>',
      arms: '<p>Estende bem os braços nas direções opostas.</p>',
      head:
        '<p>Alonga as laterais do pescoço e a partir da base da nuca gira a cabeça e olha para a mão de cima.</p>',
      leaving:
        '<p>Resistindo com o braço direito em direção ao teto, estendendo ainda mais a perna de trás, flexiona a perna direita descendo o pé esquerdo no chão retornando para <i><a href="/asana/parivrtta-trikonasana">Parivrtta Trikonasana</a></i>. Pressionando a borda externa do pé de trás, eleva a mão esquerda do chão, girando o tronco retornando para <i><a href="/asana/utthita-hasta-padasana">Utthita Hasta Padasana</a></i> e depois <i><a href="/asana/tadasana">Tadasana</a></i>.</p>',
    },
    health: {
      benefits: [
        'Benéfica para pessoas com lesões nas pernas',
        'Tonifica a parte baixa da coluna e fortalece os joelhos',
        'Cura problemas gástricos',
        'É boa para dores nas costas e dismenorréia',
      ],
      caution: [],
      contraindications: [],
    },
    premium: {
      connections: [
        'Para não pivotar levar as virilhas internas uma em direção a outra',
      ],
    },
    krama: {
      preparations: [],
      connectedAsanas: [],
      compensations: [],
    },
    teachers: {
      observe: [
        'A perpendicularidade da perna de base e o paralelismo da perna de cima',
        'Giro da perna de cima com os dedos apontados para o chão',
        'Perna pivotando',
        'Distância da mão do chão',
      ],
    },
  },
  {
    id: 10,
    name: 'Parivrtta Trikonasana',
    slug: 'parivrtta-trikonasana',
    meaning: 'Postura do triângulo revolvido',
    family: 1,
    sanscritWords: [13, 2, 3],
    movements: [11, 12, 9, 3],
    actions: {
      entering:
        '<p>A partir de <a href="/asana/tadasana">Tadasana</a> (<i>Samasthiti</i>), inspira e salta para <a href="/asana/utthita-hasta-padasana">Utthita hasta padasana</a>; mantenha as pernas firmes e gira o pé esquerdo para dentro 60º e o pé e a perna direita para fora alinhando o calcanhar do pé da frente com o arco do pé de trás. Pressionando a borda externa do pé esquerdo e a borda interna do pé direito, gira a coxa frontal esquerda de fora pra dentro girando o tronco da esquerda para a direita levando a ponta dos dedos da mão esquerda no chão ao lado externo do pé direito. Eleve o braço direito estendido em direção ao teto.</p>',
      legs:
        '<p>Pressiona a borda interna do pé da frente e a borda externa do pé de trás, estendendo bem as pernas e elevando as patelas dos joelhos.</p>',
      core: '<p>Cóccix para dentro.</p>',
      trunk:
        '<p>Estende ainda mais a parte anterior do tronco desde a púbis às clavículas; leva o umbigo da esquerda para a direita; leva o esterno junto com o umbigo; entra com a escápula esquerda em direção ao peito e expanda o peito; gira o tronco da esquerda para a direita.</p>',
      arms:
        '<p>Pressiona o braço esquerdo contra a perna direita estendendo ainda mais os braços em direções opostas.</p>',
      head:
        '<p>Alongue as laterais do pescoço e a partir da base do crânio gira a cabeça e olha para a mão de cima.</p>',
      leaving:
        '<p>Resistindo com a borda externa do pé de trás e o braço direito estendido em direção ao teto, inspira e eleva a mão esquerda do chão girando o tronco retornando para <i><a href="/asana/utthita-hasta-padasana">Utthita Hasta Padasana</a></i>. Gira os pés para o outro lado e repete.</p>',
    },
    health: {
      benefits: [
        'Aumenta o fluxo sanguíneo na parte baixa do tronco',
        'Revigora os órgãos abdominais',
        'Tonifica coxas, panturrilhas e isquiotibiais',
        'Expande o peito',
        'Alivia dores nas costas',
        'Fortalece músculos do quadril',
      ],
      caution: [],
      contraindications: ['Ciclo menstrual'],
    },
    premium: {
      connections: [
        'Borda interna do pé da frente é a resistência para o giro do tronco',
      ],
    },
    krama: {
      preparations: [],
      connectedAsanas: [],
      compensations: [],
    },
    teachers: {
      observe: [
        'Ângulo do pé de trás',
        'Extensão das pernas e do tronco',
        'Alinhamento do tronco em relação às pernas',
        'Linha da axila esquerda com perna direita',
      ],
    },
  },
  {
    id: 11,
    name: 'Parivrtta Parsvakonasana',
    slug: 'parivrtta-parsvakonasana',
    meaning: 'Postura do ângulo lateral revolvido',
    family: 1,
    sanscritWords: [13, 4, 3],
    movements: [11, 7, 5, 6, 3, 4],
    actions: {
      entering:
        '<p>A partir de <a href="/asana/tadasana">Tadasana</a> (<i>Samasthiti</i>), inspira e salta para <a href="/asana/utthita-hasta-padasana">Utthita hasta padasana</a>; gira pé esquerdo para dentro, pé e perna direita para fora; flexiona a perna direita até que a coxa fique paralela ao chão; eleva o calcanhar do pé esquerdo e gira toda a perna de fora para dentro, quadris e tronco da esquerda para a direita, passando por <i>Vimanasana</i>; alongue as laterais do tronco e leve a axila esquerda por fora do joelho direito; leva mão esquerda no chão por fora do pé direito; resiste com a perna esquerda bem estendida, parte interna da perna girando em direção ao teto; estende o braço direito acima e à partir do ombro, gira o braço até que a palma da mão esteja virada na direção da cabeça; exala estende ainda mais o braço e desce o braço por cima da orelha direita.</p>',
      legs:
        '<p>Estende bem a perna esquerda; pressiona a borda interna do pé direito contra o chão e joelho direito contra o braço esquerdo.</p>',
      core: '<p>Levar o topo da coxa interna em direção ao teto.</p>',
      trunk:
        '<p>Alonga o tronco, da púbis às clavículas e, resistindo com o joelho contra o braço, gira o tronco ainda mais da esquerda para a direita, levando o peito em direção ao teto.</p>',
      arms: '<p>Estende bem o braço direito, afasta os ombros das orelhas.</p>',
      head: '<p>Gira o pescoço, levando o nariz em direção à axila.</p>',
      all:
        '<p>Estender uma vez mais a perna esquerda para longe do braço e braço direito para longe da perna, alongando toda a lateral do corpo.</p>',
      leaving:
        '<p>Resistindo com a perna esquerda e o braço direito bem estendidos, inspira e estende a perna direita, voltando para <i><a href="/asana/utthita-hasta-padasana">Utthita Hasta Padasana</a></i>. Gira os pés para o outro lado e repete.</p>',
    },
    health: {
      benefits: [
        'Auxilia a digestão',
        'Irriga e rejuvenesce os órgãos abdominais e a coluna vertebral',
        'Ajuda a remover a matéria residual do cólon',
      ],
      caution: [],
      contraindications: ['Ciclo menstrual'],
    },
    premium: {
      connections: [
        'Borda interna do pé da frente é a resistência para o giro do tronco',
      ],
    },
    krama: {
      preparations: [],
      connectedAsanas: [],
      compensations: [],
    },
    teachers: {
      observe: [
        'Perna esquerda estendida',
        'Ângulo da perna da frente',
        'Pé esquerdo perpendicular ao chão',
        'Alinhamento das costas da cabeça com o sacro',
        'Contato entre axila e joelho',
        'Cabeça caída',
        'Alongamento das laterais do tronco',
      ],
    },
    curiosities: '<p>Postura não descrita no livro <i>Gem for Women</i></p>',
  },
  {
    id: 12,
    name: 'Parsvottanasana',
    slug: 'parsvottanasana',
    meaning: 'Postura do alongamento intenso lateral',
    family: 1,
    sanscritWords: [4, 14, 15],
    movements: [11, 12],
    actions: {
      entering:
        '<p>A partir de <a href="/asana/tadasana">Tadasana</a> (<i>Samasthiti</i>), inspira e salta para <a href="/asana/utthita-hasta-padasana">Utthita hasta padasana</a>; a partir dos ombros, gira braços, cotovelos e palmas para cima; mantendo as pernas bem estendidas eleve os braços; pé esquerdo para dentro (75-80º LoY), perna e pé direito para fora; gira perna esquerda de fora pra dentro, gira pelve e tronco da esquerda para direita; alinha os quadris paralelos à parede lateral; resistindo com a borda externa do pé esquerdo contra o chão e mantendo a parte anterior do tronco longa, flexiona o tronco a frente levando as mãos no chão abaixo da linha dos ombros, mantém o olhar a frente.</p>',
      legs:
        '<p>Pressiona borda externa do pé de trás, borda interna do pé da frente; estende bem ambas as pernas mantendo as patetas elevadas.</p>',
      core:
        '<p>Face interna da coxa esquerda em direção ao teto; quadril direito em direção ao pé de trás.</p>',
      trunk:
        '<p>Alonga parte anterior do tronco da púbis às clavículas; gire o umbigo da esquerda para direita até que alinhe umbigo e centro do peito com a perna direita; mantendo o alongamento do tronco, exala e flexiona o tronco levando o queixo em direção à canela.</p>',
      arms: '<p>Flexionando os cotovelos para as laterais.</p>',
      head: '<p>Topo da cabeça na direção do peito do pé.</p>',
      leaving:
        '<p>Resistindo com a borda externa do pé de trás contra o chão, firmeza no pé da frente, inspire e eleve o tronco, gire os pés para o outro lado e repete.</p>',
    },
    health: {
      benefits: [
        'Alivia a rigidez dos músculos e das pernas e dos quadris',
        'Traz elasticidade às articulações do quadril e da coluna vertebral',
        'Corrige ombros arredondados e caídos',
      ],
      caution: [],
      contraindications: [],
    },
    premium: {
      connections: [
        'Ação para ajustar o quadril da perna de trás: Levar a base do 5º metatarso em direção ao chão, isso faz com que crie um arco na borda do pé de trás. Olhar e conferir o arco. Verificar se a borda externa está colapsando. A partir desse ponto girar mais o quadril.',
      ],
    },
    krama: {
      preparations: [],
      connectedAsanas: [],
      compensations: [],
    },
    teachers: {
      observe: [
        'Alinhamento do quadril em relação a perna da frente',
        'O giro da perna de trás',
        'Ação nos pés contra o chão',
        'A extensão dos braços',
        'Distância do quadril da frente para axila',
      ],
    },
  },
  {
    id: 13,
    name: 'Prasarita Padottanasana I',
    slug: 'prasarita-padottanasana-1',
    meaning: 'Postura das pernas afastadas e alongadas intensamente',
    family: 1,
    sanscritWords: [16, 9, 14, 15],
    movements: [1, 11, 13, 14],
    actions: {
      entering:
        '<p>A partir de <a href="/asana/tadasana">Tadasana</a> (<i>Samasthiti</i>), inspira e salta para <a href="/asana/utthita-hasta-padasana">Utthita hasta padasana</a>; afaste os pés ainda mais do que nas outras posturas (entre 1,3 e 1,5 metros); traga as mãos na cintura, cotovelos para trás; pressione a borda externa dos pés; eleve as patelas dos joelhos e gire as coxas frontais de fora para dentro; topos das coxas para trás e cóccix para dentro; alonga a parte anterior do tronco da púbis às clavículas; gire os ombros para trás e para baixo; mantendo a cervical longa, inspire e olhe numa diagonal acima; exale e flexione o tronco a frente paralelo ao chão; leve a ponta dos dedos das mãos ao chão em linha com os ombros; olhar à frente; leve os calcanhares das mãos em linha com os pés; resistindo com as escápulas para dentro, exale e flexione a frente a partir do quadril, levando o cocuruto da cabeça ao chão.</p>',
      legs:
        '<p>Pressione as bordas externas dos pés; resista com os tornozelos externos em direção aos internos; eleve o arco dos pés; eleve as patelas dos joelhos mantendo as pernas bem estendidas.</p>',
      core:
        '<p>Gire as coxas frontais de fora para dentro; leve o topo das coxas para trás, mantendo o peso do corpo sobre as pernas; leve o topo dos glúteos em direção ao chão e os ísquios para trás.</p>',
      trunk:
        '<p>Relaxe o abdômen; entra com as escápulas em direção ao peito.</p>',
      arms:
        '<p>Afaste os ombros das orelhas; leve os trapézios em direção ao quadril; mantenha os cotovelos para trás num ângulo de 90º entre braços e antebraços.</p>',
      head:
        '<p>Relaxe o pescoço e deixe a cabeça pesar em direção ao chão.</p>',
      leaving:
        '<p>Resistindo com as bordas externas dos pés firmes contra o chão; mantendo as mãos em linha com os pés, estenda os braços e olhe a frente voltando para a coluna côncava; diminua um pouco a distância entre os pés; traga as mãos na cintura alinhando as costas da cabeça com as costas do sacro; numa inspiração eleve o tronco acima; volte para <i><a href="/asana/tadasana">tadasana</a></i>.</p>',
    },
    health: {
      benefits: [
        'Os músculos isquiotibiais e adutores são totalmente desenvolvidos, enquanto há maior fluxo sanguíneo para o tronco e para a cabeça',
        'Ótimo ásana para quem não pode fazer sirsasana – há o aumento do poder digestivo',
        'Contribui para reduzir o peso corporal',
        'Ajuda a remover a fadiga das posturas em pé',
      ],
      caution: [],
      contraindications: [],
    },
    premium: {},
    krama: {
      preparations: [],
      connectedAsanas: [],
      compensations: [],
    },
    teachers: {
      observe: [
        'Alinhamento das bordas externas dos pés',
        'Distância entre os pés',
        'Tornozelos externos colapsando',
        'Quadril em linha com os pés',
        'Ângulo e alinhamento dos braços',
        'Distância entre ombros e orelhas',
        'Ísquios que se elevam demais',
        'Arredondamento da lombar',
      ],
    },
  },
  {
    id: 14,
    name: 'Uttanasana',
    slug: 'uttanasana',
    meaning: 'Postura do alongamento intenso da coluna',
    family: 1,
    sanscritWords: [14, 15],
    movements: [11, 15],
    actions: {
      entering:
        '<p>A partir de <a href="/asana/tadasana">Tadasana</a> (<i>Samasthiti</i>), pressione os quatro cantos do pé igualmente contra o chão; eleve o centro dos arcos dos pés; absorve os tornozelos externos em direção aos internos e eleve os tornozelos internos; eleva patelas dos joelhos; gire as coxas frontais de fora para dentro, topo da coxa para trás e cóccix para frente; inspire e eleve os braços em urdhva hastasana; resistindo com as pernas firmes e a parte anterior do tronco longa da púbis às clavículas, exale e flexione o tronco mantendo a coluna côncava e as pontas dos dedos das mãos no chão na linha dos ombros; olhe à frente movendo o esterno em direção ao queixo; mantendo a parte frontal do tronco longa e os braços estendidos, mova os dedos das mãos em linha com os dedos dos pés; na exalação, flexione ainda mais o tronco, levando umbigo em direção às coxas, esterno em direção às canelas e topo da cabeça em direção ao chão.</p>',
      legs:
        '<p>Pressione os calcanhares contra o chão e leve o peso para os metatarsos; eleve as patelas dos joelhos.</p>',
      core:
        '<p>Gire as coxas frontais de fora para dentro; gire os ísquios para o teto e para longe um do outro; mova os quadris para frente para que as pernas fiquem perpendiculares ao chão.</p>',
      trunk: '<p>Relaxe o abdômen; alongue a parte frontal do tronco.</p>',
      arms:
        '<p>Afaste os ombros das orelhas e leve os trapézios em direção ao quadril; caminhe ainda mais com as mãos para trás; estenda os braços; leve os calcanhares das mãos em direção ao chão.</p>',
      head:
        '<p>Relaxe o pescoço e deixe a cabeça pesar em direção ao chão.</p>',
      leaving:
        '<p>Resistindo com os ísquios em direção aos calcanhares, laterais do tronco longas e os braços estendidos à frente; inspire e eleve o tronco em <i>urdhva hastasana</i>; exale e desça os braços para  <i><a href="/asana/tadasana">tadasana</a></i>.</p>',
    },
    health: {
      benefits: [
        'Alivia dores estomacais',
        'Tonifica o fígado, baço e rins',
        'Alivia dores no ventre em período menstrual',
        'Rejuvenesce os nervos da coluna',
        'Diminui os batimentos cardíacos',
        'Combate a depressão ao manter acima de 2 min',
        'Acalma as células do cérebro, para pessoas que se excitam facilmente',
        'Os olhos ganham brilho, a mente fica em paz',
        'Prepara para sirsasana',
      ],
      caution: [],
      contraindications: [],
    },
    premium: {},
    krama: {
      preparations: [],
      connectedAsanas: [],
      compensations: [],
    },
    teachers: {
      observe: [
        'Pés unidos',
        'Pernas bem estendidas e patelas elevadas',
        'Alinhamento dos quadris e tornozelos',
        'Peso em direção aos metatarsos',
        'Abdome relaxado',
        'Laterais do tronco longas',
        'Ombros afastados das orelhas',
        'Subida sem comprimir a lombar',
      ],
    },
  },
  {
    id: 15,
    name: 'Salamba Sirsasana',
    slug: 'salamba-sirsasana',
    meaning: 'Postura invertida sobre a cabeça com apoio',
    family: 8,
    sanscritWords: [42, 37],
    movements: [13, 5, 9],
    actions: {
      setup: `Dobrar o tapetinho em 4, agachar em frente ao tapetinho alinhando os cotovelos na borda boa. Trazer as palmas das mãos nos ombros para checar alinhando cotovelos e ombros. Entrelaçar os dedos das mãos até a raiz e a ponta dos polegares um sobre o outro mantendo um espaço entre as mãos como se existisse uma bola de tênis. Levar o cocuruto da cabeça no chão (demonstrar antes onde fica o cocuruto - calcanhar da mão no centro das sobrancelhas, ponta do dedo médio no cocuruto) e as costas da cabeça entre as mãos.`,
      entering: `<p>Pressionando a borda externa do antebraço contra o chão, eleva os joelhos e a pélvis, estendendo as pernas caminha ao máximo com os pés na direção do tronco. Entra com as escápulas na direção do peito, afasta os ombros das orelhas, pressiona ainda mais os antebraços contra o chão, estenda bem as pernas e a partir do topo da coxa eleva uma perna estendida e depois a outra levando pés e pernas unidas na direção do teto.</p>`,
      legs:
        '<p>Leva os calcanhares internos na direção do teto levando o topo dos glúteos em direção aos calcanhares, mantendo os dedões dos pés unidos estendendo as pernas ao máximo.</p>',
      core:
        '<p>Cóccix para dentro, topo das coxas para trás; girar as coxas frontais de fora para dentro.</p>',
      trunk:
        '<p>Escápulas para dentro, para cima e para longe uma da outra; costelas frontais em direção às costelas posteriores.</p>',
      arms:
        '<p>Pressiona os antebraços contra o chão; afasta os ombros do chão.</p>',
      head: '<p>Manter a parte posterior do pescoço longa.</p>',
      leaving:
        '<p>Pressionando novamente os antebraços contra o chão, mantendo os ombros longe das orelhas, estendendo ainda mais as pernas e, resistindo com o topo das coxas em direção ao teto, desce uma perna estendida depois a outra; entra em adho mukha virasana.</p>',
    },
    health: {
      benefits: [],
      caution: [],
      contraindications: [
        'Ciclo menstrual',
        'Pressão alta',
        'Problemas na cervical',
        'Inflamações e outros problemas nos olhos e ouvidos',
      ],
    },
    premium: {},
    krama: {
      preparations: [],
      connectedAsanas: [],
      compensations: [],
    },
  },
  {
    id: 16,
    name: 'Ustrasana',
    slug: 'ustrasana',
    meaning: 'Postura do camelo',
    family: 4,
    sanscritWords: [45],
    movements: [17, 7, 18, 16, 8, 19, 10],
    actions: {
      entering: `<p>Ajoelhado no chão, traz as mãos na cintura, afasta os joelhos, tornozelos e pés na largura do quadril, espalha os dedos dos pés todos em contato com o chão e apontados para trás, pressiona o tornozelo frontal contra o chão, absorve os tornozelos externos em direção aos tornozelos internos, relaxa os glúteos, move o cóccix pra frente (resiste com os ossos dos glúteos para frente), mantendo o quadril na linha dos joelhos, alonga a parte anterior do tronco desde a púbis até as clavículas, movendo as escápulas em direção ao peito, flexiona o tronco para trás levando as palmas das mãos nas solas dos pés.</p>`,
      legs:
        '<p>Pressiona os tornozelos frontais e as tíbias contra o chão.</p>',
      core: '<p>Cóccix pra dentro.</p>',
      trunk: '<p>Escápulas para dentro.</p>',
      arms:
        '<p>Pressionar as palmas das mãos contra as solas dos pés para a ação das escápulas na direção do peito.</p>',
      head:
        '<p>Mantendo a parte posterior do pescoço longa relaxa a cabeça.</p>',
      leaving:
        '<p>Pressiona os tornozelos anteriores contra o chão, mantendo o cóccix para dentro, relaxa o pescoço, inspira e retorna a partir do externos para trás.</p>',
    },
    health: {
      benefits: [],
      caution: [],
      contraindications: [],
    },
    premium: {},
    krama: {
      preparations: [],
      connectedAsanas: [],
      compensations: [],
    },
    teachers: {
      observe: [
        'Coxas perpendiculares ao chão',
        'Tornozelos contra o chão',
        'Palmas pressionando sola dos pés ou blocos',
      ],
    },
  },
]
