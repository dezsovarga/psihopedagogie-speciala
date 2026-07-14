// Szövegkiegészítés (cloze) kérdések — kísérleti típus.
// A definíció szövegében a kulcsszavak {{kettős kapcsos zárójelben}} vannak;
// az app ezeket beviteli mezőre cseréli, első betűs "elhalványuló" segítséggel.
// Helyben, gépelési hibatűréssel (Levenshtein <= 1) értékelve, mezőnkénti
// visszajelzéssel. A szövegek a megoldófájlok tartalmából származnak.
const EXERCISES_CLOZE = [
  {
    id: 'cloze_w1_01', w: 1, topic: 'Szűrés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a hiányzó kulcsszavakat!',
    text: 'A szűrés elsődleges, {{gyors}} eljárás, amelynek célja azon gyermekek {{azonosítása}}, akiknél fejlődési eltérés gyanúja merül fel; nem {{diagnosztikus}} jellegű, csupán jelzőrendszerként működik.',
    exp: 'A szűrés gyors, azonosító, nem diagnosztikus jelzőeljárás – a mélyebb vizsgálatra szoruló gyermekeket jelzi.'
  },
  {
    id: 'cloze_w6_01', w: 6, topic: 'Intellektuális fogyatékosság', type: 'cloze', diff: 1,
    q: 'Egészítsd ki az adaptív viselkedés három területét!',
    text: 'Az adaptív viselkedés három területe a {{konceptuális}}, a {{szociális}} és a {{gyakorlati}} készségek összessége.',
    exp: 'Az adaptív viselkedés három területe: konceptuális, szociális és gyakorlati készségek.'
  },
  {
    id: 'cloze_w7_01', w: 7, topic: 'Alapfunkciók', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a munkamemória meghatározását!',
    text: 'A munkamemória az információ rövid távú {{tárolásáért}} és egyidejű {{feldolgozásáért}} felelős rendszer; gyengesége a többlépéses utasítások követését nehezíti.',
    exp: 'A munkamemória az információ rövid távú tárolásáért és egyidejű feldolgozásáért felel.'
  },
  {
    id: 'cloze_w2_01', w: 2, topic: 'Inkluzív oktatás', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az inklúzió lényegét kifejező mondatot!',
    text: 'Az inklúzió szerint nem a tanuló illeszkedik a rendszerhez, hanem a {{rendszer}} alakul a {{tanulóhoz}}; az inklúzió a sokféleséget értékként kezeli.',
    exp: 'Az inklúzióban a rendszer alkalmazkodik a tanulóhoz (nem fordítva), és a sokféleséget értéknek tekinti.'
  },
  {
    id: 'cloze_w5_01', w: 5, topic: 'Fejlődés és nevelés', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a kompenzációs fejlődés meghatározását!',
    text: 'A kompenzációs fejlődés során a fogyatékossággal élő személy meglévő, {{sértetlen}} funkcióit mozgósítja és fejleszti a {{sérült}} vagy hiányzó funkciók hatásának ellensúlyozására.',
    exp: 'A kompenzációs fejlődés a sértetlen funkciók mozgósításával ellensúlyozza a sérült/hiányzó funkciókat (Vigotszkij).'
  },

  // ─── 7. Változat – a bővített define-készlethez tartozó cloze kérdések ──────
  // Diszgráfia (def_w7_08)
  {
    id: 'cloze_w7_02', w: 7, topic: 'Tanulási zavarok', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a diszgráfia meghatározását!',
    text: 'A diszgráfia specifikus {{írászavar}}, amely érintheti az írás {{grafomotoros}} kivitelezését és a {{helyesírási}} készséget.',
    exp: 'A diszgráfia specifikus írászavar: a grafomotoros kivitelezést és/vagy a helyesírási készséget érinti.'
  },
  {
    id: 'cloze_w7_03', w: 7, topic: 'Tanulási zavarok', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a diszgráfia tüneteit!',
    text: 'A diszgráfia egyik tünete a rendezetlen, nehezen olvasható {{íráskép}} és a lassú, görcsös {{írásmozgás}}.',
    exp: 'Diszgráfia tünetei: rendezetlen íráskép, lassú/görcsös írásmozgás, gyakori javítás.'
  },
  // Tanulási nehézség (def_w7_09)
  {
    id: 'cloze_w7_04', w: 7, topic: 'Tanulási nehézség', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a tanulási nehézség meghatározását!',
    text: 'A tanulási nehézség tágabb {{gyűjtőfogalom}}, amely nem feltételez {{neurobiológiai}} alapú zavart, és megfelelő pedagógiai beavatkozással gyakran {{kompenzálható}}.',
    exp: 'A tanulási nehézség tágabb gyűjtőfogalom, nem neurobiológiai zavar, gyakran kompenzálható.'
  },
  {
    id: 'cloze_w7_05', w: 7, topic: 'Tanulási nehézség', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a tanulási nehézség lehetséges okait!',
    text: 'A tanulási nehézség oka lehet motivációs, {{érzelmi}}, módszertani vagy {{szociokulturális}} tényező.',
    exp: 'A tanulási nehézség okai: motivációs, érzelmi, módszertani, egészségügyi, családi, szociokulturális tényezők.'
  },
  // Végrehajtó funkciók (def_w7_10)
  {
    id: 'cloze_w7_06', w: 7, topic: 'Alapfunkciók', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a végrehajtó funkciók összetevőit!',
    text: 'A végrehajtó funkciók a {{tervezés}}, a {{gátlás}}, a kognitív {{rugalmasság}} és az {{önmonitorozás}} képességei.',
    exp: 'A végrehajtó funkciók: tervezés, gátlás, kognitív rugalmasság, önmonitorozás.'
  },
  {
    id: 'cloze_w7_07', w: 7, topic: 'Alapfunkciók', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a végrehajtó funkciók gyengeségének következményeit!',
    text: 'A végrehajtó funkciók gyengesége {{figyelmetlenséghez}}, impulzivitáshoz és {{szervezetlen}} munkavégzéshez vezet.',
    exp: 'Gyenge végrehajtó funkciók: figyelmetlenség, impulzivitás, szervezetlen munkavégzés.'
  },
  // Verbális megértés (def_w7_11)
  {
    id: 'cloze_w7_08', w: 7, topic: 'Alapfunkciók', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a verbális megértés meghatározását!',
    text: 'A verbális megértés a nyelvi információ – {{szókincs}}, mondatszerkezet, szövegkohézió – feldolgozásának és {{értelmezésének}} képessége.',
    exp: 'A verbális megértés a nyelvi információ feldolgozásának és értelmezésének képessége.'
  },
  {
    id: 'cloze_w7_09', w: 7, topic: 'Alapfunkciók', type: 'cloze', diff: 1,
    q: 'Egészítsd ki a verbális megértés jelentőségét!',
    text: 'A verbális megértés {{minden}} tantárgy tanulásának {{alapja}}.',
    exp: 'A verbális megértés minden tantárgy tanulásának alapja.'
  },
  // Feldolgozási sebesség (def_w7_12)
  {
    id: 'cloze_w7_10', w: 7, topic: 'Alapfunkciók', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a feldolgozási sebesség meghatározását!',
    text: 'A feldolgozási sebesség az információ {{gyors}} és {{automatikus}} feldolgozásának képessége.',
    exp: 'A feldolgozási sebesség az információ gyors és automatikus feldolgozásának képessége.'
  },
  {
    id: 'cloze_w7_11', w: 7, topic: 'Alapfunkciók', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a lassú feldolgozási sebesség következményét!',
    text: 'Lassú feldolgozási sebesség esetén a tanuló {{több}} időt igényel a feladatokhoz, ami {{fáradáshoz}} és lemaradáshoz vezethet.',
    exp: 'Lassú feldolgozás: több időigény, fáradás, lemaradás.'
  },
  // Objektív item (def_w7_13)
  {
    id: 'cloze_w7_12', w: 7, topic: 'Értékelés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az objektív item meghatározását!',
    text: 'Az objektív item egyértelmű, előre meghatározott {{helyes}} válasszal rendelkezik, és {{gyorsan}} javítható.',
    exp: 'Az objektív item egyértelmű, előre meghatározott helyes válaszú, gyorsan javítható.'
  },
  {
    id: 'cloze_w7_13', w: 7, topic: 'Értékelés', type: 'cloze', diff: 3,
    q: 'Egészítsd ki az objektív itemek tervezési szabályát!',
    text: 'Az objektív itemek téves válaszlehetőségeit {{disztraktoroknak}} nevezzük; ezek legyenek {{reálisak}}.',
    exp: 'A téves válaszlehetőségek a disztraktorok; legyenek reálisak, a megfogalmazás egyértelmű.'
  },
  {
    id: 'cloze_w7_14', w: 7, topic: 'Értékelés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az objektív item korlátját!',
    text: 'Az objektív item főleg a {{felismerést}} méri, nehezen mér magasabb rendű gondolkodási {{műveleteket}}.',
    exp: 'Az objektív item főleg a felismerést méri; a magasabb rendű műveleteket (elemzés, szintézis) kevésbé.'
  },
  // Félig objektív item (def_w7_14)
  {
    id: 'cloze_w7_15', w: 7, topic: 'Értékelés', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a félig objektív item meghatározását!',
    text: 'A félig objektív itemnél a válasz {{rövid}}, de nem előre megadott lehetőségek közül választandó (pl. {{kiegészítéses}} feladat).',
    exp: 'A félig objektív item rövid, nem előre megadott választ igényel (pl. kiegészítés).'
  },
  {
    id: 'cloze_w7_16', w: 7, topic: 'Értékelés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a félig objektív item jellemzőit!',
    text: 'A félig objektív item kérdésfeltevése egyetlen {{helyes}} választ engedjen, mert a javítás kissé {{szubjektív}} lehet.',
    exp: 'A félig objektív itemnél egyetlen helyes választ engedjen a kérdés; a javítás kissé szubjektív.'
  },
  // Szubjektív item (def_w7_15)
  {
    id: 'cloze_w7_17', w: 7, topic: 'Értékelés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a szubjektív item meghatározását!',
    text: 'A szubjektív item szabad, önálló {{válaszalkotást}} igényel (pl. {{esszé}}), és magasabb rendű gondolkodási műveleteket mér.',
    exp: 'A szubjektív item szabad válaszalkotást igényel (esszé), és magasabb rendű gondolkodást mér.'
  },
  {
    id: 'cloze_w7_18', w: 7, topic: 'Értékelés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a szubjektív item értékelési feltételét!',
    text: 'A szubjektív item objektivitásának növelésére részletes, pontokra bontott javítási útmutató, azaz {{barem}} szükséges.',
    exp: 'A szubjektív item objektivitását részletes, pontokra bontott barem növeli.'
  },
  // Barem (def_w7_16)
  {
    id: 'cloze_w7_19', w: 7, topic: 'Értékelés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a barem meghatározását!',
    text: 'A barem részletes, {{pontokra}} bontott javítási útmutató, amely a javítók közötti {{egyezést}} növeli.',
    exp: 'A barem pontokra bontott javítási útmutató, amely a javítók közötti egyezést növeli.'
  },
  {
    id: 'cloze_w7_20', w: 7, topic: 'Értékelés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a barem szerepét!',
    text: 'A barem a {{szubjektív}} (kifejtős) itemek javításának {{objektivitását}} növeli.',
    exp: 'A barem a szubjektív (kifejtős) itemek javításának objektivitását növeli.'
  },
  // Portfólió (def_w7_17)
  {
    id: 'cloze_w7_21', w: 7, topic: 'Értékelés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a portfólió meghatározását!',
    text: 'A portfólió a tanuló saját {{munkáit}} gyűjti össze, és időben követi a {{fejlődési}} folyamatot.',
    exp: 'A portfólió a tanuló munkáit gyűjti és időben követi a fejlődési folyamatot.'
  },
  {
    id: 'cloze_w7_22', w: 7, topic: 'Értékelés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a portfólió korlátját!',
    text: 'A portfólió korlátja, hogy {{időigényes}} összeállítani és értékelni, és nehezebben {{standardizálható}}.',
    exp: 'A portfólió időigényes összeállítani és értékelni, és nehezebben standardizálható.'
  },
  // Halo-effektus (def_w7_18)
  {
    id: 'cloze_w7_23', w: 7, topic: 'Értékelés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a halo-effektus meghatározását!',
    text: 'A halo-effektus olyan értékelési {{torzítás}}, amelyben a tanulóról kialakult általános {{benyomás}} befolyásolja az adott feladat objektív megítélését.',
    exp: 'A halo-effektus: a korábbi általános benyomás torzítja egy konkrét feladat objektív megítélését.'
  },
  {
    id: 'cloze_w7_24', w: 7, topic: 'Értékelés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a halo-effektus hatását!',
    text: 'A halo-effektusnál a korábban kialakult általános {{benyomás}} rontja az értékelés {{objektivitását}}.',
    exp: 'A halo-effektus a korábbi benyomás miatt rontja az értékelés objektivitását.'
  },
  // Elvárás-hatás / Pygmalion-effektus (def_w7_19)
  {
    id: 'cloze_w7_25', w: 7, topic: 'Értékelés', type: 'cloze', diff: 3,
    q: 'Egészítsd ki az elvárás-hatás (Pygmalion-effektus) meghatározását!',
    text: 'Az elvárás-hatás (Pygmalion-effektus) esetén a pedagógus előzetes {{elvárásai}} tudattalanul befolyásolják az értékelés {{szigorát}} vagy engedékenységét.',
    exp: 'A Pygmalion-effektus: a pedagógus előzetes elvárásai tudattalanul befolyásolják az értékelés szigorát.'
  },
  {
    id: 'cloze_w7_26', w: 7, topic: 'Értékelés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a Pygmalion-effektus jellemzőjét!',
    text: 'A Pygmalion-effektus egy értékelési {{torzítás}}, amelyben az elvárások {{tudattalanul}} hatnak az értékelésre.',
    exp: 'A Pygmalion-effektus értékelési torzítás: az elvárások tudattalanul hatnak az értékelésre.'
  },
  // Multiszenzoros / Orton-Gillingham fejlesztés (def_w7_20)
  {
    id: 'cloze_w7_27', w: 7, topic: 'Fejlesztési módszerek', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a multiszenzoros fejlesztés meghatározását!',
    text: 'A multiszenzoros nyelvi fejlesztés a betű-hang megfeleltetést egyszerre {{vizuális}}, auditív, {{kinesztetikus}} és taktilis csatornán tanítja.',
    exp: 'A multiszenzoros fejlesztés a betű-hang megfeleltetést vizuális, auditív, kinesztetikus és taktilis csatornán tanítja.'
  },
  {
    id: 'cloze_w7_28', w: 7, topic: 'Fejlesztési módszerek', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az Orton-Gillingham megközelítés lényegét!',
    text: 'Az Orton-Gillingham megközelítésben a {{mozgásos}} memória is megerősíti a vizuális-{{auditív}} kapcsolatot.',
    exp: 'Az Orton-Gillingham elvnél a mozgásos memória is megerősíti a vizuális-auditív kapcsolatot.'
  },

  // ─── 1. Változat – a bővített define-készlethez tartozó cloze kérdések ──────
  {
    id: 'cloze_w1_02', w: 1, topic: 'Komplex értékelés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az individualitás elvét!',
    text: 'Az individualitás elve szerint minden gyermek {{egyedi}}, ezért az értékelést az adott személy {{sajátosságaihoz}} igazítjuk.',
    exp: 'Az individualitás elve: minden gyermek egyedi, az értékelés a sajátosságaihoz igazodik.'
  },
  {
    id: 'cloze_w1_03', w: 1, topic: 'Komplex értékelés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a család bevonásának elvét!',
    text: 'A család bevonásának elve szerint a {{szülők}} aktív résztvevői az értékelésnek, mert nélkülözhetetlen {{információval}} rendelkeznek gyermekük fejlődéséről.',
    exp: 'A szülők aktív résztvevők, mert egyedülálló információval rendelkeznek a gyermekről.'
  },
  {
    id: 'cloze_w1_04', w: 1, topic: 'Pszichomotorika', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a térbeli tájékozódás meghatározását!',
    text: 'A térbeli tájékozódás a tér {{irányainak}} (fent-lent, jobbra-balra) ismerete és alkalmazása a saját {{testhez}} és tárgyakhoz viszonyítva.',
    exp: 'A tér irányainak ismerete és alkalmazása saját testhez és tárgyakhoz viszonyítva.'
  },
  {
    id: 'cloze_w1_05', w: 1, topic: 'Pszichomotorika', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az időbeli tájékozódás meghatározását!',
    text: 'Az időbeli tájékozódás a {{ritmus}}, az időtartam és az időbeli {{sorrend}} érzékelésének és értelmezésének képessége.',
    exp: 'A ritmus, időtartam és időbeli sorrend érzékelésének és értelmezésének képessége.'
  },
  {
    id: 'cloze_w1_06', w: 1, topic: 'Curriculum-adaptáció', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a curriculumdifferenciálás meghatározását!',
    text: 'A curriculumdifferenciálás az oktatási tartalom vagy módszer {{módosítása}} a képességszinthez úgy, hogy mindenki ugyanazon {{általános}} célok felé halad.',
    exp: 'Az oktatási tartalom/módszer módosítása a képességszinthez, közös általános célok mellett.'
  },
  {
    id: 'cloze_w1_07', w: 1, topic: 'Curriculum-adaptáció', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az individualizálás meghatározását!',
    text: 'Az individualizálás {{egyéni}} szintű tervezés, amely kizárólag az adott tanuló {{szükségleteit}} és erősségeit veszi figyelembe, jellemzően a PIP keretében.',
    exp: 'Egyéni szintű tervezés kizárólag az adott tanuló szükségleteire és erősségeire.'
  },
  {
    id: 'cloze_w1_08', w: 1, topic: 'Curriculum-adaptáció', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a hozzáférési adaptáció meghatározását!',
    text: 'A hozzáférési adaptáció az eszközök, módszerek vagy környezet {{módosítása}}, hogy a tanuló fizikailag és {{kognitívan}} hozzáférjen az ismeretekhez (pl. Braille-írás).',
    exp: 'Az eszközök/módszerek/környezet módosítása a fizikai és kognitív hozzáférésért.'
  },
  {
    id: 'cloze_w1_09', w: 1, topic: 'Curriculum-adaptáció', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a tartalmi módosítás meghatározását!',
    text: 'A tartalmi módosítás az elsajátítandó tananyag {{mennyiségének}} vagy {{komplexitásának}} csökkentése vagy átalakítása a tanuló képességszintjéhez.',
    exp: 'A tananyag mennyiségének/komplexitásának csökkentése vagy átalakítása a képességszinthez.'
  },
  {
    id: 'cloze_w1_10', w: 1, topic: 'PIP', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az egyéni intervenciós terv (PIP) meghatározását!',
    text: 'Az egyéni intervenciós terv (PIP) rögzíti a tanuló funkcionális {{szintjét}}, a hosszú és rövid távú {{célokat}}, a módszereket és az értékelési eljárást.',
    exp: 'A PIP rögzíti a funkcionális szintet, a célokat, a módszereket és az értékelési eljárást.'
  },
  {
    id: 'cloze_w1_11', w: 1, topic: 'Aktív módszerek', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a kooperatív tanulás meghatározását!',
    text: 'A kooperatív tanulás során a tanulók kis {{csoportokban}} együttműködve oldanak meg feladatokat; a tanulás kölcsönös {{segítségen}} és párbeszéden alapul.',
    exp: 'Kis csoportos, együttműködésen és kölcsönös segítségen alapuló aktív módszer.'
  },

  // ─── 2. Változat – a bővített define-készlethez tartozó cloze kérdések ──────
  {
    id: 'cloze_w2_02', w: 2, topic: 'Inkluzív oktatás', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a sokféleség tiszteletének elvét!',
    text: 'A sokféleség tiszteletének elve szerint a különbségek nem {{problémák}}, hanem a tanulás természetes {{velejárói}} és gazdagító tényezők.',
    exp: 'A különbségek nem problémák, hanem a tanulás természetes, gazdagító velejárói.'
  },
  {
    id: 'cloze_w2_03', w: 2, topic: 'Inkluzív oktatás', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az együttműködés elvét!',
    text: 'Az együttműködés elve szerint a sikeres inklúzió feltétele a pedagógusok, szakemberek, {{szülők}} és a helyi {{közösség}} összehangolt munkája.',
    exp: 'A sikeres inklúzió feltétele a pedagógusok, szakemberek, szülők és a közösség összehangolt munkája.'
  },
  {
    id: 'cloze_w2_04', w: 2, topic: 'Integrációs modellek', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a teljes integráció meghatározását!',
    text: 'A teljes integrációban a CES tanuló {{teljes}} munkaidőben a {{többségi}} osztályban tanul, a támogató tanár együttműködésével.',
    exp: 'A CES tanuló teljes munkaidőben a többségi osztályban tanul, támogató tanárral.'
  },
  {
    id: 'cloze_w2_05', w: 2, topic: 'Integrációs modellek', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a részleges integráció meghatározását!',
    text: 'A részleges integrációban a CES tanuló bizonyos {{tantárgyakat}} a többségi osztályban tanul, másokból egyéni vagy {{kiscsoportos}} fejlesztő foglalkozáson vesz részt.',
    exp: 'A tanuló egyes tantárgyakat a többségi osztályban, másokat egyéni/kiscsoportos fejlesztésen tanul.'
  },
  {
    id: 'cloze_w2_06', w: 2, topic: 'Hallássérülés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a nagyothalló tanuló jellemzését!',
    text: 'A nagyothalló tanuló {{26}}–70 dB közötti hallásveszteséggel él, a hangokat {{részlegesen}} érzékeli; a beszédfejlődés érintett, de nem kizárt.',
    exp: '26–70 dB hallásveszteség; részleges hangérzékelés, érintett beszédfejlődés.'
  },
  {
    id: 'cloze_w2_07', w: 2, topic: 'Hallássérülés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a siket tanuló jellemzését!',
    text: 'A siket személynél {{70}} dB feletti a hallásveszteség; a kommunikáció elsősorban {{vizuális}} csatornán (jelnyelv, szájról olvasás) alapul.',
    exp: '70 dB feletti hallásveszteség; a kommunikáció vizuális csatornán alapul.'
  },
  {
    id: 'cloze_w2_08', w: 2, topic: 'Látássérülés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a gyengénlátó tanuló jellemzését!',
    text: 'A gyengénlátó tanuló {{10}}–33%-os látóélességgel él, és {{nagyítással}}, speciális eszközökkel részlegesen fogadja be a vizuális információt.',
    exp: '10–33%-os látóélesség; nagyítással részleges vizuális információfeldolgozás.'
  },
  {
    id: 'cloze_w2_09', w: 2, topic: 'Látássérülés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a vak tanuló jellemzését!',
    text: 'A vak tanulónál az oktatás elsősorban {{tapintásos}} és hallás útján valósul meg; {{Braille}}-írás és auditív eszközök szükségesek.',
    exp: 'Az oktatás tapintásos és hallás útján zajlik, Braille-írással és auditív eszközökkel.'
  },
  {
    id: 'cloze_w2_10', w: 2, topic: 'Demutizálás', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a totális kommunikáció meghatározását!',
    text: 'A totális kommunikáció egyszerre több {{csatornát}} alkalmaz – jelnyelvet, szájmozgást, hangos beszédet, gesztusokat –, és {{rugalmasan}} igazodik a tanuló szükségletéhez.',
    exp: 'Több csatornát egyszerre alkalmazó, a tanuló szükségletéhez rugalmasan igazodó módszer.'
  },
  {
    id: 'cloze_w2_11', w: 2, topic: 'Siketvakság', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a Lorm-ábécé meghatározását!',
    text: 'A Lorm-ábécé speciális {{tenyérírás}}-rendszer, amelyben a betűk a tenyér meghatározott pontjain tett {{érintéseknek}} felelnek meg.',
    exp: 'Tenyérírás-rendszer: a betűk a tenyér pontjain tett érintések; siketvak személyeknek.'
  },
  {
    id: 'cloze_w2_12', w: 2, topic: 'Olvasás-írás módszerek', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a fonetikus-analitikus-szintetikus módszer lényegét!',
    text: 'A módszer az {{analitikus}} eljárásban egész szót vagy mondatot bont szótagokra és hangokra, a {{szintetikus}} eljárásban pedig a hangokat és betűket szavakká rakja össze.',
    exp: 'Analitikus = szó/mondat lebontása hangokra; szintetikus = hangok/betűk összerakása szavakká.'
  },
  {
    id: 'cloze_w2_13', w: 2, topic: 'Segítő technológia', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az FM-rendszer meghatározását!',
    text: 'Az FM-rendszerben a pedagógus {{mikrofonba}} beszél, és a jel közvetlenül a tanuló {{hallókészülékébe}} kerül, kiküszöbölve a háttérzajt.',
    exp: 'A pedagógus hangja mikrofonon át közvetlenül a hallókészülékbe kerül, kiküszöbölve a háttérzajt.'
  },

  // ─── 3. Változat – a bővített define-készlethez tartozó cloze kérdések ──────
  {
    id: 'cloze_w3_01', w: 3, topic: 'ASD-módszerek', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a szociális narratívák meghatározását!',
    text: 'A szociális narratívák (Carol Gray) rövid, személyre szabott {{történeteken}} keresztül mutatják be egy szociális helyzet menetét és az elvárható {{viselkedést}}.',
    exp: 'Carol Gray módszere: személyre szabott történetek egy szociális helyzet menetéről és az elvárt viselkedésről.'
  },
  {
    id: 'cloze_w3_02', w: 3, topic: 'ASD-módszerek', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a szociális narratívák felhasználását!',
    text: 'A szociális narratívák szociális helyzeteket {{előkészítenek}}, tisztázzák a viselkedési elvárásokat, és csökkentik a {{szorongást}} ismeretlen helyzetekben.',
    exp: 'Szociális helyzetek előkészítése, viselkedési elvárások tisztázása, szorongáscsökkentés.'
  },
  {
    id: 'cloze_w3_03', w: 3, topic: 'Viselkedéstámogatás', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a pozitív viselkedéstámogatás (PBS) meghatározását!',
    text: 'A pozitív viselkedéstámogatás {{proaktív}}, megelőző szemléletű, amely a kívánatos viselkedések {{megerősítésére}} és a tanuló erősségeire épít, nem büntető eszközökre.',
    exp: 'Proaktív, erősségalapú megközelítés: a kívánatos viselkedést erősíti, nem büntet.'
  },
  {
    id: 'cloze_w3_04', w: 3, topic: 'Viselkedéstámogatás', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a PBS jellemzőjét!',
    text: 'A PBS bizonyítékalapú, az emberi {{méltóságot}} tiszteletben tartó módszer, amely {{önszabályozást}} épít ki és erősíti a tanuló–pedagógus kapcsolatot.',
    exp: 'Bizonyítékalapú, méltóságtisztelő módszer, amely önszabályozást épít.'
  },
  {
    id: 'cloze_w3_05', w: 3, topic: 'Logikai-matematikai', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az osztályozás meghatározását!',
    text: 'Az osztályozás tárgyak vagy képek {{csoportosítása}} közös {{tulajdonság}} (szín, forma, méret) alapján.',
    exp: 'Tárgyak/képek csoportosítása közös tulajdonság alapján.'
  },
  {
    id: 'cloze_w3_06', w: 3, topic: 'Logikai-matematikai', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a sorozatalkotás meghatározását!',
    text: 'A sorozatalkotás (szeriálás) tárgyak, képek vagy számok {{sorba}} rendezése {{növekvő}} vagy csökkenő sorrend szerint.',
    exp: 'Sorba rendezés növekvő vagy csökkenő sorrend szerint.'
  },
  {
    id: 'cloze_w3_07', w: 3, topic: 'Logikai-matematikai', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a megfeleltetés meghatározását!',
    text: 'A megfeleltetés (bijekció) elemek egy-az-egyhez {{hozzárendelése}} két halmaz között, amely az egyenlő {{mennyiség}} fogalmát alapozza meg.',
    exp: 'Egy-az-egyhez hozzárendelés két halmaz között; az egyenlő mennyiség fogalmát alapozza meg.'
  },
  {
    id: 'cloze_w3_08', w: 3, topic: 'Logikai-matematikai', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a megmaradás elvének meghatározását!',
    text: 'A megmaradás elve annak felismerése, hogy egy {{mennyiség}} nem változik meg pusztán attól, hogy más {{formában}} vagy elrendezésben jelenik meg.',
    exp: 'Egy mennyiség nem változik a forma vagy elrendezés megváltozásától (Piaget).'
  },
  {
    id: 'cloze_w3_09', w: 3, topic: 'Autonómia', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a személyes és társadalmi autonómia meghatározását!',
    text: 'Az autonómia az egyén képessége, hogy mindennapi {{szükségleteit}} önállóan kielégítse és {{döntéseket}} hozzon saját életéről.',
    exp: 'A mindennapi szükségletek önálló kielégítésének és a döntéshozatalnak a képessége.'
  },
  {
    id: 'cloze_w3_10', w: 3, topic: 'Autonómia', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a láncolás (chaining) meghatározását!',
    text: 'A láncolás feladatelemzésre épül: az {{előretartó}} láncolás az első lépéstől halad, a {{visszatartó}} láncolás pedig a záró lépéstől, ahol a tanuló sikerélményt él át.',
    exp: 'Feladatelemzésre épülő eljárás: előretartó (elölről) vagy visszatartó (a záró lépéstől).'
  },
  {
    id: 'cloze_w3_11', w: 3, topic: 'Curriculum és UDL', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a differenciált curriculum meghatározását!',
    text: 'A differenciált curriculum az oktatási tartalom, folyamat és produktum tanulóhoz igazított {{módosítása}}, miközben a tanulók {{közös}} célok felé haladnak.',
    exp: 'A tartalom/folyamat/produktum tanulóhoz igazított módosítása közös célok mellett.'
  },
  {
    id: 'cloze_w3_12', w: 3, topic: 'Curriculum és UDL', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az adaptált curriculum meghatározását!',
    text: 'Az adaptált curriculum a többségi tantervtől eltérő, egyéni {{szükségletekre}} szabott terv, amely csökkentett vagy alternatív célokat tartalmazhat, és a {{PIP}} része.',
    exp: 'A többségi tantervtől eltérő, egyéni szükségletekre szabott terv; a PIP része.'
  },
  {
    id: 'cloze_w3_13', w: 3, topic: 'Segítő technológia', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a segítő technológia meghatározását!',
    text: 'A segítő technológia minden olyan {{eszköz}} vagy szoftver, amely a fogyatékossággal élők tanulását, {{kommunikációját}} vagy mindennapi funkcionálását megkönnyíti (pl. képernyőolvasó).',
    exp: 'Eszköz/szoftver, amely a tanulást, kommunikációt vagy mindennapi funkcionálást könnyíti meg.'
  },
  {
    id: 'cloze_w3_14', w: 3, topic: 'Módszertan', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a multimédiás tanulás meghatározását!',
    text: 'A multimédiás tanulás egyszerre több érzékszervi {{csatornán}} (vizuális, auditív, kinesztetikus) közvetíti az {{információt}}.',
    exp: 'Az információ egyszerre több érzékszervi csatornán való közvetítése.'
  },

  // ─── 4. Változat – a bővített define-készlethez tartozó cloze kérdések ──────
  {
    id: 'cloze_w4_01', w: 4, topic: 'Integrált terápia', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a komplex, integrált oktatási terápia jellegét!',
    text: 'A komplex, integrált oktatási terápia {{holisztikus}} megközelítés, amely az oktatást, nevelést és terápiát egyetlen, egységes {{keretben}} szervezi meg.',
    exp: 'Holisztikus megközelítés: az oktatást, nevelést és terápiát egységes keretben, szervesen integrálva szervezi.'
  },
  {
    id: 'cloze_w4_02', w: 4, topic: 'Integrált terápia', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az integrált terápia alapelvét!',
    text: 'Az integrált terápiában a fejlesztés minden mozzanata egyszerre {{pedagógiai}} és {{terápiás}} értékkel bír.',
    exp: 'A fejlesztés minden mozzanata egyszerre pedagógiai és terápiás értékű.'
  },
  {
    id: 'cloze_w4_03', w: 4, topic: 'Nyelvi zavartípusok', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a dysarthria meghatározását!',
    text: 'A dysarthria {{neurológiai}} károsodás miatti motorikus beszédzavar, amelyet az artikulációs izmok {{gyengesége}} vagy spaszticitása jellemez.',
    exp: 'Neurológiai károsodás miatti motorikus beszédzavar: gyenge/spasztikus artikulációs izmok.'
  },
  {
    id: 'cloze_w4_04', w: 4, topic: 'Nyelvi zavartípusok', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a specifikus nyelvi zavar (SLI/DLD) meghatározását!',
    text: 'A specifikus nyelvi zavar a nyelvi fejlődés tartós zavara, amely főleg a {{grammatikai}} struktúrák elsajátítását érinti, {{normál}} kognitív fejlődés mellett.',
    exp: 'A nyelvi fejlődés tartós zavara (főleg grammatika), normál kognitív fejlődés mellett.'
  },
  {
    id: 'cloze_w4_05', w: 4, topic: 'Nyelvi zavartípusok', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az afázia meghatározását!',
    text: 'Az afázia a korábban ép nyelvhasználat elvesztése {{agyi}} sérülés miatt; lehet {{expresszív}} (produkció) vagy receptív (megértés) formájú.',
    exp: 'Korábban ép nyelvhasználat elvesztése agyi sérülés miatt; expresszív vagy receptív forma.'
  },
  {
    id: 'cloze_w4_06', w: 4, topic: 'Nyelvi zavartípusok', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a mutizmus meghatározását!',
    text: 'A mutizmus {{szorongásos}} alapú állapot, amelyben a gyermek bizonyos helyzetekben nem szólal meg, máshol {{normálisan}} kommunikál.',
    exp: 'Szorongásos állapot: bizonyos helyzetekben néma, máshol normálisan kommunikál.'
  },
  {
    id: 'cloze_w4_07', w: 4, topic: 'Nyelvi zavarok', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a pragmatikai zavar meghatározását!',
    text: 'A pragmatikai zavar a nyelv {{szociális}} használatának zavara (párbeszéd, metaforák, kontextus); az {{ASD}} egyik meghatározó jellemzője.',
    exp: 'A nyelv szociális használatának zavara; az ASD meghatározó jellemzője.'
  },
  {
    id: 'cloze_w4_08', w: 4, topic: 'Tanulási mechanizmusok', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az utánzás (imitáció) meghatározását!',
    text: 'Az utánzás alapvető tanulási mechanizmus: a tanuló {{megfigyel}} egy cselekvést, majd {{reprodukálja}} azt; ASD-nál explicit tanítást igényel.',
    exp: 'Egy cselekvés megfigyelése és reprodukálása; ASD-nál explicit tanítást igényel.'
  },
  {
    id: 'cloze_w4_09', w: 4, topic: 'Tanulási mechanizmusok', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a feladatelemzés meghatározását!',
    text: 'A feladatelemzés összetett készségeket apró, egymást követő, {{mérhető}} lépésekre {{bont}}, így azonosítható, melyik lépésnél kell segítség.',
    exp: 'Összetett készség apró, mérhető lépésekre bontása.'
  },
  {
    id: 'cloze_w4_10', w: 4, topic: 'Aktív módszerek', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a projektmunka meghatározását!',
    text: 'A projektmunka során a tanulók egy valós, értelmes {{problémát}} oldanak meg több {{tantárgy}} integrálásával, önállóan szervezett keretek között.',
    exp: 'Valós probléma megoldása több tantárgy integrálásával, önállóan szervezett keretben.'
  },
  {
    id: 'cloze_w4_11', w: 4, topic: 'Hagyományos módszerek', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a magyarázat (expozíció) meghatározását!',
    text: 'A magyarázat során a pedagógus {{strukturált}} sorrendben ismertet egy fogalmat; lehet {{induktív}} (példától az elvhez) vagy deduktív.',
    exp: 'Strukturált szóbeli ismertetés, induktív vagy deduktív felépítéssel.'
  },
  {
    id: 'cloze_w4_12', w: 4, topic: 'Oktatási eszközök', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az érzékszervi integrációs eszközök meghatározását!',
    text: 'Az érzékszervi integrációs eszközök (súlyozott {{takarók}}, rezgő párnák) proprioceptív és vesztibuláris ingert adnak a szenzoros {{szabályozáshoz}}.',
    exp: 'Proprioceptív/vesztibuláris ingert adó eszközök a szenzoros szabályozáshoz.'
  },
  {
    id: 'cloze_w4_13', w: 4, topic: 'Logopédiai módszerek', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a Schultze-módszer lényegét!',
    text: 'A Schultze-módszer orrhangzós kiejtési zavaroknál a {{levegőáram}} helyes irányítását és az orr- és {{szájüreg}} elválasztásának tudatosítását célozza.',
    exp: 'A levegőáram helyes irányítása és az orr-/szájüreg elválasztásának tudatosítása (rhinolalia).'
  },

  // ─── 5. Változat – a bővített define-készlethez tartozó cloze kérdések ──────
  {
    id: 'cloze_w5_02', w: 5, topic: 'Fejlődési tényezők', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az öröklés szerepét!',
    text: 'Az öröklés meghatározza a biológiai adottságokat és a fejlődési lehetőségek {{keretét}} (reakciónorma), de nem a {{végeredményt}}.',
    exp: 'A genotípus a fejlődési lehetőségek terét jelöli ki, nem a végeredményt.'
  },
  {
    id: 'cloze_w5_03', w: 5, topic: 'Fejlődési tényezők', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a környezet szerepét!',
    text: 'A környezet a fizikai, {{szociális}}, kulturális és gazdasági körülmények összessége, amely az idegrendszer {{érését}} és a személyiséget formálja.',
    exp: 'A fejlődés körülményeinek összessége, amely az idegrendszer érését és a személyiséget formálja.'
  },
  {
    id: 'cloze_w5_04', w: 5, topic: 'Fejlődési tényezők', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a nevelés szerepét!',
    text: 'A nevelés tudatosan tervezett, {{célirányos}} hatásrendszer; az egyetlen tényező, amelyre a pedagógus közvetlen {{ráhatással}} bír.',
    exp: 'Tudatosan tervezett, célirányos hatásrendszer; erre hat a pedagógus közvetlenül.'
  },
  {
    id: 'cloze_w5_05', w: 5, topic: 'Etiológia', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a prevalenciaadatok jelentőségét!',
    text: 'A prevalenciaadatok a fogyatékossággal élők {{aránya}} a népességben; tervezési eszközök a szükséges {{szakemberigény}} és infrastruktúra meghatározásához.',
    exp: 'A fogyatékossággal élők aránya a népességben; tervezési eszköz a szakember- és infrastruktúra-igényhez.'
  },
  {
    id: 'cloze_w5_06', w: 5, topic: 'Szindrómák', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a Down-szindróma jellemzését!',
    text: 'A Down-szindróma ({{trisomia}} 21) enyhe–közepes intellektuális fogyatékossággal és izomtónus-csökkenéssel ({{hipotónia}}) jár.',
    exp: 'Trisomia 21: enyhe–közepes intellektuális fogyatékosság + hipotónia.'
  },
  {
    id: 'cloze_w5_07', w: 5, topic: 'Szindrómák', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a Fragile X-szindróma jellemzését!',
    text: 'A Fragile X-szindrómát intellektuális fogyatékosság és szociális {{szorongás}}, szenzoros érzékenység jellemzi; erős a {{vizuális}}-téri feldolgozás.',
    exp: 'Törékeny X: intellektuális fogyatékosság + szociális szorongás; erős vizuális-téri feldolgozás.'
  },
  {
    id: 'cloze_w5_08', w: 5, topic: 'Szindrómák', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a Prader–Willi-szindróma jellemzését!',
    text: 'A Prader–Willi-szindrómát kontrollálatlan {{étvágy}} (hyperphagia) és enyhe–közepes intellektuális fogyatékosság jellemzi; az iskolai {{étkezési}} rend szigorú strukturálása elengedhetetlen.',
    exp: 'Hyperphagia + enyhe–közepes intellektuális fogyatékosság; szigorú étkezési rend.'
  },
  {
    id: 'cloze_w5_09', w: 5, topic: 'Fogyatékossági kategóriák', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az intellektuális fogyatékosság meghatározását!',
    text: 'Az intellektuális fogyatékosság a kognitív funkciók és az {{adaptív}} viselkedés tartós korlátozottsága (IQ általában {{70}} alatt), fejlődési kezdettel.',
    exp: 'A kognitív funkciók és az adaptív viselkedés tartós korlátozottsága (IQ ~70 alatt).'
  },
  {
    id: 'cloze_w5_10', w: 5, topic: 'Fogyatékossági kategóriák', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a mozgásfogyatékosság meghatározását!',
    text: 'A mozgásfogyatékosság a mozgásszervrendszer vagy az {{idegrendszer}} károsodásából eredő tartós motoros {{funkciókiesés}} (pl. cerebrális paresis).',
    exp: 'A mozgásszervrendszer vagy idegrendszer károsodásából eredő tartós motoros funkciókiesés.'
  },
  {
    id: 'cloze_w5_11', w: 5, topic: 'Curriculum', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az interdiszciplináris curriculum meghatározását!',
    text: 'Az interdiszciplináris curriculum több {{tantárgy}} tartalmát egy összefüggő tanulási egységbe integrálja, lebontva a tantárgyi {{határokat}}.',
    exp: 'Több tantárgy tartalmát egy összefüggő egységbe integrálja, lebontva a tantárgyi határokat.'
  },
  {
    id: 'cloze_w5_12', w: 5, topic: 'Curriculum', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a moduláris curriculum meghatározását!',
    text: 'A moduláris curriculum az oktatási tartalmat önálló, {{lezárható}} egységekre ({{modulokra}}) tagolja, amelyek rugalmasan kombinálhatók.',
    exp: 'Önálló, lezárható, rugalmasan kombinálható modulokra tagolt tartalom.'
  },
  {
    id: 'cloze_w5_13', w: 5, topic: 'Etiológia', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a magzati alkohol-spektrum zavar (FASD) meghatározását!',
    text: 'A FASD prenatális, {{alkohol}} okozta állapot, amelynek következménye intellektuális fogyatékosság, figyelemzavar és jellegzetes {{arcvonások}}.',
    exp: 'Prenatális, alkohol (teratogén) okozta állapot: intellektuális fogyatékosság, figyelemzavar, jellegzetes arcvonások.'
  },

  // ─── 6. Változat – a bővített define-készlethez tartozó cloze kérdések ──────
  {
    id: 'cloze_w6_02', w: 6, topic: 'Intellektuális fogyatékosság', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a funkcionális készség meghatározását!',
    text: 'A funkcionális készség közvetlenül a {{mindennapi}} életben hasznosítható képesség (pl. öltözködés, pénzkezelés), amely a tanuló {{önállóságát}} szolgálja.',
    exp: 'Közvetlenül a mindennapi életben hasznosítható képesség az önállóságért.'
  },
  {
    id: 'cloze_w6_03', w: 6, topic: 'Intellektuális fogyatékosság', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a tanulási potenciál meghatározását!',
    text: 'A tanulási potenciál a fejleszthetőség mértéke; a Vigotszkij-féle legközelebbi {{fejlődési}} zóna alapján nem a jelenlegi, hanem a {{segítséggel}} elérhető teljesítmény a mérvadó.',
    exp: 'A fejleszthetőség mértéke (ZPD); a segítséggel elérhető teljesítmény a mérvadó.'
  },
  {
    id: 'cloze_w6_04', w: 6, topic: 'Tanulásszervezés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az egyéni tanulás meghatározását!',
    text: 'Az egyéni tanulásban a tanuló saját {{ütemében}}, személyre szabott feladatokkal dolgozik, ami lehetővé teszi a maximális {{differenciálást}}.',
    exp: 'A tanuló saját ütemében, személyre szabott feladatokkal dolgozik – maximális differenciálás.'
  },
  {
    id: 'cloze_w6_05', w: 6, topic: 'Tanulásszervezés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a kiscsoportos tanulás meghatározását!',
    text: 'A kiscsoportos tanulás {{3}}–6 fős csoportokban zajlik, lehetővé téve a {{kortárs}} interakciót és együttműködést.',
    exp: '3–6 fős csoportos forma: kortárs interakció és együttműködés.'
  },
  {
    id: 'cloze_w6_06', w: 6, topic: 'Ludoterápia', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a gyakorlójáték szakaszát!',
    text: 'A gyakorlójáték (kb. 0–2 év) ismétlődő, {{manipulatív}}, a testi {{mozgásra}} és érzékelésre épülő cselekvésekből áll.',
    exp: '0–2 év: ismétlődő, manipulatív, testi mozgásra és érzékelésre épülő játék.'
  },
  {
    id: 'cloze_w6_07', w: 6, topic: 'Ludoterápia', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a szimbolikus (szerep-) játék szakaszát!',
    text: 'A szimbolikus játékban (kb. 2–7 év) megjelenik a „{{mintha}}" játék és a tárgyak {{jelképes}} használata.',
    exp: '2–7 év: „mintha" játék, szerepfelvétel, tárgyak jelképes használata.'
  },
  {
    id: 'cloze_w6_08', w: 6, topic: 'Ludoterápia', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a szabályjáték szakaszát!',
    text: 'A szabályjátékban (kb. 7 év felett) a gyermek képes előre rögzített {{szabályokat}} betartani, együttműködni és {{versengeni}}.',
    exp: '7 év felett: előre rögzített szabályok betartása, együttműködés, versengés.'
  },
  {
    id: 'cloze_w6_09', w: 6, topic: 'Ludoterápia', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a konstrukciós játék fejlesztő szerepét!',
    text: 'A konstrukciós játék (építőkockák, puzzle) fejleszti a {{téri}}-vizuális készségeket, a {{finommotorikát}} és a problémamegoldást.',
    exp: 'Téri-vizuális készségek, finommotorika, problémamegoldás, kitartás.'
  },
  {
    id: 'cloze_w6_10', w: 6, topic: 'Intellektuális fogyatékosság', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a transzferálási nehézség meghatározását!',
    text: 'A transzferálási nehézség a megtanultak új {{helyzetre}} való átvitelének nehézsége; ezért szükséges a tanultak több {{helyzetben}} való gyakoroltatása.',
    exp: 'A megtanultak új helyzetre való átvitelének nehézsége; több helyzetben gyakoroltatandó.'
  },
  {
    id: 'cloze_w6_11', w: 6, topic: 'Intellektuális fogyatékosság', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az absztrakciós nehézség meghatározását!',
    text: 'Az absztrakciós nehézség az elvont {{fogalmak}} és szimbólumok korlátozott megértése; a tanuló {{konkrét}}, szemléltetett tapasztalatra szorul.',
    exp: 'Az elvont fogalmak/szimbólumok korlátozott megértése; konkrét, szemléltetett tapasztalatot igényel.'
  },
  {
    id: 'cloze_w6_12', w: 6, topic: 'Komplex értékelés', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a komplex értékelés meghatározását!',
    text: 'A komplex értékelés az öt szempont együttes, {{csapatmunkában}} történő vizsgálata; célja nem a besorolás, hanem a {{PIP}} megalapozása.',
    exp: 'Az öt szempont csapatmunkában való vizsgálata; célja a PIP megalapozása.'
  },
  {
    id: 'cloze_w6_13', w: 6, topic: 'Tanulási alapelvek', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a konkretizálás elvét!',
    text: 'A konkretizálás elve szerint az elvont tartalmakat {{szemléltetéssel}}, valós tárgyakkal és cselekvéssel kell közvetíteni, mielőtt a {{szimbolikus}} szintre lépnénk.',
    exp: 'Az elvont tartalmak közvetítése szemléltetéssel a szimbolikus szint előtt.'
  },
  {
    id: 'cloze_w6_14', w: 6, topic: 'Értékelés', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a kritériumalapú mérés meghatározását!',
    text: 'A kritériumalapú (curriculum-based) mérés nem a {{kortársakhoz}}, hanem a tanuló saját korábbi {{teljesítményéhez}} és egyéni céljaihoz viszonyít.',
    exp: 'A tanuló saját korábbi teljesítményéhez és egyéni céljaihoz viszonyít (nem a kortársakhoz).'
  },
  // 6. Változat – második cloze minden új fogalomhoz
  {
    id: 'cloze_w6_15', w: 6, topic: 'Intellektuális fogyatékosság', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a funkcionális készség példáit!',
    text: 'Funkcionális készség például az {{öltözködés}}, a pénzkezelés, a közlekedés és az egyszerű {{írás-olvasás}} alkalmazása.',
    exp: 'Példák: öltözködés, pénzkezelés, közlekedés, egyszerű írás-olvasás alkalmazása.'
  },
  {
    id: 'cloze_w6_16', w: 6, topic: 'Intellektuális fogyatékosság', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a tanulási potenciál lényegét!',
    text: 'A tanulási potenciál a megfelelő {{támogatás}} melletti fejlődési {{tartalék}} mértéke.',
    exp: 'A támogatás melletti fejlődési tartalék mértéke.'
  },
  {
    id: 'cloze_w6_17', w: 6, topic: 'Tanulásszervezés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az egyéni tanulás korlátját!',
    text: 'Az egyéni tanulás korlátja, hogy hiányzik a {{kortárssal}} való interakció, és {{erőforrás}}-igényes a tanár számára.',
    exp: 'Korlátok: hiányzó kortársi interakció, erőforrás- és időigény, izoláció.'
  },
  {
    id: 'cloze_w6_18', w: 6, topic: 'Tanulásszervezés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a kiscsoportos tanulás előnyét!',
    text: 'A kiscsoportos tanulás előnye a társas tanulás és a kortárs {{modellkövetés}}, valamint a {{kommunikációs}} és együttműködési készségek fejlődése.',
    exp: 'Előnyök: társas tanulás, kortárs modellkövetés, kommunikációs és együttműködési készségek.'
  },
  {
    id: 'cloze_w6_19', w: 6, topic: 'Ludoterápia', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a gyakorlójáték életkorát és jellegét!',
    text: 'A gyakorlójáték a játékfejlődés {{első}} szakasza (kb. 0–2 év), amely a testi mozgásra és {{érzékelésre}} épül.',
    exp: 'A játékfejlődés első szakasza (0–2 év), testi mozgásra és érzékelésre épül.'
  },
  {
    id: 'cloze_w6_20', w: 6, topic: 'Ludoterápia', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a szimbolikus játék fejlődési jelentőségét!',
    text: 'A szimbolikus játékban jelenik meg a {{fantázia}} és az {{érzelmi}} feldolgozás lehetősége.',
    exp: 'A fantázia és az érzelmi feldolgozás lehetőségének megjelenése.'
  },
  {
    id: 'cloze_w6_21', w: 6, topic: 'Ludoterápia', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a szabályjáték fejlődési jelentőségét!',
    text: 'A szabályjáték az {{önszabályozás}} és a szociális {{kogníció}} fejlődését jelzi (Piaget nyomán).',
    exp: 'Az önszabályozás és a szociális kogníció fejlődését jelzi (Piaget).'
  },
  {
    id: 'cloze_w6_22', w: 6, topic: 'Ludoterápia', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a szimbolikus/szerepjáték fejlesztő szerepét!',
    text: 'A szimbolikus/szerepjáték fejleszti a nyelvi {{kifejezőkészséget}}, az {{empátiát}} és a szociális szerepek megértését.',
    exp: 'Fejleszti a nyelvi kifejezőkészséget, empátiát, szociális szerepek megértését.'
  },
  {
    id: 'cloze_w6_23', w: 6, topic: 'Intellektuális fogyatékosság', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a transzferálási nehézség kezelését!',
    text: 'A transzferálási nehézség miatt a tanultakat {{tudatosan}}, ismételten kell gyakoroltatni, hogy {{általánosíthatóvá}} váljanak.',
    exp: 'A tanultak tudatos, ismételt gyakoroltatása több helyzetben az általánosításért.'
  },
  {
    id: 'cloze_w6_24', w: 6, topic: 'Intellektuális fogyatékosság', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az absztrakciós nehézség következményét!',
    text: 'Az absztrakciós nehézség miatt a tanulónak {{konkrét}}, {{szemléltetett}} tapasztalatra van szüksége az elvont tartalmak elsajátításához.',
    exp: 'Konkrét, szemléltetett tapasztalat szükséges az elvont tartalmakhoz.'
  },
  {
    id: 'cloze_w6_25', w: 6, topic: 'Komplex értékelés', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a komplex értékelés résztvevőit!',
    text: 'A komplex értékelés csapatmunkában zajlik: {{pszichológus}}, pszichopedagógus, orvos, tanár és szociális {{munkás}} részvételével.',
    exp: 'Csapatmunka: pszichológus, pszichopedagógus, orvos, tanár, szociális munkás.'
  },
  {
    id: 'cloze_w6_26', w: 6, topic: 'Tanulási alapelvek', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a konkretizálás indoklását!',
    text: 'A konkretizálás azért szükséges, mert az intellektuális fogyatékosságú tanulónak nehéz az {{elvont}} fogalmak megértése {{szemléltetés}} nélkül.',
    exp: 'Az elvont fogalmak megértése szemléltetés nélkül nehéz.'
  },
  {
    id: 'cloze_w6_27', w: 6, topic: 'Értékelés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a kritériumalapú mérés lényegét!',
    text: 'A kritériumalapú mérés a tanuló saját {{korábbi}} teljesítményéhez és az egyénre szabott {{célokhoz}} viszonyít.',
    exp: 'A saját korábbi teljesítményhez és az egyéni célokhoz viszonyít.'
  },

  // ─── 8. VÁLTOZAT ──────────────────────────────────────────────────────────
  {
    id: 'cloze_w8_01', w: 8, topic: 'Motoros fogyatékosság', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a motoros fogyatékosság meghatározását!',
    text: 'A motoros fogyatékosság a {{mozgásszervrendszer}} vagy az idegrendszer mozgásszabályozó funkcióinak {{károsodásából}} ered, és korlátozza a helyváltoztatást és a {{testtartás}} fenntartását.',
    exp: 'A mozgásszervrendszer vagy az idegrendszer károsodásából ered; korlátozza a helyváltoztatást és a testtartást.'
  },
  {
    id: 'cloze_w8_02', w: 8, topic: 'Motoros fogyatékosság', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a motoros fogyatékosság eredetét!',
    text: 'A motoros fogyatékosság lehet {{veleszületett}} (pl. végtaghiány) vagy {{szerzett}} (baleset, betegség következménye).',
    exp: 'Lehet veleszületett vagy szerzett.'
  },
  {
    id: 'cloze_w8_03', w: 8, topic: 'Neuromotoros zavar', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a neuromotoros zavar meghatározását!',
    text: 'A neuromotoros zavar a központi vagy perifériás {{idegrendszer}} károsodásából eredő mozgászavar, amelynél sérül az izomtónus szabályozása, a koordináció, az egyensúly vagy a mozgástervezés, azaz a {{praxis}}.',
    exp: 'Az idegrendszer károsodásából eredő mozgászavar; a mozgástervezés = praxis.'
  },
  {
    id: 'cloze_w8_04', w: 8, topic: 'Cerebrális parézis', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a cerebrális parézis meghatározását!',
    text: 'A cerebrális parézis nem {{progresszív}}, de a fejlődés során változó megjelenésű mozgás- és testtartászavar, amely a fejlődő {{agy}} károsodásából ered.',
    exp: 'Nem progresszív, a fejlődő agy károsodásából eredő mozgás- és testtartászavar.'
  },
  {
    id: 'cloze_w8_05', w: 8, topic: 'Cerebrális parézis', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a CP társuló zavaraira vonatkozó mondatot!',
    text: 'A cerebrális parézishez gyakran társulnak érzékelési, kognitív, kommunikációs, viselkedési zavarok és {{epilepszia}}.',
    exp: 'Gyakran társul érzékelési, kognitív, kommunikációs, viselkedési zavar és epilepszia.'
  },
  {
    id: 'cloze_w8_06', w: 8, topic: 'Halmozott fogyatékosság', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a halmozott fogyatékosság meghatározását!',
    text: 'A halmozott fogyatékosság két vagy több, minőségileg {{különböző}} fogyatékossági terület egyidejű fennállása, ahol a területek kölcsönösen {{felerősítik}} egymás hatását.',
    exp: 'Két vagy több, minőségileg különböző terület, amelyek felerősítik egymást.'
  },
  {
    id: 'cloze_w8_07', w: 8, topic: 'Halmozott fogyatékosság', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a halmozott fogyatékosság támogatási szemléletét!',
    text: 'A halmozott fogyatékosságnál a támogatási szükséglet nem az egyes fogyatékosságok {{összegeként}}, hanem minőségileg új, {{komplex}} profilként értelmezendő.',
    exp: 'Nem az egyes területek összege, hanem minőségileg új, komplex profil.'
  },
  {
    id: 'cloze_w8_08', w: 8, topic: 'Funkcionális mobilitás', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a funkcionális mobilitás meghatározását!',
    text: 'A funkcionális mobilitás gyakorlati képesség a biztonságos helyzet- és helyváltoztatásra; a hangsúly a {{tevékenységi}} szintű teljesítményen van, nem a mozgásminta {{normalitásán}}.',
    exp: 'A tevékenységi szintű teljesítményen van a hangsúly, nem a mozgásminta normalitásán.'
  },
  {
    id: 'cloze_w8_09', w: 8, topic: 'Etiológia és osztályozás', type: 'cloze', diff: 3,
    q: 'Egészítsd ki az érintettség időpontja szerinti osztályozást!',
    text: 'Az érintettség időpontja szerint a károsodás lehet {{prenatális}}, {{perinatális}} (pl. oxigénhiány szülés közben) és {{posztnatális}} eredetű.',
    exp: 'Prenatális, perinatális és posztnatális eredet.'
  },
  {
    id: 'cloze_w8_10', w: 8, topic: 'Etiológia és osztályozás', type: 'cloze', diff: 3,
    q: 'Egészítsd ki az érintett terület kiterjedése szerinti típusokat!',
    text: 'A kiterjedés szerint: {{monoplégia}} (egy végtag), hemiplégia (test egyik fele), {{diplégia}} (alsó végtagok) és quadriplégia (mind a négy végtag).',
    exp: 'Monoplégia, hemiplégia, diplégia, quadriplégia/tetraplégia.'
  },
  {
    id: 'cloze_w8_11', w: 8, topic: 'Etiológia és osztályozás', type: 'cloze', diff: 3,
    q: 'Egészítsd ki az izomtónus jellege szerinti típusokat!',
    text: 'Az izomtónus jellege szerint: {{spasztikus}} (fokozott tónus), {{dyskinetikus}} (ingadozó, akaratlan mozgások) és {{ataxiás}} (egyensúly- és koordinációzavar).',
    exp: 'Spasztikus, dyskinetikus, ataxiás (és hypotóniás, kevert).'
  },
  {
    id: 'cloze_w8_12', w: 8, topic: 'Cerebrális parézis', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a spasztikus CP jellemzését!',
    text: 'A spasztikus CP a leggyakoribb típus: {{fokozott}} izomtónus és jellegzetes, „ollózó” {{mozgásminta}} jellemzi.',
    exp: 'A leggyakoribb típus: fokozott tónus, „ollózó” mozgásminta.'
  },
  {
    id: 'cloze_w8_13', w: 8, topic: 'Cerebrális parézis', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a dyskinetikus CP jellemzését!',
    text: 'A dyskinetikus/atetoid CP-t {{ingadozó}} izomtónus és {{akaratlan}}, célra nem irányuló mozgások jellemzik, gyakran érintett az artikuláció.',
    exp: 'Ingadozó tónus, akaratlan mozgások, gyakran érintett artikuláció.'
  },
  {
    id: 'cloze_w8_14', w: 8, topic: 'Cerebrális parézis', type: 'cloze', diff: 3,
    q: 'Egészítsd ki az ataxiás CP jellemzését!',
    text: 'Az ataxiás CP-t {{egyensúly}}- és koordinációzavar, bizonytalan, széles alapú {{járás}} és célzási nehézség jellemzi.',
    exp: 'Egyensúly- és koordinációzavar, széles alapú járás, célzási nehézség.'
  },
  {
    id: 'cloze_w8_15', w: 8, topic: 'Korai intervenció', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a korai intervenció meghatározását!',
    text: 'A korai intervenció koordinált, {{család}}- és gyermekközpontú szolgáltatások összessége, jellemzően {{0–6/7}} éves korban.',
    exp: 'Család- és gyermekközpontú szolgáltatások, jellemzően 0–6/7 éves korban.'
  },
  {
    id: 'cloze_w8_16', w: 8, topic: 'Korai intervenció', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a korai intervenció céljait!',
    text: 'A korai intervenció a fejlődés legérzékenyebb, a {{plaszticitás}} szempontjából legkedvezőbb időszakát használja ki, megelőzi a {{másodlagos}} nehézségeket, és megerősíti a család {{kompetenciáit}}.',
    exp: 'A plaszticitás időszakát használja, megelőzi a másodlagos nehézségeket, erősíti a család kompetenciáit.'
  },
  {
    id: 'cloze_w8_17', w: 8, topic: 'Családközpontú alapelvek', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az erősségalapú megközelítés lényegét!',
    text: 'Az erősségalapú megközelítés a család és a gyermek meglévő {{erőforrásaira}} és kompetenciáira épít, nem kizárólag a {{hiányosságokra}}.',
    exp: 'A meglévő erőforrásokra épít, nem csak a hiányosságokra.'
  },
  {
    id: 'cloze_w8_18', w: 8, topic: 'Családközpontú alapelvek', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a rutinba ágyazott fejlesztés elvét!',
    text: 'A beavatkozás nem elszigetelt terápiás órákban, hanem a család természetes napi {{tevékenységeiben}} (étkezés, játék, fürdetés) valósul meg leghatékonyabban.',
    exp: 'A fejlesztés a mindennapi rutinokba (étkezés, játék, fürdetés) ágyazva a leghatékonyabb.'
  },
  {
    id: 'cloze_w8_19', w: 8, topic: 'Értékelés a korai intervencióban', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a szűrés (screening) jellemzését!',
    text: 'A szűrés célja nem a {{diagnózis}} felállítása, hanem annak jelzése, hogy szükséges-e részletesebb kivizsgálás; alacsony {{specificitású}}, de magas {{érzékenységű}} eszköz.',
    exp: 'Nem diagnózist ad, hanem jelez; alacsony specificitás, magas érzékenység.'
  },
  {
    id: 'cloze_w8_20', w: 8, topic: 'Értékelés a korai intervencióban', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a diagnosztikus értékelés jellemzését!',
    text: 'A diagnosztikus értékelés részletes, több {{szakterületet}} bevonó folyamat, amely a román rendszerben a {{CJRAE}}/CMBRAE komplex kiértékelő szolgálatán keresztül zajlik.',
    exp: 'Részletes, multidiszciplináris folyamat a CJRAE/CMBRAE keretében.'
  },
  {
    id: 'cloze_w8_21', w: 8, topic: 'Értékelés a korai intervencióban', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a fejlődésmonitorozás meghatározását!',
    text: 'A fejlődésmonitorozás {{folyamatos}}, ismétlődő nyomon követés a program egésze alatt, amely a célok és módszerek rendszeres {{felülvizsgálatát}} szolgálja.',
    exp: 'Folyamatos nyomon követés; a célok és módszerek rendszeres felülvizsgálata.'
  },
  {
    id: 'cloze_w8_22', w: 8, topic: 'Team-munka', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a transzdiszciplináris team-modell lényegét!',
    text: 'A transzdiszciplináris modellben egy {{kulcsszakember}} (key worker) hangolja össze és közvetíti a szakterületek javaslatait a {{család}} felé, csökkentve a szolgáltatások töredezettségét.',
    exp: 'Egy kulcsszakember (key worker) fogja össze és közvetíti a javaslatokat a család felé.'
  },
  {
    id: 'cloze_w8_23', w: 8, topic: 'Korai intervenciós folyamat', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a generalizáció meghatározását!',
    text: 'A generalizáció a megtanult készség {{átvitele}} más személyekre, helyszínekre és helyzetekre; fogyatékossággal élő gyermeknél a spontán átvitel gyakran nem működik {{automatikusan}}.',
    exp: 'A készség átvitele más kontextusokra; a spontán átvitel gyakran nem automatikus.'
  },
  {
    id: 'cloze_w8_24', w: 8, topic: 'Korai intervenciós folyamat', type: 'cloze', diff: 3,
    q: 'Egészítsd ki az átmenet-tervezés jelentőségét!',
    text: 'Az intézményi {{átmenetek}} különösen sérülékeny pontok, ezért az átmenet-tervezés (dokumentáció átadása, közös látogatások, fokozatos {{beillesztés}}) nélkülözhetetlen.',
    exp: 'Az átmenetek sérülékeny pontok; az átmenet-tervezés nélkülözhetetlen.'
  },
  {
    id: 'cloze_w8_25', w: 8, topic: 'Segítő technológia', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a segítő technológia meghatározását!',
    text: 'A segítő technológia minden olyan eszköz vagy rendszer — az alacsony {{technológiájú}} megoldástól a komplexig —, amely a személy {{funkcionális}} képességeit növeli, fenntartja vagy javítja.',
    exp: 'Bármely eszköz az alacsony technológiájútól a komplexig, amely a funkcionális képességeket segíti.'
  },
  {
    id: 'cloze_w8_26', w: 8, topic: 'Segítő technológia', type: 'cloze', diff: 3,
    q: 'Egészítsd ki az alternatív hozzáférés meghatározását!',
    text: 'Az alternatív hozzáférés lehetővé teszi, hogy a hagyományos {{beviteli}} móddal élni nem tudó felhasználó is interakcióba léphessen — pl. kapcsoló (switch), {{szemkövető}} rendszer, fejmozgás-vezérlés.',
    exp: 'A hagyományos bevitelt nem használó személynek is lehetővé teszi az interakciót (kapcsoló, szemkövetés).'
  },
  {
    id: 'cloze_w8_27', w: 8, topic: 'Segítő technológia', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az AAC meghatározását!',
    text: 'Az augmentatív és alternatív kommunikáció a beszédet {{kiegészítő}} vagy {{helyettesítő}} kommunikációs formák és eszközök összessége korlátozott beszédprodukció esetén.',
    exp: 'A beszédet kiegészítő (augmentatív) vagy helyettesítő (alternatív) kommunikáció.'
  },
  {
    id: 'cloze_w8_28', w: 8, topic: 'Segítő technológia', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a pozicionálás meghatározását!',
    text: 'A pozicionálás a test funkcionálisan optimális és biztonságos {{testtartásának}} biztosítása, amely alapfeltétele a kéz-, fej- és {{szemkontroll}} hatékony használatának.',
    exp: 'Az optimális testtartás biztosítása; alapfeltétele a kéz-, fej- és szemkontrollnak.'
  },
  {
    id: 'cloze_w8_29', w: 8, topic: 'Segítő technológia', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a környezetvezérlés meghatározását!',
    text: 'A környezetvezérlés olyan rendszer, amely a {{környezeti}} elemek (fény, ajtó, eszközök) önálló, adaptált működtetését teszi lehetővé, növelve az {{autonómiát}}.',
    exp: 'A környezeti elemek önálló, adaptált működtetése; növeli az autonómiát.'
  },
  {
    id: 'cloze_w8_30', w: 8, topic: 'Technológia előnyei és korlátai', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a segítő technológia korlátjára vonatkozó mondatot!',
    text: 'Meghibásodás vagy finanszírozási nehézség esetén a hozzáférés hirtelen megszakadhat, ezért mindig szükséges alacsony technológiájú {{tartalék}} megoldás (pl. papíralapú kommunikációs {{tábla}}).',
    exp: 'Mindig kell alacsony technológiájú tartalék (pl. papíralapú kommunikációs tábla).'
  },

  // ─── 9. VÁLTOZAT ──────────────────────────────────────────────────────────
  {
    id: 'cloze_w9_01', w: 9, topic: 'Pszichofizikai fejlődés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a pszichofizikai fejlődés meghatározását!',
    text: 'A pszichofizikai fejlődés a személy {{testi}} és {{pszichés}} funkcióinak életkorral együtt járó, egymással szoros {{kölcsönhatásban}} zajló átalakulása.',
    exp: 'A testi és pszichés funkciók szoros kölcsönhatásban zajló átalakulása.'
  },
  {
    id: 'cloze_w9_02', w: 9, topic: 'Kompenzáció', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a kompenzáció meghatározását!',
    text: 'A kompenzáció során a {{sérült}} funkciót más, épen maradt funkciók vagy alternatív {{stratégiák}} helyettesítik vagy egészítik ki.',
    exp: 'A sérült funkciót ép funkciók vagy alternatív stratégiák helyettesítik/egészítik ki.'
  },
  {
    id: 'cloze_w9_03', w: 9, topic: 'Adaptív működés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az adaptív működés meghatározását!',
    text: 'Az adaptív működés a {{fogalmi}}, szociális és {{gyakorlati}} készségek együttese, amelyeket a személy az önálló életvitelhez alkalmaz.',
    exp: 'A fogalmi, szociális és gyakorlati készségek együttese az önálló életvitelhez.'
  },
  {
    id: 'cloze_w9_04', w: 9, topic: 'Társadalmi részvétel', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a társadalmi részvétel meghatározását!',
    text: 'A társadalmi részvétel a személy tényleges {{bevonódása}} és aktív jelenléte az élet területein — nem csupán a {{fizikai}} jelenlét, hanem az érdemi közreműködés értelmében.',
    exp: 'Tényleges bevonódás és érdemi közreműködés, nem csupán fizikai jelenlét.'
  },
  {
    id: 'cloze_w9_05', w: 9, topic: 'Személyiség', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a személyiség meghatározását!',
    text: 'A személyiséget fogyatékosság esetén is elsősorban a személyes {{fejlődéstörténet}}, nem a {{diagnózis}} határozza meg.',
    exp: 'A fejlődéstörténet, nem a diagnózis határozza meg.'
  },
  {
    id: 'cloze_w9_06', w: 9, topic: 'Kognitív sajátosságok', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a végrehajtó funkciók felsorolását!',
    text: 'A végrehajtó funkciók: a {{tervezés}}, a gátlás, a kognitív {{rugalmasság}} és az {{önmonitorozás}}.',
    exp: 'Tervezés, gátlás, kognitív rugalmasság és önmonitorozás.'
  },
  {
    id: 'cloze_w9_07', w: 9, topic: 'Kognitív sajátosságok', type: 'cloze', diff: 3,
    q: 'Egészítsd ki az érzékelés és az észlelés megkülönböztetését!',
    text: 'Az {{érzékelés}} az elsődleges ingerfelvétel, míg az {{észlelés}} a beérkező ingerek értelmezése, amely ép érzékszervek mellett is nehezített lehet.',
    exp: 'Az érzékelés az ingerfelvétel; az észlelés az ingerek értelmezése.'
  },
  {
    id: 'cloze_w9_08', w: 9, topic: 'Motiváció és érzelmek', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a tanult tehetetlenség meghatározását!',
    text: 'A tanult tehetetlenség az ismételt {{kudarcélmények}} nyomán kialakuló állapot, amely csökkenti a feladatokba való belefogás {{hajlandóságát}}.',
    exp: 'Az ismételt kudarcok nyomán csökken a feladatokba fogás hajlandósága.'
  },
  {
    id: 'cloze_w9_09', w: 9, topic: 'Motiváció és érzelmek', type: 'cloze', diff: 3,
    q: 'Egészítsd ki az affektivitásra vonatkozó mondatot!',
    text: 'Autizmus spektrumzavarnál az érzelmek eltérő kifejezése nem az érzelmek {{hiányát}}, hanem azok másképp történő {{megnyilvánulását}} jelenti.',
    exp: 'Nem az érzelmek hiánya, hanem másképp történő megnyilvánulása.'
  },
  {
    id: 'cloze_w9_10', w: 9, topic: 'Adaptív viselkedés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az adaptív viselkedés gyakorlati területét!',
    text: 'Az adaptív viselkedés gyakorlati területe az {{önkiszolgálási}} készségeket (öltözködés, étkezés, higiénia) és a mindennapi {{életvezetési}} készségeket foglalja magában.',
    exp: 'Önkiszolgálási és mindennapi életvezetési készségek.'
  },
  {
    id: 'cloze_w9_11', w: 9, topic: 'Integráció akadályai', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a környezeti attitűdökre vonatkozó mondatot!',
    text: 'A környezet negatív attitűdjei és alacsony {{elvárásai}} (stigma, túlvédés) másodlagos akadályt jelenthetnek, amely súlyosabb is lehet, mint maga az eredeti {{károsodás}}.',
    exp: 'A negatív attitűdök súlyosabb akadályt jelenthetnek, mint az eredeti károsodás.'
  },
  {
    id: 'cloze_w9_12', w: 9, topic: 'Integráció akadályai', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a strukturális akadályokra vonatkozó mondatot!',
    text: 'A társadalmi részvétel strukturális akadályai nem a személy {{képességeiből}}, hanem a környezet {{felkészületlenségéből}} fakadnak.',
    exp: 'Nem a személy képességeiből, hanem a környezet felkészületlenségéből fakadnak.'
  },
  {
    id: 'cloze_w9_13', w: 9, topic: 'Hozzáférhető kommunikáció', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a hozzáférhető kommunikáció meghatározását!',
    text: 'A hozzáférhető kommunikáció azt jelenti, hogy a {{csatorna}}, forma és {{tempó}} igazodik a személy érzékelési, motoros és kognitív lehetőségeihez.',
    exp: 'A csatorna, forma és tempó a személy lehetőségeihez igazodik.'
  },
  {
    id: 'cloze_w9_14', w: 9, topic: 'Funkcionális kommunikáció', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a funkcionális kommunikáció meghatározását!',
    text: 'A funkcionális kommunikáció valós, a mindennapi életben {{releváns}} célokat szolgál, és a személy {{önrendelkezését}} és részvételét ténylegesen növeli.',
    exp: 'Valós, mindennapi célokat szolgál; növeli az önrendelkezést és a részvételt.'
  },
  {
    id: 'cloze_w9_15', w: 9, topic: 'Kommunikációs partneri stratégiák', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a modellezés meghatározását!',
    text: 'A modellezés (aided language stimulation) a kommunikációs eszköz folyamatos, a saját {{beszéddel}} párhuzamos használata a partner részéről, {{mintát}} adva a tanulónak.',
    exp: 'A partner a saját beszédével párhuzamosan használja az eszközt, mintát adva.'
  },
  {
    id: 'cloze_w9_16', w: 9, topic: 'Kommunikációs partneri stratégiák', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a válaszadásra vonatkozó partneri stratégiát!',
    text: 'Fontos a {{várakozás}} és tér biztosítása a válaszadásra, ahelyett hogy a partner kitalálná és {{megelőzné}} az üzenetet.',
    exp: 'Várakozás és tér a válaszadásra, a megelőzés helyett.'
  },
  {
    id: 'cloze_w9_17', w: 9, topic: 'Kommunikációs fejlődés mutatói', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a kommunikációs fejlődés mutatóit!',
    text: 'Fejlődési mutató a {{spontán}} kezdeményezett megnyilvánulások gyakoriságának növekedése és a kommunikáció {{generalizálódása}} különböző partnerek és helyzetek között.',
    exp: 'A spontán kezdeményezések gyakorisága és a generalizálódás.'
  },
  {
    id: 'cloze_w9_18', w: 9, topic: 'Fogyatékosságspecifikus adaptáció', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a hallássérülés esetén ajánlott adaptációt!',
    text: 'Hallássérülésnél a {{vizuális}} információ dominanciáját kell biztosítani, és a pedagógusnak {{szemből}}, jól látható artikulációval kell beszélnie.',
    exp: 'A vizuális információ dominanciája és a szemből, látható artikulációval beszéd.'
  },
  {
    id: 'cloze_w9_19', w: 9, topic: 'Fogyatékosságspecifikus adaptáció', type: 'cloze', diff: 3,
    q: 'Egészítsd ki az autizmus esetén ajánlott nyelvhasználatot!',
    text: 'Autizmus spektrumzavarnál {{konkrét}}, egyértelmű, metaforáktól és {{iróniától}} mentes nyelvhasználat ajánlott, vizuális támogatókkal.',
    exp: 'Konkrét, metaforáktól és iróniától mentes nyelv, vizuális támogatókkal.'
  },
  {
    id: 'cloze_w9_20', w: 9, topic: 'Esettanulmány', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az esettanulmány meghatározását!',
    text: 'Az esettanulmány egy konkrét, komplex {{helyzet}} mélyreható, több szempontú vizsgálata; a hangsúly az {{elemzésen}} és a reflektív értelmezésen van.',
    exp: 'Egy komplex helyzet többszempontú vizsgálata; a hangsúly az elemzésen és reflexión.'
  },
  {
    id: 'cloze_w9_21', w: 9, topic: 'Problémamegoldó tanulás', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a problémamegoldó tanulás meghatározását!',
    text: 'A problémamegoldó tanulás egy jól körülhatárolt {{probléma}} megoldására irányul; a hangsúly a megoldási {{stratégia}} kidolgozásán, kipróbálásán és értékelésén van.',
    exp: 'Egy jól körülhatárolt probléma megoldása; a hangsúly a stratégián.'
  },
  {
    id: 'cloze_w9_22', w: 9, topic: 'Esettanulmány', type: 'cloze', diff: 3,
    q: 'Egészítsd ki az esettanulmány első és utolsó lépését!',
    text: 'Az esettanulmány az eset {{kiválasztása}} és bemutatása lépéssel kezdődik, és a szintézissel, következtetésekkel és {{reflexióval}} zárul.',
    exp: 'Az eset kiválasztásától a szintézisig és reflexióig.'
  },
  {
    id: 'cloze_w9_23', w: 9, topic: 'Módszer előnyei és korlátai', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az esettanulmány korlátját!',
    text: 'Az esettanulmány {{időigényes}} módszer, amely gondos {{előkészítést}} és rugalmas óraszervezést igényel.',
    exp: 'Időigényes, gondos előkészítést és rugalmas óraszervezést igényel.'
  },
  {
    id: 'cloze_w9_24', w: 9, topic: 'Etikai és pedagógiai követelmények', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a valós személyeken alapuló esettanulmány etikai követelményét!',
    text: 'Ha az eset valós személyek helyzetén alapul, biztosítani kell az {{anonimitást}} és az érintettek tájékozott {{beleegyezését}}.',
    exp: 'Anonimitás és tájékozott beleegyezés biztosítása.'
  },
  {
    id: 'cloze_w9_25', w: 9, topic: 'Részvétel értékelése', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a részvétel megfigyelési lapjának elemeit!',
    text: 'A megfigyelési lap eleme a {{bevonódás}} mértéke, a kommunikációs hozzájárulás formája, a társakkal való {{együttműködés}} és az önállóság szintje.',
    exp: 'Bevonódás, kommunikációs hozzájárulás, együttműködés, önállóság.'
  },
  {
    id: 'cloze_w9_26', w: 9, topic: 'Védőfaktorok', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a védőfaktorokra vonatkozó mondatot!',
    text: 'Védőfaktor a biztonságos, elfogadó családi {{kötődés}}, valamint a korai, jól illeszkedő szakmai {{támogatás}}.',
    exp: 'Biztonságos családi kötődés és korai szakmai támogatás.'
  },
  {
    id: 'cloze_w9_27', w: 9, topic: 'Kommunikációt támogató környezet', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a kommunikációt támogató környezet elemét!',
    text: 'A kommunikációt támogatja az eszközök/szimbólumok állandó, {{kiszámítható}} elérhetősége minden releváns helyzetben, nem csak a kommunikációs {{órán}}.',
    exp: 'Az eszközök állandó, kiszámítható elérhetősége minden helyzetben.'
  },
  {
    id: 'cloze_w9_28', w: 9, topic: 'Inkluzív tervezés', type: 'cloze', diff: 3,
    q: 'Egészítsd ki az inkluzív közös tevékenység elvét!',
    text: 'A közös tevékenység {{kerete}} minden tanuló számára azonos marad, csak a kifejezés {{formája}} és eszköze adaptálódik, így a tevékenység valóban inkluzív.',
    exp: 'A közös keret azonos, csak a kifejezés formája/eszköze adaptálódik.'
  },
  {
    id: 'cloze_w9_29', w: 9, topic: 'Alkalmazás CES-tanulóknál', type: 'cloze', diff: 3,
    q: 'Egészítsd ki az autizmusnál alkalmazott esettanulmány indoklását!',
    text: 'Az esettanulmány a társas helyzetek {{explicit}}, strukturált elemzését teszi lehetővé, ami autizmusnál gyakran spontán módon nehezebben alakul ki: mások {{nézőpontjának}} lépésenkénti végiggondolása.',
    exp: 'A társas helyzetek explicit elemzése; mások nézőpontjának végiggondolása.'
  },
  {
    id: 'cloze_w9_30', w: 9, topic: 'Alkalmazás CES-tanulóknál', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a generalizációra vonatkozó mondatot!',
    text: 'A funkcionális probléma lépéssorát hasonló mindennapi helyzetekben is {{gyakorolják}} a {{generalizáció}} érdekében.',
    exp: 'A lépéssort más helyzetekben is gyakorolják a generalizációért.'
  },

  // ─── 10. VÁLTOZAT ─────────────────────────────────────────────────────────
  {
    id: 'cloze_w10_01', w: 10, topic: 'Preprofesszionalizáció', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a preprofesszionalizáció meghatározását!',
    text: 'A preprofesszionalizáció az alapvető {{munkaszokások}}, magatartásformák és attitűdök korai, iskolai megalapozása, még a konkrét {{szakma}} választása előtt.',
    exp: 'Az alapvető munkaszokások és attitűdök korai megalapozása a szakmaválasztás előtt.'
  },
  {
    id: 'cloze_w10_02', w: 10, topic: 'Professzionalizáció', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a professzionalizáció meghatározását!',
    text: 'A professzionalizáció egy meghatározott {{munkakörre}} irányuló, konkrét szakmai ismeretek és {{technikai}} készségek elsajátítása.',
    exp: 'Egy meghatározott munkakörre irányuló szakmai ismeretek és technikai készségek elsajátítása.'
  },
  {
    id: 'cloze_w10_03', w: 10, topic: 'Munkakészség', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a munkakészség meghatározását!',
    text: 'A munkakészség viselkedéses, kommunikációs és {{funkcionális}} készségek együttese, amely lehetővé teszi egy munkahelyi {{elvárásrendszernek}} való megfelelést.',
    exp: 'Viselkedéses, kommunikációs és funkcionális készségek a munkahelyi elvárásoknak való megfeleléshez.'
  },
  {
    id: 'cloze_w10_04', w: 10, topic: 'Tranzíció', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a tranzíció meghatározását!',
    text: 'A tranzíció az iskolai környezetből a {{felnőtt}} élet színterei felé történő, tervezett és {{fokozatos}} átmenet, amely több évre visszanyúló előkészítést igényel.',
    exp: 'Az iskolából a felnőtt élet felé történő tervezett, fokozatos átmenet.'
  },
  {
    id: 'cloze_w10_05', w: 10, topic: 'Támogatott foglalkoztatás', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a támogatott foglalkoztatás meghatározását!',
    text: 'A támogatott foglalkoztatásban a személy a {{nyílt}} munkaerőpiacon, valódi {{bérért}} dolgozik, miközben munkahelyi mentor (job coach) segíti a beilleszkedést.',
    exp: 'A nyílt munkaerőpiacon, valódi bérért, job coach segítségével.'
  },
  {
    id: 'cloze_w10_06', w: 10, topic: 'Munkakészség-területek', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a funkcionális akadémiai készségek meghatározását!',
    text: 'A funkcionális akadémiai készségek a munkavégzéshez szükséges mértékű alapszintű {{olvasás}}, számolás, valamint idő- és {{pénzkezelés}}.',
    exp: 'Alapszintű olvasás, számolás, idő- és pénzkezelés.'
  },
  {
    id: 'cloze_w10_07', w: 10, topic: 'Preprofesszionális tevékenységek', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a job shadowing meghatározását!',
    text: 'A job shadowing munkahelyi {{látogatás}} és megfigyelés különböző valós {{szakmai}} környezetekben.',
    exp: 'Munkahelyi látogatás és megfigyelés valós szakmai környezetekben.'
  },
  {
    id: 'cloze_w10_08', w: 10, topic: 'Együttműködés az átmenetben', type: 'cloze', diff: 3,
    q: 'Egészítsd ki az átmenet szereplőinek együttműködésére vonatkozó mondatot!',
    text: 'A sikeres átmenethez a {{család}}, a munkaadó és a közösségi szolgáltatások tartós, {{koordinált}} együttműködése szükséges.',
    exp: 'A család, a munkaadó és a közösségi szolgáltatások koordinált együttműködése.'
  },
  {
    id: 'cloze_w10_09', w: 10, topic: 'Munkába állás tényezői', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a munkába állás társadalmi tényezőjére vonatkozó mondatot!',
    text: 'A munkaadók és munkatársak {{attitűdje}} és tájékozottsága döntő: az {{előítéletek}} jelentős akadályozó tényezőt jelentenek.',
    exp: 'A munkaadói-társadalmi attitűdök döntők; az előítéletek akadályoznak.'
  },
  {
    id: 'cloze_w10_10', w: 10, topic: 'Pályaorientáció', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a pályaorientáció meghatározását!',
    text: 'A pályaorientáció segíti a személyt saját {{érdeklődésének}}, képességeinek és értékeinek megismerésében, és ezek összekapcsolásában a lehetséges {{utakkal}}.',
    exp: 'Az érdeklődés, képességek, értékek megismerése és összekapcsolása a lehetséges utakkal.'
  },
  {
    id: 'cloze_w10_11', w: 10, topic: 'Pályatanácsadás', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a pályatanácsadás meghatározását!',
    text: 'A pályatanácsadás a pályaorientáció személyre szabott, {{bizalmi}} tanácsadói kapcsolatban megvalósuló, {{segítő}} formája.',
    exp: 'A pályaorientáció személyre szabott, bizalmi, segítő formája.'
  },
  {
    id: 'cloze_w10_12', w: 10, topic: 'Önrendelkezés', type: 'cloze', diff: 3,
    q: 'Egészítsd ki az önrendelkezés meghatározását!',
    text: 'Az önrendelkezés (autodeterminare) a saját élet feletti {{döntéshozatal}} képessége és lehetősége, amely a motiváció és az {{életminőség}} kulcstényezője.',
    exp: 'A saját élet feletti döntéshozatal képessége; a motiváció és életminőség kulcstényezője.'
  },
  {
    id: 'cloze_w10_13', w: 10, topic: 'Támogatott döntéshozatal', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a támogatott döntéshozatal meghatározását!',
    text: 'A támogatott döntéshozatal nem {{helyettesítő}}, hanem segített döntéshozatal, amelyben a fiatal saját {{preferenciái}} állnak a középpontban.',
    exp: 'Nem helyettesítő, hanem segített döntéshozatal a fiatal preferenciáival a középpontban.'
  },
  {
    id: 'cloze_w10_14', w: 10, topic: 'Pályaválasztási profil', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a funkcionális önállósági szint meghatározását!',
    text: 'A funkcionális önállósági szint a napi {{életvezetési}}, közlekedési és {{kommunikációs}} önállóság mértékét írja le.',
    exp: 'A napi életvezetési, közlekedési és kommunikációs önállóság mértéke.'
  },
  {
    id: 'cloze_w10_15', w: 10, topic: 'Tanácsadási folyamat', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a tanácsadási folyamat első és utolsó szakaszát!',
    text: 'A pályatanácsadás a {{kapcsolatfelvétel}} és bizalmi viszony kialakításával kezdődik, és a cselekvési terv kidolgozásával, valamint a {{nyomon}} követéssel zárul.',
    exp: 'A kapcsolatfelvételtől a cselekvési tervig és nyomon követésig.'
  },
  {
    id: 'cloze_w10_16', w: 10, topic: 'Pályaorientációs módszerek', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a személyközpontú tervezés meghatározását!',
    text: 'A személyközpontú tervezés (person-centered planning) egyéni ülés, ahol a {{tanuló}} és a fontos támogató személyek {{közösen}} alakítják a célokat.',
    exp: 'A tanuló és támogatói közösen alakítják a célokat.'
  },
  {
    id: 'cloze_w10_17', w: 10, topic: 'Pályaorientációs módszerek', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a portfólió-alapú gyűjtemény meghatározását!',
    text: 'A portfólió-alapú önismereti gyűjtemény az elvégzett feladatokat, a kapott {{visszajelzéseket}} és a tanuló {{önreflexióit}} dokumentálja.',
    exp: 'Elvégzett feladatok, visszajelzések és önreflexiók dokumentálása.'
  },
  {
    id: 'cloze_w10_18', w: 10, topic: 'Intézményi partnerek', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a pályaorientáció intézményi partnereire vonatkozó mondatot!',
    text: 'A {{CJRAE}}/CMBRAE koordinálja a pályaorientációs felmérést és tanácsadást, a {{munkaügyi}} szolgáltató pedig álláskeresési támogatást és támogatott foglalkoztatást közvetít.',
    exp: 'A CJRAE/CMBRAE koordinál; a munkaügyi szolgáltató álláskeresést közvetít.'
  },
  {
    id: 'cloze_w10_19', w: 10, topic: 'Modul tervezése', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a mérhető tanulási cél jellemzőjét!',
    text: 'A mérhető tanulási cél konkrét {{teljesítménykritériummal}} van megfogalmazva (pl. legalább 80%-os {{pontossággal}}), így megfigyelhető és értékelhető.',
    exp: 'Konkrét teljesítménykritériummal (pl. 80%-os pontosság) megfogalmazott, értékelhető cél.'
  },
  {
    id: 'cloze_w10_20', w: 10, topic: 'Modul szerkezete', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a modul gyakorlási szakaszait!',
    text: 'A modulban a {{vezetett}} gyakorlás fokozatosan csökkenő segítségnyújtással történik, majd az önálló, {{differenciált}} gyakorlás a saját támogatási szintnek megfelelően.',
    exp: 'Vezetett gyakorlás csökkenő segítséggel, majd önálló, differenciált gyakorlás.'
  },
  {
    id: 'cloze_w10_21', w: 10, topic: 'Modul szerkezete', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a modul nyitó és záró elemét!',
    text: 'A modul a {{ráhangolódás}}/bevezetéssel kezdődik, és a zárás, {{reflexió}} és értékelés szakasszal fejeződik be.',
    exp: 'A ráhangolódástól a zárás-reflexió-értékelésig.'
  },
  {
    id: 'cloze_w10_22', w: 10, topic: 'Munkahelyi szimuláció', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a munkahelyi szimuláció biztonsági szempontját!',
    text: 'A szimuláció biztonsági szempontja a megfelelő {{testtartás}} és eszközhasználat, valamint a vészhelyzeti jelzés/{{segítségkérés}} módjának ismerete.',
    exp: 'Megfelelő testtartás/eszközhasználat és a segítségkérés ismerete.'
  },
  {
    id: 'cloze_w10_23', w: 10, topic: 'Munkahelyi szimuláció', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a munkahelyi szimuláció társas szabályait!',
    text: 'A szimuláció társas szabályai közé tartozik a {{köszönés}} és bemutatkozás gyakorlása, valamint a munkaidő és a {{szünet}} rendjének betartása.',
    exp: 'Köszönés/bemutatkozás és a munkaidő-szünet rendjének betartása.'
  },
  {
    id: 'cloze_w10_24', w: 10, topic: 'Reflexió, transzfer, utókövetés', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a transzfer meghatározását!',
    text: 'A transzfer a megszerzett készségek tudatos {{gyakoroltatása}} más helyzetekben és helyszíneken is, hogy a tanulás ne maradjon egyetlen {{kontextushoz}} kötött.',
    exp: 'A készségek gyakorlása más helyzetekben, hogy ne maradjon egy kontextushoz kötött.'
  },
  {
    id: 'cloze_w10_25', w: 10, topic: 'Reflexió, transzfer, utókövetés', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az utókövetés meghatározását!',
    text: 'Az utókövetés a modul lezárása után periodikus, {{dokumentált}} visszacsatolás arról, hogy a készségek {{fennmaradtak}}-e és alkalmazásra kerülnek-e.',
    exp: 'Periodikus, dokumentált visszacsatolás a készségek fennmaradásáról.'
  },
  {
    id: 'cloze_w10_26', w: 10, topic: 'Differenciálás', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a magas támogatási szükségletű tanuló feladatát!',
    text: 'Magas támogatási szükségletnél kéz a kézben történő, {{vezetett}} segítségnyújtás és {{leegyszerűsített}}, kevés lépéses feladat alkalmazandó.',
    exp: 'Kéz a kézben vezetett, leegyszerűsített, kevés lépéses feladat.'
  },
  {
    id: 'cloze_w10_27', w: 10, topic: 'Differenciálás', type: 'cloze', diff: 3,
    q: 'Egészítsd ki a közepes támogatási szükségletű tanuló feladatát!',
    text: 'Közepes támogatási szükségletnél {{vizuális}} lépéssor (képes kártyák) alapján, eseti {{szóbeli}} megerősítéssel végzett feladat javasolt.',
    exp: 'Vizuális lépéssor (képes kártyák) eseti szóbeli megerősítéssel.'
  },
  {
    id: 'cloze_w10_28', w: 10, topic: 'Kompetencia és célok', type: 'cloze', diff: 2,
    q: 'Egészítsd ki a segítségkérés jelzésmódjait!',
    text: 'A tanuló megfelelő módon — szóban, {{gesztussal}} vagy {{AAC}}-eszközzel — jelzi, ha segítségre van szüksége a feladat közben.',
    exp: 'Szóban, gesztussal vagy AAC-eszközzel jelzi a segítségkérést.'
  },
  {
    id: 'cloze_w10_29', w: 10, topic: 'Életre felkészítő tevékenységek', type: 'cloze', diff: 2,
    q: 'Egészítsd ki az életre felkészítő tevékenységek példáit!',
    text: 'Életre felkészítő tevékenység az önálló {{életvezetési}} készségek gyakorlása (bevásárlás, étkészítés, közlekedés) és a {{pénzkezelési}} gyakorlatok.',
    exp: 'Önálló életvezetési készségek és pénzkezelési gyakorlatok.'
  },
  {
    id: 'cloze_w10_30', w: 10, topic: 'Munkakészség-területek', type: 'cloze', diff: 3,
    q: 'Egészítsd ki az önszabályozási és problémamegoldó készségek meghatározását!',
    text: 'Az önszabályozási és problémamegoldó készségek magukban foglalják a {{stressztűrést}}, a váratlan helyzetek kezelését, valamint az {{önellenőrzést}} és hibajavítást.',
    exp: 'Stressztűrés, váratlan helyzetek kezelése, önellenőrzés és hibajavítás.'
  }
];
