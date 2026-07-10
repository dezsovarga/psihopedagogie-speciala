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
  }
];
