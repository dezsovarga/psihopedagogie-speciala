// ─── Exercise Data ───────────────────────────────────────────────────────────
// All content strictly based on the provided solution files.
// Types: 'mc' (multiple choice), 'fill' (fill-blank), 'tf' (true/false),
//        'match' (matching), 'order' (ordering), 'short' (short answer)

const EXERCISES = [

// ════════════════════════════════════════════════════════
// VÁLTOZAT 1 — I. FELADAT: Komplex pszichopedagógiai értékelés
// ════════════════════════════════════════════════════════

{
  id:'w1_01', w:1, topic:'Fogalmak – Értékelés', type:'mc',
  q:'Melyik fogalom leírása: „Elsődleges, gyors eljárás, amelynek célja azon gyermekek azonosítása, akiknél fejlődési eltérés gyanúja merül fel, és mélyebb vizsgálatra van szükség"?',
  opts:['Diagnózis','Pszichopedagógiai értékelés','Szűrés','Funkcionális profil'],
  ans:2,
  exp:'A szűrés (screening) nem diagnosztikus jellegű – csupán jelzőrendszerként működik, és mélyebb vizsgálatra utalja a gyanús eseteket.',
  diff:1
},
{
  id:'w1_02', w:1, topic:'Fogalmak – Értékelés', type:'mc',
  q:'Mit jelent a pszichopedagógiai értékelés?',
  opts:[
    'Egyszeri vizsgálat, amely megnevezi a fogyatékosság típusát',
    'Komplex, multidiszciplináris folyamat, amely a tanuló fejlődési szükségleteit határozza meg',
    'Gyors szűrési eljárás fejlődési eltérések azonosítására',
    'A tanuló erősségeinek és nehézségeinek rövid leírása'
  ],
  ans:1,
  exp:'A pszichopedagógiai értékelés komplex, multidiszciplináris folyamat: standardizált és nem standardizált eszközökkel vizsgálja a kognitív, érzelmi, szociális, kommunikációs és motorikus fejlődést.',
  diff:1
},
{
  id:'w1_03', w:1, topic:'Fogalmak – Értékelés', type:'mc',
  q:'Mi a diagnózis szerepe a pszichopedagógiai folyamatban?',
  opts:[
    'A tanuló iskolai teljesítményének nyomon követése',
    'A szülők tájékoztatása a fejlesztési célokról',
    'A fogyatékosság típusának és súlyosságának megnevezése, az intervenció alapjaként',
    'Standardizált tesztek alkalmazása összehasonlítható adatok gyűjtésére'
  ],
  ans:2,
  exp:'A diagnózis a pszichopedagógiai értékelés alapján felállított szakmai megállapítás – megnevezi a fogyatékosság típusát és súlyosságát, és alapul szolgál az intervencióhoz.',
  diff:1
},
{
  id:'w1_04', w:1, topic:'Fogalmak – Értékelés', type:'mc',
  q:'Melyik állítás igaz a formatív pszichodiagnosztikáról?',
  opts:[
    'Statikus képet ad a tanuló jelenlegi teljesítményéről',
    'Kizárólag standardizált tesztekre épül',
    'A fejlődési potenciált vizsgálja – azt, amit a tanuló megfelelő segítséggel elérhet',
    'Egyszeri, lezáró értékelési aktus'
  ],
  ans:2,
  exp:'A formatív pszichodiagnosztika Vigotszkij ZPD-elvével áll összhangban: nem azt méri, amit a gyermek már tud, hanem azt, amit megfelelő segítséggel képes elérni. Dinamikus és folyamatos jellegű.',
  diff:2
},
{
  id:'w1_05', w:1, topic:'Fogalmak – Értékelés', type:'mc',
  q:'Mit tartalmaz a funkcionális profil?',
  opts:[
    'A tanuló orvosi diagnózisát és gyógyszerezési tervét',
    'A tanuló erősségeinek és nehézségeinek átfogó leírását különböző fejlődési területeken',
    'A tanórai teljesítményt és az osztályzatokat',
    'Az iskolai integrációs terv jogi kereteit'
  ],
  ans:1,
  exp:'A funkcionális profil a tanuló erősségeit és nehézségeit írja le különböző fejlődési területeken (kognitív, kommunikációs, szociális, motorikus stb.). Ez képezi az egyéni intervenciós terv alapját.',
  diff:1
},
{
  id:'w1_06', w:1, topic:'Fogalmak – Értékelés', type:'tf',
  q:'A formatív pszichodiagnosztika lezáró ítéletet ad a tanuló képességeiről, és nem vizsgálja a fejlődési potenciált.',
  ans:false,
  exp:'HAMIS. A formatív pszichodiagnosztika éppen fordítva: nem lezárást, hanem fejlődési folyamatot vizsgál. A tanuló meglévő képességeire és tanulási potenciáljára fókuszál.',
  diff:1
},
{
  id:'w1_07', w:1, topic:'Alapelvek', type:'mc',
  q:'Az értékelés során minden gyermeket egyediként kezelnek, és az értékelés az adott személy sajátosságaihoz igazodik. Ez melyik alapelvet tükrözi?',
  opts:['Komplexitás elve','Multidiszciplinaritás elve','Individualitás elve','Dinamikusság elve'],
  ans:2,
  exp:'Az individualitás elve szerint minden gyermek egyedi, ezért az értékelés az adott személy sajátosságaihoz igazodik.',
  diff:1
},
{
  id:'w1_08', w:1, topic:'Alapelvek', type:'mc',
  q:'Melyik alapelv fejezi ki azt, hogy pszichológus, logopédus, gyógypedagógus, orvos és szociális munkás együttműködésével valósul meg az értékelés?',
  opts:['Individualitás elve','Dinamikusság elve','A család bevonásának elve','Multidiszciplinaritás elve'],
  ans:3,
  exp:'A multidiszciplinaritás elve azt jelenti, hogy különböző szakemberek együttműködésével valósul meg az értékelés – pszichológus, logopédus, gyógypedagógus, orvos, szociális munkás.',
  diff:1
},
{
  id:'w1_09', w:1, topic:'Alapelvek', type:'order',
  q:'Rendezd sorba a komplex pszichopedagógiai értékelés öt alapelvét (a megadott nevük alapján)!',
  items:[
    'Komplexitás elve – valamennyi személyiségterület felölelése',
    'Individualitás elve – minden gyermek egyedi',
    'Dinamikusság elve – folyamatos, fejlődést nyomon követő',
    'Multidiszciplinaritás elve – szakemberek együttműködése',
    'A család bevonásának elve – szülők aktív részvétele'
  ],
  exp:'A öt alapelv: Komplexitás, Individualitás, Dinamikusság, Multidiszciplinaritás, A család bevonása. Ezek mindegyike kötelező az érvényes értékeléshez.',
  diff:2
},
{
  id:'w1_10', w:1, topic:'Fejlődési területek', type:'mc',
  q:'Melyik fejlődési terület vizsgálata NEM tartozik a CES tanulók komplex értékelésének öt kötelező területe közé?',
  opts:[
    'Kognitív fejlődés',
    'Szociális-érzelmi fejlődés',
    'Pszichomotoros fejlődés',
    'Gazdasági-pénzügyi tájékozottság'
  ],
  ans:3,
  exp:'Az öt kötelező terület: Kognitív fejlődés, Kommunikáció és nyelvi fejlődés, Szociális-érzelmi fejlődés, Pszichomotoros fejlődés, Adaptív viselkedés.',
  diff:1
},
{
  id:'w1_11', w:1, topic:'Fejlődési területek', type:'match',
  q:'Párosítsd a fejlődési területet a hozzá tartozó leírással!',
  pairs:[
    {L:'Adaptív viselkedés', R:'Önkiszolgálás, mindennapi életvitel, iskolai alkalmazkodás'},
    {L:'Kognitív fejlődés', R:'Figyelem, emlékezet, gondolkodás, problémamegoldás'},
    {L:'Pszichomotoros fejlődés', R:'Nagy- és finommotoros készségek, térbeli tájékozódás, testséma'},
    {L:'Kommunikáció és nyelvi fejlődés', R:'Expresszív és receptív nyelvi készségek, szókincs'}
  ],
  exp:'Adaptív viselkedés = önkiszolgálás; Kognitív = figyelem/emlékezet; Pszichomotoros = motorika; Kommunikáció = nyelvi készségek.',
  diff:2
},
{
  id:'w1_12', w:1, topic:'Értékelési módszerek', type:'mc',
  q:'Melyik az a dinamikus értékelési módszer, amely tesztelés–tanítás–újratesztelés lépéseken alapul?',
  opts:[
    'Standardizált teszt (WISC)',
    'Formatív pszichodiagnosztika eljárása – dinamikus értékelés',
    'Portfólió értékelés',
    'Megfigyelési ellenőrzőlista'
  ],
  ans:1,
  exp:'A formatív pszichodiagnosztika alkalmazható eljárása a dinamikus értékelés: felmér → célzott segítség → újraértékelés. A különbség megmutatja a tanuló tanulási kapacitását.',
  diff:2
},
{
  id:'w1_13', w:1, topic:'Értékelési módszerek', type:'mc',
  q:'Mi a megfigyelés (observarea) mint értékelési módszer egyik korlátja?',
  opts:[
    'Nem mutatja a valós viselkedést',
    'Torzítja a tesztszorongás',
    'Szubjektív lehet és nehéz standardizálni',
    'Csak normacsoporthoz viszonyít'
  ],
  ans:2,
  exp:'A megfigyelés előnye: természetes környezetben rögzít. Korlátja: szubjektív lehet, időigényes, nehéz standardizálni.',
  diff:2
},
{
  id:'w1_14', w:1, topic:'Értékelési módszerek', type:'mc',
  q:'Mi a standardizált tesztek (pl. WISC, Raven) egyik korlátja?',
  opts:[
    'Nem adnak összehasonlítható adatokat',
    'Nem veszik figyelembe a kulturális és nyelvi különbségeket',
    'Szubjektív értékelési eredményt adnak',
    'Nem alkalmasak normacsoporthoz való viszonyításra'
  ],
  ans:1,
  exp:'A standardizált tesztek előnye az összehasonlíthatóság. Korlátjuk: nem veszik figyelembe a kulturális és nyelvi különbségeket, és statikus képet adnak a teljesítményről.',
  diff:2
},
{
  id:'w1_15', w:1, topic:'Értékelő jelentés', type:'mc',
  q:'Mi NEM része a pszichopedagógiai értékelő jelentésnek?',
  opts:[
    'Az alkalmazott módszerek és eszközök',
    'Az értékelés eredményei fejlődési területenként',
    'A tanuló szülei foglalkozásának részletes leírása',
    'Javaslatok az intervencióra'
  ],
  ans:2,
  exp:'A pszichopedagógiai értékelő jelentés elemei: személyes adatok, értékelés célja, módszerek, eredmények, összefoglaló diagnózis, javaslatok. A szülők foglalkozása nem kötelező eleme.',
  diff:2
},
{
  id:'w1_16', w:1, topic:'Értékelő jelentés', type:'mc',
  q:'Miért szükséges a multidiszciplináris team bevonása az értékelésbe?',
  opts:[
    'Azért, mert egyetlen szakember nem képes a tanuló valamennyi területét kompetensen vizsgálni',
    'Azért, mert a jogi előírások megkövetelik a négy különböző orvos jelenlétét',
    'Azért, hogy a szülők kimaradjanak a döntési folyamatból',
    'Azért, hogy csökkentsék a vizsgálati időt'
  ],
  ans:0,
  exp:'Egyetlen szakember nem képes a tanuló valamennyi területét kompetensen vizsgálni. A team átfogó, megbízható képet nyújt és megelőzi az egyoldalú értékelést.',
  diff:1
},

// ════════════════════════════════════════════════════════
// VÁLTOZAT 1 — II. FELADAT: Foglalkozásterápia és pszichomotorika
// ════════════════════════════════════════════════════════

{
  id:'w1_17', w:1, topic:'Foglalkozásterápia', type:'mc',
  q:'Melyik meghatározás illik legjobban a foglalkozásterápiára?',
  opts:[
    'Olyan pszichiátriai kezelés, amely gyógyszerekkel kezeli a viselkedési zavarokat',
    'Célirányos, értelmes tevékenységek segítségével fejleszti a funkcionális képességeket és elősegíti az önállóságot',
    'Kizárólag fizikai rehabilitációra irányuló orvosi szakdiszciplína',
    'A tanulók tanórai teljesítményét értékelő pedagógiai módszer'
  ],
  ans:1,
  exp:'A foglalkozásterápia (terapia ocupațională) egészségügyi és rehabilitációs szakdiszciplína. Célirányos, értelmes tevékenységekkel fejleszti a funkcionális képességeket és elősegíti az önállóságot és társadalmi részvételt.',
  diff:1
},
{
  id:'w1_18', w:1, topic:'Foglalkozásterápia', type:'mc',
  q:'Mi a foglalkozásterápia kompenzáló funkciója?',
  opts:[
    'A meglévő képességek erősítése, új készségek kialakítása',
    'A másodlagos fogyatékosságok és funkcionális visszaesés megelőzése',
    'A sérült funkciók helyett más képességek mozgósítása, segédeszközök alkalmazása',
    'Az értékelési folyamat dokumentálása és archiválása'
  ],
  ans:2,
  exp:'A három funkció: fejlesztő (meglévő képességek erősítése), kompenzáló (sérült funkciók helyett más képességek mozgósítása, segédeszközök), prevenciós (másodlagos fogyatékosságok megelőzése).',
  diff:2
},
{
  id:'w1_19', w:1, topic:'Foglalkozásterápia', type:'order',
  q:'Rendezd helyes sorrendbe a foglalkozásterápiás folyamat három szakaszát!',
  items:[
    '1. Értékelési szakasz – funkcionális állapot felmérése, eszközök alkalmazása',
    '2. Tervezési és intervenciós szakasz – egyéni fejlesztési terv kidolgozása',
    '3. Értékelési és lezárási szakasz – eredmények monitorozása, dokumentálás'
  ],
  exp:'A három szakasz sorrendben: (1) Értékelési szakasz → (2) Tervezési és intervenciós szakasz → (3) Értékelési és lezárási szakasz.',
  diff:1
},
{
  id:'w1_20', w:1, topic:'Foglalkozásterápia', type:'mc',
  q:'Az ADL (Activities of Daily Living) tevékenységek melyik szervezési formához tartoznak?',
  opts:[
    'Egyéni foglalkozás',
    'Kiscsoportos tevékenység',
    'Mindennapi életviteli tevékenységek',
    'Terápiás csoportos foglalkozás'
  ],
  ans:2,
  exp:'Az ADL – Mindennapi életviteli tevékenységek: önkiszolgálási feladatok (öltözködés, étkezés, higiénia) gyakorlása valós vagy szimulált környezetben.',
  diff:1
},
{
  id:'w1_21', w:1, topic:'Pszichomotorika', type:'mc',
  q:'Mit jelent a testséma (schema corporală)?',
  opts:[
    'A tér irányainak ismerete saját testhez viszonyítva',
    'A domináns oldal következetes alkalmazása',
    'A ritmus és az időbeli sorrend érzékelésének képessége',
    'A saját test részeinek, határainak és mozgáslehetőségeinek tudatos ismerete'
  ],
  ans:3,
  exp:'A testséma (schema corporală): a saját test részeinek, határainak és mozgáslehetőségeinek tudatos ismerete és érzékelése.',
  diff:1
},
{
  id:'w1_22', w:1, topic:'Pszichomotorika', type:'mc',
  q:'Melyik fogalom jelöli a domináns oldal (jobb vagy bal kéz, láb, szem) következetes alkalmazását mozgásos tevékenységek során?',
  opts:['Térbeli tájékozódás','Testséma','Lateralitás','Időbeli tájékozódás'],
  ans:2,
  exp:'A lateralitás a domináns oldal (jobb vagy bal kéz, láb, szem) következetes alkalmazása mozgásos tevékenységek során.',
  diff:1
},
{
  id:'w1_23', w:1, topic:'Pszichomotorika', type:'match',
  q:'Párosítsd a pszichomotorika összetevőit a definícióikkal!',
  pairs:[
    {L:'Testséma', R:'A saját test részeinek és mozgáslehetőségeinek tudatos ismerete'},
    {L:'Térbeli tájékozódás', R:'Fent-lent, jobbra-balra irányok ismerete tárgyakhoz viszonyítva'},
    {L:'Időbeli tájékozódás', R:'Ritmus, időtartam és időbeli sorrend érzékelése'},
    {L:'Lateralitás', R:'Domináns oldal következetes alkalmazása'}
  ],
  exp:'A négy összetevő: Testséma, Térbeli tájékozódás, Időbeli tájékozódás, Lateralitás.',
  diff:2
},

// ════════════════════════════════════════════════════════
// VÁLTOZAT 1 — III. FELADAT: Individualizált tervezés és differenciált oktatás
// ════════════════════════════════════════════════════════

{
  id:'w1_24', w:1, topic:'Differenciálás', type:'mc',
  q:'Mi a különbség a curriculumdifferenciálás és az individualizálás között?',
  opts:[
    'A curriculumdifferenciálás egyéni szintű tervezés, az individualizálás osztályszintű módosítás',
    'A curriculumdifferenciálás az egész osztálynak szóló módosítás közös célok felé, az individualizálás egyéni szintű tervezés',
    'A kettő azonos fogalom, csak a jogszabályi szóhasználat tér el',
    'Az individualizálás kizárólag a tananyag mennyiségét csökkenti'
  ],
  ans:1,
  exp:'Curriculumdifferenciálás: osztályszintű módosítás, mindenki közös célok felé halad. Individualizálás: kizárólag az adott tanuló egyéni szükségleteire irányuló tervezés (PIP keretében).',
  diff:2
},
{
  id:'w1_25', w:1, topic:'Differenciálás', type:'mc',
  q:'Mi a hozzáférési adaptáció?',
  opts:[
    'Az elsajátítandó tananyag mennyiségének csökkentése',
    'Az oktatási eszközök, módszerek vagy környezet módosítása, hogy a tanuló fizikailag és kognitívan hozzáférhessen az ismeretek elsajátításához',
    'A tanuló értékelési módszerének teljes elhagyása',
    'A pedagógus módszertani megközelítésének egységesítése az egész osztályra'
  ],
  ans:1,
  exp:'Hozzáférési adaptáció: az eszközök, módszerek vagy környezet módosítása (pl. Braille-írás, képes instrukciók, hangrögzítő), hogy a tanuló hozzáférhessen az ismeretek elsajátításához.',
  diff:1
},
{
  id:'w1_26', w:1, topic:'PIP', type:'mc',
  q:'Melyik NEM kötelező eleme az egyéni intervenciós tervnek (PIP)?',
  opts:[
    'A tanuló jelenlegi funkcionális szintjének leírása',
    'Hosszú távú és rövid távú célok',
    'A tanuló szüleinek iskolai végzettsége',
    'Az értékelési eljárás és időpont'
  ],
  ans:2,
  exp:'A PIP hat kötelező eleme: funkcionális szint leírása, hosszú távú célok, rövid távú célok, módszerek és eszközök, felelős személyek és szolgáltatások, értékelési eljárás és időpont.',
  diff:1
},
{
  id:'w1_27', w:1, topic:'PIP', type:'order',
  q:'Rendezd sorba az egyéni intervenciós terv (PIP) hat lényeges elemét!',
  items:[
    'Jelenlegi funkcionális szint leírása (erősségek, nehézségek)',
    'Hosszú távú célok – tanév végére elérendő célok',
    'Rövid távú célok – kisebb, mérhető lépések',
    'Alkalmazott módszerek és eszközök',
    'Felelős személyek és szolgáltatások',
    'Értékelési eljárás és időpont'
  ],
  exp:'A PIP hat eleme logikus sorrendben: (1) Jelenlegi szint → (2) Hosszú távú célok → (3) Rövid távú célok → (4) Módszerek → (5) Felelős személyek → (6) Értékelési eljárás.',
  diff:2
},
{
  id:'w1_28', w:1, topic:'SMART célok', type:'mc',
  q:'Mit jelent a SMART rövidítés az oktatási célok meghatározásában?',
  opts:[
    'Szimbolikus, Mérhető, Adaptív, Rövid, Technológiai',
    'Specifikus, Mérhető, Elérhető, Releváns, Időhöz kötött',
    'Strukturált, Módszeres, Automatikus, Rendszeres, Tesztelható',
    'Szociális, Motiváló, Aktív, Rendszeres, Tervezett'
  ],
  ans:1,
  exp:'SMART: Specifikus, Mérhető, Elérhető (Achievable), Releváns, Időhöz kötött (Time-bound). Mindkét célnak ezeket a kritériumokat kell teljesítenie.',
  diff:1
},
{
  id:'w1_29', w:1, topic:'SMART célok', type:'tf',
  q:'Egy jó SMART cél: „Andrei tanuljon meg jobban matematikát." – Ez megfelel a SMART kritériumoknak.',
  ans:false,
  exp:'HAMIS. Ez a cél nem specifikus, nem mérhető és nem időhöz kötött. Helyes SMART cél pl.: „3 hónapon belül, egyéni foglalkozásokon, Andrei képes lesz 10 egyjegyű szám összeadási feladatot legalább 80%-os pontossággal megoldani."',
  diff:2
},
{
  id:'w1_30', w:1, topic:'Tanítási módszerek', type:'mc',
  q:'Hogyan adaptálandó a kooperatív tanulás autizmus spektrumon lévő tanuló számára?',
  opts:[
    'A tanuló egyedül dolgozzon, ne vegyen részt csoportmunkában',
    'A csoportmunka előre strukturált, vizuális napirenden bemutatva; a tanuló szerepe kiszámítható és ismétlődő',
    'A csoportmunkában a tanuló bármilyen szerepet kaphat véletlenszerűen',
    'A tanuló csoporton kívül ül, de figyeli a többieket'
  ],
  ans:1,
  exp:'ASD tanulónál a kooperatív tanulás adaptálása: strukturált, vizuális napirend; kiszámítható és ismétlődő szerep; fizikai közelség és váratlan változások minimalizálva; pedagógus diszkrét jelenléte.',
  diff:2
},

// ════════════════════════════════════════════════════════
// VÁLTOZAT 2 — I. FELADAT: Integrált és inkluzív oktatás
// ════════════════════════════════════════════════════════

{
  id:'w2_01', w:2, topic:'Fogalmak – Inklúzió', type:'mc',
  q:'Melyik fogalom fejezi ki azt, hogy az iskola alkalmazkodik minden tanuló szükségletéhez – nem a tanuló illeszkedik a rendszerhez, hanem a rendszer alakul a tanulóhoz?',
  opts:['Integráció','Normalizáció','Inklúzió','Ésszerű alkalmazkodás'],
  ans:2,
  exp:'Az inklúzió az integráción túlmutató szemlélet: a rendszer alakul a tanulóhoz, nem fordítva. Az inklúzió a sokféleséget értékként kezeli.',
  diff:1
},
{
  id:'w2_02', w:2, topic:'Fogalmak – Inklúzió', type:'mc',
  q:'Mit jelent a normalizáció elve az oktatásban?',
  opts:[
    'A fogyatékossággal élők számára speciális elkülönített iskolák fenntartása',
    'A fogyatékossággal élők jogát a társadalom többi tagjával azonos életkörülményekhez és tanulási lehetőségekhez',
    'Az oktatási rendszer uniformizálása minden tanuló számára',
    'A speciális pedagógiai módszerek alkalmazásának kötelezővé tétele'
  ],
  ans:1,
  exp:'A normalizáció elve: a fogyatékossággal élőknek joguk van a társadalom többi tagjával azonos életkörülményekhez, napi ritmushoz. Oktatásban: lehetőség szerint a lakóhelyükön, kortársaikkal tanulhatnak.',
  diff:1
},
{
  id:'w2_03', w:2, topic:'Fogalmak – Inklúzió', type:'mc',
  q:'Mi az ésszerű alkalmazkodás?',
  opts:[
    'A teljes oktatási rendszer átszervezése kizárólag a CES tanulók igényei szerint',
    'Módosítások összessége, amelyek nem jelentenek aránytalan terhet, mégis lehetővé teszik az egyenlő részvételt',
    'A fogyatékossággal élők számára fenntartott elkülönített oktatási program',
    'A tananyag mennyiségének 50%-os csökkentése minden CES tanuló számára'
  ],
  ans:1,
  exp:'Az ésszerű alkalmazkodás: módosítások, amelyek nem jelentenek aránytalan terhet az intézménynek, mégis lehetővé teszik az egyenlő részvételt (pl. adaptált tananyag, hosszabb vizsgaidő, akadálymentesítés).',
  diff:2
},
{
  id:'w2_04', w:2, topic:'Fogalmak – Inklúzió', type:'match',
  q:'Párosítsd a fogalmakat a definíciójukkal!',
  pairs:[
    {L:'Integráció', R:'CES tanulók elhelyezése többségi iskolákban, az iskola alapstruktúrája lényegében változatlan'},
    {L:'Inklúzió', R:'A rendszer alakul a tanulóhoz, a sokféleséget értékként kezeli'},
    {L:'Normalizáció', R:'Jog az azonos életkörülményekhez, lakóhelyen, kortársakkal tanulni'},
    {L:'Ésszerű alkalmazkodás', R:'Módosítások, amelyek nem aránytalan terhet, mégis egyenlő részvételt biztosítanak'}
  ],
  exp:'Mind a négy fogalom az inklúzió/integráció fogalomköréhez tartozik, de különböző nézőpontból.',
  diff:2
},
{
  id:'w2_05', w:2, topic:'Integrációs modellek', type:'mc',
  q:'Mi jellemzi a részleges integráció (vegyes modell) modelljét?',
  opts:[
    'A CES tanuló teljes munkaidőben a többségi osztályban tanul',
    'A CES tanuló kizárólag speciális iskolában tanul, de kirándulásokra jár a többségi iskolával',
    'A CES tanuló bizonyos tantárgyakat a többségi osztályban tanul, másokat egyéni/kiscsoportos fejlesztő foglalkozáson',
    'A CES tanuló otthon tanul online platformon keresztül'
  ],
  ans:2,
  exp:'Részleges integráció (vegyes modell): a tanuló bizonyos tantárgyakat a többségi osztályban tanul, más tantárgyakból egyéni vagy kiscsoportos fejlesztő foglalkozáson vesz részt.',
  diff:1
},
{
  id:'w2_06', w:2, topic:'Utazó tanár', type:'mc',
  q:'Mi az utazó és támogató tanár egyik alapvető feladata?',
  opts:[
    'Kizárólag az iskolai adminisztráció elvégzése',
    'Pszichopedagógiai értékelés és az osztálytanító tanácsadása az adaptáció módszereiről',
    'A szülők helyettesítése a nevelési folyamatban',
    'Az iskola infrastrukturális fejlesztéseinek tervezése'
  ],
  ans:1,
  exp:'Az utazó tanár 5 feladata: pszichopedagógiai értékelés és tanácsadás, egyéni fejlesztési tervezés, közvetlen fejlesztő munka, együttműködés a pedagógussal, kapcsolattartás a családdal.',
  diff:1
},
{
  id:'w2_07', w:2, topic:'Inklúzió korlátai', type:'mc',
  q:'Melyik a CES tanulók többségi iskolai integrációjának egyik korlátja?',
  opts:[
    'A szociális fejlődés javulása',
    'A társadalmi elfogadás erősítése',
    'A magasabb elvárások motiváló hatása',
    'A pedagógusok hiányos speciális módszertani ismerete'
  ],
  ans:3,
  exp:'A korlátok közé tartozik: erőforráshiány, pedagógusok felkészültségének hiánya, és a szociális kirekesztés kockázata megfelelő felkészítés nélkül.',
  diff:1
},

// ════════════════════════════════════════════════════════
// VÁLTOZAT 2 — II. FELADAT: Hallás- és látássérülés
// ════════════════════════════════════════════════════════

{
  id:'w2_08', w:2, topic:'Hallássérülés', type:'mc',
  q:'Melyik hallástartomány jellemzi a pedagógiai értelemben vett nagyothalló tanulót?',
  opts:['0–25 dB','26–70 dB','70–90 dB','90 dB felett'],
  ans:1,
  exp:'Pedagógiai osztályozás: Nagyothalló: 26–70 dB hallásveszteség. Siket: 70 dB feletti hallásveszteség.',
  diff:2
},
{
  id:'w2_09', w:2, topic:'Látássérülés', type:'mc',
  q:'Melyik látásélességi tartomány jellemzi a pedagógiai értelemben vett vak tanulót?',
  opts:[
    '50–70%-os látóélesség',
    '34–50%-os látóélesség',
    '10–33%-os látóélesség',
    '10% alatti látóélesség'
  ],
  ans:3,
  exp:'Pedagógiai osztályozás: Gyengénlátó: 10–33% látóélesség. Vak: 10% alatti (vagy teljes vakság). A vakság esetén az oktatás tapintásos és hallási csatornán valósul meg, Braille-írással.',
  diff:2
},
{
  id:'w2_10', w:2, topic:'Demutizálás', type:'mc',
  q:'Mit jelent a demutizálás?',
  opts:[
    'A siket tanulók jelnyelvi oktatása kizárólag vizuális csatornán',
    'Speciális pedagógiai folyamat, amelynek célja a siket vagy mutizált gyermekek funkcionális kommunikációjának kialakítása',
    'A tanuló hangzó nyelvre fordítása tolmács segítségével',
    'Audiológiai vizsgálat a hallásveszteség mértékének meghatározásához'
  ],
  ans:1,
  exp:'A demutizálás speciális pedagógiai folyamat: a cél nem csupán a hang előhívása, hanem a funkcionális kommunikáció kialakítása siket vagy súlyos kommunikációs zavarral küzdő gyermekeknél.',
  diff:2
},
{
  id:'w2_11', w:2, topic:'Demutizálás', type:'mc',
  q:'Melyik kommunikációs módszer a demutizálás során egyszerre több csatornát alkalmaz: jelnyelvet, szájmozgást, gesztusokat, írást és képi kommunikációt?',
  opts:['Orális-auditív módszer','Jelnyelv','Totális kommunikáció','Finger-spelling'],
  ans:2,
  exp:'A totális kommunikáció rugalmasan igazodik a tanuló szintjéhez: egyszerre alkalmaz jelnyelvet, szájmozgást, hangos beszédet, gesztusokat, írást és képi kommunikációt.',
  diff:1
},
{
  id:'w2_12', w:2, topic:'Siketvaság', type:'mc',
  q:'Mi a siketvaság (deafblindness)?',
  opts:[
    'A siketség és a vakság egymástól független, de egyidejű előfordulása',
    'A hallás és a látás egyidejű súlyos sérülése; önálló fogyatékossági kategória, amelynél a tapintásos csatorna a fő kommunikációs út',
    'Kizárólag a veleszületett hallás- és látássérülés kombinációja',
    'Enyhe halláskárosodás és gyengénlátás egyidejű megjelenése'
  ],
  ans:1,
  exp:'A siketvaság nem csupán két fogyatékosság összeadódása, hanem önálló kategória. Hatása jóval meghaladja a részfogyatékosságok külön-külön vett következményeit. A fő kommunikációs csatorna a tapintás.',
  diff:2
},
{
  id:'w2_13', w:2, topic:'Siketvaság', type:'mc',
  q:'Mi a taktilis (tapintásos) jelnyelv?',
  opts:[
    'Braille-betűk ujjheggyel való olvasása',
    'Olyan módszer, amelyben a siketvak személy tenyerével érzi a kommunikációs partner jeleit',
    'Tenyérre írt betűk rendszere, ahol pontok és érintések jelölik a betűket',
    'Dombornyomott képi szimbólumrendszer'
  ],
  ans:1,
  exp:'A taktilis jelnyelv: a siketvak személy kezét a partner kezére helyezi, és tapintással érzékeli a jeleket. Olyan személyek számára alkalmazható, akik korábban jelnyelvet tanultak.',
  diff:2
},
{
  id:'w2_14', w:2, topic:'Siketvaság', type:'mc',
  q:'Mi a Lorm-ábécé?',
  opts:[
    'Braille-írás elektronikus változata',
    'Speciális tenyérírás-rendszer, amelyben a betűk a tenyér meghatározott pontjain tett érintéseknek felelnek meg',
    'Jelnyelv siketvak személyek számára, amely kézformákat alkalmaz',
    'Kommunikációs szoftver, amely szöveget hangra alakít'
  ],
  ans:1,
  exp:'A Lorm-ábécé: speciális tenyérírás-rendszer, ahol a betűk a tenyér meghatározott pontjain tett érintések. Gyors és diszkrét kommunikációt tesz lehetővé.',
  diff:2
},
{
  id:'w2_15', w:2, topic:'Segítő technológia', type:'mc',
  q:'Mire való az FM-rendszer (frekvenciamoduláción alapuló hangátviteli rendszer)?',
  opts:[
    'Látássérült tanulók számára a képernyőn lévő szöveg hanggá alakítására',
    'Hallássérült tanulók számára: a pedagógus hangja közvetlenül a tanuló hallókészülékébe kerül, kiküszöbölve a háttérzajt',
    'AAC rendszer nem verbális tanulók kommunikációs támogatására',
    'Tanterem akusztikai kezelésének mérőrendszere'
  ],
  ans:1,
  exp:'Az FM-rendszer hallássérült tanulóknak szól. A pedagógus mikrofonba beszél, a jel közvetlenül a tanuló hallókészülékébe vagy fejhallgatójába kerül, kiküszöbölve a háttérzajt és a távolság okozta csillapítást.',
  diff:1
},

// ════════════════════════════════════════════════════════
// VÁLTOZAT 2 — III. FELADAT: Olvasás-írás és számolás
// ════════════════════════════════════════════════════════

{
  id:'w2_16', w:2, topic:'Olvasás-írás előfeltételek', type:'mc',
  q:'Melyik az olvasás-írás tanulásának perceptív-motoros előfeltétele?',
  opts:[
    'Szociális kompetencia – képesség az osztálytársakkal való együttműködésre',
    'Vizuális diszkrimináció – hasonló formák, betűk megkülönböztetésének képessége',
    'Matematikai gondolkodás – számok és műveletek ismerete',
    'Zenei képességek – ritmusérzék és hallás'
  ],
  ans:1,
  exp:'Az öt előfeltétel: (1) Vizuális diszkrimináció, (2) Auditív diszkrimináció és fonológiai tudatosság, (3) Lateralitás és irányvétel, (4) Finommotoros készségek, (5) Szókincs és szóbeli kifejezőképesség.',
  diff:1
},
{
  id:'w2_17', w:2, topic:'Olvasás-írás előfeltételek', type:'mc',
  q:'Mit jelent a fonológiai tudatosság mint olvasás-írás előfeltétel?',
  opts:[
    'A betűk vizuális formájának felismerése és megkülönböztetése',
    'A ceruza megfelelő fogása és a vonalvezetés készsége',
    'A szavak hangokból épülnek fel; a hangok, szótagok és rímek azonosítása és megkülönböztetése',
    'A jobb-bal irány ismerete és a bal-jobb olvasási irány követése'
  ],
  ans:2,
  exp:'Auditív diszkrimináció és fonológiai tudatosság: a tanuló azonosítja és megkülönbözteti a hangokat, szótagokat, rímelő szavakat; felismeri, hogy a szavak hangokból épülnek fel.',
  diff:2
},
{
  id:'w2_18', w:2, topic:'Olvasás-írás szakaszai', type:'order',
  q:'Rendezd helyes sorrendbe az olvasás-írás elsajátításának három szakaszát!',
  items:[
    'Előábécés szakasz (logografikus) – globális szófelismerés, könyvek iránti érdeklődés',
    'Ábécés szakasz (alfabetikus) – betű-hang megfeleltetés, dekódolás',
    'Ábécé utáni szakasz (ortografikus) – szóképek, automatizált dekódolás, szövegértés'
  ],
  exp:'A sorrendja: (1) Előábécés (logografikus) → (2) Ábécés (alfabetikus) → (3) Ábécé utáni (ortografikus). Minden szakasz az előzőre épül.',
  diff:1
},
{
  id:'w2_19', w:2, topic:'Olvasás-írás szakaszai', type:'mc',
  q:'Mi jellemzi az ábécé utáni (ortografikus) szakaszt?',
  opts:[
    'A gyermek felismeri a saját nevét és néhány ismert szót vizuális formájuk alapján',
    'A tanuló betűnként olvas és tanul betű-hang megfeleltetést',
    'A dekódolás automatizálódik, a tanuló szóképek alapján olvas, megjelenik a helyesírási tudatosság',
    'A tanuló csak nyomtatott szöveget tud olvasni, az írott betűket nem ismeri'
  ],
  ans:2,
  exp:'Az ábécé utáni (ortografikus) szakaszban a dekódolás automatizálódik. A figyelem a szöveg tartalmára irányul. Az olvasás szóegységenként zajlik, az írás egyre folyékonyabb, megjelenik a helyesírási tudatosság.',
  diff:2
},
{
  id:'w2_20', w:2, topic:'Olvasás módszere', type:'mc',
  q:'Mi a fonetikus-analitikus-szintetikus módszer analitikus eljárásának lényege?',
  opts:[
    'Az egyes hangok és betűk összerakása szavakká és mondatokká',
    'A kiinduló pont egy ismert egész szó vagy mondat, amelyet fokozatosan elemeznek szótagokra, majd hangokra',
    'Minden egyes betű külön tanítása a teljes ábécé megtanulásáig',
    'A hangos felolvasás és az azonnali visszajelzés kombinálása'
  ],
  ans:1,
  exp:'Analitikus eljárás: az egész szóból/mondatból kiindulva elemzés kisebb egységekre (szótagok → hangok). A hangok így mindig értelmes, természetes szövegkörnyezetből kerülnek kiemelésre.',
  diff:2
},
{
  id:'w2_21', w:2, topic:'Számolás tanítása', type:'mc',
  q:'Melyik szint jelent konkrét szintet a természetes szám fogalmának kialakításában CES tanulóknál?',
  opts:[
    'Számjegy mint elvont szimbólum megismerése és írása',
    'Pontok és pálcikák mint szemikonkrét szimbólumok alkalmazása',
    'Tárgyak számlálása és csoportosítása, manipulálható tárgyakkal',
    'Számegyenesen való ábrázolás és számsorozatok'
  ],
  ans:2,
  exp:'A három szint: (1) Konkrét – tárgyakkal való manipuláció (kövek, gombok, korongok); (2) Szemikonkrét – tárgyak képei, pontok, pálcikák; (3) Szimbolikus – számjegy mint elvont szimbólum.',
  diff:1
},
{
  id:'w2_22', w:2, topic:'Számolás tanítása', type:'order',
  q:'Rendezd sorba az összeadás tanításának lépéseit!',
  items:[
    'Konkrét manipuláció: tárgyakat összerakunk két csoportból (3 alma + 2 alma)',
    'Rajzzal, képpel szemléltetjük a műveletet',
    'Bevezetjük a + és = jeleket; a tanuló maga írja le a műveletet',
    'Számegyenesen ábrázoljuk az összeadást (ugrálás jobbra)',
    'Emlékezeti szintű rögzítés: automatizált feladatok'
  ],
  exp:'Az összeadás tanításának sorrendje: konkrét → képi → jelolvasás/írás → számegyenes → memorizálás. Mindig a konkréttól az absztrakt felé haladunk.',
  diff:2
},

// ════════════════════════════════════════════════════════
// VÁLTOZAT 3 — I. FELADAT: Autizmus spektrum és ADHD
// ════════════════════════════════════════════════════════

{
  id:'w3_01', w:3, topic:'Fogalmak – ASD/ADHD', type:'mc',
  q:'Mi az autizmus spektrum (ASD) definíciója?',
  opts:[
    'Figyelemhiányos állapot, amelynek fő jellemzői az impulzivitás és a hiperaktivitás',
    'Neurofejlődési állapot, amelyet a szociális kommunikáció tartós nehézségei és korlátozott, ismétlődő viselkedésminták jellemeznek',
    'Tanulási zavar, amely kizárólag az olvasás és az írás területén okoz nehézséget',
    'Értelmi fogyatékosság, amelyet alacsony IQ-pont jellemez'
  ],
  ans:1,
  exp:'Az ASD neurofejlődési állapot: szociális kommunikáció/interakció tartós nehézségei + korlátozott, ismétlődő viselkedésminták. Spektrumjellegű – széles skálán mozognak a szükségletek.',
  diff:1
},
{
  id:'w3_02', w:3, topic:'Fogalmak – ASD/ADHD', type:'mc',
  q:'Mi a végrehajtó funkció (executive function)?',
  opts:[
    'Az egyén képessége az impulzusok gátlására és az érzelmek kezelésére',
    'A frontális lebenyhez kötött magasabb rendű kognitív folyamatok: tervezés, szervezés, monitorozás, rugalmas módosítás',
    'A szociális interakció és kommunikáció szabályozásáért felelős idegrendszeri folyamat',
    'Az érzékszervi ingerek feldolgozásának és integrációjának folyamata'
  ],
  ans:1,
  exp:'A végrehajtó funkció a frontális lebenyhez kötött folyamatok összessége: tervezés, szervezés, indítás, monitorozás, rugalmas módosítás. Ide tartozik a munkamemória, az inhibíció, a kognitív rugalmasság.',
  diff:2
},
{
  id:'w3_03', w:3, topic:'Fogalmak – ASD/ADHD', type:'mc',
  q:'Mi a funkcionális viselkedéselemzés (FBA) célja?',
  opts:[
    'A tanuló intellektuális képességeinek standardizált mérése',
    'A problémás viselkedés mögöttes okának (funkciójának) azonosítása az ABC-modell segítségével',
    'Az iskolai teljesítmény és a tanárok elvárásainak összehasonlítása',
    'A tanulási zavar típusának és súlyosságának meghatározása'
  ],
  ans:1,
  exp:'Az FBA strukturált értékelési folyamat: azonosítja a viselkedés funkcióját az ABC-modell (Antecedensek – Behavior/Viselkedés – Következmények) segítségével, hogy célzott intervenciós terv legyen kidolgozható.',
  diff:2
},
{
  id:'w3_04', w:3, topic:'ASD jellemzők', type:'mc',
  q:'Melyik ASD-re JELLEMZŐ viselkedési jellemző?',
  opts:[
    'Fokozott szociális érdeklődés és széles körű kortársi kapcsolatok',
    'Rugalmas alkalmazkodás az újszerű helyzetekhez',
    'Korlátozott, ismétlődő viselkedés: rituálékhoz való ragaszkodás, sztereotip mozgásminták',
    'Folyamatos mozgásigény és impulzív cselekvés'
  ],
  ans:2,
  exp:'ASD három jellemzője: (1) Szociális kommunikáció/interakció nehézségei, (2) Korlátozott, ismétlődő viselkedés és érdeklődés (rituálék, sztereotip mozgások), (3) Szenzoros feldolgozás eltérései.',
  diff:1
},
{
  id:'w3_05', w:3, topic:'ADHD jellemzők', type:'mc',
  q:'Melyik az ADHD impulzivitásának jellemző megnyilvánulása?',
  opts:[
    'Szűk körű, intenzív érdeklődési területek és rituálékhoz való ragaszkodás',
    'Cselekvés meggondolás nélkül; mások mondatainak befejezése; azonnali jutalmazásra törekvés',
    'Erős szorongás a váratlan változások hatására',
    'Hiper- vagy hiposzenzitivitás érzékszervi ingerekkel szemben'
  ],
  ans:1,
  exp:'Az ADHD impulzivitása: cselekvés meggondolás nélkül, mások mondatainak befejezése, nehézség a várakozással, azonnali jutalmazásra törekvés, a következmények előzetes mérlegelésének hiánya.',
  diff:1
},
{
  id:'w3_06', w:3, topic:'Intervenciós módszerek', type:'mc',
  q:'Mit jelent az ABA (Applied Behavior Analysis – Alkalmazott viselkedéselemzés)?',
  opts:[
    'Strukturált tanulási környezet és vizuálisan szervezett feladatrendszer ASD tanulók számára',
    'Képkártyák cseréjén alapuló augmentatív kommunikációs rendszer',
    'Rövid, személyre szabott szociális történetek a szociális helyzetek előkészítésére',
    'Viselkedéslélektani elveken alapuló megközelítés: kívánatos viselkedések megerősítése, nem kívánatosak nem jutalmazása'
  ],
  ans:3,
  exp:'Az ABA kívánatos viselkedéseket megerősítéssel erősít meg, a helyettesítő viselkedést tanítja. A tanítás kis, mérhető lépésekre bontott, adatokon alapuló folyamatos monitorozással kísért.',
  diff:1
},
{
  id:'w3_07', w:3, topic:'Intervenciós módszerek', type:'mc',
  q:'Mi a TEACCH-módszer alapelve?',
  opts:[
    'Képkártyák cseréjén alapuló kommunikáció hat fázisban',
    'A strukturált tanítás: az osztályterem fizikailag és időben egyértelműen tagolt, vizuálisan szervezett',
    'Megerősítésen alapuló viselkedésmódosítás kis, mérhető lépésekben',
    'Szociális narratívák alkalmazása váratlan helyzetek előkészítésére'
  ],
  ans:1,
  exp:'A TEACCH strukturált tanítása: munkaállomások, vizuális napi rend, feladatdobozok. Fejleszti az önálló munkavégzést, rutinkövetést, feladatbefejezési képességet; csökkenti a bizonytalanságból eredő szorongást.',
  diff:1
},
{
  id:'w3_08', w:3, topic:'Intervenciós módszerek', type:'mc',
  q:'Hány fázisból áll a PECS (Képcsere kommunikációs rendszer)?',
  opts:['2 fázis','4 fázis','6 fázis','8 fázis'],
  ans:2,
  exp:'A PECS hat fázisban halad: képcsere → távolság növelése → kép kiválasztása → mondatalkotás → spontán kérés → kérdések megválaszolása.',
  diff:2
},
{
  id:'w3_09', w:3, topic:'Intervenciós módszerek', type:'mc',
  q:'Ki dolgozta ki a szociális narratívákat (Social Stories™)?',
  opts:['B.F. Skinner','Lev Vigotszkij','Carol Gray','Eric Schopler'],
  ans:2,
  exp:'Carol Gray dolgozta ki a Social Stories™ módszert. Rövid, személyre szabott történetek ismertetik a szociális helyzetek menetét, az elvárható viselkedést és mások nézőpontját.',
  diff:2
},
{
  id:'w3_10', w:3, topic:'Intervenciós módszerek', type:'match',
  q:'Párosítsd az intervenciós módszert a leírásával!',
  pairs:[
    {L:'ABA', R:'Megerősítésen alapuló, adatvezérelt viselkedésmódosítás kis lépésekben'},
    {L:'TEACCH', R:'Strukturált tanulási környezet, vizuális napirend, munkaállomások'},
    {L:'PECS', R:'Képkártyák cseréjén alapuló, hat fázisú kommunikációs rendszer'},
    {L:'Szociális narratívák', R:'Rövid személyre szabott történetek a szociális helyzetek előkészítésére'}
  ],
  exp:'Mind a négy módszer bizonyítékalapú, és egymást kiegészítve alkalmazható ASD tanulók fejlesztésében.',
  diff:2
},
{
  id:'w3_11', w:3, topic:'PBS', type:'mc',
  q:'Melyik állítás írja le helyesen a pozitív viselkedéstámogatás (PBS) lényegét?',
  opts:[
    'Kizárólag a problémás viselkedések szankcionálásán alapuló reaktív megközelítés',
    'Proaktív, megelőző szemléletű megközelítés: kívánatos viselkedések megerősítése, a tanuló erősségeire épít',
    'Gyógyszeres kezelés és viselkedéses terápia kombinációja',
    'A tanuló problémás viselkedéseinek fizikai kényszerítéssel való megakadályozása'
  ],
  ans:1,
  exp:'A PBS proaktív, megelőző, emberi méltóságot tiszteletben tartó, bizonyítékalapú módszer. Erősíti a tanuló–pedagógus kapcsolatot és önszabályozást épít ki.',
  diff:1
},
{
  id:'w3_12', w:3, topic:'PBS', type:'tf',
  q:'A PBS keretein belül alkalmazható fizikai fájdalmat okozó beavatkozás, ha ez az egyetlen hatékony módszer az adott viselkedés leállítására.',
  ans:false,
  exp:'HAMIS. A PBS egyik etikai korlátja: tilos fizikai fájdalmat, megalázást vagy szorongáskeltést okozó beavatkozásokat alkalmazni. A tanuló méltóságát minden körülmény között tiszteletben kell tartani.',
  diff:1
},
{
  id:'w3_13', w:3, topic:'Viselkedés funkciója', type:'mc',
  q:'Az FBA-modell szerint melyik a problémás viselkedés NÉGY lehetséges funkciója?',
  opts:[
    'Agresszió, menekülés, játék, alvás',
    'Figyelem elérése, tárgy/tevékenység elérése, kellemetlenség elkerülése, szenzoros stimuláció',
    'Kommunikáció, szabálykövetés, szociális részvétel, önkifejezés',
    'Bosszú, félelem, unalom, utánzás'
  ],
  ans:1,
  exp:'Az FBA ABC-modellje szerint négy lehetséges funkció: (1) figyelem elérése, (2) tárgy vagy tevékenység elérése, (3) kellemetlenség elkerülése, (4) szenzoros stimuláció (öningerlés).',
  diff:2
},

// ════════════════════════════════════════════════════════
// VÁLTOZAT 3 — II. FELADAT: Kognitív stimuláció és autonómia
// ════════════════════════════════════════════════════════

{
  id:'w3_14', w:3, topic:'Kognitív stimuláció', type:'mc',
  q:'Mi a kognitív stimuláció?',
  opts:[
    'A tanuló IQ-jának mérésére irányuló standardizált eljárás',
    'Tervezett, strukturált tevékenységrendszer a kognitív funkciók fenntartására, fejlesztésére vagy rehabilitációjára',
    'Gyógyszeres kezelés a kognitív teljesítmény javítására',
    'A tananyag mennyiségének csökkentése a tanuló terhelésének mérséklésére'
  ],
  ans:1,
  exp:'A kognitív stimuláció tervezett, strukturált tevékenységrendszer. Az agyi plaszticitást kihasználva, motiváló és értelmes tevékenységeken keresztül fejleszti a figyelmet, emlékezetet, észlelést, gondolkodást, problémamegoldást, nyelvet.',
  diff:1
},
{
  id:'w3_15', w:3, topic:'Logikai-matematikai fogalmak', type:'mc',
  q:'Melyik logikai-matematikai alapfogalomhoz illeszkedik a következő tevékenység: „A tanuló minden tányérhoz pontosan egy villát helyez"?',
  opts:['Osztályozás (szeriáció)','Sorozatalkotás (szeriálás)','Megfeleltetés (bijekció)','Megmaradás elve'],
  ans:2,
  exp:'A megfeleltetés (bijekció): elemek egy-egy hozzárendelése két halmaz között. A tányér-villa feladat klasszikus bijekciógyakorlat, amely megalapozza az egyenlő mennyiség fogalmát.',
  diff:2
},
{
  id:'w3_16', w:3, topic:'Logikai-matematikai fogalmak', type:'mc',
  q:'Mi a megmaradás elve (conservation)?',
  opts:[
    'Tárgyak sorba rendezése növekvő vagy csökkenő sorrend szerint',
    'Elemek egy-egy hozzárendelése két halmaz között',
    'Annak felismerése, hogy egy mennyiség nem változik meg attól, hogy más formában jelenik meg',
    'Tárgyak csoportosítása közös tulajdonság alapján'
  ],
  ans:2,
  exp:'A megmaradás elve (Piaget): a mennyiség nem változik meg pusztán attól, hogy más formában vagy elrendezésben jelenik meg. A klasszikus feladat: azonos mennyiségű víz különböző alakú poharakban.',
  diff:2
},
{
  id:'w3_17', w:3, topic:'Kognitív fejlesztő practice', type:'order',
  q:'Rendezd helyes sorrendbe egy kognitív fejlesztő gyakorlat általános szerkezetét!',
  items:[
    '1. Ráhangolódás / motiváló bevezető (2–3 perc)',
    '2. A feladat ismertetése és modellezés (3–5 perc)',
    '3. Irányított gyakorlás (5–10 perc)',
    '4. Önálló gyakorlás és értékelés (5–10 perc)'
  ],
  exp:'A négy szakasz: (1) Ráhangolódás → (2) Modellezés → (3) Irányított gyakorlás → (4) Önálló gyakorlás. A segítség fokozatosan csökken (scaffolding).',
  diff:1
},
{
  id:'w3_18', w:3, topic:'Autonómia', type:'mc',
  q:'Melyik NEM tartozik a személyes és társadalmi autonómia fejlesztési területei közé?',
  opts:[
    'Önkiszolgálási készségek',
    'Háztartási és praktikus készségek',
    'Emelt szintű irodalmi ismeretek',
    'Biztonságos közlekedés és tájékozódás'
  ],
  ans:2,
  exp:'A négy fejlesztési terület: (1) Önkiszolgálási készségek, (2) Háztartási és praktikus készségek, (3) Szociális és kommunikációs készségek, (4) Biztonságos közlekedés és tájékozódás.',
  diff:1
},
{
  id:'w3_19', w:3, topic:'Feladatelemzés', type:'mc',
  q:'Mi a feladatelemzés (task analysis) szerepe az autonómiafejlesztésben?',
  opts:[
    'Egyszeri összefoglaló értékelést készít a tanuló teljesítményéről',
    'Összetett készségeket apró, egymást követő, mérhető lépésekre bont, lehetővé téve a lépésenkénti elsajátítást',
    'A tanuló IQ-értékét méri a fejlesztési célok meghatározásához',
    'A segítség mennyiségét automatikusan növeli nehézségek esetén'
  ],
  ans:1,
  exp:'A feladatelemzés összetett készségeket (pl. fogmosás, öltözkedés) apró lépésekre bont. A tanuló nem az egész feladattal szembesül egyszerre, és a pedagógus meghatározhatja, melyik lépésnél van szükség segítségre.',
  diff:1
},
{
  id:'w3_20', w:3, topic:'Feladatelemzés', type:'mc',
  q:'Mi a visszatartó láncolás (backward chaining)?',
  opts:[
    'A tanuló az első lépéstől kezd el önállóan dolgozni, és fokozatosan hozzáadódnak a következő lépések',
    'A pedagógus elvégzi az összes lépést a tanuló helyett, kivéve az utolsót – a tanuló az utolsó lépésnél él át sikerélményt',
    'A feladat lépéseit visszafelé tanítjuk, az utolsótól az első felé haladva',
    'A segítség automatikusan visszatér, ha a tanuló hibát követ el'
  ],
  ans:1,
  exp:'A visszatartó láncolás: a pedagógus elvégzi az összes lépést, kivéve az utolsót. A tanuló mindig a befejező lépésnél él át sikerélményt, majd fokozatosan veszi át a korábbi lépések felelősségét is.',
  diff:2
},
{
  id:'w3_21', w:3, topic:'Feladatelemzés', type:'mc',
  q:'Mi a „prompt dependency" (segítségre való ráutaltság)?',
  opts:[
    'Az a helyzet, amikor a tanuló csak segítséggel képes befejezni a feladatot, anélkül nem kezd bele',
    'A prompt fading helyes alkalmazásának eredménye',
    'A backward chaining egyik szakasza',
    'A pedagógus által adott fizikai segítség neve'
  ],
  ans:0,
  exp:'A prompt dependency (segítségre való ráutaltság) azt jelenti, hogy a tanuló csak segítséggel hajlandó vagy képes cselekedni. A prompt fading célja éppen ennek megakadályozása.',
  diff:2
},

// ════════════════════════════════════════════════════════
// VÁLTOZAT 3 — III. FELADAT: Curriculum adaptáció és UDL
// ════════════════════════════════════════════════════════

{
  id:'w3_22', w:3, topic:'Curriculum fogalmak', type:'mc',
  q:'Mi a különbség az adaptált curriculum és a differenciált curriculum között?',
  opts:[
    'Az adaptált curriculum osztályszintű módosítás közös célok felé; a differenciált egyéni, módosított célokat tartalmaz',
    'A differenciált curriculum osztályszintű módosítás közös célok felé; az adaptált egyéni, módosított célokat tartalmaz',
    'A kettő azonos, csak az életkortól függően alkalmazzák őket',
    'Az adaptált curriculum csak a tartalmat módosítja, a differenciált csak a folyamatot'
  ],
  ans:1,
  exp:'Differenciált curriculum: osztályszintű, közös célok. Adaptált curriculum: CES tanulóknak, csökkentett/módosított/alternatív célok, a PIP részét képezi.',
  diff:2
},
{
  id:'w3_23', w:3, topic:'UDL', type:'mc',
  q:'Mi az Univerzális Tanulástervezés (UDL/DUA) alapelve?',
  opts:[
    'Minden tanuló számára azonos tananyagot és módszert kell alkalmazni',
    'Az oktatási tartalom, módszer és értékelés rugalmas, eleve sokféle tanulóra gondolt kialakítása – a különbség nem kivétel, hanem norma',
    'A CES tanulók számára külön, speciális tantervet kell kidolgozni minden tantárgyból',
    'Az értékelést csak szóbeli formában szabad végezni a méltányosság érdekében'
  ],
  ans:1,
  exp:'UDL/DUA: csökkenti az utólagos adaptáció szükségességét. Alapelve: a különbség nem kivétel, hanem norma. A tartalom, módszer és értékelés rugalmasan, előre sokféle tanulóra gondolva tervezett.',
  diff:1
},
{
  id:'w3_24', w:3, topic:'UDL', type:'mc',
  q:'Az UDL második alapelve (a cselekvés és kifejezés többféle módja) mire vonatkozik?',
  opts:[
    'Arra, hogy az információt különböző formátumokban kell hozzáférhetővé tenni',
    'Arra, hogy a tanulók különböző módokon adhatják vissza tudásukat – ne csak az írásbeli feladatmegoldás legyen elfogadott',
    'Arra, hogy a tanulók bevonódását és motivációját személyes relevanciával kell biztosítani',
    'Arra, hogy az értékelés kizárólag formatív legyen'
  ],
  ans:1,
  exp:'Az UDL három alapelve: (1) Reprezentáció többféle módja – Mit tanulunk? (2) Cselekvés és kifejezés többféle módja – Hogyan mutatjuk meg? (3) Érdeklődés és motiváció többféle módja – Miért tanulunk?',
  diff:2
},
{
  id:'w3_25', w:3, topic:'IKT', type:'mc',
  q:'Melyik az IKT alkalmazásának előnye a speciális oktatásban?',
  opts:[
    'Az IKT minden tanuló számára szenzorosan megfelelő és biztonságos',
    'Az IKT önmagában garantálja a hatékony tanulást',
    'Személyre szabhatóság: digitális eszközök a tanuló tempójához, szintjéhez igazíthatók valós idejű visszajelzéssel',
    'Az IKT megszünteti a digitális egyenlőtlenséget az iskolák között'
  ],
  ans:2,
  exp:'Az IKT előnyei: személyre szabhatóság, motiváció és bevonódás növelése, kommunikációs segédeszközök (AAC alkalmazások). Korlátok: egyenlőtlen hozzáférés, szenzoros kihívások, pedagógiai minőség kockázata.',
  diff:1
},
{
  id:'w3_26', w:3, topic:'IKT', type:'tf',
  q:'A digitális eszközök minden autizmus spektrumon lévő tanuló számára szenzorosan megfelelőek, mivel interaktív és motiváló tartalmat kínálnak.',
  ans:false,
  exp:'HAMIS. Az IKT egyik korlátja: egyes ASD tanulók számára a képernyő fénye, hangjai vagy a változó vizuális ingerek megterhelőek lehetnek. Az IKT nem minden esetben szenzorosan megfelelő.',
  diff:2
},

// ════════════════════════════════════════════════════════
// VEGYES – Összefoglaló feladatok
// ════════════════════════════════════════════════════════

{
  id:'mix_01', w:0, topic:'Összefoglalás', type:'mc',
  q:'Melyik fogalom jelöli azt a tervezési keretrendszert, amely az oktatás rugalmas, eleve sokféle tanulóra gondolt kialakítását célozza a speciális oktatásban?',
  opts:['Adaptált curriculum','Differenciált curriculum','Univerzális tanulástervezés (UDL)','Egyéni intervenciós terv (PIP)'],
  ans:2,
  exp:'Az Univerzális Tanulástervezés (UDL/DUA) csökkenti az utólagos adaptáció szükségességét. A különbség nem kivétel, hanem norma.',
  diff:1
},
{
  id:'mix_02', w:0, topic:'Összefoglalás', type:'mc',
  q:'Melyik módszer alkalmazható az autizmus spektrumon lévő, nem verbális tanulók kommunikációjának megalapozására?',
  opts:['TEACCH','ABA','PECS','PBS'],
  ans:2,
  exp:'A PECS (Képcsere kommunikációs rendszer) kifejezetten a nem vagy alig verbális ASD tanulók számára fejlesztett AAC rendszer, amely képkártyák cseréjén alapuló kommunikációt tanít hat fázisban.',
  diff:1
},
{
  id:'mix_03', w:0, topic:'Összefoglalás', type:'mc',
  q:'Mi az inklúzió és az integráció közötti legfontosabb különbség?',
  opts:[
    'Az integráció a tanuló szemszögéből nézi a befogadást, az inklúzió az iskola szemszögéből',
    'Az integrációban a tanuló alkalmazkodik a rendszerhez; az inklúzióban a rendszer alkalmazkodik a tanulóhoz',
    'Az inklúzió csak az enyhén fogyatékos tanulókra vonatkozik, az integráció mindenre',
    'A kettő azonos, különböző jogszabályi környezetben alkalmazzák őket'
  ],
  ans:1,
  exp:'Integráció: a tanuló alkalmazkodik az iskola meglévő struktúrájához. Inklúzió: a rendszer alakul a tanulóhoz, a sokféleséget értékként kezeli.',
  diff:1
},
{
  id:'mix_04', w:0, topic:'Összefoglalás', type:'mc',
  q:'Melyik szinten kezdődik a természetes szám fogalmának tanítása CES tanulóknál?',
  opts:[
    'Szimbolikus szintről – számjegy és jelrendszer bevezetésével',
    'Szemikonkrét szintről – pontok és pálcikák segítségével',
    'Konkrét szintről – kézzel fogható, manipulálható tárgyakkal',
    'Absztrakt szintről – elvont matematikai fogalmakkal'
  ],
  ans:2,
  exp:'A természetes szám fogalmát mindig a konkrét szintről kezdjük tanítani: tárgyak számlálása, csoportosítása, manipulálható eszközökkel (kövek, gombok, korongok). Innen haladunk a szemikonkrét, majd szimbolikus szint felé.',
  diff:1
},
{
  id:'mix_05', w:0, topic:'Összefoglalás', type:'mc',
  q:'Mi a portfólió mint értékelési eszköz legfőbb jellemzője?',
  opts:[
    'Egyetlen alkalommal mért, statikus teljesítményt rögzít',
    'A tanuló munkáinak gyűjteménye, amely hosszabb időszak fejlődését dokumentálja',
    'Standardizált normacsoporthoz viszonyítja a tanuló teljesítményét',
    'Kizárólag szóbeli teljesítmény értékelésére alkalmas'
  ],
  ans:1,
  exp:'A portfólió a tanuló munkáinak, rajzainak, feladatlapjainak gyűjteménye – hosszabb időszak fejlődését dokumentálja, ellentétben a pontszerű, statikus mérőeszközökkel.',
  diff:1
}

,

// ════════════════════════════════════════════════════════
// KIEGÉSZÍTŐ – Töltsd ki! és Rövid válasz típusú feladatok
// ════════════════════════════════════════════════════════

{
  id:'fill_01', w:1, topic:'Fogalmak – Értékelés', type:'fill',
  q:'Egészítsd ki: A szűrés nem diagnosztikus jellegű, csupán ____________ rendszerként működik.',
  ans:'jelző',
  exp:'A szűrés (screening) jelzőrendszerként működik: azonosítja a gyanús eseteket és mélyebb vizsgálatra utalja őket.',
  diff:1
},
{
  id:'fill_02', w:1, topic:'Fogalmak – Értékelés', type:'fill',
  q:'Egészítsd ki: A formatív pszichodiagnosztika Vigotszkij ____________ elvével áll összhangban.',
  ans:'ZPD',
  exp:'A formatív pszichodiagnosztika a Legközelebbi Fejlődési Zóna (ZPD – Zona Proximei Dezvoltări) elvével áll összhangban.',
  diff:2
},
{
  id:'fill_03', w:1, topic:'Pszichomotorika', type:'fill',
  q:'Egészítsd ki: A pszichomotorika négy összetevője: testséma, térbeli tájékozódás, időbeli tájékozódás és ____________.',
  ans:'lateralitás',
  exp:'A lateralitás a domináns oldal (jobb vagy bal kéz, láb, szem) következetes alkalmazása mozgásos tevékenységek során.',
  diff:1
},
{
  id:'fill_04', w:2, topic:'Fogalmak – Inklúzió', type:'fill',
  q:'Egészítsd ki: Az inkluzív iskolában a ____________ alakul a tanulóhoz – nem fordítva.',
  ans:'rendszer',
  exp:'Az inklúzió alapelve: nem a tanuló illeszkedik a rendszerhez, hanem a rendszer alakul a tanulóhoz. A sokféleséget értékként kezeli.',
  diff:1
},
{
  id:'fill_05', w:2, topic:'Olvasás-írás szakaszai', type:'fill',
  q:'Egészítsd ki: Az olvasás-írás elsajátításának három szakasza: előábécés, ____________ és ábécé utáni szakasz.',
  ans:'ábécés',
  exp:'A három szakasz: (1) Előábécés (logografikus), (2) Ábécés (alfabetikus), (3) Ábécé utáni (ortografikus).',
  diff:1
},
{
  id:'fill_06', w:3, topic:'Intervenciós módszerek', type:'fill',
  q:'Egészítsd ki: A PECS a Picture Exchange Communication System rövidítése, magyarul ____________ kommunikációs rendszer.',
  ans:'képcsere',
  exp:'A PECS (Képcsere kommunikációs rendszer) képkártyák cseréjén alapuló augmentatív és alternatív kommunikációs (AAC) rendszer.',
  diff:1
},
{
  id:'fill_07', w:3, topic:'Feladatelemzés', type:'fill',
  q:'Egészítsd ki: A segítség fokozatos csökkentésének neve angolul prompt ____________.',
  ans:'fading',
  exp:'A prompt fading (segítség fokozatos elhalványítása) megakadályozza a prompt dependency (segítségre való ráutaltság) kialakulását.',
  diff:2
},
{
  id:'fill_08', w:1, topic:'PIP', type:'fill',
  q:'Egészítsd ki: Az egyéni intervenciós terv magyar rövidítése ____________ (románul Plan de Intervenție Personalizat).',
  ans:'PIP',
  exp:'A PIP (Plan de Intervenție Personalizat / Egyéni intervenciós terv) hat kötelező elemet tartalmaz.',
  diff:1
},
{
  id:'short_01', w:1, topic:'Alapelvek', type:'short',
  q:'Sorold fel a komplex pszichopedagógiai értékelés öt alapelvét!',
  keywords:['komplexitás','individualitás','dinamikusság','multidiszciplinaritás','család'],
  exp:'Az öt alapelv: (1) Komplexitás – valamennyi terület felölelése; (2) Individualitás – egyéni sajátosságokhoz igazodás; (3) Dinamikusság – folyamatos nyomon követés; (4) Multidiszciplinaritás – szakemberek együttműködése; (5) A család bevonása.',
  diff:2
},
{
  id:'short_02', w:1, topic:'Foglalkozásterápia', type:'short',
  q:'Nevezd meg a foglalkozásterápia három funkcióját!',
  keywords:['fejlesztő','kompenzáló','prevenciós'],
  exp:'A három funkció: (1) Fejlesztő – meglévő képességek erősítése, új készségek kialakítása; (2) Kompenzáló – sérült funkciók helyett más képességek mozgósítása; (3) Prevenciós – másodlagos fogyatékosságok megelőzése.',
  diff:2
},
{
  id:'short_03', w:2, topic:'Utazó tanár', type:'short',
  q:'Sorold fel az utazó és támogató tanár öt alapvető feladatát (kulcsszavakban)!',
  keywords:['értékelés','tervezés','fejlesztő','együttműködés','kapcsolattartás'],
  exp:'Az 5 feladat: (1) Pszichopedagógiai értékelés és tanácsadás; (2) Egyéni fejlesztési tervezés; (3) Közvetlen fejlesztő munka; (4) Együttműködés a pedagógussal; (5) Kapcsolattartás a családdal.',
  diff:2
},
{
  id:'short_04', w:3, topic:'Intervenciós módszerek', type:'short',
  q:'Írj egy-egy kulcsszót minden módszerhez: ABA, TEACCH, PECS, Szociális narratívák!',
  keywords:['megerősítés','strukturált','képcsere','történet'],
  exp:'ABA = megerősítés (viselkedésmódosítás); TEACCH = strukturált (tanulási környezet); PECS = képcsere (kommunikáció); Szociális narratívák = történet (szociális helyzetek előkészítése).',
  diff:2
},
{
  id:'short_05', w:3, topic:'UDL', type:'short',
  q:'Nevezd meg az UDL/DUA három alapelvét!',
  keywords:['reprezentáció','cselekvés','motiváció'],
  exp:'Az UDL három alapelve: (1) A reprezentáció többféle módja (Mit tanulunk?); (2) A cselekvés és kifejezés többféle módja (Hogyan mutatjuk meg?); (3) Az érdeklődés és motiváció többféle módja (Miért tanulunk?).',
  diff:2
}

]; // end EXERCISES

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getExercisesByWorksheet(w) {
  if (w === 'mix') return [...EXERCISES];
  if (w === 0) return EXERCISES.filter(e => e.w === 0);
  return EXERCISES.filter(e => e.w === w || e.w === 0);
}

function getReviewExercises(progress) {
  const due = Object.entries(progress)
    .filter(([id, p]) => p.interval === 1 && p.seen > 0)
    .map(([id]) => id);
  return EXERCISES.filter(e => due.includes(e.id));
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
