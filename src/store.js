import { reactive, computed } from "vue";
import { useI18n } from "vue-i18n";

export const store = reactive({
  // Variable for Team's and Sos Animals' single card
  showDetails: false,

  // Arrays
  visions: [
    {
      description: computed(() => {
        const { t } = useI18n();
        return t("homepage.vision.visions.0.description");
      }),
      image: "/src/assets/img/homepage/carousel/1-social-promotion.jpg",
    },
    {
      description: computed(() => {
        const { t } = useI18n();
        return t("homepage.vision.visions.1.description");
      }),
      image: "/src/assets/img/homepage/carousel/2-volunteering.jpg",
    },
    {
      description: computed(() => {
        const { t } = useI18n();
        return t("homepage.vision.visions.2.description");
      }),
      image: "/src/assets/img/homepage/carousel/3-wildlife-rehab.jpg",
    },
    {
      description: computed(() => {
        const { t } = useI18n();
        return t("homepage.vision.visions.3.description");
      }),
      image: "/src/assets/img/homepage/carousel/4-research.jpg",
    },
    {
      description: computed(() => {
        const { t } = useI18n();
        return t("homepage.vision.visions.4.description");
      }),
      image: "/src/assets/img/homepage/carousel/5-network.jpg",
    },
  ],

  members: [
    {
      name: computed(() => {
        const { t } = useI18n();
        return t("team.members.0.name");
      }),
      title: computed(() => {
        const { t } = useI18n();
        return t("team.members.0.title");
      }),
      image: "src/assets/img/team/grid/ilaria.jpg",
      description: computed(() => {
        const { t } = useI18n();
        return t("team.members.0.description");
      }),
    },
    {
      name: computed(() => {
        const { t } = useI18n();
        return t("team.members.1.name");
      }),
      title: computed(() => {
        const { t } = useI18n();
        return t("team.members.1.title");
      }),
      image: "src/assets/img/team/grid/alessia.jpg",
      description: computed(() => {
        const { t } = useI18n();
        return t("team.members.1.description");
      }),
    },
    {
      name: computed(() => {
        const { t } = useI18n();
        return t("team.members.2.name");
      }),
      title: computed(() => {
        const { t } = useI18n();
        return t("team.members.2.title");
      }),
      image: "src/assets/img/team/grid/elena.jpg",
      description: computed(() => {
        const { t } = useI18n();
        return t("team.members.2.description");
      }),
    },
    {
      name: computed(() => {
        const { t } = useI18n();
        return t("team.members.3.name");
      }),
      title: computed(() => {
        const { t } = useI18n();
        return t("team.members.3.title");
      }),
      image: "src/assets/img/team/grid/giulia.jpg",
      description: computed(() => {
        const { t } = useI18n();
        return t("team.members.3.description");
      }),
    },
    {
      name: computed(() => {
        const { t } = useI18n();
        return t("team.members.4.name");
      }),
      title: computed(() => {
        const { t } = useI18n();
        return t("team.members.4.title");
      }),
      image: "src/assets/img/team/grid/maura.jpg",
      description: computed(() => {
        const { t } = useI18n();
        return t("team.members.4.description");
      }),
    },
    {
      name: computed(() => {
        const { t } = useI18n();
        return t("team.members.5.name");
      }),
      title: computed(() => {
        const { t } = useI18n();
        return t("team.members.5.title");
      }),
      image: "src/assets/img/team/grid/roberto.jpg",
      description: computed(() => {
        const { t } = useI18n();
        return t("team.members.5.description");
      }),
    },
  ],

  characteristics: [
    {
      intro: "Piccolo ma determinato",
      word: "Piccolo",
      description:
        "Con i suoi 9-10 cm, il fiorrancino è uno degli uccelli più piccoli d'Europa. Nonostante le dimensioni, però, riesce ad affrontare delle migrazioni, adattandosi a diversi habitat. Proprio come noi, che ci siamo spostate e adattate in diversi contesti professionali, sempre guidate dalla passione per la natura.",
    },
    {
      intro: "Nascosto ma diffuso",
      word: "Nascosto",
      description:
        "Il fiorrancino, volatile veloce e agile, spesso passa inosservato ai non esperti: analogamente le ricchezze naturalistiche dell'Insubria sono presenti ma talvolta nascoste e poco note.",
    },
    {
      intro: "Adattabile ma sensibile",
      word: "Adattabile",
      description:
        "Pur adattandosi a vari ambienti, dal livello del mare fino a 2400 metri di altitudine, il fiorrancino è sensibile ai cambiamenti ambientali. Questa caratteristica riflette la nostra missione di promuovere la consapevolezza ecologica in un territorio fortemente antropizzato.",
    },
    {
      intro: "Sociale e curioso",
      word: "Sociale",
      description:
        "I fiorrancini spesso si uniscono a volatili di altre specie formando così stormi misti, mostrando una natura sociale e curiosa. Allo stesso modo, noi di Insubria Wildlife puntiamo a creare connessioni, stimolare la curiosità e promuovere lo scambio di conoscenze tra persone con diversi background.",
    },
    {
      intro: "La cresta arancione",
      word: "Cresta",
      description:
        "Infine la sua cresta giallo-arancione brillante rappresenta quel guizzo di estro e creatività che contraddistingue il nostro entusiasmo, le nostre idee e i numerosi progetti che abbiamo in mente per Insubria Wildlife.",
    },
  ],

  events: [
    {
      title: "notizie da geed deeble",
      date: "27/11/2024",
      poster: "27-11-2024.png",
    },
    {
      title: "bird gardening",
      date: "30/11/2024",
      poster: "30-11-2024.png",
    },
  ],

  sosCards: [
    {
      title: "Trasporto",
      image: "./src/assets/img/sos-animal/cards/1-box.jpg",
      description:
        "<p>Il <strong>trasporto corretto è fondamentale</strong> per evitare ulteriore stress o ferite: scegli una scatola della giusta misura per limitare i movimenti eccessivi, che permetta però all'animale di poter stare in stazionamento eretto.<br><br> Sul fondo usa carta assorbente o un panno morbido, <strong>assicurandoti che non ci siano fili</strong> che possano intrecciarsi attorno a zampe e ali.<br><br>In caso di shock, animale privo di pelo o piume o evidentemente ipotermico, <strong>aggiungi una fonte di calore</strong>, come ad esempio una bottiglia d'acqua calda: è importantissimo però che l'animale non vi sia <strong>mai a diretto contatto</strong>, quindi bisogna avvolgere intorno alla fonte di calore un panno o della carta assorbente e usare, nel caso di una bottiglia, dello scotch per assicurarla alla scatola. Bisogna in ogni caso dare all'animale <strong>sempre la possibilità di allontanarsi</strong> da questa, se necessario.<br><br>Infine chiudere la scatola con un <strong>coperchio forato</strong> per garantire la ventilazione.",
    },
    {
      title: "Cibo e acqua",
      image: "src/assets/img/sos-animal/cards/2-food-water.jpg",
      description:
        "<p>La fauna selvatica, soprattutto quella in difficoltà, è <strong>particolarmente sensibile ad un alimento non adatto</strong>, il quale può arrecargli diversi problemi, portandola persino alla morte: per questo motivo, <strong>bisognerebbe sempre evitare</strong> di alimentare gli animali.</p><br><h4>Ecco una breve lista di alimenti da evitare assolutamente:</h4><ul class='details-description-list'><li>Latte vaccino e latticini in generale</li><li>Pane</li><li>Biscotti</li><li>Dolciumi</li><li>Alimenti processati</li></ul><br><p>Per quanto riguarda l'idratazione dell' esemplare, <strong>l'acqua si può somministrare solo in caso di animali vigili e reattivi</strong>, avendo la cura di scegliere contenitori adatti alla dimensione dell'animale: se troppo ingombranti potrebbero essere colpiti accidentalmente da alcuni movimenti dell'animale e rovesciare così il loro contenuto, finendo per bagnare la scatola e l'animale stesso.<br>Nel caso di dimensioni ridotte, come volatili o cuccioli molto piccoli, il tappo di un barattolo è di solito sufficiente.</p><br><h4>Nel caso tu non riesca a portare direttamente l'esemplare in un C.R.A.S., contattalo e chiedi consigli specifici</h4>",
    },
    {
      title: "Chi chiamare",
      image: "src/assets/img/sos-animal/cards/3-who-to-call.jpg",
      description:
        "<p>Sparsi sul territorio ci sono i <strong>Centri di Recupero Animali Selvatici</strong> ovvero i <strong>C.R.A.S.</strong></p><br><h4>Che cosa sono?</h4><br><p>Sono i centri predisposti alla cura e al recupero della fauna, purtroppo però non tutti hanno la possibilità di effettuare il recupero di un esemplare in difficoltà: in questo caso la competenza passa alla Polizia Provinciale.</p><br><p>Al seguente link puoi trovare l'elenco completo dei C.R.A.S, suddivisi per regione <a href='https://elencocras.it/' target='_blank'>https://elencocras.it/</a></p>",
    },
    {
      title: "Mammiferi nudi",
      image: "src/assets/img/sos-animal/cards/4-naked-mammals.jpg",
      description:
        "<p><strong>Se nudi e con occhi chiusi o fuori dal nido, necessitano sempre di intervento.</strong>.</p><br><p>Un reinserimento nel nido è possibile e consigliabile se non sono feriti e presentano una certa vitalità (ovvero se si muovono e sono caldi e se reagiscono se stimolati) ed il nido risulta accessibile e integro.</p><br><h4>Usa guanti o un panno per evitare di lasciare il tuo odore, altrimenti il genitore potrebbe abbandonarli!<br><br></h4><p>Una volta riposizionato nella tana è obbligatorio allontanarsi (mai rimanere in vista), mantenere monitorata l'attività di cuccioli e genitori per le successive 4-6 ore e, nel frattempo, contattare il C.R.A.S.</p>",
    },
    {
      title: "Mammiferi cuccioli con pelo",
      image: "src/assets/img/sos-animal/cards/5-furry-mammals.jpg",
      description:
        "<p><strong>Non sempre gli animali giovani sono abbandonati</strong>.</p><br><p>I cuccioli con il mantello sviluppato e gli occhi ben aperti, <strong>iniziano ad esplorare il territorio</strong>, quindi non capita di rado trovare giovani lepri, conigli o scoiattoli da soli: fa parte del loro ciclo di vita.</p><br><h4>È tutto normale ed è una fase fondamentale per la loro crescita, perciò non vanno recuperati.</h4><br><p>Emblematici sono i <strong>cuccioli di capriolo e cervo</strong>: essi <strong>nascono senza odore</strong> e quando le madri si allontanano per nutrirsi li lasciano per diverso tempo nascosti nella vegetazione. Il loro non avere odore li protegge da eventuali predatori ma, <strong>se toccati, ne acquisiranno uno estraneo alla madre e verranno abbandonati!</strong></p><br><h4>Se la zona di ritrovamento presenta dei pericoli, è buona norma contattare il C.R.A.S. per farsi consigliare.</h4>",
    },
    {
      title: "Uccelli fuori dal nido",
      image: "src/assets/img/sos-animal/cards/6-no-nest-bird.jpg",
      description:
        "<p>Come noi esseri umani apprendiamo a camminare con il tempo e la pratica, così molti <strong>giovani uccelli passano del tempo ad apprendere i rudimenti del volo, e lo fanno a terra. È normale.</strong></p><p>Bisogna però fare delle distinzioni, in modo da poter agire nel migliore dei modi. Potremmo infatti imbatterci in:</p><ul class='sos-cards-list'><li><h4>Uccelli che nascono privi piume</h4><p>Fanno parte di questa categoria volatili come merli, passeri e cornacchie: se trovati fuori dal nido e senza un piumaggio completo, necessitano di un nostro intervento. <strong>Se possibile, vanno rimessi nel nido e monitorati da lontano (anche per 4-5 ore)</strong>, per assicurarci che i genitori si avvicinino.</p><ul class='nested-list'><li><h4>Se completamente ricoperti di piume e penne</h4><p>Sono nella fase di esplorazione e apprendimento: <strong>stanno facendo prove di volo, non vanno quindi prelevati dal territorio</strong> e sottratti alle cure dei genitori, che li controllano e li alimentano ancora di tanto in tanto.</p></li></ul></li><li><h4>Uccelli che nascono ricoperti di piumino</h4><p>Fanno parte di questa categoria volatili come civette, gheppi, allocchi, colombacci: <strong>se trovati in questa fase, vanno ricollocati nel loro nido o messi in uno artificiale</strong>, protetto (come per esempio una scatola) ma accessibile ai genitori, che continueranno a prendersi cura del pullo (per consigli più specifici contattare sempre il C.R.A.S.).</p><ul class='nested-list'><li><h4>Se completamente ricoperti di piumaggio</h4><p>Come detto sopra, <strong>stanno imparando a volare</strong>, quindi <strong>non vanno prelevati</strong> dal terreno.</p></li></ul></li></ul><h4>Questa è una fase fondamentale per la crescita dell'animale e, se privato di essa, avrà minori possibilità di sopravvivere in futuro.</h4>",
    },
    {
      title: "Rondoni, Rondini e Balestrucci",
      image: "src/assets/img/sos-animal/cards/7-swift.jpg",
      description:
        "<p>Solitamente, i nidi di rondini e balestrucci sono ben visibili e, se troviamo <strong>un pulcino in buone condizioni, va ricollocato nel nido.</strong></p><br><p>Questi animali sono caratterizzati da <strong>zampe estremamente corte</strong> (in particolar modo i rondoni) perché sono estremamente specializzati nella vita in volo: per questo motivo <strong>potrebbero far fatica a spiccare il volo da terra</strong>, e non vale solo per i pulcini ma anche per gli esemplari adulti!.</p><br><h4>Un rondone a terra, quindi, va sempre soccorso.</h4><br><p>Si può contattare il C.R.A.S. e richiedere assistenza tramite l'invio di foto, per valutare se tentare una reimmissione in natura o se fosse necessario un ricovero.</p>",
    },
    {
      title: "Pipistrelli",
      image: "src/assets/img/sos-animal/cards/8-bat.jpg",
      description:
        "<p>Non vanno <strong>mai toccati a mani nude!</strong> Per farlo si possono usare dei guanti da giardinaggio oppure un panno.</p><br><p>Occorre però fare delle distinzioni, in modo da agire nel migliore dei modi. Se:</p><ul class='sos-cards-list'><li><h4>L'esemplare è cucciolo o giovane (riconoscibile dal pelo assente o raso)</h4><ul class='nested-list'><li><p><strong>Se in buone condizioni</strong> potrebbe essere possibile il <strong>ricongiungimento</strong> con la colonia: per avere maggiori informazioni contattare lo <strong>Sportello Pipistrelli</strong> al numero <span itemprop='telephone'><a href='tel:+393473941266'>+39 347 3941266</a></span></p></li><li><p><strong>Se ferito, poco reattivo o visibilmente magro</strong> (ovvero presenta incavatura a livello delle scapole e del bacino), va <strong>immediatamente soccorso</strong> portandolo in uno dei <span><a href='https://elencocras.it/' class='uppercase' target='_blank'>cras</a></span></p></li></ul></li><li><h4>L'esemplare è adulto (ovvero ricoperto di pelo e con lunghezza del corpo che varia dai 3 ai 10 cm a seconda della specie)</h4><p>Se viene trovato a terra, esposto al sole, appigliato ad un muro in basso oppure ti è stato portato dal gatto va <strong>immediatamente soccorso</strong>, anche in questo caso portandolo in uno dei <span><a href='https://elencocras.it/' class='uppercase' target='_blank'>cras</a></span> </p></li></ul><br><h4>Per ulteriori approfondimenti visita lo <span><a href='https://www.valpredina.eu/cras_wwf/sportello-pipistrelli/' target='_blank'>Sportello Pipistrelli</a></span></h4>",
    },
  ],
});
