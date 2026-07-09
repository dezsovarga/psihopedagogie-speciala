// Valós vizsgatétel — 2020 (3. változat)
// Forrás: real_exam_subjects/gyakorlas_2020_megoldasok.docx
// Egy önálló, évenkénti szekció. w: 2020 (a w érték maga az év).
// Minden kérdéstípust ez az egy fájl tartalmaz (standard + define + essay + list).
const EXERCISES_REAL_2020 = [
  // ─── I. téma – Az SNI/CES tanulók fejlődésének értékelése ──────────────────
  {
    id:'real_2020_01', w:2020, topic:'Értékelés', type:'mc', diff:2,
    q:'Mi az értékelési folyamat a speciális oktatásban?',
    opts:[
      'A tanulók osztályzatainak év végi összesítése',
      'A tanuló fejlődésére, teljesítményére és szükségleteire vonatkozó releváns adatok rendszeres, megtervezett és folyamatos összegyűjtésének, elemzésének és értelmezésének folyamata',
      'A tananyag heti óraszámra bontása',
      'A szülők tájékoztatása a hiányzásokról'
    ],
    ans:1,
    exp:'Az értékelés a tanuló fejlődésére, teljesítményére és szükségleteire vonatkozó adatok rendszeres, megtervezett és folyamatos összegyűjtése, elemzése és értelmezése; nem csupán mennyiségi mérés, hanem a fejlődési folyamatok mélyreható megértése a személyre szabott előrehaladás érdekében.'
  },
  {
    id:'real_2020_02', w:2020, topic:'Értékelés', type:'mc', diff:2,
    q:'Mi jellemzi az értékelés diagnosztikai funkcióját?',
    opts:[
      'Kizárólag a hiányosságok és hibák feltárására korlátozódik',
      'A tanuló valós fejlettségi szintjét és egyéni szükségleteit határozza meg, azonosítva a személyes erőforrásokat, a fejlődési lehetőségeket és az akadályozó tényezőket is',
      'Csak az intelligenciahányados mérésére szolgál',
      'A pedagógus munkájának értékelését jelenti'
    ],
    ans:1,
    exp:'A diagnosztikai funkció nem korlátozódik a hiányosságok feltárására: azonosítja a személyes erőforrásokat, a fejlődési lehetőségeket és az akadályozó tényezőket is, lehetővé téve a beavatkozás személyre szabását és reális célok kitűzését.'
  },
  {
    id:'real_2020_03', w:2020, topic:'Értékelés', type:'order', diff:2,
    q:'Helyezze sorrendbe a folyamatos értékelés három, egymást kiegészítő szakaszát!',
    items:[
      'Kezdeti (kiinduló) értékelés',
      'Fejlesztő (folyamat közbeni) értékelés',
      'Összegző (ciklus végi) értékelés'
    ],
    exp:'Az értékelés folyamatos: a kezdeti, a fejlesztő (folyamat közbeni) és az összegző (ciklus végi) értékelés egymást kiegészítő szakaszok.'
  },
  {
    id:'real_2020_04', w:2020, topic:'Értékelés', type:'mc', diff:2,
    q:'Mit jelent az inkluzív értékelés?',
    opts:[
      'Az értékelési módok kiválasztása a tanuló tanulási stílusa szerint',
      'Az eszközök, kritériumok és módszerek hozzáigazítása a tanulók sokféleségéhez úgy, hogy fogyatékosságuk vagy nehézségeik alapján ne érje őket hátrányos megkülönböztetés',
      'Kizárólag a leggyengébb tanulók vizsgálata',
      'A tanulók rangsorolása a csoportátlaghoz képest'
    ],
    ans:1,
    exp:'Az inkluzív értékelés az eszközök, kritériumok és módszerek hozzáigazítása a tanulók sokféleségéhez, hogy fogyatékosságuk vagy nehézségeik alapján ne érje őket hátrányos megkülönböztetés. (A differenciált értékelés az egyes tanulók sajátosságai szerinti adaptálást jelenti.)'
  },
  {
    id:'real_2020_05', w:2020, topic:'Értékelés', type:'tf', diff:2,
    q:'Az inkluzív és a differenciált értékelés a csoportnormákkal való összehasonlítás helyett a tanuló személyes fejlődésére összpontosít.',
    ans:true,
    exp:'Igaz. Mindkét értékelési forma tiszteletben tartja a tanuló esélyegyenlőséghez való jogát, és a csoportnormákkal való összehasonlítás helyett a személyes fejlődésre összpontosít.'
  },
  {
    id:'real_2020_06', w:2020, topic:'Értékelés', type:'short', diff:2,
    q:'Nevezzen meg legalább két fejlődési területet, amelyet az óvodáskori és kisiskoláskori értékelésnek vizsgálnia kell!',
    keywords:['kognitív', 'mozgásos'],
    exp:'Az óvodás- és kisiskoláskori értékelés a teljes fejlődést vizsgálja: kognitív területet (gondolkodás, nyelv), mozgásos területet (koordináció, finommotorika) és szociális-érzelmi területet (interakció, érzelemszabályozás), játékos, életkorhoz igazított eszközökkel, a család bevonásával.'
  },

  // ─── II. téma – A fejlődést meghatározó tényezők ──────────────────────────
  {
    id:'real_2020_07', w:2020, topic:'Fejlődési tényezők', type:'mc', diff:2,
    q:'Melyik állítás igaz az öröklődésre a 2020-as megközelítés szerint?',
    opts:[
      'Kizárólag pozitív képességek átadását jelenti',
      'A genetikai anyag útján átadott biológiai, kognitív és érzelmi jellemzők összessége, amely kedvezhet képességek kialakulásának, de hiányosságok vagy sérülékenységek megjelenésének is',
      'Csak a testmagasságot és a testsúlyt határozza meg',
      'A környezet hatásainak összessége'
    ],
    ans:1,
    exp:'Az öröklődés a szülőktől az utódokra genetikai anyag útján átadott biológiai, kognitív és érzelmi jellemzők összessége; kedvezhet képességek (pl. intelligencia, kreativitás) kialakulásának, de hiányosságok vagy sérülékenységek (genetikai fogyatékosságok, tanulási zavarok) megjelenésének is.'
  },
  {
    id:'real_2020_08', w:2020, topic:'Fejlődési tényezők', type:'match', diff:2,
    q:'Párosítsa az emberi szervezet fejlődési szintjét a tartalmával!',
    pairs:[
      { L:'Biológiai fejlődés', R:'Testi növekedés, a szervrendszerek érése, fiziológiai funkciók' },
      { L:'Kognitív fejlődés', R:'Gondolkodás, emlékezet, figyelem, nyelv, képzelet' },
      { L:'Szociális-érzelmi fejlődés', R:'Társas kapcsolatok, érzelemszabályozás, empátia, identitás' },
      { L:'Nevelés', R:'Tudatos, szervezett folyamat a képességek fejlesztésére' }
    ],
    exp:'A fejlődés három szintje: biológiai (testi növekedés, érés), kognitív (gondolkodás, nyelv, képzelet) és szociális-érzelmi (kapcsolatok, empátia, identitás). A nevelés a képességek fejlesztésének tudatos folyamata.'
  },
  {
    id:'real_2020_09', w:2020, topic:'Fejlődési tényezők', type:'match', diff:2,
    q:'Párosítsa a környezeti tényezőt a fejlődésre gyakorolt hatásával!',
    pairs:[
      { L:'Család', R:'Érzelmi támogatás, viselkedési modellek, első pedagógiai tapasztalatok' },
      { L:'Iskola', R:'Kognitív, társas és erkölcsi készségek, munkavégzési szokások' },
      { L:'Kortárscsoport', R:'Társas készségek, identitás, viselkedésszabályozás' },
      { L:'Közösségi és kulturális környezet', R:'Attitűdök, értékek, önérvényesítési lehetőségek' }
    ],
    exp:'A család érzelmi támogatást és modelleket ad; az iskola készségeket és munkaszokásokat fejleszt; a kortárscsoport a társas készségeket és identitást formálja; a közösségi-kulturális környezet az attitűdöket és értékeket alakítja.'
  },
  {
    id:'real_2020_10', w:2020, topic:'Fejlődési tényezők', type:'tf', diff:2,
    q:'Az adaptált nevelés kompenzálhatja a genetikai korlátokat és a környezeti hátrányokat, lehetőséget adva az SNI/CES gyermeknek a számára lehetséges legmagasabb fejlettségi szint elérésére.',
    ans:true,
    exp:'Igaz. A nevelés kiegyensúlyozza az örökletes és környezeti hatásokat: ösztönzi a megmaradt képességeket, korrigálja a hiányosságokat, megelőzi a társuló zavarokat, és támogatja az integrációt.'
  },
  {
    id:'real_2020_11', w:2020, topic:'Fejlődési tényezők', type:'mc', diff:2,
    q:'Mi a nevelés szerepe a fejlődésben az öröklődés mellett?',
    opts:[
      'Rögzíti a genetikai hajlamokat, változtatás nélkül',
      'Ösztönzi és irányítja a fejlődést, kibontakoztatja a genetikai lehetőségeket és korrigálja az esetleges hiányosságokat; SNI/CES gyermekeknél rehabilitációs és kompenzáló módon támogatja a kompetenciák kialakulását',
      'Kizárólag a testi fejlődést segíti',
      'Helyettesíti a családi környezetet'
    ],
    ans:1,
    exp:'A nevelés ösztönzi és irányítja a fejlődést, kibontakoztatja a genetikai lehetőségeket és korrigálja a hiányosságokat; SNI/CES gyermekeknél az adaptált nevelés rehabilitációs és kompenzáló módon támogatja a funkcionális, társas és érzelmi kompetenciák kialakulását.'
  },

  // ─── III. téma – A pszichopedagógus módszertani kompetenciái ──────────────
  {
    id:'real_2020_12', w:2020, topic:'Tanterv', type:'mc', diff:2,
    q:'Mit jelent a differenciált tanterv?',
    opts:[
      'A tanulók osztályzatainak differenciálását',
      'A standard tanterv olyan adaptációja, amely a tanulók sokféle pedagógiai szükségletére válaszol: a tartalmak, célok és módszerek kiválasztását úgy alakítja, hogy támogassa az egyéni tanulást, hasznosítsa az erősségeket és kompenzálja a nehézségeket',
      'Egy külön iskolatípus a fogyatékos tanulók számára',
      'A tananyag heti óraszámának rögzítése'
    ],
    ans:1,
    exp:'A differenciált tanterv a standard tanterv adaptációja, amely a tanulók – köztük az SNI/CES tanulók – sokféle szükségletére válaszol; úgy szervezi a tartalmakat, célokat és módszereket, hogy támogassa az egyéni tanulást, hasznosítsa az erősségeket és kompenzálja a nehézségeket.'
  },
  {
    id:'real_2020_13', w:2020, topic:'Tanterv', type:'mc', diff:2,
    q:'Mi a tantárgyi program (programa școlară)?',
    opts:[
      'A tanuló egyéni fejlesztési naplója',
      'Hivatalos tantervi dokumentum, amely minden tantárgy esetében részletezi a pedagógiai célokat, az általános és sajátos kompetenciákat, a tartalmakat, a módszertani javaslatokat és az értékelés módjait',
      'Az iskolai szünetek beosztása',
      'A pedagógus óravázlata'
    ],
    ans:1,
    exp:'A tantárgyi program hivatalos tantervi dokumentum, amely minden tantárgy vagy tanulási terület esetében részletezi a pedagógiai célokat, az általános és sajátos kompetenciákat, a tartalmakat, a módszertani javaslatokat és az értékelés módjait.'
  },
  {
    id:'real_2020_14', w:2020, topic:'Tanterv', type:'mc', diff:3,
    q:'Mi az egyik különbség az elmélyítő CDȘ-tanterv és az új választható tantárgy között az osztálynaplóban való értékelés szempontjából?',
    opts:[
      'Egyik sem kerül értékelésre',
      'Az elmélyítő tanterv értékelése az alap tantárgy rovatában jelenik meg, míg az új választható tantárgy külön értékelési rovatot kap',
      'Mindkettő ugyanabban a rovatban jelenik meg',
      'Az új választható tantárgyat nem kell értékelni'
    ],
    ans:1,
    exp:'Az elmélyítő tanterv a törzsanyagban már szereplő kompetenciákat fejleszti, és értékelése az alap tantárgy rovatában jelenik meg; az új választható tantárgy új területeket vezet be, és külön értékelési rovatot kap.'
  },
  {
    id:'real_2020_15', w:2020, topic:'Kompetenciák', type:'mc', diff:2,
    q:'Mit fejeznek ki a sajátos kompetenciák?',
    opts:[
      'A pedagógus általános pedagógiai céljait',
      'Az általános kompetenciákból származó, műveleti formában megfogalmazott konkrét tanulási eredményeket, amelyek az egyes modulok vagy ciklusok végén várhatók',
      'A tanuló magatartási jegyét',
      'A heti óraszámot'
    ],
    ans:1,
    exp:'A sajátos kompetenciák az általános kompetenciákból származnak, és műveleti formában fogalmazzák meg az egyes modulok vagy tanulmányi ciklusok végén várható konkrét tanulási eredményeket.'
  },
  {
    id:'real_2020_16', w:2020, topic:'Értékelés', type:'fill', diff:2,
    q:'Az értékelési eszközök __________ azt jelenti, hogy az eszköz pontosan azt méri, amit mérni kíván, kiküszöbölve a torzító tényezőket.',
    ans:'érvényessége',
    exp:'Az értékelési eszközök érvényessége azt jelenti, hogy pontosan azt mérik, amit mérni kívánnak; releváns és megbízható adatokat adnak, és kiküszöbölik a torzító tényezőket (pl. kétértelmű megfogalmazás).'
  },
  {
    id:'real_2020_17', w:2020, topic:'Matematika tanítása', type:'order', diff:2,
    q:'Helyezze sorrendbe az értelmi fogyatékossággal élő tanulók matematikai számolástanításának lépéseit (a konkréttól az elvont felé)!',
    items:[
      'A számfogalom kialakítása valós tárgyak manipulálásával',
      'Az összeadás és kivonás fogalmának elsajátítása konkrét helyzetekből',
      'Egyszerű, mindennapi életből vett szöveges feladatok megoldása'
    ],
    exp:'A funkcionális, fokozatos stratégia a konkréttól az elvont felé halad: (1) számfogalom kialakítása tárgyak manipulálásával, (2) összeadás/kivonás konkrét helyzetekből, (3) egyszerű szöveges feladatok megoldása képek és verbális támogatás segítségével.'
  },
  {
    id:'real_2020_18', w:2020, topic:'Matematika tanítása', type:'tf', diff:1,
    q:'Az értelmi fogyatékossággal élő tanulók matematikai számolásának tanítása funkcionális és fokozatos megközelítést igényel, a konkréttól az elvont felé haladva.',
    ans:true,
    exp:'Igaz. A stratégia konkrét tárgyak manipulálásából indul, vizuális, verbális és taktilis támogatással, rendszeres gyakorlással és a sikerek pozitív megerősítésével.'
  },
  {
    id:'real_2020_19', w:2020, topic:'IKT', type:'mc', diff:2,
    q:'Az IKT melyik szerepe segíti a verbális önkifejezésben nehézségekkel küzdő tanulókat?',
    opts:[
      'Az információhoz való hozzáférés képernyőolvasóval',
      'Az alternatív és augmentatív kommunikációs (AAC) alkalmazások, amelyek segítik a gondolatok és szükségletek kifejezését',
      'A nehézségi szint módosítása',
      'A tanulás tempójának személyre szabása'
    ],
    ans:1,
    exp:'A kommunikációs támogatás szerepében az alternatív és augmentatív kommunikációs (AAC) alkalmazások segítik a verbális önkifejezésben nehézségekkel küzdő tanulókat gondolataik és szükségleteik kifejezésében.'
  },

  // ─── Felsorolás (list) típus ──────────────────────────────────────────────
  {
    id:'real_2020_21', w:2020, topic:'Értékelés', type:'list', diff:2, need:3,
    q:'Sorolja fel az értékelési folyamat három kritériumát!',
    items:[
      { label:'Érvényesség', alt:['érvényes'] },
      { label:'Megbízhatóság', alt:['megbízható'] },
      { label:'Relevancia', alt:['releváns'] }
    ],
    exp:'A három kritérium: érvényesség (azt méri, amit kell), megbízhatóság (állandó eredmények) és relevancia (jelentős adatok a beavatkozás tervezéséhez).'
  },
  {
    id:'real_2020_22', w:2020, topic:'Értékelés', type:'list', diff:2, need:3,
    q:'Sorolja fel a fogyatékossággal élő tanulók értékelésének négy alapvető kérdését!',
    items:[
      { label:'Mit tud a gyermek elvégezni?', alt:['mit tud', 'elvégezni', 'képes'] },
      { label:'Milyen nehézségekkel találkozik?', alt:['nehézség'] },
      { label:'Milyen fejlődési lehetőségekkel rendelkezik?', alt:['fejlődési lehetőség', 'lehetőség'] },
      { label:'Milyen támogatásra van szüksége?', alt:['támogatás', 'segítség', 'adaptáció'] }
    ],
    exp:'A négy kérdés: Mit tud a gyermek elvégezni? Milyen nehézségekkel találkozik? Milyen fejlődési lehetőségekkel rendelkezik? Milyen támogatásra van szüksége a fejlődéshez?'
  },
  {
    id:'real_2020_23', w:2020, topic:'Fejlődési tényezők', type:'list', diff:1, need:3,
    q:'Sorolja fel az emberi szervezet fejlődésének három szintjét!',
    items:[
      { label:'Biológiai fejlődés', alt:['biológiai'] },
      { label:'Kognitív fejlődés', alt:['kognitív'] },
      { label:'Szociális-érzelmi fejlődés', alt:['szociális', 'érzelmi'] }
    ],
    exp:'A három szint: biológiai, kognitív és szociális-érzelmi fejlődés.'
  },
  {
    id:'real_2020_24', w:2020, topic:'Értékelés', type:'list', diff:3, need:3,
    q:'Sorolja fel az SNI/CES gyermekek megismerését irányító három szempontot!',
    items:[
      { label:'A kognitív és szociális-érzelmi fejlődés szintje', alt:['kognitív', 'szociális-érzelmi', 'fejlődés szintje'] },
      { label:'A környezethez és a pedagógiai követelményekhez való alkalmazkodás', alt:['alkalmazkodás'] },
      { label:'Kommunikációs módok és tanulási stílusok', alt:['kommunikáció', 'tanulási stílus'] }
    ],
    exp:'A három szempont: a kognitív és szociális-érzelmi fejlődés szintje; a környezethez és pedagógiai követelményekhez való alkalmazkodás; a kommunikációs módok és az előnyben részesített tanulási stílusok.'
  },
  {
    id:'real_2020_25', w:2020, topic:'IKT', type:'list', diff:2, need:3,
    q:'Sorolja fel az IKT négy fő szerepét a fogyatékossággal élő tanulók aktív tanulási környezetében!',
    items:[
      { label:'Hozzáférés az információhoz', alt:['hozzáférés', 'képernyőolvasó'] },
      { label:'Alkalmazkodás az egyéni tempóhoz', alt:['egyéni tempó', 'személyre szabott', 'ismétlés'] },
      { label:'A motiváció ösztönzése', alt:['motiváció', 'bevonódás'] },
      { label:'Kommunikációs támogatás', alt:['kommunikáció', 'aac', 'augmentatív'] }
    ],
    exp:'Az IKT négy szerepe: hozzáférés az információhoz, alkalmazkodás az egyéni tempóhoz, a motiváció ösztönzése, valamint kommunikációs támogatás (AAC).'
  },

  // ─── Fogalommeghatározás (define) – Claude által értékelt ──────────────────
  {
    id:'real_2020_def_01', w:2020, topic:'Értékelés', type:'define', diff:2, points:2,
    q:'Határozza meg az értékelési folyamat fogalmát a speciális oktatásban!',
    modelAnswer:'Értékelési folyamat: a tanuló fejlődésére, teljesítményére és szükségleteire vonatkozó releváns adatok rendszeres, megtervezett és folyamatos összegyűjtésének, elemzésének és értelmezésének folyamata, amelynek feladata az egyes gyermekek kognitív, szociális-érzelmi és mozgásos sajátosságaihoz igazított pedagógiai útvonal támogatása. Nem kizárólag mennyiségi mérés, hanem a fejlődési és tanulási folyamatok mélyreható megértése is.',
    exp:'A tanuló fejlődésére/teljesítményére/szükségleteire vonatkozó adatok rendszeres, tervezett, folyamatos összegyűjtése, elemzése, értelmezése a személyre szabott előrehaladásért.'
  },
  {
    id:'real_2020_def_02', w:2020, topic:'Értékelés', type:'define', diff:2, points:2,
    q:'Határozza meg az értékelés diagnosztikai funkcióját!',
    modelAnswer:'Diagnosztikai funkció: az értékelés azon szerepe, amely a tanuló valós fejlettségi szintjét és egyéni pedagógiai szükségleteit határozza meg; nem korlátozódik a hiányosságok feltárására, hanem azonosítja a személyes erőforrásokat, a fejlődési lehetőségeket és az előrehaladást akadályozó tényezőket is, lehetővé téve a beavatkozás személyre szabását.',
    exp:'A valós fejlettségi szint és a szükségletek meghatározása; a személyes erőforrások, fejlődési lehetőségek és akadályok azonosítása a beavatkozás személyre szabásához.'
  },
  {
    id:'real_2020_def_03', w:2020, topic:'Értékelés', type:'define', diff:2, points:2,
    q:'Határozza meg az inkluzív értékelés fogalmát!',
    modelAnswer:'Inkluzív értékelés: az eszközök, kritériumok és módszerek hozzáigazítása a tanulók sokféleségéhez úgy, hogy fogyatékosságuk vagy nehézségeik alapján ne érje őket hátrányos megkülönböztetés.',
    exp:'Az eszközök, kritériumok és módszerek hozzáigazítása a tanulók sokféleségéhez, a hátrányos megkülönböztetés elkerülésével.'
  },
  {
    id:'real_2020_def_04', w:2020, topic:'Értékelés', type:'define', diff:2, points:2,
    q:'Határozza meg a differenciált értékelés fogalmát!',
    modelAnswer:'Differenciált értékelés: az értékelési módok kiválasztása és adaptálása minden tanuló sajátosságai szerint, figyelembe véve tanulási stílusát, egyéni fejlődési ütemét és előnyben részesített kifejezési módjait (szóbeli, írásbeli, vizuális vagy gyakorlati forma).',
    exp:'Az értékelési módok kiválasztása és adaptálása a tanuló tanulási stílusa, üteme és kifejezési módjai szerint.'
  },
  {
    id:'real_2020_def_05', w:2020, topic:'Fejlődési tényezők', type:'define', diff:2, points:2,
    q:'Határozza meg az öröklődés fogalmát!',
    modelAnswer:'Öröklődés: a szülőktől az utódokra genetikai anyag útján átadott biológiai, kognitív és érzelmi jellemzők összessége. Meghatározza az egyén testi, értelmi, viselkedéses és érzelmi fejlődésére való hajlamokat; kedvezhet képességek kialakulásának, de hiányosságok vagy sérülékenységek megjelenésének is.',
    exp:'A genetikai anyag útján átadott biológiai, kognitív és érzelmi jellemzők összessége, amely hajlamokat határoz meg.'
  },
  {
    id:'real_2020_def_06', w:2020, topic:'Fejlődési tényezők', type:'define', diff:2, points:2,
    q:'Határozza meg a környezet fogalmát mint fejlődési tényezőt!',
    modelAnswer:'Környezet: az egyén formálódása és fejlődése során rá ható külső – családi, társadalmi, kulturális, gazdasági és természeti – hatások összessége. A nyújtott ingerek és lehetőségek minőségétől függően serkentheti, támogathatja vagy gátolhatja a fejlődést.',
    exp:'A fejlődésre ható külső (családi, társadalmi, kulturális, gazdasági, természeti) hatások összessége, amely serkentheti vagy gátolhatja a fejlődést.'
  },
  {
    id:'real_2020_def_07', w:2020, topic:'Fejlődési tényezők', type:'define', diff:2, points:2,
    q:'Határozza meg a nevelés fogalmát!',
    modelAnswer:'Nevelés: tudatos, szervezett és rendszeres folyamat, amely az egyén kognitív, érzelmi, erkölcsi és társas képességeinek kialakítására és fejlesztésére, valamint aktív és felelős társadalmi beilleszkedésére irányul; az öröklődés által biztosított lehetőségekre hat, miközben felhasználja a környezet erőforrásait.',
    exp:'Tudatos, szervezett, rendszeres folyamat a képességek fejlesztésére és a társadalmi beilleszkedésre; az öröklött lehetőségekre hat, a környezet erőforrásait felhasználva.'
  },
  {
    id:'real_2020_def_08', w:2020, topic:'Fejlődési szintek', type:'define', diff:2, points:2,
    q:'Határozza meg a kognitív fejlődés fogalmát!',
    modelAnswer:'Kognitív fejlődés: a magasabb pszichikus folyamatok – gondolkodás, emlékezet, figyelem, nyelv és képzelet – kialakulása, amely alapvető az iskolai és társadalmi alkalmazkodáshoz szükséges ismeretek és kompetenciák megszerzéséhez.',
    exp:'A magasabb pszichikus folyamatok (gondolkodás, emlékezet, figyelem, nyelv, képzelet) kialakulása.'
  },
  {
    id:'real_2020_def_09', w:2020, topic:'Tanterv', type:'define', diff:3, points:2,
    q:'Határozza meg a differenciált tanterv fogalmát!',
    modelAnswer:'Differenciált tanterv: a standard tanterv olyan adaptációja, amely a tanulók – köztük az SNI/CES tanulók – sokféle pedagógiai szükségletére válaszol. A tartalmak, célok és tanítási módszerek kiválasztását és szervezését úgy alakítja, hogy támogassa az egyéni tanulást, hasznosítsa az erősségeket és kompenzálja a nehézségeket.',
    exp:'A standard tanterv adaptációja a tanulók sokféle szükségletére: egyéni tanulást támogat, erősségeket hasznosít, nehézségeket kompenzál.'
  },
  {
    id:'real_2020_def_10', w:2020, topic:'Tanterv', type:'define', diff:3, points:2,
    q:'Határozza meg a tantárgyi program (programa școlară) fogalmát!',
    modelAnswer:'Tantárgyi program: hivatalos tantervi dokumentum, amely minden tantárgy vagy tanulási terület esetében részletezi a pedagógiai célokat, az általános és sajátos kompetenciákat, a tartalmakat, a módszertani javaslatokat és az értékelés módjait; biztosítja a tanítási-tanulási folyamat összhangját.',
    exp:'Hivatalos dokumentum, amely tantárgyanként részletezi a célokat, kompetenciákat, tartalmakat, módszertani javaslatokat és értékelést.'
  },
  {
    id:'real_2020_def_11', w:2020, topic:'Kompetenciák', type:'define', diff:2, points:2,
    q:'Határozza meg a sajátos kompetenciák fogalmát!',
    modelAnswer:'Sajátos kompetenciák: az általános kompetenciákból származó, műveleti formában megfogalmazott konkrét tanulási eredmények, amelyek az egyes modulok vagy tanulmányi ciklusok végén várhatók; a pedagógiai célokat összetettségük és gyakorlati alkalmazhatóságuk szerint rendezik.',
    exp:'Az általános kompetenciákból származó, műveleti formában megfogalmazott konkrét tanulási eredmények egy modul/ciklus végére.'
  },
  {
    id:'real_2020_def_12', w:2020, topic:'Kompetenciák', type:'define', diff:2, points:2,
    q:'Határozza meg a (tantervi) tartalmak fogalmát!',
    modelAnswer:'Tartalmak: a tanulók által elsajátítandó témák, ismeretek, fogalmak és információk összessége, amelyek fokozatosan és egymásra épülően szerveződnek, hogy biztosítsák a kompetenciák folyamatos fejlődését.',
    exp:'Az elsajátítandó témák, ismeretek, fogalmak összessége, fokozatosan és egymásra épülően szervezve a kompetenciák fejlődéséért.'
  },
  {
    id:'real_2020_def_13', w:2020, topic:'Értékelés', type:'define', diff:3, points:2,
    q:'Határozza meg az értékelési eszközök érvényességének fogalmát!',
    modelAnswer:'Az értékelési eszközök érvényessége azt jelenti, hogy az eszköz pontosan azt méri, amit mérni kíván. Az érvényes eszköz releváns és megbízható adatokat nyújt a tanulók kompetenciáiról, és kiküszöböli a torzító tényezőket (pl. kétértelmű megfogalmazás, nem megfelelő értékelési körülmények). A speciális oktatásban azt is megköveteli, hogy a feladatelemeket az SNI/CES tanulók fejlettségi szintjéhez és kognitív sajátosságaihoz igazítsák.',
    exp:'Az eszköz pontosan azt méri, amit mérni kíván; releváns, megbízható adatokat ad, kiküszöböli a torzító tényezőket, és igazodik az SNI tanuló szintjéhez.'
  },

  // ─── Esszé (essay) – Claude által értékelt ────────────────────────────────
  {
    id:'real_2020_essay_01', w:2020, topic:'Matematika tanítása', type:'essay', diff:3, points:6,
    q:'Mutassa be az értelmi fogyatékossággal élő tanulók matematikai számolástanításának stratégiáját, a fő lépések ismertetésével!',
    modelAnswer:'Az enyhe vagy középsúlyos értelmi fogyatékossággal élő tanulók matematikai számolásának tanítása funkcionális és fokozatos megközelítést igényel, a konkréttól az elvont felé haladva.\n\n1. A számfogalom kialakítása: valós tárgyak manipulálásával – tárgyak csoportosításával és összehasonlításával, korongok vagy pálcikák megszámolásával – történik, hogy a tanuló megértse a szám mint mennyiség jelentését.\n\n2. Az összeadás és kivonás fogalmának elsajátítása: konkrét helyzetekből indul ki (tárgyak hozzáadása egy csoporthoz vagy eltávolítása). Vizuális és verbális támogatást, grafikus ábrázolásokat és taktilis eszközöket használ a számviszonyok megértéséhez.\n\n3. Szöveges feladatok megoldása: egyszerű, mindennapi életből vett problémák feldolgozása képek, sémák és verbális támogatás segítségével; ösztönözni kell az egyszerű következtetéseket és a megoldási folyamat szóbeli elmagyarázását.\n\nA stratégia rendszeres gyakorlást, matematikai játékokkal történő megszilárdítást és minden siker pozitív megerősítését feltételezi.',
    exp:'Funkcionális, fokozatos, konkréttól az elvont felé: (1) számfogalom tárgyak manipulálásával, (2) összeadás/kivonás konkrét helyzetekből vizuális-taktilis támogatással, (3) egyszerű szöveges feladatok; rendszeres gyakorlás és pozitív megerősítés.'
  },
  {
    id:'real_2020_essay_02', w:2020, topic:'IKT', type:'essay', diff:3, points:6,
    q:'Mutassa be az információs és kommunikációs technológia (IKT) szerepét a fogyatékossággal élő tanulók aktív tanulási környezetének kialakításában!',
    modelAnswer:'Az információs és kommunikációs technológia jelentős hatással van a fogyatékossággal élő tanulók oktatási folyamatának hozzáférhetővé és személyre szabottá tételére. Fő szerepei:\n\nHozzáférés az információhoz: az érzékszervi fogyatékossággal élő tanulók képernyőolvasót, adaptált szoftvert vagy taktilis eszközöket használhatnak az oktatási anyagok eléréséhez.\n\nAlkalmazkodás az egyéni tempóhoz: a digitális platformok lehetővé teszik a személyre szabott tanulást, a gyakorlatok ismétlését, a nehézségi szint módosítását és az azonnali visszajelzést.\n\nA motiváció ösztönzése: az interaktív környezetek, oktatójátékok és multimédiás alkalmazások növelik a bevonódást és a tanulás örömét.\n\nKommunikációs támogatás: a verbális önkifejezésben nehézségekkel küzdő tanulóknál az alternatív és augmentatív kommunikációs alkalmazások segítik a gondolatok és szükségletek kifejezését.\n\nAz IKT integrálása ezért elengedhetetlen az aktív, rugalmas és inkluzív pedagógiai környezet kialakításához.',
    exp:'Négy szerep: hozzáférés az információhoz (képernyőolvasó, adaptált szoftver); egyéni tempóhoz alkalmazkodás (ismétlés, azonnali visszajelzés); motiváció (interaktív, multimédiás); kommunikációs támogatás (AAC).'
  }
];
