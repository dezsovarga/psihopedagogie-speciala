// Valós vizsgatétel — 2017 (3. változat)
// Forrás: real_exam_subjects/gyakorlas_2017_megoldasok.docx (2017. július 12.)
// Egy önálló, évenkénti szekció. w: 2017 (a w érték maga az év).
// Minden kérdéstípust ez az egy fájl tartalmaz (standard + define + essay + list).
const EXERCISES_REAL_2017 = [
  // ─── I. FELADAT – Speciális pszichopedagógia a neveléstudományban ──────────
  {
    id:'real_2017_01', w:2017, topic:'Speciális pszichopedagógia', type:'mc', diff:2,
    q:'Mi a speciális pszichopedagógia a fogalmi meghatározás szerint?',
    opts:[
      'Az orvostudomány egyik ága, amely a fogyatékosságok gyógyszeres kezelésével foglalkozik',
      'A neveléstudományok azon ága, amely a sajátos nevelési igényű személyek tanulmányozásával, a velük kapcsolatos beavatkozással és pedagógiai támogatással foglalkozik',
      'A pszichológia egy résztudománya, amely kizárólag a tehetséggondozásra irányul',
      'A szociális munka egyik területe, amely a családok anyagi támogatását szervezi'
    ],
    ans:1,
    exp:'A speciális pszichopedagógia a neveléstudományok azon ága, amely a sajátos nevelési igényű személyek tanulmányozásával, a velük kapcsolatos beavatkozással és pedagógiai támogatással foglalkozik, az oktatási-nevelési folyamatokat sajátosságaikhoz igazítva.'
  },
  {
    id:'real_2017_02', w:2017, topic:'Alapfogalmak', type:'mc', diff:2,
    q:'Mit jelent a pszichoszociális beilleszkedés fogalma?',
    opts:[
      'A tanulók osztályzatainak nyilvántartását',
      'A fogyatékossággal élő személyek oktatási, szakmai és társadalmi környezetbe történő integrációjának folyamatát, alapvető jogaik tiszteletben tartásával',
      'A tananyag évfolyamokra bontását',
      'A pedagógusok továbbképzési rendszerét'
    ],
    ans:1,
    exp:'A pszichoszociális beilleszkedés a fogyatékossággal élő személyek oktatási, szakmai és társadalmi környezetbe történő integrációjának folyamata, alapvető jogaik tiszteletben tartásával.'
  },
  {
    id:'real_2017_03', w:2017, topic:'Alapfogalmak', type:'tf', diff:1,
    q:'A sajátos nevelési igény (SNI/CES) a tanterv és a pedagógiai környezet adaptálását igényli.',
    ans:true,
    exp:'Igaz. Az SNI/CES fogyatékosságból vagy fejlődési nehézségből eredő többlet-pedagógiai és terápiás támogatási szükséglet, amely a tanterv és a pedagógiai környezet adaptálását igényli.'
  },
  {
    id:'real_2017_04', w:2017, topic:'Interdiszciplinaritás', type:'match', diff:2,
    q:'Párosítsa a társtudományt a speciális pszichopedagógiával való kapcsolatával!',
    pairs:[
      { L:'Pszichológia', R:'A gyermek kognitív, érzelmi és viselkedéses fejlődésének megértése' },
      { L:'Pedagógia', R:'A tanítási-tanulási módszerek adaptálása, egyéni tervek' },
      { L:'Orvostudomány', R:'A fogyatékosságok kóroki hátterének feltárása' },
      { L:'Logopédia', R:'A nyelvi zavarok korrekciója, funkcionális kommunikáció' }
    ],
    exp:'A speciális pszichopedagógia a pszichológiával a fejlődés megértésében, a pedagógiával a módszerek adaptálásában, az orvostudománnyal a kórok feltárásában, a logopédiával a nyelvi korrekcióban működik együtt.'
  },
  {
    id:'real_2017_05', w:2017, topic:'Interdiszciplinaritás', type:'mc', diff:2,
    q:'Miben áll a speciális pszichopedagógia és az orvostudomány kapcsolata?',
    opts:[
      'Az orvostudomány határozza meg a tanterv tartalmát',
      'Együttműködik a fogyatékosságok kóroki hátterének feltárásában és a tanulók egészségi állapotához igazított pedagógiai programok kidolgozásában',
      'Az orvostudomány végzi a pedagógiai értékelést',
      'Nincs közöttük kapcsolat'
    ],
    ans:1,
    exp:'A speciális pszichopedagógia az orvostudománnyal a fogyatékosságok kóroki hátterének feltárásában és a tanulók egészségi állapotához igazított pedagógiai programok kidolgozásában működik együtt.'
  },
  {
    id:'real_2017_06', w:2017, topic:'Nevelési-terápiás eljárások', type:'mc', diff:2,
    q:'Melyik nevelési-terápiás eljárás fejleszti strukturált és szabad helyzetekben egyaránt az SNI/CES gyermekek kognitív, szociális-érzelmi és mozgásos készségeit?',
    opts:['Logopédiai beavatkozás', 'Játékterápia', 'Pedagógiai audiológia', 'Térbeli tájékozódás tréning'],
    ans:1,
    exp:'A játékterápia az SNI/CES gyermekek kognitív, szociális-érzelmi és mozgásos készségeinek fejlesztésére használható, strukturált és szabad helyzetekben egyaránt hasznosítva kifejezési és kreatív lehetőségeiket.'
  },
  {
    id:'real_2017_07', w:2017, topic:'Nevelési-terápiás eljárások', type:'mc', diff:2,
    q:'Mire irányul a logopédiai beavatkozás?',
    opts:[
      'A mozgásszervi rehabilitációra',
      'A nyelvi zavarok (pl. pöszeség, diszlexia, dadogás) korrigálására és a funkcionális kommunikáció fejlesztésére',
      'A látássérülés kompenzálására',
      'A matematikai készségek fejlesztésére'
    ],
    ans:1,
    exp:'A logopédiai beavatkozás a nyelvi zavarok – például pöszeség, diszlexia és dadogás – korrigálására, valamint a funkcionális kommunikáció és a társadalmi beilleszkedés fejlesztésére irányul.'
  },

  // ─── II. FELADAT – A nyelv kompenzálása és elsajátítása ────────────────────
  {
    id:'real_2017_08', w:2017, topic:'Nyelvi terápiák', type:'mc', diff:2,
    q:'Mit jelent a pedagógiai és technológiai audiológia?',
    opts:[
      'A látássérült tanulók térbeli tájékozódásának fejlesztését',
      'Interdiszciplináris terület, amely a hallássérült tanulók hallásának értékelésével, hallási rehabilitációjával és technológiai támogatásával (pl. hallókészülék, cochleáris implantátum) foglalkozik',
      'A beszédhangok artikulációjának korrekcióját',
      'A tanulók viselkedésének megfigyelését'
    ],
    ans:1,
    exp:'A pedagógiai és technológiai audiológia interdiszciplináris terület, amely a hallássérült tanulók hallásának értékelésével, hallási rehabilitációjával és kommunikációjuk fejlesztését szolgáló technológiai támogatással (hallókészülékek, cochleáris implantátumok) foglalkozik.'
  },
  {
    id:'real_2017_09', w:2017, topic:'Nyelvi terápiák', type:'fill', diff:2,
    q:'A látássérült személyek térbeli tájékozódási és önálló közlekedési képességének fejlesztésére alkalmazott pedagógiai technikák összességét __________ és mobilitásnak nevezzük.',
    ans:'térbeli tájékozódás',
    exp:'A térbeli tájékozódás és mobilitás a látássérült személyek térbeli tájékozódási és önálló közlekedési képességének fejlesztésére alkalmazott pedagógiai technikák összessége.'
  },
  {
    id:'real_2017_10', w:2017, topic:'Demutizáció', type:'mc', diff:3,
    q:'Mit jelent a demutizáció?',
    opts:[
      'A látássérült gyermekek olvasástanítását Braille-írással',
      'A veleszületett vagy szerzett siketséggel élő gyermekek beszélt nyelvének kialakítására irányuló összetett folyamat',
      'A mozgáskorlátozott gyermekek gyógytornáját',
      'A tehetséges tanulók gyorsított képzését'
    ],
    ans:1,
    exp:'A demutizáció a veleszületett vagy szerzett siketséggel élő gyermekek beszélt nyelvének kialakítására irányuló összetett folyamat: magában foglalja a hallásmaradvány stimulálását, a hangok artikulációjának modellálását, légzőgyakorlatokat, valamint az expresszív és receptív nyelv fejlesztését.'
  },
  {
    id:'real_2017_11', w:2017, topic:'Demutizáció', type:'tf', diff:2,
    q:'A demutizáció folyamata magában foglalja a hallásmaradvány stimulálását és a hangok artikulációjának modellálását.',
    ans:true,
    exp:'Igaz. A demutizáció része a hallásmaradvány stimulálása, a hangok artikulációjának modellálása, a légzőgyakorlatok, valamint az expresszív és receptív nyelv fejlesztése.'
  },
  {
    id:'real_2017_12', w:2017, topic:'Vizuális-percepciós nevelés', type:'mc', diff:2,
    q:'Melyik képességek kialakítására irányul a vizuális-percepciós nevelés?',
    opts:[
      'A hallási diszkrimináció és a ritmusérzék',
      'A vizuális megkülönböztetés, formafelismerés, térbeli tájékozódás és vizuomotoros integráció',
      'A nagymozgások és az egyensúly',
      'A szókincs és a mondatalkotás'
    ],
    ans:1,
    exp:'A vizuális-percepciós nevelés a vizuális megkülönböztetés, a formafelismerés, a térbeli tájékozódás és a vizuomotoros integráció képességének kialakítására irányul, elsősorban látássérült vagy vizuális feldolgozási nehézségekkel küzdő gyermekeknél.'
  },
  {
    id:'real_2017_13', w:2017, topic:'Viselkedésterápia', type:'mc', diff:2,
    q:'A nyelv kompenzálását szolgáló viselkedésmodellálási tevékenységben mi történik, amikor a gyermek helyesen artikulál egy hangot vagy mondatot?',
    opts:[
      'A pedagógus figyelmen kívül hagyja, hogy ne zavarja a folyamatot',
      'Pozitív megerősítést kap – dicséretet, vizuális jelet vagy kisebb jutalmat',
      'Azonnal új, nehezebb feladatot kap',
      'A gyakorlatot befejezik'
    ],
    ans:1,
    exp:'A viselkedésmodellálásban a gyermek minden helyesen artikulált hang vagy mondat után pozitív megerősítést – dicséretet, vizuális jelet vagy kisebb jutalmat – kap; a helyes verbális viselkedések rögzítéséhez pozitív megerősítést, ismétlést és azonnali visszajelzést alkalmaznak.'
  },

  // ─── III. FELADAT – Módszertan, tanterv, alapelvek ────────────────────────
  {
    id:'real_2017_14', w:2017, topic:'Módszertani fogalmak', type:'mc', diff:2,
    q:'Mi az interdiszciplináris tanulási tevékenység?',
    opts:[
      'Egyetlen tantárgy elmélyült feldolgozása',
      'Több tantárgy tartalmait és módszereit egyesítő didaktikai tevékenység, amely a valós életben is hasznosítható integrált kompetenciák fejlesztését szolgálja',
      'A tanulók egyéni felmérése',
      'A szülőkkel való kapcsolattartás formája'
    ],
    ans:1,
    exp:'Az interdiszciplináris tanulási tevékenység több tantárgy tartalmait és módszereit egyesítő didaktikai tevékenység, amely a valós életben is hasznosítható integrált kompetenciák fejlesztését szolgálja.'
  },
  {
    id:'real_2017_15', w:2017, topic:'Módszertani fogalmak', type:'fill', diff:2,
    q:'Az az egyéni pedagógiai dokumentum, amely egy SNI/CES tanuló szükségleteihez igazított célokat, módszereket és értékelési eljárásokat határoz meg, a személyre szabott __________ terv (PIP).',
    ans:'beavatkozási',
    exp:'A személyre szabott beavatkozási terv (PIP) olyan egyéni pedagógiai dokumentum, amely az SNI/CES tanuló szükségleteihez igazított célokat, módszereket, erőforrásokat és értékelési eljárásokat határoz meg.'
  },
  {
    id:'real_2017_16', w:2017, topic:'Nemzeti tanterv', type:'order', diff:2,
    q:'A nemzeti tanterv három összetevője a következő – rendezze őket az általánostól (célok) a konkrét megvalósítás (stratégiák) felé!',
    items:[
      'Pedagógiai célok (nevelési eszmény, képzési profil)',
      'Oktatási tartalmak (tematikai területek, tantárgyak)',
      'Didaktikai stratégiák (tanítási-tanulási-értékelési módszerek)'
    ],
    exp:'A nemzeti tanterv három összetevője: pedagógiai célok (nevelési eszmény, a végzett tanuló képzési profilja), oktatási tartalmak (tematikai területek, tantárgyak) és didaktikai stratégiák (módszerek és technikák).'
  },
  {
    id:'real_2017_17', w:2017, topic:'Oktatási alapelvek', type:'mc', diff:2,
    q:'Melyik alapelv szerint kell a tanulókat egyéni fejlődési és tanulási sajátosságaiknak megfelelően megközelíteni, hogy lehetőségeik a legteljesebben kibontakozzanak?',
    opts:[
      'Az aktív részvétel elve',
      'Az individualizálás és személyre szabás elve',
      'A szemléletesség elve',
      'A rendszeresség elve'
    ],
    ans:1,
    exp:'Az individualizálás és személyre szabás elve szerint a tanulókat egyéni fejlődési és tanulási sajátosságaiknak megfelelően kell megközelíteni, hogy mindegyikük lehetőségei a lehető legteljesebben kibontakozhassanak.'
  },
  {
    id:'real_2017_18', w:2017, topic:'Oktatási alapelvek', type:'tf', diff:1,
    q:'Az aktív részvétel elve szerint a tanulókat aktívan be kell vonni a pedagógiai folyamatba, lehetőséget biztosítva véleményük kifejezésére és a saját tanulásukért való felelősségvállalásra.',
    ans:true,
    exp:'Igaz. Az aktív részvétel elve szerint a tanulókat aktívan be kell vonni a pedagógiai folyamatba, lehetőséget biztosítva véleményük kifejezésére és saját tanulásukban való felelősségvállalásra.'
  },
  {
    id:'real_2017_19', w:2017, topic:'Transzdiszciplináris tevékenység', type:'mc', diff:2,
    q:'A „Fedezzük fel a növények világát!” transzdiszciplináris tevékenységben a növények magasságának mérése és az értékek összehasonlítása melyik területhez kapcsolódik?',
    opts:['Román nyelv', 'Matematika', 'Vizuális művészetek', 'Természettudomány'],
    ans:1,
    exp:'A növények magasságának mérése és az értékek összehasonlítása a matematika területéhez kapcsolódik. A tevékenység több területet integrál: természettudomány (megfigyelés), matematika (mérés), román nyelv (leírás), vizuális művészetek (rajz/kollázs).'
  },
  {
    id:'real_2017_20', w:2017, topic:'Matematikai készségek', type:'short', diff:2,
    q:'Nevezzen meg legalább két okot, amiért a matematikai számolás elsajátítása fontos a fogyatékossággal élő gyermekek számára!',
    keywords:['önálló', 'mindennapi'],
    exp:'A matematikai számolás elsajátítása alapvető az önállóság és a társadalmi beilleszkedés szempontjából: lehetővé teszi a mindennapi feladatokat (vásárlás, mérés, idő- és mennyiségbecslés), és fejleszti a logikát, az érvelést, a problémamegoldást és a döntéshozatalt.'
  },

  // ─── Felsorolás (list) típus ──────────────────────────────────────────────
  {
    id:'real_2017_21', w:2017, topic:'Alapfogalmak', type:'list', diff:2, need:3,
    q:'Sorolja fel az I. feladat három meghatározandó alapfogalmát!',
    items:[
      { label:'Speciális pszichopedagógia', alt:['pszichopedagógia'] },
      { label:'Pszichoszociális beilleszkedés', alt:['pszichoszociális', 'beilleszkedés'] },
      { label:'Sajátos nevelési igény (SNI/CES)', alt:['sajátos nevelési igény', 'sni', 'ces'] }
    ],
    exp:'A három alapfogalom: speciális pszichopedagógia, pszichoszociális beilleszkedés és sajátos nevelési igény (SNI/CES).'
  },
  {
    id:'real_2017_22', w:2017, topic:'Interdiszciplinaritás', type:'list', diff:1, need:3,
    q:'Sorolja fel azt a három társtudományt, amellyel a speciális pszichopedagógia kapcsolatát az I. feladat vizsgálja!',
    items:[
      { label:'Pszichológia', alt:['pszichológ'] },
      { label:'Pedagógia', alt:['pedagóg'] },
      { label:'Orvostudomány', alt:['orvos', 'medicina'] }
    ],
    exp:'A három társtudomány: pszichológia, pedagógia és orvostudomány.'
  },
  {
    id:'real_2017_23', w:2017, topic:'Nyelvi terápiák', type:'list', diff:2, need:3,
    q:'Sorolja fel a II. feladat három meghatározandó fogalmát a nyelv kompenzálásával kapcsolatban!',
    items:[
      { label:'A nyelvi zavarok terápiája', alt:['nyelvi zavar', 'logopéd'] },
      { label:'Pedagógiai és technológiai audiológia', alt:['audiológia'] },
      { label:'Térbeli tájékozódás és mobilitás', alt:['térbeli tájékozódás', 'mobilitás'] }
    ],
    exp:'A három fogalom: a nyelvi zavarok terápiája, a pedagógiai és technológiai audiológia, valamint a térbeli tájékozódás és mobilitás.'
  },
  {
    id:'real_2017_24', w:2017, topic:'Nemzeti tanterv', type:'list', diff:2, need:3,
    q:'Sorolja fel a nemzeti tanterv három összetevőjét!',
    items:[
      { label:'Pedagógiai célok', alt:['célok', 'nevelési eszmény', 'képzési profil'] },
      { label:'Oktatási tartalmak', alt:['tartalmak', 'tantárgyak', 'tematikai'] },
      { label:'Didaktikai stratégiák', alt:['stratégiák', 'módszerek'] }
    ],
    exp:'A nemzeti tanterv három összetevője: pedagógiai célok, oktatási tartalmak és didaktikai stratégiák.'
  },
  {
    id:'real_2017_25', w:2017, topic:'Oktatási alapelvek', type:'list', diff:2, need:2,
    q:'Sorolja fel az SNI/CES tanulók oktatási folyamatának két alapelvét (a III. feladat szerint)!',
    items:[
      { label:'Az individualizálás és személyre szabás elve', alt:['individualizál', 'személyre szab'] },
      { label:'Az aktív részvétel elve', alt:['aktív részvétel'] }
    ],
    exp:'A két alapelv: az individualizálás és személyre szabás elve, valamint az aktív részvétel elve.'
  },

  // ─── Fogalommeghatározás (define) – Claude által értékelt ──────────────────
  {
    id:'real_2017_def_01', w:2017, topic:'Fogalommeghatározás', type:'define', diff:2, points:2,
    q:'Határozza meg a speciális pszichopedagógia fogalmát!',
    modelAnswer:'Speciális pszichopedagógia: a neveléstudományok azon ága, amely a sajátos nevelési igényű személyek tanulmányozásával, a velük kapcsolatos beavatkozással és pedagógiai támogatással foglalkozik, az oktatási-nevelési folyamatokat sajátosságaikhoz igazítva.',
    exp:'A neveléstudományok ága, amely az SNI személyek tanulmányozásával, beavatkozásával és pedagógiai támogatásával foglalkozik, a folyamatot sajátosságaikhoz igazítva.'
  },
  {
    id:'real_2017_def_02', w:2017, topic:'Fogalommeghatározás', type:'define', diff:2, points:2,
    q:'Határozza meg a pszichoszociális beilleszkedés fogalmát!',
    modelAnswer:'Pszichoszociális beilleszkedés: a fogyatékossággal élő személyek oktatási, szakmai és társadalmi környezetbe történő integrációjának folyamata, alapvető jogaik tiszteletben tartásával.',
    exp:'A fogyatékossággal élő személyek oktatási, szakmai és társadalmi integrációjának folyamata, alapvető jogaik tiszteletben tartásával.'
  },
  {
    id:'real_2017_def_03', w:2017, topic:'Fogalommeghatározás', type:'define', diff:2, points:2,
    q:'Határozza meg a sajátos nevelési igény (SNI/CES) fogalmát!',
    modelAnswer:'Sajátos nevelési igény (SNI/CES): fogyatékosságból vagy fejlődési nehézségből eredő többlet-pedagógiai és terápiás támogatási szükséglet, amely a tanterv és a pedagógiai környezet adaptálását igényli.',
    exp:'Fogyatékosságból vagy fejlődési nehézségből eredő többlet-pedagógiai és terápiás támogatási szükséglet, amely a tanterv és a környezet adaptálását igényli.'
  },
  {
    id:'real_2017_def_04', w:2017, topic:'Demutizáció', type:'define', diff:3, points:2,
    q:'Határozza meg a demutizáció fogalmát!',
    modelAnswer:'Demutizáció: a veleszületett vagy szerzett siketséggel élő gyermekek beszélt nyelvének kialakítására irányuló összetett folyamat. Magában foglalja a hallásmaradvány stimulálását, a hangok artikulációjának modellálását, a légzőgyakorlatokat, valamint az expresszív és receptív nyelv fejlesztését.',
    exp:'A siket gyermekek beszélt nyelvének kialakítására irányuló folyamat: hallásmaradvány-stimulálás, artikuláció-modellálás, légzőgyakorlatok, expresszív/receptív nyelvfejlesztés.'
  },
  {
    id:'real_2017_def_05', w:2017, topic:'Módszertani fogalmak', type:'define', diff:2, points:2,
    q:'Határozza meg a személyre szabott beavatkozási terv (PIP) fogalmát!',
    modelAnswer:'Személyre szabott beavatkozási terv (PIP): olyan egyéni pedagógiai dokumentum, amely egy SNI/CES tanuló sajátos szükségleteihez igazított célokat, módszereket, erőforrásokat és értékelési eljárásokat határoz meg, támogatva pedagógiai és szociális-érzelmi fejlődését.',
    exp:'Egyéni pedagógiai dokumentum, amely az SNI/CES tanuló szükségleteihez igazított célokat, módszereket, erőforrásokat és értékelési eljárásokat rögzít.'
  },

  // ─── Esszé (essay) – Claude által értékelt ────────────────────────────────
  {
    id:'real_2017_essay_01', w:2017, topic:'Interdiszciplinaritás', type:'essay', diff:3, points:6,
    q:'Mutassa be a speciális pszichopedagógia interdiszciplináris státuszát: magyarázza el kapcsolatát a pszichológiával, a pedagógiával és az orvostudománnyal!',
    modelAnswer:'A speciális pszichopedagógia interdiszciplináris tudományterület, amely három fő társtudománnyal áll szoros kapcsolatban:\n\nKapcsolat a pszichológiával: felhasználja a pszichológia elméleteit és módszereit a gyermek kognitív, érzelmi és viselkedéses fejlődésének megértéséhez, támogatva a diagnosztikát és a pedagógiai beavatkozást.\n\nKapcsolat a pedagógiával: az általános pedagógia alapelveit beépíti az SNI/CES tanulók tanítási-tanulási módszereinek adaptálásába, egyéni oktatási terveket és differenciált módszereket alkalmazva.\n\nKapcsolat az orvostudománnyal: együttműködik az orvostudománnyal a fogyatékosságok kóroki hátterének feltárásában és a tanulók egészségi állapotához igazított pedagógiai programok kidolgozásában.',
    exp:'A három kapcsolat: pszichológia (a fejlődés megértése, diagnosztika), pedagógia (módszerek adaptálása, egyéni tervek), orvostudomány (kórok feltárása, egészségi állapothoz igazított programok).'
  },
  {
    id:'real_2017_essay_02', w:2017, topic:'Matematikai készségek', type:'essay', diff:3, points:6,
    q:'Írjon rövid érvelő szöveget arról, miért szükséges, hogy a fogyatékossággal élő gyermekek elsajátítsák a matematikai számolás alapvető eszközeit!',
    modelAnswer:'A matematikai számolás elsajátítása alapvető jelentőségű a fogyatékossággal élő gyermekek önállósága és társadalmi beilleszkedése szempontjából. Az alapműveletek – összeadás, kivonás, szorzás és osztás – ismerete lehetővé teszi a mindennapi feladatok, például a vásárlás, a mérés, valamint az idő- és mennyiségbecslés elvégzését. Az SNI/CES tanulók számára e funkcionális készségek elsajátítása létfontosságú a közösségi életben való aktív részvételhez és a személyes önállósághoz. A matematika tanításának konkrétnak, fokozatosnak és minden gyermek tanulási tempójához, illetve stílusához igazítottnak kell lennie, vizuális eszközök és gyakorlati feladatok alkalmazásával. A matematika egyúttal fejleszti a logikát, az érvelést, a problémamegoldást és a döntéshozatalt, vagyis a személyes és szakmai sikerhez nélkülözhetetlen kompetenciákat.',
    exp:'Érvek: önállóság és társadalmi beilleszkedés; mindennapi funkcionális feladatok (vásárlás, mérés, idő/mennyiség); a tanítás legyen konkrét, fokozatos, egyénhez igazított; fejleszti a logikát, érvelést, problémamegoldást.'
  }
];
