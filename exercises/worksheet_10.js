// Worksheet 10 exercises — Preprofesszionális/professzionális készségek · Pályaorientáció · Munkára felkészítő modul
// Source: gyakorlas_10_megoldasok_cl.docx
const EXERCISES_W10 = [
  // ─── I. TÉTEL – Preprofesszionális és professzionális készségek ────────────
  {
    id:'w10_01', w:10, topic:'Preprofesszionalizáció', type:'mc', diff:2,
    q:'Mit jelent a preprofesszionalizáció?',
    opts:[
      'Egy konkrét szakma technikai fogásainak elsajátítása',
      'Az alapvető munkaszokások, magatartásformák és attitűdök korai, iskolai megalapozása, még a konkrét szakmaválasztás előtt',
      'A felnőttkori átképzés folyamata',
      'A munkahelyi bérezés megállapítása'
    ],
    ans:1,
    exp:'A preprofesszionalizáció a munkavégzéshez szükséges alapvető munkaszokások, magatartásformák és attitűdök (pl. feladattartás, pontosság, együttműködés) korai, iskolai keretek közötti megalapozása, még mielőtt konkrét szakma vagy foglalkozás választására sor kerülne.'
  },
  {
    id:'w10_02', w:10, topic:'Professzionalizáció', type:'tf', diff:2,
    q:'A professzionalizáció egy meghatározott munkakörre vagy szakmacsoportra irányuló, konkrét szakmai ismeretek és technikai készségek elsajátítása.',
    ans:true,
    exp:'Igaz. A professzionalizáció egy meghatározott munkakörre vagy szakmacsoportra irányuló, konkrét szakmai ismeretek és technikai készségek elsajátítása — szemben a preprofesszionalizációval, amely a szakmaválasztás előtti általános alapozás.'
  },
  {
    id:'w10_03', w:10, topic:'Munkakészség', type:'mc', diff:2,
    q:'Mit jelent a munkakészség (pregătire pentru muncă)?',
    opts:[
      'Kizárólag a fizikai erőnlét',
      'Azoknak a viselkedéses, kommunikációs és funkcionális készségeknek az együttese, amelyek lehetővé teszik egy munkahelyi elvárásrendszernek való megfelelést',
      'A szabadidő megszervezésének képessége',
      'A munkahely fizikai kialakítása'
    ],
    ans:1,
    exp:'A munkakészség azoknak a viselkedéses, kommunikációs és funkcionális készségeknek az együttese (instrukciókövetés, önellenőrzés, kollegiális együttműködés), amelyek lehetővé teszik egy munkahelyi elvárásrendszernek való tényleges megfelelést.'
  },
  {
    id:'w10_04', w:10, topic:'Tranzíció', type:'mc', diff:2,
    q:'Mi jellemzi a tranzíciót (átmenet) a definíció szerint?',
    opts:[
      'Egyetlen tanév alatt lezajló, gyors váltás',
      'Az iskolai környezetből a felnőtt élet színterei felé történő, tervezett és fokozatos, több évre visszanyúló átmenet',
      'A tanuló azonnali munkába állítása előkészítés nélkül',
      'A szülő teljes kizárása a folyamatból'
    ],
    ans:1,
    exp:'A tranzíció (átmenet) az iskolai környezetből a felnőtt élet különböző színterei (munka, önálló vagy támogatott lakhatás, közösségi részvétel) felé történő, tervezett és fokozatos átmenet folyamata, amely tudatos, több évre visszanyúló előkészítést igényel.'
  },
  {
    id:'w10_05', w:10, topic:'Támogatott foglalkoztatás', type:'mc', diff:3,
    q:'Mi jellemzi a támogatott foglalkoztatást (angajare asistată)?',
    opts:[
      'Elkülönített, védett műhelyben, bér nélkül végzett tevékenység',
      'A nyílt munkaerőpiacon, valódi munkahelyen, valódi bérért végzett munka, munkahelyi mentor (job coach) segítségével',
      'Kizárólag otthon végezhető, felügyelet nélküli munka',
      'A munkavégzés teljes mellőzése'
    ],
    ans:1,
    exp:'A támogatott foglalkoztatás olyan foglalkoztatási forma, amelyben a fogyatékossággal élő személy a nyílt munkaerőpiacon, valódi munkahelyen, valódi bérért dolgozik, miközben munkahelyi mentor (job coach) és egyéb személyre szabott támogatás segíti a betanulást és a tartós beilleszkedést.'
  },
  {
    id:'w10_06', w:10, topic:'Munkakészség-területek', type:'match', diff:3,
    q:'Párosítsa a munkavégzéshez szükséges készségterületet a jellemző tartalmával!',
    pairs:[
      { L:'Munkaszokások és feladattartás', R:'Pontos megjelenés, a feladat végigvitele, önálló munkatempó' },
      { L:'Kommunikációs és együttműködési készségek', R:'Instrukciók követése, megfelelő segítségkérés' },
      { L:'Funkcionális akadémiai készségek', R:'Alapszintű olvasás, számolás, idő- és pénzkezelés' },
      { L:'Önszabályozási és problémamegoldó készségek', R:'Stressztűrés, önellenőrzés, hibajavítás' }
    ],
    exp:'A munkaszokások: pontosság, feladattartás; a kommunikáció: instrukciókövetés, segítségkérés; a funkcionális akadémiai készségek: olvasás/számolás/idő-pénz; az önszabályozás: stressztűrés, önellenőrzés, hibajavítás.'
  },
  {
    id:'w10_07', w:10, topic:'Preprofesszionális tevékenységek', type:'mc', diff:2,
    q:'Melyik példa egy preprofesszionális tevékenységre?',
    opts:[
      'Egyszerű étkészítés otthon',
      'Iskolán belüli rotációs „gyakornoki” feladatok (pl. könyvtári vagy büfés segédkezés)',
      'Pénzkezelési és költségvetés-tervezési gyakorlat',
      'Álláskeresési interjú szerepjáték'
    ],
    ans:1,
    exp:'Preprofesszionális tevékenységek: iskolai „munkaasztal” jellegű, szabályokhoz kötött feladatok; iskolán belüli rotációs gyakornoki feladatok (könyvtári/büfés segédkezés); munkahelyi látogatások és megfigyelések (job shadowing). A többi felsorolt életre felkészítő tevékenység.'
  },
  {
    id:'w10_08', w:10, topic:'Preprofesszionális tevékenységek', type:'fill', diff:2,
    q:'A különböző valós szakmai környezetekben végzett munkahelyi megfigyelés angol szakkifejezése: job ________.',
    ans:'shadowing',
    exp:'A job shadowing a munkahelyi látogatás és megfigyelés különböző valós szakmai környezetekben — egy preprofesszionális tevékenység.'
  },
  {
    id:'w10_09', w:10, topic:'Átmenet lépései', type:'order', diff:3,
    q:'Rendezze sorrendbe az iskolából a felnőtt életbe történő átmenet lépéseit!',
    items:[
      'Korai tranzíciós tervezés megkezdése (már a serdülőkor elején)',
      'A fiatal érdeklődésének, erősségeinek és preferenciáinak felmérése',
      'Célzott készségfejlesztés és valós tapasztalatszerzési lehetőségek biztosítása',
      'Koordinált tranzíciós terv kidolgozása (iskola, család, fogadó szolgáltatók)',
      'Fokozatos átadás és utókövetés az új környezetbe'
    ],
    exp:'Az öt lépés: 1. korai tranzíciós tervezés → 2. az érdeklődés/erősségek felmérése → 3. célzott készségfejlesztés és valós tapasztalatszerzés → 4. koordinált tranzíciós terv kidolgozása → 5. fokozatos átadás és utókövetés.'
  },
  {
    id:'w10_10', w:10, topic:'Átmenet lépései', type:'tf', diff:2,
    q:'A tranzíciós tervezést jellemzően már a serdülőkor elején el kell kezdeni, nem csupán az utolsó tanévben.',
    ans:true,
    exp:'Igaz. A korai tranzíciós tervezés megkezdése jellemzően már a serdülőkor elején indokolt, nem csupán az utolsó tanévben — ez a tudatos, több évre visszanyúló előkészítés része.'
  },
  {
    id:'w10_11', w:10, topic:'Együttműködés az átmenetben', type:'mc', diff:3,
    q:'A megoldás szerint miért nélkülözhetetlen a család, a munkaadó és a közösségi szolgáltatások együttműködése?',
    opts:[
      'Mert egyetlen szereplő is teljes körűen biztosíthatja a sikeres átmenetet',
      'Mert egyik szereplő sem képes önmagában biztosítani a sikeres átmenetet; csak koordinált együttműködésük teszi átvihetővé a készségeket a valós foglalkoztatásba',
      'Mert a család szerepe elhanyagolható',
      'Mert a munkaadó felesleges a folyamatban'
    ],
    ans:1,
    exp:'Egyik szereplő sem képes önmagában biztosítani a sikeres átmenetet: a család ismeri az igényeket és ad érzelmi hátteret, a munkaadó biztosítja a valós munkakörnyezetet, a közösségi szolgáltatások a szakmai-mentori támogatást — csak koordinált együttműködésük teszi átvihetővé az iskolában fejlesztett készségeket a fenntartható foglalkoztatásba.'
  },
  {
    id:'w10_12', w:10, topic:'Munkába állás tényezői', type:'mc', diff:3,
    q:'Melyik társadalmi tényező akadályozhatja jelentősen a munkába állást?',
    opts:[
      'A fejlett funkcionális készségek',
      'A munkaadók és munkatársak előítéletei és tájékozatlansága a fogyatékossággal kapcsolatban',
      'A munkahely akadálymentesítettsége',
      'A támogató szolgáltatások elérhetősége'
    ],
    ans:1,
    exp:'Társadalmi tényezőként a munkaadók és munkatársak attitűdje és tájékozottsága döntő: az előítéletek jelentős akadályozó tényezőt jelentenek, míg a felkészültség és nyitottság segíti a munkába állást.'
  },

  // ─── II. TÉTEL – A CES tanulók iskolai és pályaorientációja ────────────────
  {
    id:'w10_13', w:10, topic:'Pályaorientáció', type:'mc', diff:2,
    q:'Mit jelent a pályaorientáció (orientare școlară și profesională)?',
    opts:[
      'Kizárólag a munkahely fizikai kiválasztása',
      'Az a folyamat, amely segíti a személyt saját érdeklődésének, képességeinek és értékeinek megismerésében, és ezek összekapcsolásában a lehetséges utakkal',
      'A tanuló helyett hozott szakmai döntés',
      'A tananyag számonkérése'
    ],
    ans:1,
    exp:'A pályaorientáció az a folyamat, amely segíti a személyt saját érdeklődésének, képességeinek és értékeinek megismerésében, valamint ezek tudatos összekapcsolásában a lehetséges tanulási és szakmai utakkal.'
  },
  {
    id:'w10_14', w:10, topic:'Pályatanácsadás', type:'tf', diff:2,
    q:'A pályatanácsadás (consiliere vocațională) a pályaorientációs folyamat személyre szabott, bizalmi tanácsadói kapcsolatban megvalósuló, segítő formája.',
    ans:true,
    exp:'Igaz. A pályatanácsadás a pályaorientáció személyre szabott, bizalmi tanácsadói kapcsolatban megvalósuló, segítő formája, amely konkrét döntéshozatali helyzetekben nyújt célzott támogatást.'
  },
  {
    id:'w10_15', w:10, topic:'Pályaválasztási profil', type:'match', diff:2,
    q:'Párosítsa a pályaválasztási profil értékelendő területét a tartalmával!',
    pairs:[
      { L:'Érdeklődési kör', R:'A tanuló preferenciái, kedvelt tevékenységei' },
      { L:'Képességek és készségek', R:'Kognitív, motoros, kommunikációs, szociális erősségek' },
      { L:'Funkcionális önállósági szint', R:'Napi életvezetési, közlekedési, kommunikációs önállóság' },
      { L:'Támogatási szükségletek jellege', R:'A segítség típusa és intenzitása egy munkakörnyezetben' }
    ],
    exp:'A profil területei: érdeklődési kör, képességek/készségek, munkával kapcsolatos értékek, funkcionális önállósági szint és a támogatási szükségletek jellege.'
  },
  {
    id:'w10_16', w:10, topic:'Tanácsadási folyamat', type:'order', diff:3,
    q:'Rendezze sorrendbe a pályatanácsadási folyamat szakaszait!',
    items:[
      'Kapcsolatfelvétel és bizalmi viszony kialakítása',
      'Felmérés (érdeklődés, képességek, önismeret)',
      'Információnyújtás a reálisan elérhető utakról',
      'Közös célmeghatározás és a döntéshozatal támogatása',
      'Cselekvési terv kidolgozása és nyomon követés'
    ],
    exp:'Az öt szakasz: 1. kapcsolatfelvétel és bizalom → 2. felmérés → 3. információnyújtás az elérhető utakról → 4. közös célmeghatározás és döntéstámogatás → 5. cselekvési terv és nyomon követés.'
  },
  {
    id:'w10_17', w:10, topic:'Pályaorientációs módszerek', type:'mc', diff:2,
    q:'Melyik egy alkalmazható pályaorientációs módszer vagy eszköz?',
    opts:[
      'A tanuló véleményének figyelmen kívül hagyása',
      'Portfólió-alapú önismereti gyűjtemény (elvégzett feladatok, visszajelzések, önreflexiók dokumentálása)',
      'Kizárólag írásbeli, adaptáció nélküli tesztek',
      'A döntés teljes áthárítása a szülőre'
    ],
    ans:1,
    exp:'Alkalmazható módszerek: adaptált, strukturált érdeklődés- és képességfelmérő eszközök; munkatapasztalati/megfigyelési lehetőségek (job shadowing); portfólió-alapú önismereti gyűjtemény; csoportos foglalkozások és szerepjátékok; egyéni, személyközpontú tervezési (person-centered planning) ülések.'
  },
  {
    id:'w10_18', w:10, topic:'Intézményi partnerek', type:'match', diff:3,
    q:'Párosítsa a pályaorientáció intézményi/közösségi partnerét a feladatával!',
    pairs:[
      { L:'CJRAE/CMBRAE', R:'A pályaorientációs felmérés és tanácsadás szakmai koordinálása' },
      { L:'Munkaügyi/foglalkoztatási szolgáltató', R:'Álláskeresési támogatás, támogatott foglalkoztatási programok' },
      { L:'Szakképző és felnőttképzési szolgáltatók', R:'Konkrét szakmai képzési utak biztosítása' },
      { L:'Civil szervezetek, közösségi szolgáltatások', R:'Mentorálás, szociális készségfejlesztés, utókövetés' }
    ],
    exp:'A CJRAE/CMBRAE koordinálja a felmérést-tanácsadást; a munkaügyi szolgáltató álláskeresést és támogatott foglalkoztatást közvetít; a szakképzők képzési utakat adnak; a civil/közösségi szolgáltatások kiegészítő mentori-szociális támogatást nyújtanak.'
  },
  {
    id:'w10_19', w:10, topic:'Önrendelkezés', type:'mc', diff:3,
    q:'Miért fontos az önrendelkezés (autodeterminare) a pályaorientációban?',
    opts:[
      'Mert a mások által hozott döntések növelik a belső elköteleződést',
      'Mert a saját élet feletti döntéshozatal a motiváció, az elköteleződés és az életminőség egyik kulcstényezője',
      'Mert kizárja a támogatás lehetőségét',
      'Mert csökkenti a fiatal részvételét'
    ],
    ans:1,
    exp:'Az önrendelkezés (a saját élet feletti döntéshozatal képessége és lehetősége) a motiváció, az elköteleződés és az életminőség egyik kulcstényezője; ha a fiatal helyett mások döntenek, csökken a döntés iránti belső elköteleződés és a megvalósítás melletti kitartás.'
  },
  {
    id:'w10_20', w:10, topic:'Támogatott döntéshozatal', type:'tf', diff:3,
    q:'A támogatott döntéshozatal nem helyettesítő, hanem segített döntéshozatalt jelent, amelyben a fiatal saját preferenciái állnak a középpontban.',
    ans:true,
    exp:'Igaz. A támogatott döntéshozatal nem helyettesítő, hanem segített döntéshozatal: jelentős kognitív vagy kommunikációs korlátozottság esetén is a fiatal saját preferenciái állnak a döntés középpontjában, megfelelően adaptált információ és fokozatos támogatás mellett.'
  },
  {
    id:'w10_21', w:10, topic:'Pályaorientáció adaptációja', type:'mc', diff:2,
    q:'Hogyan adaptálható a „Szakmák felfedezése” foglalkozás mozgáskorlátozott tanuló számára?',
    opts:[
      'A tanuló kizárása a foglalkozásból',
      'A fizikai akadálymentesség szempontjából releváns szakmák bemutatása és adaptált eszközök kipróbálása, hangsúlyozva, hogy megfelelő adaptációval a legtöbb terület nyitva áll',
      'Kizárólag elméleti, absztrakt bemutatás',
      'A szakmák körének indoklás nélküli szűkítése'
    ],
    ans:1,
    exp:'Mozgáskorlátozott tanulónál a fizikai akadálymentesség szempontjából releváns szakmák és munkakörnyezetek bemutatása, adaptált eszközök kipróbálása ajánlott, kiemelve, hogy a mozgáskorlátozottság megfelelő adaptációval a legtöbb szakmai terület előtt nem jelent kizáró okot.'
  },

  // ─── III. TÉTEL – Munkára és önálló életre felkészítő modul ────────────────
  {
    id:'w10_22', w:10, topic:'Kompetencia és célok', type:'tf', diff:2,
    q:'A mérhető tanulási cél megfogalmazása tartalmazhat konkrét teljesítménykritériumot (pl. „legalább 80%-os pontossággal”).',
    ans:true,
    exp:'Igaz. Mérhető tanulási cél pl.: a tanuló a modul végére önállóan, vizuális vagy szóbeli instrukció alapján el tud végezni egy háromlépéses munkafeladatot legalább 80%-os pontossággal — a mérhetőséget a konkrét kritérium biztosítja.'
  },
  {
    id:'w10_23', w:10, topic:'Modul szerkezete', type:'order', diff:3,
    q:'Rendezze sorrendbe a munkára felkészítő modul szerkezeti elemeit!',
    items:[
      'Ráhangolódás/bevezetés (a téma és cél bemutatása)',
      'Alapkészség-felidézés (korábbi ismeretek átismétlése)',
      'Új tartalom bemutatása/modellezés',
      'Vezetett gyakorlás (csökkenő segítségnyújtással)',
      'Önálló, differenciált gyakorlás',
      'Zárás, reflexió és értékelés'
    ],
    exp:'A hat elem: 1. ráhangolódás → 2. alapkészség-felidézés → 3. új tartalom bemutatása/modellezés → 4. vezetett gyakorlás → 5. önálló, differenciált gyakorlás → 6. zárás, reflexió és értékelés.'
  },
  {
    id:'w10_24', w:10, topic:'Modul szerkezete', type:'mc', diff:2,
    q:'Mi jellemzi a vezetett gyakorlás szakaszát?',
    opts:[
      'A tanulók teljesen önállóan, segítség nélkül dolgoznak',
      'A tanulók támogatással, fokozatosan csökkenő segítségnyújtás mellett gyakorolják a feladatot',
      'A pedagógus csak elméletet ad elő',
      'A feladat elmarad'
    ],
    ans:1,
    exp:'A vezetett gyakorlás során a tanulók támogatással, fokozatosan csökkenő segítségnyújtás mellett gyakorolják a feladatot; ezt követi az önálló, differenciált gyakorlás a saját támogatási szintnek megfelelő feladatváltozattal.'
  },
  {
    id:'w10_25', w:10, topic:'Értékelés', type:'mc', diff:2,
    q:'Melyik szempont tartozik a teljesítményrubrikához vagy portfólióértékeléshez?',
    opts:[
      'A tanuló testsúlya',
      'Az önállóság mértéke (mennyi és milyen típusú segítségre volt szükség)',
      'A tanterem mérete',
      'A pedagógus szolgálati ideje'
    ],
    ans:1,
    exp:'Az öt szempontú rubrika: feladatmegértés és instrukciókövetés, pontosság/minőség, az önállóság mértéke, a munkahelyi és társas szabályok betartása, valamint a kommunikáció és segítségkérés megfelelősége.'
  },
  {
    id:'w10_26', w:10, topic:'Munkahelyi szimuláció', type:'mc', diff:2,
    q:'Egy „csomagolóüzemi” szimulációnál mi tartozik a biztonsági szempontok közé?',
    opts:[
      'A köszönés és bemutatkozás gyakorlása',
      'A megfelelő testtartás és eszközhasználat betanítása, a vészhelyzeti jelzés/segítségkérés ismerete',
      'A munkaidő és szünet rendjének betartása',
      'A kollégákkal való udvarias kommunikáció'
    ],
    ans:1,
    exp:'A biztonsági szempontok: megfelelő testtartás és eszközhasználat, a munkaeszközök biztonságos kezelése, a vészhelyzeti jelzés/segítségkérés módjának ismerete. A köszönés, munkaidő-betartás és udvarias kommunikáció a társas szabályokhoz tartozik.'
  },
  {
    id:'w10_27', w:10, topic:'Munkahelyi szimuláció', type:'tf', diff:2,
    q:'A munkahelyi szimuláció társas szabályai közé tartozik a köszönés és bemutatkozás gyakorlása, valamint a munkaidő és szünet rendjének betartása.',
    ans:true,
    exp:'Igaz. A társas szabályok: köszönés és bemutatkozás gyakorlása, a munkaidő és a szünet rendjének betartása, valamint a kollégákkal való együttműködő, udvarias kommunikáció.'
  },
  {
    id:'w10_28', w:10, topic:'Reflexió, transzfer, utókövetés', type:'mc', diff:3,
    q:'Mit jelent a transzfer a munkára felkészítő modul kontextusában?',
    opts:[
      'A tanuló áthelyezése másik iskolába',
      'A megszerzett készségek tudatos gyakoroltatása más helyzetekben és helyszíneken is, hogy a tanulás ne maradjon egyetlen kontextushoz kötött',
      'A modul lezárása értékelés nélkül',
      'A pedagógus áthelyezése'
    ],
    ans:1,
    exp:'A transzfer a megszerzett készségek tudatos gyakoroltatása más helyzetekben és helyszíneken is (pl. otthon, valós munkahelyi látogatás során), hogy a tanulás ne maradjon egyetlen kontextushoz kötött.'
  },
  {
    id:'w10_29', w:10, topic:'Reflexió, transzfer, utókövetés', type:'fill', diff:2,
    q:'A modul lezárása után periodikus, dokumentált visszacsatolás arról, hogy a készségek fennmaradtak-e: ez a program ________ (a folyamatos nyomon követés).',
    ans:'utókövetése',
    exp:'Az utókövetés a modul lezárása után periodikus, dokumentált visszacsatolás arról, hogy a készségek fennmaradtak-e és alkalmazásra kerülnek-e, szükség esetén megerősítő vagy ismétlő foglalkozásokkal.'
  },
  {
    id:'w10_30', w:10, topic:'Differenciálás', type:'match', diff:3,
    q:'Párosítsa a támogatási szintet a hozzá illő differenciált feladattal!',
    pairs:[
      { L:'Magas támogatási szükséglet', R:'Kéz a kézben vezetett, leegyszerűsített, kevés lépéses feladat' },
      { L:'Közepes támogatási szükséglet', R:'Vizuális lépéssor (képes kártyák) alapján, eseti szóbeli megerősítéssel' },
      { L:'Alacsony támogatási szükséglet', R:'Írásos/szóbeli instrukció alapján önállóan, nagyobb komplexitással' },
      { L:'Differenciálás célja', R:'A feladat a tanuló támogatási szintjéhez igazítása' }
    ],
    exp:'Magas szükséglet: kéz a kézben, leegyszerűsített feladat; közepes: vizuális lépéssor eseti megerősítéssel; alacsony: önálló, nagyobb komplexitású feladat saját döntéssel — mindez a támogatási szinthez igazított differenciálás.'
  },
  {
    id:'w10_31', w:10, topic:'Differenciálás', type:'tf', diff:2,
    q:'Alacsony támogatási szükségletű tanulónál a feladat lehet nagyobb komplexitású, amelyben a tanuló önállóan dönthet egyes részletekről (pl. a végrehajtás sorrendjéről).',
    ans:true,
    exp:'Igaz. Az alacsony támogatási szükségletű tanuló írásos vagy szóbeli instrukció alapján önállóan végez nagyobb komplexitású feladatot (pl. csomag összeállítása és minőségellenőrzése), amelyben egyes részletekről (pl. a sorrendről) önállóan dönthet.'
  },
  {
    id:'w10_32', w:10, topic:'Kompetencia és célok', type:'short', diff:2,
    q:'Nevezze meg röviden, milyen módon jelezheti a tanuló a segítségkérést egy munkafeladat közben (a mérhető cél szerint)!',
    keywords:['gesztus'],
    exp:'A mérhető cél szerint a tanuló megfelelő módon — szóban, gesztussal vagy AAC-eszközzel — jelzi, ha segítségre van szüksége a feladat végrehajtása közben.'
  },
  {
    id:'w10_33', w:10, topic:'Életre felkészítő tevékenységek', type:'mc', diff:2,
    q:'Melyik példa egy életre felkészítő (nem preprofesszionális) tevékenységre?',
    opts:[
      'Iskolán belüli rotációs gyakornoki feladat',
      'Önálló életvezetési készségek gyakorlása (bevásárlás, egyszerű étkészítés, közlekedés megtervezése)',
      'Iskolai „munkaasztal” jellegű összeszerelés',
      'Munkahelyi látogatás (job shadowing)'
    ],
    ans:1,
    exp:'Életre felkészítő tevékenységek: önálló életvezetési készségek gyakorlása (bevásárlás, étkészítés, közlekedés), pénzkezelési és költségvetés-tervezési gyakorlatok, valamint társas-kommunikációs szimulációk (pl. álláskeresési interjú).'
  },
  {
    id:'w10_34', w:10, topic:'Önrendelkezés', type:'fill', diff:2,
    q:'A saját élet feletti döntéshozatal képessége és lehetősége — a román szakszóval autodeterminare — magyarul: ________.',
    ans:'önrendelkezés',
    exp:'Az önrendelkezés (autodeterminare) a saját élet feletti döntéshozatal képessége és lehetősége, amely a motiváció, az elköteleződés és az életminőség kulcstényezője.'
  },
  {
    id:'w10_35', w:10, topic:'Pályaválasztási profil', type:'short', diff:2,
    q:'Nevezze meg röviden a pályaválasztási profil azon területét, amely azt méri fel, mi fontos a tanuló számára egy jövőbeli munkakörnyezetben (pl. rutinszerűség, társas kontaktus)!',
    keywords:['érték'],
    exp:'A munkával kapcsolatos értékek és motivációk területe azt méri fel, mi fontos a tanuló számára egy jövőbeli munkakörnyezetben (pl. rutinszerűség, társas kontaktus, az önállóság mértéke).'
  }
];
