// Worksheet 6 exercises — Intellektuális fogyatékosság · Ludoterápia · Tanulásszervezés
// Source: gyakorlas_6_megoldasok_cl.docx
const EXERCISES_W6 = [
  // ─── I. TÉTEL – Intellektuális fogyatékosság ───────────────────────────────
  {
    "id": "w6_01",
    "w": 6,
    "topic": "Intellektuális fogyatékosság",
    "type": "mc",
    "q": "Az AAIDD és a DSM-5 definíciója szerint az intellektuális fogyatékosság megállapításához mi szükséges?",
    "opts": [
      "Kizárólag az IQ 70 alatti értéke",
      "Átlag alatti intellektuális működés ÉS az adaptív viselkedés korlátozottsága, 18 éves kor előtt jelentkezve",
      "Bármely tanulási nehézség, amely az iskolában megmutatkozik",
      "Csak az adaptív viselkedés zavara, az IQ-tól függetlenül"
    ],
    "ans": 1,
    "exp": "A definíció lényege, hogy nem önmagában az IQ-szám dönt: átlag alatti intellektuális működés (IQ kb. 70 alatt) ÉS az adaptív viselkedés legalább két területén (konceptuális, szociális, gyakorlati) mutatkozó korlátozottság szükséges, 18 éves kor előtti kezdettel.",
    "diff": 2
  },
  {
    "id": "w6_02",
    "w": 6,
    "topic": "Intellektuális fogyatékosság",
    "type": "tf",
    "q": "A modern megközelítésben a fogyatékosság súlyosságát ma inkább a szükséges támogatás mértékével írjuk le, mint az IQ-értékkel.",
    "ans": true,
    "exp": "Igaz. Az AAIDD szerint a támogatási szükséglet intenzitása (időszakos, korlátozott, kiterjedt, átfogó) írja le a súlyosságot – a hangsúly az IQ-ról a mindennapi működőképességre és a támogatási igényre került.",
    "diff": 2
  },
  {
    "id": "w6_03",
    "w": 6,
    "topic": "Intellektuális fogyatékosság",
    "type": "mc",
    "q": "Az adaptív viselkedés melyik három területét különböztetjük meg?",
    "opts": [
      "Kognitív, emocionális, motoros",
      "Konceptuális, szociális, gyakorlati",
      "Verbális, nonverbális, vizuális",
      "Fizikai, mentális, spirituális"
    ],
    "ans": 1,
    "exp": "Az adaptív viselkedés három területe: konceptuális (nyelvi, olvasás, számolás, idő, pénz), szociális (interperszonális készségek, szabálykövetés) és gyakorlati (önellátás, munka, közlekedés) készségek.",
    "diff": 1
  },
  {
    "id": "w6_04",
    "w": 6,
    "topic": "Intellektuális fogyatékosság",
    "type": "match",
    "q": "Párosítsa az adaptív viselkedés területét a hozzá tartozó példával!",
    "pairs": [
      { "L": "Konceptuális terület", "R": "Az óra egész óráinak leolvasása a napirendhez" },
      { "L": "Szociális terület", "R": "Sorban állás, várakozás, udvarias segítségkérés" },
      { "L": "Gyakorlati terület", "R": "Egyszerű ebéd elkészítése, konyhai eszközök biztonságos használata" },
      { "L": "Támogatási szükséglet", "R": "A segítség intenzitása: időszakos, korlátozott, kiterjedt, átfogó" }
    ],
    "exp": "Konceptuális = nyelvi/idő/pénz készségek; szociális = interperszonális, szabálykövetés; gyakorlati = önellátás, munka; a támogatási szükséglet a segítség intenzitását és típusát írja le (AAIDD).",
    "diff": 2
  },
  {
    "id": "w6_05",
    "w": 6,
    "topic": "Intellektuális fogyatékosság",
    "type": "mc",
    "q": "A komplex értékelés hány fő szempontja alkotja a modern, multidimenzionális (AAIDD, ICF-alapú) megközelítést?",
    "opts": ["Három", "Négy", "Öt", "Hét"],
    "ans": 2,
    "exp": "Öt fő szempont: (1) intellektuális képességek, (2) adaptív viselkedés, (3) részvétel/interakciók/szociális szerepek, (4) egészségi állapot, (5) kontextus (környezeti és személyes tényezők).",
    "diff": 2
  },
  {
    "id": "w6_06",
    "w": 6,
    "topic": "Intellektuális fogyatékosság",
    "type": "fill",
    "q": "A komplex értékelés célja nem a besorolás, hanem az egyénre szabott támogatási terv, azaz a __________ megalapozása (a román rövidítést kérjük).",
    "ans": "PIP",
    "exp": "A cél a PIP (Plan de Intervenție Personalizat), az egyénre szabott intervenciós/támogatási terv megalapozása – nem a „besorolás”.",
    "diff": 2
  },
  {
    "id": "w6_07",
    "w": 6,
    "topic": "Intellektuális fogyatékosság",
    "type": "mc",
    "q": "Melyik NEM tartozik az intellektuális fogyatékossághoz gyakran társuló kognitív/tanulási sajátosságok közé a tétel felsorolásában?",
    "opts": [
      "Absztrakciós nehézség",
      "Lassabb információfeldolgozási sebesség",
      "Kiemelkedő munkamemória-kapacitás",
      "Transzferálási nehézség"
    ],
    "ans": 2,
    "exp": "A hat felsorolt sajátosság: figyelemzavar, memóriazavar (a munkamemória érintett, nem kiemelkedő), absztrakciós nehézség, lassabb feldolgozás, nyelvi-kommunikációs elmaradás, transzferálási nehézség.",
    "diff": 2
  },
  {
    "id": "w6_08",
    "w": 6,
    "topic": "Intellektuális fogyatékosság",
    "type": "mc",
    "q": "Mit jelent a „transzferálási nehézség” az intellektuális fogyatékosságnál?",
    "opts": [
      "A tanuló nehezen jut el fizikailag az iskolába",
      "A megtanultak új helyzetre, kontextusra való átvitele nehezített",
      "A tanuló nem képes figyelmét egyik feladatról a másikra váltani",
      "Az információ rövid távú memóriából hosszú távúba kerülése zavart"
    ],
    "ans": 1,
    "exp": "A transzferálási nehézség azt jelenti, hogy a megtanultak új helyzetre, kontextusra való átvitele nehezített – ezért szükséges a tanultak tudatos, ismételt gyakoroltatása több eltérő helyzetben.",
    "diff": 2
  },
  {
    "id": "w6_09",
    "w": 6,
    "topic": "Intellektuális fogyatékosság",
    "type": "short",
    "q": "Sorolja fel a tanulási folyamat öt alapelvét intellektuális fogyatékosságú tanulók fejlesztésében!",
    "keywords": ["konkretizálás", "kis lépések", "ismétlés", "transzfer", "megerősítés"],
    "exp": "Az öt alapelv: konkretizálás (szemléltetés), kis lépések elve (task analysis), ismétlés (rögzítéshez), transzfer (több kontextusban gyakorlás), megerősítés (azonnali pozitív visszajelzés).",
    "diff": 2
  },
  {
    "id": "w6_10",
    "w": 6,
    "topic": "Intellektuális fogyatékosság",
    "type": "mc",
    "q": "Melyik értékelési adaptáció ajánlott intellektuális fogyatékosságú tanulónál?",
    "opts": [
      "Kizárólag standardizált, normaközpontú teszt alkalmazása",
      "Kritériumközpontú, alternatív értékelés (szóbeli felelet, hosszabb idő, portfólió), nem csak teszt-alapú",
      "Az értékelés teljes mellőzése a kudarc elkerülésére",
      "Csak írásbeli számonkérés, szigorú időkorláttal"
    ],
    "ans": 1,
    "exp": "Ajánlott az alternatív, kritériumközpontú (nem normaközpontú) értékelés: szóbeli feleltetés írásbeli helyett, hosszabb idő, portfólió- vagy teljesítményalapú viszonyítás a tanuló saját céljaihoz.",
    "diff": 2
  },
  {
    "id": "w6_11",
    "w": 6,
    "topic": "Intellektuális fogyatékosság",
    "type": "tf",
    "q": "A tanulási potenciál a Vigotszkij-féle legközelebbi fejlődési zóna (ZPD) elve alapján a segítséggel elérhető teljesítményt tekinti mérvadónak, nem a jelenlegit.",
    "ans": true,
    "exp": "Igaz. A tanulási potenciál a fejleszthetőség, a megfelelő támogatás melletti fejlődési tartalék mértéke – a ZPD elve szerint nem a jelenlegi, hanem a segítséggel elérhető teljesítmény a mérvadó.",
    "diff": 2
  },
  {
    "id": "w6_12",
    "w": 6,
    "topic": "Intellektuális fogyatékosság",
    "type": "mc",
    "q": "Enyhe intellektuális fogyatékosság esetén hol van a pedagógiai hangsúly?",
    "opts": [
      "Kizárólag az önellátás és alapvető kommunikáció fejlesztésén",
      "Iskolai integráció, individualizált tantervi adaptáció és funkcionális, munkaerőpiacra orientáló készségek",
      "Augmentatív kommunikációs eszközök (AAC) elsődleges alkalmazásán",
      "A szenzoros integráció és multiszenzoros környezet dominanciáján"
    ],
    "ans": 1,
    "exp": "Enyhe fokozatnál a hangsúly az iskolai integráción, az individualizált tantervi adaptáción (curriculum adaptat) és a funkcionális, munkaerőpiacra orientáló készségek fejlesztésén van. Az önellátás/AAC/szenzoros integráció súlyosabb fokozatoknál kerül előtérbe.",
    "diff": 3
  },

  // ─── II. TÉTEL – Ludoterápia és didaktikai játék ──────────────────────────
  {
    "id": "w6_13",
    "w": 6,
    "topic": "Ludoterápia",
    "type": "mc",
    "q": "Mi a ludoterápia lényege?",
    "opts": [
      "A gyermek fizikai erőnlétének fejlesztése sportjátékokkal",
      "A játék mint terápiás és fejlesztő eszköz alkalmazása – a játék a gyermek „természetes nyelve”",
      "A szabályok szigorú betartatása versenyhelyzetben",
      "A gyermek szabadidejének strukturálatlan kitöltése"
    ],
    "ans": 1,
    "exp": "A ludoterápia a játékot mint terápiás-fejlesztő eszközt alkalmazza: a gyermek szimbolikus, szabad vagy irányított játékon keresztül fejezi ki érzelmeit és fejleszti készségeit. Alapja, hogy a játék a gyermek „természetes nyelve”.",
    "diff": 1
  },
  {
    "id": "w6_14",
    "w": 6,
    "topic": "Ludoterápia",
    "type": "mc",
    "q": "A ludoterápia a komplex intervencióban egyszerre mely három funkciót szolgálja?",
    "opts": [
      "Diagnosztikai, terápiás és fejlesztő-oktatási funkciót",
      "Adminisztratív, jogi és szociális funkciót",
      "Csak szórakoztató és időtöltő funkciót",
      "Orvosi, gyógyszeres és rehabilitációs funkciót"
    ],
    "ans": 0,
    "exp": "A ludoterápia egyszerre diagnosztikai (megfigyelés játék közben), terápiás (feszültséglevezetés, félelmek feldolgozása) és fejlesztő-oktatási (kognitív, nyelvi, motoros, szociális készségek) funkciót lát el – hidat képezve terápia és tanulás között.",
    "diff": 2
  },
  {
    "id": "w6_15",
    "w": 6,
    "topic": "Ludoterápia",
    "type": "order",
    "q": "Helyezze sorrendbe a játék fejlődésének három szakaszát (Piaget nyomán) az életkor szerint!",
    "items": [
      "Gyakorlójáték / szenzomotoros játék (kb. 0–2 év)",
      "Szimbolikus / szerepjáték (kb. 2–7 év)",
      "Szabályjáték (kb. 7 év felett)"
    ],
    "exp": "A játék fejlődése: (1) gyakorló-/szenzomotoros játék (0–2 év, manipulatív), (2) szimbolikus/szerepjáték (2–7 év, „mintha” játék), (3) szabályjáték (7 év felett, rögzített szabályok, együttműködés).",
    "diff": 2
  },
  {
    "id": "w6_16",
    "w": 6,
    "topic": "Ludoterápia",
    "type": "mc",
    "q": "Melyik játékforma fejleszti elsősorban a téri-vizuális készségeket, a finommotorikát és a problémamegoldást?",
    "opts": [
      "Szimbolikus/szerepjáték",
      "Konstrukciós játék (építőkockák, puzzle)",
      "Szabályjáték / társasjáték",
      "Szenzomotoros gyakorlójáték"
    ],
    "ans": 1,
    "exp": "A konstrukciós játék (építőkockák, puzzle) fejleszti a téri-vizuális készségeket, a finommotorikát, a problémamegoldást és a kitartást. A szerepjáték a nyelvet/empátiát, a szabályjáték a szabálykövetést/együttműködést fejleszti.",
    "diff": 2
  },
  {
    "id": "w6_17",
    "w": 6,
    "topic": "Didaktikai játék",
    "type": "short",
    "q": "Nevezze meg a didaktikai játék négy alkotóelemét!",
    "keywords": ["didaktikai cél", "tartalom", "szabály", "akció"],
    "exp": "A négy alkotóelem: didaktikai cél (fejlesztendő készség), játékos tartalom (motiváló elemek), játékszabályok (egyértelmű keretek), játékos akció (eszközök, cselekvések).",
    "diff": 2
  },
  {
    "id": "w6_18",
    "w": 6,
    "topic": "Didaktikai játék",
    "type": "order",
    "q": "Helyezze sorrendbe a didaktikai játék szervezésének négy lépését!",
    "items": [
      "Bevezetés – motiváció, a téma és cél ismertetése",
      "A szabályok elmagyarázása (szükség esetén modellezéssel)",
      "A játék lebonyolítása tanári facilitálással",
      "Lezárás, értékelés – megbeszélés, visszajelzés"
    ],
    "exp": "A szervezés négy lépése: (1) bevezetés/motiváció, (2) a szabályok elmagyarázása/bemutatása, (3) lebonyolítás facilitálással és megerősítéssel, (4) lezárás és értékelés.",
    "diff": 2
  },
  {
    "id": "w6_19",
    "w": 6,
    "topic": "Didaktikai játék",
    "type": "tf",
    "q": "A szabadidős, nem kötelező tevékenységek terápiás-nevelési értéke abban áll, hogy csökkentik a szorongást és a teljesítménykényszert, teret adva a spontán önkifejezésnek.",
    "ans": true,
    "exp": "Igaz. A szabadidős tevékenységek (kirándulás, kézművesség, zene, sport) csökkentik a szorongást és teljesítménykényszert, erősítik az önértékelést és a társas kapcsolatokat, kiegészítve a formális terápiás-oktatási munkát.",
    "diff": 1
  },
  {
    "id": "w6_20",
    "w": 6,
    "topic": "Didaktikai játék",
    "type": "mc",
    "q": "Az „Évszakok kereke” játék intellektuális fogyatékosságú tanulóra adaptálásának melyik jellemzője helyes?",
    "opts": [
      "Több, apró, absztrakt szimbólumkártya és gyors tempó",
      "Kevesebb, nagyméretű, valós fotóalapú kép, egyszerű kételemű párosítás, mutatás is elfogadott",
      "Kizárólag írásbeli mondatalkotás, segítség nélkül",
      "Jelnyelvi instrukció a szóbeli helyett"
    ],
    "ans": 1,
    "exp": "Intellektuális fogyatékosságnál: kevesebb, nagyméretű, valós fotóalapú kép; egyszerű, kételemű párosítás; verbális válasz helyett mutatás is elfogadott; hosszabb idő és ismételt modellezés. A jelnyelvi adaptáció a hallássérült tanulóé.",
    "diff": 3
  },
  {
    "id": "w6_21",
    "w": 6,
    "topic": "Ludoterápia",
    "type": "mc",
    "q": "Autizmus spektrumzavar esetén mi kap kiemelt szerepet a ludoterápiában a szabad szimbolikus játék helyett/mellett?",
    "opts": [
      "Rövid, mozgásos, gyakori megerősítést tartalmazó formák",
      "Strukturáltság, kiszámíthatóság, vizuális támpontok (TEACCH-elemek)",
      "A látás/hallás kompenzálása tapintással és mozgással",
      "Kizárólag versengő szabályjátékok"
    ],
    "ans": 1,
    "exp": "Autizmusnál a strukturáltság, kiszámíthatóság és vizuális támpontok (TEACCH-elemek) kapnak kiemelt szerepet. A rövid mozgásos forma ADHD-nál, az érzékszervi kompenzáció érzékszervi fogyatékosságnál ajánlott.",
    "diff": 3
  },

  // ─── III. TÉTEL – Tanulásszervezési formák ─────────────────────────────────
  {
    "id": "w6_22",
    "w": 6,
    "topic": "Tanulásszervezés",
    "type": "mc",
    "q": "Melyik tanulásszervezési forma teszi lehetővé a maximális differenciálást, a tanuló saját ütemében?",
    "opts": [
      "Kiscsoportos tanulás",
      "Egyéni tanulás (învățare individuală)",
      "Team-teaching",
      "Frontális osztálymunka"
    ],
    "ans": 1,
    "exp": "Az egyéni tanulás során a tanuló saját ütemében, személyre szabott feladatokkal, önállóan vagy egyéni támogatással dolgozik – ez teszi lehetővé a maximális differenciálást.",
    "diff": 1
  },
  {
    "id": "w6_23",
    "w": 6,
    "topic": "Tanulásszervezés",
    "type": "fill",
    "q": "A __________ (co-teaching / predare în echipă) során két vagy több pedagógus közös tervezéssel és felelősségmegosztással, egyidejűleg tart órát ugyanabban az osztályteremben.",
    "ans": "team-teaching",
    "exp": "A team-teaching (co-teaching, predare în echipă) két vagy több pedagógus (pl. szaktanár és szakpszichopedagógus) közös tervezéssel, felelősségmegosztással, egyidejűleg tartott órája.",
    "diff": 1
  },
  {
    "id": "w6_24",
    "w": 6,
    "topic": "Tanulásszervezés",
    "type": "mc",
    "q": "Hány fős csoportot jelent a kiscsoportos tanulás (învățare în grupuri mici)?",
    "opts": ["2 fős", "3–6 fős", "7–10 fős", "10–15 fős"],
    "ans": 1,
    "exp": "A kiscsoportos tanulás 3–6 fős, homogén vagy heterogén összetételű csoportokban zajlik, lehetővé téve a kortárs interakciót, miközben a tanári figyelem koncentrált maradhat.",
    "diff": 1
  },
  {
    "id": "w6_25",
    "w": 6,
    "topic": "Tanulásszervezés",
    "type": "mc",
    "q": "Melyik az egyéni tanulás egyik korlátja a kiscsoportos formával szemben?",
    "opts": [
      "Nem biztosítható a saját tempó",
      "Hiányzik a kortárssal való interakció és modelltanulás lehetősége",
      "Nem lehet pontosan követni az egyéni haladást",
      "Nem tesz lehetővé személyre szabást"
    ],
    "ans": 1,
    "exp": "Az egyéni tanulás korlátai: hiányzik a kortársi interakció és modelltanulás; erőforrás- és időigényes; erősítheti az izoláció érzését. Előnyei viszont a személyre szabottság, a saját tempó és a pontos haladáskövetés.",
    "diff": 2
  },
  {
    "id": "w6_26",
    "w": 6,
    "topic": "Tanulásszervezés",
    "type": "match",
    "q": "Párosítsa a tanulásszervezési formát a rá jellemző előnnyel!",
    "pairs": [
      { "L": "Egyéni tanulás", "R": "Teljes személyre szabottság és saját tempó" },
      { "L": "Kiscsoportos tanulás", "R": "Társas tanulás, kortárs modellkövetés" },
      { "L": "Többszintű tanulás", "R": "Közös cél eltérő nehézségi/támogatási szinteken" },
      { "L": "Team-teaching", "R": "Két pedagógus közös tervezése és felelősségmegosztása" }
    ],
    "exp": "Egyéni = személyre szabottság; kiscsoportos = társas modelltanulás; többszintű = azonos cél eltérő szinteken; team-teaching = két pedagógus együttes órája.",
    "diff": 2
  },
  {
    "id": "w6_27",
    "w": 6,
    "topic": "Tanulásszervezés",
    "type": "mc",
    "q": "A team-teaching „one teach, one support” modelljében mi a támogató (szakpszichopedagógus) pedagógus szerepe?",
    "opts": [
      "A teljes frontális tananyag közvetítése az egész osztálynak",
      "Az SNI-tanulók folyamatos figyelése, azonnali egyénre szabott magyarázat és alternatív feladat biztosítása",
      "Az óra adminisztratív dokumentálása",
      "A szülőkkel való kapcsolattartás az óra alatt"
    ],
    "ans": 1,
    "exp": "A „one teach, one support” modellben a szaktanár vezeti a frontális/tartalmi részt, míg a támogató pedagógus folyamatosan figyeli az SNI-tanulókat, azonnali egyénre szabott magyarázatot, vizuális támpontot vagy alternatív feladatot ad.",
    "diff": 2
  },
  {
    "id": "w6_28",
    "w": 6,
    "topic": "Tanulásszervezés",
    "type": "order",
    "q": "Rendezze a többszintű tanulás három szintjét a legtöbb támogatástól a legönállóbb felé (téma: mese feldolgozása)!",
    "items": [
      "Alap szint: képekkel illusztrált, egyszerűsített mese, képek sorba rendezése modellezéssel",
      "Középszint: teljes szöveg olvasása segítséggel, egyszerű kérdések, kulcsszó-térkép",
      "Haladó szint: önálló szövegértelmezés, üzenet/motivációk megbeszélése, saját befejezés"
    ],
    "exp": "A három szint közös célhoz (a történet megértése és újramondása) kapcsolódik, csak a támogatás és komplexitás tér el: alap (kiterjedt támogatás) → közép (segítséggel) → haladó (önálló).",
    "diff": 2
  },
  {
    "id": "w6_29",
    "w": 6,
    "topic": "Tanulásszervezés",
    "type": "mc",
    "q": "Melyik fejlődést mérő eljárás viszonyít a tanuló saját korábbi teljesítményéhez és egyéni céljaihoz, nem a kortársakhoz?",
    "opts": [
      "Normaközpontú standardizált teszt",
      "Kritériumalapú (curriculum-based) mérés",
      "Osztályzatközpontú összehasonlítás",
      "Rangsoroló vizsga"
    ],
    "ans": 1,
    "exp": "A kritériumalapú (curriculum-based) mérés nem a kortársakhoz, hanem a tanuló saját korábbi teljesítményéhez és az egyénre szabott célokhoz viszonyít. Ezt egészíti ki a folyamatos (formatív) megfigyelési napló/checklist.",
    "diff": 2
  },
  {
    "id": "w6_30",
    "w": 6,
    "topic": "Tanulásszervezés",
    "type": "tf",
    "q": "A szociális készségek fejlesztésére és az integrációra inkább a nagyobb, heterogén csoportos vagy team-teaching keretek alkalmasak, mert biztosítják a tipikusan fejlődő kortársakkal való modellkövetést.",
    "ans": true,
    "exp": "Igaz. Súlyosabb fogyatékosságnál az egyéni/kiscsoportos formák dominálnak, de a szociális készségek fejlesztésére és az integrációra a nagyobb, heterogén csoportos vagy team-teaching keretek alkalmasabbak a kortárs modellkövetés miatt.",
    "diff": 2
  },
  {
    "id": "w6_31",
    "w": 6,
    "topic": "Tanulásszervezés",
    "type": "short",
    "q": "Nevezzen meg két speciális taneszközt, amely az SNI-tanulók tanulását támogatja!",
    "keywords": ["vizuális napirend", "piktogram"],
    "exp": "Két speciális taneszköz: vizuális napirend / piktogramkészlet (pl. PECS-kártyák) a kommunikáció és strukturálás támogatására; manipulatív, multiszenzoros eszközök (tapintható betűk, számolópálcikák) a konkrét-cselekvéses tanuláshoz.",
    "diff": 2
  }
];
