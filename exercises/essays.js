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

// W1 II. FELADAT – Foglalkozásterápia és pszichomotorika
{
  id:'def_w1_13', w:1, topic:'Foglalkozásterápia', type:'define', diff:1, points:2,
  q:'Határozza meg a foglalkozásterápia fogalmát!',
  modelAnswer:'Foglalkozásterápia (terapia ocupațională): Egészségügyi és rehabilitációs szakdiszciplína, amely célirányos, értelmes tevékenységek segítségével fejleszti vagy helyreállítja az egyén funkcionális képességeit, elősegítve önállóságát és társadalmi részvételét. Fogyatékossággal élő személyek esetén a mindennapi életviteli készségek, a munkavégzési képességek és a szabadidős tevékenységekben való részvétel fejlesztésére irányul.',
  exp:'A foglalkozásterápia célirányos tevékenységekkel fejleszti a funkcionális képességeket az önállóság és társadalmi részvétel elősegítéséért.'
},
{
  id:'def_w1_14', w:1, topic:'Pszichomotorika', type:'define', diff:2, points:2,
  q:'Mit jelent a testséma (schema corporală) fogalma a pszichomotorika összetevői között?',
  modelAnswer:'Testséma (schema corporală): A saját test részeinek, határainak és mozgáslehetőségeinek tudatos ismerete és érzékelése. A testséma megalapozza a térbeli tájékozódást és a mozgásos tevékenységek koordinációját.',
  exp:'A testséma a saját test részeinek, határainak és mozgáslehetőségeinek tudatos érzékelése – alapja a térbeli tájékozódásnak.'
},
{
  id:'def_w1_15', w:1, topic:'Pszichomotorika', type:'define', diff:2, points:2,
  q:'Mit jelent a lateralitás fogalma, és miért fontos az olvasás-írás tanulásában?',
  modelAnswer:'Lateralitás (lateralitatea): A domináns oldal (jobb vagy bal kéz, láb, szem) következetes alkalmazása mozgásos tevékenységek során. A tiszta lateralitás kialakítása fontos az olvasás-írás tanulásában, mivel a bal-jobb irányultság és a következetes kézhasználat a betűk és szavak helyes azonosításának alapfeltétele.',
  exp:'A lateralitás a domináns oldal következetes alkalmazása – tiszta kialakítása az olvasás-írás bal-jobb irányultságának alapfeltétele.'
},
{
  id:'def_w1_16', w:1, topic:'Foglalkozásterápia', type:'define', diff:2, points:2,
  q:'Mit jelent az ADL (Activities of Daily Living – mindennapi életviteli tevékenységek) fogalma a foglalkozásterápiában?',
  modelAnswer:'ADL (Activities of Daily Living – mindennapi életviteli tevékenységek): Az önkiszolgáláshoz és az önálló életvitelhez szükséges alapvető tevékenységek összessége, mint az öltözködés, étkezés és higiénia. A foglalkozásterápiában ezek valós vagy szimulált környezetben való gyakorlása az autonómiafejlesztés egyik legfontosabb módja.',
  exp:'Az ADL az önkiszolgálási alapkészségek (öltözés, étkezés, higiénia) összessége – valós/szimulált környezetben való gyakorlása az autonómiafejlesztés alapja.'
},
{
  id:'def_w1_17', w:1, topic:'Komplex értékelés', type:'define', diff:2, points:2,
  q:'Mit jelent az individualitás elve a pszichopedagógiai értékelésben?',
  modelAnswer:'Individualitás elve: az az alapelv, amely szerint minden gyermek egyedi, ezért az értékelést az adott személy sajátosságaihoz kell igazítani, nem pedig egységes, mindenkire egyformán alkalmazott mércével mérni.',
  exp:'Minden gyermek egyedi – az értékelést az adott személy sajátosságaihoz igazítjuk.'
},
{
  id:'def_w1_18', w:1, topic:'Komplex értékelés', type:'define', diff:2, points:2,
  q:'Mit jelent a család bevonásának elve a pszichopedagógiai értékelésben?',
  modelAnswer:'A család bevonásának elve: az az alapelv, amely szerint a szülők aktív résztvevői az értékelési folyamatnak, mivel nélkülözhetetlen információval rendelkeznek gyermekük fejlődéséről, korai viselkedéséről és otthoni környezetéről; bevonásuk nélkül az értékelés hiányos képet adna.',
  exp:'A szülők aktív résztvevők az értékelésben, mert egyedülálló információval rendelkeznek gyermekükről.'
},
{
  id:'def_w1_19', w:1, topic:'Pszichomotorika', type:'define', diff:2, points:2,
  q:'Mit jelent a térbeli tájékozódás a pszichomotorika összetevői között?',
  modelAnswer:'Térbeli tájékozódás (orientarea spațială): a tér irányainak (fent-lent, jobbra-balra, előre-hátra) ismerete és alkalmazása a saját testhez, tárgyakhoz és más személyekhez viszonyítva.',
  exp:'A tér irányainak (fent-lent, jobbra-balra, előre-hátra) ismerete és alkalmazása saját testhez és tárgyakhoz viszonyítva.'
},
{
  id:'def_w1_20', w:1, topic:'Pszichomotorika', type:'define', diff:2, points:2,
  q:'Mit jelent az időbeli tájékozódás a pszichomotorika összetevői között?',
  modelAnswer:'Időbeli tájékozódás (orientarea temporală): a ritmus, az időtartam és az időbeli sorrend érzékelésének és értelmezésének képessége.',
  exp:'A ritmus, az időtartam és az időbeli sorrend érzékelésének és értelmezésének képessége.'
},
{
  id:'def_w1_21', w:1, topic:'Curriculum-adaptáció', type:'define', diff:2, points:2,
  q:'Határozza meg a curriculumdifferenciálás fogalmát!',
  modelAnswer:'Curriculumdifferenciálás: az oktatási tartalom, folyamat vagy értékelési módszer módosítása úgy, hogy az a tanulók eltérő képességszintjéhez igazodjon, miközben az osztályban mindenki ugyanazon általános célok felé halad.',
  exp:'Az oktatási tartalom/folyamat/értékelés módosítása a képességszinthez, közös általános célok mellett.'
},
{
  id:'def_w1_22', w:1, topic:'Curriculum-adaptáció', type:'define', diff:2, points:2,
  q:'Határozza meg az individualizálás fogalmát a speciális oktatásban!',
  modelAnswer:'Individualizálás: egyéni szintű tervezés és fejlesztés, amely kizárólag az adott tanuló sajátos szükségleteit, erősségeit és fejlesztési céljait veszi figyelembe – jellemzően a személyre szabott beavatkozási terv (PIP) keretében valósul meg.',
  exp:'Egyéni szintű tervezés kizárólag az adott tanuló szükségleteire, erősségeire, céljaira – a PIP keretében.'
},
{
  id:'def_w1_23', w:1, topic:'Curriculum-adaptáció', type:'define', diff:3, points:2,
  q:'Határozza meg a hozzáférési adaptáció fogalmát!',
  modelAnswer:'Hozzáférési adaptáció: az oktatási eszközök, módszerek vagy környezet módosítása annak érdekében, hogy a tanuló fizikailag és kognitívan hozzá tudjon férni az ismeretek elsajátításához (pl. Braille-írás, képes instrukciók, hangrögzítő eszköz).',
  exp:'Az eszközök/módszerek/környezet módosítása a fizikai és kognitív hozzáférésért (pl. Braille, képes instrukció).'
},
{
  id:'def_w1_24', w:1, topic:'Curriculum-adaptáció', type:'define', diff:3, points:2,
  q:'Határozza meg a tartalmi módosítás fogalmát!',
  modelAnswer:'Tartalmi módosítás: az elsajátítandó tananyag mennyiségének vagy komplexitásának csökkentése vagy átalakítása a tanuló képességszintjéhez igazodva (pl. egyszerűbb szöveg, kevesebb fogalom, konkrétabb feladatok).',
  exp:'A tananyag mennyiségének/komplexitásának csökkentése vagy átalakítása a képességszinthez.'
},
{
  id:'def_w1_25', w:1, topic:'PIP', type:'define', diff:2, points:2,
  q:'Határozza meg az egyéni intervenciós terv (PIP) fogalmát!',
  modelAnswer:'Egyéni intervenciós terv (PIP): olyan egyéni pedagógiai dokumentum, amely rögzíti a tanuló jelenlegi funkcionális szintjét, a hosszú és rövid távú célokat, az alkalmazott módszereket és eszközöket, a felelős személyeket és szolgáltatásokat, valamint az értékelési eljárást és a felülvizsgálat időpontját.',
  exp:'Egyéni pedagógiai dokumentum: funkcionális szint, hosszú/rövid távú célok, módszerek, felelősök, értékelési eljárás.'
},
{
  id:'def_w1_26', w:1, topic:'Aktív módszerek', type:'define', diff:2, points:2,
  q:'Határozza meg a kooperatív tanulás fogalmát!',
  modelAnswer:'Kooperatív tanulás: aktív-részvételi módszer, amelyben a tanulók kis csoportokban, egymással együttműködve oldanak meg feladatokat; mindenki aktív szerepet kap, és a tanulás kölcsönös segítségen és párbeszéden alapul. CES tanulóknál a szociális interakció és a gyakorlati tevékenység elősegíti a kognitív fejlődést.',
  exp:'Kis csoportos, együttműködésen és kölcsönös segítségen alapuló aktív módszer; mindenki aktív szerepet kap.'
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
// FOGALOMMEGHATÁROZÁSOK – 2. VÁLTOZAT (I. FELADAT)
// ══════════════════════════════════════════════
{
  id:'def_w2_01', w:2, topic:'Fogalommeghatározás', type:'define', diff:1, points:2,
  q:'Határozza meg az integráció fogalmát az inkluzív nevelés kontextusában!',
  modelAnswer:'Integráció: A sajátos nevelési igényű tanulók elhelyezése a többségi oktatási intézményekben, ahol bizonyos mértékű alkalmazkodás történik az igényeikhez, de az iskola alapstruktúrája és elvárásrendszere lényegében változatlan marad.',
  exp:'Az integráció esetén a CES tanuló illeszkedik a meglévő rendszerhez – az iskola csak részben alkalmazkodik.'
},
{
  id:'def_w2_02', w:2, topic:'Fogalommeghatározás', type:'define', diff:1, points:2,
  q:'Határozza meg az inklúzió fogalmát, és emelje ki, miben tér el az integrációtól!',
  modelAnswer:'Inklúzió: Az integráción túlmutató szemlélet, amely szerint az iskola alkalmazkodik minden tanuló szükségletéhez – nem a tanuló illeszkedik a rendszerhez, hanem a rendszer alakul a tanulóhoz. Az inklúzió a sokféleséget értékként kezeli.',
  exp:'Az inklúzió és az integráció különbsége: integrációban a tanuló alkalmazkodik a rendszerhez, inklúzióban a rendszer alkalmazkodik a tanulóhoz.'
},
{
  id:'def_w2_03', w:2, topic:'Fogalommeghatározás', type:'define', diff:2, points:2,
  q:'Mit jelent a normalizáció elve a fogyatékossággal élő személyek oktatásában?',
  modelAnswer:'Normalizáció: Az az elv, amely szerint a fogyatékossággal élő személyeknek joguk van a társadalom többi tagjával azonos életkörülményekhez, napi ritmushoz és életlehetőségekhez hozzáférni. Az oktatásban ez azt jelenti, hogy a CES tanulók lehetőség szerint a lakóhelyükön, a kortársaikkal tanulhatnak.',
  exp:'A normalizáció elvének lényege: azonos életkörülmények, napi ritmus, kortársakkal való tanulás joga.'
},
{
  id:'def_w2_04', w:2, topic:'Fogalommeghatározás', type:'define', diff:2, points:2,
  q:'Mit jelent az inkluzív iskola fogalma?',
  modelAnswer:'Inkluzív iskola: Olyan oktatási intézmény, amely strukturálisan, pedagógiailag és szemléletileg felkészült arra, hogy minden tanulót – beleértve a fogyatékossággal élőket – befogadjon, és mindegyikük számára biztosítsa a minőségi oktatáshoz való hozzáférést.',
  exp:'Az inkluzív iskola strukturálisan, pedagógiailag és szemléletileg is felkészült minden tanuló befogadására.'
},
{
  id:'def_w2_05', w:2, topic:'Fogalommeghatározás', type:'define', diff:2, points:2,
  q:'Határozza meg az ésszerű alkalmazkodás fogalmát!',
  modelAnswer:'Ésszerű alkalmazkodás: Olyan módosítások és kiigazítások összessége, amelyek nem jelentenek aránytalan terhet az intézmény számára, mégis lehetővé teszik, hogy a fogyatékossággal élő személy egyenlő alapon élvezhesse jogait és részt vehessen az oktatásban (pl. adaptált tananyag, hosszabb vizsgaidő, akadálymentesítés).',
  exp:'Az ésszerű alkalmazkodás arányos terhet nem jelent az intézménynek, mégis egyenlő részvételt biztosít.'
},
{
  id:'def_w2_06', w:2, topic:'Inklúzió alapelvei', type:'define', diff:1, points:2,
  q:'Mit jelent az egyenlő hozzáférés elve az inkluzív oktatásban?',
  modelAnswer:'Az egyenlő hozzáférés elve: Minden gyermeknek joga van a minőségi oktatáshoz, fogyatékosságától, képességszintjétől vagy társadalmi hátterétől függetlenül.',
  exp:'Az egyenlő hozzáférés elve szerint fogyatékosságtól vagy képességszinttől függetlenül mindenkit megillet a minőségi oktatás joga.'
},
{
  id:'def_w2_07', w:2, topic:'Inklúzió alapelvei', type:'define', diff:1, points:2,
  q:'Mit jelent a részvétel és befogadás elve az inkluzív oktatásban?',
  modelAnswer:'A részvétel és a befogadás elve: A CES tanulók nem csupán fizikailag vannak jelen az iskolában, hanem aktívan részt vesznek a tanulási és közösségi folyamatokban.',
  exp:'A befogadás elvének lényege: nem elég a fizikai jelenlét – a CES tanulóknak aktívan részt kell venniük a tanulásban és a közösségi életben.'
},
{
  id:'def_w2_08', w:2, topic:'Kommunikáció – Hallássérülés', type:'define', diff:2, points:2,
  q:'Mit jelent a demutizálás fogalma a siket tanulók fejlesztésében?',
  modelAnswer:'A demutizálás olyan speciális pedagógiai folyamat, amelynek célja a siket vagy súlyos kommunikációs zavarral küzdő (mutizált) gyermekek hangzó beszédre tanítása, vagy a meglévő hangadás tudatos és kommunikatív célú fejlesztése. A folyamat célja nem csupán a hang előhívása, hanem a funkcionális kommunikáció kialakítása.',
  exp:'A demutizálás célja a funkcionális kommunikáció kialakítása – nem csupán a hang előhívása, hanem a hangzó beszéd kommunikatív alkalmazása.'
},
{
  id:'def_w2_09', w:2, topic:'Érzékszervi fogyatékosságok', type:'define', diff:2, points:2,
  q:'Jellemezze a siketvaságot (deafblindness) mint önálló fogyatékossági kategóriát!',
  modelAnswer:'A siketvaság a hallás és a látás egyidejű súlyos sérülése, amely egyedi és komplex kommunikációs, tájékozódási és tanulási nehézségeket okoz. Nem csupán a két érzékszervi fogyatékosság egyszerű összeadódása, hanem önálló fogyatékossági kategória, amelynek hatása jóval meghaladja a részfogyatékosságok külön-külön vett következményeit. A siketvak személy elsődlegesen tapintásos csatornán keresztül tájékozódik és kommunikál.',
  exp:'A siketvaság önálló kategória – nem az összeadódása a két sérülésnek; a siketvak személy elsősorban tapintásos csatornán kommunikál.'
},
{
  id:'def_w2_10', w:2, topic:'Olvasás-írás előfeltételei', type:'define', diff:2, points:2,
  q:'Mit jelent a fonológiai tudatosság, és miért előfeltétele az olvasás-írás tanulásának?',
  modelAnswer:'Auditív diszkrimináció és fonológiai tudatosság: A tanuló képes azonosítani és megkülönböztetni a hangokat, szótagokat, rímelő szavakat; felismeri, hogy a szavak hangokból épülnek fel. Ez az olvasás-írás alapvető előfeltétele, mert a betű-hang megfeleltetés megtanulásához szükséges a hangok tudatos észlelése.',
  exp:'A fonológiai tudatosság = hangok, szótagok, rímek azonosítása; a betű-hang megfeleltetés alapja, ezért az olvasás-írás előfeltétele.'
},
{
  id:'def_w2_11', w:2, topic:'Olvasás-írás szakaszai', type:'define', diff:2, points:2,
  q:'Jellemezze az olvasás-írás elsajátításának előábécés (logografikus) szakaszát!',
  modelAnswer:'Előábécés szakasz (logografikus szakasz): A gyermek még nem ismeri a betűket, de képes egyes szavakat globálisan, vizuális formájuk alapján felismerni (pl. a saját nevét, ismert márkaneveket). Ebben a szakaszban alakul ki a könyvek és a nyomtatott szöveg iránti érdeklődés, a bal-jobb olvasási irány érzékelése. A fejlesztés célja a fonológiai tudatosság, a vizuális diszkrimináció és a finommotorika előkészítése.',
  exp:'A logografikus szakaszban a gyermek még nem tud betűket, de szavakat globálisan felismer vizuális formájuk alapján.'
},
{
  id:'def_w2_12', w:2, topic:'Olvasás-írás szakaszai', type:'define', diff:2, points:2,
  q:'Jellemezze az olvasás-írás elsajátításának ábécés (alfabetikus) és ábécé utáni (ortografikus) szakaszát!',
  modelAnswer:'Ábécés szakasz: A tanuló elsajátítja a betű-hang megfeleltetést, és képessé válik szavakat dekódolni. Először betűnként olvas, majd szótagol, végül folyékonyabb szóolvasásig jut. CES tanulóknál ez a szakasz hosszabb és intenzívebb fejlesztést igényel. Ábécé utáni szakasz: A tanuló már szóegységenként, szóképek alapján olvas; a dekódolás automatizálódik, és a figyelem a szöveg tartalmára irányulhat. Megjelenik a helyesírási tudatosság.',
  exp:'Alfabetikus szakasz = betű-hang dekódolás; ortografikus szakasz = automatizált szóolvasás, figyelem a tartalomra irányul.'
},
{
  id:'def_w2_13', w:2, topic:'Inkluzív oktatás', type:'define', diff:2, points:2,
  q:'Mit jelent a sokféleség tiszteletének elve az inkluzív oktatásban?',
  modelAnswer:'A sokféleség tiszteletének elve: az inkluzív oktatás alapelve, amely szerint a különbségek nem problémák, hanem a tanulás természetes velejárói és gazdagító tényezők.',
  exp:'A különbségek nem problémák, hanem a tanulás természetes, gazdagító velejárói.'
},
{
  id:'def_w2_14', w:2, topic:'Inkluzív oktatás', type:'define', diff:2, points:2,
  q:'Mit jelent az együttműködés elve az inkluzív oktatásban?',
  modelAnswer:'Az együttműködés elve: az az inkluzív alapelv, amely szerint a sikeres inklúzió feltétele a pedagógusok, szakemberek, szülők és a helyi közösség összehangolt munkája.',
  exp:'A sikeres inklúzió feltétele a pedagógusok, szakemberek, szülők és a közösség összehangolt munkája.'
},
{
  id:'def_w2_15', w:2, topic:'Integrációs modellek', type:'define', diff:2, points:2,
  q:'Határozza meg a teljes integráció fogalmát!',
  modelAnswer:'Teljes integráció: olyan integrációs modell, amelyben a CES tanuló teljes munkaidőben a többségi osztályban tanul, a pedagógus és a támogató tanár együttműködésével.',
  exp:'A CES tanuló teljes munkaidőben a többségi osztályban tanul, támogató tanár közreműködésével.'
},
{
  id:'def_w2_16', w:2, topic:'Integrációs modellek', type:'define', diff:2, points:2,
  q:'Határozza meg a részleges integráció (vegyes modell) fogalmát!',
  modelAnswer:'Részleges integráció (vegyes modell): olyan integrációs modell, amelyben a CES tanuló bizonyos tantárgyakat a többségi osztályban tanul, más tantárgyakból pedig egyéni vagy kiscsoportos fejlesztő foglalkozáson vesz részt.',
  exp:'A CES tanuló egyes tantárgyakat a többségi osztályban, másokat egyéni/kiscsoportos fejlesztésen tanul.'
},
{
  id:'def_w2_17', w:2, topic:'Hallássérülés', type:'define', diff:2, points:2,
  q:'Jellemezze pedagógiai szempontból a nagyothalló tanulót!',
  modelAnswer:'Nagyothalló: 26–70 dB közötti hallásveszteséggel élő tanuló, aki hallókészülékkel vagy anélkül részlegesen érzékeli a hangokat; a beszédfejlődés érintett, de nem kizárt.',
  exp:'26–70 dB hallásveszteség; a hangokat részlegesen érzékeli, a beszédfejlődés érintett, de nem kizárt.'
},
{
  id:'def_w2_18', w:2, topic:'Hallássérülés', type:'define', diff:2, points:2,
  q:'Jellemezze pedagógiai szempontból a siket tanulót!',
  modelAnswer:'Siket: 70 dB feletti hallásveszteséggel élő személy, akinél a hangos beszéd hallás útján nem vagy alig érzékelhető; a kommunikáció elsősorban vizuális csatornán (jelnyelv, szájról olvasás) alapul.',
  exp:'70 dB feletti hallásveszteség; a hangos beszéd alig érzékelhető, a kommunikáció vizuális (jelnyelv, szájról olvasás).'
},
{
  id:'def_w2_19', w:2, topic:'Látássérülés', type:'define', diff:2, points:2,
  q:'Jellemezze pedagógiai szempontból a gyengénlátó tanulót!',
  modelAnswer:'Gyengénlátó: 10–33%-os látóélességgel élő tanuló, aki nagyítással és speciális eszközökkel képes a vizuális információ részleges befogadására; a nyomtatott szöveg módosított formában olvasható.',
  exp:'10–33%-os látóélesség; nagyítással részlegesen fogadja be a vizuális információt, a szöveg módosított formában olvasható.'
},
{
  id:'def_w2_20', w:2, topic:'Látássérülés', type:'define', diff:2, points:2,
  q:'Jellemezze pedagógiai szempontból a vak tanulót!',
  modelAnswer:'Vak: 10% alatti látóélességű vagy teljesen vak személy, akinél az oktatás elsősorban tapintásos és hallás útján valósul meg; Braille-írás és auditív eszközök szükségesek.',
  exp:'10% alatti látóélesség; az oktatás tapintásos és hallás útján zajlik, Braille-írással és auditív eszközökkel.'
},
{
  id:'def_w2_21', w:2, topic:'Demutizálás', type:'define', diff:2, points:2,
  q:'Határozza meg a totális kommunikáció fogalmát!',
  modelAnswer:'Totális kommunikáció: olyan kommunikációs módszer, amely egyszerre több csatornát alkalmaz – jelnyelvet, szájmozgást, hangos beszédet, gesztusokat, írást és képi kommunikációt –, és rugalmasan igazodik a tanuló kommunikációs szintjéhez és szükségletéhez.',
  exp:'Több csatornát (jelnyelv, szájmozgás, hangos beszéd, gesztus, írás, kép) egyszerre alkalmazó, rugalmas módszer.'
},
{
  id:'def_w2_22', w:2, topic:'Siketvakság', type:'define', diff:3, points:2,
  q:'Határozza meg a Lorm-ábécé fogalmát!',
  modelAnswer:'Lorm-ábécé: speciális tenyérírás-rendszer, amelyben a betűk a tenyér meghatározott pontjain tett érintéseknek felelnek meg; gyors és diszkrét kommunikációt tesz lehetővé, elsősorban siketvak személyek számára.',
  exp:'Tenyérírás-rendszer: a betűk a tenyér pontjain tett érintések; gyors, diszkrét kommunikáció siketvakoknak.'
},
{
  id:'def_w2_23', w:2, topic:'Olvasás-írás módszerek', type:'define', diff:3, points:2,
  q:'Határozza meg a fonetikus-analitikus-szintetikus módszer lényegét!',
  modelAnswer:'Fonetikus-analitikus-szintetikus módszer: elterjedt olvasás-írás-tanítási eljárás, amely három egymást kiegészítő folyamaton alapul: fonetikus alap (a hangzó nyelvre építés), analitikus eljárás (egész szó vagy mondat elemzése szótagokra, majd hangokra) és szintetikus eljárás (a megismert hangok és betűk összerakása szavakká, mondatokká).',
  exp:'Három folyamat: fonetikus alap (hangzó nyelv), analitikus (szó→szótag→hang), szintetikus (hang/betű→szó).'
},
{
  id:'def_w2_24', w:2, topic:'Segítő technológia', type:'define', diff:2, points:2,
  q:'Határozza meg az FM-rendszer fogalmát!',
  modelAnswer:'FM-rendszer (frekvenciamoduláción alapuló hangátviteli rendszer): hallássérült tanulók számára alkalmazott segítő technológia, amelyben a pedagógus mikrofonba beszél, és a jel közvetlenül a tanuló hallókészülékébe vagy fejhallgatójába kerül, kiküszöbölve a háttérzajt és a távolság miatti csillapítást.',
  exp:'Hangátviteli rendszer: a pedagógus hangja közvetlenül a hallókészülékbe kerül, kiküszöbölve a háttérzajt és a távolságot.'
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
// FOGALOMMEGHATÁROZÁSOK – 3. VÁLTOZAT (I–III. FELADAT)
// ══════════════════════════════════════════════
{
  id:'def_w3_01', w:3, topic:'Fogalommeghatározás', type:'define', diff:1, points:2,
  q:'Határozza meg az autizmus spektrum (ASD) fogalmát!',
  modelAnswer:'Autizmus spektrum (ASD): Neurofejlődési állapot, amelyet a szociális kommunikáció és interakció tartós nehézségei, valamint korlátozott, ismétlődő viselkedésminták és érdeklődési körök jellemeznek. Spektrumjellegű: az érintett személyek képességei és szükségletei rendkívül széles skálán mozognak.',
  exp:'Az ASD két fő jellemzője: (1) szociális kommunikáció és interakció nehézségei, (2) korlátozott, ismétlődő viselkedésminták. Spektrumjellegű állapot.'
},
{
  id:'def_w3_02', w:3, topic:'Fogalommeghatározás', type:'define', diff:1, points:2,
  q:'Határozza meg az ADHD (figyelemhiányos hiperaktivitás-zavar) fogalmát!',
  modelAnswer:'ADHD: Neurofejlődési állapot, amelynek fő jellemzői a figyelmetlenség, az impulzivitás és/vagy a hiperaktivitás, amelyek legalább két különböző környezetben (pl. otthon és iskolában) megjelennek, és jelentősen befolyásolják a mindennapi működést.',
  exp:'Az ADHD három fő tünete: figyelmetlenség, impulzivitás, hiperaktivitás – legalább két környezetben kell megjelennie.'
},
{
  id:'def_w3_03', w:3, topic:'Fogalommeghatározás', type:'define', diff:2, points:2,
  q:'Mit jelent a végrehajtó funkció fogalma?',
  modelAnswer:'Végrehajtó funkció: A frontális lebenyhez kötött magasabb rendű kognitív folyamatok összessége, amelyek a célirányos viselkedés tervezését, szervezését, indítását, monitorozását és rugalmas módosítását teszik lehetővé. Ide tartozik a munkamemória, az inhibíció, a kognitív rugalmasság és a tervezés.',
  exp:'A végrehajtó funkciók a frontális lebenyhez kötöttek; fő összetevői: munkamemória, inhibíció, kognitív rugalmasság, tervezés.'
},
{
  id:'def_w3_04', w:3, topic:'Fogalommeghatározás', type:'define', diff:2, points:2,
  q:'Mit jelent az önszabályozás fogalma a pszichopedagógiában?',
  modelAnswer:'Önszabályozás: Az egyén azon képessége, hogy tudatosan irányítsa érzelmeit, gondolatait és viselkedését a helyzetnek megfelelően. Magában foglalja az impulzusok gátlását, az érzelmek kezelését és a figyelmi erőforrások tudatos elosztását.',
  exp:'Az önszabályozás = impulzusgátlás + érzelemkezelés + figyelmi erőforrások tudatos elosztása.'
},
{
  id:'def_w3_05', w:3, topic:'Fogalommeghatározás', type:'define', diff:2, points:2,
  q:'Határozza meg a funkcionális viselkedéselemzés (FBA) fogalmát!',
  modelAnswer:'Funkcionális viselkedéselemzés (FBA): Olyan strukturált értékelési folyamat, amely egy problémás viselkedés mögöttes okát (funkcióját) azonosítja. Vizsgálja a viselkedést megelőző tényezőket (antecedensek), magát a viselkedést és annak következményeit (ABC-modell), hogy célzott intervenciós terv legyen kidolgozható.',
  exp:'Az FBA az ABC-modellen alapul: antecedensek – viselkedés – következmények; célja a viselkedés funkciójának azonosítása.'
},
{
  id:'def_w3_06', w:3, topic:'ABA / TEACCH / PECS', type:'define', diff:2, points:2,
  q:'Mi az ABA (Applied Behavior Analysis – Alkalmazott viselkedéselemzés) lényege?',
  modelAnswer:'ABA: A viselkedéslélektan elvein alapuló, strukturált intervenciós megközelítés. Kívánatos viselkedéseket megerősítéssel erősít meg, a nem kívánatosakat következetesen nem jutalmazza, miközben a helyettesítő viselkedést tanítja. A tanítás kis, mérhető lépésekre bontott, és adatokon alapuló folyamatos monitorozással kísért.',
  exp:'Az ABA lényege: megerősítésen alapuló, adatvezérelt, lépésekre bontott viselkedésfejlesztés.'
},
{
  id:'def_w3_07', w:3, topic:'ABA / TEACCH / PECS', type:'define', diff:2, points:2,
  q:'Mi a TEACCH-módszer lényege ASD tanulók fejlesztésében?',
  modelAnswer:'TEACCH: ASD tanulók számára strukturált tanulási környezetet és vizuálisan szervezett feladatrendszert kínál. Alapelve a „strukturált tanítás": az osztályterem fizikailag és időben egyaránt egyértelműen tagolt (munkaállomások, vizuális napi rend, feladatdobozok). Csökkenti a bizonytalanságból eredő szorongást és fejleszti az önálló munkavégzést.',
  exp:'A TEACCH alapelve a strukturált tanítás: vizuálisan és fizikailag tagolt környezet, napi rend, feladatdobozok – csökkenti a szorongást.'
},
{
  id:'def_w3_08', w:3, topic:'ABA / TEACCH / PECS', type:'define', diff:2, points:2,
  q:'Mi a PECS (Picture Exchange Communication System) lényege, és kinek szól?',
  modelAnswer:'PECS: Augmentatív és alternatív kommunikációs rendszer (AAC), amely a nem vagy alig verbális ASD tanulók számára képkártyák cseréjén alapuló kommunikációt tanít. Hat fázisban halad: a tanuló először egyetlen képet ad a kommunikációs partnernek egy kért tárgyért cserébe, majd fokozatosan bővül a mondatszerkesztés és a spontán kommunikáció felé.',
  exp:'A PECS nem verbális ASD tanulók AAC-rendszere; 6 fázisban tanít képcsere-alapú kommunikációt.'
},
{
  id:'def_w3_09', w:3, topic:'Kognitív stimuláció', type:'define', diff:2, points:2,
  q:'Határozza meg a kognitív stimuláció fogalmát!',
  modelAnswer:'Kognitív stimuláció: Tervezett, strukturált tevékenységrendszer, amely az egyén kognitív funkcióinak – figyelem, emlékezet, észlelés, gondolkodás, problémamegoldás, nyelv – fenntartását, fejlesztését vagy rehabilitációját célozza. CES tanulók esetén a meglévő képességekre épít, figyelembe véve a fejlődési szintet és a tanulási stílust.',
  exp:'A kognitív stimuláció tervezett tevékenységrendszer a kognitív funkciók (figyelem, emlékezet, gondolkodás) fejlesztésére vagy rehabilitációjára.'
},
{
  id:'def_w3_10', w:3, topic:'Autonómiafejlesztés', type:'define', diff:2, points:2,
  q:'Mit jelent a feladatelemzés (task analysis) módszere az autonómiafejlesztésben?',
  modelAnswer:'Feladatelemzés (task analysis): Összetett, több lépésből álló készségeket (pl. fogmosás, öltözködés) apró, egymást követő, mérhető lépésekre bontunk. Lehetővé teszi, hogy a tanuló lépésről lépésre sajátítsa el az egyes részeket, és a pedagógus pontosan azonosítani tudja, melyik lépésnél szorul segítségre.',
  exp:'A feladatelemzés összetett készséget apró, mérhető lépésekre bont – azonosítható, melyik lépésnél van szükség segítségre.'
},
{
  id:'def_w3_11', w:3, topic:'Autonómiafejlesztés', type:'define', diff:2, points:2,
  q:'Mit jelent a segítség fokozatos elhalványítása (prompt fading)?',
  modelAnswer:'Segítség fokozatos elhalványítása (prompt fading): Az intervenció kezdetén a tanuló intenzív segítséget kap (fizikai irányítás, modellezés, verbális utasítás). Ahogy a készség megszilárdul, a segítség fokozatosan csökken – fizikaiból gesztusra, majd verbális jelzésre, végül önálló végrehajtásra. Megakadályozza a segítségre való ráutaltsági állapot (prompt dependency) kialakulását.',
  exp:'A prompt fading lényege: intenzív segítségtől fokozatosan az önállóság felé haladás, a prompt dependency elkerülése érdekében.'
},
{
  id:'def_w3_12', w:3, topic:'Curriculum és UDL', type:'define', diff:2, points:2,
  q:'Határozza meg az univerzális tanulástervezés (UDL/DUA) fogalmát!',
  modelAnswer:'Univerzális tanulástervezés (UDL/DUA): Olyan tervezési keretrendszer, amely az oktatási tartalom, módszer és értékelés rugalmas, eleve sokféle tanulóra gondolt kialakítását célozza, csökkentve az utólagos adaptáció szükségességét. Alapelve: a különbség nem kivétel, hanem norma.',
  exp:'Az UDL/DUA elve: a tanítást eleve rugalmasan, sokféle tanulóra tervezni – a különbség norma, nem kivétel.'
},
{
  id:'def_w3_13', w:3, topic:'ASD-módszerek', type:'define', diff:2, points:2,
  q:'Határozza meg a szociális narratívák (Social Stories) módszerét!',
  modelAnswer:'Szociális narratívák (Social Stories): Carol Gray által kidolgozott módszer, amelynek lényege, hogy rövid, személyre szabott történeteken keresztül ismerteti meg a tanulóval egy adott szociális helyzet menetét, az elvárható viselkedést és a mások nézőpontját. Pedagógiai felhasználása: szociális helyzetek előkészítése, viselkedési elvárások tisztázása, szorongáscsökkentés.',
  exp:'Carol Gray módszere: rövid, személyre szabott történetek egy szociális helyzet menetéről és az elvárt viselkedésről.'
},
{
  id:'def_w3_14', w:3, topic:'Viselkedéstámogatás', type:'define', diff:2, points:2,
  q:'Határozza meg a pozitív viselkedéstámogatás (PBS) fogalmát!',
  modelAnswer:'Pozitív viselkedéstámogatás (PBS – Positive Behavior Support): proaktív, megelőző szemléletű megközelítés, amely a kívánatos viselkedések rendszeres megerősítésére, a tanulási környezet előzetes kialakítására és a tanuló erősségeire épít, ahelyett hogy kizárólag a problémás viselkedésekre reagálna büntető eszközökkel. Bizonyítékalapú, az emberi méltóságot tiszteletben tartó módszer, amely önszabályozást épít ki.',
  exp:'Proaktív, erősségalapú, bizonyítékalapú megközelítés: a kívánatos viselkedést erősíti, nem büntet; önszabályozást épít.'
},
{
  id:'def_w3_15', w:3, topic:'Logikai-matematikai', type:'define', diff:2, points:2,
  q:'Határozza meg az osztályozás (szeriáció) fogalmát a logikai-matematikai fejlesztésben!',
  modelAnswer:'Osztályozás: tárgyak vagy képek csoportosítása közös tulajdonság (szín, forma, méret, funkció) alapján. Alapvető logikai-matematikai művelet, amely a kategóriaalkotás és a fogalomalkotás előfeltétele.',
  exp:'Tárgyak/képek csoportosítása közös tulajdonság (szín, forma, méret, funkció) alapján.'
},
{
  id:'def_w3_16', w:3, topic:'Logikai-matematikai', type:'define', diff:2, points:2,
  q:'Határozza meg a sorozatalkotás (szeriálás) fogalmát!',
  modelAnswer:'Sorozatalkotás (szeriálás): tárgyak, képek vagy számok sorba rendezése növekvő vagy csökkenő sorrend szerint (pl. méret, magasság). A rendezettség és a mennyiségi viszonyok megértését alapozza meg.',
  exp:'Tárgyak, képek vagy számok sorba rendezése növekvő vagy csökkenő sorrend szerint.'
},
{
  id:'def_w3_17', w:3, topic:'Logikai-matematikai', type:'define', diff:3, points:2,
  q:'Határozza meg a megfeleltetés (bijekció) fogalmát!',
  modelAnswer:'Megfeleltetés (bijekció): elemek egy-egy-egy hozzárendelése két halmaz között, amely az egyenlő mennyiség fogalmának megalapozását szolgálja (pl. minden tányérhoz pontosan egy villát rendelünk).',
  exp:'Elemek egy-az-egyhez hozzárendelése két halmaz között; az egyenlő mennyiség fogalmát alapozza meg.'
},
{
  id:'def_w3_18', w:3, topic:'Logikai-matematikai', type:'define', diff:3, points:2,
  q:'Határozza meg a megmaradás elvének fogalmát!',
  modelAnswer:'Megmaradás elve: annak felismerése, hogy egy mennyiség nem változik meg pusztán attól, hogy más formában vagy elrendezésben jelenik meg (pl. azonos mennyiségű víz széles és keskeny pohárban).',
  exp:'Egy mennyiség nem változik pusztán a forma vagy elrendezés megváltozásától (Piaget).'
},
{
  id:'def_w3_19', w:3, topic:'Autonómia', type:'define', diff:2, points:2,
  q:'Határozza meg a személyes és társadalmi autonómia fogalmát!',
  modelAnswer:'Személyes és társadalmi autonómia: az egyén azon képessége, hogy mindennapi életének szükségleteit lehetőség szerint önállóan kielégítse, döntéseket hozzon saját életéről, és tevékeny tagja legyen közösségének. Fogyatékossággal élőknél a cél nem a teljes önellátás kényszere, hanem a lehető legmagasabb fokú függetlenség a személyes erősségek és segítő technológiák bevonásával.',
  exp:'A mindennapi szükségletek önálló kielégítésének és a döntéshozatalnak a képessége; cél a legmagasabb fokú függetlenség.'
},
{
  id:'def_w3_20', w:3, topic:'Autonómia', type:'define', diff:3, points:2,
  q:'Határozza meg a láncolás (chaining) módszerét!',
  modelAnswer:'Láncolás (chaining): a feladatelemzésen alapuló tanítási eljárás, amely a lépéseket egymáshoz kapcsolja. Előretartó láncolásnál a tanuló az első lépéstől kezd önállóan dolgozni, majd fokozatosan hozzáadódnak a többiek; visszatartó láncolásnál a pedagógus végzi minden lépést az utolsó kivételével, így a tanuló mindig a befejező lépésnél él át sikerélményt.',
  exp:'Feladatelemzésre épülő eljárás: előretartó (elölről) vagy visszatartó (a záró lépéstől) láncolással kapcsolja össze a lépéseket.'
},
{
  id:'def_w3_21', w:3, topic:'Curriculum és UDL', type:'define', diff:2, points:2,
  q:'Határozza meg a differenciált curriculum fogalmát!',
  modelAnswer:'Differenciált curriculum: az oktatási tartalom, folyamat, produktum és tanulási környezet tudatos, tanulóhoz igazított módosítása, amelynek célja, hogy a különböző képességszintű és tanulási stílusú tanulók mindegyike optimálisan fejlődhessen, miközben közös célok felé haladnak.',
  exp:'A tartalom/folyamat/produktum/környezet tanulóhoz igazított módosítása közös célok mellett.'
},
{
  id:'def_w3_22', w:3, topic:'Curriculum és UDL', type:'define', diff:2, points:2,
  q:'Határozza meg az adaptált curriculum fogalmát!',
  modelAnswer:'Adaptált curriculum: a többségi tantervtől tudatosan eltérő, egyéni szükségletekre szabott oktatási terv, amelyet CES tanulók számára dolgoznak ki. Csökkentett, módosított vagy alternatív célokat tartalmazhat, és az egyéni intervenciós terv (PIP) részét képezi.',
  exp:'A többségi tantervtől eltérő, egyéni szükségletekre szabott terv (csökkentett/módosított/alternatív célok); a PIP része.'
},
{
  id:'def_w3_23', w:3, topic:'Segítő technológia', type:'define', diff:2, points:2,
  q:'Határozza meg a segítő technológia (assistive technology) fogalmát!',
  modelAnswer:'Segítő technológia (assistive technology): minden olyan eszköz, szoftver vagy rendszer, amely fogyatékossággal élő személyek számára lehetővé teszi vagy megkönnyíti a tanulást, a kommunikációt vagy a mindennapi funkcionálást (pl. képernyőolvasó, kommunikációs tábla, szövegfelolvasó szoftver, adaptált billentyűzet).',
  exp:'Eszköz/szoftver/rendszer, amely a tanulást, kommunikációt vagy mindennapi funkcionálást teszi lehetővé/könnyíti meg.'
},
{
  id:'def_w3_24', w:3, topic:'Módszertan', type:'define', diff:2, points:2,
  q:'Határozza meg a multimédiás tanulás fogalmát!',
  modelAnswer:'Multimédiás tanulás: olyan tanítási-tanulási megközelítés, amely egyszerre több érzékszervi csatornán (vizuális, auditív, kinesztetikus) közvetíti az információt – képek, videók, hanganyagok, interaktív elemek kombinációjával –, hogy a különböző tanulási stílusú tanulók hatékonyabban sajátítsák el az ismereteket.',
  exp:'Az információ egyszerre több érzékszervi csatornán (kép, videó, hang, interaktív elem) való közvetítése.'
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
// FOGALOMMEGHATÁROZÁSOK – 4. VÁLTOZAT (I–III. FELADAT)
// ══════════════════════════════════════════════
{
  id:'def_w4_01', w:4, topic:'Fogalommeghatározás', type:'define', diff:1, points:2,
  q:'Határozza meg a hiányosság (deficiență) fogalmát!',
  modelAnswer:'Hiányosság (deficiență): Szervi vagy funkcionális szintű eltérés, károsodás, amely az egyén biológiai struktúráiban vagy funkcióiban jelenik meg. Az orvosi modell szerinti legalsó szint – pl. hallószervi károsodás vagy genetikai rendellenesség.',
  exp:'A hiányosság szervi/funkcionális szintű biológiai eltérés – az orvosi modell legalsó szintje.'
},
{
  id:'def_w4_02', w:4, topic:'Fogalommeghatározás', type:'define', diff:1, points:2,
  q:'Határozza meg a fogyatékosság (dizabilitate) fogalmát a biopszicho-szociális modell szerint!',
  modelAnswer:'Fogyatékosság (dizabilitate): Az egyén és a környezet kölcsönhatásából eredő funkcionális korlátok összessége, amelyek akadályozzák a teljes és egyenlő társadalmi részvételt. A modern (biopszicho-szociális) modell szerint a fogyatékosság nem kizárólag az egyénben, hanem a személy és az akadályozó környezet találkozásában keletkezik.',
  exp:'A fogyatékosság biopszicho-szociális modell szerint: nem az egyénben, hanem a személy és az akadályozó környezet kölcsönhatásában keletkezik.'
},
{
  id:'def_w4_03', w:4, topic:'Fogalommeghatározás', type:'define', diff:1, points:2,
  q:'Mit jelent a CES (Cerințe Educaționale Speciale – Sajátos nevelési igény) fogalma?',
  modelAnswer:'CES (Sajátos nevelési igény): Olyan oktatási kategória, amely azokat a tanulókat foglalja magában, akiknek tanulási, fejlődési vagy alkalmazkodási nehézségeik miatt a standard oktatási kereten túlmutató, személyre szabott pedagógiai támogatásra van szükségük. A CES szélesebb kategória, mint a fogyatékosság – magában foglalhatja a tanulási zavarokat, a magatartási nehézségeket és a szociális hátrányból eredő igényeket is.',
  exp:'A CES tágabb kategória a fogyatékosságnál: személyre szabott pedagógiai támogatást igénylő tanulók – tanulási zavar, magatartási nehézség, szociális hátrány is ide tartozhat.'
},
{
  id:'def_w4_04', w:4, topic:'Fogalommeghatározás', type:'define', diff:2, points:2,
  q:'Mit jelent a kompenzáció fogalma a pszichopedagógiában (Vigotszkij értelmezése szerint)?',
  modelAnswer:'Kompenzáció: Az a fejlődési folyamat, amelynek során a fogyatékossággal élő egyén meglévő, sértetlen funkcióit mozgósítja és fejleszti a sérült vagy hiányzó funkciók hatásának ellensúlyozására. Vigotszkij értelmezésében a kompenzáció nem automatikusan zajlik – megfelelő nevelői beavatkozást igényel.',
  exp:'A kompenzáció sértetlen funkciók fejlesztésével ellensúlyozza a hiányzó funkciókat – Vigotszkij szerint nem automatikus, nevelői beavatkozást igényel.'
},
{
  id:'def_w4_05', w:4, topic:'Fogalommeghatározás', type:'define', diff:2, points:2,
  q:'Mi a különbség a habilitáció és a rehabilitáció fogalma között?',
  modelAnswer:'Habilitáció: Olyan képességek és készségek kialakítása, amelyek a fogyatékossággal élő személynél soha nem fejlődtek ki (pl. kommunikációs készség kialakítása veleszületett siketségnél). Rehabilitáció: Korábban meglévő, majd elveszített funkciók visszaállítása (pl. stroke utáni beszédterápia).',
  exp:'Habilitáció = soha nem volt készség kialakítása; rehabilitáció = korábban meglévő, elveszített funkció visszaállítása.'
},
{
  id:'def_w4_06', w:4, topic:'Nyelv és beszéd', type:'define', diff:1, points:2,
  q:'Mi a különbség a nyelv és a beszéd fogalma között?',
  modelAnswer:'Nyelv: Társadalmilag kialakult, szabályrendszer által meghatározott szimbolikus kommunikációs rendszer; elvont, mentális reprezentáció – az emberi kommunikáció kódrendszere. Beszéd: A nyelv hangzó megvalósítása; a kommunikációs szándék artikulált, akusztikai formában való kivetítése – egyéni, motorikus tevékenység.',
  exp:'Nyelv = elvont, társadalmi kódrendszer; beszéd = ennek egyéni, motorikus, hangzó megvalósítása.'
},
{
  id:'def_w4_07', w:4, topic:'Nyelv és beszéd', type:'define', diff:2, points:2,
  q:'Határozza meg a nyelvi zavar fogalmát!',
  modelAnswer:'Nyelvi zavar: A nyelv megértésének és/vagy produkciójának tartós nehézsége, amely eltér az adott életkori normától, és nem magyarázható kizárólag hallássérüléssel, intellektuális fogyatékossággal vagy más domináns állapottal. Érintheti a fonológiai, morfológiai, szintaktikai, szemantikai vagy pragmatikai szintet.',
  exp:'A nyelvi zavar megértést és/vagy produkciót érintő, életkori normától eltérő tartós nehézség – érintheti a fonológiai, szintaktikai, szemantikai vagy pragmatikai szintet.'
},
{
  id:'def_w4_08', w:4, topic:'AAC', type:'define', diff:2, points:2,
  q:'Mi az augmentatív és alternatív kommunikáció (AAC) fogalma és indoklása?',
  modelAnswer:'AAC (Augmentatív és alternatív kommunikáció): A hangzó beszéd kiegészítése vagy helyettesítése olyan esetekben, amikor a személy nem képes szóban hatékonyan kommunikálni. Lehet alacsony technológiájú (képkártyák, kommunikációs táblák) vagy magas technológiájú (tablet alapú alkalmazások). Az AAC bevezetése nem akadályozza, hanem elősegíti a hangzó beszéd fejlődését, mivel csökkenti a kommunikációs frusztrációt.',
  exp:'Az AAC nem a hangzó beszéd feladása, hanem kiegészítése/helyettesítése – nem akadályozza, hanem elősegíti a verbális fejlődést.'
},
{
  id:'def_w4_09', w:4, topic:'Módszertan', type:'define', diff:2, points:2,
  q:'Mit jelent a modellálás (modelling) módszere a speciális pedagógiában?',
  modelAnswer:'Modellálás: A pedagógus vagy egy társas modell bemutatja a kívánt viselkedést, készséget vagy megoldásmódot – szóban, hangosan gondolkodva is kísérve a cselekvést. A modellálás mintát nyújt arra, hogyan kell gondolkodni és cselekedni egy feladathelyzetben. CES tanulók esetén a vizuálisan megerősített (pl. videómodellezés) forma különösen hatékony.',
  exp:'A modellálás bemutatással nyújt mintát a kívánt viselkedésre/készségre – CES tanulóknál a videómodellezés is hatékony forma.'
},
{
  id:'def_w4_10', w:4, topic:'Módszertan', type:'define', diff:2, points:2,
  q:'Mit jelent a láncolás (chaining) módszere, és melyek a fő formái?',
  modelAnswer:'Láncolás (chaining): A feladatelemzésen alapuló tanítási eljárás, amely a lépéseket egymáshoz kapcsolja. Előretartó láncolás: a tanuló az első lépéstől kezd önállóan dolgozni, fokozatosan adódnak hozzá a következők. Visszatartó láncolás: a pedagógus elvégzi az összes lépést, kivéve az utolsót – a tanuló mindig a befejező lépésnél él át sikerélményt, majd fokozatosan veszi át a korábbi lépések felelősségét.',
  exp:'A láncolás feladatelemzésen alapul; két formája: előretartó (első lépéstől) és visszatartó (utolsó lépéstől visszafelé).'
},
{
  id:'def_w4_11', w:4, topic:'Módszertan', type:'define', diff:1, points:2,
  q:'Mi a kooperatív tanulás lényege, és miért előnyös CES tanulók számára?',
  modelAnswer:'Kooperatív tanulás: Kis csoportokban, egymást segítve megoldott feladatok, ahol mindenki személyesen felelős a csoport sikeréért. Aktív részvételt, személyes felelősséget és társas tanulást igényel. CES tanulók számára előnyös, mert fenntartja a motivációt, fejleszti a szociális készségeket, és az önképet, önhatékonyság érzését erősíti.',
  exp:'A kooperatív tanulás kis csoportos, kölcsönös felelősségen alapuló módszer – CES tanulóknál erősíti a motivációt, szociális készségeket és önképet.'
},
{
  id:'def_w4_12', w:4, topic:'Módszertan', type:'define', diff:2, points:2,
  q:'Mi a különbség a hagyományos és az aktív-részvételi oktatási módszerek között?',
  modelAnswer:'Hagyományos módszerek: A tanár áll a tanítási folyamat középpontjában, az információ egyirányúan, a pedagógustól a tanuló felé áramlik – a tanuló befogadó szerepben van (pl. magyarázat, bemutatás). Aktív-részvételi módszerek: A tanuló aktív, cselekvő résztvevője a tanulásnak; a tudás felfedezésen, együttműködésen és tapasztalaton keresztül épül fel – a pedagógus facilitátorként vesz részt (pl. kooperatív tanulás, projektmunka).',
  exp:'Hagyományos = tanárközpontú, egyirányú (magyarázat, bemutatás); aktív-részvételi = tanulóközpontú, felfedezéses, együttműködésen alapuló (kooperatív, projekt).'
},
{
  id:'def_w4_13', w:4, topic:'Integrált terápia', type:'define', diff:3, points:2,
  q:'Határozza meg a komplex, integrált oktatási terápia jellegét!',
  modelAnswer:'Komplex, integrált oktatási terápia (terapia educațională complexă și integrată): holisztikus fejlesztési megközelítés, amely a CES tanuló oktatását, nevelését és terápiáját egyetlen, egységes keretben szervezi meg. Nem a tantárgyak és terápiás foglalkozások párhuzamos, független futtatását jelenti, hanem azok szerves integrációját: a fejlesztés minden mozzanata egyszerre pedagógiai és terápiás értékkel bír.',
  exp:'Holisztikus megközelítés: az oktatást, nevelést és terápiát egységes keretben, szervesen integrálva szervezi.'
},
{
  id:'def_w4_14', w:4, topic:'Nyelvi zavartípusok', type:'define', diff:3, points:2,
  q:'Határozza meg a dysarthria fogalmát!',
  modelAnswer:'Dysarthria: neurológiai károsodás (pl. cerebrális paresis) következtében kialakult motorikus beszédzavar, amelyet az artikulációs izmok gyengesége, spaszticitása vagy koordinációs zavara jellemez; a hangok torzítottak, a beszédtempó és a ritmus rendellenes.',
  exp:'Neurológiai károsodás miatti motorikus beszédzavar: gyenge/spasztikus artikulációs izmok, torzított hangok.'
},
{
  id:'def_w4_15', w:4, topic:'Nyelvi zavartípusok', type:'define', diff:3, points:2,
  q:'Határozza meg a specifikus nyelvi zavar (SLI/DLD) fogalmát!',
  modelAnswer:'Specifikus nyelvi zavar (SLI/DLD): a nyelvi fejlődés tartós zavara, amely elsősorban a grammatikai struktúrák elsajátítását érinti (rövid, egyszerűsített mondatstruktúrák, morfológiai hibák, korlátozott szintaktikai komplexitás), normál kognitív és szenzoros fejlődés mellett.',
  exp:'A nyelvi fejlődés tartós zavara (főleg a grammatika), normál kognitív és szenzoros fejlődés mellett.'
},
{
  id:'def_w4_16', w:4, topic:'Nyelvi zavartípusok', type:'define', diff:2, points:2,
  q:'Határozza meg az afázia fogalmát!',
  modelAnswer:'Afázia (szerzett nyelvi zavar): korábban normálisan fejlett nyelvhasználat elvesztése vagy súlyos korlátozódása agyi sérülés (stroke, traumás agysérülés, daganat) következtében; érintheti a produkciót (expresszív afázia) vagy a megértést (receptív afázia).',
  exp:'Korábban ép nyelvhasználat elvesztése agyi sérülés miatt; expresszív (produkció) vagy receptív (megértés) formában.'
},
{
  id:'def_w4_17', w:4, topic:'Nyelvi zavartípusok', type:'define', diff:2, points:2,
  q:'Határozza meg a (szelektív/elektív) mutizmus fogalmát!',
  modelAnswer:'Mutizmus (elektív mutizmus): szorongásos alapú állapot, amelyben a gyermek bizonyos szociális helyzetekben (pl. iskolában) képtelen megszólalni, miközben más kontextusokban (pl. otthon) normálisan kommunikál. Oka nem organikus, hanem pszichológiai – súlyos szociális szorongás.',
  exp:'Szorongásos állapot: a gyermek bizonyos helyzetekben nem szólal meg, máshol normálisan kommunikál; pszichológiai eredet.'
},
{
  id:'def_w4_18', w:4, topic:'Nyelvi zavarok', type:'define', diff:3, points:2,
  q:'Határozza meg a pragmatikai zavar fogalmát!',
  modelAnswer:'Pragmatikai zavar: a nyelv szociális használatának zavara – nehézség a kölcsönös párbeszéd fenntartásában, a metaforák és a nem szó szerinti tartalmak értelmezésében, valamint a kommunikációs kontextus rugalmas alkalmazásában; az ASD egyik meghatározó jellemzője.',
  exp:'A nyelv szociális használatának zavara (párbeszéd, metaforák, kontextus); az ASD meghatározó jellemzője.'
},
{
  id:'def_w4_19', w:4, topic:'Tanulási mechanizmusok', type:'define', diff:2, points:2,
  q:'Határozza meg az utánzás (imitáció) mint tanulási mechanizmus fogalmát!',
  modelAnswer:'Utánzás (imitáció): alapvető tanulási mechanizmus, amelynek során a tanuló megfigyel egy cselekvést vagy kommunikatív megnyilvánulást, majd reprodukálja azt. CES tanulóknál – különösen ASD esetén, ahol az imitáció spontán megjelenése korlátozott – szándékos, explicit fejlesztése a fejlesztés alapeleme.',
  exp:'Alapvető tanulási mechanizmus: egy cselekvés megfigyelése és reprodukálása; ASD-nál explicit tanítást igényel.'
},
{
  id:'def_w4_20', w:4, topic:'Tanulási mechanizmusok', type:'define', diff:2, points:2,
  q:'Határozza meg a feladatelemzés (task analysis) módszerét!',
  modelAnswer:'Feladatelemzés (task analysis): módszer, amelyben összetett, több lépésből álló készségeket apró, egymást követő, mérhető lépésekre bontunk. Minden lépés pontosan leírható, megfigyelhető és értékelhető, így a tanuló nem az egész feladattal szembesül egyszerre, és a pedagógus azonosítani tudja, melyik lépésnél szorul segítségre.',
  exp:'Összetett készség apró, mérhető lépésekre bontása; azonosítható, melyik lépésnél kell segítség.'
},
{
  id:'def_w4_21', w:4, topic:'Aktív módszerek', type:'define', diff:2, points:2,
  q:'Határozza meg a projektmunka mint aktív-részvételi módszer fogalmát!',
  modelAnswer:'Projektmunka: aktív-részvételi módszer, amelyben a tanulók egy valós, értelmes problémát oldanak meg több tantárgy integrálásával, önállóan szervezett keretek között; a tudás felfedezésen, együttműködésen és saját tapasztalaton keresztül épül fel.',
  exp:'Valós probléma megoldása több tantárgy integrálásával, önállóan szervezett, felfedezéses keretben.'
},
{
  id:'def_w4_22', w:4, topic:'Hagyományos módszerek', type:'define', diff:2, points:2,
  q:'Határozza meg a magyarázat (expozíció) mint hagyományos módszer fogalmát!',
  modelAnswer:'Magyarázat (expozíció, direkt oktatás): hagyományos módszer, amelyben a pedagógus szóban, strukturált és logikus sorrendben ismertet egy fogalmat, folyamatot vagy összefüggést; lehet induktív (példától az elvhez) vagy deduktív (elvtől a példához), és kérdésekkel ellenőrzi a megértést.',
  exp:'A pedagógus strukturált szóbeli ismertetése (induktív/deduktív), a megértés kérdésekkel ellenőrizve.'
},
{
  id:'def_w4_23', w:4, topic:'Oktatási eszközök', type:'define', diff:2, points:2,
  q:'Határozza meg az érzékszervi integrációs eszközök fogalmát!',
  modelAnswer:'Érzékszervi integrációs eszközök: súlyozott takarók, rezgő párnák, textúrázott felületek és más, proprioceptív és vesztibuláris ingereket nyújtó eszközök, amelyeket ASD és szenzoros feldolgozási zavarral élő tanulók idegrendszerének szabályozásához alkalmaznak.',
  exp:'Proprioceptív/vesztibuláris ingert adó eszközök (súlyozott takaró, rezgő párna) a szenzoros szabályozáshoz.'
},
{
  id:'def_w4_24', w:4, topic:'Logopédiai módszerek', type:'define', diff:3, points:2,
  q:'Határozza meg a Schultze-módszert (a nazális rezonancia fejlesztését)!',
  modelAnswer:'Schultze-módszer: az orrhangzósítással kapcsolatos kiejtési zavaroknál (pl. rhinolalia) alkalmazott logopédiai módszer, amely a levegőáram helyes irányítását és az orrüreg/szájüreg elválasztásának tudatosítását célozza (pl. tükörfogás gyakorlattal, amely vizuális visszajelzést ad a levegő kiszivárgásáról).',
  exp:'Orrhangzós kiejtési zavarokra: a levegőáram helyes irányítása és az orr-/szájüreg elválasztásának tudatosítása.'
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


// ══════════════════════════════════════════════
// FOGALOMMEGHATÁROZÁSOK – 5. VÁLTOZAT (I–III. FELADAT)
// ══════════════════════════════════════════════
{
  id:'def_w5_01', w:5, topic:'Fogalommeghatározás', type:'define', diff:1, points:2,
  q:'Határozza meg az etiológia fogalmát a pszichopedagógiában!',
  modelAnswer:'Etiológia: A fogyatékosságok, zavarok vagy betegségek okait, eredetét és kiváltó tényezőit vizsgáló tudományág. A pedagógiai gyakorlatban az etiológia ismerete segíti a megelőzést, a korai felismerést és a célzott intervenciót.',
  exp:'Az etiológia a fogyatékosságok okait vizsgálja – ismerete a megelőzést, korai felismerést és célzott intervenciót segíti.'
},
{
  id:'def_w5_02', w:5, topic:'Fogalommeghatározás', type:'define', diff:1, points:2,
  q:'Mi az endogén ok fogalma a fogyatékosságok etiológiájában?',
  modelAnswer:'Endogén ok: Belső, az egyén biológiai adottságaiból eredő tényező, amely fogyatékosságot vagy fejlődési eltérést okozhat. Ide tartoznak a genetikai rendellenességek, kromoszóma-anomáliák és öröklött anyagcsere-zavarok (pl. Down-szindróma, fenilketonúria).',
  exp:'Endogén ok = belső, biológiai/genetikai tényező (pl. Down-szindróma, kromoszóma-anomália).'
},
{
  id:'def_w5_03', w:5, topic:'Fogalommeghatározás', type:'define', diff:1, points:2,
  q:'Mi az exogén ok fogalma, és mikor hathat a fejlődésre?',
  modelAnswer:'Exogén ok: Külső, a környezetből érkező tényező, amely a fejlődést kedvezőtlenül befolyásolja. Lehet prenatális (pl. anyai fertőzés, mérgező anyagok), perinatális (pl. szülési trauma, oxigénhiány) vagy posztnatális (pl. agysérülés, súlyos elhanyagolás).',
  exp:'Exogén ok = külső tényező; három időszak: prenatális, perinatális, posztnatális.'
},
{
  id:'def_w5_04', w:5, topic:'Fogalommeghatározás', type:'define', diff:2, points:2,
  q:'Mit jelent a rizikótényező fogalma a fogyatékosságok kontextusában?',
  modelAnswer:'Rizikótényező: Olyan biológiai, pszichológiai vagy szociális körülmény, amely önmagában nem feltétlenül okoz fogyatékosságot, de jelentősen növeli annak valószínűségét (pl. koraszülöttség, alacsony születési súly, szülői szenvedélybetegség, szegénység).',
  exp:'A rizikótényező nem okoz bizonyosan fogyatékosságot, de növeli a valószínűségét – lehet biológiai, pszichológiai vagy szociális.'
},
{
  id:'def_w5_05', w:5, topic:'Fogalommeghatározás', type:'define', diff:2, points:2,
  q:'Határozza meg a szindróma fogalmát!',
  modelAnswer:'Szindróma: Tünetek, jelek és fejlődési jellemzők olyan együttese, amely rendszeresen együtt jelenik meg, és felismerhető, azonosítható klinikai képet alkot. A szindróma lehet genetikai (pl. Down-, Fragile X-szindróma), fejlődési (pl. Asperger) vagy szerzett (pl. Landau–Kleffner-szindróma).',
  exp:'A szindróma rendszeresen együtt megjelenő tünetek azonosítható együttese – lehet genetikai, fejlődési vagy szerzett.'
},
{
  id:'def_w5_06', w:5, topic:'Fejlődés és nevelés', type:'define', diff:2, points:2,
  q:'Mit ír le az interakcionista modell az öröklés, a környezet és a nevelés viszonyáról?',
  modelAnswer:'Az interakcionista modell szerint az öröklés (genetikai adottságok), a környezet (fizikai, szociális, kulturális körülmények) és a nevelés (tudatosan tervezett pedagógiai hatásrendszer) nem egymástól függetlenül, hanem folyamatos kölcsönhatásban alakítja a fejlődést. A genotípus csupán a fejlődési lehetőségek terét jelöli ki, nem a végeredményt.',
  exp:'Az interakcionista modell: öröklés + környezet + nevelés folyamatos kölcsönhatásban hat – a genotípus lehetőségtér, nem végeredmény.'
},
{
  id:'def_w5_07', w:5, topic:'Fejlődés és nevelés', type:'define', diff:2, points:2,
  q:'Mit jelent a kompenzációs fejlődés Vigotszkij értelmezésében?',
  modelAnswer:'Kompenzációs fejlődés: Az a folyamat, amelynek során a fogyatékossággal élő személy – megfelelő nevelés hatására – meglévő, sértetlen funkcióit mozgósítja és fejleszti a sérült vagy hiányzó funkciók hatásának ellensúlyozására. A kompenzáció nem a hiány eltüntetése, hanem az egyén funkcionális egészének más utakon való újjászervezése. Vigotszkij szerint nem automatikusan zajlik – nevelői beavatkozást igényel.',
  exp:'A kompenzációs fejlődés sértetlen funkciók erősítésével ellensúlyozza a hiányzó funkciókat – Vigotszkij szerint nevelői beavatkozást igényel.'
},
{
  id:'def_w5_08', w:5, topic:'Fejlődés és nevelés', type:'define', diff:2, points:2,
  q:'Mit jelent az elsajátított tehetetlenség (learned helplessness) fogalma CES tanulóknál?',
  modelAnswer:'Elsajátított tehetetlenség: Az a jelenség, amikor a tanuló – ismételt kudarcok, folyamatos külső segítség és a saját hatékonyság megtapasztalásának hiánya következtében – elveszíti a hitét abban, hogy erőfeszítéseivel képes befolyásolni a kimeneteleket. Feladja a próbálkozást, mielőtt megkísérelné a feladatot. CES tanulóknál komoly kockázat, ha a fejlesztés nem épít rendszeres sikerélményekre és nem biztosít valódi autonómiát.',
  exp:'Az elsajátított tehetetlenség: ismételt kudarcok után a tanuló feladja a próbálkozást – megelőzése: sikerélmény és autonómia biztosítása.'
},
{
  id:'def_w5_09', w:5, topic:'Fejlődés és nevelés', type:'define', diff:2, points:2,
  q:'Mit jelent a fejlődési plaszticitás (neuroplaszticitás) fogalma, és miért fontos a korai fejlesztésben?',
  modelAnswer:'Fejlődési plaszticitás (neuroplaszticitás): Az idegrendszer azon képessége, hogy a tapasztalatok, ingerek és beavatkozások hatására szerkezetileg és funkcionálisan átalakuljon. A csecsemő- és kisgyermekkorban a plaszticitás a legmagasabb, ezért a korai fejlesztő beavatkozás – különösen CES gyermekeknél – hatékonysága messze felülmúlja a késői intervenciókét.',
  exp:'A neuroplaszticitás az idegrendszer alakíthatósága – korai életévekben a legnagyobb, ezért a korai fejlesztés a leghatékonyabb.'
},
{
  id:'def_w5_10', w:5, topic:'Curriculum', type:'define', diff:1, points:2,
  q:'Határozza meg a curriculum fogalmát!',
  modelAnswer:'Curriculum: Az oktatás tervezésének, szervezésének és értékelésének átfogó rendszere, amely magában foglalja az oktatási célokat, tartalmakat, tanulási tevékenységeket, módszereket és értékelési eljárásokat. Tágabb értelemben a rejtett curriculumot is magában foglalja – azokat a normákat, elvárásokat és értékeket, amelyeket a tanuló az iskolai élet szövetéből elsajátít.',
  exp:'A curriculum az oktatás tervezésének átfogó rendszere (célok, tartalmak, módszerek, értékelés) + a rejtett curriculum (iskolai élet normái).'
},
{
  id:'def_w5_11', w:5, topic:'Curriculum', type:'define', diff:2, points:2,
  q:'Melyek a speciális curriculum főbb sajátosságai CES tanulók esetén?',
  modelAnswer:'Speciális curriculum sajátosságai: (1) Funkcionális és életszerű tartalmak hangsúlya (önkiszolgálás, kommunikáció, közlekedés). (2) Egyénre szabottság – a tanuló funkcionális profiljára épül, PIP dokumentálja, félévente felülvizsgálják. (3) Terápiás elemek integrációja (logopédia, pszichomotoros fejlesztés) az oktatási folyamatba. (4) Lassabb tempó, kisebb egységek, több ismétlés – az előrehaladás egyéni ütemhez, nem évfolyamhoz kötött.',
  exp:'A speciális curriculum 4 sajátossága: funkcionális tartalmak, egyénre szabottság (PIP), terápiás integráció, lassabb tempó.'
},
{
  id:'def_w5_12', w:5, topic:'Curriculum', type:'define', diff:2, points:2,
  q:'Mit jelent az operacionalizált cél fogalma, és melyek a fő elemei?',
  modelAnswer:'Operacionalizált cél: Pontosan meghatározott fejlesztési cél, amely megfigyelhető és mérhető viselkedésben fogalmazódik meg. Három kötelező eleme: (1) Megfigyelhető viselkedés – mit fog a tanuló tenni. (2) Feltétel – milyen körülmények között (eszköz, helyszín, segítség szintje). (3) Teljesítménykritérium – mikor tekinthető teljesítettnek (pl. 4-ből 3 alkalom, 80% pontosság).',
  exp:'Az operacionalizált cél 3 eleme: megfigyelhető viselkedés + feltétel + teljesítménykritérium (arány/pontosság + időkeret).'
},
{
  id:'def_w5_13', w:5, topic:'Fejlődési tényezők', type:'define', diff:2, points:2,
  q:'Határozza meg az öröklés szerepét a fejlődésben!',
  modelAnswer:'Öröklés: a genetikai állomány meghatározza az egyén biológiai adottságait, fejlődési lehetőségeinek kereteit és a különböző hatásokra való fogékonyságát (reakciónorma). Az öröklés nem sors: a genotípus csupán a fejlődési lehetőségek terét jelöli ki, nem a végeredményt.',
  exp:'A genetikai állomány meghatározza a biológiai adottságokat és a fejlődési lehetőségek keretét (reakciónorma), de nem a végeredményt.'
},
{
  id:'def_w5_14', w:5, topic:'Fejlődési tényezők', type:'define', diff:2, points:2,
  q:'Határozza meg a környezet szerepét a fejlődésben!',
  modelAnswer:'Környezet: a fizikai, szociális, kulturális és gazdasági körülmények összessége, amelyben a fejlődés zajlik. A szenzoros ingerek, az érzelmi biztonság, a táplálkozás, a lakókörnyezet minősége és a társas kapcsolatok mind formálják az idegrendszer érését és a személyiség alakulását.',
  exp:'A fejlődés fizikai, szociális, kulturális és gazdasági körülményeinek összessége, amely az idegrendszer érését és a személyiséget formálja.'
},
{
  id:'def_w5_15', w:5, topic:'Fejlődési tényezők', type:'define', diff:2, points:2,
  q:'Határozza meg a nevelés szerepét a fejlődésben!',
  modelAnswer:'Nevelés: tudatosan tervezett, célirányos hatásrendszer, amely az öröklés adta lehetőségeket a kedvező környezeti feltételek megteremtésével és pedagógiai beavatkozásokkal maximálisan igyekszik kibontakoztatni. A nevelés az egyetlen tényező, amelyre a pedagógus közvetlen ráhatással bír.',
  exp:'Tudatosan tervezett, célirányos hatásrendszer, amely az öröklött lehetőségeket kibontakoztatja; erre hat a pedagógus közvetlenül.'
},
{
  id:'def_w5_16', w:5, topic:'Etiológia', type:'define', diff:2, points:2,
  q:'Mit jelentenek a prevalenciaadatok, és mi a pedagógiai jelentőségük?',
  modelAnswer:'Prevalenciaadatok: az adott fogyatékossággal élő személyek aránya a népességen belül. Pedagógiai jelentőségük, hogy alapvető tervezési eszközök: segítségükkel meghatározható, hány CES tanulóval kell számolni, milyen szakemberigény és fejlesztő infrastruktúra szükséges; változásaik (pl. az ASD-diagnózisok növekedése) a képzési és támogatási rendszer fejlődési irányát jelzik.',
  exp:'A fogyatékossággal élők aránya a népességben; tervezési eszköz a szakember- és infrastruktúra-igény meghatározásához.'
},
{
  id:'def_w5_17', w:5, topic:'Szindrómák', type:'define', diff:2, points:2,
  q:'Jellemezze a Down-szindrómát (tünetek és pedagógiai következmény)!',
  modelAnswer:'Down-szindróma (trisomia 21): kromoszóma-anomália, amelyet enyhe–közepes intellektuális fogyatékosság (lassabb információfeldolgozás, gyenge rövidtávú memória, elvont gondolkodás nehézségei) és izomtónus-csökkenés (hipotónia) jellemez, ami a motoros fejlődést késlelteti. Pedagógiai következmény: lassabb tempó, sok ismétlés, vizuális megerősítés, konkrét manipulatív eszközök, rövid, egyszerű instrukciók.',
  exp:'Trisomia 21: enyhe–közepes intellektuális fogyatékosság + hipotónia; lassabb tempó, sok ismétlés, vizuális megerősítés.'
},
{
  id:'def_w5_18', w:5, topic:'Szindrómák', type:'define', diff:3, points:2,
  q:'Jellemezze a Fragile X-szindrómát (tünetek és pedagógiai következmény)!',
  modelAnswer:'Fragile X-szindróma (törékeny X-szindróma): örökletes állapot, amelyet intellektuális fogyatékosság (erős vizuális-téri feldolgozás, gyenge szekvenciális gondolkodás és munkamemória), valamint szociális szorongás, szemkontaktus-kerülés, szenzoros érzékenység, hiperaktivitás és impulzivitás jellemez (részleges átfedés az ASD-vel). Pedagógiai következmény: strukturált, kiszámítható környezet, a szenzoros ingerek csökkentése, a vizuális memória kihasználása.',
  exp:'Törékeny X: intellektuális fogyatékosság + szociális szorongás/szenzoros érzékenység; strukturált, ingerszegény környezet, vizuális erősségek.'
},
{
  id:'def_w5_19', w:5, topic:'Szindrómák', type:'define', diff:3, points:2,
  q:'Jellemezze a Prader–Willi-szindrómát (tünetek és pedagógiai következmény)!',
  modelAnswer:'Prader–Willi-szindróma: állapot, amelyet kontrollálatlan étvágy (hyperphagia) és elhízásra való fokozott hajlam, valamint enyhe–közepes intellektuális fogyatékosság (erős vizuális-téri képességek, gyenge rövidtávú memória, rugalmatlan gondolkodás, érzelmi szabályozási nehézségek) jellemez. Pedagógiai következmény: az étkezési rend szigorú strukturálása, pozitív viselkedéstámogató terv, a vizuális erősségek középpontba állítása.',
  exp:'Hyperphagia + enyhe–közepes intellektuális fogyatékosság; szigorú étkezési rend, PBS, vizuális erősségek.'
},
{
  id:'def_w5_20', w:5, topic:'Fogyatékossági kategóriák', type:'define', diff:2, points:2,
  q:'Határozza meg az intellektuális fogyatékosság fogalmát!',
  modelAnswer:'Intellektuális fogyatékosság: a kognitív funkciók és az adaptív viselkedés tartós, jelentős korlátozottsága (IQ általában 70 alatt), amely a fejlődési időszakban jelenik meg.',
  exp:'A kognitív funkciók és az adaptív viselkedés tartós, jelentős korlátozottsága (IQ ~70 alatt), fejlődési kezdettel.'
},
{
  id:'def_w5_21', w:5, topic:'Fogyatékossági kategóriák', type:'define', diff:2, points:2,
  q:'Határozza meg a mozgásfogyatékosság (motoros fogyatékosság) fogalmát!',
  modelAnswer:'Mozgásfogyatékosság (motoros fogyatékosság): a mozgásszervrendszer vagy az idegrendszer károsodásából eredő tartós motoros funkciókiesés (pl. cerebrális paresis, spina bifida).',
  exp:'A mozgásszervrendszer vagy idegrendszer károsodásából eredő tartós motoros funkciókiesés (pl. cerebrális paresis).'
},
{
  id:'def_w5_22', w:5, topic:'Curriculum', type:'define', diff:2, points:2,
  q:'Határozza meg az interdiszciplináris curriculum fogalmát!',
  modelAnswer:'Interdiszciplináris curriculum: több tantárgy tartalmát és szemléletmódját egyetlen, összefüggő tanulási egységbe integrálja, lebontva a hagyományos tantárgyi határokat (pl. „Az erdő" tematikus projekt, amelyben a természetismeret, a matematika, a rajz és az anyanyelv egyszerre jelenik meg).',
  exp:'Több tantárgy tartalmát egy összefüggő tanulási egységbe integrálja, lebontva a tantárgyi határokat.'
},
{
  id:'def_w5_23', w:5, topic:'Curriculum', type:'define', diff:2, points:2,
  q:'Határozza meg a moduláris curriculum fogalmát!',
  modelAnswer:'Moduláris curriculum: az oktatási tartalmat önálló, lezárható és tetszőleges sorrendben elvégezhető egységekre (modulokra) tagolja, amelyek rugalmasan kombinálhatók (pl. egy „Elsősegélynyújtás" modul önállóan elvégezhető és külön igazolható).',
  exp:'Az oktatási tartalom önálló, lezárható, rugalmasan kombinálható modulokra tagolása.'
},
{
  id:'def_w5_24', w:5, topic:'Etiológia', type:'define', diff:3, points:2,
  q:'Határozza meg a magzati alkohol-spektrum zavar (FASD) fogalmát!',
  modelAnswer:'Magzati alkohol-spektrum zavar (FASD): prenatális, alkohol okozta állapot (az alkohol a legismertebb teratogén anyag), amelynek következményei intellektuális fogyatékosság, figyelemzavar, a végrehajtó funkciók gyengesége, jellegzetes arcvonások és viselkedésszabályozási nehézségek.',
  exp:'Prenatális, alkohol (teratogén) okozta állapot: intellektuális fogyatékosság, figyelemzavar, jellegzetes arcvonások.'
},

// ══════════════════════════════════════════════
// FOGALOMMEGHATÁROZÁSOK – 6. VÁLTOZAT (I–III. FELADAT)
// ══════════════════════════════════════════════
{
  id:'def_w6_01', w:6, topic:'Fogalommeghatározás', type:'define', diff:2, points:2,
  q:'Határozza meg az intellektuális fogyatékosság fogalmát az AAIDD/DSM-5 alapján!',
  modelAnswer:'Intellektuális fogyatékosság (dizabilitate intelectuală): Olyan fejlődési állapot, amely az intellektuális működés jelentős, átlag alatti szintjében (IQ kb. 70 alatt) ÉS egyidejűleg az adaptív viselkedés legalább két területén (konceptuális, szociális, gyakorlati) mutatkozó korlátozottságban nyilvánul meg, és 18 éves kor előtt jelentkezik. A meghatározás lényege, hogy nem önmagában az IQ-szám dönt, hanem a mindennapi működőképesség.',
  exp:'Intellektuális fogyatékosság = átlag alatti intellektuális működés + adaptív viselkedés korlátozottsága (2 területen) + 18 éves kor előtti kezdet; nem csak az IQ dönt.'
},
{
  id:'def_w6_02', w:6, topic:'Fogalommeghatározás', type:'define', diff:1, points:2,
  q:'Mit jelent az adaptív viselkedés fogalma?',
  modelAnswer:'Adaptív viselkedés (comportament adaptativ): Azoknak a fogalmi (konceptuális), szociális és gyakorlati készségeknek az összessége, amelyeket az egyén a mindennapi élet önálló irányításához tanul meg és alkalmaz (pl. kommunikáció, önellátás, szociális szabályok követése, munkavégzés).',
  exp:'Az adaptív viselkedés a konceptuális, szociális és gyakorlati készségek összessége a mindennapi önálló életvitelhez.'
},
{
  id:'def_w6_03', w:6, topic:'Fogalommeghatározás', type:'define', diff:2, points:2,
  q:'Mit jelent a támogatási szükséglet fogalma az AAIDD megközelítésében?',
  modelAnswer:'Támogatási szükséglet (necesități de sprijin): Az az intenzitás és típus (időszakos, korlátozott, kiterjedt, átfogó – AAIDD szerint), amellyel a környezetnek segítenie kell az egyént ahhoz, hogy funkcionálni tudjon. A fogyatékosság súlyosságát ma inkább a szükséges támogatás mértékével, mint az IQ-val írjuk le.',
  exp:'A támogatási szükséglet a segítség intenzitása és típusa (időszakos → átfogó); ma ezzel írjuk le a súlyosságot, nem az IQ-val.'
},
{
  id:'def_w6_04', w:6, topic:'Fogalommeghatározás', type:'define', diff:2, points:2,
  q:'Határozza meg a ludoterápia fogalmát!',
  modelAnswer:'Ludoterápia (ludoterapie): A játékot mint terápiás és fejlesztő eszközt alkalmazó módszer, amelynek célja, hogy a gyermek – főként szimbolikus, szabad vagy irányított játéktevékenységen keresztül – kifejezze érzelmeit, feldolgozza tapasztalatait, és fejlessze kognitív, szociális, emocionális készségeit egy biztonságos, elfogadó terápiás kapcsolat keretében. Alapja, hogy a játék a gyermek „természetes nyelve”.',
  exp:'A ludoterápia a játékot terápiás-fejlesztő eszközként alkalmazza; alapja, hogy a játék a gyermek természetes nyelve.'
},
{
  id:'def_w6_05', w:6, topic:'Didaktikai játék', type:'define', diff:2, points:2,
  q:'Melyek a didaktikai játék négy alkotóeleme?',
  modelAnswer:'A didaktikai játék négy alkotóeleme: (1) Didaktikai cél – a fejlesztendő készség/tartalom pontos meghatározása. (2) Játékos tartalom (elemek) – a téma köré épített cselekvéses/fantáziaelem, amely motiválóvá teszi a feladatot. (3) Játékszabályok – az elvárt viselkedést, sorrendet, együttműködési módot rögzítő, egyértelmű keretek. (4) Játékos akció (eszközök, cselekvések) – a konkrét manipulatív tevékenység és eszközök, amelyekkel a tanuló dolgozik.',
  exp:'A didaktikai játék 4 alkotóeleme: didaktikai cél, játékos tartalom, játékszabályok, játékos akció (eszközök/cselekvések).'
},
{
  id:'def_w6_06', w:6, topic:'Tanulásszervezés', type:'define', diff:2, points:2,
  q:'Mit jelent a team-teaching (co-teaching) fogalma az integrált oktatásban?',
  modelAnswer:'Team-teaching (predare în echipă / co-teaching): Olyan tanulásszervezési forma, amelyben két (vagy több) pedagógus – például a szaktanár és a szakpszichopedagógus/segítő tanító – közös tervezéssel és felelősségmegosztással, egyidejűleg tart órát ugyanabban az osztályteremben. A szerepek rugalmasan, óráról órára cserélődhetnek (pl. „one teach, one support”, station-, parallel- vagy alternating teaching).',
  exp:'A team-teaching két vagy több pedagógus közös tervezésű, egyidejű órája ugyanabban a teremben, rugalmas szerepmegosztással.'
},
{
  id:'def_w6_07', w:6, topic:'Tanulásszervezés', type:'define', diff:2, points:2,
  q:'Mit jelent a többszintű tanulás (instruire diferențiată pe niveluri) fogalma?',
  modelAnswer:'Többszintű tanulás (învățare pe niveluri): Ugyanazon téma feldolgozása eltérő nehézségi és támogatási szinteken úgy, hogy minden tanuló a saját képességszintjén, de közös célhoz kapcsolódóan haladjon. Például egy szöveg feldolgozásánál az alap szint kiterjedt támogatással (képsorrend), a középszint segítséggel (kérdések, kulcsszó-térkép), a haladó szint önállóan (értelmezés, saját befejezés) dolgozik – mindhárom ugyanahhoz a közös célhoz kötődik.',
  exp:'A többszintű tanulás azonos témát dolgoz fel eltérő nehézségi/támogatási szinteken, közös célhoz kapcsolódva.'
},
{
  id:'def_w6_08', w:6, topic:'Intellektuális fogyatékosság', type:'define', diff:2, points:2,
  q:'Határozza meg a funkcionális készség fogalmát!',
  modelAnswer:'Funkcionális készség (abilitate funcțională): olyan, közvetlenül a mindennapi életben hasznosítható képesség (pl. öltözködés, pénzkezelés, közlekedés, egyszerű írás-olvasás alkalmazása), amely a tanuló önállóságát és társadalmi beilleszkedését szolgálja.',
  exp:'Közvetlenül a mindennapi életben hasznosítható képesség (öltözködés, pénzkezelés, közlekedés) az önállóságért.'
},
{
  id:'def_w6_09', w:6, topic:'Intellektuális fogyatékosság', type:'define', diff:3, points:2,
  q:'Határozza meg a tanulási potenciál fogalmát!',
  modelAnswer:'Tanulási potenciál (potențial de învățare): az egyén fejleszthetőségének, a megfelelő támogatás melletti fejlődési tartalékának mértéke; a Vigotszkij-féle legközelebbi fejlődési zóna (ZPD) elve alapján értelmezhető – nem a jelenlegi teljesítmény, hanem a segítséggel elérhető teljesítmény a mérvadó.',
  exp:'A fejleszthetőség, a támogatás melletti fejlődési tartalék mértéke (ZPD); a segítséggel elérhető teljesítmény a mérvadó.'
},
{
  id:'def_w6_10', w:6, topic:'Tanulásszervezés', type:'define', diff:2, points:2,
  q:'Határozza meg az egyéni tanulás (învățare individuală) fogalmát!',
  modelAnswer:'Egyéni tanulás (învățare individuală): olyan szervezési forma, amelyben a tanuló saját ütemében, személyre szabott feladatokkal, önállóan vagy egyéni tanári/segítő támogatással dolgozik, lehetővé téve a maximális differenciálást.',
  exp:'Szervezési forma: a tanuló saját ütemében, személyre szabott feladatokkal dolgozik – maximális differenciálás.'
},
{
  id:'def_w6_11', w:6, topic:'Tanulásszervezés', type:'define', diff:2, points:2,
  q:'Határozza meg a kiscsoportos tanulás (învățare în grupuri mici) fogalmát!',
  modelAnswer:'Kiscsoportos tanulás (învățare în grupuri mici): 3–6 fős, homogén vagy heterogén összetételű csoportokban zajló tevékenység, amely lehetővé teszi a kortárs interakciót és együttműködést, miközben a tanári figyelem még koncentrált maradhat.',
  exp:'3–6 fős csoportos forma: kortárs interakció és együttműködés, koncentrált tanári figyelem mellett.'
},
{
  id:'def_w6_12', w:6, topic:'Ludoterápia', type:'define', diff:2, points:2,
  q:'Jellemezze a gyakorlójáték (szenzomotoros játék) szakaszát!',
  modelAnswer:'Gyakorlójáték / szenzomotoros játék (kb. 0–2 év): a játékfejlődés első szakasza, amelyben ismétlődő, manipulatív, a testi mozgásra és érzékelésre épülő cselekvések jelennek meg (pl. tárgyak dobálása, rágcsálása).',
  exp:'0–2 év: ismétlődő, manipulatív, testi mozgásra és érzékelésre épülő játék.'
},
{
  id:'def_w6_13', w:6, topic:'Ludoterápia', type:'define', diff:2, points:2,
  q:'Jellemezze a szimbolikus (szerep-) játék szakaszát!',
  modelAnswer:'Szimbolikus / szerepjáték (kb. 2–7 év): a játékfejlődés szakasza, amelyben megjelenik a „mintha" játék, a szerepek felvétele és a tárgyak jelképes használata (pl. a seprű „lóvá" válik); ekkor jelenik meg a fantázia és az érzelmi feldolgozás lehetősége.',
  exp:'2–7 év: „mintha" játék, szerepfelvétel, tárgyak jelképes használata; a fantázia és érzelmi feldolgozás megjelenése.'
},
{
  id:'def_w6_14', w:6, topic:'Ludoterápia', type:'define', diff:2, points:2,
  q:'Jellemezze a szabályjáték szakaszát!',
  modelAnswer:'Szabályjáték (kb. 7 év felett): a játékfejlődés szakasza, amelyben a gyermek képes elfogadni és betartani előre rögzített szabályokat, együttműködni és versengeni társaival, ami az önszabályozás és a szociális kogníció fejlődését jelzi (Piaget nyomán).',
  exp:'7 év felett: előre rögzített szabályok betartása, együttműködés, versengés; az önszabályozás és szociális kogníció jele.'
},
{
  id:'def_w6_15', w:6, topic:'Ludoterápia', type:'define', diff:2, points:2,
  q:'Határozza meg a konstrukciós játék fejlesztő szerepét!',
  modelAnswer:'Konstrukciós játék (építőkockák, puzzle): olyan játékforma, amely fejleszti a téri-vizuális készségeket, a finommotorikát, a problémamegoldást és a kitartást.',
  exp:'Építőkocka/puzzle: téri-vizuális készségek, finommotorika, problémamegoldás és kitartás fejlesztése.'
},
{
  id:'def_w6_16', w:6, topic:'Intellektuális fogyatékosság', type:'define', diff:3, points:2,
  q:'Mit jelent a transzferálási nehézség intellektuális fogyatékosság esetén?',
  modelAnswer:'Transzferálási nehézség: a megtanultak új helyzetre, kontextusra való átvitelének nehezítettsége; ezért szükséges a tanultak tudatos, ismételt gyakoroltatása több eltérő helyzetben (a transzfer/általánosítás elősegítésére).',
  exp:'A megtanultak új helyzetre/kontextusra való átvitelének nehézsége; több helyzetben való gyakoroltatást igényel.'
},
{
  id:'def_w6_17', w:6, topic:'Intellektuális fogyatékosság', type:'define', diff:2, points:2,
  q:'Mit jelent az absztrakciós nehézség intellektuális fogyatékosság esetén?',
  modelAnswer:'Absztrakciós nehézség: az elvont fogalmak, általánosítások és szimbólumok megértésének korlátozottsága; a tanuló konkrét, szemléltetett tapasztalatra szorul az elvont tartalmak elsajátításához.',
  exp:'Az elvont fogalmak, általánosítások, szimbólumok korlátozott megértése; konkrét, szemléltetett tapasztalatot igényel.'
},
{
  id:'def_w6_18', w:6, topic:'Komplex értékelés', type:'define', diff:3, points:2,
  q:'Határozza meg a komplex értékelés (evaluare complexă) fogalmát!',
  modelAnswer:'Komplex értékelés (evaluare complexă, CJRAE/CMBRAE szinten): az intellektuális képességek, az adaptív viselkedés, a részvétel/szociális szerepek, az egészségi állapot és a kontextus együttes, csapatmunkában (pszichológus, pszichopedagógus, orvos, tanár, szociális munkás) történő vizsgálata; célja nem a „besorolás", hanem az egyénre szabott támogatási terv (PIP) megalapozása.',
  exp:'Az öt szempont csapatmunkában való együttes vizsgálata; célja nem a besorolás, hanem a PIP megalapozása.'
},
{
  id:'def_w6_19', w:6, topic:'Tanulási alapelvek', type:'define', diff:2, points:2,
  q:'Mit jelent a konkretizálás elve az intellektuális fogyatékosságú tanulók tanításában?',
  modelAnswer:'Konkretizálás: a tanulási folyamat alapelve, amely szerint az elvont tartalmakat mindig szemléltetéssel, valós tárgyakkal, képekkel és cselekvéssel kell közvetíteni, mielőtt a szimbolikus szintre lépnénk.',
  exp:'Az elvont tartalmak közvetítése szemléltetéssel, valós tárgyakkal és cselekvéssel a szimbolikus szint előtt.'
},
{
  id:'def_w6_20', w:6, topic:'Értékelés', type:'define', diff:3, points:2,
  q:'Határozza meg a kritériumalapú (curriculum-based) mérés fogalmát!',
  modelAnswer:'Kritériumalapú (curriculum-based) mérés: fejlődést mérő eljárás, amely nem a kortársakhoz, hanem a tanuló saját korábbi teljesítményéhez és az egyénre szabott célokhoz viszonyít.',
  exp:'Fejlődésmérés, amely a tanuló saját korábbi teljesítményéhez és egyéni céljaihoz viszonyít (nem a kortársakhoz).'
},

// ══════════════════════════════════════════════
// ESSZÉ KÉRDÉSEK – 6. VÁLTOZAT
// ══════════════════════════════════════════════
{
  id:'essay_w6_01', w:6, topic:'Intellektuális fogyatékosság', type:'essay', diff:3, points:5,
  q:'Ismertesse az intellektuális fogyatékosság komplex értékelésének öt szempontját a modern (AAIDD, ICF-alapú) megközelítésben!',
  modelAnswer:'A modern megközelítés multidimenzionális, nem kizárólag pszichometriai. Öt fő szempont:\n\n1. Intellektuális képességek: Standardizált intelligenciatesztekkel (pl. WISC) mért általános kognitív működés, figyelembe véve a mérési hibahatárt.\n\n2. Adaptív viselkedés: A konceptuális, szociális és gyakorlati készségek szintje, standardizált adaptív skálákkal (pl. Vineland) mérve.\n\n3. Részvétel, interakciók, szociális szerepek: Az egyén tényleges társadalmi beágyazottsága, kapcsolatai, szerepvállalása a családban, iskolában, közösségben (ICF részvételi dimenzió).\n\n4. Egészségi állapot: A fizikai és mentális egészség, esetleges társult zavarok (epilepszia, érzékszervi problémák, pszichiátriai komorbiditás) hatása a működésre.\n\n5. Kontextus: Környezeti (fizikai, szociális, attitűdbeli) és személyes tényezők, amelyek gátolhatják vagy elősegíthetik a részvételt (pl. iskolai hozzáférhetőség, családi támogatás, tanári attitűd).\n\nA komplex értékelés (evaluare complexă, CJRAE/CMBRAE szinten) ezen öt terület együttes, csapatmunkában (pszichológus, pszichopedagógus, orvos, tanár, szociális munkás) történő vizsgálatán alapul; a cél nem a „besorolás”, hanem az egyénre szabott támogatási terv (PIP) megalapozása.',
  exp:'Az 5 szempont: intellektuális képességek, adaptív viselkedés, részvétel/szociális szerepek, egészségi állapot, kontextus – csapatmunkában, a PIP megalapozására.'
},
{
  id:'essay_w6_02', w:6, topic:'Ludoterápia', type:'essay', diff:2, points:5,
  q:'Mutassa be a játék fejlődésének három szakaszát, és nevezzen meg három játékformát mint tanulási-fejlesztési lehetőséget!',
  modelAnswer:'A játék fejlődésének három szakasza (Piaget nyomán):\n\n1. Gyakorlójáték / szenzomotoros játék (kb. 0–2 év): Ismétlődő, manipulatív, a testi mozgásra és érzékelésre épülő cselekvések (pl. tárgyak dobálása, rágcsálása).\n\n2. Szimbolikus / szerepjáték (kb. 2–7 év): „Mintha” játék, szerepek felvétele, tárgyak jelképes használata (pl. a seprű „lóvá” válik); ekkor jelenik meg a fantázia és az érzelmi feldolgozás lehetősége.\n\n3. Szabályjáték (kb. 7 év felett): A gyermek képes elfogadni és betartani előre rögzített szabályokat, együttműködni és versengeni, ami az önszabályozás és a szociális kogníció fejlődését jelzi.\n\nHárom játékforma mint fejlesztési lehetőség:\n- Szimbolikus/szerepjáték: fejleszti a nyelvi kifejezőkészséget, empátiát, szociális szerepek megértését (pl. orvosos, boltos játék).\n- Konstrukciós játék (építőkockák, puzzle): fejleszti a téri-vizuális készségeket, finommotorikát, problémamegoldást, kitartást.\n- Szabályjáték / társasjáték: fejleszti a szabálykövetést, türelmet, kudarctűrést, együttműködést és a stratégiai gondolkodást.',
  exp:'A három szakasz: gyakorló-/szenzomotoros (0–2), szimbolikus/szerepjáték (2–7), szabályjáték (7+). Három forma: szerepjáték, konstrukciós, szabályjáték – mindegyik más készséget fejleszt.'
},

// ══════════════════════════════════════════════
// FOGALOMMEGHATÁROZÁSOK – 7. VÁLTOZAT (I–III. TÉTEL)
// ══════════════════════════════════════════════
{
  id:'def_w7_01', w:7, topic:'Fogalommeghatározás', type:'define', diff:2, points:2,
  q:'Határozza meg a specifikus tanulási zavar (SLD) fogalmát!',
  modelAnswer:'Specifikus tanulási zavar (SLD): Neurobiológiai eredetű, az iskoláskor elején jelentkező és élethosszig tartó állapot, amely az olvasás, írás vagy számolás alapkészségeinek elsajátítását tartósan és jelentősen nehezíti annak ellenére, hogy a tanuló intelligenciaszintje átlagos vagy átlag feletti, megfelelő oktatásban részesült, érzékszervei épek, és nem áll fenn súlyos szociokulturális depriváció. A diagnózis kizárásos és teljesítmény-diszkrepancia alapú kritériumokra, egyre inkább a válasz-a-beavatkozásra (RTI) modellre épül.',
  exp:'Az SLD neurobiológiai eredetű, tartós állapot, amely az olvasás/írás/számolás alapkészségeit nehezíti átlagos vagy átlag feletti intelligencia és ép érzékszervek mellett.'
},
{
  id:'def_w7_02', w:7, topic:'Fogalommeghatározás', type:'define', diff:1, points:2,
  q:'Határozza meg a diszlexia fogalmát!',
  modelAnswer:'Diszlexia: A specifikus olvasási zavar, amelyet a szóolvasás pontosságának és/vagy folyékonyságának tartós, az életkori elvárásoktól jelentősen elmaradó szintje jellemez, hátterében jellemzően fonológiai feldolgozási deficittel.',
  exp:'A diszlexia specifikus olvasási zavar: a szóolvasás pontossága/folyékonysága tartósan elmarad, hátterében fonológiai feldolgozási deficittel.'
},
{
  id:'def_w7_03', w:7, topic:'Fogalommeghatározás', type:'define', diff:2, points:2,
  q:'Határozza meg a diszkalkulia fogalmát!',
  modelAnswer:'Diszkalkulia: Specifikus számolási zavar, amely a számfogalom kialakulását, a számműveletek elsajátítását és a matematikai szimbólumrendszer, illetve a mennyiségi viszonyok megértését érinti tartósan. Jellemző tünete a mennyiség és a számjegy közötti azonnali megfeleltetés nehézsége (a szubitizáció hiánya) és a tartós ujjszámolás.',
  exp:'A diszkalkulia specifikus számolási zavar: a számfogalom, a műveletek és a mennyiségi viszonyok megértését érinti tartósan.'
},
{
  id:'def_w7_04', w:7, topic:'Alapfunkciók', type:'define', diff:2, points:2,
  q:'Mit jelent a fonológiai tudatosság, és miért fontos az iskolai tanulásban?',
  modelAnswer:'Fonológiai tudatosság: A beszédhangok tudatos felismerésének és manipulálásának (szegmentálás, szintézis, rímfelismerés) képessége. Az olvasás-írás elsajátításának alapvető előfeltétele; gyengesége szoros összefüggésben áll az olvasási nehézségekkel és a diszlexiával.',
  exp:'A fonológiai tudatosság a beszédhangok tudatos felismerése és manipulálása – az olvasás-írás alapfeltétele.'
},
{
  id:'def_w7_05', w:7, topic:'Alapfunkciók', type:'define', diff:2, points:2,
  q:'Mit jelent a munkamemória, és milyen tanulási következménye van a gyengeségének?',
  modelAnswer:'Munkamemória: Az információ rövid távú tárolásáért és egyidejű feldolgozásáért felelős rendszer. Gyenge munkamemória esetén a tanuló nehezen tudja követni a többlépéses utasításokat, és elveszíti a fonalat hosszabb szövegek vagy feladatok során.',
  exp:'A munkamemória az információ rövid távú tárolása és egyidejű feldolgozása; gyengesége a többlépéses utasítások követését nehezíti.'
},
{
  id:'def_w7_06', w:7, topic:'Értékelés', type:'define', diff:2, points:2,
  q:'Határozza meg a kritériumorientált és a normaorientált értékelés közötti különbséget!',
  modelAnswer:'Kritériumorientált értékelés: A tanuló teljesítményét előre meghatározott, konkrét követelményekhez/standardokhoz viszonyítjuk, függetlenül attól, hogy mások hogyan teljesítettek. Normaorientált értékelés: A tanuló teljesítményét a referenciacsoport (pl. osztálytársak, azonos korosztály) átlagos teljesítményéhez viszonyítjuk, relatív rangsorolást eredményezve.',
  exp:'Kritériumorientált = előre adott standardhoz viszonyít; normaorientált = a referenciacsoport átlagához viszonyít (relatív rangsor).'
},
{
  id:'def_w7_07', w:7, topic:'Értékelés', type:'define', diff:2, points:2,
  q:'Mit jelent az egyéni fejlődéshez viszonyított (ipszatív) értékelés, és miért fontos CES tanulóknál?',
  modelAnswer:'Ipszatív (egyéni fejlődéshez viszonyított) értékelés: A tanuló aktuális teljesítményét a saját korábbi teljesítményéhez viszonyítjuk, a fejlődés mértékét helyezve a középpontba. Különösen fontos a tanulási nehézséggel/zavarral küzdő tanulóknál, mert a haladást a tanuló saját kiindulópontjához mérve teszi láthatóvá és motiválóvá, nem a társakhoz hasonlítva.',
  exp:'Az ipszatív értékelés a tanuló saját korábbi teljesítményéhez viszonyít – a fejlődést teszi láthatóvá és motiválóvá.'
},
{
  id:'def_w7_08', w:7, topic:'Tanulási zavarok', type:'define', diff:2, points:2,
  q:'Határozza meg a diszgráfia fogalmát!',
  modelAnswer:'Diszgráfia: specifikus írászavar, amely érintheti az írás grafomotoros kivitelezését (betűformálás, íráskép rendezettsége) és/vagy a helyesírási készséget (ortográfiai kódolás).',
  exp:'Specifikus írászavar, amely az írás grafomotoros kivitelezését és/vagy a helyesírási készséget érinti.'
},
{
  id:'def_w7_09', w:7, topic:'Tanulási nehézség', type:'define', diff:2, points:2,
  q:'Határozza meg az (iskolai) tanulási nehézség fogalmát!',
  modelAnswer:'Tanulási nehézség: tágabb gyűjtőfogalom, amely bármely – átmeneti vagy tartós – okra (motivációs, érzelmi, módszertani, egészségügyi, családi, szociokulturális) visszavezethető lemaradást jelöl a tanulásban; nem feltételez neurobiológiai alapú, specifikus zavart, és megfelelő pedagógiai beavatkozással gyakran teljesen kompenzálható.',
  exp:'Tágabb gyűjtőfogalom bármely okra visszavezethető lemaradásra; nem neurobiológiai zavar, gyakran kompenzálható.'
},
{
  id:'def_w7_10', w:7, topic:'Alapfunkciók', type:'define', diff:3, points:2,
  q:'Határozza meg a végrehajtó funkciók fogalmát!',
  modelAnswer:'Végrehajtó funkciók: a tervezés, a gátlás, a kognitív rugalmasság és az önmonitorozás képességei, amelyek a célirányos, szervezett tanulási viselkedést teszik lehetővé; gyengeségük figyelmetlenséghez, impulzivitáshoz és szervezetlen munkavégzéshez vezet.',
  exp:'A tervezés, gátlás, kognitív rugalmasság és önmonitorozás képességei, amelyek a célirányos tanulást teszik lehetővé.'
},
{
  id:'def_w7_11', w:7, topic:'Alapfunkciók', type:'define', diff:2, points:2,
  q:'Határozza meg a verbális megértés fogalmát!',
  modelAnswer:'Verbális megértés: a nyelvi információ (szókincs, mondatszerkezet, szövegkohézió) feldolgozásának és értelmezésének képessége, amely minden tantárgy tanulásának alapja.',
  exp:'A nyelvi információ (szókincs, mondatszerkezet, szövegkohézió) feldolgozásának és értelmezésének képessége.'
},
{
  id:'def_w7_12', w:7, topic:'Alapfunkciók', type:'define', diff:2, points:2,
  q:'Határozza meg a feldolgozási sebesség fogalmát!',
  modelAnswer:'Feldolgozási sebesség: az információ gyors és automatikus feldolgozásának képessége; lassú feldolgozási sebesség esetén a tanuló több időt igényel az azonos feladatok elvégzéséhez, ami fáradáshoz és lemaradáshoz vezethet.',
  exp:'Az információ gyors, automatikus feldolgozásának képessége; lassúsága több időigényhez és fáradáshoz vezet.'
},
{
  id:'def_w7_13', w:7, topic:'Értékelés', type:'define', diff:2, points:2,
  q:'Határozza meg az objektív item fogalmát!',
  modelAnswer:'Objektív item: olyan értékelési feladat, amelynek egyértelmű, előre meghatározott helyes válasza van és gyorsan javítható (pl. feleletválasztós, igaz-hamis, párosítás). Főleg a felismerést méri; a téves válaszlehetőségek (disztraktorok) legyenek reálisak, a megfogalmazás egyértelmű.',
  exp:'Egyértelmű, előre meghatározott helyes válaszú, gyorsan javítható feladat; főleg a felismerést méri.'
},
{
  id:'def_w7_14', w:7, topic:'Értékelés', type:'define', diff:3, points:2,
  q:'Határozza meg a félig objektív item fogalmát!',
  modelAnswer:'Félig objektív item: olyan feladat, amelyre a válasz rövid, de nem előre megadott lehetőségek közül választandó (pl. rövid választ igénylő, kiegészítéses feladat). A kérdésfeltevés egyetlen helyes választ engedjen; a javítás kis mértékben szubjektív lehet a megfogalmazás változatossága miatt.',
  exp:'Rövid, de nem előre megadott választ igénylő feladat (kiegészítés); egyetlen helyes választ engedjen.'
},
{
  id:'def_w7_15', w:7, topic:'Értékelés', type:'define', diff:2, points:2,
  q:'Határozza meg a szubjektív item fogalmát!',
  modelAnswer:'Szubjektív item: szabad, önálló válaszalkotást igénylő feladat (pl. esszé, kifejtős feladat), amely magasabb rendű gondolkodási műveleteket (elemzés, érvelés, szintézis) mér. Az objektivitás növelésére részletes, pontokra bontott javítási útmutató (barem) szükséges.',
  exp:'Szabad válaszalkotást igénylő feladat (esszé), amely magasabb rendű gondolkodást mér; baremmel értékelt.'
},
{
  id:'def_w7_16', w:7, topic:'Értékelés', type:'define', diff:2, points:2,
  q:'Határozza meg a barem (pontozási útmutató) fogalmát!',
  modelAnswer:'Barem (pontozási/javítási útmutató): részletes, pontokra bontott értékelési útmutató, amely a szubjektív (kifejtős) itemek javításának objektivitását és a javítók közötti egyezést növeli azzal, hogy meghatározza, mely tartalmi elemekért hány pont jár.',
  exp:'Pontokra bontott javítási útmutató, amely a kifejtős itemek javításának objektivitását és a javítók egyezését növeli.'
},
{
  id:'def_w7_17', w:7, topic:'Értékelés', type:'define', diff:2, points:2,
  q:'Határozza meg a portfólió mint értékelési módszer fogalmát!',
  modelAnswer:'Portfólió: korszerű értékelési módszer, amely a tanuló saját munkáit gyűjti össze és időben követi a fejlődési folyamatot, lehetőséget adva a reflexióra. Korlátja, hogy időigényes összeállítani és értékelni, valamint nehezebben standardizálható.',
  exp:'Korszerű módszer: a tanuló munkáit gyűjti és időben követi a fejlődést; időigényes és nehezen standardizálható.'
},
{
  id:'def_w7_18', w:7, topic:'Értékelés', type:'define', diff:2, points:2,
  q:'Határozza meg a halo-effektus fogalmát az értékelésben!',
  modelAnswer:'Halo-effektus: értékelési torzítás, amelyben a tanulóról korábban kialakult általános benyomás (pl. „jó tanuló”) befolyásolja egy adott feladat objektív megítélését.',
  exp:'Értékelési torzítás: a korábbi általános benyomás befolyásolja egy konkrét feladat objektív megítélését.'
},
{
  id:'def_w7_19', w:7, topic:'Értékelés', type:'define', diff:3, points:2,
  q:'Határozza meg az elvárás-hatás (Pygmalion-effektus) fogalmát!',
  modelAnswer:'Elvárás-hatás (Pygmalion-effektus): értékelési torzítás, amelyben a pedagógus előzetes elvárásai (pl. a CES-besorolás ismerete) tudattalanul befolyásolják az értékelés szigorát vagy engedékenységét.',
  exp:'Értékelési torzítás: a pedagógus előzetes elvárásai tudattalanul befolyásolják az értékelés szigorát.'
},
{
  id:'def_w7_20', w:7, topic:'Fejlesztési módszerek', type:'define', diff:3, points:2,
  q:'Határozza meg a multiszenzoros, Orton-Gillingham elvű nyelvi fejlesztés fogalmát!',
  modelAnswer:'Multiszenzoros, strukturált-szekvenciális nyelvi fejlesztés (Orton-Gillingham elvű megközelítés): a betű-hang megfeleltetést egyidejűleg vizuális, auditív, kinesztetikus és taktilis csatornán tanítja, hogy a mozgásos memória is megerősítse a vizuális-auditív kapcsolatot.',
  exp:'A betű-hang megfeleltetést egyszerre vizuális, auditív, kinesztetikus és taktilis csatornán tanító, strukturált fejlesztés.'
},

// ══════════════════════════════════════════════
// ESSZÉ KÉRDÉSEK – 7. VÁLTOZAT
// ══════════════════════════════════════════════
{
  id:'essay_w7_01', w:7, topic:'Azonosítás', type:'essay', diff:3, points:5,
  q:'Ismertesse a specifikus tanulási zavar azonosításának és komplex értékelésének négy alapvető lépését!',
  modelAnswer:'A folyamat négy lépése:\n\n1. Észlelés / szűrés: Az osztálytanító, szülő vagy óvodapedagógus jelzése, illetve standardizált szűrőeljárások (pl. olvasási sebesség és pontosság mérése) alapján felmerülő gyanú rögzítése.\n\n2. Beutalás és előzetes konzultáció: A tanuló irányítása a CJRAE/CMBRAE iskolapszichológusához vagy logopédusához, a szülői beleegyezés megszerzése.\n\n3. Komplex, multidiszciplináris kivizsgálás: A kognitív képességek felmérése (pl. WISC-típusú intelligenciateszt), specifikus pszichopedagógiai próbák az olvasás/írás/számolás területén, pedagógiai megfigyelés, a tanulói produktumok elemzése, valamint orvosi kizáró vizsgálatok (látás, hallás).\n\n4. Diagnózis és beavatkozási terv: A diagnózis megfogalmazása és az egyéni beavatkozási terv (Plan de Intervenție Personalizat – PIP) kidolgozása, a család és a pedagógusok tájékoztatása, tanácsadása, szükség esetén az igazoló dokumentum (certificat de orientare școlară și profesională) kiállítása.',
  exp:'A négy lépés: 1. észlelés/szűrés, 2. beutalás és konzultáció (CJRAE/CMBRAE, szülői beleegyezés), 3. komplex multidiszciplináris kivizsgálás, 4. diagnózis és PIP kidolgozása.'
},
{
  id:'essay_w7_02', w:7, topic:'Értékelés', type:'essay', diff:3, points:5,
  q:'Fejtse ki, hogyan kell a pedagógusnak megterveznie és adaptálnia az értékelést CES-besorolású tanulók esetében!',
  modelAnswer:'A CES-besorolású tanulók értékelésének tervezésekor a pedagógusnak a PIP-ben rögzített egyéni célokhoz kell igazítania:\n\n- az értékelési módszert (pl. szóbeli helyett írásbeli, vagy fordítva, a tanuló zavarának megfelelően);\n- az item-típusokat (pl. objektív itemek túlsúlya diszgráfiás tanulónál, aki nehezen ír hosszan);\n- az időkeretet (hosszabb idő biztosítása) és a segédeszközök használatát (pl. számolótábla, felolvasás, billentyűzet).\n\nAlapelv, hogy az értékelés a tanuló tudását és fejlődését mérje, ne pedig a fogyatékosságából/zavarából eredő korlátait büntesse. Ehhez ajánlott az egyéni fejlődéshez viszonyított (ipszatív) értékelés alkalmazása. Kerülni kell az értékelési torzításokat (halo-effektus, Pygmalion-/elvárás-hatás), és biztosítani kell az etikai követelményeket: az értékelési szempontok előzetes, érthető kommunikálását, valamint az adaptált feltételek diszkrimináció és megbélyegzés nélküli, következetes biztosítását. Mindez összhangban áll a román oktatási jogszabályi kerettel (Legea Educației Naționale nr. 1/2011 és a CES-tanulókra vonatkozó miniszteri rendeletek), amely előírja az egyéniesített, adaptált értékelést.',
  exp:'Az értékelést a PIP céljaihoz kell igazítani: módszer, item-típus, időkeret és segédeszközök adaptálása; ipszatív szemlélet; a torzítások (halo, Pygmalion) kerülése; etikus, megbélyegzésmentes lebonyolítás.'
},

// ══════════════════════════════════════════════
// FOGALOMMEGHATÁROZÁSOK – 8. VÁLTOZAT
// (Motoros/neuromotoros/halmozott fogyatékosság · Korai intervenció · Segítő technológiák)
// ══════════════════════════════════════════════
{
  id:'def_w8_01', w:8, topic:'Motoros fogyatékosság', type:'define', diff:2, points:2,
  q:'Határozza meg a motoros fogyatékosság (deficiență motorie) fogalmát!',
  modelAnswer:'Motoros fogyatékosság (deficiență motorie): olyan tartós állapot, amely a mozgásszervrendszer (csontok, izmok, ízületek) vagy az idegrendszer mozgásszabályozó funkcióinak károsodásából ered, és jelentősen korlátozza a helyváltoztatást, a testtartás fenntartását és/vagy a finommotoros tevékenységeket. Lehet veleszületett (pl. végtaghiány, gerincvelő-dysraphia) vagy szerzett (baleset, betegség következménye).',
  exp:'Tartós állapot a mozgásszervrendszer vagy az idegrendszer mozgásszabályozó funkcióinak károsodásából; korlátozza a helyváltoztatást, testtartást, finommotorikát; lehet veleszületett vagy szerzett.'
},
{
  id:'def_w8_02', w:8, topic:'Neuromotoros zavar', type:'define', diff:2, points:2,
  q:'Határozza meg a neuromotoros zavar fogalmát!',
  modelAnswer:'Neuromotoros zavar: a központi vagy perifériás idegrendszer károsodásából eredő mozgászavar, amelynél az izomtónus szabályozása, a mozgáskoordináció, az egyensúly vagy a mozgástervezés (praxis) sérül. Ide tartozik pl. a cerebrális parézis, a spina bifida neurológiai vetülete, egyes neuromuszkuláris betegségek (pl. izomdisztrófia).',
  exp:'Az idegrendszer károsodásából eredő mozgászavar: sérül az izomtónus-szabályozás, a koordináció, az egyensúly vagy a mozgástervezés (pl. CP, izomdisztrófia).'
},
{
  id:'def_w8_03', w:8, topic:'Cerebrális parézis', type:'define', diff:2, points:2,
  q:'Határozza meg a cerebrális parézis (CP, infantilis agyi bénulás) fogalmát!',
  modelAnswer:'Cerebrális parézis (CP, infantilis agyi bénulás): nem progresszív, de a fejlődés során változó megjelenésű mozgás- és testtartászavar-együttes, amely a fejlődő agy (magzati vagy csecsemőkori) károsodásából ered. Gyakran társulnak hozzá érzékelési, kognitív, kommunikációs, viselkedési zavarok és epilepszia.',
  exp:'Nem progresszív, de változó megjelenésű mozgás- és testtartászavar a fejlődő agy károsodásából; gyakran társulnak érzékelési, kognitív, kommunikációs zavarok és epilepszia.'
},
{
  id:'def_w8_04', w:8, topic:'Halmozott fogyatékosság', type:'define', diff:3, points:2,
  q:'Határozza meg a halmozott fogyatékosság (plurihandicap) fogalmát!',
  modelAnswer:'Halmozott fogyatékosság (dizabilitate multiplă/plurihandicap): két vagy több, egymástól minőségileg különböző fogyatékossági terület (pl. motoros + értelmi, vagy motoros + érzékszervi) egyidejű fennállása ugyanazon személynél, ahol a területek kölcsönösen felerősítik egymás hatását, ezért a támogatási szükséglet nem az egyes fogyatékosságok összegeként, hanem minőségileg új, komplex profilként értelmezendő.',
  exp:'Két vagy több, minőségileg különböző fogyatékossági terület egyidejű fennállása, amelyek kölcsönösen felerősítik egymást — a támogatás minőségileg új, komplex profil, nem az egyes területek összege.'
},
{
  id:'def_w8_05', w:8, topic:'Funkcionális mobilitás', type:'define', diff:2, points:2,
  q:'Határozza meg a funkcionális mobilitás fogalmát!',
  modelAnswer:'Funkcionális mobilitás: az a gyakorlati képesség, amellyel a személy a mindennapi élet helyzeteiben biztonságosan és hatékonyan változtat helyzetet és helyet (pl. ágyból székbe ülés, teremben közlekedés, lépcsőhasználat) — függetlenül attól, hogy ez önálló járással, segédeszközzel vagy kerekesszékkel valósul meg. A hangsúly a tevékenységi szintű teljesítményen van, nem a mozgásminta normalitásán.',
  exp:'A mindennapi helyzetekben való biztonságos, hatékony helyzet- és helyváltoztatás gyakorlati képessége; a hangsúly a tevékenységi teljesítményen van, nem a mozgásminta normalitásán.'
},
{
  id:'def_w8_06', w:8, topic:'Cerebrális parézis', type:'define', diff:2, points:2,
  q:'Határozza meg a spasztikus cerebrális parézis fogalmát!',
  modelAnswer:'Spasztikus CP: a cerebrális parézis leggyakoribb típusa, amelyet fokozott izomtónus és jellegzetes, „ollózó” mozgásminta jellemez. Pedagógiai következménye, hogy az írási-rajzolási feladatoknál adaptált eszközökre (vastagított ceruzafogó, dőlt írólap, digitális alternatíva) és hosszabb végrehajtási időre van szükség, valamint az ülő testtartás stabilizálása elengedhetetlen a figyelem fenntartásához.',
  exp:'A leggyakoribb CP-típus: fokozott izomtónus, „ollózó” mozgásminta; adaptált íróeszközöket, hosszabb időt és stabil testtartást igényel.'
},
{
  id:'def_w8_07', w:8, topic:'Cerebrális parézis', type:'define', diff:3, points:2,
  q:'Határozza meg a dyskinetikus/atetoid cerebrális parézis fogalmát!',
  modelAnswer:'Dyskinetikus/atetoid CP: cerebrális parézis-típus, amelyet ingadozó izomtónus és akaratlan, célra nem irányuló mozgások jellemeznek, gyakran érintett az artikuláció. Pedagógiai következménye, hogy a kommunikáció támogatására augmentatív-alternatív kommunikációs (AAC) eszközök bevezetése indokolt lehet, és a feladatvégzéshez stabil, rögzített munkafelület és testhelyzet szükséges, mert a mozgások kontrollálatlansága rontja a pontosságot.',
  exp:'Ingadozó tónus, akaratlan, célra nem irányuló mozgások, gyakran érintett artikuláció; AAC-eszközök és rögzített munkafelület indokolt.'
},
{
  id:'def_w8_08', w:8, topic:'Cerebrális parézis', type:'define', diff:3, points:2,
  q:'Határozza meg az ataxiás cerebrális parézis fogalmát!',
  modelAnswer:'Ataxiás CP: cerebrális parézis-típus, amelyet egyensúly- és koordinációzavar, bizonytalan, széles alapú járás és célzási nehézség jellemez. Pedagógiai következménye, hogy a téri tájékozódást és egyensúlyt igénylő tevékenységeknél (pl. testnevelés, közlekedés a teremben) fokozott biztosításra és lassabb tempóra van szükség, az írásnál pedig a vonalvezetés bizonytalansága miatt vastagabb vonalú, nagyobb méretű feladatlapok segítenek.',
  exp:'Egyensúly- és koordinációzavar, széles alapú járás, célzási nehézség; fokozott biztosítást, lassabb tempót és nagyobb méretű feladatlapokat igényel.'
},
{
  id:'def_w8_09', w:8, topic:'Korai intervenció', type:'define', diff:2, points:3,
  q:'Határozza meg a korai intervenció (intervenție timpurie) fogalmát!',
  modelAnswer:'A korai intervenció (intervenție timpurie) azoknak a koordinált, család- és gyermekközpontú szolgáltatásoknak az összessége, amelyeket a fejlődési kockázatnak kitett vagy már azonosított fejlődési eltéréssel/fogyatékossággal élő kisgyermek (jellemzően 0–6/7 éves kor) és családja számára nyújtanak, azzal a céllal, hogy a fejlődés legérzékenyebb (plaszticitás szempontjából legkedvezőbb) időszakában segítsék elő a gyermek fejlődési potenciáljának kibontakozását, megelőzzék a másodlagos nehézségek kialakulását, és megerősítsék a család kompetenciáit.',
  exp:'Koordinált, család- és gyermekközpontú szolgáltatások 0–6/7 éves, kockázatnak kitett vagy eltéréssel élő gyermek és családja számára; a plaszticitás időszakát használja, megelőz és megerősíti a családot.'
},
{
  id:'def_w8_10', w:8, topic:'Értékelés a korai intervencióban', type:'define', diff:2, points:2,
  q:'Határozza meg a szűrés (screening) fogalmát a korai intervenció kontextusában!',
  modelAnswer:'Szűrés (screening): rövid, gyors, széles populáción alkalmazható eljárás (pl. fejlődési kérdőívek, szűrőtesztek), amelynek célja nem a diagnózis felállítása, hanem annak jelzése, hogy szükséges-e részletesebb kivizsgálás. Alacsony specificitású, de magas érzékenységű eszköz.',
  exp:'Rövid, gyors, széles populáción alkalmazott jelzőeljárás; nem diagnózist ad, hanem a további kivizsgálás szükségességét jelzi; magas érzékenység, alacsony specificitás.'
},
{
  id:'def_w8_11', w:8, topic:'Értékelés a korai intervencióban', type:'define', diff:3, points:2,
  q:'Határozza meg a diagnosztikus értékelés (evaluare complexă/diagnostică) fogalmát!',
  modelAnswer:'Diagnosztikus értékelés (evaluare complexă/diagnostică): részletes, több szakterületet (pszichológia, orvosi terület, logopédia, pszichopedagógia) bevonó folyamat, amely a román rendszerben jellemzően a CJRAE/CMBRAE komplex kiértékelő szolgálatán keresztül zajlik, és amelynek eredménye a fogyatékosság/CES típusának és fokának megállapítása, valamint a szolgáltatási terv (plan de servicii individualizat, PSI) alapja.',
  exp:'Részletes, multidiszciplináris folyamat (CJRAE/CMBRAE); megállapítja a fogyatékosság/CES típusát és fokát, és megalapozza a szolgáltatási tervet (PSI).'
},
{
  id:'def_w8_12', w:8, topic:'Értékelés a korai intervencióban', type:'define', diff:2, points:2,
  q:'Határozza meg a fejlődésmonitorozás (monitorizarea dezvoltării) fogalmát!',
  modelAnswer:'Fejlődésmonitorozás (monitorizarea dezvoltării): folyamatos, ismétlődő nyomon követés a program teljes időtartama alatt, amely nem egyszeri döntést, hanem a célok és módszerek rendszeres felülvizsgálatát és korrekcióját szolgálja.',
  exp:'Folyamatos, ismétlődő nyomon követés a program egésze alatt; a célok és módszerek rendszeres felülvizsgálata és korrekciója, nem egyszeri döntés.'
},
{
  id:'def_w8_13', w:8, topic:'Team-munka', type:'define', diff:3, points:2,
  q:'Határozza meg a transzdiszciplináris team-modell fogalmát (a key worker szerepével)!',
  modelAnswer:'Transzdiszciplináris team-modell: a multidiszciplináris modellnél integráltabb együttműködési forma, amelyben egy „kulcsszakember” (key worker) hangolja össze és közvetíti a többi szakterület javaslatait a család felé, csökkentve a család terhelését és a szolgáltatások közötti töredezettséget. A család mindkét modellben egyenrangú partner, nem csupán információforrás.',
  exp:'Integrált team-modell, amelyben egy kulcsszakember (key worker) fogja össze és közvetíti a szakterületek javaslatait a család felé, csökkentve a terhelést és a töredezettséget.'
},
{
  id:'def_w8_14', w:8, topic:'Korai intervenciós folyamat', type:'define', diff:2, points:2,
  q:'Határozza meg a generalizáció fogalmát a korai intervencióban!',
  modelAnswer:'Generalizáció: a megtanult készség átvitele más személyekre, helyszínekre és helyzetekre. Fejlődésében veszélyeztetett vagy fogyatékossággal élő gyermeknél a spontán átvitel gyakran nem működik automatikusan, ezért a korai intervenciós programnak tudatosan több kontextusban (otthon, óvoda, tágabb közösség) kell gyakoroltatnia a készségeket.',
  exp:'A megtanult készség átvitele más személyekre, helyszínekre, helyzetekre; mivel a spontán átvitel gyakran nem automatikus, tudatosan több kontextusban kell gyakoroltatni.'
},
{
  id:'def_w8_15', w:8, topic:'Korai intervenciós folyamat', type:'define', diff:3, points:2,
  q:'Határozza meg az intézményi átmenet-tervezés (transition planning) fogalmát!',
  modelAnswer:'Átmenet-tervezés (transition planning): az intézményi átmenetek (pl. korai intervencióból óvodába, óvodából iskolába) tudatos előkészítése, mivel ezek különösen sérülékeny pontok — a szolgáltatások, a szakemberek és gyakran a módszertan is megváltozik. Elemei: a dokumentáció átadása, közös látogatások, fokozatos beillesztés és a fogadó intézmény felkészítése, hogy a korábban elért fejlődési eredmények ne vesszenek el.',
  exp:'Az intézmények közötti átmenet tudatos előkészítése (dokumentáció-átadás, közös látogatások, fokozatos beillesztés, a fogadó intézmény felkészítése), hogy az elért eredmények ne vesszenek el.'
},
{
  id:'def_w8_16', w:8, topic:'Segítő technológia', type:'define', diff:2, points:2,
  q:'Határozza meg a segítő technológia (tehnologie asistivă) fogalmát!',
  modelAnswer:'Segítő technológia (tehnologie asistivă): minden olyan eszköz, berendezés vagy rendszer (a legegyszerűbb, alacsony technológiájú megoldástól — pl. vastagított fogantyú — a komplex elektronikus rendszerekig), amely a fogyatékossággal élő személy funkcionális képességeit növeli, fenntartja vagy javítja.',
  exp:'Bármely eszköz vagy rendszer az alacsony technológiájútól a komplexig, amely a funkcionális képességeket növeli, fenntartja vagy javítja.'
},
{
  id:'def_w8_17', w:8, topic:'Segítő technológia', type:'define', diff:3, points:2,
  q:'Határozza meg az alternatív hozzáférés (acces alternativ) fogalmát!',
  modelAnswer:'Alternatív hozzáférés (acces alternativ): azok a módszerek és eszközök, amelyek lehetővé teszik, hogy a hagyományos beviteli móddal (egérrel, billentyűzettel, kézi íróeszközzel) élni nem tudó felhasználó mégis interakcióba léphessen egy eszközzel vagy tevékenységgel — pl. kapcsoló (switch), szemkövető rendszer, fejmozgás-vezérlés.',
  exp:'Módszerek/eszközök, amelyek a hagyományos bevitelt (egér, billentyűzet, kézírás) nem használó személynek is lehetővé teszik az interakciót — pl. kapcsoló, szemkövetés, fejmozgás-vezérlés.'
},
{
  id:'def_w8_18', w:8, topic:'Segítő technológia', type:'define', diff:2, points:2,
  q:'Határozza meg az augmentatív és alternatív kommunikáció (AAC) fogalmát!',
  modelAnswer:'Augmentatív és alternatív kommunikáció (AAC): a beszédet kiegészítő (augmentatív) vagy helyettesítő (alternatív) kommunikációs formák és eszközök összessége — a gesztusoktól és képkártyáktól a beszédgeneráló szoftverekig —, amelyek célja a kifejezőkészség biztosítása korlátozott beszédprodukció esetén.',
  exp:'A beszédet kiegészítő vagy helyettesítő formák és eszközök összessége (gesztus, képkártya, beszédgenerátor) a kifejezőkészség biztosítására korlátozott beszédprodukciónál.'
},
{
  id:'def_w8_19', w:8, topic:'Segítő technológia', type:'define', diff:2, points:2,
  q:'Határozza meg a pozicionálás (poziționare) fogalmát!',
  modelAnswer:'Pozicionálás (poziționare): a test megfelelő, funkcionálisan optimális és biztonságos testtartásának biztosítása speciális eszközök (adaptált szék, állító keret, ékpárna) segítségével, amely alapfeltétele a kéz-, fej- és szemkontroll hatékony használatának.',
  exp:'A test funkcionálisan optimális, biztonságos testtartásának biztosítása speciális eszközökkel; alapfeltétele a kéz-, fej- és szemkontrollnak.'
},
{
  id:'def_w8_20', w:8, topic:'Segítő technológia', type:'define', diff:3, points:2,
  q:'Határozza meg a környezetvezérlés (control al mediului) fogalmát!',
  modelAnswer:'Környezetvezérlés (control al mediului): olyan technológiai rendszerek, amelyek lehetővé teszik a személy számára a környezeti elemek (fény, ajtó, elektronikus eszközök) önálló, adaptált kapcsoló vagy vezérlőfelület általi működtetését, növelve az autonómiát.',
  exp:'Technológiai rendszerek, amelyek a környezeti elemek (fény, ajtó, eszközök) önálló, adaptált működtetését teszik lehetővé, növelve az autonómiát.'
},

// ══════════════════════════════════════════════
// ESSZÉ KÉRDÉSEK – 8. VÁLTOZAT
// ══════════════════════════════════════════════
{
  id:'essay_w8_01', w:8, topic:'Halmozott fogyatékosság', type:'essay', diff:3, points:5,
  q:'Fejtse ki, miért jelent a halmozott fogyatékosság önálló támogatási profilt, és szemléltesse három példával!',
  modelAnswer:'A halmozott fogyatékosság esetében a különböző területek (pl. motoros és érzékszervi, vagy motoros és értelmi) nem egymás mellett, additív módon, hanem kölcsönhatásban jelentkeznek: az egyik terület korlátozottsága megváltoztatja, hogy a másik terület hogyan fejlődhet és hogyan kompenzálható. Emiatt egyetlen standard, fogyatékosság-specifikus program sem alkalmazható változtatás nélkül; a támogatásnak személyre szabott, integrált tervben (egyéni fejlesztési terv – plan de intervenție personalizat, PIP) kell testet öltenie, amelyet a román rendszerben a CJRAE/CMBRAE keretében működő komplex kiértékelési folyamat alapoz meg.\n\nPéldák:\n1. Motoros fogyatékosság + látássérülés: a mozgáskorlátozottság miatt a tanuló nem tudja spontán módon kompenzálni a látásveszteséget mozgással/tapintással való felfedezéssel, így a téri tájékozódás fejlesztése speciálisan adaptált, vezetett módszereket igényel.\n2. Cerebrális parézis + súlyos beszédmotoros zavar: a kognitív képességek beszéd alapú felmérése torzított eredményt adna, ezért a diagnosztikának AAC-alapú vagy nonverbális eszközöket kell alkalmaznia — az értékelési módszer megválasztása maga is a halmozottság következménye.\n3. Motoros fogyatékosság + intellektuális képességzavar: a mozgásfejlesztés és a fogalmi fejlesztés célkitűzéseit egyetlen integrált tevékenységbe (funkcionális, cselekvésbe ágyazott tanulás) kell szervezni, mert a két terület elkülönített fejlesztése nem hoz átvitelt a mindennapi működésbe.',
  exp:'A területek kölcsönhatásban, nem additív módon jelentkeznek, ezért személyre szabott, integrált terv (PIP, CJRAE/CMBRAE) kell. Három példa: motoros+látás, CP+beszédmotoros zavar, motoros+értelmi.'
},
{
  id:'essay_w8_02', w:8, topic:'Korai intervenciós folyamat', type:'essay', diff:3, points:6,
  q:'Mutassa be egy korai intervenciós program hat lépését a felméréstől az újraértékelésig!',
  modelAnswer:'1. Beutalás/jelzés (referire): a családorvos, óvodapedagógus vagy szülő jelzi az aggodalmat, illetve megtörténik a kezdeti szűrés.\n2. Komplex felmérés (evaluare inițială): a multi-/transzdiszciplináris team felméri a gyermek fejlődési szintjét minden területen, valamint a család szükségleteit és erőforrásait.\n3. Célmeghatározás a családdal közösen: funkcionális, a mindennapi életre vonatkozó, mérhető célok kitűzése, amelyeket a szülő is sajátjának érez.\n4. A beavatkozási/szolgáltatási terv kidolgozása (PSI/PIP): konkrét stratégiák, felelősök, gyakoriság és helyszín (otthon, óvoda) meghatározása.\n5. A terv megvalósítása a mindennapi rutinokba ágyazva: a szakemberek modelleznek, tréningeznek, és folyamatos konzultációt nyújtanak a szülőnek/gondozónak.\n6. Rendszeres újraértékelés és a terv korrekciója: a fejlődés nyomon követése alapján a célok és módszerek periodikus felülvizsgálata, szükség esetén új szolgáltatások bevonása vagy az átmenet előkészítése.',
  exp:'A hat lépés: 1. beutalás/jelzés, 2. komplex felmérés, 3. közös célmeghatározás, 4. a terv kidolgozása (PSI/PIP), 5. megvalósítás a rutinokba ágyazva, 6. rendszeres újraértékelés és korrekció.'
},
{
  id:'essay_w8_03', w:8, topic:'Segítő technológia', type:'essay', diff:2, points:4,
  q:'Ismertessen két előnyt és két korlátot a segítő technológia iskolai alkalmazásával kapcsolatban!',
  modelAnswer:'Előnyök:\n1. Növeli a tanuló önállóságát és részvételi lehetőségét a tantervi tevékenységekben, csökkentve a felnőtt-függőséget.\n2. Lehetővé teszi a valós tudás és kompetenciák pontosabb felmérését, mivel a válaszadás motoros korlátja többé nem torzítja az értékelést.\n\nKorlátok:\n1. Az eszköz bevezetése és hatékony használata idő- és tréningigényes (tanuló, pedagógus és család részéről egyaránt), ami kezdetben lassíthatja a folyamatot.\n2. Technikai meghibásodás, karbantartási vagy finanszírozási nehézség esetén a tanuló kommunikációs/tanulási hozzáférése hirtelen megszakadhat, ezért mindig szükséges alacsony technológiájú tartalék megoldás (pl. papíralapú kommunikációs tábla) is.',
  exp:'Előnyök: nagyobb önállóság/részvétel; pontosabb tudásfelmérés. Korlátok: idő- és tréningigényes bevezetés; meghibásodás/finanszírozás kockázata miatt alacsony technológiájú tartalék kell.'
},

// ══════════════════════════════════════════════
// FOGALOMMEGHATÁROZÁSOK – 9. VÁLTOZAT
// (Pszichofizikai/társadalmi fejlődés · Kommunikáció individualizálása · Esettanulmány)
// ══════════════════════════════════════════════
{
  id:'def_w9_01', w:9, topic:'Pszichofizikai fejlődés', type:'define', diff:2, points:2,
  q:'Határozza meg a pszichofizikai fejlődés fogalmát!',
  modelAnswer:'Pszichofizikai fejlődés: a személy testi (motoros, szenzoros, biológiai érési) és pszichés (kognitív, érzelmi, szociális) funkcióinak életkorral együtt járó, egymással szoros kölcsönhatásban zajló, minőségi és mennyiségi átalakulása.',
  exp:'A testi és pszichés funkciók életkorral együtt járó, szoros kölcsönhatásban zajló, minőségi és mennyiségi átalakulása.'
},
{
  id:'def_w9_02', w:9, topic:'Kompenzáció', type:'define', diff:2, points:2,
  q:'Határozza meg a kompenzáció fogalmát!',
  modelAnswer:'Kompenzáció: az a pszichés és funkcionális folyamat, amelynek során a sérült vagy korlátozottan működő funkciót más, épen maradt funkciók vagy alternatív stratégiák helyettesítik vagy egészítik ki (pl. a látássérült személy fokozott tapintási-hallási tájékozódása).',
  exp:'A sérült funkció helyettesítése/kiegészítése ép funkciókkal vagy alternatív stratégiákkal (pl. látássérült fokozott tapintási-hallási tájékozódása).'
},
{
  id:'def_w9_03', w:9, topic:'Adaptív működés', type:'define', diff:2, points:2,
  q:'Határozza meg az adaptív működés (funcționare adaptativă) fogalmát!',
  modelAnswer:'Adaptív működés (funcționare adaptativă): azoknak a fogalmi, szociális és gyakorlati készségeknek az együttese, amelyeket a személy a mindennapi, önálló életvitelhez és a környezeti elvárásoknak való megfeleléshez alkalmaz (pl. önkiszolgálás, problémamegoldás, társas viselkedés).',
  exp:'A fogalmi, szociális és gyakorlati készségek együttese az önálló életvitelhez és a környezeti elvárásoknak való megfeleléshez.'
},
{
  id:'def_w9_04', w:9, topic:'Társadalmi részvétel', type:'define', diff:2, points:2,
  q:'Határozza meg a társadalmi részvétel (participare socială) fogalmát!',
  modelAnswer:'Társadalmi részvétel (participare socială): a személy tényleges bevonódása és aktív jelenléte az élet különböző területein (oktatás, munka, közösségi élet, kapcsolatok) — nem csupán a fizikai jelenlét, hanem az érdemi, értelemmel bíró közreműködés értelmében.',
  exp:'A tényleges bevonódás és érdemi közreműködés az élet különböző területein — nem csupán fizikai jelenlét.'
},
{
  id:'def_w9_05', w:9, topic:'Személyiség', type:'define', diff:3, points:2,
  q:'Határozza meg a személyiség fogalmát!',
  modelAnswer:'Személyiség: a viszonylag stabil, egyéni jellegzetes gondolkodási, érzelmi és viselkedési mintázatok integrált rendszere, amely a biológiai adottságok, a tapasztalatok és a szociális környezet kölcsönhatásában alakul ki, és amelyet fogyatékosság esetén is elsősorban a személyes fejlődéstörténet, nem a diagnózis határoz meg.',
  exp:'Az egyéni gondolkodási, érzelmi és viselkedési mintázatok stabil rendszere; fogyatékosság esetén is a fejlődéstörténet, nem a diagnózis határozza meg.'
},
{
  id:'def_w9_06', w:9, topic:'Kognitív sajátosságok', type:'define', diff:3, points:2,
  q:'Határozza meg a végrehajtó funkciók fogalmát!',
  modelAnswer:'Végrehajtó funkciók: a tervezés, a gátlás, a kognitív rugalmasság és az önmonitorozás folyamatai. Az e területen mutatkozó nehézségek (pl. impulzivitás, nehezített stratégiaváltás) számos fejlődési zavarnál (ADHD, autizmus, szerzett agysérülés) központi jellemzők.',
  exp:'A tervezés, gátlás, kognitív rugalmasság és önmonitorozás folyamatai; nehézségük ADHD-nál, autizmusnál, agysérülésnél központi.'
},
{
  id:'def_w9_07', w:9, topic:'Motiváció és érzelmek', type:'define', diff:2, points:2,
  q:'Határozza meg a tanult tehetetlenség (learned helplessness) fogalmát!',
  modelAnswer:'Tanult tehetetlenség (learned helplessness): az ismételt kudarcélmények következtében kialakuló állapot, amely csökkenti a feladatokba való belefogás hajlandóságát. Éppen ezért kulcsfontosságú a sikerélmény tudatos megszervezése.',
  exp:'Az ismételt kudarcok nyomán kialakuló állapot, amely csökkenti a feladatokba fogás hajlandóságát; ellenszere a tudatos sikerélmény.'
},
{
  id:'def_w9_08', w:9, topic:'Adaptív viselkedés', type:'define', diff:2, points:2,
  q:'Határozza meg az adaptív viselkedés fogalmi (konceptuális) területét!',
  modelAnswer:'Az adaptív viselkedés fogalmi (konceptuális) területe a nyelvhasználatot és kommunikációt, valamint az alapvető szám- és időfogalmak gyakorlati alkalmazását (pl. pénz kezelése, órarend követése) foglalja magában.',
  exp:'Nyelvhasználat, kommunikáció és alapvető szám- és időfogalmak gyakorlati alkalmazása.'
},
{
  id:'def_w9_09', w:9, topic:'Adaptív viselkedés', type:'define', diff:2, points:2,
  q:'Határozza meg az adaptív viselkedés szociális területét!',
  modelAnswer:'Az adaptív viselkedés szociális területe a szabályok és normák betartását társas helyzetekben (pl. sorban állás, kérés-köszönés), valamint a mások érzelmi jelzéseinek felismerését és a megfelelő reagálást foglalja magában.',
  exp:'Szabályok/normák betartása társas helyzetekben és mások érzelmi jelzéseinek felismerése, megfelelő reagálás.'
},
{
  id:'def_w9_10', w:9, topic:'Adaptív viselkedés', type:'define', diff:2, points:2,
  q:'Határozza meg az adaptív viselkedés gyakorlati (praktikus) területét!',
  modelAnswer:'Az adaptív viselkedés gyakorlati (praktikus) területe az önkiszolgálási készségeket (öltözködés, étkezés, higiénia) és a mindennapi életvezetési készségeket (közlekedés, egyszerű háztartási feladatok, biztonsági szabályok betartása) foglalja magában.',
  exp:'Önkiszolgálási készségek (öltözködés, étkezés, higiénia) és mindennapi életvezetési készségek (közlekedés, háztartás, biztonság).'
},
{
  id:'def_w9_11', w:9, topic:'Védőfaktorok', type:'define', diff:2, points:2,
  q:'Határozza meg a védőfaktor (erősségfaktor) fogalmát a személyiségfejlődés kontextusában!',
  modelAnswer:'Védőfaktor (erősségfaktor): olyan tényező, amely támogatja a személyiségfejlődést és csökkenti a másodlagos nehézségek kockázatát — pl. biztonságos, elfogadó családi kötődés; korai, jól illeszkedő szakmai támogatás; pozitív kortárskapcsolatok és befogadó szociális környezet; valamint az erősségekre és érdeklődésre épülő, sikerélményt biztosító tevékenységek.',
  exp:'A személyiségfejlődést támogató, a másodlagos nehézségek kockázatát csökkentő tényező (családi kötődés, korai támogatás, kortárskapcsolatok, sikerélmény).'
},
{
  id:'def_w9_12', w:9, topic:'Integráció akadályai', type:'define', diff:3, points:2,
  q:'Határozza meg a társadalmi részvétel strukturális akadályának fogalmát!',
  modelAnswer:'A társadalmi részvétel strukturális akadályai a fizikai, kommunikációs vagy attitűdbeli akadálymentesítés hiányából fakadó korlátok, amelyek nem a személy képességeiből, hanem a környezet felkészületlenségéből erednek — ez az akadálymentesítés és az inkluzív szemlélet megerősítésének fő indoka.',
  exp:'A fizikai, kommunikációs vagy attitűdbeli akadálymentesítés hiánya; nem a személy képességeiből, hanem a környezet felkészületlenségéből fakad.'
},
{
  id:'def_w9_13', w:9, topic:'Hozzáférhető kommunikáció', type:'define', diff:2, points:2,
  q:'Határozza meg a hozzáférhető kommunikáció fogalmát!',
  modelAnswer:'Hozzáférhető kommunikáció: a kommunikációs csatorna, forma és tempó igazodik a személy érzékelési, motoros és kognitív lehetőségeihez, így ő ténylegesen fel tudja fogni és létre tudja hozni az üzeneteket.',
  exp:'A csatorna, forma és tempó a személy érzékelési, motoros és kognitív lehetőségeihez igazodik, hogy fel- és létrehozhassa az üzeneteket.'
},
{
  id:'def_w9_14', w:9, topic:'Funkcionális kommunikáció', type:'define', diff:2, points:2,
  q:'Határozza meg a funkcionális kommunikáció fogalmát!',
  modelAnswer:'Funkcionális kommunikáció: olyan kommunikáció, amely valós, a mindennapi életben releváns célokat szolgál (igény kifejezése, választás, társas kapcsolattartás), azaz nem elszigetelt gyakorlat, hanem a személy önrendelkezését és részvételét ténylegesen növelő eszköz.',
  exp:'Valós, mindennapi célokat szolgáló kommunikáció (igény, választás, kapcsolattartás); az önrendelkezést és részvételt növeli.'
},
{
  id:'def_w9_15', w:9, topic:'Kommunikációs partneri stratégiák', type:'define', diff:3, points:2,
  q:'Határozza meg a modellezés (aided language stimulation) fogalmát!',
  modelAnswer:'Modellezés (aided language stimulation): olyan kommunikációspartneri stratégia, amelyben a partner a kommunikációs eszközt/szimbólumrendszert folyamatosan, a saját beszédével párhuzamosan használja, ezzel mintát adva a tanulónak a rendszer használatához.',
  exp:'A partner a kommunikációs eszközt/szimbólumrendszert a saját beszédével párhuzamosan használja, mintát adva a tanulónak.'
},
{
  id:'def_w9_16', w:9, topic:'Esettanulmány', type:'define', diff:2, points:2,
  q:'Határozza meg az esettanulmány (studiu de caz) fogalmát!',
  modelAnswer:'Esettanulmány (studiu de caz): olyan módszer, amely egy konkrét, valós vagy valósághű, komplex helyzet mélyreható, több szempontú vizsgálatára épül; a hangsúly az elemzésen, az összefüggések feltárásán és a reflektív értelmezésen van, nem feltétlenül egyetlen „helyes” megoldás megtalálásán.',
  exp:'Egy konkrét, komplex helyzet mélyreható, többszempontú vizsgálata; a hangsúly az elemzésen és reflexión, nem egyetlen „helyes” megoldáson.'
},
{
  id:'def_w9_17', w:9, topic:'Problémamegoldó tanulás', type:'define', diff:2, points:2,
  q:'Határozza meg a problémamegoldó tanulás fogalmát!',
  modelAnswer:'Problémamegoldó tanulás (învățare bazată pe rezolvarea de probleme): olyan módszer, amely egy konkrét, jól körülhatárolt probléma megoldására irányul, meghatározott célú, gyakran lépésről lépésre strukturált folyamatban; a hangsúly a megoldási stratégia kidolgozásán, kipróbálásán és az eredmény értékelésén van, aktív, cselekvésközpontú tanulói szerepvállalással.',
  exp:'Egy jól körülhatárolt probléma megoldására irányuló, strukturált folyamat; a hangsúly a stratégia kidolgozásán, kipróbálásán és értékelésén, aktív tanulói szereppel.'
},
{
  id:'def_w9_18', w:9, topic:'Kognitív sajátosságok', type:'define', diff:3, points:2,
  q:'Határozza meg az észlelés fogalmát, és mivel áll szemben az érzékeléssel!',
  modelAnswer:'Az észlelés a beérkező ingerek értelmezése (pl. alak-háttér megkülönböztetés, téri észlelés), amely egyes fejlődési zavaroknál (pl. tanulási zavarok) ép érzékszervek mellett is nehezített lehet — szemben az érzékeléssel, amely az elsődleges ingerfelvétel folyamata.',
  exp:'Az észlelés az ingerek értelmezése (alak-háttér, téri észlelés), ép érzékszervek mellett is nehezített lehet; az érzékelés az elsődleges ingerfelvétel.'
},

// ══════════════════════════════════════════════
// ESSZÉ KÉRDÉSEK – 9. VÁLTOZAT
// ══════════════════════════════════════════════
{
  id:'essay_w9_01', w:9, topic:'Integráció akadályai', type:'essay', diff:3, points:5,
  q:'Ismertesse a fogyatékosság öt lehetséges következményét az alkalmazkodásra és a társadalmi integrációra!',
  modelAnswer:'1. Korlátozott hozzáférés a tipikus tanulási és társas tapasztalatokhoz, ami közvetetten lassíthatja a fogalmi és szociális fejlődést, még ha az elsődleges károsodás ezt közvetlenül nem is indokolná.\n2. A környezet negatív attitűdjei és alacsony elvárásai (stigma, túlvédés vagy kirekesztés) másodlagos akadályt jelenthetnek, amely súlyosabb is lehet, mint maga az eredeti károsodás.\n3. A kortárskapcsolatok beszűkülése, ha a kommunikációs vagy viselkedési különbségek megnehezítik a spontán társas interakciókat, ami elszigetelődéshez vezethet.\n4. Fokozott érzelmi terhelés és megküzdési kihívások a gyakori kudarcélmények, összehasonlítások és az esetleges kirekesztő tapasztalatok miatt.\n5. A társadalmi részvétel strukturális akadályai (fizikai, kommunikációs vagy attitűdbeli akadálymentesítés hiánya), amelyek nem a személy képességeiből, hanem a környezet felkészületlenségéből fakadnak.',
  exp:'Öt következmény: korlátozott tapasztalati hozzáférés, negatív környezeti attitűdök, beszűkülő kortárskapcsolatok, fokozott érzelmi terhelés, és a részvétel strukturális akadályai.'
},
{
  id:'essay_w9_02', w:9, topic:'AAC felmérése', type:'essay', diff:3, points:5,
  q:'Mutassa be az augmentatív és alternatív kommunikáció (AAC) felmérésének és kiválasztásának öt lépését!',
  modelAnswer:'1. Többforrású felmérés: a jelenlegi kommunikációs formák, szükségletek és kontextusok feltérképezése (megfigyelés, családi és pedagógusi interjú, korábbi értékelések áttekintése).\n2. A motoros, érzékelési és kognitív képességek felmérése: annak meghatározása, mely bemeneti/kimeneti csatorna (pl. kézmozgás, szemkontroll, hallás) a legmegbízhatóbb.\n3. A kommunikációs célok és partnerek azonosítása: milyen helyzetekben, kikkel és milyen üzenettípusokra (kérés, elutasítás, társalgás) van elsősorban szükség.\n4. Az eszköz/rendszer kipróbálása (trial) valós helyzetekben: különböző alacsony és magas technológiájú lehetőségek tesztelése, nem csupán elméleti alkalmasság alapján.\n5. Döntés, bevezetés és folyamatos felülvizsgálat: a kiválasztott rendszer fokozatos beépítése a mindennapokba, majd a hatékonyság rendszeres, adatalapú újraértékelése és szükség szerinti módosítása.',
  exp:'Az öt lépés: 1. többforrású felmérés, 2. a motoros/érzékelési/kognitív képességek felmérése, 3. a célok és partnerek azonosítása, 4. kipróbálás valós helyzetekben, 5. döntés, bevezetés és folyamatos felülvizsgálat.'
},
{
  id:'essay_w9_03', w:9, topic:'Esettanulmány', type:'essay', diff:3, points:6,
  q:'Mutassa be az esettanulmány módszer hat lépését!',
  modelAnswer:'1. Az eset kiválasztása és bemutatása: egy releváns, a tanulók fejlettségi szintjéhez és tapasztalataihoz illeszkedő, konkrét helyzet ismertetése.\n2. Adatgyűjtés és többforrású információszerzés: a helyzethez kapcsolódó releváns tények, körülmények, szereplői nézőpontok összegyűjtése.\n3. A kulcskérdés/probléma azonosítása: annak tisztázása, pontosan mi az elemzendő dilemma vagy kihívás az esetben.\n4. Többszempontú elemzés: az eset vizsgálata különböző nézőpontokból (pl. érintett szereplők, lehetséges okok, következmények).\n5. Megoldási alternatívák/ajánlások kidolgozása: lehetséges válaszok, döntések megfogalmazása, azok várható következményeinek mérlegelésével.\n6. Szintézis, következtetések levonása és reflexió: az esetből levonható általánosabb tanulságok megfogalmazása, kapcsolódás a tanulók saját tapasztalataihoz.',
  exp:'A hat lépés: 1. az eset kiválasztása és bemutatása, 2. adatgyűjtés, 3. a kulcskérdés azonosítása, 4. többszempontú elemzés, 5. megoldási alternatívák kidolgozása, 6. szintézis, következtetések és reflexió.'
},

// ══════════════════════════════════════════════
// FOGALOMMEGHATÁROZÁSOK – 10. VÁLTOZAT
// (Preprofesszionális/professzionális készségek · Pályaorientáció · Munkára felkészítő modul)
// ══════════════════════════════════════════════
{
  id:'def_w10_01', w:10, topic:'Preprofesszionalizáció', type:'define', diff:2, points:2,
  q:'Határozza meg a preprofesszionalizáció fogalmát!',
  hint:'Emeld ki, hogy KORAI, ISKOLAI alapozásról van szó, MÉG a konkrét szakmaválasztás ELŐTT — általános munkaszokások, nem egy adott szakma fogásai.',
  hintKeywords:['korai, iskolai keret','munkaszokások, attitűdök','feladattartás, pontosság, együttműködés','szakmaválasztás előtt'],
  modelAnswer:'Preprofesszionalizáció: a munkavégzéshez szükséges alapvető munkaszokások, magatartásformák és attitűdök (pl. feladattartás, pontosság, együttműködés) korai, iskolai keretek közötti megalapozása, még mielőtt konkrét szakma vagy foglalkozás választására sor kerülne.',
  exp:'Az alapvető munkaszokások, magatartásformák és attitűdök korai, iskolai megalapozása a konkrét szakmaválasztás előtt.'
},
{
  id:'def_w10_02', w:10, topic:'Professzionalizáció', type:'define', diff:2, points:2,
  q:'Határozza meg a professzionalizáció fogalmát!',
  hint:'Állítsd szembe a preprofesszionalizációval: itt már EGY KONKRÉT munkakör/szakma technikai ismereteiről van szó.',
  hintKeywords:['konkrét munkakör/szakmacsoport','szakmai ismeretek','technikai készségek'],
  modelAnswer:'Professzionalizáció: egy meghatározott munkakörre vagy szakmacsoportra irányuló, konkrét szakmai ismeretek és technikai készségek elsajátítása.',
  exp:'Egy meghatározott munkakörre/szakmacsoportra irányuló, konkrét szakmai ismeretek és technikai készségek elsajátítása.'
},
{
  id:'def_w10_03', w:10, topic:'Munkakészség', type:'define', diff:2, points:2,
  q:'Határozza meg a munkakészség (pregătire pentru muncă) fogalmát!',
  hint:'Nevezd meg a három készségtípust és a célt: mit tesz lehetővé a munkahelyen.',
  hintKeywords:['viselkedéses, kommunikációs, funkcionális készségek','munkahelyi elvárásrendszer','instrukciókövetés, önellenőrzés, együttműködés'],
  modelAnswer:'Munkakészség (pregătire pentru muncă): azoknak a viselkedéses, kommunikációs és funkcionális készségeknek az együttese, amelyek lehetővé teszik egy munkahelyi elvárásrendszernek való tényleges megfelelést (instrukciókövetés, önellenőrzés, kollegiális együttműködés).',
  exp:'Viselkedéses, kommunikációs és funkcionális készségek együttese a munkahelyi elvárásoknak való megfeleléshez.'
},
{
  id:'def_w10_04', w:10, topic:'Tranzíció', type:'define', diff:2, points:2,
  q:'Határozza meg a tranzíció (átmenet) fogalmát!',
  hint:'Hangsúlyozd: iskolából a felnőtt élet színterei felé, TERVEZETT és FOKOZATOS, több évig tartó folyamat.',
  hintKeywords:['iskolából a felnőtt életbe','munka, lakhatás, közösségi részvétel','tervezett, fokozatos','több évre visszanyúló előkészítés'],
  modelAnswer:'Tranzíció (átmenet): az iskolai környezetből a felnőtt élet különböző színterei (munka, önálló vagy támogatott lakhatás, közösségi részvétel) felé történő, tervezett és fokozatos átmenet folyamata, amely tudatos, több évre visszanyúló előkészítést igényel.',
  exp:'Az iskolából a felnőtt élet színterei felé történő, tervezett, fokozatos, több évre visszanyúló átmenet.'
},
{
  id:'def_w10_05', w:10, topic:'Támogatott foglalkoztatás', type:'define', diff:3, points:2,
  q:'Határozza meg a támogatott foglalkoztatás (angajare asistată) fogalmát!',
  hint:'Kulcs: NYÍLT munkaerőpiac, VALÓDI bér, és a JOB COACH (munkahelyi mentor) támogatása.',
  hintKeywords:['nyílt munkaerőpiac','valódi munkahely, valódi bér','job coach / munkahelyi mentor','tartós beilleszkedés'],
  modelAnswer:'Támogatott foglalkoztatás (angajare asistată/sprijinită): olyan foglalkoztatási forma, amelyben a fogyatékossággal élő személy a nyílt munkaerőpiacon, valódi munkahelyen, valódi bérért dolgozik, miközben munkahelyi mentor (job coach) és egyéb személyre szabott támogatás segíti a betanulást és a tartós beilleszkedést.',
  exp:'A nyílt munkaerőpiacon, valódi bérért végzett munka job coach és személyre szabott támogatás mellett.'
},
{
  id:'def_w10_06', w:10, topic:'Munkakészség-területek', type:'define', diff:2, points:2,
  q:'Határozza meg a funkcionális akadémiai készségek fogalmát a munkavégzés kontextusában!',
  hint:'A „funkcionális” azt jelenti: a munkához SZÜKSÉGES mértékű, gyakorlati alkalmazás — nem iskolai tananyagszint.',
  hintKeywords:['alapszintű olvasás, számolás','idő- és pénzkezelés','munkához szükséges mérték'],
  modelAnswer:'Funkcionális akadémiai készségek: a munkavégzéshez szükséges mértékű alapszintű olvasás, számolás, valamint idő- és pénzkezelés; azaz az akadémiai készségek gyakorlati, a munkahelyi feladatokhoz igazodó alkalmazása.',
  exp:'A munkavégzéshez szükséges alapszintű olvasás, számolás, idő- és pénzkezelés.'
},
{
  id:'def_w10_07', w:10, topic:'Preprofesszionális tevékenységek', type:'define', diff:2, points:2,
  q:'Határozza meg a job shadowing fogalmát!',
  hint:'Röviden: valós munkahelyen való MEGFIGYELÉS; sorold be a preprofesszionális tevékenységek közé.',
  hintKeywords:['munkahelyi látogatás/megfigyelés','valós szakmai környezet','preprofesszionális tevékenység'],
  modelAnswer:'Job shadowing: munkahelyi látogatás és megfigyelés különböző valós szakmai környezetekben, amelynek célja, hogy a fiatal közvetlen tapasztalatot szerezzen a munka világáról — egy preprofesszionális tevékenység.',
  exp:'Munkahelyi látogatás és megfigyelés valós szakmai környezetekben (preprofesszionális tevékenység).'
},
{
  id:'def_w10_08', w:10, topic:'Pályaorientáció', type:'define', diff:2, points:3,
  q:'Határozza meg a pályaorientáció (orientare școlară și profesională) fogalmát!',
  hint:'Folyamat: önismeret (érdeklődés, képességek, értékek) + ezek ÖSSZEKAPCSOLÁSA a lehetséges utakkal.',
  hintKeywords:['érdeklődés, képességek, értékek','tudatos összekapcsolás','tanulási és szakmai utak'],
  modelAnswer:'Pályaorientáció (orientare școlară și profesională): az a folyamat, amely segíti a személyt saját érdeklődésének, képességeinek és értékeinek megismerésében, valamint ezek tudatos összekapcsolásában a lehetséges tanulási és szakmai utakkal.',
  exp:'Az érdeklődés, képességek és értékek megismerése és összekapcsolása a lehetséges tanulási/szakmai utakkal.'
},
{
  id:'def_w10_09', w:10, topic:'Pályatanácsadás', type:'define', diff:2, points:2,
  q:'Határozza meg a pályatanácsadás (consiliere vocațională) fogalmát!',
  hint:'A pályaorientáció SZEMÉLYRE SZABOTT, bizalmi kapcsolatban zajló, döntéstámogató formája.',
  hintKeywords:['személyre szabott','bizalmi tanácsadói kapcsolat','döntéshozatal támogatása'],
  modelAnswer:'Pályatanácsadás (consiliere vocațională): a pályaorientációs folyamat személyre szabott, bizalmi tanácsadói kapcsolatban megvalósuló, segítő formája, amely konkrét döntéshozatali helyzetekben nyújt célzott támogatást.',
  exp:'A pályaorientáció személyre szabott, bizalmi tanácsadói kapcsolatban zajló, döntéstámogató formája.'
},
{
  id:'def_w10_10', w:10, topic:'Önrendelkezés', type:'define', diff:3, points:2,
  q:'Határozza meg az önrendelkezés (autodeterminare) fogalmát!',
  hint:'A saját élet feletti DÖNTÉS képessége/lehetősége; kösd a motivációhoz és az életminőséghez.',
  hintKeywords:['saját élet feletti döntéshozatal','motiváció, elköteleződés','életminőség'],
  modelAnswer:'Önrendelkezés (autodeterminare): a saját élet feletti döntéshozatal képessége és lehetősége, amely a motiváció, az elköteleződés és az életminőség egyik kulcstényezője. Ha a fiatal helyett mások döntenek, csökken a döntés iránti belső elköteleződés és a megvalósítás melletti kitartás.',
  exp:'A saját élet feletti döntéshozatal képessége és lehetősége; a motiváció, elköteleződés és életminőség kulcstényezője.'
},
{
  id:'def_w10_11', w:10, topic:'Támogatott döntéshozatal', type:'define', diff:3, points:2,
  q:'Határozza meg a támogatott döntéshozatal fogalmát!',
  hint:'Kulcs a szembeállítás: NEM helyettesítő, hanem SEGÍTETT döntés — a fiatal preferenciái a középpontban.',
  hintKeywords:['nem helyettesítő, hanem segített','a fiatal saját preferenciái','adaptált információ, fokozatos támogatás'],
  modelAnswer:'Támogatott döntéshozatal: nem helyettesítő, hanem segített döntéshozatal, amely biztosítja, hogy jelentős kognitív vagy kommunikációs korlátozottság esetén is a fiatal saját preferenciái álljanak a döntés középpontjában, megfelelően adaptált információ és fokozatos, szükséglethez igazított támogatás mellett.',
  exp:'Nem helyettesítő, hanem segített döntéshozatal, ahol a fiatal saját preferenciái állnak a középpontban, adaptált támogatással.'
},
{
  id:'def_w10_12', w:10, topic:'Pályaválasztási profil', type:'define', diff:2, points:2,
  q:'Határozza meg a funkcionális önállósági szint fogalmát a pályaválasztási profilban!',
  hint:'A napi ÖNÁLLÓSÁG mértéke, a pályaválasztási profil egyik értékelendő területeként.',
  hintKeywords:['napi életvezetés','közlekedés','kommunikációs önállóság'],
  modelAnswer:'Funkcionális önállósági szint: a pályaválasztási profil egyik értékelendő területe, amely a napi életvezetési, közlekedési és kommunikációs önállóság mértékét írja le.',
  exp:'A napi életvezetési, közlekedési és kommunikációs önállóság mértéke.'
},
{
  id:'def_w10_13', w:10, topic:'Pályaorientációs módszerek', type:'define', diff:3, points:2,
  q:'Határozza meg a személyközpontú tervezés (person-centered planning) fogalmát!',
  hint:'Egyéni ülés, ahol a tanuló és támogatói KÖZÖSEN, a tanuló preferenciáira építve alakítják a célokat.',
  hintKeywords:['egyéni tervezési ülés','tanuló + fontos támogató személyek','közös célalakítás','preferenciák, erősségek'],
  modelAnswer:'Személyközpontú tervezés (person-centered planning): egyéni tervezési ülések formája, ahol a tanuló és a fontos támogató személyek közösen alakítják ki a célokat, a tanuló preferenciáit és erősségeit középpontba állítva.',
  exp:'Egyéni tervezési ülés, ahol a tanuló és támogatói közösen, a tanuló preferenciáira építve alakítják a célokat.'
},
{
  id:'def_w10_14', w:10, topic:'Pályaorientációs módszerek', type:'define', diff:2, points:2,
  q:'Határozza meg a portfólió-alapú önismereti gyűjtemény fogalmát!',
  hint:'Gyűjtemény: feladatok + visszajelzések + önreflexiók DOKUMENTÁLÁSA az önismeret és a fejlődés nyomon követésére.',
  hintKeywords:['elvégzett feladatok','kapott visszajelzések','önreflexiók dokumentálása','önismeret'],
  modelAnswer:'Portfólió-alapú önismereti gyűjtemény: pályaorientációs eszköz, amelyben az elvégzett feladatokat, a kapott visszajelzéseket és a tanuló önreflexióit dokumentálják, támogatva az önismeret és a fejlődés nyomon követését.',
  exp:'Az elvégzett feladatok, visszajelzések és önreflexiók dokumentálása az önismeret támogatására.'
},
{
  id:'def_w10_15', w:10, topic:'Modul tervezése', type:'define', diff:2, points:2,
  q:'Határozza meg a mérhető tanulási cél fogalmát!',
  hint:'A „mérhető” a kulcs: konkrét TELJESÍTMÉNYKRITÉRIUM (pl. 80%), ami megfigyelhető és értékelhető.',
  hintKeywords:['konkrét teljesítménykritérium','megfigyelhető, értékelhető','pl. 80%-os pontosság'],
  modelAnswer:'Mérhető tanulási cél: olyan, konkrét teljesítménykritériummal megfogalmazott cél, amelynek elérése megfigyelhető és értékelhető (pl. a tanuló önállóan, instrukció alapján el tud végezni egy háromlépéses munkafeladatot legalább 80%-os pontossággal).',
  exp:'Konkrét teljesítménykritériummal megfogalmazott, megfigyelhető és értékelhető cél.'
},
{
  id:'def_w10_16', w:10, topic:'Munkahelyi szimuláció', type:'define', diff:2, points:2,
  q:'Határozza meg a munkahelyi szimuláció fogalmát a munkára felkészítő modulban!',
  hint:'Osztálytermi, valós munkát utánzó gyakorlat; térj ki a BIZTONSÁGI és a TÁRSAS szabályokra is.',
  hintKeywords:['valós helyzetet utánzó gyakorlat','biztonsági szempontok','társas szabályok'],
  modelAnswer:'Munkahelyi szimuláció: az osztályteremben létrehozott, valós munkahelyi helyzetet utánzó gyakorlat (pl. „csomagolóüzemi” szimuláció), amelyben a tanulók biztonsági szempontokat (testtartás, eszközhasználat, segítségkérés) és társas szabályokat (köszönés, munkaidő, együttműködés) gyakorolnak.',
  exp:'Valós munkahelyi helyzetet utánzó osztálytermi gyakorlat, amelyben biztonsági és társas szabályokat gyakorolnak.'
},
{
  id:'def_w10_17', w:10, topic:'Reflexió, transzfer, utókövetés', type:'define', diff:3, points:2,
  q:'Határozza meg a transzfer fogalmát a munkára felkészítő modul kontextusában!',
  hint:'A készség ÁTVITELE más helyzetekre/helyszínekre, hogy ne maradjon egyetlen kontextushoz kötött.',
  hintKeywords:['készségek átvitele','más helyzetek/helyszínek','általánosulás'],
  modelAnswer:'Transzfer: a megszerzett készségek tudatos gyakoroltatása más helyzetekben és helyszíneken is (pl. otthon, valós munkahelyi látogatás során), hogy a tanulás ne maradjon egyetlen kontextushoz kötött, hanem általánosuljon.',
  exp:'A megszerzett készségek tudatos gyakorlása más helyzetekben/helyszíneken, hogy ne maradjon egyetlen kontextushoz kötött.'
},
{
  id:'def_w10_18', w:10, topic:'Munkakészség-területek', type:'define', diff:2, points:2,
  q:'Határozza meg az önszabályozási és problémamegoldó készségek fogalmát a munkavégzésben!',
  hint:'Sorold a tartalmát: stressztűrés, váratlan helyzetek kezelése, önellenőrzés/hibajavítás.',
  hintKeywords:['stressztűrés','váratlan helyzetek kezelése','önellenőrzés, hibajavítás'],
  modelAnswer:'Önszabályozási és problémamegoldó készségek: a munkavégzéshez szükséges készségterület, amely magában foglalja a stressztűrést, a váratlan helyzetek kezelését, valamint az önellenőrzést és hibajavítást.',
  exp:'Stressztűrés, a váratlan helyzetek kezelése, önellenőrzés és hibajavítás.'
},

// ══════════════════════════════════════════════
// ESSZÉ KÉRDÉSEK – 10. VÁLTOZAT
// ══════════════════════════════════════════════
{
  id:'essay_w10_01', w:10, topic:'Átmenet lépései', type:'essay', diff:3, points:5,
  q:'Mutassa be az iskolából a felnőtt életbe történő átmenet öt lépését!',
  hint:'Öt lépés időrendben: korai tervezés → felmérés → készségfejlesztés/tapasztalat → koordinált terv → átadás + utókövetés.',
  hintKeywords:['korai tranzíciós tervezés','érdeklődés/erősségek felmérése','célzott készségfejlesztés, tapasztalat','koordinált tranzíciós terv','fokozatos átadás és utókövetés'],
  modelAnswer:'1. Korai tranzíciós tervezés megkezdése, jellemzően már a serdülőkor elején, nem csupán az utolsó tanévben.\n2. A fiatal érdeklődésének, erősségeinek és preferenciáinak felmérése, személyközpontú tervezési szemlélettel.\n3. Célzott készségfejlesztés és valós tapasztalatszerzési lehetőségek biztosítása (gyakorlatok, munkatapasztalat, önálló életvezetési gyakorlás).\n4. Koordinált tranzíciós terv kidolgozása az iskola, a család és a fogadó szolgáltatók/munkaadók bevonásával.\n5. Fokozatos átadás és utókövetés az új környezetbe (munkahely, felnőttképzés, közösségi szolgáltatás), rendszeres visszacsatolással és szükség szerinti korrekcióval.',
  exp:'Az öt lépés: 1. korai tranzíciós tervezés, 2. az érdeklődés/erősségek felmérése, 3. célzott készségfejlesztés és valós tapasztalatszerzés, 4. koordinált tranzíciós terv, 5. fokozatos átadás és utókövetés.'
},
{
  id:'essay_w10_02', w:10, topic:'Munkába állás tényezői', type:'essay', diff:3, points:5,
  q:'Elemezze, milyen tényezők segítik vagy akadályozzák a CES fiatalok munkába állását (legalább ötöt)!',
  hint:'Csoportosítsd: személyes, környezeti, társadalmi és rendszerszintű tényezők — mindegyik segíthet VAGY akadályozhat.',
  hintKeywords:['funkcionális készségek, önértékelés','kommunikáció, alkalmazkodás','fizikai/kommunikációs akadálymentesítés','munkaadói attitűdök, előítéletek','támogató szolgáltatások (job coaching)'],
  modelAnswer:'1. Személyes tényező: a funkcionális készségek és az önértékelés/motiváció szintje — fejlett készségek és pozitív önkép esetén segítő, alacsony szint esetén akadályozó hatású.\n2. Személyes tényező: a kommunikációs képességek és az alkalmazkodóképesség új helyzetekhez.\n3. Környezeti tényező: a munkahely fizikai és kommunikációs akadálymentesítettsége, illetve az elvégzendő feladatok adaptálhatósága.\n4. Társadalmi tényező: a munkaadók és munkatársak attitűdje és tájékozottsága a fogyatékossággal kapcsolatban — az előítéletek jelentős akadályozó tényezőt jelentenek.\n5. Rendszerszintű tényező: a támogató szolgáltatások (job coaching, közösségi és munkaügyi szolgáltatások) elérhetősége, koordináltsága és folytonossága az átmenet során.',
  exp:'Öt tényező: a funkcionális készségek/önértékelés; a kommunikáció/alkalmazkodás; a környezeti akadálymentesítés; a munkaadói-társadalmi attitűdök; és a támogató szolgáltatások elérhetősége.'
},
{
  id:'essay_w10_03', w:10, topic:'Modul tervezése', type:'essay', diff:3, points:6,
  q:'Mutassa be egy munkára és önálló életre felkészítő tanulási modul hat szerkezeti elemét!',
  hint:'Hat elem sorrendben, a ráhangolódástól a zárásig; érdemes az időkeretet is jelölni.',
  hintKeywords:['ráhangolódás/bevezetés','alapkészség-felidézés','új tartalom bemutatása/modellezés','vezetett gyakorlás','önálló, differenciált gyakorlás','zárás, reflexió, értékelés'],
  modelAnswer:'1. Ráhangolódás/bevezetés (kb. 5–10 perc): a napi téma és cél bemutatása, motiválás.\n2. Alapkészség-felidézés (kb. 10 perc): a korábbi ismeretek/rutinok rövid átismétlése.\n3. Új tartalom bemutatása/modellezés (kb. 15 perc): a pedagógus bemutatja és modellezi az új feladatot vagy készséget.\n4. Vezetett gyakorlás (kb. 15–20 perc): a tanulók támogatással, fokozatosan csökkenő segítségnyújtás mellett gyakorolják a feladatot.\n5. Önálló, differenciált gyakorlás (kb. 15–20 perc): a tanulók a saját támogatási szintjüknek megfelelő feladatváltozatot végzik.\n6. Zárás, reflexió és értékelés (kb. 10 perc): közös megbeszélés, visszajelzés, a következő lépések kijelölése.',
  exp:'A hat elem: ráhangolódás, alapkészség-felidézés, új tartalom bemutatása/modellezés, vezetett gyakorlás, önálló differenciált gyakorlás, zárás-reflexió-értékelés.'
},

]; // end EXERCISES_ESSAYS
