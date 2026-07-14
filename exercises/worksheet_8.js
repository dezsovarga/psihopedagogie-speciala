// Worksheet 8 exercises — Motoros/neuromotoros/halmozott fogyatékosság · Korai intervenció · Segítő technológiák
// Source: gyakorlas_8_megoldasok_cl.docx
const EXERCISES_W8 = [
  // ─── I. TÉTEL – Motoros, neuromotoros és halmozott fogyatékosság ───────────
  {
    id:'w8_01', w:8, topic:'Motoros fogyatékosság', type:'mc', diff:2,
    q:'Mi jellemzi a motoros fogyatékosságot (deficiență motorie) a definíció szerint?',
    opts:[
      'Kizárólag az értelmi képességek tartós károsodása',
      'A mozgásszervrendszer vagy az idegrendszer mozgásszabályozó funkcióinak károsodása, amely korlátozza a helyváltoztatást és a testtartást',
      'Átmeneti, néhány hetes mozgáskorlátozottság betegség idején',
      'A látás- és hallásfunkciók együttes kiesése'
    ],
    ans:1,
    exp:'A motoros fogyatékosság olyan tartós állapot, amely a mozgásszervrendszer (csontok, izmok, ízületek) vagy az idegrendszer mozgásszabályozó funkcióinak károsodásából ered, és jelentősen korlátozza a helyváltoztatást, a testtartás fenntartását és/vagy a finommotoros tevékenységeket.'
  },
  {
    id:'w8_02', w:8, topic:'Motoros fogyatékosság', type:'tf', diff:1,
    q:'A motoros fogyatékosság lehet veleszületett (pl. végtaghiány) vagy szerzett (baleset, betegség következménye).',
    ans:true,
    exp:'Igaz. A definíció szerint a motoros fogyatékosság lehet veleszületett (pl. végtaghiány, gerincvelő-dysraphia) vagy szerzett (baleset, betegség következménye).'
  },
  {
    id:'w8_03', w:8, topic:'Neuromotoros zavar', type:'mc', diff:2,
    q:'Melyik állítás igaz a neuromotoros zavarra?',
    opts:[
      'Kizárólag az izmok szerkezeti hibájából ered, az idegrendszer ép',
      'A központi vagy perifériás idegrendszer károsodásából ered, és sérül az izomtónus, a koordináció, az egyensúly vagy a mozgástervezés',
      'Mindig progresszív és néhány hónap alatt teljesen gyógyul',
      'Csak a finommotoros készségeket érinti, a nagymozgásokat soha'
    ],
    ans:1,
    exp:'A neuromotoros zavar a központi vagy perifériás idegrendszer károsodásából eredő mozgászavar, amelynél az izomtónus szabályozása, a mozgáskoordináció, az egyensúly vagy a mozgástervezés (praxis) sérül (pl. cerebrális parézis, izomdisztrófia).'
  },
  {
    id:'w8_04', w:8, topic:'Cerebrális parézis', type:'mc', diff:2,
    q:'Mi jellemzi a cerebrális parézist (CP)?',
    opts:[
      'Progresszív, folyamatosan romló izombetegség felnőttkori kezdettel',
      'Nem progresszív, de a fejlődés során változó megjelenésű mozgás- és testtartászavar-együttes a fejlődő agy károsodásából',
      'Kizárólag a gerincvelő sérüléséből eredő bénulás',
      'Átmeneti izomgyengeség, amely vitaminpótlással megszűnik'
    ],
    ans:1,
    exp:'A cerebrális parézis nem progresszív, de a fejlődés során változó megjelenésű mozgás- és testtartászavar-együttes, amely a fejlődő agy (magzati vagy csecsemőkori) károsodásából ered; gyakran társul hozzá érzékelési, kognitív, kommunikációs, viselkedési zavar és epilepszia.'
  },
  {
    id:'w8_05', w:8, topic:'Halmozott fogyatékosság', type:'mc', diff:3,
    q:'Miért nem értelmezhető a halmozott fogyatékosság az egyes fogyatékosságok puszta összegeként?',
    opts:[
      'Mert mindig csak egy terület a valóban érintett',
      'Mert a területek kölcsönösen felerősítik egymás hatását, így minőségileg új, komplex profil jön létre',
      'Mert a fogyatékosságok idővel automatikusan megszűnnek',
      'Mert a támogatási szükséglet mindig kisebb, mint az egyes területeké külön-külön'
    ],
    ans:1,
    exp:'A halmozott fogyatékosság két vagy több, minőségileg különböző fogyatékossági terület egyidejű fennállása, ahol a területek kölcsönösen felerősítik egymás hatását, ezért a támogatási szükséglet nem az egyes fogyatékosságok összegeként, hanem minőségileg új, komplex profilként értelmezendő.'
  },
  {
    id:'w8_06', w:8, topic:'Funkcionális mobilitás', type:'tf', diff:2,
    q:'A funkcionális mobilitás megítélésénél a hangsúly a tevékenységi szintű teljesítményen van, nem a mozgásminta „normalitásán”.',
    ans:true,
    exp:'Igaz. A funkcionális mobilitás az a gyakorlati képesség, amellyel a személy biztonságosan és hatékonyan változtat helyzetet és helyet — függetlenül attól, hogy ez önálló járással, segédeszközzel vagy kerekesszékkel valósul meg; a hangsúly a tevékenységi szintű teljesítményen van.'
  },
  {
    id:'w8_07', w:8, topic:'Etiológia és osztályozás', type:'match', diff:2,
    q:'Párosítsa az érintett terület kiterjedése szerinti típust a meghatározásával!',
    pairs:[
      { L:'Monoplégia', R:'Egy végtag érintett' },
      { L:'Hemiplégia', R:'A test egyik fele érintett' },
      { L:'Diplégia', R:'Elsősorban az alsó végtagok érintettek' },
      { L:'Quadriplégia/tetraplégia', R:'Mind a négy végtag érintett' }
    ],
    exp:'Az érintett terület kiterjedése szerint: monoplégia (egy végtag), hemiplégia (test egyik fele), diplégia (elsősorban az alsó végtagok), quadriplégia/tetraplégia (mind a négy végtag).'
  },
  {
    id:'w8_08', w:8, topic:'Etiológia és osztályozás', type:'match', diff:2,
    q:'Párosítsa az érintettség időpontját a jellemző példával!',
    pairs:[
      { L:'Prenatális', R:'Agyi malformáció, intrauterin fertőzés' },
      { L:'Perinatális', R:'Oxigénhiány szülés közben, koraszülöttség' },
      { L:'Posztnatális', R:'Agyhártyagyulladás, koponyatrauma' },
      { L:'Funkcionális súlyosság', R:'GMFCS I–V. szint szerinti besorolás' }
    ],
    exp:'Az érintettség időpontja szerint: prenatális (agyi malformáció, intrauterin fertőzés), perinatális (oxigénhiány, koraszülöttség), posztnatális (agyhártyagyulladás, koponyatrauma). A funkcionális súlyosságot a GMFCS I–V. skála írja le.'
  },
  {
    id:'w8_09', w:8, topic:'Etiológia és osztályozás', type:'mc', diff:2,
    q:'Melyik izomtónus-jellegű CP-típust jellemzik ingadozó, akaratlan mozgások?',
    opts:['Spasztikus','Dyskinetikus','Ataxiás','Hypotóniás'],
    ans:1,
    exp:'Az izomtónus jellege szerint: spasztikus (fokozott tónus), dyskinetikus (ingadozó, akaratlan mozgások), ataxiás (egyensúly- és koordinációzavar), hypotóniás és kevert típus.'
  },
  {
    id:'w8_10', w:8, topic:'Etiológia és osztályozás', type:'fill', diff:2,
    q:'A funkcionális súlyosság leírására szolgáló, a nagymozgásokat I–V. szinten osztályozó rendszer rövidítése: ________ (a nemzetközi rövidítést kérjük).',
    ans:'GMFCS',
    exp:'A GMFCS (Gross Motor Function Classification System) I–V. szintje az önálló járástól a teljes mobilitási segítségnyújtás szükségességéig terjedő skálán írja le a funkcionális súlyosságot.'
  },
  {
    id:'w8_11', w:8, topic:'Cerebrális parézis', type:'order', diff:2,
    q:'Rendezze a cerebrális parézis három fő típusát a leggyakoribbtól a legritkábban említett felé, a megoldás sorrendje szerint!',
    items:[
      'Spasztikus CP (fokozott izomtónus, „ollózó” mozgásminta)',
      'Dyskinetikus/atetoid CP (ingadozó tónus, akaratlan mozgások)',
      'Ataxiás CP (egyensúly- és koordinációzavar)'
    ],
    exp:'A megoldás a spasztikus CP-t nevezi meg a leggyakoribb típusként, ezt követi a dyskinetikus/atetoid, majd az ataxiás forma.'
  },
  {
    id:'w8_12', w:8, topic:'Cerebrális parézis', type:'mc', diff:3,
    q:'Milyen pedagógiai következménye van a dyskinetikus/atetoid CP-nek?',
    opts:[
      'Elegendő pusztán a hosszabb végrehajtási idő biztosítása, más adaptáció nem szükséges',
      'Augmentatív-alternatív kommunikációs (AAC) eszközök bevezetése és stabil, rögzített munkafelület indokolt lehet',
      'A tanuló számára minden vizuális segítséget meg kell vonni',
      'A testnevelés teljes mellőzése ajánlott'
    ],
    ans:1,
    exp:'A dyskinetikus/atetoid CP-nél (ingadozó tónus, akaratlan mozgások, gyakran érintett artikuláció) a kommunikáció támogatására AAC-eszközök bevezetése indokolt lehet, és stabil, rögzített munkafelület, testhelyzet szükséges, mert a mozgások kontrollálatlansága rontja a pontosságot.'
  },
  {
    id:'w8_13', w:8, topic:'Cerebrális parézis', type:'short', diff:2,
    q:'Nevezze meg röviden, milyen beszédzavar társulhat a CP-hez, amely nem az intellektuális, hanem az artikulációs-légzési-hangképzési rendszert érinti!',
    keywords:['dysarthria'],
    exp:'A CP-hez társuló beszédmotoros nehézség a dysarthria (súlyosabb formában anarthria), amely nem az intellektuális, hanem az artikulációs-légzési-hangképzési rendszert érinti.'
  },
  {
    id:'w8_14', w:8, topic:'Motoros fogyatékosság', type:'tf', diff:3,
    q:'A motoros korlátozottság miatti korlátozott manipulatív tapasztalatszerzés automatikusan azt jelenti, hogy a tanuló értelmi képességei is sérültek.',
    ans:false,
    exp:'Hamis. A korlátozott manipulatív tapasztalatszerzés másodlagosan lassíthatja egyes fogalmi struktúrák kialakulását, de ez nem jelenti automatikusan az értelmi képességek sérülését.'
  },
  {
    id:'w8_15', w:8, topic:'Pedagógiai adaptáció', type:'mc', diff:2,
    q:'Melyik példa a halmozott fogyatékosságra, amelynél az értékelési módszer megválasztása maga is a halmozottság következménye?',
    opts:[
      'Enyhe rövidlátás szemüveggel korrigálva',
      'Cerebrális parézis + súlyos beszédmotoros zavar, ahol beszéd alapú teszt torzított eredményt adna',
      'Átmeneti lábtörés gipsszel',
      'Egyszeri figyelemzavar fáradtság miatt'
    ],
    ans:1,
    exp:'Cerebrális parézis + súlyos beszédmotoros zavar esetén a kognitív képességek beszéd alapú felmérése torzított eredményt adna, ezért a diagnosztikának AAC-alapú vagy nonverbális eszközöket kell alkalmaznia — az értékelési módszer megválasztása maga is a halmozottság következménye.'
  },
  {
    id:'w8_16', w:8, topic:'Pedagógiai adaptáció', type:'mc', diff:2,
    q:'Melyik tartozik a kommunikációs adaptációk közé motoros fogyatékosságú tanulónál?',
    opts:[
      'Szélesebb közlekedési utak kialakítása a teremben',
      'Képalapú kommunikációs táblák vagy beszédgenerátor (AAC) alkalmazása korlátozott beszédprodukció esetén',
      'A padok magasságának állítása',
      'A munkaidő meghosszabbítása'
    ],
    ans:1,
    exp:'A kommunikációs adaptáció a képalapú kommunikációs táblák vagy beszédgenerátor (AAC) alkalmazása azoknál a tanulóknál, akiknél a beszédprodukció korlátozott, hogy a válaszadás formája ne torzítsa a tudásfelmérést. A tér- és padadaptáció környezeti, illetve hozzáférési adaptáció.'
  },

  // ─── II. TÉTEL – Korai intervenció, habilitáció-rehabilitáció ──────────────
  {
    id:'w8_17', w:8, topic:'Korai intervenció', type:'mc', diff:2,
    q:'Mely életkori sávra irányul jellemzően a korai intervenció (intervenție timpurie)?',
    opts:['0–6/7 éves kor','7–14 éves kor','14–18 éves kor','Kizárólag felnőttkor'],
    ans:0,
    exp:'A korai intervenció a fejlődési kockázatnak kitett vagy már azonosított eltéréssel élő kisgyermek (jellemzően 0–6/7 éves kor) és családja számára nyújtott koordinált, család- és gyermekközpontú szolgáltatások összessége.'
  },
  {
    id:'w8_18', w:8, topic:'Korai intervenció', type:'tf', diff:2,
    q:'A korai intervenció egyik célja a fejlődés legérzékenyebb, a plaszticitás szempontjából legkedvezőbb időszakának kihasználása és a másodlagos nehézségek megelőzése.',
    ans:true,
    exp:'Igaz. A korai intervenció célja, hogy a fejlődés legérzékenyebb (plaszticitás szempontjából legkedvezőbb) időszakában segítse a gyermek potenciáljának kibontakozását, megelőzze a másodlagos nehézségeket, és megerősítse a család kompetenciáit.'
  },
  {
    id:'w8_19', w:8, topic:'Családközpontú alapelvek', type:'mc', diff:2,
    q:'Mit jelent az erősségalapú megközelítés a korai intervencióban?',
    opts:[
      'Kizárólag a gyermek hiányosságaira és deficitjeire fókuszál',
      'A család és a gyermek meglévő erőforrásaira, kompetenciáira épít, nem csak a hiányosságokra',
      'A szülőt kizárja a döntésekből',
      'Egységes protokollt alkalmaz minden családnál'
    ],
    ans:1,
    exp:'Az erősségalapú megközelítés a család és a gyermek meglévő erőforrásaira, kompetenciáira épít, nem kizárólag a hiányosságokra fókuszál.'
  },
  {
    id:'w8_20', w:8, topic:'Családközpontú alapelvek', type:'tf', diff:2,
    q:'A családközpontú szemléletben a szülő passzív „kliens”, akinek nincs szerepe a fejlesztési döntésekben.',
    ans:false,
    exp:'Hamis. A család mint elsődleges partner alapelve szerint a szülő nem passzív kliens, hanem a fejlesztési döntések aktív résztvevője, hiszen ő ismeri legjobban a gyermeket, és ő biztosítja a mindennapi kontinuitást.'
  },
  {
    id:'w8_21', w:8, topic:'Értékelés a korai intervencióban', type:'match', diff:3,
    q:'Párosítsa az értékelési eljárást a lényegével a korai intervencióban!',
    pairs:[
      { L:'Szűrés (screening)', R:'Rövid, gyors, széles populáción alkalmazható jelzőeljárás' },
      { L:'Diagnosztikus értékelés', R:'Részletes, több szakterületet bevonó, a típus és fok megállapítása' },
      { L:'Fejlődésmonitorozás', R:'Folyamatos nyomon követés, a célok rendszeres felülvizsgálata' },
      { L:'Beutalás (referire)', R:'A szülő/pedagógus jelzi az aggodalmat, kezdeti szűrés' }
    ],
    exp:'A szűrés gyors jelzőeljárás; a diagnosztikus értékelés részletes, multidiszciplináris, a típust és fokot állapítja meg; a fejlődésmonitorozás folyamatos nyomon követés; a beutalás a folyamat elindítása.'
  },
  {
    id:'w8_22', w:8, topic:'Értékelés a korai intervencióban', type:'tf', diff:2,
    q:'A szűrés (screening) magas érzékenységű, de alacsony specificitású eszköz, amelynek célja nem a diagnózis, hanem a részletesebb kivizsgálás szükségességének jelzése.',
    ans:true,
    exp:'Igaz. A szűrés rövid, gyors, széles populáción alkalmazható eljárás; célja nem a diagnózis felállítása, hanem annak jelzése, hogy szükséges-e részletesebb kivizsgálás — alacsony specificitású, de magas érzékenységű.'
  },
  {
    id:'w8_23', w:8, topic:'Team-munka', type:'mc', diff:3,
    q:'Mi különbözteti meg a transzdiszciplináris team-modellt a multidiszciplináris modelltől?',
    opts:[
      'A transzdiszciplináris modellben a szakemberek teljesen elkülönülten dolgoznak',
      'A transzdiszciplináris modellben egy „kulcsszakember” (key worker) hangolja össze és közvetíti a szakterületek javaslatait a család felé',
      'A transzdiszciplináris modell kizárja a családot',
      'A két modell teljesen azonos'
    ],
    ans:1,
    exp:'A multidiszciplináris team-ben minden szakember viszonylag elkülönülten végzi az értékelést és beavatkozást; a transzdiszciplináris modell integráltabb: egy kulcsszakember (key worker) hangolja össze és közvetíti a szakterületek javaslatait a család felé, csökkentve a család terhelését és a szolgáltatások töredezettségét.'
  },
  {
    id:'w8_24', w:8, topic:'Korai intervenciós folyamat', type:'order', diff:3,
    q:'Rendezze sorrendbe a korai intervenciós program lépéseit a felméréstől az újraértékelésig!',
    items:[
      'Beutalás/jelzés (referire) és kezdeti szűrés',
      'Komplex felmérés a multi-/transzdiszciplináris team által',
      'Célmeghatározás a családdal közösen',
      'A beavatkozási/szolgáltatási terv kidolgozása (PSI/PIP)',
      'A terv megvalósítása a mindennapi rutinokba ágyazva',
      'Rendszeres újraértékelés és a terv korrekciója'
    ],
    exp:'A hat lépés: 1. beutalás/jelzés → 2. komplex felmérés → 3. közös célmeghatározás → 4. a terv kidolgozása (PSI/PIP) → 5. megvalósítás a rutinokba ágyazva → 6. rendszeres újraértékelés és korrekció.'
  },
  {
    id:'w8_25', w:8, topic:'Korai intervenciós folyamat', type:'mc', diff:2,
    q:'Miért különösen fontos a generalizáció támogatása a korai intervencióban?',
    opts:[
      'Mert a fejlődési eltéréssel élő gyermeknél a megtanult készség spontán átvitele gyakran nem működik automatikusan',
      'Mert a készségeket csak egyetlen helyszínen kell gyakorolni',
      'Mert a generalizáció felesleges, ha a diagnózis megvan',
      'Mert kizárólag az iskolai környezet számít'
    ],
    ans:0,
    exp:'A generalizáció (a megtanult készség átvitele más személyekre, helyszínekre, helyzetekre) kritikus, mert a fejlődésében veszélyeztetett gyermeknél a spontán átvitel gyakran nem működik automatikusan — ezért tudatosan több kontextusban (otthon, óvoda, közösség) kell gyakoroltatni a készségeket.'
  },
  {
    id:'w8_26', w:8, topic:'Korai intervenciós folyamat', type:'fill', diff:2,
    q:'Az egyik intézményből a másikba (pl. korai intervencióból óvodába) való áttérés különösen sérülékeny pont; ennek tudatos előkészítése az átmenet-________ (transition planning).',
    ans:'tervezés',
    exp:'Az átmenet-tervezés (transition planning) — dokumentáció átadása, közös látogatások, fokozatos beillesztés, a fogadó intézmény felkészítése — nélkülözhetetlen, hogy a korábban elért fejlődési eredmények ne vesszenek el.'
  },

  // ─── III. TÉTEL – Segítő és hozzáférési technológiák ──────────────────────
  {
    id:'w8_27', w:8, topic:'Segítő technológia', type:'mc', diff:2,
    q:'Mit jelent a segítő technológia (tehnologie asistivă) fogalma?',
    opts:[
      'Kizárólag komplex, drága elektronikus rendszerek',
      'Minden olyan eszköz vagy rendszer — az alacsony technológiájútól a komplexig —, amely a funkcionális képességeket növeli, fenntartja vagy javítja',
      'Csak a kommunikációt segítő szoftverek',
      'Kizárólag orvosi gyógyászati segédeszközök'
    ],
    ans:1,
    exp:'A segítő technológia minden olyan eszköz, berendezés vagy rendszer — a legegyszerűbb, alacsony technológiájú megoldástól (pl. vastagított fogantyú) a komplex elektronikus rendszerekig —, amely a fogyatékossággal élő személy funkcionális képességeit növeli, fenntartja vagy javítja.'
  },
  {
    id:'w8_28', w:8, topic:'Segítő technológia', type:'mc', diff:2,
    q:'Mi az augmentatív és alternatív kommunikáció (AAC) lényege?',
    opts:[
      'A beszéd teljes tiltása minden helyzetben',
      'A beszédet kiegészítő vagy helyettesítő kommunikációs formák és eszközök összessége a kifejezőkészség biztosítására',
      'Kizárólag a hallássérültek jelnyelve',
      'A számítógépes programozás oktatása'
    ],
    ans:1,
    exp:'Az AAC a beszédet kiegészítő (augmentatív) vagy helyettesítő (alternatív) kommunikációs formák és eszközök összessége — a gesztusoktól és képkártyáktól a beszédgeneráló szoftverekig —, amelyek célja a kifejezőkészség biztosítása korlátozott beszédprodukció esetén.'
  },
  {
    id:'w8_29', w:8, topic:'Segítő technológia', type:'match', diff:3,
    q:'Párosítsa a hozzáférési/technológiai fogalmat a meghatározásával!',
    pairs:[
      { L:'Alternatív hozzáférés', R:'Kapcsoló, szemkövetés, fejmozgás-vezérlés a hagyományos bevitel helyett' },
      { L:'Pozicionálás', R:'A test funkcionálisan optimális, biztonságos testtartásának biztosítása' },
      { L:'Környezetvezérlés', R:'Környezeti elemek (fény, ajtó) önálló, adaptált működtetése' },
      { L:'AAC', R:'A beszédet kiegészítő vagy helyettesítő kommunikáció' }
    ],
    exp:'Alternatív hozzáférés = kapcsoló/szemkövetés/fejmozgás-vezérlés; pozicionálás = optimális testtartás biztosítása; környezetvezérlés = a környezeti elemek adaptált működtetése; AAC = a beszéd kiegészítése/helyettesítése.'
  },
  {
    id:'w8_30', w:8, topic:'Pozicionálás', type:'tf', diff:2,
    q:'A pozicionálás (megfelelő testtartás biztosítása) alapfeltétele a kéz-, fej- és szemkontroll hatékony használatának.',
    ans:true,
    exp:'Igaz. A pozicionálás a test funkcionálisan optimális és biztonságos testtartásának biztosítása speciális eszközökkel (adaptált szék, állító keret, ékpárna), amely alapfeltétele a kéz-, fej- és szemkontroll hatékony használatának.'
  },
  {
    id:'w8_31', w:8, topic:'Technológiaválasztás', type:'mc', diff:3,
    q:'Melyik technológia illik a súlyos quadriplégiás CP-ben élő tanulóhoz, akinél csak egy megbízható, szándékos mozgás (pl. fejbiccentés) áll rendelkezésre?',
    opts:[
      'Szemkövető (eye-gaze) rendszer',
      'Kapcsolóval (switch) vezérelt kommunikációs eszköz pásztázó (scanning) technikával',
      'Hagyományos billentyűzet és egér',
      'Kézírásos feladatlap adaptáció nélkül'
    ],
    ans:1,
    exp:'Ahol csak egy megbízható, szándékos mozgás (pl. fejbiccentés) áll rendelkezésre, a kapcsolóval (switch) vezérelt kommunikációs eszköz a megfelelő megoldás: igen/nem válaszok és egyszerű választási helyzetek önálló jelzése pásztázó (scanning) technikával.'
  },
  {
    id:'w8_32', w:8, topic:'Technológiaválasztás', type:'mc', diff:2,
    q:'Melyik NEM tartozik a segítő technológia kiválasztásának fő szempontjai közé?',
    opts:[
      'A tanuló motoros és érzékelési profilja',
      'A kognitív és nyelvi szint',
      'A tanuló kedvenc színe és hobbija önmagában',
      'A használati környezet jellemzői és a fenntarthatóság'
    ],
    ans:2,
    exp:'A kiválasztás személy-, feladat- és környezetközpontú szempontjai: a motoros/érzékelési profil, a kognitív-nyelvi szint, a feladat követelményei, a használati környezet és a fenntarthatóság (támogatási kapacitás, költség, motiváció). A kedvenc szín önmagában nem meghatározó szempont.'
  },
  {
    id:'w8_33', w:8, topic:'Technológia előnyei és korlátai', type:'tf', diff:2,
    q:'A segítő technológia használatának egyik korlátja, hogy meghibásodás vagy finanszírozási nehézség esetén a hozzáférés hirtelen megszakadhat, ezért alacsony technológiájú tartalék is szükséges.',
    ans:true,
    exp:'Igaz. Technikai meghibásodás, karbantartási vagy finanszírozási nehézség esetén a tanuló kommunikációs/tanulási hozzáférése hirtelen megszakadhat, ezért mindig szükséges alacsony technológiájú „tartalék” megoldás (pl. papíralapú kommunikációs tábla) is.'
  },
  {
    id:'w8_34', w:8, topic:'Technológia előnyei és korlátai', type:'short', diff:2,
    q:'Nevezzen meg egy előnyt, amiért a segítő technológia pontosabbá teszi a tudásfelmérést!',
    keywords:['motoros'],
    exp:'A segítő technológia lehetővé teszi a valós tudás és kompetenciák pontosabb felmérését, mivel a válaszadás motoros korlátja többé nem torzítja az értékelést.'
  },
  {
    id:'w8_35', w:8, topic:'Pedagógiai adaptáció', type:'mc', diff:3,
    q:'Ugyanazon „levélgyűjtés és csoportosítás” feladatnál mi a különbség a motoros és a halmozott (motoros + intellektuális) fogyatékosságú tanuló adaptációja között?',
    opts:[
      'Nincs különbség, mindkettőnél csak a hozzáférést kell adaptálni',
      'A motoros tanulónál a hozzáférést/manipulációt adaptáljuk (a kognitív tartalom marad), a halmozott esetben a feladat kognitív komplexitását is (kevesebb, egyszerűbb kategória)',
      'A halmozott esetben egyáltalán nincs szükség adaptációra',
      'Mindkét esetben csökkenteni kell a kognitív tartalmat'
    ],
    ans:1,
    exp:'Motoros fogyatékosságnál az adaptáció a hozzáférés és manipuláció szintjén történik (pl. rögzített tálcák, digitális alternatíva), miközben a kognitív tartalom változatlan; halmozott (motoros + intellektuális) esetben az adaptáció a feladat kognitív komplexitására is kiterjed (kevesebb, jól megkülönböztethető kategória, konkrét tárgyi tevékenység, vezetett segítség).'
  }
];
