// Worksheet 2 exercises — auto-managed, edit with care
const EXERCISES_W2 = [
  {
    "id": "w2_01",
    "w": 2,
    "topic": "Fogalmak – Inklúzió",
    "type": "mc",
    "q": "Melyik fogalom fejezi ki azt, hogy az iskola alkalmazkodik minden tanuló szükségletéhez – nem a tanuló illeszkedik a rendszerhez, hanem a rendszer alakul a tanulóhoz?",
    "opts": [
      "Integráció",
      "Normalizáció",
      "Inklúzió",
      "Ésszerű alkalmazkodás"
    ],
    "ans": 2,
    "exp": "Az inklúzió az integráción túlmutató szemlélet: a rendszer alakul a tanulóhoz, nem fordítva. Az inklúzió a sokféleséget értékként kezeli.",
    "diff": 1
  },
  {
    "id": "w2_02",
    "w": 2,
    "topic": "Fogalmak – Inklúzió",
    "type": "mc",
    "q": "Mit jelent a normalizáció elve az oktatásban?",
    "opts": [
      "A fogyatékossággal élők számára speciális elkülönített iskolák fenntartása",
      "A fogyatékossággal élők jogát a társadalom többi tagjával azonos életkörülményekhez és tanulási lehetőségekhez",
      "Az oktatási rendszer uniformizálása minden tanuló számára",
      "A speciális pedagógiai módszerek alkalmazásának kötelezővé tétele"
    ],
    "ans": 1,
    "exp": "A normalizáció elve: a fogyatékossággal élőknek joguk van a társadalom többi tagjával azonos életkörülményekhez, napi ritmushoz. Oktatásban: lehetőség szerint a lakóhelyükön, kortársaikkal tanulhatnak.",
    "diff": 1
  },
  {
    "id": "w2_03",
    "w": 2,
    "topic": "Fogalmak – Inklúzió",
    "type": "mc",
    "q": "Mi az ésszerű alkalmazkodás?",
    "opts": [
      "A teljes oktatási rendszer átszervezése kizárólag a CES tanulók igényei szerint",
      "Módosítások összessége, amelyek nem jelentenek aránytalan terhet, mégis lehetővé teszik az egyenlő részvételt",
      "A fogyatékossággal élők számára fenntartott elkülönített oktatási program",
      "A tananyag mennyiségének 50%-os csökkentése minden CES tanuló számára"
    ],
    "ans": 1,
    "exp": "Az ésszerű alkalmazkodás: módosítások, amelyek nem jelentenek aránytalan terhet az intézménynek, mégis lehetővé teszik az egyenlő részvételt (pl. adaptált tananyag, hosszabb vizsgaidő, akadálymentesítés).",
    "diff": 2
  },
  {
    "id": "w2_04",
    "w": 2,
    "topic": "Fogalmak – Inklúzió",
    "type": "match",
    "q": "Párosítsd a fogalmakat a definíciójukkal!",
    "pairs": [
      {
        "L": "Integráció",
        "R": "CES tanulók elhelyezése többségi iskolákban, az iskola alapstruktúrája lényegében változatlan"
      },
      {
        "L": "Inklúzió",
        "R": "A rendszer alakul a tanulóhoz, a sokféleséget értékként kezeli"
      },
      {
        "L": "Normalizáció",
        "R": "Jog az azonos életkörülményekhez, lakóhelyen, kortársakkal tanulni"
      },
      {
        "L": "Ésszerű alkalmazkodás",
        "R": "Módosítások, amelyek nem aránytalan terhet, mégis egyenlő részvételt biztosítanak"
      }
    ],
    "exp": "Mind a négy fogalom az inklúzió/integráció fogalomköréhez tartozik, de különböző nézőpontból.",
    "diff": 2
  },
  {
    "id": "w2_05",
    "w": 2,
    "topic": "Integrációs modellek",
    "type": "mc",
    "q": "Mi jellemzi a részleges integráció (vegyes modell) modelljét?",
    "opts": [
      "A CES tanuló teljes munkaidőben a többségi osztályban tanul",
      "A CES tanuló kizárólag speciális iskolában tanul, de kirándulásokra jár a többségi iskolával",
      "A CES tanuló bizonyos tantárgyakat a többségi osztályban tanul, másokat egyéni/kiscsoportos fejlesztő foglalkozáson",
      "A CES tanuló otthon tanul online platformon keresztül"
    ],
    "ans": 2,
    "exp": "Részleges integráció (vegyes modell): a tanuló bizonyos tantárgyakat a többségi osztályban tanul, más tantárgyakból egyéni vagy kiscsoportos fejlesztő foglalkozáson vesz részt.",
    "diff": 1
  },
  {
    "id": "w2_06",
    "w": 2,
    "topic": "Utazó tanár",
    "type": "mc",
    "q": "Mi az utazó és támogató tanár egyik alapvető feladata?",
    "opts": [
      "Kizárólag az iskolai adminisztráció elvégzése",
      "Pszichopedagógiai értékelés és az osztálytanító tanácsadása az adaptáció módszereiről",
      "A szülők helyettesítése a nevelési folyamatban",
      "Az iskola infrastrukturális fejlesztéseinek tervezése"
    ],
    "ans": 1,
    "exp": "Az utazó tanár 5 feladata: pszichopedagógiai értékelés és tanácsadás, egyéni fejlesztési tervezés, közvetlen fejlesztő munka, együttműködés a pedagógussal, kapcsolattartás a családdal.",
    "diff": 1
  },
  {
    "id": "w2_07",
    "w": 2,
    "topic": "Inklúzió korlátai",
    "type": "mc",
    "q": "Melyik a CES tanulók többségi iskolai integrációjának egyik korlátja?",
    "opts": [
      "A szociális fejlődés javulása",
      "A társadalmi elfogadás erősítése",
      "A magasabb elvárások motiváló hatása",
      "A pedagógusok hiányos speciális módszertani ismerete"
    ],
    "ans": 3,
    "exp": "A korlátok közé tartozik: erőforráshiány, pedagógusok felkészültségének hiánya, és a szociális kirekesztés kockázata megfelelő felkészítés nélkül.",
    "diff": 1
  },
  {
    "id": "w2_08",
    "w": 2,
    "topic": "Hallássérülés",
    "type": "mc",
    "q": "Melyik hallástartomány jellemzi a pedagógiai értelemben vett nagyothalló tanulót?",
    "opts": [
      "0–25 dB",
      "26–70 dB",
      "70–90 dB",
      "90 dB felett"
    ],
    "ans": 1,
    "exp": "Pedagógiai osztályozás: Nagyothalló: 26–70 dB hallásveszteség. Siket: 70 dB feletti hallásveszteség.",
    "diff": 2
  },
  {
    "id": "w2_09",
    "w": 2,
    "topic": "Látássérülés",
    "type": "mc",
    "q": "Melyik látásélességi tartomány jellemzi a pedagógiai értelemben vett vak tanulót?",
    "opts": [
      "50–70%-os látóélesség",
      "34–50%-os látóélesség",
      "10–33%-os látóélesség",
      "10% alatti látóélesség"
    ],
    "ans": 3,
    "exp": "Pedagógiai osztályozás: Gyengénlátó: 10–33% látóélesség. Vak: 10% alatti (vagy teljes vakság). A vakság esetén az oktatás tapintásos és hallási csatornán valósul meg, Braille-írással.",
    "diff": 2
  },
  {
    "id": "w2_10",
    "w": 2,
    "topic": "Demutizálás",
    "type": "mc",
    "q": "Mit jelent a demutizálás?",
    "opts": [
      "A siket tanulók jelnyelvi oktatása kizárólag vizuális csatornán",
      "Speciális pedagógiai folyamat, amelynek célja a siket vagy mutizált gyermekek funkcionális kommunikációjának kialakítása",
      "A tanuló hangzó nyelvre fordítása tolmács segítségével",
      "Audiológiai vizsgálat a hallásveszteség mértékének meghatározásához"
    ],
    "ans": 1,
    "exp": "A demutizálás speciális pedagógiai folyamat: a cél nem csupán a hang előhívása, hanem a funkcionális kommunikáció kialakítása siket vagy súlyos kommunikációs zavarral küzdő gyermekeknél.",
    "diff": 2
  },
  {
    "id": "w2_11",
    "w": 2,
    "topic": "Demutizálás",
    "type": "mc",
    "q": "Melyik kommunikációs módszer a demutizálás során egyszerre több csatornát alkalmaz: jelnyelvet, szájmozgást, gesztusokat, írást és képi kommunikációt?",
    "opts": [
      "Orális-auditív módszer",
      "Jelnyelv",
      "Totális kommunikáció",
      "Finger-spelling"
    ],
    "ans": 2,
    "exp": "A totális kommunikáció rugalmasan igazodik a tanuló szintjéhez: egyszerre alkalmaz jelnyelvet, szájmozgást, hangos beszédet, gesztusokat, írást és képi kommunikációt.",
    "diff": 1
  },
  {
    "id": "w2_12",
    "w": 2,
    "topic": "Siketvaság",
    "type": "mc",
    "q": "Mi a siketvaság (deafblindness)?",
    "opts": [
      "A siketség és a vakság egymástól független, de egyidejű előfordulása",
      "A hallás és a látás egyidejű súlyos sérülése; önálló fogyatékossági kategória, amelynél a tapintásos csatorna a fő kommunikációs út",
      "Kizárólag a veleszületett hallás- és látássérülés kombinációja",
      "Enyhe halláskárosodás és gyengénlátás egyidejű megjelenése"
    ],
    "ans": 1,
    "exp": "A siketvaság nem csupán két fogyatékosság összeadódása, hanem önálló kategória. Hatása jóval meghaladja a részfogyatékosságok külön-külön vett következményeit. A fő kommunikációs csatorna a tapintás.",
    "diff": 2
  },
  {
    "id": "w2_13",
    "w": 2,
    "topic": "Siketvaság",
    "type": "mc",
    "q": "Mi a taktilis (tapintásos) jelnyelv?",
    "opts": [
      "Braille-betűk ujjheggyel való olvasása",
      "Olyan módszer, amelyben a siketvak személy tenyerével érzi a kommunikációs partner jeleit",
      "Tenyérre írt betűk rendszere, ahol pontok és érintések jelölik a betűket",
      "Dombornyomott képi szimbólumrendszer"
    ],
    "ans": 1,
    "exp": "A taktilis jelnyelv: a siketvak személy kezét a partner kezére helyezi, és tapintással érzékeli a jeleket. Olyan személyek számára alkalmazható, akik korábban jelnyelvet tanultak.",
    "diff": 2
  },
  {
    "id": "w2_14",
    "w": 2,
    "topic": "Siketvaság",
    "type": "mc",
    "q": "Mi a Lorm-ábécé?",
    "opts": [
      "Braille-írás elektronikus változata",
      "Speciális tenyérírás-rendszer, amelyben a betűk a tenyér meghatározott pontjain tett érintéseknek felelnek meg",
      "Jelnyelv siketvak személyek számára, amely kézformákat alkalmaz",
      "Kommunikációs szoftver, amely szöveget hangra alakít"
    ],
    "ans": 1,
    "exp": "A Lorm-ábécé: speciális tenyérírás-rendszer, ahol a betűk a tenyér meghatározott pontjain tett érintések. Gyors és diszkrét kommunikációt tesz lehetővé.",
    "diff": 2
  },
  {
    "id": "w2_15",
    "w": 2,
    "topic": "Segítő technológia",
    "type": "mc",
    "q": "Mire való az FM-rendszer (frekvenciamoduláción alapuló hangátviteli rendszer)?",
    "opts": [
      "Látássérült tanulók számára a képernyőn lévő szöveg hanggá alakítására",
      "Hallássérült tanulók számára: a pedagógus hangja közvetlenül a tanuló hallókészülékébe kerül, kiküszöbölve a háttérzajt",
      "AAC rendszer nem verbális tanulók kommunikációs támogatására",
      "Tanterem akusztikai kezelésének mérőrendszere"
    ],
    "ans": 1,
    "exp": "Az FM-rendszer hallássérült tanulóknak szól. A pedagógus mikrofonba beszél, a jel közvetlenül a tanuló hallókészülékébe vagy fejhallgatójába kerül, kiküszöbölve a háttérzajt és a távolság okozta csillapítást.",
    "diff": 1
  },
  {
    "id": "w2_16",
    "w": 2,
    "topic": "Olvasás-írás előfeltételek",
    "type": "mc",
    "q": "Melyik az olvasás-írás tanulásának perceptív-motoros előfeltétele?",
    "opts": [
      "Szociális kompetencia – képesség az osztálytársakkal való együttműködésre",
      "Vizuális diszkrimináció – hasonló formák, betűk megkülönböztetésének képessége",
      "Matematikai gondolkodás – számok és műveletek ismerete",
      "Zenei képességek – ritmusérzék és hallás"
    ],
    "ans": 1,
    "exp": "Az öt előfeltétel: (1) Vizuális diszkrimináció, (2) Auditív diszkrimináció és fonológiai tudatosság, (3) Lateralitás és irányvétel, (4) Finommotoros készségek, (5) Szókincs és szóbeli kifejezőképesség.",
    "diff": 1
  },
  {
    "id": "w2_17",
    "w": 2,
    "topic": "Olvasás-írás előfeltételek",
    "type": "mc",
    "q": "Mit jelent a fonológiai tudatosság mint olvasás-írás előfeltétel?",
    "opts": [
      "A betűk vizuális formájának felismerése és megkülönböztetése",
      "A ceruza megfelelő fogása és a vonalvezetés készsége",
      "A szavak hangokból épülnek fel; a hangok, szótagok és rímek azonosítása és megkülönböztetése",
      "A jobb-bal irány ismerete és a bal-jobb olvasási irány követése"
    ],
    "ans": 2,
    "exp": "Auditív diszkrimináció és fonológiai tudatosság: a tanuló azonosítja és megkülönbözteti a hangokat, szótagokat, rímelő szavakat; felismeri, hogy a szavak hangokból épülnek fel.",
    "diff": 2
  },
  {
    "id": "w2_18",
    "w": 2,
    "topic": "Olvasás-írás szakaszai",
    "type": "order",
    "q": "Rendezd helyes sorrendbe az olvasás-írás elsajátításának három szakaszát!",
    "items": [
      "Előábécés szakasz (logografikus) – globális szófelismerés, könyvek iránti érdeklődés",
      "Ábécés szakasz (alfabetikus) – betű-hang megfeleltetés, dekódolás",
      "Ábécé utáni szakasz (ortografikus) – szóképek, automatizált dekódolás, szövegértés"
    ],
    "exp": "A sorrendja: (1) Előábécés (logografikus) → (2) Ábécés (alfabetikus) → (3) Ábécé utáni (ortografikus). Minden szakasz az előzőre épül.",
    "diff": 1
  },
  {
    "id": "w2_19",
    "w": 2,
    "topic": "Olvasás-írás szakaszai",
    "type": "mc",
    "q": "Mi jellemzi az ábécé utáni (ortografikus) szakaszt?",
    "opts": [
      "A gyermek felismeri a saját nevét és néhány ismert szót vizuális formájuk alapján",
      "A tanuló betűnként olvas és tanul betű-hang megfeleltetést",
      "A dekódolás automatizálódik, a tanuló szóképek alapján olvas, megjelenik a helyesírási tudatosság",
      "A tanuló csak nyomtatott szöveget tud olvasni, az írott betűket nem ismeri"
    ],
    "ans": 2,
    "exp": "Az ábécé utáni (ortografikus) szakaszban a dekódolás automatizálódik. A figyelem a szöveg tartalmára irányul. Az olvasás szóegységenként zajlik, az írás egyre folyékonyabb, megjelenik a helyesírási tudatosság.",
    "diff": 2
  },
  {
    "id": "w2_20",
    "w": 2,
    "topic": "Olvasás módszere",
    "type": "mc",
    "q": "Mi a fonetikus-analitikus-szintetikus módszer analitikus eljárásának lényege?",
    "opts": [
      "Az egyes hangok és betűk összerakása szavakká és mondatokká",
      "A kiinduló pont egy ismert egész szó vagy mondat, amelyet fokozatosan elemeznek szótagokra, majd hangokra",
      "Minden egyes betű külön tanítása a teljes ábécé megtanulásáig",
      "A hangos felolvasás és az azonnali visszajelzés kombinálása"
    ],
    "ans": 1,
    "exp": "Analitikus eljárás: az egész szóból/mondatból kiindulva elemzés kisebb egységekre (szótagok → hangok). A hangok így mindig értelmes, természetes szövegkörnyezetből kerülnek kiemelésre.",
    "diff": 2
  },
  {
    "id": "w2_21",
    "w": 2,
    "topic": "Számolás tanítása",
    "type": "mc",
    "q": "Melyik szint jelent konkrét szintet a természetes szám fogalmának kialakításában CES tanulóknál?",
    "opts": [
      "Számjegy mint elvont szimbólum megismerése és írása",
      "Pontok és pálcikák mint szemikonkrét szimbólumok alkalmazása",
      "Tárgyak számlálása és csoportosítása, manipulálható tárgyakkal",
      "Számegyenesen való ábrázolás és számsorozatok"
    ],
    "ans": 2,
    "exp": "A három szint: (1) Konkrét – tárgyakkal való manipuláció (kövek, gombok, korongok); (2) Szemikonkrét – tárgyak képei, pontok, pálcikák; (3) Szimbolikus – számjegy mint elvont szimbólum.",
    "diff": 1
  },
  {
    "id": "w2_22",
    "w": 2,
    "topic": "Számolás tanítása",
    "type": "order",
    "q": "Rendezd sorba az összeadás tanításának lépéseit!",
    "items": [
      "Konkrét manipuláció: tárgyakat összerakunk két csoportból (3 alma + 2 alma)",
      "Rajzzal, képpel szemléltetjük a műveletet",
      "Bevezetjük a + és = jeleket; a tanuló maga írja le a műveletet",
      "Számegyenesen ábrázoljuk az összeadást (ugrálás jobbra)",
      "Emlékezeti szintű rögzítés: automatizált feladatok"
    ],
    "exp": "Az összeadás tanításának sorrendje: konkrét → képi → jelolvasás/írás → számegyenes → memorizálás. Mindig a konkréttól az absztrakt felé haladunk.",
    "diff": 2
  },
  {
    "id": "fill_04",
    "w": 2,
    "topic": "Fogalmak – Inklúzió",
    "type": "fill",
    "q": "Egészítsd ki: Az inkluzív iskolában a ____________ alakul a tanulóhoz – nem fordítva.",
    "ans": "rendszer",
    "exp": "Az inklúzió alapelve: nem a tanuló illeszkedik a rendszerhez, hanem a rendszer alakul a tanulóhoz. A sokféleséget értékként kezeli.",
    "diff": 1
  },
  {
    "id": "fill_05",
    "w": 2,
    "topic": "Olvasás-írás szakaszai",
    "type": "fill",
    "q": "Egészítsd ki: Az olvasás-írás elsajátításának három szakasza: előábécés, ____________ és ábécé utáni szakasz.",
    "ans": "ábécés",
    "exp": "A három szakasz: (1) Előábécés (logografikus), (2) Ábécés (alfabetikus), (3) Ábécé utáni (ortografikus).",
    "diff": 1
  },
  {
    "id": "short_03",
    "w": 2,
    "topic": "Utazó tanár",
    "type": "short",
    "q": "Sorold fel az utazó és támogató tanár öt alapvető feladatát (kulcsszavakban)!",
    "keywords": [
      "értékelés",
      "tervezés",
      "fejlesztő",
      "együttműködés",
      "kapcsolattartás"
    ],
    "exp": "Az 5 feladat: (1) Pszichopedagógiai értékelés és tanácsadás; (2) Egyéni fejlesztési tervezés; (3) Közvetlen fejlesztő munka; (4) Együttműködés a pedagógussal; (5) Kapcsolattartás a családdal.",
    "diff": 2
  }
];
