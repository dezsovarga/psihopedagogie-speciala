// Valós vizsgatétel — 2019 (3. változat)
// Forrás: real_exam_subjects/gyakorlas_2019_megoldasok.docx
// Egy önálló, évenkénti szekció. w: 2019 (a w érték maga az év).
// Minden kérdéstípust ez az egy fájl tartalmaz (standard + define + essay + list).
const EXERCISES_REAL_2019 = [
  // ─── I. téma – Az SNI/CES tanulók fejlődésének értékelése ──────────────────
  {
    id:'real_2019_01', w:2019, topic:'Értékelés', type:'mc', diff:2,
    q:'Mi az értékelési folyamat a definíció szerint?',
    opts:[
      'A tanulók osztályzatainak év végi rögzítése',
      'A tanulók teljesítményére, nehézségeire és lehetőségeire vonatkozó releváns információk rendszeres és folyamatos összegyűjtésének, elemzésének és értelmezésének folyamata',
      'A tananyag tematikai területekre bontása',
      'A szülőkkel való rendszeres kapcsolattartás'
    ],
    ans:1,
    exp:'Az értékelés a tanulók teljesítményére, nehézségeire és lehetőségeire vonatkozó információk rendszeres és folyamatos összegyűjtésének, elemzésének és értelmezésének folyamata; célja a pedagógiai döntések megalapozása és a beavatkozás irányítása.'
  },
  {
    id:'real_2019_02', w:2019, topic:'Értékelés', type:'mc', diff:2,
    q:'Mit jelent az értékelés diagnosztikai funkciója?',
    opts:[
      'A tanuló év végi osztályzatának megállapítását',
      'A tanuló aktuális pszicho-intellektuális és szociális-érzelmi fejlettségi szintjének azonosítását, a nehézségi területek és a fejlődési lehetőségek feltárását',
      'A szülők tájékoztatását a házi feladatokról',
      'Az iskola infrastruktúrájának felmérését'
    ],
    ans:1,
    exp:'A diagnosztikai funkció a tanuló aktuális fejlettségi szintjének azonosítását, valamint a nehézségi területek és a fejlődési lehetőségek feltárását jelenti; ez teszi lehetővé az egyéni programok kidolgozását.'
  },
  {
    id:'real_2019_03', w:2019, topic:'Értékelés', type:'match', diff:2,
    q:'Párosítsa az értékelés fogalmát a tartalmával!',
    pairs:[
      { L:'Érvényesség', R:'Pontosan azt méri, amit mérni kíván' },
      { L:'Megbízhatóság', R:'Az eredmények állandók és megismételhetők' },
      { L:'Relevancia', R:'A pedagógiai döntésekhez hasznos információt ad' },
      { L:'Diagnosztikai funkció', R:'A fejlettségi szint és a nehézségek feltárása' }
    ],
    exp:'Az értékelés három alapvető kritériuma: érvényesség (azt méri, amit kell), megbízhatóság (állandó, megismételhető), relevancia (hasznos a döntésekhez). A diagnosztikai funkció a fejlettségi szintet tárja fel.'
  },
  {
    id:'real_2019_04', w:2019, topic:'Értékelés', type:'tf', diff:1,
    q:'Az SNI/CES gyermek értékelése folyamatos, mert a pedagógiai folyamat minden szakaszában történik, nem csupán annak elején vagy végén.',
    ans:true,
    exp:'Igaz. Az értékelés folyamatos, mert rendszeresen, a pedagógiai folyamat minden szakaszában zajlik; és összetett, mert több fejlődési területre kiterjed.'
  },
  {
    id:'real_2019_05', w:2019, topic:'Értékelés', type:'short', diff:2,
    q:'Nevezzen meg legalább két fejlődési területet, amelyre az SNI/CES gyermek összetett értékelése kiterjed!',
    keywords:['kognitív', 'érzelmi'],
    exp:'Az összetett értékelés több területre terjed ki: kognitív, érzelmi, viselkedéses, mozgásos és adaptív területre; változatos módszereket és multidiszciplináris csapatot igényel.'
  },
  {
    id:'real_2019_06', w:2019, topic:'Értékelés', type:'mc', diff:2,
    q:'Mit jelent az inkluzív értékelés?',
    opts:[
      'Az értékelési folyamat egyénre szabása a tanuló sajátosságai szerint',
      'Az értékelési módszerek és eszközök adaptálása, hogy minden tanuló méltányosan részt vehessen a folyamatban, sokféleségük tiszteletben tartásával',
      'Kizárólag standardizált tesztek alkalmazása',
      'Az értékelés teljes mellőzése a stressz elkerülésére'
    ],
    ans:1,
    exp:'Az inkluzív értékelés az értékelési módszerek és eszközök adaptálása, hogy minden tanuló méltányosan részt vehessen, a sokféleség tiszteletben tartásával. (A differenciált értékelés az egyénre szabást jelenti.)'
  },
  {
    id:'real_2019_07', w:2019, topic:'Értékelés', type:'mc', diff:2,
    q:'Mit jelent a differenciált értékelés?',
    opts:[
      'Minden tanuló azonos feladatot és időt kap',
      'Az értékelési folyamat egyénre szabása az egyes SNI/CES tanulók kognitív, érzelmi és mozgásos sajátosságai szerint',
      'Csak a leggyengébb tanulók értékelése',
      'A tanulók rangsorolása osztályzat szerint'
    ],
    ans:1,
    exp:'A differenciált értékelés az értékelési folyamat egyénre szabása az egyes SNI/CES tanulók kognitív, érzelmi és mozgásos sajátosságai szerint.'
  },
  {
    id:'real_2019_08', w:2019, topic:'Értékelés', type:'fill', diff:2,
    q:'Az értékelés akkor __________, ha pontosan azt méri, amit mérni kíván (az értékelés egyik alapvető kritériuma).',
    ans:'érvényes',
    exp:'Az érvényesség kritériuma azt jelenti, hogy az értékelés pontosan azt mérje, amit mérni kíván.'
  },

  // ─── II. téma – A fejlődést meghatározó tényezők ──────────────────────────
  {
    id:'real_2019_09', w:2019, topic:'Fejlődési tényezők', type:'mc', diff:2,
    q:'Mit jelent az öröklődés a gyermek fejlődésében?',
    opts:[
      'A gyermeket körülvevő családi és társadalmi tényezők összessége',
      'A biológiai, kognitív és érzelmi tulajdonságok genetikai információ útján történő átadása a szülőktől a gyermekeknek',
      'A tudatos, szervezett nevelési folyamat',
      'Az iskola által közvetített tudás'
    ],
    ans:1,
    exp:'Az öröklődés a biológiai, kognitív és érzelmi tulajdonságok genetikai átadása a szülőktől a gyermekeknek; meghatározza a testi, értelmi és érzelmi hajlamokat.'
  },
  {
    id:'real_2019_10', w:2019, topic:'Fejlődési tényezők', type:'mc', diff:2,
    q:'Melyik állítás igaz a környezetre mint fejlődési tényezőre?',
    opts:[
      'Kizárólag a genetikai állományt jelenti',
      'A gyermek fejlődését alakító külső (családi, iskolai, társadalmi, kulturális) tényezők összessége, amely serkentheti vagy gátolhatja a genetikai lehetőségek kibontakozását',
      'Csak az iskolai tananyagot foglalja magában',
      'Nincs hatása a fejlődésre'
    ],
    ans:1,
    exp:'A környezet a gyermek fejlődését alakító külső – családi, iskolai, társadalmi és kulturális – tényezők összessége; minősége serkentheti vagy gátolhatja a genetikai lehetőségek kibontakozását.'
  },
  {
    id:'real_2019_11', w:2019, topic:'Fejlődési tényezők', type:'match', diff:2,
    q:'Párosítsa az emberi szervezet fejlődési szintjét a tartalmával!',
    pairs:[
      { L:'Biológiai fejlődés', R:'Testi növekedés és érés (magasság, súly, szervek)' },
      { L:'Kognitív fejlődés', R:'Gondolkodás, emlékezet, figyelem, nyelv fejlődése' },
      { L:'Szociális-érzelmi fejlődés', R:'Társas kapcsolatok, érzelemszabályozás, identitás' },
      { L:'Nevelés', R:'Szervezett, tudatos folyamat a képességek fejlesztésére' }
    ],
    exp:'A fejlődés három szintje: biológiai (testi növekedés), kognitív (gondolkodás, emlékezet, nyelv) és szociális-érzelmi (kapcsolatok, érzelemszabályozás). A nevelés a képességek fejlesztésének tudatos folyamata.'
  },
  {
    id:'real_2019_12', w:2019, topic:'Fejlődési tényezők', type:'match', diff:2,
    q:'Párosítsa a környezeti tényezőt a gyermek fejlődésére gyakorolt hatásával!',
    pairs:[
      { L:'Család', R:'Érzelmi támogatás, viselkedési modellek, alapvető értékek' },
      { L:'Iskola', R:'Kognitív, társas és erkölcsi kompetenciák fejlődése' },
      { L:'Kortárscsoport', R:'Szocializáció, normák elfogadása, együttműködés' },
      { L:'Közösség', R:'Kulturális és gazdasági környezet, az identitás alakulása' }
    ],
    exp:'A család érzelmi támogatást és értékeket ad; az iskola kompetenciákat fejleszt; a kortárscsoport a szocializációt segíti; a közösség a kulturális-gazdasági keretet biztosítja.'
  },
  {
    id:'real_2019_13', w:2019, topic:'Fejlődési tényezők', type:'tf', diff:2,
    q:'A nevelés kompenzáló szerepet tölt be: fejleszti a megmaradt képességeket, megelőzi a visszaesést és elősegíti az iskolai és társadalmi integrációt.',
    ans:true,
    exp:'Igaz. A nevelés kompenzáló szerepe: fejleszti a megmaradt képességeket, megelőzi a visszaesést, és elősegíti az integrációt – a támogató környezetben az adaptált nevelés maximalizálhatja a gyermek lehetőségeit.'
  },
  {
    id:'real_2019_14', w:2019, topic:'Fejlődési tényezők', type:'mc', diff:2,
    q:'Mi a nevelés szerepe a fejlődésben?',
    opts:[
      'Kizárólag a genetikai hajlamok rögzítése',
      'Kibontakoztatja az öröklött lehetőségeket, alakítja a viselkedést és a társas kompetenciákat, kompenzálja a hiányosságokat és korrigálja a kedvezőtlen hatásokat',
      'A környezet teljes figyelmen kívül hagyása',
      'Csak a testi növekedés biztosítása'
    ],
    ans:1,
    exp:'A nevelés kibontakoztatja az öröklött lehetőségeket, alakítja a viselkedést és a társas kompetenciákat, kompenzálja a hiányosságokat, és korrigálja az öröklődés és a környezet kedvezőtlen hatásait.'
  },

  // ─── III. téma – A pszichopedagógus módszertani kompetenciái ──────────────
  {
    id:'real_2019_15', w:2019, topic:'Tanterv', type:'mc', diff:3,
    q:'Mit jelentenek a tantervi standardok?',
    opts:[
      'Az egyes tantárgyakra jutó heti óraszámot rögzítő dokumentum',
      'A tanulóktól egyes iskolai szakaszok végén elvárt teljesítményszintek, amelyeket az elsajátítandó kompetenciák fejeznek ki, és amelyek biztosítják a pedagógiai folyamat egységességét',
      'A tanulók egyéni fejlesztési terve',
      'A szülői értekezletek rendje'
    ],
    ans:1,
    exp:'A tantervi standardok az egyes iskolai szakaszok végén elvárt teljesítményszintek (elsajátítandó kompetenciák); irányítják az értékelést és iskolatípustól/térségtől függetlenül biztosítják a pedagógiai folyamat egységességét.'
  },
  {
    id:'real_2019_16', w:2019, topic:'Tanterv', type:'mc', diff:2,
    q:'Mi a kerettanterv (planul-cadru)?',
    opts:[
      'A tanuló napi órarendje',
      'Hivatalos dokumentum, amely meghatározza az oktatás szintek és profilok szerinti szerkezetét, a tantárgyakra jutó heti óraszámot és a választható órák arányát',
      'A pedagógus egyéni jegyzete',
      'Az iskolai házirend'
    ],
    ans:1,
    exp:'A kerettanterv hivatalos dokumentum, amely meghatározza az oktatás szintek és profilok szerinti szerkezetét, a heti óraszámokat és a választható órák arányát; biztosítja a tantervi területek egyensúlyát és az oktatás hozzáigazítását a tanulók szükségleteihez.'
  },
  {
    id:'real_2019_17', w:2019, topic:'Kooperatív tanulás', type:'mc', diff:2,
    q:'Mi jellemzi a kooperatív tanulást?',
    opts:[
      'A tanulók önállóan, egymástól elszigetelten dolgoznak',
      'A tanulók kis csoportokban dolgoznak, és minden tanuló sikere saját erőfeszítésétől és a társaknak nyújtott támogatástól is függ',
      'Kizárólag a pedagógus ad elő, a tanulók passzívak',
      'A leggyorsabb tanuló old meg mindent'
    ],
    ans:1,
    exp:'A kooperatív tanulásban a tanulók kis csoportokban dolgoznak, és minden tanuló sikere saját erőfeszítésétől és a társaknak nyújtott támogatástól is függ; fejleszti a társas kompetenciákat és támogatja az SNI/CES tanulók inklúzióját.'
  },
  {
    id:'real_2019_18', w:2019, topic:'Kooperatív tanulás', type:'order', diff:2,
    q:'Helyezze sorrendbe a kooperatív tanulás két szakaszát!',
    items:[
      'Csoportalakítás (heterogén csoportok a képességek és tanulási stílusok szerint)',
      'Reflexiós szakasz (záróbeszélgetés az együttműködésről és a közös teljesítményről)'
    ],
    exp:'A kooperatív tanulás két szakasza: (1) csoportalakítás – heterogén csoportok kialakítása; (2) reflexiós szakasz – záróbeszélgetés az együttműködésről, a stratégiák hatékonyságáról és a közös teljesítményről.'
  },
  {
    id:'real_2019_19', w:2019, topic:'Braille-írás', type:'mc', diff:2,
    q:'Hogyan épül fel a Braille-írás rendszere?',
    opts:[
      'Nagybetűk vizuális kombinációiból, színek szerint',
      'Domború pontok kombinációiból álló taktilis kód; a pontok hatpontos, 2×3-as cellákban helyezkednek el, és minden kombináció egy betűt, írásjelet vagy számot jelöl',
      'Hangjelekből, amelyeket fülhallgatón keresztül közvetítenek',
      'Kézjelekből álló jelnyelvi rendszerből'
    ],
    ans:1,
    exp:'A Braille-rendszer domború pontok kombinációiból álló taktilis írás- és olvasási kód; a pontok hatpontos, 2×3-as cellákban helyezkednek el, minden kombináció egy betűt, írásjelet vagy számot jelöl. Olvasáskor az ujjak a felületen haladnak.'
  },
  {
    id:'real_2019_20', w:2019, topic:'Értékelés', type:'mc', diff:2,
    q:'Mit jelent az értékelés tanácsadási funkciója?',
    opts:[
      'A tanuló büntetése a hibákért',
      'Az értékelés az önismeret és a személyes fejlődés folyamatában irányítja a tanulót, tájékoztatva erősségeiről, nehézségeiről és fejlődési irányairól',
      'A szülők értesítése az osztályzatokról',
      'A tananyag mennyiségének meghatározása'
    ],
    ans:1,
    exp:'A tanácsadási funkció révén az értékelés az önismeret és a személyes fejlődés folyamatában irányítja a tanulót; eszköze lehet a pályaorientációs interjú vagy a képességek önértékelő kérdőíve.'
  },

  // ─── Felsorolás (list) típus ──────────────────────────────────────────────
  {
    id:'real_2019_21', w:2019, topic:'Értékelés', type:'list', diff:2, need:3,
    q:'Sorolja fel az értékelési folyamat három alapvető kritériumát!',
    items:[
      { label:'Érvényesség', alt:['érvényes'] },
      { label:'Megbízhatóság', alt:['megbízható'] },
      { label:'Relevancia', alt:['releváns', 'releváns'] }
    ],
    exp:'A három kritérium: érvényesség (azt méri, amit kell), megbízhatóság (állandó, megismételhető) és relevancia (hasznos a pedagógiai döntésekhez).'
  },
  {
    id:'real_2019_22', w:2019, topic:'Értékelés', type:'list', diff:2, need:3,
    q:'Sorolja fel a fogyatékossággal élő tanulók értékelésének négy alapvető kérdését!',
    items:[
      { label:'Mit tud a gyermek elvégezni?', alt:['mit tud', 'elvégezni', 'képes', 'mit tud a gyermek'] },
      { label:'Milyen nehézségekkel találkozik a tanulásban?', alt:['nehézség'] },
      { label:'Milyen fejlődési lehetőségekkel rendelkezik?', alt:['fejlődési lehetőség', 'lehetőség'] },
      { label:'Milyen támogatásra van szüksége?', alt:['támogatás', 'segítség'] }
    ],
    exp:'A négy alapvető kérdés: Mit tud a gyermek elvégezni? Milyen nehézségekkel találkozik? Milyen fejlődési lehetőségekkel rendelkezik? Milyen támogatásra van szüksége a fejlődéshez?'
  },
  {
    id:'real_2019_23', w:2019, topic:'Fejlődési tényezők', type:'list', diff:1, need:3,
    q:'Sorolja fel a gyermek/fiatal fejlődését meghatározó három fő tényezőt!',
    items:[
      { label:'Öröklődés', alt:['öröklőd', 'genetik'] },
      { label:'Környezet', alt:['környezet'] },
      { label:'Nevelés', alt:['nevelés'] }
    ],
    exp:'A három meghatározó tényező: öröklődés, környezet és nevelés.'
  },
  {
    id:'real_2019_24', w:2019, topic:'Fejlődési tényezők', type:'list', diff:2, need:3,
    q:'Sorolja fel az emberi szervezet fejlődésének három szintjét!',
    items:[
      { label:'Biológiai fejlődés', alt:['biológiai'] },
      { label:'Kognitív fejlődés', alt:['kognitív'] },
      { label:'Szociális-érzelmi fejlődés', alt:['szociális', 'érzelmi'] }
    ],
    exp:'A három szint: biológiai fejlődés (testi növekedés), kognitív fejlődés (gondolkodás, emlékezet) és szociális-érzelmi fejlődés (kapcsolatok, érzelemszabályozás).'
  },
  {
    id:'real_2019_25', w:2019, topic:'Tanterv', type:'list', diff:3, need:3,
    q:'Sorolja fel az iskola döntése alapján kialakított tanterv (CDȘ) három típusát!',
    items:[
      { label:'Elmélyítő tanterv', alt:['elmélyítő'] },
      { label:'Bővítő tanterv', alt:['bővítő'] },
      { label:'Személyiségfejlesztő tanterv', alt:['személyiségfejlesztő', 'személyiség'] }
    ],
    exp:'A CDȘ három típusa: elmélyítő (a törzsanyag megszilárdítása), bővítő (új tantárgyak/témák) és személyiségfejlesztő (társas, érzelmi, önálló életvezetési készségek) tanterv.'
  },

  // ─── Fogalommeghatározás (define) – Claude által értékelt ──────────────────
  {
    id:'real_2019_def_01', w:2019, topic:'Értékelés', type:'define', diff:2, points:2,
    q:'Határozza meg az értékelési folyamat fogalmát!',
    modelAnswer:'Értékelési folyamat: a tanulók teljesítményére, nehézségeire és lehetőségeire vonatkozó releváns információk rendszeres és folyamatos összegyűjtésének, elemzésének és értelmezésének folyamata, amelynek elsődleges célja a pedagógiai döntések megalapozása és a tanulók szükségleteihez igazított beavatkozás irányítása.',
    exp:'A tanulói teljesítményre/nehézségekre/lehetőségekre vonatkozó információk rendszeres összegyűjtése, elemzése és értelmezése a pedagógiai döntések megalapozására.'
  },
  {
    id:'real_2019_def_02', w:2019, topic:'Értékelés', type:'define', diff:2, points:2,
    q:'Határozza meg az értékelés diagnosztikai funkcióját!',
    modelAnswer:'Diagnosztikai funkció: az értékelés azon szerepe, amely a tanuló aktuális pszicho-intellektuális és szociális-érzelmi fejlettségi szintjének azonosítását, valamint a nehézségi területek és a fejlődési lehetőségek feltárását jelenti; lehetővé teszi egyéni pedagógiai programok kidolgozását.',
    exp:'Az értékelés szerepe, amely a fejlettségi szintet azonosítja, feltárja a nehézségeket és a fejlődési lehetőségeket, megalapozva az egyéni programokat.'
  },
  {
    id:'real_2019_def_03', w:2019, topic:'Értékelés', type:'define', diff:2, points:2,
    q:'Határozza meg az inkluzív értékelés fogalmát!',
    modelAnswer:'Inkluzív értékelés: az értékelési módszerek és eszközök adaptálása annak érdekében, hogy minden tanuló méltányosan részt vehessen az értékelési folyamatban, sokféleségük tiszteletben tartásával.',
    exp:'Az értékelési módszerek és eszközök adaptálása, hogy minden tanuló méltányosan részt vehessen, a sokféleség tiszteletben tartásával.'
  },
  {
    id:'real_2019_def_04', w:2019, topic:'Értékelés', type:'define', diff:2, points:2,
    q:'Határozza meg a differenciált értékelés fogalmát!',
    modelAnswer:'Differenciált értékelés: az értékelési folyamat egyénre szabása az egyes SNI/CES tanulók kognitív, érzelmi és mozgásos sajátosságai szerint.',
    exp:'Az értékelési folyamat egyénre szabása a tanulók kognitív, érzelmi és mozgásos sajátosságai szerint.'
  },
  {
    id:'real_2019_def_05', w:2019, topic:'Fejlődési tényezők', type:'define', diff:2, points:2,
    q:'Határozza meg az öröklődés fogalmát a fejlődésben!',
    modelAnswer:'Öröklődés: a biológiai, kognitív és érzelmi tulajdonságok genetikai információ útján történő átadása a szülőktől a gyermekeknek. Meghatározza a testi, értelmi és érzelmi hajlamokat, és befolyásolja az egyén fejlődési lehetőségeit.',
    exp:'A biológiai, kognitív és érzelmi tulajdonságok genetikai átadása a szülőktől a gyermekeknek; meghatározza a hajlamokat.'
  },
  {
    id:'real_2019_def_06', w:2019, topic:'Fejlődési tényezők', type:'define', diff:2, points:2,
    q:'Határozza meg a környezet fogalmát mint fejlődési tényezőt!',
    modelAnswer:'Környezet: a gyermek fejlődését alakító külső – családi, iskolai, társadalmi és kulturális – tényezők összessége, amelynek minősége serkentheti vagy gátolhatja a genetikai lehetőségek kibontakozását.',
    exp:'A fejlődést alakító külső (családi, iskolai, társadalmi, kulturális) tényezők összessége, amely serkentheti vagy gátolhatja a genetikai lehetőségeket.'
  },
  {
    id:'real_2019_def_07', w:2019, topic:'Fejlődési tényezők', type:'define', diff:2, points:2,
    q:'Határozza meg a nevelés fogalmát!',
    modelAnswer:'Nevelés: a gyermek kognitív, mozgásos, szociális-érzelmi és erkölcsi képességeinek kialakítására és fejlesztésére irányuló szervezett, rendszeres és tudatos folyamat, amely alapvetően hozzájárul személyiségének formálásához.',
    exp:'A képességek kialakítására és fejlesztésére irányuló szervezett, rendszeres és tudatos folyamat, amely a személyiséget formálja.'
  },
  {
    id:'real_2019_def_08', w:2019, topic:'Fejlődési szintek', type:'define', diff:2, points:2,
    q:'Határozza meg a kognitív fejlődés fogalmát!',
    modelAnswer:'Kognitív fejlődés: a tudás és a készségek elsajátítását megalapozó magasabb pszichikus folyamatok – gondolkodás, emlékezet, figyelem, nyelv – fejlődése.',
    exp:'A magasabb pszichikus folyamatok (gondolkodás, emlékezet, figyelem, nyelv) fejlődése, amely a tudás elsajátítását alapozza meg.'
  },
  {
    id:'real_2019_def_09', w:2019, topic:'Fejlődési szintek', type:'define', diff:2, points:2,
    q:'Határozza meg a szociális-érzelmi fejlődés fogalmát!',
    modelAnswer:'Szociális-érzelmi fejlődés: a társas kapcsolatok kialakítása, az érzelemszabályozás fejlődése, valamint a személyes és csoportidentitás felépítése.',
    exp:'A társas kapcsolatok kialakítása, az érzelemszabályozás fejlődése és a személyes, illetve csoportidentitás felépítése.'
  },
  {
    id:'real_2019_def_10', w:2019, topic:'Tanterv', type:'define', diff:3, points:2,
    q:'Határozza meg a tantervi standardok fogalmát!',
    modelAnswer:'Tantervi standardok: a tanulóktól egyes iskolai szakaszok végén elvárt teljesítményszintek, amelyeket a meghatározott pedagógiai célokhoz kapcsolódó elsajátítandó kompetenciák fejeznek ki; irányítják az értékelést, és iskolatípustól, illetve földrajzi térségtől függetlenül biztosítják a pedagógiai folyamat egységességét.',
    exp:'Az iskolai szakaszok végén elvárt teljesítményszintek (kompetenciák), amelyek irányítják az értékelést és biztosítják a folyamat egységességét.'
  },
  {
    id:'real_2019_def_11', w:2019, topic:'Tanterv', type:'define', diff:3, points:2,
    q:'Határozza meg a kerettanterv fogalmát!',
    modelAnswer:'Kerettanterv: hivatalos dokumentum, amely meghatározza az oktatás szintek és profilok szerinti szerkezetét, az egyes tantárgyakra vagy tanulási területekre jutó heti óraszámot és a választható órák arányát; biztosítja a tantervi területek közötti összhangot és az oktatás hozzáigazítását a tanulók egyéni szükségleteihez.',
    exp:'Hivatalos dokumentum az oktatás szintek/profilok szerinti szerkezetéről, a heti óraszámokról és a választható órák arányáról.'
  },
  {
    id:'real_2019_def_12', w:2019, topic:'Kooperatív tanulás', type:'define', diff:2, points:2,
    q:'Határozza meg a kooperatív tanulás fogalmát!',
    modelAnswer:'Kooperatív tanulás: olyan módszer, amelyben a tanulók kis csoportokban dolgoznak, és minden tanuló sikere saját erőfeszítésétől, valamint a társaknak nyújtott támogatástól is függ; fejleszti a társas kompetenciákat, ösztönzi a belső motivációt és támogatja az SNI/CES tanulók iskolai inklúzióját.',
    exp:'Kis csoportos módszer, ahol a tanuló sikere saját erőfeszítésétől és a társak támogatásától is függ; fejleszti a társas kompetenciákat és az inklúziót.'
  },
  {
    id:'real_2019_def_13', w:2019, topic:'Braille-írás', type:'define', diff:3, points:2,
    q:'Határozza meg a Braille-írás fogalmát/jellemzőit!',
    modelAnswer:'Braille-írás: domború pontok kombinációiból álló taktilis írás- és olvasási kód. A pontok hatpontos, 2×3-as cellákban helyezkednek el, és minden kombináció egy betűt, írásjelet vagy számot jelöl. Olvasáskor az ujjak a szöveg felületén haladnak; az írás történhet kézzel (Braille-tábla és pontozó) vagy digitálisan (Braille-írógép).',
    exp:'Domború pontok kombinációiból álló taktilis kód, hatpontos 2×3-as cellákban; minden kombináció egy betűt, írásjelet vagy számot jelöl.'
  },

  // ─── Esszé (essay) – Claude által értékelt ────────────────────────────────
  {
    id:'real_2019_essay_01', w:2019, topic:'Fejlődési tényezők', type:'essay', diff:3, points:6,
    q:'Mutassa be az öröklődés, a környezet és a nevelés szerepét és kapcsolatát a gyermek fejlődésében, különös tekintettel az SNI/CES gyermekekre!',
    modelAnswer:'A gyermek fejlődését három tényező kölcsönhatása határozza meg:\n\nÖröklődés: a biológiai, kognitív és érzelmi tulajdonságok genetikai átadása; biztosítja a fejlődés biológiai alapját, és befolyásolja az intelligenciát, a temperamentumot és a fizikai ellenálló képességet. Az öröklődés meghatározhat bizonyos fogyatékosságokat vagy fejlődési zavarokat.\n\nKörnyezet: a fejlődést alakító külső (családi, iskolai, társadalmi, kulturális) tényezők összessége; a nyújtott stimuláció, támogatás és gondozás minőségétől függően felerősítheti vagy enyhítheti a genetikai hajlamok hatását.\n\nNevelés: szervezett, tudatos folyamat, amely kibontakoztatja az öröklött lehetőségeket, alakítja a viselkedést, kompenzálja a hiányosságokat és korrigálja a kedvezőtlen hatásokat. SNI/CES gyermekeknél a nevelés kompenzáló szerepet tölt be: fejleszti a megmaradt képességeket, megelőzi a visszaesést, és elősegíti az iskolai és társadalmi integrációt. A támogató környezetben megvalósuló adaptált nevelés a genetikai vagy környezeti korlátoktól függetlenül maximalizálhatja a gyermek lehetőségeit.',
    exp:'Öröklődés = biológiai alap (hajlamok, esetleges fogyatékosság); környezet = felerősíti/enyhíti a hajlamokat; nevelés = kompenzál, kibontakoztat, integrál. SNI-nél a nevelés kompenzáló szerepe kiemelt.'
  },
  {
    id:'real_2019_essay_02', w:2019, topic:'Kooperatív tanulás', type:'essay', diff:3, points:6,
    q:'Elemezze a kooperatív tanulás módszerét: mutassa be a lényegét, nevezzen meg három előnyt és a módszer két szakaszát!',
    modelAnswer:'A kooperatív tanulás során a tanulók kis csoportokban dolgoznak, és minden tanuló sikere saját erőfeszítésétől, valamint a társaknak nyújtott támogatástól is függ. A módszer fejleszti a társas kompetenciákat, ösztönzi a belső motivációt és támogatja az SNI/CES tanulók iskolai inklúzióját.\n\nHárom előnye:\n- javítja a társas kapcsolatokat és növeli a tanulók közötti empátiát;\n- fejleszti a csapatszellemet és a közös felelősségvállalást;\n- a társak közötti magyarázat és egymás tanítása révén elősegíti a mélyebb tanulást.\n\nA módszer két szakasza:\n- Csoportalakítás: a tanulók heterogén csoportokba rendezése, figyelembe véve képességeik és tanulási stílusaik sokféleségét.\n- Reflexiós szakasz: záróbeszélgetés az együttműködésről, a stratégiák hatékonyságáról és a közös teljesítmény értékeléséről.',
    exp:'Lényeg: kis csoport, egymásrautaltság. Három előny: társas kapcsolatok/empátia; csapatszellem/közös felelősség; mélyebb tanulás. Két szakasz: csoportalakítás (heterogén) és reflexió.'
  }
];
