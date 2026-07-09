// Valós vizsgatétel — 2022 (3. változat)
// Forrás: real_exam_subjects/gyakorlas_2022_megoldasok.docx
// Egy önálló, évenkénti szekció. w: 2022 (a w érték maga az év).
// Minden kérdéstípust ez az egy fájl tartalmaz (standard + define + essay + list).
const EXERCISES_REAL_2022 = [
  // ─── I. téma – A speciális pszichopedagógia jelentősége ───────────────────
  {
    id:'real_2022_01', w:2022, topic:'Speciális pszichopedagógia', type:'mc', diff:2,
    q:'Mi a speciális pszichopedagógia a 2022-es meghatározás szerint?',
    opts:[
      'Az orvostudomány egyik ága a fogyatékosságok gyógyszeres kezelésére',
      'A neveléstudományok azon ága, amely a sajátos nevelési igényű személyek nevelésének, rehabilitációjának, valamint társadalmi és szakmai integrációjának elméleti és gyakorlati vizsgálatával foglalkozik',
      'A pszichológia egy ága a tehetséggondozásra',
      'Egy szociális juttatási rendszer'
    ],
    ans:1,
    exp:'A speciális pszichopedagógia a neveléstudományok azon ága, amely az SNI személyek nevelésének, rehabilitációjának, társadalmi és szakmai integrációjának elméleti és gyakorlati vizsgálatával foglalkozik; a pszichológia, pedagógia, orvostudomány, szociológia és logopédia ismereteit használja.'
  },
  {
    id:'real_2022_02', w:2022, topic:'Szolgáltatások', type:'mc', diff:2,
    q:'Mi a pszichopedagógiai és szociális szolgáltatások alapvető célja?',
    opts:[
      'Az iskolák infrastruktúrájának fejlesztése',
      'Az SNI/CES személyek oktatási, társadalmi és szakmai integrációjának előmozdítása, önálló fejlődésük és egyéni lehetőségeik maximális kibontakoztatásával',
      'A pedagógusok továbbképzése',
      'A tananyag standardizálása'
    ],
    ans:1,
    exp:'A szolgáltatások alapvető célja az SNI/CES személyek oktatási, társadalmi és szakmai integrációjának előmozdítása, önálló fejlődésük és egyéni lehetőségeik maximális kibontakoztatásának támogatásával.'
  },
  {
    id:'real_2022_03', w:2022, topic:'Pszichopedagógiai segítségnyújtás', type:'match', diff:2,
    q:'Párosítsa a pszichopedagógiai segítségnyújtás összetevőjét a tartalmával!',
    pairs:[
      { L:'Pszichológiai összetevő', R:'A kognitív, érzelmi és viselkedési fejlődés értékelése és támogatása' },
      { L:'Pedagógiai összetevő', R:'A tanterv, módszerek és anyagok egyéni szükségletekhez igazítása' },
      { L:'Szociális összetevő', R:'A társadalmi beilleszkedés és a szolgáltatásokhoz való hozzáférés támogatása' },
      { L:'Komplementaritás elve', R:'A szolgáltatások összehangolt, egymást kiegészítő működése' }
    ],
    exp:'A segítségnyújtás három összetevője: pszichológiai (kognitív/érzelmi fejlődés), pedagógiai (tanterv/módszerek adaptálása) és szociális (integráció). A komplementaritás elve a szolgáltatások összehangolt működését jelenti.'
  },
  {
    id:'real_2022_04', w:2022, topic:'Alapfogalmak', type:'mc', diff:2,
    q:'Mit jelent a sajátos nevelési szükségletek fogalma?',
    opts:[
      'A tehetséges tanulók gyorsított képzésének igénye',
      'Fogyatékosságból, zavarból vagy fejlődési nehézségből eredő többlet-pedagógiai támogatási igények, amelyek a tanítási-tanulási folyamat adaptálását teszik szükségessé',
      'A pedagógusok szakmai igényei',
      'Az iskolai felszerelés hiánya'
    ],
    ans:1,
    exp:'A sajátos nevelési szükségletek fogyatékosságból, zavarból vagy fejlődési nehézségből eredő többlet-pedagógiai támogatási igények, amelyek differenciált módszerek és a folyamat adaptálását igénylik a méltányos hozzáférés és az integráció érdekében.'
  },
  {
    id:'real_2022_05', w:2022, topic:'Alapelvek', type:'mc', diff:2,
    q:'Mit mond ki a normalizáció elve?',
    opts:[
      'Minden tanulónak azonos tananyagot kell tanulnia',
      'A fogyatékossággal élő személyeknek a fogyatékosság nélkül élőkéhez a lehető legközelebb álló élet- és oktatási feltételeket kell biztosítani, az akadályok megszüntetésével és az aktív inklúzió előmozdításával',
      'A fogyatékos személyeket külön intézményben kell nevelni',
      'A pedagógiai folyamatot standardizálni kell'
    ],
    ans:1,
    exp:'A normalizáció elve szerint a fogyatékossággal élőknek a fogyatékosság nélkül élőkéhez lehető legközelebb álló élet- és oktatási feltételeket kell biztosítani: az akadályok megszüntetése, a környezet adaptálása és az aktív inklúzió révén.'
  },
  {
    id:'real_2022_06', w:2022, topic:'Alapelvek', type:'mc', diff:3,
    q:'Mit jelent a komplementaritás elve a speciális pszichopedagógiában?',
    opts:[
      'Csak egyetlen szakember végzi a beavatkozást',
      'A pedagógiai, szociális, egészségügyi és terápiás szolgáltatások összehangoltan működnek és kölcsönösen kiegészítik egymást, interdiszciplináris együttműködéssel',
      'A szülőket kizárják a folyamatból',
      'A szolgáltatások egymástól függetlenül működnek'
    ],
    ans:1,
    exp:'A komplementaritás azt jelenti, hogy a pedagógiai, szociális, egészségügyi és terápiás szolgáltatások összehangoltan működnek és kiegészítik egymást; a szakemberek interdiszciplináris együttműködése holisztikus beavatkozást biztosít.'
  },
  {
    id:'real_2022_07', w:2022, topic:'Alapelvek', type:'tf', diff:2,
    q:'A család- és közösségközpontú elv aktív partnerséget ösztönöz az iskola, a család és a közösség között, a szülők közvetlen részvételével a beavatkozások kidolgozásában.',
    ans:true,
    exp:'Igaz. A család- és közösségközpontú elv elismeri a család alapvető szerepét, aktív partnerséget ösztönöz iskola–család–közösség között, és a helyi közösséget pedagógiai-szociális erőforrásként hasznosítja.'
  },

  // ─── II. téma – A hallássérült személyek sajátosságai ─────────────────────
  {
    id:'real_2022_08', w:2022, topic:'Érzékszervi zavarok', type:'mc', diff:2,
    q:'Mit jelentenek az érzékszervi zavarok?',
    opts:[
      'A mozgásszervrendszer működészavarai',
      'Az érzékelő rendszerek (látási, hallási, taktilis analizátorok) működészavarai, amelyek befolyásolják a külső ingerek befogadását, feldolgozását és értelmezését',
      'A kognitív folyamatok zavarai',
      'Az érzelmi szabályozás zavarai'
    ],
    ans:1,
    exp:'Az érzékszervi zavarok az érzékelő rendszerek – látási, hallási, taktilis stb. analizátorok – működészavarai, amelyek befolyásolják a környezetből érkező ingerek helyes befogadását, feldolgozását és értelmezését.'
  },
  {
    id:'real_2022_09', w:2022, topic:'Hallássérülés', type:'mc', diff:2,
    q:'Melyik prenatális etiológiai tényező okozhat hallássérülést?',
    opts:[
      'Csecsemőkori agyhártyagyulladás',
      'Méhen belüli fertőzés, például veleszületett rubeola',
      'Óvodáskori zajártalom',
      'Iskoláskori fejsérülés'
    ],
    ans:1,
    exp:'Prenatális (születés előtti) etiológiai tényezők: méhen belüli fertőzések (pl. rubeola), örökletes genetikai rendellenességek, anyai ototoxikus kitettség, anyai anyagcsere-betegségek, és magzati hipoxia.'
  },
  {
    id:'real_2022_10', w:2022, topic:'Hallássérülés', type:'tf', diff:2,
    q:'A 2-3 éves korban bekövetkező hallásvesztés egyik következménye a beszélt nyelv fejlődésének késése vagy elmaradása.',
    ans:true,
    exp:'Igaz. A 2-3 éves kori hallásvesztés két fő következménye: a beszélt nyelv fejlődésének késése/elmaradása, valamint jelentős nehézségek a társas kapcsolatok és kommunikációs kompetenciák fejlődésében.'
  },
  {
    id:'real_2022_11', w:2022, topic:'Hallássérülés', type:'match', diff:2,
    q:'Párosítsa a hallássérült gyermekek kommunikációs formáját a jellemzőjével!',
    pairs:[
      { L:'Támogatott verbális kommunikáció', R:'Hallókészülék/cochleáris implantátum és logopédiai technikák' },
      { L:'Jelnyelvi, mimikai-gesztusos kommunikáció', R:'Kódolt gesztusokra és arckifejezésekre épülő vizuális rendszer' },
      { L:'Demutizáció', R:'A siket gyermek beszélt nyelvének kialakítása vizuális támogatással' },
      { L:'Érzékszervi zavar', R:'Az analizátorok működészavara' }
    ],
    exp:'A két fő kommunikációs forma: támogatott verbális (hallástechnikai eszközök + logopédia) és jelnyelvi/mimikai-gesztusos (vizuális rendszer). A jelnyelvet akkor használják, amikor a verbális kommunikáció nem lehetséges vagy nem hatékony.'
  },
  {
    id:'real_2022_12', w:2022, topic:'Hallássérülés', type:'short', diff:2,
    q:'Nevezzen meg legalább két hibát, amely a hallássérült személyek verbális kommunikációjában előfordulhat!',
    keywords:['kiejtés', 'intonáció'],
    exp:'Két jellemző hiba: a hangok helytelen kiejtése vagy kihagyása a szavakból; valamint a beszéd ritmusának, hangsúlyának és intonációjának torzulása (a hallási visszacsatolás hiánya miatt).'
  },
  {
    id:'real_2022_13', w:2022, topic:'Hallássérülés', type:'mc', diff:2,
    q:'Melyik a hallássérülés pedagógiai-rehabilitációs beavatkozásának egyik sajátos célja?',
    opts:[
      'A tanuló felmentése minden kommunikációs feladat alól',
      'A kommunikációs kompetenciák fejlesztése beszélt nyelven vagy alternatív rendszerekkel (jelnyelv), és az oktatási-társadalmi integráció elősegítése',
      'Kizárólag a hallókészülék beállítása',
      'A tananyag mennyiségének csökkentése'
    ],
    ans:1,
    exp:'A beavatkozás két sajátos célja: a kommunikációs kompetenciák fejlesztése beszélt nyelven (ha lehetséges) vagy alternatív rendszerekkel (jelnyelv, jelképírás); és az oktatási/társadalmi integráció elősegítése az önállósági, kapcsolatteremtési és részvételi készségekkel.'
  },

  // ─── III. téma – Módszertani kompetenciák ─────────────────────────────────
  {
    id:'real_2022_14', w:2022, topic:'Módszertani fogalmak', type:'mc', diff:3,
    q:'Mit jelent az intradiszciplináris tanulási tevékenység?',
    opts:[
      'Több különböző tantárgy ismereteinek integrálását',
      'Ugyanazon tantárgy vagy tantervi terület tartalmainak integrált megközelítését, amely logikai kapcsolatokat létesít különböző témák vagy fejezetek között',
      'A tananyag teljes mellőzését',
      'A tanulók passzív megfigyelését'
    ],
    ans:1,
    exp:'Az intradiszciplináris tanulási tevékenység ugyanazon tantárgy/tantervi terület tartalmainak integrált megközelítése, logikai kapcsolatokat teremtve témák vagy fejezetek között; segíti a mélyebb megértést és az ismeretek átvitelét. (Az interdiszciplináris több tantárgyat kapcsol össze.)'
  },
  {
    id:'real_2022_15', w:2022, topic:'Taneszközök', type:'mc', diff:2,
    q:'Mi a fő különbség a tankönyv és a didaktikai segédanyag között?',
    opts:[
      'A tankönyv választható, a segédanyag kötelező',
      'A tankönyv kötelező és standardizált (a tantárgyi programot követi), a segédanyag választható és rugalmas (a tanuló szintjéhez igazítható, támogatja a differenciált tanítást)',
      'Nincs közöttük különbség',
      'A segédanyagot az Oktatási Minisztérium hagyja jóvá, a tankönyvet nem'
    ],
    ans:1,
    exp:'A tankönyv az Oktatási Minisztérium által jóváhagyott, kötelező és standardizált anyag, amely a tantárgyi programot követi; a didaktikai segédanyag (gyűjtemény, munkafüzet, útmutató) választható, rugalmas, a tanuló szintjéhez igazítható, és a differenciált/személyre szabott tanulást támogatja.'
  },
  {
    id:'real_2022_16', w:2022, topic:'Problémafelvető tanulás', type:'mc', diff:2,
    q:'Mi jellemzi a problémafelvetésen alapuló tanulást?',
    opts:[
      'A tananyag frontális felolvasása',
      'Aktív-részvételi módszer, amely valós vagy szimulált problémahelyzet elé állítja a tanulót a kritikai gondolkodás, a kreativitás és a döntéshozatal fejlesztéséért',
      'A szabályok szó szerinti memorizálása',
      'A tanulók passzív jegyzetelése'
    ],
    ans:1,
    exp:'A problémafelvetésen alapuló tanulás aktív-részvételi módszer: a tanuló azonosítja a problémát, elemzi az információkat, hipotéziseket fogalmaz meg, és indokolt megoldásokat javasol; fejleszti a kritikai gondolkodást, a kreativitást és a döntéshozatalt.'
  },
  {
    id:'real_2022_17', w:2022, topic:'Problémafelvető tanulás', type:'order', diff:2,
    q:'Helyezze sorrendbe a problémafelvetésen alapuló tanulás három szakaszát!',
    items:[
      'A probléma felismerése (akadály vagy azonnal meg nem válaszolható kérdés)',
      'Elemzés és hipotézisalkotás (megoldások javaslata, érvekkel)',
      'A megoldások ellenőrzése és alkalmazása (kipróbálás, reflexió a hatékonyságra)'
    ],
    exp:'A három művelet/szakasz: (1) a probléma felismerése, (2) elemzés és hipotézisalkotás, (3) a megoldások ellenőrzése és alkalmazása.'
  },
  {
    id:'real_2022_18', w:2022, topic:'Fejlesztő értékelés', type:'tf', diff:2,
    q:'A folyamatos, fejlesztő értékelés nem pusztán mérőeszköz, hanem állandó pedagógiai támogatási forma, amely valós időben teszi lehetővé a tanítási stratégiák módosítását.',
    ans:true,
    exp:'Igaz. A folyamatos, fejlesztő értékelés állandó információt nyújt a fejlődésről, valós időben azonosítja a nehézségeket, lehetővé teszi a stratégiák módosítását, növeli a motivációt, megelőzi a kudarcélményt, és támogatja az önértékelést és az autonómiát.'
  },
  {
    id:'real_2022_19', w:2022, topic:'Fejlesztő értékelés', type:'fill', diff:2,
    q:'A fejlesztő értékelés módszerei közé tartozik a megfigyelés, a fejlődési lapok, a __________ és az önértékelés.',
    ans:'portfólió',
    exp:'A fejlesztő értékelés módszerei: megfigyelés, fejlődési lapok, portfóliók és önértékelés – ezek nélkülözhetetlenek a rugalmas, tanulói szükségletekre összpontosító pedagógiai folyamathoz.'
  },

  // ─── Felsorolás (list) típus ──────────────────────────────────────────────
  {
    id:'real_2022_21', w:2022, topic:'Pszichopedagógiai segítségnyújtás', type:'list', diff:2, need:3,
    q:'Sorolja fel a pszichopedagógiai segítségnyújtás három alapvető összetevőjét!',
    items:[
      { label:'Pszichológiai összetevő', alt:['pszichológiai'] },
      { label:'Pedagógiai összetevő', alt:['pedagógiai'] },
      { label:'Szociális összetevő', alt:['szociális'] }
    ],
    exp:'A három összetevő: pszichológiai, pedagógiai és szociális.'
  },
  {
    id:'real_2022_22', w:2022, topic:'Szolgáltatások', type:'list', diff:2, need:3,
    q:'Sorolja fel a pszichopedagógiai és szociális szolgáltatások három sajátos célját!',
    items:[
      { label:'Minőségi oktatáshoz való hozzáférés biztosítása', alt:['oktatáshoz való hozzáférés', 'minőségi oktatás', 'hozzáférés'] },
      { label:'Önálló életvezetési kompetenciák és személyes autonómia fejlesztése', alt:['autonómia', 'önálló életvezetés', 'önállóság'] },
      { label:'Társadalmi és szakmai integráció elősegítése', alt:['integráció', 'szakmai integráció'] }
    ],
    exp:'A három sajátos cél: minőségi oktatáshoz való hozzáférés; önálló életvezetési kompetenciák és személyes autonómia fejlesztése; társadalmi és szakmai integráció elősegítése.'
  },
  {
    id:'real_2022_23', w:2022, topic:'Hallássérülés', type:'list', diff:3, need:4,
    q:'Sorolja fel a hallássérülés öt prenatális etiológiai tényezőjét!',
    items:[
      { label:'Méhen belüli fertőzések (pl. veleszületett rubeola)', alt:['fertőzés', 'rubeola', 'méhen belüli'] },
      { label:'Örökletes genetikai rendellenességek', alt:['genetikai', 'örökletes'] },
      { label:'Anyai ototoxikus kitettség (gyógyszerek, toxinok)', alt:['ototoxikus', 'toxin', 'gyógyszer'] },
      { label:'Anyai anyagcsere-betegségek (pl. cukorbetegség, fenilketonuria)', alt:['anyagcsere', 'cukorbetegség', 'fenilketonuria'] },
      { label:'Magzati hipoxia (oxigénhiány)', alt:['hipoxia', 'oxigénhiány'] }
    ],
    exp:'Az öt prenatális tényező: méhen belüli fertőzések (rubeola); örökletes genetikai rendellenességek; anyai ototoxikus kitettség; anyai anyagcsere-betegségek; magzati hipoxia.'
  },
  {
    id:'real_2022_24', w:2022, topic:'Hallássérülés', type:'list', diff:2, need:2,
    q:'Sorolja fel a hallássérült gyermekek oktatásában alkalmazott két fő kommunikációs formát!',
    items:[
      { label:'Támogatott verbális kommunikáció', alt:['támogatott verbális', 'verbális'] },
      { label:'Jelnyelvi, mimikai-gesztusos kommunikáció', alt:['jelnyelv', 'mimikai', 'gesztusos'] }
    ],
    exp:'A két kommunikációs forma: támogatott verbális kommunikáció (hallástechnikai eszközök + logopédia) és jelnyelvi, mimikai-gesztusos kommunikáció (vizuális rendszer).'
  },
  {
    id:'real_2022_25', w:2022, topic:'Problémafelvető tanulás', type:'list', diff:2, need:3,
    q:'Sorolja fel a problémafelvetésen alapuló tanulás három szakaszát!',
    items:[
      { label:'A probléma felismerése', alt:['probléma felismerése', 'felismerés'] },
      { label:'Elemzés és hipotézisalkotás', alt:['elemzés', 'hipotézis'] },
      { label:'A megoldások ellenőrzése és alkalmazása', alt:['ellenőrzés', 'alkalmazás', 'megoldás'] }
    ],
    exp:'A három szakasz: a probléma felismerése; elemzés és hipotézisalkotás; a megoldások ellenőrzése és alkalmazása.'
  },

  // ─── Fogalommeghatározás (define) – Claude által értékelt ──────────────────
  {
    id:'real_2022_def_01', w:2022, topic:'Speciális pszichopedagógia', type:'define', diff:2, points:2,
    q:'Határozza meg a speciális pszichopedagógia fogalmát!',
    modelAnswer:'Speciális pszichopedagógia: a neveléstudományok azon ága, amely a sajátos nevelési igényű személyek nevelésének, rehabilitációjának, valamint társadalmi és szakmai integrációjának elméleti és gyakorlati vizsgálatával foglalkozik. A pszichológia, a pedagógia, az orvostudomány, a szociológia és a logopédia ismereteit használja fel, és a pedagógiai folyamatot minden személy fejlődési sajátosságaihoz igazítja.',
    exp:'A neveléstudományok ága az SNI személyek nevelésének, rehabilitációjának, társadalmi-szakmai integrációjának vizsgálatára; interdiszciplináris, a folyamatot a sajátosságokhoz igazítja.'
  },
  {
    id:'real_2022_def_02', w:2022, topic:'Alapfogalmak', type:'define', diff:2, points:2,
    q:'Határozza meg a sajátos nevelési szükségletek fogalmát!',
    modelAnswer:'Sajátos nevelési szükségletek: olyan, fogyatékosságból, zavarból vagy fejlődési nehézségből eredő többlet-pedagógiai támogatási igények, amelyek a tanítási-tanulási folyamat adaptálását teszik szükségessé. Differenciált didaktikai módszerek, erőforrások és stratégiák használatát igénylik az oktatáshoz való méltányos hozzáférés, az iskolai sikeresség és a társadalmi integráció támogatása érdekében.',
    exp:'Fogyatékosságból/zavarból/fejlődési nehézségből eredő többlet-támogatási igények, amelyek a folyamat adaptálását és differenciált módszereket igényelnek.'
  },
  {
    id:'real_2022_def_03', w:2022, topic:'Alapelvek', type:'define', diff:2, points:2,
    q:'Határozza meg a normalizáció fogalmát!',
    modelAnswer:'Normalizáció: az az elv, amely szerint a fogyatékossággal élő személyeknek a fogyatékosság nélkül élőkéhez a lehető legközelebb álló élet- és oktatási feltételeket kell biztosítani. Ez az akadályok megszüntetését, a környezet adaptálását és az aktív inklúzió előmozdítását jelenti, hogy az SNI/CES személyek egyenlő módon vehessenek részt a társadalmi és pedagógiai életben.',
    exp:'A fogyatékos személyeknek a fogyatékosság nélkül élőkéhez legközelebb álló élet- és oktatási feltételek biztosítása; akadálymentesítés, aktív inklúzió.'
  },
  {
    id:'real_2022_def_04', w:2022, topic:'Alapelvek', type:'define', diff:3, points:2,
    q:'Határozza meg a család- és közösségközpontú elv fogalmát!',
    modelAnswer:'Család- és közösségközpontú elv: elismeri a család alapvető szerepét az SNI/CES gyermek fejlődésében, és aktív partnerséget ösztönöz az iskola, a család és a közösség között. A beavatkozásokat a szülők közvetlen részvételével dolgozzák ki, tiszteletben tartva értékeiket, erőforrásaikat és szükségleteiket; a helyi közösséget pedagógiai és szociális támogató erőforrásként hasznosítják.',
    exp:'A család alapvető szerepének elismerése és aktív iskola–család–közösség partnerség; a szülők közvetlen részvétele, a közösség mint erőforrás.'
  },
  {
    id:'real_2022_def_05', w:2022, topic:'Alapelvek', type:'define', diff:3, points:2,
    q:'Határozza meg a komplementaritás elvét!',
    modelAnswer:'Komplementaritás elve: azt jelenti, hogy az SNI/CES személyek számára nyújtott pedagógiai, szociális, egészségügyi és terápiás szolgáltatások összehangoltan működnek és kölcsönösen kiegészítik egymást. A pedagógusok, pszichológusok, logopédusok, orvosok és szociális munkások interdiszciplináris együttműködése holisztikus, a fejlődés valamennyi dimenziójára összpontosító beavatkozást biztosít.',
    exp:'A pedagógiai, szociális, egészségügyi és terápiás szolgáltatások összehangolt, egymást kiegészítő működése interdiszciplináris együttműködéssel.'
  },
  {
    id:'real_2022_def_06', w:2022, topic:'Pszichopedagógiai segítségnyújtás', type:'define', diff:2, points:2,
    q:'Határozza meg a pszichopedagógiai segítségnyújtás pedagógiai összetevőjét!',
    modelAnswer:'Pedagógiai összetevő: a tanterv, a tanítási módszerek és az oktatási anyagok egyéni szükségletekhez igazítását jelenti. Célja az iskolai fejlődés ösztönzése és a funkcionális kompetenciák kialakítása.',
    exp:'A tanterv, a módszerek és az anyagok egyéni szükségletekhez igazítása az iskolai fejlődésért és a funkcionális kompetenciákért.'
  },
  {
    id:'real_2022_def_07', w:2022, topic:'Pszichopedagógiai segítségnyújtás', type:'define', diff:2, points:2,
    q:'Határozza meg a pszichopedagógiai segítségnyújtás szociális összetevőjét!',
    modelAnswer:'Szociális összetevő: az SNI/CES személy társadalmi beilleszkedésének elősegítésére, közösségi részvételének ösztönzésére, valamint a szociális, kulturális és szakmai szolgáltatásokhoz való hozzáférés támogatására irányul.',
    exp:'A társadalmi beilleszkedés és közösségi részvétel elősegítése, valamint a szociális, kulturális és szakmai szolgáltatásokhoz való hozzáférés támogatása.'
  },
  {
    id:'real_2022_def_08', w:2022, topic:'Érzékszervi zavarok', type:'define', diff:2, points:2,
    q:'Határozza meg az érzékszervi zavarok fogalmát!',
    modelAnswer:'Érzékszervi zavarok: az érzékelő rendszerek – látási, hallási, taktilis stb. analizátorok – működészavarai, amelyek befolyásolják a külső környezetből érkező ingerek helyes befogadását, feldolgozását és értelmezését.',
    exp:'Az érzékelő analizátorok (látás, hallás, tapintás) működészavarai, amelyek a külső ingerek befogadását, feldolgozását és értelmezését érintik.'
  },
  {
    id:'real_2022_def_09', w:2022, topic:'Hallássérülés', type:'define', diff:2, points:2,
    q:'Határozza meg a támogatott verbális kommunikáció fogalmát!',
    modelAnswer:'Támogatott verbális kommunikáció: hallástechnikai eszközök – hallókészülék, cochleáris implantátum – és logopédiai technikák alkalmazása a hallássérült gyermekek verbális kifejezőképességének lehető legteljesebb fejlesztésére.',
    exp:'Hallástechnikai eszközök (hallókészülék, cochleáris implantátum) és logopédiai technikák a verbális kifejezőképesség fejlesztésére.'
  },
  {
    id:'real_2022_def_10', w:2022, topic:'Hallássérülés', type:'define', diff:2, points:2,
    q:'Határozza meg a jelnyelvi, mimikai-gesztusos kommunikáció fogalmát!',
    modelAnswer:'Jelnyelvi, mimikai-gesztusos kommunikáció: kódolt gesztusokra és arckifejezésekre épülő vizuális kommunikációs rendszer, amelyet akkor használnak információátadásra, amikor a verbális kommunikáció nem lehetséges vagy nem hatékony. Az egyéni szükségletekhez és a siket közösségek kultúrájához igazodik.',
    exp:'Kódolt gesztusokra és arckifejezésekre épülő vizuális rendszer, amikor a verbális kommunikáció nem lehetséges; a siket közösség kultúrájához igazodik.'
  },
  {
    id:'real_2022_def_11', w:2022, topic:'Módszertani fogalmak', type:'define', diff:3, points:2,
    q:'Határozza meg az intradiszciplináris tanulási tevékenység fogalmát!',
    modelAnswer:'Intradiszciplináris tanulási tevékenység: ugyanazon tantárgy vagy tantervi terület tartalmainak integrált megközelítése, amely logikai kapcsolatokat létesít különböző témák vagy fejezetek között. Segíti a fogalmak mélyebb megértését és az ismeretek különböző helyzetekre történő átvitelét, megszilárdítja a tanulást és fejleszti a kritikai gondolkodást.',
    exp:'Ugyanazon tantárgy tartalmainak integrált megközelítése, logikai kapcsolatokat teremtve témák/fejezetek között; mélyebb megértés és transzfer.'
  },
  {
    id:'real_2022_def_12', w:2022, topic:'Problémafelvető tanulás', type:'define', diff:2, points:2,
    q:'Határozza meg a problémafelvetésen alapuló tanulás fogalmát!',
    modelAnswer:'Problémafelvetésen alapuló tanulás: aktív-részvételi módszer, amely valós vagy szimulált problémahelyzetek elé állítja a tanulót a kritikai gondolkodás, a kreativitás és a döntéshozatali képesség fejlesztése érdekében. A tanulók azonosítják a problémát, elemzik az információkat, hipotéziseket fogalmaznak meg és indokolt megoldásokat javasolnak.',
    exp:'Aktív-részvételi módszer valós/szimulált problémahelyzetekkel; a tanuló azonosít, elemez, hipotézist alkot, megoldást javasol.'
  },
  {
    id:'real_2022_def_13', w:2022, topic:'Fejlesztő értékelés', type:'define', diff:3, points:2,
    q:'Határozza meg a folyamatos, fejlesztő értékelés fogalmát/jelentőségét!',
    modelAnswer:'Folyamatos, fejlesztő értékelés: állandó pedagógiai támogatási forma, amely a tanuló fejlődéséről folyamatos információt nyújt, valós időben azonosítja a nehézségeket, és lehetővé teszi a tanítási stratégiák módosítását. Segíti az ismeretek megszilárdítását, növeli a motivációt, megelőzi a kudarcélményt, és támogatja az önértékelés és az autonómia fejlődését. Módszerei: megfigyelés, fejlődési lapok, portfóliók és önértékelés.',
    exp:'Állandó pedagógiai támogatási forma, amely folyamatos visszajelzést ad, lehetővé teszi a stratégiák módosítását, növeli a motivációt és támogatja az autonómiát.'
  },

  // ─── Esszé (essay) – Claude által értékelt ────────────────────────────────
  {
    id:'real_2022_essay_01', w:2022, topic:'Pszichopedagógiai segítségnyújtás', type:'essay', diff:3, points:6,
    q:'Mutassa be a pszichopedagógiai segítségnyújtás három alapvető összetevőjét (pszichológiai, pedagógiai, szociális)!',
    modelAnswer:'A pszichopedagógiai segítségnyújtás három alapvető összetevőből áll:\n\nPszichológiai összetevő: az SNI/CES személy kognitív, érzelmi és viselkedési fejlődésének értékelésére és támogatására irányul. A pszichológiai beavatkozás az önértékelés, a társas kapcsolatok és a környezethez való alkalmazkodáshoz szükséges érzelmi kompetenciák megerősítését célozza.\n\nPedagógiai összetevő: a tanterv, a tanítási módszerek és az oktatási anyagok egyéni szükségletekhez igazítását jelenti. Célja az iskolai fejlődés ösztönzése és a funkcionális kompetenciák kialakítása.\n\nSzociális összetevő: az SNI/CES személy társadalmi beilleszkedésének elősegítésére, közösségi részvételének ösztönzésére, valamint a szociális, kulturális és szakmai szolgáltatásokhoz való hozzáférés támogatására irányul.',
    exp:'Pszichológiai (kognitív/érzelmi/viselkedési fejlődés, önértékelés); pedagógiai (tanterv/módszerek/anyagok adaptálása, funkcionális kompetenciák); szociális (társadalmi beilleszkedés, szolgáltatásokhoz hozzáférés).'
  },
  {
    id:'real_2022_essay_02', w:2022, topic:'Fejlesztő értékelés', type:'essay', diff:3, points:6,
    q:'Indokolja meg a folyamatos, fejlesztő értékelés jelentőségét a fogyatékossággal élő tanulók tanulási és terápiás tevékenységeiben!',
    modelAnswer:'A folyamatos, fejlesztő értékelés alapvető a fogyatékossággal élő tanulók nevelési és terápiás folyamatában, mert állandó információt nyújt fejlődésükről, és lehetővé teszi a pedagógiai beavatkozások módosítását. A pedagógus nyomon követi az előrehaladást, valós időben azonosítja a nehézségeket, és hozzáigazítja tanítási stratégiáit, biztosítva a folyamat személyre szabását.\n\nAz SNI/CES tanulók tanulási üteme változó, ezért a folyamatos visszajelzés segíti az elsajátított ismeretek és készségek megszilárdítását, növeli a motivációt, és megelőzi a kudarcélmény kialakulását. A folyamatos értékelés támogatja az önértékelés és az autonómia fejlődését, hozzájárulva a hiteles és tartós tanuláshoz.\n\nMódszerei – megfigyelés, fejlődési lapok, portfóliók és önértékelés – nélkülözhetetlenek a rugalmas, tanulói szükségletekre összpontosító pedagógiai folyamathoz. A folyamatos értékelés így nem pusztán mérőeszköz, hanem állandó pedagógiai támogatási forma, amely nélkülözhetetlen a fogyatékossággal élő tanulók sikeréhez.',
    exp:'Folyamatos információ a fejlődésről; valós idejű nehézség-azonosítás és stratégiamódosítás; a változó tanulási ütem kezelése; motiváció, kudarcmegelőzés, önértékelés/autonómia; módszerek: megfigyelés, fejlődési lapok, portfólió, önértékelés.'
  }
];
