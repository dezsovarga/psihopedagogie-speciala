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
  }
];
