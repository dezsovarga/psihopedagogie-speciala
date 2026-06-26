// Essay-type questions — require detailed, structured answers
// Evaluated by Claude API; shown only when API key is configured
const EXERCISES_ESSAYS = [

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
}

]; // end EXERCISES_ESSAYS
