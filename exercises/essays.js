// Essay-type questions — require detailed, structured answers
// Evaluated by Claude API; shown only when API key is configured
const EXERCISES_ESSAYS = [

// ══════════════════════════════════════════════
// FOGALOMMEGHATÁROZÁSOK – 1. VÁLTOZAT (I. FELADAT)
// ══════════════════════════════════════════════
{
  id:'def_w1_01', w:1, topic:'Fogalommeghatározás', type:'define', diff:1, points:2,
  q:'Határozza meg a szűrés (screening) fogalmát!',
  modelAnswer:'Szűrés (screening): Elsődleges, gyors eljárás, amelynek célja azon gyermekek azonosítása, akiknél fejlődési eltérés, lemaradás vagy fogyatékosság gyanúja merül fel, és mélyebb vizsgálatra van szükség. Nem diagnosztikus jellegű, csupán jelzőrendszerként működik.',
  exp:'A szűrés nem diagnosztikus – célja a mélyebb vizsgálatra szoruló gyermekek kiszűrése, nem a diagnózis felállítása.'
},
{
  id:'def_w1_02', w:1, topic:'Fogalommeghatározás', type:'define', diff:1, points:2,
  q:'Mit jelent a pszichopedagógiai értékelés fogalma?',
  modelAnswer:'Pszichopedagógiai értékelés: Komplex, multidiszciplináris folyamat, amelynek során a tanuló kognitív, érzelmi, szociális, kommunikációs és motorikus fejlődését vizsgálják standardizált és nem standardizált eszközök segítségével, a fejlesztési szükségletek meghatározása céljából.',
  exp:'Kulcselemek: komplex, multidiszciplináris folyamat, amely a fejlesztési szükségletek meghatározására irányul.'
},
{
  id:'def_w1_03', w:1, topic:'Fogalommeghatározás', type:'define', diff:1, points:2,
  q:'Határozza meg a diagnózis fogalmát a pszichopedagógiában!',
  modelAnswer:'Diagnózis: A pszichopedagógiai értékelés alapján felállított szakmai megállapítás, amely megnevezi a fogyatékosság vagy sajátos nevelési igény típusát és súlyosságát, és alapul szolgál az intervencióhoz.',
  exp:'A diagnózis az értékelés eredménye – megnevezi a CES típusát és súlyosságát, és az intervenció alapja.'
},
{
  id:'def_w1_04', w:1, topic:'Fogalommeghatározás', type:'define', diff:2, points:2,
  q:'Mit jelent a formatív pszichodiagnosztika?',
  modelAnswer:'Formatív pszichodiagnosztika: Olyan értékelési megközelítés, amely nem lezárást, hanem fejlődési folyamatot vizsgál – a tanuló meglévő képességeire, fejleszthető területeire és tanulási potenciáljára fókuszál, dinamikus és folyamatos jellegű.',
  exp:'A formatív pszichodiagnosztika dinamikus, folyamatos értékelés – nem lezárást, hanem a fejlesztési potenciált vizsgálja.'
},
{
  id:'def_w1_05', w:1, topic:'Fogalommeghatározás', type:'define', diff:2, points:2,
  q:'Mit ért funkcionális profil alatt a pszichopedagógiában?',
  modelAnswer:'Funkcionális profil: A tanuló erősségeinek és nehézségeinek átfogó leírása különböző fejlődési területeken (kognitív, kommunikációs, szociális, motorikus stb.), amely az egyéni intervenciós terv alapját képezi.',
  exp:'A funkcionális profil az erősségeket és nehézségeket foglalja össze fejlődési területenként – a PIP alapja.'
},
{
  id:'def_w1_06', w:1, topic:'Értékelés alapelvei', type:'define', diff:1, points:2,
  q:'Mit jelent a komplexitás elve a pszichopedagógiai értékelésben?',
  modelAnswer:'Komplexitás elve: Az értékelés a tanuló személyiségének valamennyi területét felöleli, nem csupán egy-egy részterületre koncentrál.',
  exp:'A komplexitás elve szerint az értékelés nem szűkül le egy területre – a tanuló teljes személyiségét vizsgálja.'
},
{
  id:'def_w1_07', w:1, topic:'Értékelés alapelvei', type:'define', diff:1, points:2,
  q:'Mit jelent a dinamikusság elve a pszichopedagógiai értékelésben?',
  modelAnswer:'Dinamikusság elve: Az értékelés nem egyszeri, statikus aktus, hanem folyamatos, a fejlődést nyomon követő folyamat.',
  exp:'A dinamikusság elve szerint az értékelés nem egyszeri – folyamatosan követi a tanuló fejlődését.'
},
{
  id:'def_w1_08', w:1, topic:'Értékelés alapelvei', type:'define', diff:2, points:2,
  q:'Mit jelent a multidiszciplinaritás elve a pszichopedagógiai értékelésben?',
  modelAnswer:'Multidiszciplinaritás elve: Az értékelés különböző szakemberek (pszichológus, logopédus, gyógypedagógus, orvos, szociális munkás) együttműködésével valósul meg.',
  exp:'A multidiszciplinaritás elvének lényege a különböző szakemberek (pszichológus, logopédus, gyógypedagógus, orvos, szociális munkás) együttműködése.'
},
{
  id:'def_w1_09', w:1, topic:'Fejlődési területek', type:'define', diff:2, points:2,
  q:'Határozza meg az adaptív viselkedés fogalmát, mint a CES tanulók értékelésének egyik fejlődési területét!',
  modelAnswer:'Adaptív viselkedés: Önkiszolgálás, mindennapi életvitel, iskolai alkalmazkodás, önállóság mértéke – azok a funkcionális készségek, amelyek szükségesek a mindennapi élet önálló viteléhez és a környezethez való alkalmazkodáshoz.',
  exp:'Az adaptív viselkedés az önkiszolgálást, mindennapi életvitelt és az önállóság mértékét foglalja magában.'
},
{
  id:'def_w1_10', w:1, topic:'Fejlődési területek', type:'define', diff:2, points:2,
  q:'Mit foglal magában a pszichomotoros fejlődés vizsgálata a CES tanulók értékelésében?',
  modelAnswer:'Pszichomotoros fejlődés: Nagy- és finommotoros készségek, térbeli tájékozódás, testséma vizsgálata – a mozgásos fejlődés és a mozgással összefüggő észlelési funkciók értékelése.',
  exp:'A pszichomotoros fejlődés területe a nagy- és finommotoros készségeket, a testsémát és a térbeli tájékozódást foglalja magában.'
},
{
  id:'def_w1_11', w:1, topic:'Dinamikus értékelés', type:'define', diff:2, points:2,
  q:'Mit jelent a dinamikus értékelés (tesztelés–tanítás–újratesztelés) eljárása?',
  modelAnswer:'Dinamikus értékelés: A gyógypedagógus először felméri a tanuló teljesítményét, ezután rövid, célzott segítséget nyújt, majd ugyanolyan típusú feladattal újra értékeli. A különbség megmutatja a tanuló tanulási kapacitását és a szükséges támogatás mértékét. Vigotszkij legközelebbi fejlődési zónájának (ZPD) elvén alapul.',
  exp:'A dinamikus értékelés 3 lépése: tesztelés → célzott segítség → újratesztelés. A különbség a ZPD-t mutatja.'
},
{
  id:'def_w1_12', w:1, topic:'Dinamikus értékelés', type:'define', diff:2, points:2,
  q:'Mit jelent Vigotszkij legközelebbi fejlődési zónájának (ZPD) fogalma?',
  modelAnswer:'Legközelebbi fejlődési zóna (ZPD): A különbség aközött, amit a tanuló önállóan képes teljesíteni, és aközött, amit megfelelő segítséggel (felnőtt vagy fejlettebb társ irányításával) el tud érni. A ZPD a fejlesztés optimális célterülete.',
  exp:'A ZPD az önálló teljesítmény és a segítséggel elérhető teljesítmény közötti különbség – a fejlesztés célterülete.'
},

// ══════════════════════════════════════════════
// VÁLTOZAT 1
// ══════════════════════════════════════════════
{
  id:'essay_w1_01', w:1, topic:'Fogalommeghatározások', type:'essay', diff:2, points:5,
  q:'Határozza meg a következő fogalmakat: szűrés, pszichopedagógiai értékelés, diagnózis, formatív pszichodiagnosztika, funkcionális profil!',
  modelAnswer:`Szűrés (screening): Elsődleges, gyors eljárás, amelynek célja azon gyermekek azonosítása, akiknél fejlődési eltérés, lemaradás vagy fogyatékosság gyanúja merül fel, és mélyebb vizsgálatra van szükség. Nem diagnosztikus jellegű, csupán jelzőrendszerként működik.

Pszichopedagógiai értékelés: Komplex, multidiszciplináris folyamat, amelynek során a tanuló kognitív, érzelmi, szociális, kommunikációs és motorikus fejlődését vizsgálják standardizált és nem standardizált eszközök segítségével, a fejlesztési szükségletek meghatározása céljából.

Diagnózis: A pszichopedagógiai értékelés alapján felállított szakmai megállapítás, amely megnevezi a fogyatékosság vagy sajátos nevelési igény típusát és súlyosságát, és alapul szolgál az intervencióhoz.

Formatív pszichodiagnosztika: Olyan értékelési megközelítés, amely nem lezárást, hanem fejlődési folyamatot vizsgál – a tanuló meglévő képességeire, fejleszthető területeire és tanulási potenciáljára fókuszál (Vigotszkij ZPD-elvével összhangban), dinamikus és folyamatos jellegű.

Funkcionális profil: A tanuló erősségeinek és nehézségeinek átfogó leírása különböző fejlődési területeken (kognitív, kommunikációs, szociális, motorikus stb.), amely az egyéni intervenciós terv alapját képezi.`,
  exp:'Mind az 5 fogalom pontos meghatározása szükséges: szűrés, pszichopedagógiai értékelés, diagnózis, formatív pszichodiagnosztika, funkcionális profil.'
},

{
  id:'essay_w1_02', w:1, topic:'Értékelés alapelvei', type:'essay', diff:2, points:5,
  q:'Soroljon fel és röviden magyarázzon el öt alapelvet, amelyet a komplex pszichopedagógiai értékelés során tiszteletben kell tartani!',
  modelAnswer:`1. Komplexitás elve – az értékelés a tanuló személyiségének valamennyi területét felöleli, nem csupán egy-egy részterületre koncentrál.

2. Individualitás elve – minden gyermek egyedi, ezért az értékelés az adott személy sajátosságaihoz igazodik.

3. Dinamikusság elve – az értékelés nem egyszeri, statikus aktus, hanem folyamatos, a fejlődést nyomon követő folyamat.

4. Multidiszciplinaritás elve – különböző szakemberek (pszichológus, logopédus, gyógypedagógus, orvos, szociális munkás) együttműködésével valósul meg.

5. A család bevonásának elve – a szülők aktív résztvevők az értékelési folyamatban, mivel nélkülözhetetlen információval rendelkeznek gyermekük fejlődéséről.`,
  exp:'Az 5 alapelv: komplexitás, individualitás, dinamikusság, multidiszciplinaritás, a család bevonása – mindegyik rövid magyarázattal.'
},

{
  id:'essay_w1_03', w:1, topic:'Foglalkozásterápia', type:'essay', diff:2, points:6,
  q:'Ismertesse a foglalkozásterápiás folyamat három szakaszát!',
  modelAnswer:`1. Értékelési szakasz: A terapeuta megismeri a kliens funkcionális állapotát, erősségeit és korlátait. Standardizált és nem standardizált eszközöket alkalmaz (pl. megfigyelés, strukturált interjú, funkcionális tesztek). Meghatározza a fejlesztési prioritásokat.

2. Tervezési és intervenciós szakasz: A terapeuta – a multidiszciplináris teammel és a családdal együttműködve – egyéni fejlesztési tervet dolgoz ki. A tevékenységeket a tanuló érdeklődéséhez, képességszintjéhez és céljaihoz igazítja. Az intervenció lehet egyéni vagy csoportos, iskolai vagy otthoni környezetben megvalósuló.

3. Értékelési és lezárási szakasz: A folyamat eredményeit rendszeresen monitorozzák; a célok teljesülését mérik, a tervet szükség esetén módosítják. A lezárás magában foglalja az elért eredmények dokumentálását és a további ajánlások megfogalmazását.`,
  exp:'A három szakasz: (1) Értékelési szakasz, (2) Tervezési és intervenciós szakasz, (3) Értékelési és lezárási szakasz – mindegyik részletes kifejtéssel.'
},

{
  id:'essay_w1_04', w:1, topic:'PIP', type:'essay', diff:2, points:6,
  q:'Ismertesse az egyéni intervenciós terv (PIP) hat lényeges elemét!',
  modelAnswer:`1. A tanuló jelenlegi funkcionális szintjének leírása – erősségek és nehézségek konkrét, mérhető formában.

2. Hosszú távú célok – az adott tanév végére elérendő fejlesztési célok.

3. Rövid távú célok (lépések) – a hosszú távú célokhoz vezető, kisebb, mérhető lépések.

4. Alkalmazott módszerek és eszközök – az intervenciókban alkalmazandó pedagógiai stratégiák, segédeszközök.

5. A felelős személyek és a szolgáltatások – ki, mikor, hol és milyen keretek között valósítja meg a fejlesztést.

6. Értékelési eljárás és időpont – hogyan és mikor mérik a célok teljesülését, és mikor kerül sor a terv felülvizsgálatára.`,
  exp:'A PIP 6 eleme: jelenlegi szint, hosszú távú célok, rövid távú célok, módszerek és eszközök, felelős személyek, értékelési eljárás.'
},

{
  id:'essay_w1_05', w:1, topic:'SMART célok', type:'essay', diff:3, points:6,
  q:'Fogalmazzon meg két SMART célt: egyet enyhe intellektuális fogyatékossággal élő, egyet autizmus spektrumon lévő tanuló számára! Minden célnál jelölje meg az öt SMART kritériumot!',
  modelAnswer:`SMART cél – enyhe intellektuális fogyatékossággal élő tanuló:
„Az egyéni fejlesztési foglalkozásokon, 3 hónapos időtartam alatt, Andrei képes lesz önállóan, legfeljebb egy szóbeli segítséggel, 10 egyjegyű szám összeadási feladatot megoldani, legalább 80%-os pontossággal."
– Specifikus: egyjegyű számok összeadása
– Mérhető: 10 feladatból legalább 8 helyes
– Elérhető: a tanuló jelenlegi szintjéhez igazított
– Releváns: alapvető matematikai kompetencia
– Időhöz kötött: 3 hónap

SMART cél – autizmus spektrumon lévő tanuló:
„Strukturált csoportos tevékenység keretében, 2 hónapon belül, Maria képes lesz önállóan köszönni és búcsúzni a pedagógustól és legalább két osztálytársától, minden egyes találkozáskor, következetesen legalább 4 egymást követő héten át."
– Specifikus: köszönés és búcsúzás
– Mérhető: minden találkozáskor, 4 héten át
– Elérhető: szociális rutinba illesztett
– Releváns: szociális kommunikáció fejlesztése
– Időhöz kötött: 2 hónap`,
  exp:'Két jól formált SMART cél: mindkettő specifikus, mérhető, elérhető, releváns és időhöz kötött. Az 5 kritérium megjelölése minden célnál kötelező.'
},

// ══════════════════════════════════════════════
// VÁLTOZAT 2
// ══════════════════════════════════════════════
{
  id:'essay_w2_01', w:2, topic:'Fogalmak – Inklúzió', type:'essay', diff:2, points:5,
  q:'Határozza meg a következő fogalmakat: integráció, inklúzió, normalizáció, inkluzív iskola, ésszerű alkalmazkodás!',
  modelAnswer:`Integráció: A sajátos nevelési igényű tanulók elhelyezése a többségi oktatási intézményekben, ahol bizonyos mértékű alkalmazkodás történik az igényeikhez, de az iskola alapstruktúrája és elvárásrendszere lényegében változatlan marad.

Inklúzió: Az integráción túlmutató szemlélet, amely szerint az iskola alkalmazkodik minden tanuló szükségletéhez – nem a tanuló illeszkedik a rendszerhez, hanem a rendszer alakul a tanulóhoz. Az inklúzió a sokféleséget értékként kezeli.

Normalizáció: Az az elv, amely szerint a fogyatékossággal élő személyeknek joguk van a társadalom többi tagjával azonos életkörülményekhez, napi ritmushoz és életlehetőségekhez hozzáférni.

Inkluzív iskola: Olyan oktatási intézmény, amely strukturálisan, pedagógiailag és szemléletileg felkészült arra, hogy minden tanulót – beleértve a fogyatékossággal élőket – befogadjon, és mindegyikük számára biztosítsa a minőségi oktatáshoz való hozzáférést.

Ésszerű alkalmazkodás: Olyan módosítások és kiigazítások összessége, amelyek nem jelentenek aránytalan terhet az intézmény számára, mégis lehetővé teszik, hogy a fogyatékossággal élő személy egyenlő alapon részt vegyen az oktatásban.`,
  exp:'Mind az 5 fogalom pontos meghatározása szükséges. Kulcskülönbség: az inklúzióban a rendszer alakul a tanulóhoz, nem fordítva.'
},

{
  id:'essay_w2_02', w:2, topic:'Utazó tanár', type:'essay', diff:2, points:5,
  q:'Ismertesse az utazó és támogató tanár öt alapvető feladatát!',
  modelAnswer:`1. Pszichopedagógiai értékelés és tanácsadás – a CES tanuló felmérése, a fejlesztési szükségletek azonosítása, az osztálytanító tanácsadása az adaptáció módszereiről.

2. Egyéni fejlesztési tervezés – a PIP kidolgozásában és rendszeres aktualizálásában való részvétel a multidiszciplináris teammel együttműködve.

3. Közvetlen fejlesztő munka – egyéni vagy kiscsoportos fejlesztő foglalkozások tartása a tanuló sajátos szükségleteire irányulva.

4. Együttműködés a pedagógussal – az osztálytanító módszertani támogatása, közös tervezés, az adaptált tananyagok és értékelési eszközök elkészítése.

5. Kapcsolattartás a családdal – a szülők rendszeres tájékoztatása a tanuló fejlődéséről, a fejlesztési célokban való partnerség erősítése.`,
  exp:'Az 5 feladat: értékelés és tanácsadás, fejlesztési tervezés, közvetlen fejlesztő munka, együttműködés a pedagógussal, kapcsolattartás a családdal.'
},

{
  id:'essay_w2_03', w:2, topic:'Demutizálás', type:'essay', diff:2, points:5,
  q:'Magyarázza meg a demutizálás fogalmát, és ismertessen három, a folyamatban alkalmazható kommunikációs módszert!',
  modelAnswer:`A demutizálás fogalma: Olyan speciális pedagógiai folyamat, amelynek célja a siket vagy súlyos kommunikációs zavarral küzdő (mutizált) gyermekek hangzó beszédre tanítása, vagy a meglévő hangadás tudatos és kommunikatív célú fejlesztése. A folyamat célja nem csupán a hang előhívása, hanem a funkcionális kommunikáció kialakítása.

Három alkalmazható kommunikációs módszer:

1. Orális-auditív módszer: A maradék hallás és a szájról olvasás maximális kihasználása hangzó beszéd fejlesztésére. A tanuló hallókészüléket visel, és vizuális visszajelzéssel (tükör) figyeli saját artikulációját.

2. Jelnyelv: Az adott ország jelnyelve teljes értékű, önálló nyelvként használható a kommunikációban és az oktatásban. A demutizálás során biztosítja a tanuló számára az anyanyelvű kommunikációt.

3. Totális kommunikáció: A módszer egyszerre alkalmaz több csatornát: jelnyelvet, szájmozgást, hangos beszédet, gesztusokat, írást és képi kommunikációt. Rugalmasan igazodik a tanuló kommunikációs szintjéhez.`,
  exp:'A demutizálás definíciója + 3 módszer: orális-auditív, jelnyelv, totális kommunikáció – mindegyik rövid magyarázattal.'
},

{
  id:'essay_w2_04', w:2, topic:'Olvasás-írás szakaszai', type:'essay', diff:2, points:6,
  q:'Ismertesse az olvasás-írás elsajátításának előábécés, ábécés és ábécé utáni szakaszát!',
  modelAnswer:`Előábécés szakasz (logografikus szakasz): A gyermek még nem ismeri a betűket, de képes egyes szavakat globálisan, vizuális formájuk alapján felismerni (pl. a saját nevét). Ebben a szakaszban alakul ki a könyvek iránti érdeklődés, a bal-jobb irányú olvasási irány érzékelése, valamint a nyomtatott szöveg fogalma. A fejlesztés célja a fonológiai tudatosság, a vizuális diszkrimináció és a finommotorika előkészítése.

Ábécés szakasz (alfabetikus szakasz): A tanuló elsajátítja a betű-hang megfeleltetést, és képessé válik szavakat hang-betű kapcsolatok alapján dekódolni. Először betűnként olvas, majd szótagol, végül fokozatosan eljut a folyékonyabb szóolvasásig. Az írás terén a betűformák megtanulása és az első szavak, mondatok leírása zajlik. CES tanulóknál ez a szakasz hosszabb és intenzívebb fejlesztést igényel.

Ábécé utáni szakasz (ortografikus szakasz): A tanuló már nem betűnként, hanem szóegységenként, szóképek alapján olvas. A dekódolás automatizálódik, és a figyelem a szöveg tartalmára irányulhat. Az írás egyre folyékonyabbá válik, megjelenik a helyesírási tudatosság. A fejlesztés hangsúlya a szövegértésre és az írásbeli szövegalkotásra helyeződik.`,
  exp:'A három szakasz: előábécés (logografikus), ábécés (alfabetikus), ábécé utáni (ortografikus) – mindegyik jellemzői, fejlesztési céljai.'
},

// ══════════════════════════════════════════════
// VÁLTOZAT 3
// ══════════════════════════════════════════════
{
  id:'essay_w3_01', w:3, topic:'ASD/ADHD fogalmak', type:'essay', diff:2, points:5,
  q:'Határozza meg a következő fogalmakat: autizmus spektrum, ADHD, végrehajtó funkció, önszabályozás, funkcionális viselkedéselemzés!',
  modelAnswer:`Autizmus spektrum (ASD): Neurofejlődési állapot, amelyet a szociális kommunikáció és interakció tartós nehézségei, valamint korlátozott, ismétlődő viselkedésminták és érdeklődési körök jellemeznek. Spektrumjellegű – az érintett személyek szükségletei rendkívül széles skálán mozognak.

ADHD: Neurofejlődési állapot, amelynek fő jellemzői a figyelmetlenség, az impulzivitás és/vagy a hiperaktivitás, amelyek legalább két különböző környezetben megjelennek, és jelentősen befolyásolják a mindennapi működést.

Végrehajtó funkció: A frontális lebenyhez kötött magasabb rendű kognitív folyamatok összessége (munkamemória, inhibíció, kognitív rugalmasság, tervezés), amelyek a célirányos viselkedés tervezését, szervezését és monitorozását teszik lehetővé.

Önszabályozás: Az egyén azon képessége, hogy tudatosan irányítsa érzelmeit, gondolatait és viselkedését a helyzetnek megfelelően. Magában foglalja az impulzusok gátlását és az érzelmek kezelését.

Funkcionális viselkedéselemzés (FBA): Strukturált értékelési folyamat, amely egy problémás viselkedés mögöttes okát (funkcióját) azonosítja az ABC-modell (antecedensek – viselkedés – következmények) segítségével.`,
  exp:'Mind az 5 fogalom pontos meghatározása: ASD, ADHD, végrehajtó funkció, önszabályozás, FBA (ABC-modell).'
},

{
  id:'essay_w3_02', w:3, topic:'Intervenciós módszerek', type:'essay', diff:3, points:8,
  q:'Röviden ismertesse az ABA, a TEACCH, a PECS és a szociális narratívák lényegét és pedagógiai felhasználását!',
  modelAnswer:`ABA (Applied Behavior Analysis – Alkalmazott viselkedéselemzés): A viselkedéslélektan elvein alapuló, strukturált intervenciós megközelítés. Kívánatos viselkedéseket megerősítéssel erősít meg, a nem kívánatosakat nem jutalmazza, miközben a helyettesítő viselkedést tanítja. A tanítás kis, mérhető lépésekre bontott, adatokon alapuló folyamatos monitorozással kísért. Pedagógiai felhasználása: új készségek szisztematikus kialakítása, FBA-ra épülő viselkedésintervenció.

TEACCH (Treatment and Education of Autistic and related Communication-handicapped CHildren): Strukturált tanulási környezetet és vizuálisan szervezett feladatrendszert kínál. Alapelve a „strukturált tanítás": az osztályterem fizikailag és időben egyértelműen tagolt (munkaállomások, vizuális napi rend, feladatdobozok). Pedagógiai felhasználása: önálló munkavégzés, rutinkövetés és feladatbefejezési képesség fejlesztése; szorongáscsökkentés.

PECS (Picture Exchange Communication System): Augmentatív és alternatív kommunikációs rendszer, amely nem verbális ASD tanulóknak képkártyák cseréjén alapuló kommunikációt tanít hat fázisban. Pedagógiai felhasználása: funkcionális kommunikáció megalapozása, kérés és jelzés tanítása verbális képességek hiányában.

Szociális narratívák (Social Stories™): Carol Gray által kidolgozott módszer. Rövid, személyre szabott történetek ismertetik a szociális helyzet menetét, az elvárható viselkedést és mások nézőpontját. Pedagógiai felhasználása: szociális helyzetek előkészítése, szorongáscsökkentés, viselkedési elvárások tisztázása.`,
  exp:'Mind a 4 módszer: ABA (megerősítés, adatvezérelt), TEACCH (strukturált környezet), PECS (képcsere, 6 fázis), szociális narratívák (Carol Gray) – lényeg + pedagógiai felhasználás.'
},

{
  id:'essay_w3_03', w:3, topic:'Feladatelemzés', type:'essay', diff:2, points:4,
  q:'Magyarázza el a feladatelemzés, a láncolás és a segítség fokozatos elhalványításának szerepét az autonómiafejlesztésben!',
  modelAnswer:`Feladatelemzés (task analysis): Összetett, több lépésből álló készségeket (pl. fogmosás, öltözködés) apró, egymást követő, mérhető lépésekre bontunk. Ez lehetővé teszi, hogy a tanuló ne az egész feladattal szembesüljön egyszerre, hanem lépésről lépésre sajátítsa el az egyes részeket. A pedagógus pontosan azonosítani tudja, melyik lépésnél szorul segítségre.

Láncolás (chaining): A feladatelemzésen alapuló tanítási eljárás két fő formája:
– Előretartó láncolás: a tanuló az első lépéstől kezd el önállóan dolgozni, fokozatosan hozzáadódnak a következők.
– Visszatartó láncolás: a pedagógus elvégzi az összes lépést, kivéve az utolsót – a tanuló mindig a befejező lépésnél él át sikerélményt, majd fokozatosan veszi át a korábbi lépések felelősségét.

Segítség fokozatos elhalványítása (prompt fading): Az intervenció kezdetén intenzív segítség (fizikai irányítás, modellezés, verbális utasítás). Ahogy a készség megszilárdul, a segítség fokozatosan csökken – fizikaiból gesztusra, majd verbális jelzésre, végül önálló végrehajtásra. Megakadályozza a prompt dependency (segítségre való ráutaltság) kialakulását.`,
  exp:'Feladatelemzés (lépésekre bontás) + láncolás (előretartó és visszatartó) + prompt fading (fokozatos csökkentés, prompt dependency megelőzése).'
},

{
  id:'essay_w3_04', w:3, topic:'UDL', type:'essay', diff:2, points:6,
  q:'Mutassa be az UDL/DUA három alapelvét, mindegyikhez kapcsoljon egy konkrét példát!',
  modelAnswer:`1. A reprezentáció többféle módja (Mit tanulunk?): Az információt különböző formátumokban kell hozzáférhetővé tenni. Konkrét példa: Egy természetismeret-órán az esőerdőről szóló anyagot egyszerre szöveges leírás, hangosított narráció, videó és tapintható maketta formájában tesszük elérhetővé. A siket tanuló a szöveget és feliratozott videót használja; a vak tanuló a hanganyagot és a makettet.

2. A cselekvés és kifejezés többféle módja (Hogyan mutatjuk meg, amit tudunk?): A tanulók különböző módokon adhatják vissza tudásukat. Konkrét példa: Egy mesefeldolgozás végén a tanulók választhatnak: leírják a mese végét, elmondják szóban, lerajzolják, képkártyák sorba rendezésével mutatják be, vagy hanganyagot készítenek. Az ASD tanuló a képkártyás módszert, a diszgráfiás tanuló a szóbeli lehetőséget választja.

3. Az érdeklődés és motiváció többféle módja (Miért tanulunk?): A tanulók bevonódását és motivációját személyes relevanciával és választási lehetőségekkel kell biztosítani. Konkrét példa: A számolást nem elvont feladatlapokon, hanem a tanuló által választott témában (pl. focistatisztika, receptek) gyakoroltatjuk. Az ADHD tanuló rövid, változatos feladatrészleteket kap mozgásos szünetekkel.`,
  exp:'Az UDL 3 alapelve: (1) reprezentáció többféle módja, (2) cselekvés és kifejezés többféle módja, (3) érdeklődés és motiváció többféle módja – mindegyikhez konkrét példával.'
},


// ══════════════════════════════════════════════
// VÁLTOZAT 4
// ══════════════════════════════════════════════
{
  id:'essay_w4_01', w:4, topic:'Fogalommeghatározások', type:'essay', diff:2, points:5,
  q:'Határozza meg a következő fogalmakat: hiányosság (deficiență), fogyatékosság (dizabilitate), CES (Cerințe Educaționale Speciale), kompenzáció, habilitáció/rehabilitáció!',
  modelAnswer:`Hiányosság (deficiență): Szervi vagy funkcionális szintű eltérés, károsodás, amely az egyén biológiai struktúráiban vagy funkcióiban jelenik meg. Az orvosi modell szerinti legalsó szint – pl. hallószervi károsodás vagy genetikai rendellenesség.

Fogyatékosság (dizabilitate): Az egyén és a környezet kölcsönhatásából eredő funkcionális korlátok összessége, amelyek akadályozzák a teljes és egyenlő társadalmi részvételt. A modern (biopszicho-szociális) modell szerint nem kizárólag az egyénben, hanem a személy és az akadályozó környezet találkozásában keletkezik.

CES (Cerințe Educaționale Speciale – Sajátos nevelési igény): Olyan oktatási kategória, amely azokat a tanulókat foglalja magában, akiknek tanulási, fejlődési vagy alkalmazkodási nehézségeik miatt a standard oktatási kereten túlmutató, személyre szabott pedagógiai támogatásra van szükségük. Szélesebb kategória, mint a fogyatékosság – magában foglalja a tanulási zavarokat, a magatartási nehézségeket és a szociális hátrányból eredő igényeket is.

Kompenzáció: Az a fejlődési folyamat, amelynek során a fogyatékossággal élő egyén meglévő, sértetlen funkcióit mozgósítja a sérült vagy hiányzó funkciók hatásának ellensúlyozására. Vigotszkij értelmezésében nem automatikusan zajlik – megfelelő nevelői beavatkozást igényel.

Habilitáció / rehabilitáció: A habilitáció olyan képességek és készségek kialakítását jelenti, amelyek a fogyatékossággal élő személynél soha nem fejlődtek ki (pl. kommunikációs készség veleszületett siketségnél). A rehabilitáció korábban meglévő, majd elveszített funkciók visszaállítására irányul (pl. stroke utáni beszédterápia).`,
  exp:'Mind az 5 fogalom pontos meghatározása szükséges: hiányosság (biológiai szint), fogyatékosság (személy–környezet kölcsönhatása), CES (pedagógiai kategória), kompenzáció (Vigotszkij), habilitáció vs. rehabilitáció.'
},
{
  id:'essay_w4_02', w:4, topic:'Komplex integrált oktatási terápia', type:'essay', diff:3, points:6,
  q:'Jellemezze a komplex, integrált oktatási terápia természetét! Mutassa be a négy terápiás modult, és hozzon három konkrét példát a terápiás tevékenységek oktatási-nevelési értékeire!',
  modelAnswer:`A komplex, integrált oktatási terápia jellege: Holisztikus fejlesztési megközelítés, amely a CES tanuló oktatását, nevelését és terápiáját egyetlen egységes keretben szervezi meg. Nem párhuzamos, egymástól független tevékenységeket jelent, hanem szerves integrációt: a terápiás elemek beépülnek az oktatásba, és az oktatás terápiás értékkel bír. Alapelve, hogy minden mozzanat egyidejűleg pedagógiai és terápiás értékkel rendelkezik.

Négy terápiás modul:
1. Kognitív stimulációs és tanulástámogatási modul – figyelem, emlékezet, gondolkodás, problémamegoldás, olvasás-írás és számolás speciális módszerei.
2. Kommunikációs és logopédiai modul – beszéd, nyelv, kommunikáció fejlesztése; artikulációs terápia, AAC, szövegértés.
3. Pszichomotoros és foglalkozásterápiás modul – nagy- és finommotorika, testséma, térbeli tájékozódás, önkiszolgálás.
4. Szocioemocionális és viselkedéstámogató modul – érzelmi szabályozás, szociális készségek, önkép, PBS.

Három konkrét példa:
1. Homokterápiás tevékenység: A tanuló homokban betűket rajzol. Fejleszti a finommotorikát, taktilis észlelést, betű-hang kapcsolatot. Oktatási érték: írás-olvasás előkészítése; nevelési érték: sikerélmény szorongásmentes közegben.
2. Dramatikus játék / szerepjáték: Mindennapi szituációt játszanak el (pl. bolti vásárlás). Fejleszti a szociális kommunikációt, szókincset, perspektívafelvételt. Oktatási érték: anyanyelvi és matematikai kompetenciák; nevelési érték: empátia és önbizalom.
3. Ritmus- és zenei tevékenységek: Ütőhangszeren ritmussorokat ismételnek vissza. Fejleszti az auditív figyelmet, munkamemóriát, mozgáskoordinációt. Oktatási érték: fonológiai tudatosság; nevelési érték: önkifejezés öröme.`,
  exp:'A komplex integrált terápia holisztikus jellegének leírása, a 4 modul felsorolása, és 3 tevékenységpélda oktatási + nevelési értékekkel párosítva szükséges.'
},
{
  id:'essay_w4_03', w:4, topic:'Multidiszciplináris team', type:'essay', diff:2, points:5,
  q:'Mutassa be a multidiszciplináris team működését! Ismertesse négy teamtag feladatát, és nevezzen meg két etikai követelményt!',
  modelAnswer:`Négy teamtag és feladataik:

Gyógypedagógus: A CES tanulók oktatási fejlesztésének koordinátora; elvégzi a pszichopedagógiai értékelést, kidolgozza és megvalósítja a PIP-et, együttműködik a többségi pedagógussal az inkluzív osztályban.

Pszichológus: A tanuló érzelmi, szociális és kognitív funkcionálásának értékelése; pszichológiai terápia, szülőtanácsadás, pszichológiai szempontú konzultáció a team számára.

Logopédus: A kommunikációs és nyelvi zavarok diagnosztikája és terápiája; augmentatív kommunikációs rendszerek bevezetése; pedagógusok módszertani támogatása.

Szociális munkás: A tanuló és a család szociális helyzetének felmérése; szociális szolgáltatásokhoz való hozzáférés biztosítása; veszélyeztetett tanulók védelme és közösségi erőforrások mozgósítása.

Két etikai követelmény:

Titoktartás és adatvédelem: A tanuló és a család személyes adatai, az értékelési eredmények és a fejlesztési terv tartalma kizárólag az érintett szakemberek és a szülők előtt ismert – harmadik félnek csak írásos beleegyezéssel adható ki.

Informált beleegyezés és a tanuló méltóságának tisztelete: Minden beavatkozáshoz – értékeléshez, terápiához, intézményi elhelyezési javaslathoz – a szülők (és életkortól függően a tanuló) tájékozott és önkéntes beleegyezése szükséges.`,
  exp:'4 teamtag (gyógypedagógus, pszichológus, logopédus, szociális munkás) feladatai és 2 etikai követelmény (titoktartás, informált beleegyezés) szükséges.'
},
{
  id:'essay_w4_04', w:4, topic:'Artikulációs terápia', type:'essay', diff:3, points:6,
  q:'Mutassa be az artikulációs zavar terápiájának öt szakaszát! Minden szakasznál jelölje meg a célt és egy jellemző módszert vagy feladatot!',
  modelAnswer:`1. Előkészítő szakasz: Cél: az auditív diszkrimináció, légzés és artikulációs szervek előkészítése. A tanuló megtanulja megkülönböztetni a célhangot, és tudatosul benne a helyes/helytelen ejtés különbsége. Jellemző feladat: fújás, szívás, nyelvtorna – artikulációs szervek tudatos mozgatásának gyakorlatai.

2. Hangkialakítási szakasz: Cél: a hiányzó vagy torzított hang helyes képzésének megtanítása. A logopédus bemutatja a hangképzés módját, a tanuló utánozza és tükör előtt ellenőrzi saját artikulációját. Jellemző módszer: tapintásos visszajelzés, segítő hangok és mozdulatsorok.

3. Rögzítési szakasz: Cél: a helyesen kialakított hang stabillá tétele izoláltan, majd szótagokban és szavakban. Jellemző feladat: játékos hangutánzó és ritmusos feladatok, sok ismétléssel.

4. Differenciálási szakasz: Cél: a célhang megkülönböztetése a hasonló, korábban összekevert hangoktól (pl. sz–s, r–l). Jellemző feladat: auditív diszkriminációs feladatok és minimális párokat tartalmazó szókártyák.

5. Automatizálási szakasz: Cél: a hang beépítése a spontán, folyamatos beszédbe. Jellemző feladat: képmesélés, párbeszéd, versek – ahol a célhang tudatos erőfeszítés nélkül jelenik meg. A transzfer kiterjed otthoni helyzetekre is.`,
  exp:'A terápia 5 szakasza sorban: előkészítő, hangkialakítási, rögzítési, differenciálási, automatizálási – mindegyikhez cél és módszer/feladat szükséges.'
},
{
  id:'essay_w4_05', w:4, topic:'Kooperatív tanulás adaptálása', type:'essay', diff:3, points:8,
  q:'Írja le a kooperatív tanulás egy konkrét technikáját (pl. Puzzle/Jigsaw)! Indokolja alkalmazhatóságát CES tanulóknál, és adaptálja enyhe intellektuális fogyatékossággal élő, illetve autizmus spektrumon lévő tanulóra!',
  modelAnswer:`Választott technika: Puzzle (Jigsaw)

Leírás: A tanulókat kis csoportokra osztják; minden csoporttag egy résztémát dolgoz fel, majd "szakértőként" visszatér és megtanítja a többieknek a saját részét. Mindenki egyszerre tanuló és tanító szerepben van; a csoport sikere az egyén felelősségvállalásától függ.

Indoklás CES tanulóknál: Az aktív részvétel, a személyes felelősség és a társas tanulás fenntartja a motivációt, fejleszti a szociális készségeket, és a saját tempóhoz igazított feldolgozást tesz lehetővé. A szerepvállalás erősíti az önképet és az önhatékonyság érzését.

Adaptálás enyhe intellektuális fogyatékossággal élő tanuló számára:
– A tanuló résztémája egyszerűbb, kevesebb tartalommal és több képi elemmel.
– A feldolgozáshoz vizuális útmutató (képes kérdések, kulcsszókártyák) áll rendelkezésre.
– A "tanítás" képkártyák megmutatásával és egyszerű mondatokkal valósul meg.
– A pedagógus vagy egy "buddy" tanuló diszkréten jelen van segítségnyújtásra.
– A feladat elvégzési ideje rugalmasabb.

Adaptálás autizmus spektrumon lévő tanuló számára:
– A szerepek és feladatlépések előre részletesen elmagyarázottak és vizuálisan rögzítve (lépéskártyák).
– A csoporttagok száma kisebb (2–3 fő), hogy a szociális komplexitás kezelhető maradjon.
– A tanuló előre tudja, mikor kerül rá a sor és pontosan mit várnak tőle – a kiszámíthatóság csökkenti a szorongást.
– Csendesebb munkakörnyezet az esetleges szenzoros túlterhelés megelőzésére.
– A sikeres részvételt konkrét, pozitív visszajelzéssel nyugtázzák.`,
  exp:'A Puzzle technika leírása, CES alkalmazhatóságának indoklása, majd két adaptáció (enyhe értelmi fogyatékosság + ASD) részletes bemutatása szükséges.'
},

]; // end EXERCISES_ESSAYS
