// Worksheet 7 exercises — Specifikus tanulási zavarok · Alapfunkciók · Oktatási értékelés
// Source: gyakorlas_7_megoldasok_cl.docx
const EXERCISES_W7 = [
  // ─── I. TÉTEL – Specifikus tanulási zavarok ───────────────────────────────
  {
    id:'w7_01', w:7, topic:'Tanulási zavarok', type:'mc', diff:2,
    q:'Mi jellemzi a specifikus tanulási zavart (SLD) a definíció szerint?',
    opts:[
      'Bármely okra visszavezethető, átmeneti iskolai lemaradás',
      'Neurobiológiai eredetű, tartós állapot átlagos vagy átlag feletti intelligencia mellett',
      'Kizárólag alacsony intelligenciából eredő tanulási elmaradás',
      'Érzékszervi (látás-, hallás-) sérülésből fakadó nehézség'
    ],
    ans:1,
    exp:'Az SLD neurobiológiai eredetű, iskoláskor elején jelentkező, élethosszig tartó állapot, amely az alapkészségeket nehezíti annak ellenére, hogy az intelligencia átlagos/átlag feletti, az érzékszervek épek, és nincs súlyos szociokulturális depriváció.'
  },
  {
    id:'w7_02', w:7, topic:'Tanulási zavarok', type:'tf', diff:2,
    q:'A „tanulási nehézség” tágabb gyűjtőfogalom, mint a specifikus tanulási zavar, és nem feltételez neurobiológiai alapú deficitet.',
    ans:true,
    exp:'Igaz. A tanulási nehézség bármely (motivációs, érzelmi, módszertani, egészségügyi, családi, szociokulturális) okra visszavezethető, és megfelelő pedagógiai beavatkozással gyakran teljesen kompenzálható.'
  },
  {
    id:'w7_03', w:7, topic:'Tanulási zavarok', type:'match', diff:1,
    q:'Párosítsa a specifikus tanulási zavart az érintett területtel!',
    pairs:[
      { L:'Diszlexia', R:'Olvasás (szóolvasás pontossága, folyékonysága)' },
      { L:'Diszgráfia', R:'Írás (betűformálás, helyesírás)' },
      { L:'Diszkalkulia', R:'Számolás (számfogalom, műveletek)' },
      { L:'Tanulási nehézség', R:'Tágabb, nem neurobiológiai lemaradás' }
    ],
    exp:'Diszlexia = olvasási zavar (fonológiai deficit), diszgráfia = írászavar (grafomotoros/ortográfiai), diszkalkulia = számolási zavar; a tanulási nehézség ennél tágabb gyűjtőfogalom.'
  },
  {
    id:'w7_04', w:7, topic:'Tanulási zavarok', type:'mc', diff:2,
    q:'Melyik a diszlexia jellemző tünete?',
    opts:[
      'Rendezetlen, egyenetlen íráskép és görcsös írásmozgás',
      'Lassú, szótagoló dekódolás és betűtévesztés (pl. b–d, p–q felcserélése)',
      'Az ujjszámolásra való tartós támaszkodás',
      'A számegyenesen való tájékozódás bizonytalansága'
    ],
    ans:1,
    exp:'A diszlexiát lassú, szótagoló, hibás dekódolás, betű- és hangtévesztés (b–d, p–q) jellemzi; a lassú dekódolás miatt a szövegértés is sérül. A rendezetlen íráskép a diszgráfia, az ujjszámolás a diszkalkulia tünete.'
  },
  {
    id:'w7_05', w:7, topic:'Tanulási zavarok', type:'mc', diff:2,
    q:'Mit jelent a szubitizáció hiánya, amely a diszkalkulia egyik tünete?',
    opts:[
      'A betűk formájának felismerési nehézsége',
      'A mennyiség és a számjegy közötti azonnali megfeleltetés nehézsége',
      'A sorvezetés elvesztése olvasás közben',
      'A helyesírási szabályok alkalmazásának zavara'
    ],
    ans:1,
    exp:'A szubitizáció a kis mennyiségek azonnali, számlálás nélküli felismerése. Hiánya diszkalkuliánál a mennyiség–számjegy azonnali megfeleltetését nehezíti, gyakran tartós ujjszámolással és helyiérték-tévesztésekkel együtt.'
  },
  {
    id:'w7_06', w:7, topic:'Azonosítás', type:'order', diff:2,
    q:'Helyezze sorrendbe a tanulási zavar azonosításának és komplex értékelésének négy lépését!',
    items:[
      'Észlelés / szűrés (gyanú felmerülése)',
      'Beutalás és előzetes konzultáció (CJRAE/CMBRAE, szülői beleegyezés)',
      'Komplex, multidiszciplináris kivizsgálás',
      'Diagnózis és beavatkozási terv (PIP) kidolgozása'
    ],
    exp:'A négy lépés: 1. észlelés/szűrés → 2. beutalás és konzultáció (CJRAE/CMBRAE, szülői beleegyezés) → 3. komplex multidiszciplináris kivizsgálás → 4. diagnózis és a PIP kidolgozása.'
  },
  {
    id:'w7_07', w:7, topic:'Azonosítás', type:'fill', diff:2,
    q:'A specifikus tanulási zavar gyanújával a tanulót a megye/főváros oktatási erőforrás- és tanácsadó központjához, a ________ iskolapszichológusához vagy logopédusához irányítják (a román rövidítés kérjük).',
    ans:'CJRAE',
    exp:'A beutalás a CJRAE/CMBRAE (Centrul Județean / al Municipiului București de Resurse și Asistență Educațională) szakemberéhez történik, a szülői beleegyezés megszerzésével.'
  },
  {
    id:'w7_08', w:7, topic:'Fejlesztési módszerek', type:'mc', diff:2,
    q:'Mi jellemzi az Orton-Gillingham elvű, multiszenzoros nyelvi fejlesztést?',
    opts:[
      'A betű-hang megfeleltetést kizárólag hallás útján tanítja',
      'A betű-hang megfeleltetést egyszerre vizuális, auditív, kinesztetikus és taktilis csatornán tanítja',
      'A tanulót teljesen felmenti az olvasás gyakorlása alól',
      'Csak a helyesírási szabályok memorizálására épít'
    ],
    ans:1,
    exp:'A multiszenzoros, strukturált-szekvenciális megközelítés egyszerre több csatornát mozgósít: pl. a tanuló dörzspapírra írja a betűt, közben kimondja a hangot és „levegőbe írja” – a mozgásos memória is megerősíti a vizuális-auditív kapcsolatot.'
  },
  {
    id:'w7_09', w:7, topic:'Alapfunkciók', type:'short', diff:2,
    q:'Mit jelent a fonológiai tudatosság, és miért fontos?',
    keywords:['hang','olvasás'],
    exp:'A fonológiai tudatosság a beszédhangok tudatos felismerésének és manipulálásának (szegmentálás, szintézis, rímfelismerés) képessége – az olvasás-írás elsajátításának alapvető előfeltétele; gyengesége szorosan összefügg az olvasási nehézségekkel.'
  },
  {
    id:'w7_10', w:7, topic:'Tanulási zavarok', type:'mc', diff:2,
    q:'Melyik a helyes kompenzáció diszlexia esetén – és mi a kerülendő „felmentés”?',
    opts:[
      'Kompenzáció: teljes mentesítés az olvasás alól; kerülendő: hosszabb idő',
      'Kompenzáció: hosszabb munkaidő és felolvasott szövegek; kerülendő: az olvasás gyakorlása alóli teljes mentesítés',
      'Kompenzáció: a matematika alóli felmentés; kerülendő: számolótábla',
      'Kompenzáció: kizárólag írásbeli számonkérés; kerülendő: szóbeli felelet'
    ],
    ans:1,
    exp:'Javasolt kompenzáció: hosszabb munkaidő, a szövegek felolvasása/hangos elérhetősége. Kerülendő a teljes mentesítés az olvasás gyakorlása alól, mert az tovább mélyíti a lemaradást és megfosztja a fejlődési lehetőségtől.'
  },
  {
    id:'w7_11', w:7, topic:'Tanulási zavarok', type:'tf', diff:1,
    q:'Diszgráfia esetén javasolt kompenzáció a számítógép/billentyűzet használatának engedélyezése az írásbeli feladatoknál.',
    ans:true,
    exp:'Igaz. Diszgráfiánál a billentyűzet-használat és a csökkentett másolási feladat javasolt kompenzáció; kerülendő viszont az írásbeli számonkérés teljes elhagyása minden tantárgynál (helyette adaptált forma).'
  },
  {
    id:'w7_12', w:7, topic:'CES együttműködés', type:'mc', diff:1,
    q:'A tanulási zavarral küzdő tanuló támogatásának alapelve a háromoldalú együttműködés. Kik alkotják?',
    opts:[
      'Csak a tanuló és a pedagógus',
      'Család – osztálypedagógus – fejlesztő szakember',
      'Iskolaigazgató – tanfelügyelő – szülő',
      'Kizárólag a multidiszciplináris orvosi team'
    ],
    ans:1,
    exp:'A modell három szereplője: a család (otthoni gyakorlás, érzelmi biztonság), az osztálypedagógus (differenciálás, PIP betartása) és a fejlesztő szakember (célzott foglalkozás, monitorozás, koordináció).'
  },

  // ─── II. TÉTEL – Alapfunkciók fejlesztése ─────────────────────────────────
  {
    id:'w7_13', w:7, topic:'Tanulási nehézség', type:'mc', diff:2,
    q:'Miben különbözik az iskolai tanulási nehézség a specifikus tanulási zavartól?',
    opts:[
      'Mindig neurobiológiai deficit áll a hátterében',
      'Tágabb és heterogénebb fogalom, hátterében nem feltétlenül áll neurobiológiai deficit',
      'Kizárólag klinikai diagnózissal állapítható meg',
      'Soha nem igényel pedagógiai beavatkozást'
    ],
    ans:1,
    exp:'A tanulási nehézség tágabb, heterogénebb fogalom: oka lehet a kognitív alapfunkciók éretlensége, motivációs-érzelmi tényező, rossz stratégia, módszertani hiányosság vagy kedvezőtlen környezet; nem feltétlen igényel klinikai diagnózist, de időben pedagógiai beavatkozást igen.'
  },
  {
    id:'w7_14', w:7, topic:'Tanulási nehézség', type:'mc', diff:2,
    q:'Az alábbiak közül melyik rizikófaktor a tanulási nehézség kialakulásában?',
    opts:[
      'Támogató, ingergazdag családi környezet',
      'Biztonságos kötődés',
      'Alacsony szocioökonómiai státusz és kulturális ingerszegénység',
      'Pozitív tanár-diák kapcsolat'
    ],
    ans:2,
    exp:'Rizikófaktorok pl.: alacsony szocioökonómiai státusz, instabil családi háttér, korai fejlődési elmaradás, gyakori iskolaváltás/hiányzás, alacsony önértékelés. A többi felsorolt tényező védőfaktor.'
  },
  {
    id:'w7_15', w:7, topic:'Alapfunkciók', type:'short', diff:3,
    q:'Nevezzen meg legalább három iskolai tanuláshoz kapcsolódó kognitív alapfunkciót!',
    keywords:['munkamemória','végrehajtó','feldolgozási'],
    exp:'Az öt alapfunkció: fonológiai tudatosság, munkamemória, végrehajtó funkciók, verbális megértés és feldolgozási sebesség.'
  },
  {
    id:'w7_16', w:7, topic:'Alapfunkciók', type:'mc', diff:2,
    q:'Mi a következménye a gyenge munkamemóriának a tanulásban?',
    opts:[
      'A tanuló nehezen követi a többlépéses utasításokat, elveszíti a fonalat',
      'A tanuló nem képes a betűk formáját felismerni',
      'A tanuló mindig impulzívan cselekszik',
      'A tanuló látásélessége csökken'
    ],
    ans:0,
    exp:'A munkamemória az információ rövid távú tárolásáért és egyidejű feldolgozásáért felel; gyengesége esetén a tanuló nehezen követi a többlépéses utasításokat és elveszíti a fonalat hosszabb feladatoknál.'
  },
  {
    id:'w7_17', w:7, topic:'Alapfunkciók', type:'mc', diff:2,
    q:'Mely képességek tartoznak a végrehajtó funkciók közé?',
    opts:[
      'Kizárólag a látás és a hallás',
      'Tervezés, gátlás, kognitív rugalmasság és önmonitorozás',
      'A finommotorika és a testséma',
      'A szókincs és a mondatszerkezet ismerete'
    ],
    ans:1,
    exp:'A végrehajtó funkciók (tervezés, gátlás, kognitív rugalmasság, önmonitorozás) teszik lehetővé a célirányos, szervezett tanulási viselkedést; gyengeségük figyelmetlenséghez, impulzivitáshoz, szervezetlenséghez vezet.'
  },
  {
    id:'w7_18', w:7, topic:'Metakogníció', type:'order', diff:2,
    q:'Helyezze logikus sorrendbe a négy metakognitív tanulási stratégiát egy feladat elvégzése során!',
    items:[
      'Tervezés (célkitűzés, lépések átgondolása)',
      'Stratégiaválasztás (a feladathoz illő stratégia kiválasztása)',
      'Önmonitorozás (folyamatos önellenőrzés a feladat közben)',
      'Önértékelés (visszatekintés, a stratégia hatékonyságának értékelése)'
    ],
    exp:'A négy metakognitív stratégia: tervezés → stratégiaválasztás/-váltás → önmonitorozás (közbeni önellenőrzés) → önértékelés (utólagos értékelés).'
  },
  {
    id:'w7_19', w:7, topic:'Alapfunkciók', type:'mc', diff:2,
    q:'A „Növekvő lista” gyakorlat (egyre hosszabb utasítás-sorozatok megjegyzése és végrehajtása) melyik alapfunkciót fejleszti elsősorban?',
    opts:['Feldolgozási sebesség','Munkamemória','Verbális megértés','Lateralitás'],
    ans:1,
    exp:'A „Növekvő lista” a munkamemóriát fejleszti: a tanulónak egyre hosszabb utasítás-sorozatokat kell megjegyeznie és sorban végrehajtania.'
  },
  {
    id:'w7_20', w:7, topic:'Alapfunkciók', type:'mc', diff:2,
    q:'A „mondd az ellenkezőjét” és a Stroop-típusú (szín-szó inkongruencia) játékok melyik végrehajtó funkciót célozzák?',
    opts:[
      'A gátlást (egy automatikus válasz visszatartását)',
      'A finommotorikát',
      'A hallásélességet',
      'A testsémát'
    ],
    ans:0,
    exp:'Ezek a feladatok a gátlást és a kognitív rugalmasságot fejlesztik: a tanulónak egy automatikus (megszokott) választ kell gátolnia, hogy a helyes választ adja meg.'
  },
  {
    id:'w7_21', w:7, topic:'CES együttműködés', type:'tf', diff:2,
    q:'Az alapfunkciók (munkamemória, végrehajtó funkciók) fejlesztése kiemelten fontos ADHD, enyhe értelmi akadályozottság és autizmus spektrumzavar esetén, mert e funkciók gyakran elsődlegesen érintettek.',
    ans:true,
    exp:'Igaz. E CES-kategóriáknál az alapfunkciók gyakran elsődlegesen érintettek, ezért a PIP-nek ezekre épülő, egyénre szabott célokat kell tartalmaznia, szoros együttműködésben a gyógypedagógussal.'
  },

  // ─── III. TÉTEL – Oktatási értékelés ──────────────────────────────────────
  {
    id:'w7_22', w:7, topic:'Értékelés', type:'mc', diff:2,
    q:'Az értékelés melyik funkciója a tanuló előzetes tudásának és hiányosságainak feltérképezése?',
    opts:['Motivációs funkció','Diagnosztikus funkció','Szelekciós/minősítő funkció','Prognosztikus funkció'],
    ans:1,
    exp:'A diagnosztikus funkció a tanuló előzetes tudásának és hiányosságainak feltérképezése. A többi: prognosztikus (előrejelzés), motivációs (ösztönzés), szelekciós (osztályozás), szabályozó/fejlesztő (a folyamat korrekciója).'
  },
  {
    id:'w7_23', w:7, topic:'Értékelés', type:'order', diff:1,
    q:'Helyezze sorrendbe az értékelés három formáját a tanítási folyamatban elfoglalt helyük (időzítésük) szerint!',
    items:[
      'Kezdő / diagnosztikus értékelés (evaluare inițială)',
      'Formatív / folyamatos értékelés (evaluare formativă)',
      'Szummatív / záró értékelés (evaluare sumativă)'
    ],
    exp:'Időzítés szerint: kezdő/diagnosztikus (a folyamat elején) → formatív/folyamatos (a folyamat közben) → szummatív/záró (a folyamat végén).'
  },
  {
    id:'w7_24', w:7, topic:'Értékelés', type:'match', diff:2,
    q:'Párosítsa az értékelési item-típust a rá jellemző vonással!',
    pairs:[
      { L:'Objektív item', R:'Előre meghatározott helyes válasz, gyors javítás' },
      { L:'Félig objektív item', R:'Rövid, nem előre megadott válasz (kiegészítés)' },
      { L:'Szubjektív item', R:'Szabad válaszalkotás, magasabb rendű gondolkodás' },
      { L:'Barem', R:'Pontokra bontott javítási/pontozási útmutató' }
    ],
    exp:'Objektív = előre adott helyes válasz (feleletválasztós, igaz-hamis); félig objektív = rövid kiegészítés; szubjektív = esszé/kifejtés; a barem a pontozási útmutató, amely a szubjektív itemek objektivitását növeli.'
  },
  {
    id:'w7_25', w:7, topic:'Értékelés', type:'mc', diff:2,
    q:'Mi az objektív itemek (pl. feleletválasztós) egyik fő korlátja?',
    opts:[
      'Nagyon lassan javíthatók',
      'Főleg a felismerést mérik, nehezen mérnek magasabb rendű gondolkodást',
      'Mindig kétértelmű a helyes válasz',
      'Csak szóban alkalmazhatók'
    ],
    ans:1,
    exp:'Az objektív itemek gyorsan javíthatók és egyértelmű a helyes válaszuk, de főként a felismerést mérik – a magasabb rendű műveleteket (elemzés, szintézis) nehezen. A disztraktoroknak reálisnak, a megfogalmazásnak egyértelműnek kell lennie.'
  },
  {
    id:'w7_26', w:7, topic:'Értékelés', type:'mc', diff:2,
    q:'Miért szükséges részletes barem (pontozási útmutató) a szubjektív (esszé) itemekhez?',
    opts:[
      'Mert a javítás így gyorsabb, mint a feleletválasztósnál',
      'Az objektivitás növelésére és a javítók közötti egyezés biztosítására',
      'Mert a szubjektív item csak a felismerést méri',
      'Mert nincs szükség helyes válaszra'
    ],
    ans:1,
    exp:'A szubjektív item szabad válaszalkotást és magasabb rendű gondolkodást mér, de nagyobb a szubjektivitás-kockázat; a részletes, pontokra bontott barem növeli az objektivitást és a javítók közötti egyezést.'
  },
  {
    id:'w7_27', w:7, topic:'Értékelés', type:'mc', diff:3,
    q:'Melyik értékelési mód viszonyítja a tanuló teljesítményét a saját korábbi teljesítményéhez?',
    opts:[
      'Normaorientált értékelés',
      'Kritériumorientált értékelés',
      'Egyéni fejlődéshez viszonyított (ipszatív) értékelés',
      'Szelekciós értékelés'
    ],
    ans:2,
    exp:'Az ipszatív (egyéni fejlődéshez viszonyított) értékelés a tanuló aktuális teljesítményét saját korábbi szintjéhez méri – különösen fontos a tanulási zavarral küzdőknél, mert a haladást a saját kiindulóponthoz mérve teszi láthatóvá és motiválóvá.'
  },
  {
    id:'w7_28', w:7, topic:'Értékelés', type:'mc', diff:2,
    q:'Mit jelent a halo-effektus az értékelésben?',
    opts:[
      'A tanuló előzetes elvárásai befolyásolják a saját teljesítményét',
      'A tanulóról korábban kialakult általános benyomás befolyásolja az adott feladat objektív megítélését',
      'A pedagógus mindig szigorúbban értékel',
      'A tanuló a referenciacsoporthoz viszonyít'
    ],
    ans:1,
    exp:'A halo-effektus: a tanulóról kialakult általános benyomás (pl. „jó tanuló”) torzítja az adott feladat objektív megítélését.'
  },
  {
    id:'w7_29', w:7, topic:'Értékelés', type:'tf', diff:2,
    q:'A Pygmalion-effektus (elvárás-hatás) azt jelenti, hogy a pedagógus előzetes elvárásai tudattalanul befolyásolják az értékelés szigorát vagy engedékenységét.',
    ans:true,
    exp:'Igaz. A Pygmalion-/elvárás-hatás során a pedagógus előzetes elvárásai (pl. a CES-besorolás ismerete) tudattalanul befolyásolják az értékelést – ezt tudatosan kezelni kell az objektivitás érdekében.'
  },
  {
    id:'w7_30', w:7, topic:'Értékelés', type:'mc', diff:2,
    q:'Mi a portfólió mint korszerű értékelési módszer fő előnye?',
    opts:[
      'Egyszerre méri az egész osztályt egy óra alatt',
      'A fejlődési folyamatot időben követi, a tanuló saját munkáit gyűjti és reflektál rájuk',
      'Teljesen objektív és gyorsan standardizálható',
      'Kizárólag a végterméket rögzíti, a folyamatot nem'
    ],
    ans:1,
    exp:'A portfólió időben követi a fejlődési folyamatot, a tanuló saját munkáit gyűjti és reflektál rájuk; korlátja, hogy időigényes összeállítani/értékelni és nehezebben standardizálható.'
  }
];
