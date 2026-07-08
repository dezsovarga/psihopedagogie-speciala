// Valós vizsgatétel — 2018 (3. változat)
// Forrás: real_exam_subjects/gyakorlas_2018_megoldasok.docx
// Egy önálló, évenkénti szekció. w: 2018 (a w érték maga az év).
// Minden kérdéstípust ez az egy fájl tartalmaz (standard + define + essay + list).
const EXERCISES_REAL_2018 = [
  // ─── Etiológia – endogén/exogén tényezők, morfofunkcionális elváltozások ────
  {
    id:'real_2018_01', w:2018, topic:'Etiológia', type:'mc', diff:2,
    q:'A központi idegrendszer károsodásában melyik példa endogén (belső, genetikai) ok?',
    opts:[
      'Genetikai mutáció, amely cerebrális parézist vagy izomdisztrófiát okoz',
      'Veleszületett rubeolafertőzés a terhesség alatt',
      'Perinatális (szülés körüli) trauma',
      'Csecsemőkori agyhártyagyulladás'
    ],
    ans:0,
    exp:'Az endogén tényezők belső, genetikai eredetű okok: a genetikai mutációk a központi idegrendszer rendellenességeihez vezethetnek (pl. cerebrális parézis, izomdisztrófia). A többi felsorolt tényező exogén (külső) ok.'
  },
  {
    id:'real_2018_02', w:2018, topic:'Etiológia', type:'mc', diff:2,
    q:'Melyik exogén (külső) tényező okozhat súlyos agykárosodást a központi idegrendszerben?',
    opts:[
      'Örökletes genetikai mutáció',
      'Prenatális fertőzés (pl. veleszületett rubeola) vagy perinatális trauma',
      'Veleszületett anyagcserezavar',
      'Kromoszóma-rendellenesség'
    ],
    ans:1,
    exp:'Az exogén tényezők külső, környezeti eredetűek: a prenatális fertőzések (pl. veleszületett rubeola) vagy a perinatális traumák súlyos agykárosodást okozhatnak.'
  },
  {
    id:'real_2018_03', w:2018, topic:'Etiológia', type:'mc', diff:2,
    q:'Az érzékszervi analizátorok (látás, hallás) esetében melyik endogén ok okozhat veleszületett vakságot (amaurosis) vagy örökletes siketséget?',
    opts:[
      'Magzati toxinhatás',
      'Szülés utáni agyhártyagyulladás',
      'Genetikai rendellenesség',
      'Traumás sérülés'
    ],
    ans:2,
    exp:'Endogén okként a genetikai rendellenességek veleszületett vakságot (amaurosist) vagy örökletes siketséget okozhatnak.'
  },
  {
    id:'real_2018_04', w:2018, topic:'Etiológia', type:'mc', diff:2,
    q:'Melyik exogén tényező károsíthatja az érzékszervi analizátorokat?',
    opts:[
      'Örökletes siketség',
      'A magzati életben bekövetkező toxinhatás vagy a születés utáni súlyos fertőzés (pl. agyhártyagyulladás)',
      'Genetikai mutáció',
      'Veleszületett amaurosis'
    ],
    ans:1,
    exp:'Exogén tényezőként a magzati életben bekövetkező toxinhatás vagy a születés utáni súlyos fertőzések – például agyhártyagyulladás – károsíthatják az analizátorokat.'
  },
  {
    id:'real_2018_05', w:2018, topic:'Etiológia', type:'mc', diff:2,
    q:'A hangképző és artikulációs apparátus esetében melyik veleszületett (endogén) rendellenesség befolyásolja a kiejtést és a hangok képzését?',
    opts:['Krónikus fertőzés', 'Szájpadhasadék', 'Traumás sérülés', 'Agyhártyagyulladás'],
    ans:1,
    exp:'Endogén okként a veleszületett rendellenességek – például a szájpadhasadék – befolyásolják a kiejtést és a hangok képzését.'
  },
  {
    id:'real_2018_06', w:2018, topic:'Etiológia', type:'tf', diff:2,
    q:'A hangképző apparátus artikulációs zavarait kizárólag veleszületett rendellenességek okozhatják.',
    ans:false,
    exp:'Hamis. Exogén okok is előidézhetnek hangképzési és artikulációs zavarokat: a traumás sérülések vagy a krónikus fertőzések is.'
  },
  {
    id:'real_2018_07', w:2018, topic:'Etiológia', type:'match', diff:2,
    q:'Párosítsa az okot a hozzá tartozó fogyatékossággal vagy elváltozással!',
    pairs:[
      { L:'Perinatális hipoxia', R:'Gyermekkori cerebrális parézis (mozgásfogyatékosság)' },
      { L:'Veleszületett rubeola', R:'Szenzorineurális hallásvesztés (hallásfogyatékosság)' },
      { L:'Szájpadhasadék', R:'Kiejtési és hangképzési zavar' },
      { L:'Genetikai rendellenesség', R:'Veleszületett vakság (amaurosis)' }
    ],
    exp:'Perinatális hipoxia → cerebrális parézis; veleszületett rubeola → szenzorineurális hallásvesztés; szájpadhasadék → kiejtési/hangképzési zavar; genetikai rendellenesség → veleszületett vakság.'
  },
  {
    id:'real_2018_08', w:2018, topic:'Etiológia', type:'mc', diff:2,
    q:'A perinatális (szülés körüli) hipoxia jellemzően milyen fogyatékossághoz vezethet?',
    opts:[
      'Hallásfogyatékossághoz',
      'Gyermekkori cerebrális parézishez, azaz mozgásfogyatékossághoz',
      'Látásfogyatékossághoz',
      'Beszédfogyatékossághoz'
    ],
    ans:1,
    exp:'A perinatális hipoxia (oxigénhiány a szülés során) gyermekkori cerebrális parézist, vagyis mozgásfogyatékosságot okozhat.'
  },
  {
    id:'real_2018_09', w:2018, topic:'Etiológia', type:'tf', diff:1,
    q:'A veleszületett rubeola szenzorineurális hallásvesztést, azaz hallásfogyatékosságot okozhat.',
    ans:true,
    exp:'Igaz. A veleszületett rubeola szenzorineurális hallásvesztést, vagyis hallásfogyatékosságot okozhat.'
  },
  {
    id:'real_2018_10', w:2018, topic:'Pedagógusi kompetenciák', type:'short', diff:2,
    q:'Miért szükséges, hogy a speciális és integrált oktatásban dolgozó pedagógusok fejlesszék a rehabilitációs-kompenzáló terápiás stratégiák alkalmazásához szükséges kompetenciáikat? Nevezzen meg legalább két indokot!',
    keywords:['személyre', 'beilleszkedés'],
    exp:'E kompetenciák lehetővé teszik a pedagógiai beavatkozás személyre szabását a tanulók sajátosságai szerint, optimalizálják a rehabilitációs folyamatot, és támogatják az SNI/CES tanulók iskolai és társadalmi beilleszkedését.'
  },

  // ─── Didaktikai játék az SNI/CES tanulók fejlődésében ──────────────────────
  {
    id:'real_2018_11', w:2018, topic:'Didaktikai játék', type:'mc', diff:2,
    q:'Mi jellemzi a didaktikai játékot mint tanulási módszert az SNI/CES tanulóknál?',
    opts:[
      'Passzív, memorizáláson alapuló módszer',
      'Aktív és vonzó módszer, amely közvetlen tapasztalatokon keresztül segíti a tanulást és növeli a motivációt',
      'Kizárólag a szabadidő kitöltését szolgálja',
      'Csak a mozgásfejlesztésre alkalmas'
    ],
    ans:1,
    exp:'A didaktikai játék aktív és vonzó módszer, amely közvetlen tapasztalatokon keresztül segíti a tanulást, támogatja új készségek kialakulását, növeli a motivációt, és előmozdítja az együttműködést és a kortárscsoportba való beilleszkedést.'
  },
  {
    id:'real_2018_12', w:2018, topic:'Didaktikai játék', type:'mc', diff:2,
    q:'„A hangok varázskönyve” tevékenységben a gyermekek képekben elrejtett hangokat és betűket azonosítanak, majd megfelelő szavakhoz társítják őket. Melyik képességet fejleszti elsősorban?',
    opts:[
      'A nagymozgásokat és az egyensúlyt',
      'A hallási megkülönböztetést, a szókincset és a hang-betű megfeleltetést',
      'A matematikai számolást',
      'A finommotorikát és a ceruzafogást'
    ],
    ans:1,
    exp:'A tevékenység a hallási megkülönböztetést, a szókincset és a hang-betű megfeleltetés képességét fejleszti.'
  },
  {
    id:'real_2018_13', w:2018, topic:'Didaktikai játék', type:'match', diff:2,
    q:'Párosítsa a játék pedagógiai értékét a hozzá tartozó tartalommal!',
    pairs:[
      { L:'Kognitív érték', R:'Figyelem, emlékezet, logikus gondolkodás, problémamegoldás' },
      { L:'Szociális-érzelmi érték', R:'Empátia, együttműködés, szabálytisztelet, csoporthoz tartozás' },
      { L:'Mozgásos érték', R:'Koordináció, egyensúly, térbeli tájékozódás, állóképesség' },
      { L:'Didaktikai játék', R:'Aktív, vonzó, motiváló tanulási módszer' }
    ],
    exp:'A játék három pedagógiai értéke: kognitív (gondolkodás, emlékezet), szociális-érzelmi (empátia, együttműködés) és mozgásos (koordináció, egyensúly).'
  },
  {
    id:'real_2018_14', w:2018, topic:'Didaktikai játék', type:'fill', diff:1,
    q:'A dinamikus játékok javítják a koordinációt, az egyensúlyt, a térbeli tájékozódást és a fizikai állóképességet – ez a játék __________ értéke.',
    ans:'mozgásos',
    exp:'A mozgásos érték: a dinamikus játékok javítják a koordinációt, az egyensúlyt, a térbeli tájékozódást és a fizikai állóképességet.'
  },
  {
    id:'real_2018_15', w:2018, topic:'Szabadidős tevékenység', type:'tf', diff:1,
    q:'A „kincskeresés” típusú szabadidős tevékenység – ahol a gyermekek rejtett nyomokat keresnek és találós kérdéseket oldanak meg – ösztönzi a mozgást, a figyelmet és az együttműködést.',
    ans:true,
    exp:'Igaz. A „kincskeresés” szabadidős tevékenység ösztönzi a mozgást, a figyelmet és az együttműködést.'
  },

  // ─── Tantervi tervezés a speciális oktatásban ─────────────────────────────
  {
    id:'real_2018_16', w:2018, topic:'Nemzeti tanterv', type:'mc', diff:2,
    q:'Melyik NEM tartozik a nemzeti tanterv három viszonyítási eleme közé?',
    opts:[
      'Pedagógiai célok (nevelési eszmény, a végzett tanuló profilja)',
      'Általános és sajátos kompetenciák',
      'Tartalmak és tematikai területek',
      'A pedagógusok fizetési besorolása'
    ],
    ans:3,
    exp:'A nemzeti tanterv három viszonyítási eleme: a pedagógiai célok, az általános és sajátos kompetenciák, valamint a tartalmak és tematikai területek. A pedagógusok fizetési besorolása nem tartozik ide.'
  },
  {
    id:'real_2018_17', w:2018, topic:'Didaktikai módszerek', type:'mc', diff:2,
    q:'Melyik tanulóközpontú módszerben vesznek részt a tanulók aktívan a téma kiválasztásában, a feladatok megszervezésében és a végső produktum elkészítésében?',
    opts:['Frontális magyarázat', 'Projektalapú tanulás', 'Diktálás utáni másolás', 'Ismételtetéses gyakorlás'],
    ans:1,
    exp:'A projektalapú tanulásban a tanulók aktívan részt vesznek a téma kiválasztásában, a feladatok megszervezésében, a produktum elkészítésében és az értékelésben; a módszer fejleszti az önállóságot, együttműködést, kreativitást és felelősségvállalást.'
  },
  {
    id:'real_2018_18', w:2018, topic:'Didaktikai módszerek', type:'tf', diff:1,
    q:'A projektalapú tanulás során az SNI/CES tanulóknál a projekteket a képességeikhez és a tempójukhoz igazítjuk, minden gyermek készségeit hasznosítva.',
    ans:true,
    exp:'Igaz. Az SNI/CES tanulóknál a projekteket a képességeikhez és a tempójukhoz igazítjuk, minden gyermek készségeit hasznosítva.'
  },
  {
    id:'real_2018_19', w:2018, topic:'Interdiszciplináris tevékenység', type:'mc', diff:2,
    q:'Az „Utazás a világ körül” interdiszciplináris tevékenységben a kontinensek és a legfontosabb műemlékek azonosítása melyik területhez kapcsolódik?',
    opts:['Vizuális művészetek', 'Földrajz', 'Román nyelv', 'Matematika'],
    ans:1,
    exp:'A kontinensek és műemlékek azonosítása a földrajzhoz kapcsolódik. A tevékenység több területet integrál: földrajz (azonosítás), vizuális művészetek (poszter), román nyelv (leírás).'
  },
  {
    id:'real_2018_20', w:2018, topic:'Kommunikációs környezet', type:'short', diff:2,
    q:'Miért fontos a pozitív kapcsolati és kommunikációs környezet az SNI/CES tanulók oktatásában? Nevezzen meg legalább két hatását!',
    keywords:['motiváció', 'részvétel'],
    exp:'A bizalomra, empátiára és tiszteletre épülő légkör elősegíti az integrációt, a motiváció fejlődését és az aktív részvételt; hozzájárul az önértékelés kialakulásához és csökkenti a tanulással kapcsolatos szorongást.'
  },

  // ─── Felsorolás (list) típus ──────────────────────────────────────────────
  {
    id:'real_2018_21', w:2018, topic:'Etiológia', type:'list', diff:2, need:2,
    q:'Sorolja fel az etiológiai tényezők két fő típusát, amelyek a fogyatékosságok morfofunkcionális elváltozásait okozzák!',
    items:[
      { label:'Endogén (belső, genetikai) tényezők', alt:['endogén'] },
      { label:'Exogén (külső, környezeti) tényezők', alt:['exogén'] }
    ],
    exp:'A két fő típus: endogén (belső, genetikai) és exogén (külső, környezeti) tényezők.'
  },
  {
    id:'real_2018_22', w:2018, topic:'Etiológia', type:'list', diff:2, need:3,
    q:'Sorolja fel azt a három szervrendszert/apparátust, amelynek morfofunkcionális elváltozásait az endogén és exogén tényezők előidézhetik!',
    items:[
      { label:'Központi idegrendszer', alt:['idegrendszer', 'kir'] },
      { label:'Analizátorok (látás, hallás)', alt:['analizátor', 'érzékszerv', 'látás', 'hallás'] },
      { label:'Hangképző és artikulációs apparátus', alt:['hangképző', 'artikulációs'] }
    ],
    exp:'A három terület: központi idegrendszer, analizátorok (látás, hallás), valamint a hangképző és artikulációs apparátus.'
  },
  {
    id:'real_2018_23', w:2018, topic:'Didaktikai játék', type:'list', diff:1, need:3,
    q:'Sorolja fel a játék három pedagógiai értékét az SNI/CES gyermekek számára!',
    items:[
      { label:'Kognitív érték', alt:['kognitív'] },
      { label:'Szociális-érzelmi érték', alt:['szociális', 'érzelmi'] },
      { label:'Mozgásos érték', alt:['mozgásos', 'motoros'] }
    ],
    exp:'A három pedagógiai érték: kognitív, szociális-érzelmi és mozgásos érték.'
  },
  {
    id:'real_2018_24', w:2018, topic:'Nemzeti tanterv', type:'list', diff:2, need:3,
    q:'Sorolja fel a nemzeti tanterv három viszonyítási elemét!',
    items:[
      { label:'Pedagógiai célok', alt:['célok', 'nevelési eszmény', 'profil'] },
      { label:'Általános és sajátos kompetenciák', alt:['kompetenciák', 'kompetencia'] },
      { label:'Tartalmak és tematikai területek', alt:['tartalmak', 'tematikai'] }
    ],
    exp:'A három viszonyítási elem: pedagógiai célok; általános és sajátos kompetenciák; tartalmak és tematikai területek.'
  },
  {
    id:'real_2018_25', w:2018, topic:'Módszertani fogalmak', type:'list', diff:3, need:3,
    q:'Sorolja fel a tantervi tervezéshez kapcsolódó három alapfogalmat: a tanuló műveleti képességét, a több területet integráló tevékenységet és a tanulás feltételrendszerét jelölő fogalmat!',
    items:[
      { label:'Sajátos kompetencia', alt:['sajátos kompetencia', 'kompetencia'] },
      { label:'Transzdiszciplináris tanulási tevékenység', alt:['transzdiszciplináris'] },
      { label:'Oktatási környezet', alt:['oktatási környezet', 'környezet'] }
    ],
    exp:'A három fogalom: sajátos kompetencia, transzdiszciplináris tanulási tevékenység és oktatási környezet.'
  },

  // ─── Fogalommeghatározás (define) – Claude által értékelt ──────────────────
  {
    id:'real_2018_def_01', w:2018, topic:'Módszertani fogalmak', type:'define', diff:2, points:2,
    q:'Határozza meg a sajátos kompetencia fogalmát!',
    modelAnswer:'Sajátos kompetencia: a tanuló strukturált tanulási folyamat eredményeként megszerzett, különböző helyzetekben alkalmazható, fejlettségi szintjéhez igazodó műveleti képessége.',
    exp:'A tanuló strukturált tanulási folyamat eredményeként megszerzett, különböző helyzetekben alkalmazható, fejlettségi szintjéhez igazodó műveleti képessége.'
  },
  {
    id:'real_2018_def_02', w:2018, topic:'Módszertani fogalmak', type:'define', diff:3, points:2,
    q:'Határozza meg a transzdiszciplináris tanulási tevékenység fogalmát!',
    modelAnswer:'Transzdiszciplináris tanulási tevékenység: olyan tevékenység, amely több terület ismereteit és módszereit integrálja globális, átvihető kompetenciák fejlesztése érdekében, érdeklődési témákból vagy valós problémákból kiindulva.',
    exp:'Több terület ismereteit és módszereit integráló tevékenység, amely globális, átvihető kompetenciákat fejleszt, érdeklődési témákból vagy valós problémákból kiindulva.'
  },
  {
    id:'real_2018_def_03', w:2018, topic:'Módszertani fogalmak', type:'define', diff:2, points:2,
    q:'Határozza meg az oktatási környezet fogalmát!',
    modelAnswer:'Oktatási környezet: a tanítási-tanulási folyamat pedagógiai, fizikai, érzelmi és társas feltételeinek összessége, amelyet az SNI/CES tanulók sajátosságaihoz és szükségleteihez igazítanak.',
    exp:'A tanítási-tanulási folyamat pedagógiai, fizikai, érzelmi és társas feltételeinek összessége, az SNI/CES tanulók szükségleteihez igazítva.'
  },
  {
    id:'real_2018_def_04', w:2018, topic:'Didaktikai játék', type:'define', diff:2, points:2,
    q:'Határozza meg a didaktikai játék fogalmát!',
    modelAnswer:'Didaktikai játék: aktív és vonzó tanulási módszer, amely közvetlen tapasztalatokon keresztül ösztönzi a gyermekek kognitív, érzelmi és társas fejlődését, támogatja új készségek kialakulását, és növeli a tanulási feladatok iránti motivációt.',
    exp:'Aktív, vonzó tanulási módszer, amely közvetlen tapasztalatokon át ösztönzi a kognitív, érzelmi és társas fejlődést, és növeli a motivációt.'
  },
  {
    id:'real_2018_def_05', w:2018, topic:'Etiológia', type:'define', diff:2, points:2,
    q:'Határozza meg az endogén tényezők fogalmát az etiológiában!',
    modelAnswer:'Endogén tényezők: belső, az egyén genetikai adottságaiból eredő okok (pl. genetikai mutációk, örökletes rendellenességek), amelyek a központi idegrendszer, az analizátorok vagy a hangképző apparátus rendellenességeihez vezethetnek.',
    exp:'Belső, genetikai eredetű okok (genetikai mutációk, örökletes rendellenességek), amelyek morfofunkcionális elváltozásokhoz vezethetnek.'
  },
  {
    id:'real_2018_def_06', w:2018, topic:'Etiológia', type:'define', diff:2, points:2,
    q:'Határozza meg az exogén tényezők fogalmát az etiológiában!',
    modelAnswer:'Exogén tényezők: külső, a környezetből érkező okok (pl. prenatális fertőzések, perinatális trauma, magzati toxinhatás, súlyos fertőzések), amelyek morfofunkcionális károsodást okozhatnak a szervezetben.',
    exp:'Külső, környezeti eredetű okok (prenatális fertőzés, perinatális trauma, toxinhatás, súlyos fertőzés), amelyek károsodást okozhatnak.'
  },
  {
    id:'real_2018_def_07', w:2018, topic:'Didaktikai módszerek', type:'define', diff:2, points:2,
    q:'Határozza meg a projektalapú tanulás fogalmát!',
    modelAnswer:'Projektalapú tanulás: tanulóközpontú módszer, amelyben a tanulók aktívan részt vesznek a téma kiválasztásában, a feladatok megszervezésében, a végső produktum elkészítésében és az eredmények értékelésében; fejleszti az önállóságot, az együttműködést, a kreativitást és a felelősségvállalást.',
    exp:'Tanulóközpontú módszer: a tanulók részt vesznek a téma, a feladatok, a produktum és az értékelés alakításában; fejleszti az önállóságot, együttműködést, kreativitást, felelősséget.'
  },
  {
    id:'real_2018_def_08', w:2018, topic:'Didaktikai játék', type:'define', diff:2, points:2,
    q:'Határozza meg a játék kognitív értékét!',
    modelAnswer:'Kognitív érték: a játék azon pedagógiai értéke, amely természetes és kellemes módon fejleszti a gyermek figyelmét, emlékezetét, logikus gondolkodását és problémamegoldó képességét.',
    exp:'A játék értéke, amely a figyelmet, emlékezetet, logikus gondolkodást és problémamegoldást fejleszti.'
  },
  {
    id:'real_2018_def_09', w:2018, topic:'Didaktikai játék', type:'define', diff:2, points:2,
    q:'Határozza meg a játék szociális-érzelmi értékét!',
    modelAnswer:'Szociális-érzelmi érték: a játék azon értéke, amely pozitív interakciókat ösztönöz, fejleszti az empátiát, az együttműködést, a szabályok tiszteletét és a csoporthoz tartozás érzését.',
    exp:'A játék értéke, amely pozitív interakciókat, empátiát, együttműködést, szabálytiszteletet és csoporthoz tartozást fejleszt.'
  },
  {
    id:'real_2018_def_10', w:2018, topic:'Didaktikai játék', type:'define', diff:2, points:2,
    q:'Határozza meg a játék mozgásos értékét!',
    modelAnswer:'Mozgásos érték: a játék azon értéke, amely a dinamikus játékok révén javítja a koordinációt, az egyensúlyt, a térbeli tájékozódást és a fizikai állóképességet.',
    exp:'A játék értéke, amely a koordinációt, egyensúlyt, térbeli tájékozódást és fizikai állóképességet javítja.'
  },
  {
    id:'real_2018_def_11', w:2018, topic:'Kommunikációs környezet', type:'define', diff:3, points:2,
    q:'Határozza meg a kapcsolati és kommunikációs környezet fogalmát a speciális oktatásban!',
    modelAnswer:'Kapcsolati és kommunikációs környezet: a bizalomra, empátiára és tiszteletre épülő pedagógiai légkör és a tanulók fejlettségi szintjéhez igazított világos kommunikáció, amely elősegíti az SNI/CES tanulók integrációját, motivációját és aktív részvételét, és csökkenti a tanulással kapcsolatos szorongást.',
    exp:'A bizalomra, empátiára, tiszteletre épülő légkör és a tanulóhoz igazított világos kommunikáció, amely az integrációt, motivációt és részvételt segíti.'
  },

  // ─── Esszé (essay) – Claude által értékelt ────────────────────────────────
  {
    id:'real_2018_essay_01', w:2018, topic:'Etiológia', type:'essay', diff:3, points:6,
    q:'Mutassa be az endogén és exogén tényezők szerepét a fogyatékosságokat előidéző morfofunkcionális elváltozásokban, három szervrendszer (központi idegrendszer, analizátorok, hangképző apparátus) példáján!',
    modelAnswer:'Az endogén (belső, genetikai) és exogén (külső, környezeti) tényezők három fő területen okozhatnak morfofunkcionális elváltozásokat:\n\nKözponti idegrendszer: endogén tényezőként a genetikai mutációk a KIR rendellenességeihez vezethetnek (pl. cerebrális parézis, izomdisztrófia); exogén tényezőként a prenatális fertőzések (pl. veleszületett rubeola) vagy a perinatális traumák súlyos agykárosodást okozhatnak.\n\nAnalizátorok (látás, hallás): endogén tényezőként a genetikai rendellenességek veleszületett vakságot (amaurosis) vagy örökletes siketséget okozhatnak; exogén tényezőként a magzati toxinhatás vagy a születés utáni súlyos fertőzések (pl. agyhártyagyulladás) károsíthatják az analizátorokat.\n\nHangképző és artikulációs apparátus: endogén tényezőként a veleszületett rendellenességek (pl. szájpadhasadék) befolyásolják a kiejtést és a hangképzést; exogén tényezőként a traumás sérülések vagy a krónikus fertőzések idézhetnek elő hangképzési és artikulációs zavarokat.',
    exp:'Mindhárom területnél (KIR, analizátorok, hangképző apparátus) meg kell nevezni egy endogén (genetikai) és egy exogén (környezeti) okot a megfelelő elváltozással.'
  },
  {
    id:'real_2018_essay_02', w:2018, topic:'Kommunikációs környezet', type:'essay', diff:3, points:6,
    q:'Írjon rövid érvelő szöveget arról, miért fontos a pozitív kapcsolati és kommunikációs környezet az SNI/CES tanulóknak szóló didaktikai tevékenységekben!',
    modelAnswer:'A pozitív kapcsolati környezet és a hatékony kommunikáció alapvető az SNI/CES tanulóknak szóló didaktikai tevékenységekben. A bizalomra, empátiára és tiszteletre épülő légkör elősegíti az integrációt, a motiváció fejlődését és a tanulók aktív részvételét. A tanulók fejlettségi szintjéhez igazított, világos kommunikáció lehetővé teszi a feladatok hatékony közvetítését, az elvárások tisztázását és a szilárd pedagógiai kapcsolat kialakítását. A közérthető nyelvet, vizuális támogatást és konstruktív visszajelzést alkalmazó pedagógus inkluzív környezetet hoz létre, amelyben minden tanuló értékesnek érezheti magát. A pozitív kapcsolatok hozzájárulnak az önértékelés kialakulásához, a saját erőbe vetett bizalom növeléséhez és a tanulási szorongás csökkentéséhez.',
    exp:'Érvek: bizalom/empátia/tisztelet → integráció, motiváció, aktív részvétel; világos, szinthez igazított kommunikáció; közérthető nyelv, vizuális támogatás, konstruktív visszajelzés; önértékelés, csökkenő szorongás.'
  }
];
