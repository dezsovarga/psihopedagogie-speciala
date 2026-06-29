// 2. Fejezet: Paradigmaváltások a gyógypedagógiában
// Forrás: Gyógypedagógiai Alapismeretek – Tanulmányi Útmutató (2018), 2. fejezet (22–35. oldal)
const EXERCISES_GYALAP_CH2 = [

  // ─── Terminológia ─────────────────────────────────────────────────────────

  {
    id: 'gyalap_ch2_01',
    w: 102,
    topic: 'Terminológia',
    type: 'mc',
    q: 'Melyik megnevezés tekinthető ma a legkevésbé diszkriminálónak az érintettek körében?',
    opts: ['Fogyatékos ember', 'Sérült ember', 'Hülye', 'Rokkant'],
    ans: 1,
    exp: 'A "sérült ember" megnevezés a legáltalánosabban elfogadott az érintettek körében, és talán a legkevésbé diszkrimináló.',
    diff: 1
  },
  {
    id: 'gyalap_ch2_02',
    w: 102,
    topic: 'Terminológia',
    type: 'mc',
    q: 'Mi a "fogyatékos ember" kifejezés fő hátránya?',
    opts: [
      'Túl hosszú és nehézkes',
      'Csak az orvosi szemléletben használatos',
      'Az érintettek bántónak és diszkriminatívnak tartják, és nem utal a társadalmi környezetre',
      'Nem elterjedt a köznyelvben'
    ],
    ans: 2,
    exp: 'A "fogyatékos ember" kifejezés hátránya, hogy az érintettek bántónak és diszkriminatívnak tartják, és nem utal a társadalmi környezetre – az átlagtól való negatív eltérés válik a személy fő meghatározójává.',
    diff: 1
  },
  {
    id: 'gyalap_ch2_03',
    w: 102,
    topic: 'Terminológia',
    type: 'tf',
    q: 'A "speciális nevelési szükséglet" fogalma a gyermek hiányosságaira – deficit-leltárra – összpontosít.',
    ans: false,
    exp: 'Nem igaz. A speciális nevelési szükséglet fogalma nem a hiányosságokra, hanem az oktatási teendőkre összpontosít – arra, hogy mit kell tenni.',
    diff: 2
  },
  {
    id: 'gyalap_ch2_04',
    w: 102,
    topic: 'Terminológia',
    type: 'mc',
    q: 'Az "akadályozott ember" kifejezés esetén mire tolódik át a hangsúly?',
    opts: [
      'A személy biológiai károsodására',
      'A környezetre, amely nem alkalmas a személy szükségleteinek kielégítésére',
      'Az orvosi diagnózisra',
      'A szülők felelősségére'
    ],
    ans: 1,
    exp: 'Az "akadályozott ember" fogalomban a hangsúly a környezetre tolódik – arra, amely nem alkalmas a személy szükségleteinek kielégítésére.',
    diff: 2
  },
  {
    id: 'gyalap_ch2_05',
    w: 102,
    topic: 'Terminológia',
    type: 'tf',
    q: 'A "speciális nevelési szükséglet" fogalma szándékosan kerüli a különböző fogyatékossági kategóriákat, és pedagógiai szemléletre tér át.',
    ans: true,
    exp: 'Igaz. A speciális nevelési szükséglet fogalma szándékosan kerüli a fogyatékossági kategóriákat, elszakad a hagyományos orvosi szemlélettől, és pedagógiai szemléletre tér át.',
    diff: 2
  },

  // ─── WHO nomenklatúra ─────────────────────────────────────────────────────

  {
    id: 'gyalap_ch2_06',
    w: 102,
    topic: 'WHO nomenklatúra',
    type: 'mc',
    q: 'Mit jelent a WHO szerint a „károsodás" (impairment)?',
    opts: [
      'Az ember társadalmi funkcióiban bekövetkező zavar',
      'Időszakos vagy állandó anatómiai, élettani vagy pszichológiai veszteség vagy rendellenesség – a biológiai működés zavara',
      'A szenzoros, motoros vagy mentális képességek részleges vagy teljes hiánya',
      'A mindennapi tevékenység tartós akadályozottsága'
    ],
    ans: 1,
    exp: 'A károsodás (impairment) időszakos vagy állandó anatómiai, élettani vagy pszichológiai veszteséget vagy rendellenességet jelent – tehát a biológiai működés zavara.',
    diff: 2
  },
  {
    id: 'gyalap_ch2_07',
    w: 102,
    topic: 'WHO nomenklatúra',
    type: 'mc',
    q: 'Mit jelent a WHO szerint a „fogyatékosság" (disability)?',
    opts: [
      'Időszakos biológiai veszteség',
      'A társadalmi részvétel akadályozottsága',
      'Az ember normális szenzoros, motoros vagy mentális funkcióihoz szükséges képességek részleges vagy teljes hiánya – a speciálisan emberi funkciók zavara',
      'Az egyén kora és társadalmi szerepe szerint elvárható tevékenység tartós akadályozottsága'
    ],
    ans: 2,
    exp: 'A fogyatékosság (disability) az ember normális szenzoros, motoros vagy mentális funkcióihoz szükséges képességek részleges vagy teljes hiányát jelenti – tehát a speciálisan emberi funkciók zavara.',
    diff: 2
  },
  {
    id: 'gyalap_ch2_08',
    w: 102,
    topic: 'WHO nomenklatúra',
    type: 'mc',
    q: 'Mit jelent a WHO szerint a „rokkantság" (handicap)?',
    opts: [
      'Anatómiai rendellenesség',
      'Szenzoros funkciók elvesztése',
      'Az egyén kora, neme és társadalmi szerepe szerint elvárható mindennapi tevékenység tartós akadályozottsága – az ember, mint társadalmi lény funkcióinak zavara',
      'Az orvosi diagnózis eredménye'
    ],
    ans: 2,
    exp: 'A rokkantság (handicap) az egyén kora, neme és társadalmi szerepe szerint elvárható mindennapi tevékenység tartós akadályozottsága – az embernek, mint társadalmi lénynek, társadalmi funkcióiban bekövetkező zavara.',
    diff: 2
  },
  {
    id: 'gyalap_ch2_09',
    w: 102,
    topic: 'WHO nomenklatúra',
    type: 'match',
    q: 'Párosítsa a WHO fogalmakat definícióikkal!',
    pairs: [
      { L: 'Károsodás (impairment)', R: 'Biológiai működés zavara' },
      { L: 'Fogyatékosság (disability)', R: 'Speciálisan emberi funkciók zavara' },
      { L: 'Rokkantság (handicap)', R: 'Társadalmi funkciókban bekövetkező zavar' },
      { L: 'ICF modell részvétel', R: 'A régi "rokkantság" fogalom pozitív megfelelője' }
    ],
    exp: 'Impairment = biológiai; disability = emberi funkciók; handicap = társadalmi funkciók; részvétel = az ICF modellben a rokkantság pozitív megfelelője.',
    diff: 2
  },
  {
    id: 'gyalap_ch2_10',
    w: 102,
    topic: 'WHO nomenklatúra',
    type: 'tf',
    q: 'A WHO ICF modelljében a "rokkantság" fogalom helyébe a "részvétel", a "fogyatékosság" fogalom helyébe a "cselekvőképesség" lépett.',
    ans: true,
    exp: 'Igaz. Az ICF modellben a negatív kicsengésű fogyatékosság kifejezés helyébe a cselekvőképesség, a rokkantság kifejezés helyébe a részvétel lépett.',
    diff: 2
  },
  {
    id: 'gyalap_ch2_11',
    w: 102,
    topic: 'WHO nomenklatúra',
    type: 'order',
    q: 'Rendezze sorrendbe a WHO fogyatékossági folyamatának elemeit (régi modell)!',
    items: [
      'Betegség vagy rendellenesség',
      'Károsodás',
      'Fogyatékosság',
      'Rokkantság'
    ],
    exp: 'Helyes sorrend: Betegség/rendellenesség → Károsodás → Fogyatékosság → Rokkantság.',
    diff: 2
  },

  // ─── Speciális intézetek – hallássérültek ─────────────────────────────────

  {
    id: 'gyalap_ch2_12',
    w: 102,
    topic: 'Speciális intézetek',
    type: 'mc',
    q: 'Ki volt a hallássérültek nevelésével foglalkozó első ismert személy, és mikor?',
    opts: [
      'Charles Michel l\'Épée, 1760-ban',
      'Pedro de Ponce spanyol apát, 1526-ban',
      'Samuel Heinicke, 1727-ben',
      'Frim Jakab, 1875-ben'
    ],
    ans: 1,
    exp: 'A hallássérültek nevelésével először Pedro de Ponce, spanyol apát foglalkozott (1526). Legalább 12 gyermek tanulta meg tőle a szónyelvet, az írást, az olvasást.',
    diff: 2
  },
  {
    id: 'gyalap_ch2_13',
    w: 102,
    topic: 'Speciális intézetek',
    type: 'mc',
    q: 'Mit szorgalmaz a hallássérültek oktatásának francia rendszere (l\'Épée, 1760)?',
    opts: [
      'A szóbeli beszéd kizárólagos tanítását',
      'A jelnyelv és daktil nyelv használatát',
      'A Braille-írás tanítását',
      'A hallókészülékek használatát'
    ],
    ans: 1,
    exp: 'Charles Michel l\'Épée (1760) által kidolgozott francia rendszer a jelnyelv és daktil nyelv használatát szorgalmazza. Az enciklopédista filozófiára alapozta elgondolását.',
    diff: 2
  },
  {
    id: 'gyalap_ch2_14',
    w: 102,
    topic: 'Speciális intézetek',
    type: 'mc',
    q: 'Mi jellemzi a hallássérültek oktatásának német rendszerét (Heinicke)?',
    opts: [
      'A jelnyelv és daktil ábécé alkalmazása',
      'A hallássérültek elsősorban a beszédet tanulják meg – Kant-i filozófia alapján',
      'A Braille-írás tanítása',
      'A természetfilozófia alkalmazása az oktatásban'
    ],
    ans: 1,
    exp: 'Samuel Heinicke (1727) a Kant-i filozófia alapján dolgozta ki a német rendszert – a hallássérülteket elsősorban beszélni tanította, a beszéd látható, érzékelhető elemeit felhasználva.',
    diff: 2
  },
  {
    id: 'gyalap_ch2_15',
    w: 102,
    topic: 'Speciális intézetek',
    type: 'mc',
    q: 'Melyik volt az első magyarországi hallássérültek intézete, és mikor nyílt meg?',
    opts: ['Kolozsvár, 1888-ban', 'Temesvár, 1859-ben', 'Vác, 1802-ben', 'Arad, 1884-ben'],
    ans: 2,
    exp: 'Az első magyarországi hallássérültek intézete Vácon nyílt meg 1802-ben – a bécsi intézet (1779) modellként szolgált számára.',
    diff: 2
  },
  {
    id: 'gyalap_ch2_16',
    w: 102,
    topic: 'Speciális intézetek',
    type: 'order',
    q: 'Rendezze időrendi sorrendbe az erdélyi és magyarországi hallássérültek intézeteinek megnyitóját!',
    items: [
      'Váci intézet',
      'Temesvári intézet',
      'Aradi intézet',
      'Kolozsvári intézet'
    ],
    exp: 'Helyes sorrend: Vác (1802) → Temesvár (1859) → Arad (1884) → Kolozsvár (1888).',
    diff: 3
  },
  {
    id: 'gyalap_ch2_17',
    w: 102,
    topic: 'Speciális intézetek',
    type: 'tf',
    q: 'A bécsi hallássérültek intézete (1779) modellként szolgált az első magyarországi váci intézet számára.',
    ans: true,
    exp: 'Igaz. A bécsi intézet, mely 1779-ben nyitotta meg kapuit, modellként szolgált az első magyarországi intézet – Vác, 1802 – számára.',
    diff: 2
  },
  {
    id: 'gyalap_ch2_18',
    w: 102,
    topic: 'Speciális intézetek',
    type: 'mc',
    q: 'Frim Jakab 1875-ben melyik intézetet hozta létre az értelmi sérültek számára?',
    opts: ['Fehér Kereszt', 'Munka', 'Braille Intézet', 'Kisegítő Iskola'],
    ans: 1,
    exp: 'Frim Jakab 1875-ben létrehozta a Munka elnevezésű intézetet az értelmi sérültek számára. Megnyitásakor egyetlen tanulója volt, de ez a szám gyorsan 7-re szaporodott.',
    diff: 3
  },
  {
    id: 'gyalap_ch2_19',
    w: 102,
    topic: 'Speciális intézetek',
    type: 'match',
    q: 'Párosítsa az intézeteket városaikkal és megnyitási éveikkel!',
    pairs: [
      { L: 'Első m.o. hallássérült intézet', R: 'Vác, 1802' },
      { L: 'Kolozsváron szegény vakok intézete', R: 'Kolozsvár, 1900' },
      { L: 'Süket-vakok oktatása (Adler Simon)', R: '1904' },
      { L: 'Temesvári vakok szakiskolája', R: '1906' }
    ],
    exp: 'Vác 1802 (hallássérültek), Kolozsvár 1900 (vakok), 1904 (süket-vakok, Adler Simon), Temesvár 1906 (vakok szakiskolája).',
    diff: 3
  },
  {
    id: 'gyalap_ch2_20',
    w: 102,
    topic: 'Speciális intézetek',
    type: 'tf',
    q: 'A speciális iskolák létrehozásának eredeti célja az volt, hogy a sérültek a társadalom hasznos tagjaivá váljanak.',
    ans: true,
    exp: 'Igaz. A speciális iskolák eredeti célja az volt, hogy a sérültek a társadalom hasznos tagjaivá váljanak – a cél később megváltozott és diszkriminatívvá vált.',
    diff: 1
  },

  // ─── ISCED kategóriák ─────────────────────────────────────────────────────

  {
    id: 'gyalap_ch2_21',
    w: 102,
    topic: 'ISCED kategóriák',
    type: 'mc',
    q: 'Melyik ISCED kategóriába tartoznak az organikus, orvosilag egyértelműen diagnosztizálható fogyatékosságok (pl. középsúlyos intellektuális képességzavar, hallás-, látás-, mozgássérülés)?',
    opts: ['"A" kategória', '"B" kategória', '"C" kategória', '"D" kategória'],
    ans: 0,
    exp: 'Az "A" kategóriába tartoznak a jellemzően organikus eredetű, orvosilag egyértelműen diagnosztizálható rendellenességek, amelyek kialakulását a család szociális helyzete alig befolyásolja.',
    diff: 2
  },
  {
    id: 'gyalap_ch2_22',
    w: 102,
    topic: 'ISCED kategóriák',
    type: 'mc',
    q: 'Melyik ISCED kategóriába tartoznak a tanulási zavarok, viselkedészavarok és az enyhe intellektuális képességzavar?',
    opts: ['"A" kategória', '"B" kategória', '"C" kategória', '"D" kategória'],
    ans: 2,
    exp: 'A "C" kategóriába sorolhatóak a tanulási zavarok, viselkedészavarok, enyhe intellektuális képességzavar – ahol a sajátos nevelési igény elsődlegesen szociális, gazdasági, kulturális és/vagy nyelvi faktoroknak köszönhető.',
    diff: 2
  },
  {
    id: 'gyalap_ch2_23',
    w: 102,
    topic: 'ISCED kategóriák',
    type: 'tf',
    q: 'Az ISCED "B" kategóriába azok a gyermekek sorolhatók, akik nem tartoznak dominánsan sem az "A", sem a "C" kategóriába.',
    ans: true,
    exp: 'Igaz. Az ISCED "B" kategóriába azok a gyermekek sorolhatóak, akik nem tartoznak dominánsan sem az "A", sem a "C" kategóriába.',
    diff: 2
  },

  // ─── Nevelhetőség ─────────────────────────────────────────────────────────

  {
    id: 'gyalap_ch2_24',
    w: 102,
    topic: 'Nevelhetőség',
    type: 'mc',
    q: 'Hány összetevője van a nevelhetőség tulajdonság-együttesének?',
    opts: ['2', '3', '4', '5'],
    ans: 2,
    exp: 'A nevelhetőség tulajdonság-együttesének négy összetevője van: mit tud a gyermek, hogyan változtatható az állapot, milyen a fejlődési perspektíva, és a szociális beágyazottság.',
    diff: 2
  },
  {
    id: 'gyalap_ch2_25',
    w: 102,
    topic: 'Nevelhetőség',
    type: 'mc',
    q: 'Mi a nevelhetőség negyedik összetevője?',
    opts: [
      'A gyermek biológiai adottságai',
      'A gyermek fejlesztési perspektívái',
      'A gyermeki fejlődés szociális beágyazottsága',
      'Az iskola pedagógiai módszerei'
    ],
    ans: 2,
    exp: 'A nevelhetőség negyedik összetevője a gyermeki fejlődés szociális beágyazottsága – a gyermek szociális/családi környezete erős szocializációs hatást gyakorol, amivel az iskolai nevelésnek számolnia kell.',
    diff: 2
  },
  {
    id: 'gyalap_ch2_26',
    w: 102,
    topic: 'Nevelhetőség',
    type: 'tf',
    q: 'A nevelhetőség korlátozottsága a gyermek formálhatatlanságát jelenti.',
    ans: false,
    exp: 'Nem igaz. A nevelhetőség korlátozottsága nem a gyermek formálhatatlanságát jelenti, hanem az óvoda, iskola működésének korlátozottságát, diszfunkcióját.',
    diff: 2
  },
  {
    id: 'gyalap_ch2_27',
    w: 102,
    topic: 'Nevelhetőség',
    type: 'short',
    q: 'Sorolja fel a nevelhetőség négy összetevőjét!',
    keywords: ['tud', 'változtat', 'perspektíva', 'szociális'],
    exp: 'A négy összetevő: 1) mit tud, hol tart a fejlődésben; 2) hogyan és milyen mértékben változtatható ez az állapot; 3) milyen a fejlődési perspektíva; 4) a gyermeki fejlődés szociális beágyazottsága.',
    diff: 2
  },

  // ─── Utazótanár ───────────────────────────────────────────────────────────

  {
    id: 'gyalap_ch2_28',
    w: 102,
    topic: 'Utazótanár',
    type: 'tf',
    q: 'Az utazótanár kizárólag gyógypedagógus végzettségű személy lehet.',
    ans: false,
    exp: 'Nem igaz. Az utazótanár lehet gyógypedagógus, pszichológus vagy pedagógus; egyes esetekben elegendő a tanítói végzettség is.',
    diff: 2
  },
  {
    id: 'gyalap_ch2_29',
    w: 102,
    topic: 'Utazótanár',
    type: 'mc',
    q: 'Mi az utazótanár elsődleges feladata?',
    opts: [
      'Tantárgyakat tanítani az osztályban a tanár helyett',
      'A tanár munkájának hatékonyságát növelni, és egyéni fejlesztési tervet kidolgozni minden gyermek számára',
      'A szülőkkel való kapcsolattartás kizárólagos ellátása',
      'A speciális iskolai oktatás megszervezése'
    ],
    ans: 1,
    exp: 'Az utazótanár feladata a tanár munkájának hatékonyságát növelni, minden gyermek számára egyénre szabott fejlesztési tervet kidolgozni, és segíteni a tantervi adaptáció megvalósításában.',
    diff: 2
  },
  {
    id: 'gyalap_ch2_30',
    w: 102,
    topic: 'Utazótanár',
    type: 'mc',
    q: 'Miért szűkös a szakemberkínálat az utazótanárok körében Romániában?',
    opts: [
      'Mert az utazótanári munkát alulfizeteik',
      'Mert 1975-ben megszűnt a gyógypedagógus- és pszichológus-képzés, amelyet csak 1990-ben indítottak újra',
      'Mert az utazótanári végzettség nem elismert Romániában',
      'Mert a szülők nem engedik be az utazótanárokat az iskolákba'
    ],
    ans: 1,
    exp: 'A szakemberhiány azzal magyarázható, hogy 1975-ben megszűnt Romániában a gyógypedagógus- és pszichológus-képzés, amelyet csak 1990-ben indítottak újra Bukarestben és Kolozsváron.',
    diff: 3
  },
];
