// Valós vizsgatétel — 2021 (2. változat)
// Forrás: real_exam_subjects/gyakorlas_2021_megoldasok.docx
// Egy önálló, évenkénti szekció. w: 2021 (a w érték maga az év).
// Minden kérdéstípust ez az egy fájl tartalmaz (standard + define + essay + list).
const EXERCISES_REAL_2021 = [
  // ─── I. téma – Nyelvi zavarok, logopédia ──────────────────────────────────
  {
    id:'real_2021_01', w:2021, topic:'Nyelvi zavarok', type:'mc', diff:2,
    q:'Mi a nyelvi zavar a definíció szerint?',
    opts:[
      'A helyesírási szabályok időszakos elfelejtése',
      'A verbális kommunikáció részleges vagy teljes működészavara, amely a nyelv megértésében, kifejezésében vagy helyes használatában jelentkező nehézségekkel jár',
      'A tanuló motivációjának átmeneti csökkenése',
      'A hangos olvasás lassúsága fáradtság miatt'
    ],
    ans:1,
    exp:'A nyelvi zavar a verbális kommunikáció részleges vagy teljes működészavara, amely a nyelv megértésében, kifejezésében vagy helyes használatában okoz nehézséget; organikus (neurológiai, érzékszervi) vagy funkcionális (pszichológiai, érzelmi, környezeti) okok válthatják ki.'
  },
  {
    id:'real_2021_02', w:2021, topic:'Logopédia', type:'mc', diff:2,
    q:'Melyik a logopédia egyik alapvető célja?',
    opts:[
      'A tanulók osztályzatainak emelése',
      'A nyelvi zavarok korrigálása: az artikuláció, az önkifejezés és a megértés működészavarainak megszüntetése vagy csökkentése',
      'A tananyag mennyiségének növelése',
      'A szülők pénzügyi támogatása'
    ],
    ans:1,
    exp:'A logopédia három alapvető célja: a nyelvi zavarok korrigálása; a kommunikációs képesség fejlesztése; és a másodlagos zavarok (tanulási, érzelmi, társas) megelőzése korai beavatkozással.'
  },
  {
    id:'real_2021_03', w:2021, topic:'Nyelvi zavarok', type:'match', diff:3,
    q:'Párosítsa a nyelvi zavart a jellemzőjével!',
    pairs:[
      { L:'Afázia', R:'Agyi sérülés miatti verbális kifejezési vagy megértési képességvesztés' },
      { L:'Diszartria', R:'A beszédizomzat károsodása miatti artikulációs zavar' },
      { L:'Dadogás', R:'Akaratlan hang-/szótagismétléssel, blokkokkal járó folyamatossági zavar' },
      { L:'Pszichogén mutizmus', R:'Beszédmegtagadás bizonyos társas helyzetekben, ép beszédképesség mellett' }
    ],
    exp:'Az afázia és a diszartria anatómiai-élettani (organikus) zavarok; a dadogás és a pszichogén mutizmus funkcionális/pszichológiai zavarok.'
  },
  {
    id:'real_2021_04', w:2021, topic:'Nyelvi zavarok', type:'mc', diff:2,
    q:'Melyik két kategóriába sorolja a megoldás a nyelvi zavarokat?',
    opts:[
      'Enyhe és súlyos zavarok',
      'Anatómiai-élettani (organikus) és funkcionális/pszichológiai zavarok',
      'Írásbeli és szóbeli zavarok',
      'Veleszületett és szerzett zavarok'
    ],
    ans:1,
    exp:'A két kategória: anatómiai-élettani (organikus) zavarok – a beszédszervek/analizátorok működését érintik (pl. afázia, diszartria); és funkcionális/pszichológiai zavarok – organikus ok nélkül, pszichés-érzelmi vagy környezeti tényezők miatt (pl. dadogás, pszichogén mutizmus).'
  },
  {
    id:'real_2021_05', w:2021, topic:'Nyelvi zavarok', type:'mc', diff:2,
    q:'Mit érintenek a fonológiai zavarok?',
    opts:[
      'A nyelvtani alakok (nem, szám, igeidő) használatát',
      'A nyelv hangjainak észlelését, megkülönböztetését és helyes használatát; hibás kiejtéshez, fonémák kihagyásához vagy helyettesítéséhez vezetnek',
      'A mondatok nyelvtanilag helyes megszerkesztését',
      'A szövegértést és olvasási sebességet'
    ],
    ans:1,
    exp:'A fonológiai zavarok a nyelv hangjainak észlelésében, megkülönböztetésében és helyes használatában jelentkeznek, ami hibás kiejtéshez, fonémák kihagyásához vagy helyettesítéséhez vezet.'
  },
  {
    id:'real_2021_06', w:2021, topic:'Nyelvi zavarok', type:'tf', diff:2,
    q:'A morfológiai zavarok a nyelvtani alakok (nem, szám, igeidő, eset) helytelen használatát jelentik, ami rontja a mondatok belső szerkezetét.',
    ans:true,
    exp:'Igaz. A morfológiai zavarok a nyelvtani alakok (nem, szám, igeidő, eset) helytelen használatát jelentik; a szintaktikai zavarok pedig a mondatok nyelvtanilag és logikailag helyes megszerkesztésének nehézségét.'
  },
  {
    id:'real_2021_07', w:2021, topic:'Logopédia', type:'short', diff:2,
    q:'Nevezzen meg legalább két okot, amiért a nyelvi zavarok korai felismerése elsődleges fontosságú!',
    keywords:['kognitív', 'beilleszkedés'],
    exp:'A korai felismerés támogatja a kognitív fejlődést (a nyelv a gondolkodás alapeszköze), elősegíti az iskolai és társadalmi beilleszkedést, megelőzi a nehézségek súlyosbodását (olvasási/írási/érzelmi problémák), és optimalizálja a pedagógiai-terápiás erőforrásokat.'
  },

  // ─── II. téma – Komplex értékelés és diagnosztizálás ──────────────────────
  {
    id:'real_2021_08', w:2021, topic:'Komplex értékelés', type:'mc', diff:2,
    q:'Melyik NEM tartozik az SNI/CES gyermek értékelésének négy területe közé?',
    opts:['Kognitív fejlődés', 'Szociális-érzelmi fejlődés', 'A szülők jövedelmi helyzete', 'Adaptív viselkedés'],
    ans:2,
    exp:'Az értékelés/szakértői vizsgálat négy területe: kognitív fejlődés, szociális-érzelmi fejlődés, mozgásfejlődés és adaptív viselkedés.'
  },
  {
    id:'real_2021_09', w:2021, topic:'Komplex értékelés', type:'mc', diff:2,
    q:'Mit vizsgál az adaptív viselkedés értékelése?',
    opts:[
      'Kizárólag az intelligenciahányadost',
      'Azt, hogy a gyermek milyen mértékben képes megfelelni a személyes és társadalmi élet mindennapi követelményeinek (önellátás, funkcionális kommunikáció, önálló közlekedés, beilleszkedés)',
      'A tanuló olvasási sebességét',
      'A család anyagi helyzetét'
    ],
    ans:1,
    exp:'Az adaptív viselkedés azt méri, mennyire képes a gyermek megfelelni a mindennapi élet követelményeinek: önellátási készségek, funkcionális kommunikáció, önálló közlekedés és a társas csoportokba való beilleszkedés.'
  },
  {
    id:'real_2021_10', w:2021, topic:'Komplex értékelés', type:'order', diff:2,
    q:'Helyezze sorrendbe a komplex értékelés három szakaszát!',
    items:[
      'Adatgyűjtés (tesztek, megfigyelés, kérdőívek, interjúk, munkaelemzés)',
      'Az adatok értelmezése (a normákhoz, célokhoz, egyéni szükségletekhez viszonyítva)',
      'Következtetések és javaslatok kidolgozása (fejlődési profil, beavatkozási terv)'
    ],
    exp:'A három szakasz: (1) adatgyűjtés, (2) az adatok értelmezése, (3) következtetések és javaslatok kidolgozása (fejlődési profil, prioritások, személyre szabott beavatkozási terv).'
  },
  {
    id:'real_2021_11', w:2021, topic:'Komplex értékelés', type:'mc', diff:2,
    q:'A komplex értékelés melyik alapelve szerint minden gyermeket saját jellemzői és fejlődési üteme alapján értékelünk, nem másokhoz viszonyítva?',
    opts:['Többdimenziósság', 'Individualizálás', 'Folyamatosság', 'Együttműködés'],
    ans:1,
    exp:'Az individualizálás elve szerint minden gyermeket saját jellemzői és fejlődési üteme alapján értékelünk. A többi alapelv: többdimenziósság, folyamatosság, együttműködés és szakmai etika.'
  },
  {
    id:'real_2021_12', w:2021, topic:'Komplex értékelés', type:'tf', diff:1,
    q:'A pszichopedagógiai adatlap folyamatos értékelési és rehabilitációs eszköz, amelyet az egész pedagógiai csapat használ, és a szakemberek és a család közötti kommunikáció eszköze.',
    ans:true,
    exp:'Igaz. A pszichopedagógiai adatlap rögzíti a tanuló fejlődésére és pedagógiai pályájára vonatkozó lényeges információkat, döntő szerepe van a fejlődés nyomon követésében és a beavatkozások módosításában, és a csapat–család együttműködés eszköze.'
  },

  // ─── III. téma – Módszertani kompetenciák ─────────────────────────────────
  {
    id:'real_2021_13', w:2021, topic:'Módszertani fogalmak', type:'mc', diff:2,
    q:'Mi a didaktikai modul?',
    opts:[
      'Egyetlen tanóra vázlata',
      'Rugalmas és funkcionális tanulásszervezési egység, amely egy kompetencia kialakítását célzó, egymással összekapcsolt tanórákból vagy integrált tevékenységekből áll, és alkalmazkodik a tanulók egyéni üteméhez',
      'Az iskolai tankönyvek jegyzéke',
      'A tanulók magatartási naplója'
    ],
    ans:1,
    exp:'A didaktikai modul rugalmas, funkcionális tanulásszervezési egység: egy kompetencia (vagy kompetenciacsoport) kialakítását célzó, összekapcsolt tanórákból/tevékenységekből áll, didaktikai önállósággal, világos célokkal, a tanuló egyéni üteméhez igazodva.'
  },
  {
    id:'real_2021_14', w:2021, topic:'Esettanulmány', type:'mc', diff:2,
    q:'Mi jellemzi az esettanulmányt mint korszerű didaktikai módszert?',
    opts:[
      'A tananyag frontális felolvasása',
      'Egy konkrét (valós vagy szimulált) helyzet mélyreható elemzése a problémák, okok és lehetséges megoldások azonosítása érdekében; fejleszti a kritikai gondolkodást és a döntéshozatalt',
      'A tanulók passzív megfigyelése',
      'A szabályok memorizálása ismétléssel'
    ],
    ans:1,
    exp:'Az esettanulmány aktív, vizsgálódó módszer: egy konkrét helyzet mélyreható elemzése a problémák, okok és megoldások azonosításáért; fejleszti a kritikai gondolkodást, az elemzőképességet, a döntéshozatalt és az ismeretek valós helyzetekben való alkalmazását.'
  },
  {
    id:'real_2021_15', w:2021, topic:'Esettanulmány', type:'order', diff:2,
    q:'Helyezze sorrendbe az esettanulmány négy szakaszát!',
    items:[
      'A problémahelyzet bemutatása',
      'Adatelemzés (tények, problémák, ok-okozati összefüggések)',
      'Hipotézisek és megoldások megfogalmazása',
      'Reflexió és integráció (következtetések, átvitel más helyzetekre)'
    ],
    exp:'Az esettanulmány négy szakasza: (1) a problémahelyzet bemutatása, (2) adatelemzés, (3) hipotézisek és megoldások megfogalmazása, (4) reflexió és integráció.'
  },
  {
    id:'real_2021_16', w:2021, topic:'IKT', type:'mc', diff:2,
    q:'Az IKT-eszközök közül melyik segíti elsősorban a látássérült tanulókat?',
    opts:[
      'Automatikus feliratozás',
      'Képernyőolvasó, Braille-billentyűzet vagy szövegnagyító szoftver',
      'Jelnyelvi fordítóeszköz',
      'Kognitív tréningprogram'
    ],
    ans:1,
    exp:'A látássérült tanulók képernyőolvasót, Braille-billentyűzetet vagy szövegnagyító szoftvert használhatnak; a hallássérülteket az automatikus feliratozás/jelnyelvi eszközök, a tanulási zavarral küzdőket az interaktív oktatószoftverek segítik.'
  },
  {
    id:'real_2021_17', w:2021, topic:'IKT', type:'tf', diff:1,
    q:'Az IKT beépítése a fogyatékossággal élő tanulók oktatásába ösztönzi az önállóságot, a motivációt, a tanulás személyre szabását és az aktív részvételt.',
    ans:true,
    exp:'Igaz. Az IKT csökkenti vagy megszünteti a kommunikációs, mozgási és információfeldolgozási akadályokat, és ösztönzi az önállóságot, a motivációt, a személyre szabást és az aktív részvételt.'
  },
  {
    id:'real_2021_18', w:2021, topic:'Nyelvi zavarok', type:'fill', diff:2,
    q:'A __________ zavarok a megnyilatkozások hiányos szervezését, a nyelvtanilag és logikailag helyes mondatok megalkotásának nehézségét jelentik.',
    ans:'szintaktikai',
    exp:'A szintaktikai zavarok a megnyilatkozások hiányos szervezését, a helyes mondatok megalkotásának nehézségét jelentik, ami befolyásolja a kommunikáció világosságát.'
  },

  // ─── Felsorolás (list) típus ──────────────────────────────────────────────
  {
    id:'real_2021_21', w:2021, topic:'Logopédia', type:'list', diff:2, need:3,
    q:'Sorolja fel a logopédia céljainak három alapvető szempontját!',
    items:[
      { label:'A nyelvi zavarok korrigálása', alt:['korrigálás', 'korrekció'] },
      { label:'A kommunikációs képesség fejlesztése', alt:['kommunikáció', 'kommunikációs képesség'] },
      { label:'A másodlagos zavarok megelőzése', alt:['megelőzés', 'másodlagos', 'prevenció'] }
    ],
    exp:'A logopédia három célja: a nyelvi zavarok korrigálása, a kommunikációs képesség fejlesztése és a másodlagos zavarok megelőzése.'
  },
  {
    id:'real_2021_22', w:2021, topic:'Nyelvi zavarok', type:'list', diff:2, need:3,
    q:'Sorolja fel a nyelvtani szintet érintő három nyelvizavar-fogalmat (a hangok, a nyelvtani alakok és a mondatszerkezet szintjén)!',
    items:[
      { label:'Fonológiai zavarok', alt:['fonológiai'] },
      { label:'Morfológiai zavarok', alt:['morfológiai'] },
      { label:'Szintaktikai zavarok', alt:['szintaktikai'] }
    ],
    exp:'A három fogalom: fonológiai (hangok), morfológiai (nyelvtani alakok) és szintaktikai (mondatszerkezet) zavarok.'
  },
  {
    id:'real_2021_23', w:2021, topic:'Komplex értékelés', type:'list', diff:2, need:3,
    q:'Sorolja fel az SNI/CES gyermek értékelésének négy területét!',
    items:[
      { label:'Kognitív fejlődés', alt:['kognitív'] },
      { label:'Szociális-érzelmi fejlődés', alt:['szociális', 'érzelmi'] },
      { label:'Mozgásfejlődés', alt:['mozgás', 'motoros'] },
      { label:'Adaptív viselkedés', alt:['adaptív'] }
    ],
    exp:'A négy terület: kognitív fejlődés, szociális-érzelmi fejlődés, mozgásfejlődés és adaptív viselkedés.'
  },
  {
    id:'real_2021_24', w:2021, topic:'Komplex értékelés', type:'list', diff:3, need:4,
    q:'Sorolja fel a komplex értékelés öt módszertani alapelvét!',
    items:[
      { label:'Individualizálás', alt:['individualizál'] },
      { label:'Többdimenziósság', alt:['többdimenzió', 'többdimenziós'] },
      { label:'Folyamatosság', alt:['folyamatos'] },
      { label:'Együttműködés', alt:['együttműköd', 'multidiszciplin'] },
      { label:'Szakmai etika', alt:['etika', 'titoktartás'] }
    ],
    exp:'Az öt alapelv: individualizálás, többdimenziósság, folyamatosság, együttműködés (multidiszciplináris csapat) és szakmai etika.'
  },
  {
    id:'real_2021_25', w:2021, topic:'Esettanulmány', type:'list', diff:2, need:3,
    q:'Sorolja fel az esettanulmány módszer négy szakaszát!',
    items:[
      { label:'A problémahelyzet bemutatása', alt:['problémahelyzet', 'bemutatás'] },
      { label:'Adatelemzés', alt:['adatelemzés', 'elemzés'] },
      { label:'Hipotézisek és megoldások megfogalmazása', alt:['hipotézis', 'megoldás'] },
      { label:'Reflexió és integráció', alt:['reflexió', 'integráció'] }
    ],
    exp:'A négy szakasz: a problémahelyzet bemutatása, adatelemzés, hipotézisek és megoldások megfogalmazása, reflexió és integráció.'
  },

  // ─── Fogalommeghatározás (define) – Claude által értékelt ──────────────────
  {
    id:'real_2021_def_01', w:2021, topic:'Nyelvi zavarok', type:'define', diff:2, points:2,
    q:'Határozza meg a nyelvi zavar fogalmát!',
    modelAnswer:'Nyelvi zavar: a verbális kommunikáció részleges vagy teljes működészavara, amely a nyelv megértésében, kifejezésében vagy helyes használatában jelentkező nehézségekkel jár, és befolyásolja az egyén kognitív, érzelmi és társas fejlődését. Organikus (neurológiai, érzékszervi) vagy funkcionális (pszichológiai, érzelmi, környezeti) okok válthatják ki.',
    exp:'A verbális kommunikáció részleges/teljes működészavara a megértésben, kifejezésben vagy helyes használatban; organikus vagy funkcionális eredetű.'
  },
  {
    id:'real_2021_def_02', w:2021, topic:'Nyelvi zavarok', type:'define', diff:2, points:2,
    q:'Határozza meg a fonológiai zavarok fogalmát!',
    modelAnswer:'Fonológiai zavarok: a nyelv hangjainak észlelésében, megkülönböztetésében és helyes használatában jelentkező nehézségek, amelyek hibás kiejtéshez, fonémák kihagyásához vagy helyettesítéséhez vezetnek.',
    exp:'A hangok észlelésének, megkülönböztetésének és helyes használatának nehézsége (hibás kiejtés, fonémakihagyás/-helyettesítés).'
  },
  {
    id:'real_2021_def_03', w:2021, topic:'Nyelvi zavarok', type:'define', diff:2, points:2,
    q:'Határozza meg a morfológiai zavarok fogalmát!',
    modelAnswer:'Morfológiai zavarok: a nyelvtani alakok – nem, szám, igeidő, eset – helytelen használata, amely rontja a mondatok belső szerkezetét és a kifejezés összefüggőségét.',
    exp:'A nyelvtani alakok (nem, szám, igeidő, eset) helytelen használata, amely rontja a mondatok szerkezetét.'
  },
  {
    id:'real_2021_def_04', w:2021, topic:'Nyelvi zavarok', type:'define', diff:2, points:2,
    q:'Határozza meg a szintaktikai zavarok fogalmát!',
    modelAnswer:'Szintaktikai zavarok: a megnyilatkozások hiányos szervezése, a nyelvtanilag és logikailag helyes mondatok megalkotásának nehézsége, amely befolyásolja a kommunikáció világosságát és jelentését.',
    exp:'A mondatok nyelvtanilag/logikailag helyes megszerkesztésének nehézsége, amely rontja a kommunikáció világosságát.'
  },
  {
    id:'real_2021_def_05', w:2021, topic:'Nyelvi zavarok', type:'define', diff:3, points:2,
    q:'Határozza meg az afázia fogalmát!',
    modelAnswer:'Afázia: agyi sérülés következtében kialakuló verbális kifejezési vagy megértési képesség elvesztése. Anatómiai-élettani (organikus) eredetű nyelvi zavar.',
    exp:'Agyi sérülés miatti verbális kifejezési vagy megértési képességvesztés (organikus zavar).'
  },
  {
    id:'real_2021_def_06', w:2021, topic:'Nyelvi zavarok', type:'define', diff:3, points:2,
    q:'Határozza meg a diszartria fogalmát!',
    modelAnswer:'Diszartria: a beszédben részt vevő izomzat károsodása miatt kialakuló artikulációs zavar. Organikus (anatómiai-élettani) eredetű nyelvi zavar.',
    exp:'A beszédizomzat károsodása miatti artikulációs zavar (organikus eredet).'
  },
  {
    id:'real_2021_def_07', w:2021, topic:'Nyelvi zavarok', type:'define', diff:2, points:2,
    q:'Határozza meg a dadogás fogalmát!',
    modelAnswer:'Dadogás: akaratlan hang- vagy szótagismétléssel, blokkokkal vagy megnyújtással járó beszédfolyamatossági zavar. Funkcionális/pszichológiai eredetű nyelvi zavar.',
    exp:'Beszédfolyamatossági zavar akaratlan hang-/szótagismétléssel, blokkokkal, megnyújtással (funkcionális eredet).'
  },
  {
    id:'real_2021_def_08', w:2021, topic:'Nyelvi zavarok', type:'define', diff:3, points:2,
    q:'Határozza meg a pszichogén mutizmus fogalmát!',
    modelAnswer:'Pszichogén mutizmus: a beszédképesség megléte ellenére bizonyos társas helyzetekben megjelenő beszédmegtagadás. Funkcionális/pszichológiai eredetű nyelvi zavar.',
    exp:'A beszédképesség megléte ellenére bizonyos társas helyzetekben jelentkező beszédmegtagadás.'
  },
  {
    id:'real_2021_def_09', w:2021, topic:'Komplex értékelés', type:'define', diff:2, points:2,
    q:'Határozza meg az adaptív viselkedés fogalmát az értékelésben!',
    modelAnswer:'Adaptív viselkedés: annak mértéke, hogy a gyermek mennyire képes megfelelni a személyes és társadalmi élet mindennapi követelményeinek. Ide tartoznak az önellátási készségek, a funkcionális kommunikáció, az önálló közlekedés és a társas csoportokba való beilleszkedés.',
    exp:'A mindennapi élet követelményeinek való megfelelés mértéke: önellátás, funkcionális kommunikáció, önálló közlekedés, beilleszkedés.'
  },
  {
    id:'real_2021_def_10', w:2021, topic:'Komplex értékelés', type:'define', diff:2, points:2,
    q:'Határozza meg a pszichopedagógiai adatlap fogalmát/szerepét!',
    modelAnswer:'Pszichopedagógiai adatlap: összetett eszköz, amely rögzíti az SNI/CES tanuló fejlődésére és pedagógiai pályájára vonatkozó lényeges információkat (fejlettségi szintek, tanulási/magatartási nehézségek, adaptív készségek, PIP-célok, támogatási formák). Döntő szerepet játszik a fejlődés nyomon követésében és a beavatkozások módosításában; a csapat és a család együttműködésének eszköze.',
    exp:'Összetett eszköz a tanuló fejlődésének és pedagógiai pályájának rögzítésére; a nyomon követés és a csapat–család együttműködés eszköze.'
  },
  {
    id:'real_2021_def_11', w:2021, topic:'Módszertani fogalmak', type:'define', diff:3, points:2,
    q:'Határozza meg a didaktikai modul fogalmát!',
    modelAnswer:'Didaktikai modul: rugalmas és funkcionális tanulásszervezési egység, amely egy kompetencia vagy kompetenciacsoport kialakítását célzó, egymással összekapcsolt tanórákból vagy integrált tevékenységekből áll. Didaktikai önállósággal és világosan meghatározott célokkal rendelkezik, és alkalmazkodik a tanulók egyéni tanulási üteméhez.',
    exp:'Rugalmas tanulásszervezési egység összekapcsolt tanórákból egy kompetencia kialakítására, önálló célokkal, a tanuló üteméhez igazodva.'
  },
  {
    id:'real_2021_def_12', w:2021, topic:'Módszertani fogalmak', type:'define', diff:2, points:2,
    q:'Határozza meg a személyre szabott beavatkozási terv (PIP) fogalmát!',
    modelAnswer:'Személyre szabott beavatkozási terv (PIP): olyan egyéni pedagógiai dokumentum, amely a komplex értékelés eredményei alapján meghatározza az SNI/CES tanuló elsődleges céljait, beavatkozási stratégiáit, tantervi adaptációit, szükséges erőforrásait és a fejlődés értékelésének kritériumait. A pedagógiai csapat a szülőkkel együtt dolgozza ki; dinamikus, rendszeresen felülvizsgált dokumentum.',
    exp:'Egyéni dokumentum a komplex értékelés alapján: célok, stratégiák, adaptációk, erőforrások, értékelési kritériumok; a csapat és a szülők közösen készítik, rendszeresen felülvizsgálják.'
  },
  {
    id:'real_2021_def_13', w:2021, topic:'Esettanulmány', type:'define', diff:2, points:2,
    q:'Határozza meg az esettanulmány mint didaktikai módszer fogalmát!',
    modelAnswer:'Esettanulmány: aktív és vizsgálódó módszer, amely egy konkrét – valós vagy szimulált – helyzet mélyreható elemzését jelenti a problémák, okok és lehetséges megoldások azonosítása érdekében. Fejleszti a kritikai gondolkodást, az elemzőképességet, a döntéshozatalt és az ismeretek valós helyzetekben való alkalmazását.',
    exp:'Aktív, vizsgálódó módszer: egy konkrét helyzet mélyreható elemzése a problémák, okok és megoldások azonosításáért; fejleszti a kritikai gondolkodást és a döntéshozatalt.'
  },

  // ─── Esszé (essay) – Claude által értékelt ────────────────────────────────
  {
    id:'real_2021_essay_01', w:2021, topic:'Logopédia', type:'essay', diff:3, points:6,
    q:'Fejtse ki, miért kell a nyelvi zavarok korai azonosításának a pszichopedagógiai szakemberek egyik elsődleges feladatát képeznie!',
    modelAnswer:'A nyelvi zavarok korai felismerése alapvető fontosságú, mert:\n\n- Támogatja a kognitív fejlődést: a nyelv az az alapvető eszköz, amelynek segítségével a gyermek rendszerezi gondolkodását, tanul és kommunikál.\n\n- Elősegíti az iskolai és társadalmi beilleszkedést: a gondolataikat és érzelmeiket világosan kifejezni képes gyermekek nagyobb eséllyel érnek el pedagógiai sikert és illeszkednek be a közösségbe.\n\n- Megelőzi a nehézségek súlyosbodását: a korai beavatkozás gátolhatja a társuló problémák – olvasási, írási nehézségek, érzelmi problémák – kialakulását.\n\n- Optimalizálja a pedagógiai és terápiás erőforrásokat: a szakemberek adaptálhatják a beavatkozásokat, együttműködhetnek a családdal, és személyre szabott rehabilitációs programokat hozhatnak létre.\n\nÖsszefoglalva: a korai felismerés és logopédiai beavatkozás elsődleges a gyermek kiegyensúlyozott fejlődésének, valamint pedagógiai és társadalmi inklúziójának támogatásában.',
    exp:'Négy indok: kognitív fejlődés (a nyelv a gondolkodás eszköze); iskolai/társadalmi beilleszkedés; a nehézségek súlyosbodásának megelőzése; a pedagógiai-terápiás erőforrások optimalizálása.'
  },
  {
    id:'real_2021_essay_02', w:2021, topic:'Komplex értékelés', type:'essay', diff:3, points:6,
    q:'Mutassa be a komplex értékelés öt módszertani alapelvét az SNI/CES gyermekek értékelésében!',
    modelAnswer:'A komplex értékelés öt módszertani alapelve:\n\n- Individualizálás: minden gyermeket saját jellemzői és fejlődési üteme alapján értékelünk, nem más gyermekekhez viszonyítva.\n\n- Többdimenziósság: a fejlődés valamennyi dimenzióját – kognitív, érzelmi, mozgásos és adaptív területét – elemezzük, nem kizárólag az iskolai teljesítményt.\n\n- Folyamatosság: az értékelést rendszeresen elvégezzük a fejlődés nyomon követése és a pedagógiai stratégiák módosítása érdekében.\n\n- Együttműködés: a folyamatban pedagógusokból, pszichológusokból, logopédusokból, gyógytornászokból és a gyermek családjából álló multidiszciplináris csapat vesz részt.\n\n- Szakmai etika: tiszteletben tartjuk a titoktartást, a gyermek méltóságát és mindenek felett álló érdekét.',
    exp:'Az öt alapelv: individualizálás, többdimenziósság, folyamatosság, együttműködés (multidiszciplináris csapat + család), szakmai etika (titoktartás, méltóság).'
  }
];
