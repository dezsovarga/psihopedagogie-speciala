// Worksheet 3 exercises — auto-managed, edit with care
const EXERCISES_W3 = [
  {
    "id": "w3_01",
    "w": 3,
    "topic": "Fogalmak – ASD/ADHD",
    "type": "mc",
    "q": "Mi az autizmus spektrum (ASD) definíciója?",
    "opts": [
      "Figyelemhiányos állapot, amelynek fő jellemzői az impulzivitás és a hiperaktivitás",
      "Neurofejlődési állapot, amelyet a szociális kommunikáció tartós nehézségei és korlátozott, ismétlődő viselkedésminták jellemeznek",
      "Tanulási zavar, amely kizárólag az olvasás és az írás területén okoz nehézséget",
      "Értelmi fogyatékosság, amelyet alacsony IQ-pont jellemez"
    ],
    "ans": 1,
    "exp": "Az ASD neurofejlődési állapot: szociális kommunikáció/interakció tartós nehézségei + korlátozott, ismétlődő viselkedésminták. Spektrumjellegű – széles skálán mozognak a szükségletek.",
    "diff": 1
  },
  {
    "id": "w3_02",
    "w": 3,
    "topic": "Fogalmak – ASD/ADHD",
    "type": "mc",
    "q": "Mi a végrehajtó funkció (executive function)?",
    "opts": [
      "Az egyén képessége az impulzusok gátlására és az érzelmek kezelésére",
      "A frontális lebenyhez kötött magasabb rendű kognitív folyamatok: tervezés, szervezés, monitorozás, rugalmas módosítás",
      "A szociális interakció és kommunikáció szabályozásáért felelős idegrendszeri folyamat",
      "Az érzékszervi ingerek feldolgozásának és integrációjának folyamata"
    ],
    "ans": 1,
    "exp": "A végrehajtó funkció a frontális lebenyhez kötött folyamatok összessége: tervezés, szervezés, indítás, monitorozás, rugalmas módosítás. Ide tartozik a munkamemória, az inhibíció, a kognitív rugalmasság.",
    "diff": 2
  },
  {
    "id": "w3_03",
    "w": 3,
    "topic": "Fogalmak – ASD/ADHD",
    "type": "mc",
    "q": "Mi a funkcionális viselkedéselemzés (FBA) célja?",
    "opts": [
      "A tanuló intellektuális képességeinek standardizált mérése",
      "A problémás viselkedés mögöttes okának (funkciójának) azonosítása az ABC-modell segítségével",
      "Az iskolai teljesítmény és a tanárok elvárásainak összehasonlítása",
      "A tanulási zavar típusának és súlyosságának meghatározása"
    ],
    "ans": 1,
    "exp": "Az FBA strukturált értékelési folyamat: azonosítja a viselkedés funkcióját az ABC-modell (Antecedensek – Behavior/Viselkedés – Következmények) segítségével, hogy célzott intervenciós terv legyen kidolgozható.",
    "diff": 2
  },
  {
    "id": "w3_04",
    "w": 3,
    "topic": "ASD jellemzők",
    "type": "mc",
    "q": "Melyik ASD-re JELLEMZŐ viselkedési jellemző?",
    "opts": [
      "Fokozott szociális érdeklődés és széles körű kortársi kapcsolatok",
      "Rugalmas alkalmazkodás az újszerű helyzetekhez",
      "Korlátozott, ismétlődő viselkedés: rituálékhoz való ragaszkodás, sztereotip mozgásminták",
      "Folyamatos mozgásigény és impulzív cselekvés"
    ],
    "ans": 2,
    "exp": "ASD három jellemzője: (1) Szociális kommunikáció/interakció nehézségei, (2) Korlátozott, ismétlődő viselkedés és érdeklődés (rituálék, sztereotip mozgások), (3) Szenzoros feldolgozás eltérései.",
    "diff": 1
  },
  {
    "id": "w3_05",
    "w": 3,
    "topic": "ADHD jellemzők",
    "type": "mc",
    "q": "Melyik az ADHD impulzivitásának jellemző megnyilvánulása?",
    "opts": [
      "Szűk körű, intenzív érdeklődési területek és rituálékhoz való ragaszkodás",
      "Cselekvés meggondolás nélkül; mások mondatainak befejezése; azonnali jutalmazásra törekvés",
      "Erős szorongás a váratlan változások hatására",
      "Hiper- vagy hiposzenzitivitás érzékszervi ingerekkel szemben"
    ],
    "ans": 1,
    "exp": "Az ADHD impulzivitása: cselekvés meggondolás nélkül, mások mondatainak befejezése, nehézség a várakozással, azonnali jutalmazásra törekvés, a következmények előzetes mérlegelésének hiánya.",
    "diff": 1
  },
  {
    "id": "w3_06",
    "w": 3,
    "topic": "Intervenciós módszerek",
    "type": "mc",
    "q": "Mit jelent az ABA (Applied Behavior Analysis – Alkalmazott viselkedéselemzés)?",
    "opts": [
      "Strukturált tanulási környezet és vizuálisan szervezett feladatrendszer ASD tanulók számára",
      "Képkártyák cseréjén alapuló augmentatív kommunikációs rendszer",
      "Rövid, személyre szabott szociális történetek a szociális helyzetek előkészítésére",
      "Viselkedéslélektani elveken alapuló megközelítés: kívánatos viselkedések megerősítése, nem kívánatosak nem jutalmazása"
    ],
    "ans": 3,
    "exp": "Az ABA kívánatos viselkedéseket megerősítéssel erősít meg, a helyettesítő viselkedést tanítja. A tanítás kis, mérhető lépésekre bontott, adatokon alapuló folyamatos monitorozással kísért.",
    "diff": 1
  },
  {
    "id": "w3_07",
    "w": 3,
    "topic": "Intervenciós módszerek",
    "type": "mc",
    "q": "Mi a TEACCH-módszer alapelve?",
    "opts": [
      "Képkártyák cseréjén alapuló kommunikáció hat fázisban",
      "A strukturált tanítás: az osztályterem fizikailag és időben egyértelműen tagolt, vizuálisan szervezett",
      "Megerősítésen alapuló viselkedésmódosítás kis, mérhető lépésekben",
      "Szociális narratívák alkalmazása váratlan helyzetek előkészítésére"
    ],
    "ans": 1,
    "exp": "A TEACCH strukturált tanítása: munkaállomások, vizuális napi rend, feladatdobozok. Fejleszti az önálló munkavégzést, rutinkövetést, feladatbefejezési képességet; csökkenti a bizonytalanságból eredő szorongást.",
    "diff": 1
  },
  {
    "id": "w3_08",
    "w": 3,
    "topic": "Intervenciós módszerek",
    "type": "mc",
    "q": "Hány fázisból áll a PECS (Képcsere kommunikációs rendszer)?",
    "opts": [
      "2 fázis",
      "4 fázis",
      "6 fázis",
      "8 fázis"
    ],
    "ans": 2,
    "exp": "A PECS hat fázisban halad: képcsere → távolság növelése → kép kiválasztása → mondatalkotás → spontán kérés → kérdések megválaszolása.",
    "diff": 2
  },
  {
    "id": "w3_09",
    "w": 3,
    "topic": "Intervenciós módszerek",
    "type": "mc",
    "q": "Ki dolgozta ki a szociális narratívákat (Social Stories™)?",
    "opts": [
      "B.F. Skinner",
      "Lev Vigotszkij",
      "Carol Gray",
      "Eric Schopler"
    ],
    "ans": 2,
    "exp": "Carol Gray dolgozta ki a Social Stories™ módszert. Rövid, személyre szabott történetek ismertetik a szociális helyzetek menetét, az elvárható viselkedést és mások nézőpontját.",
    "diff": 2
  },
  {
    "id": "w3_10",
    "w": 3,
    "topic": "Intervenciós módszerek",
    "type": "match",
    "q": "Párosítsd az intervenciós módszert a leírásával!",
    "pairs": [
      {
        "L": "ABA",
        "R": "Megerősítésen alapuló, adatvezérelt viselkedésmódosítás kis lépésekben"
      },
      {
        "L": "TEACCH",
        "R": "Strukturált tanulási környezet, vizuális napirend, munkaállomások"
      },
      {
        "L": "PECS",
        "R": "Képkártyák cseréjén alapuló, hat fázisú kommunikációs rendszer"
      },
      {
        "L": "Szociális narratívák",
        "R": "Rövid személyre szabott történetek a szociális helyzetek előkészítésére"
      }
    ],
    "exp": "Mind a négy módszer bizonyítékalapú, és egymást kiegészítve alkalmazható ASD tanulók fejlesztésében.",
    "diff": 2
  },
  {
    "id": "w3_11",
    "w": 3,
    "topic": "PBS",
    "type": "mc",
    "q": "Melyik állítás írja le helyesen a pozitív viselkedéstámogatás (PBS) lényegét?",
    "opts": [
      "Kizárólag a problémás viselkedések szankcionálásán alapuló reaktív megközelítés",
      "Proaktív, megelőző szemléletű megközelítés: kívánatos viselkedések megerősítése, a tanuló erősségeire épít",
      "Gyógyszeres kezelés és viselkedéses terápia kombinációja",
      "A tanuló problémás viselkedéseinek fizikai kényszerítéssel való megakadályozása"
    ],
    "ans": 1,
    "exp": "A PBS proaktív, megelőző, emberi méltóságot tiszteletben tartó, bizonyítékalapú módszer. Erősíti a tanuló–pedagógus kapcsolatot és önszabályozást épít ki.",
    "diff": 1
  },
  {
    "id": "w3_12",
    "w": 3,
    "topic": "PBS",
    "type": "tf",
    "q": "A PBS keretein belül alkalmazható fizikai fájdalmat okozó beavatkozás, ha ez az egyetlen hatékony módszer az adott viselkedés leállítására.",
    "ans": false,
    "exp": "HAMIS. A PBS egyik etikai korlátja: tilos fizikai fájdalmat, megalázást vagy szorongáskeltést okozó beavatkozásokat alkalmazni. A tanuló méltóságát minden körülmény között tiszteletben kell tartani.",
    "diff": 1
  },
  {
    "id": "w3_13",
    "w": 3,
    "topic": "Viselkedés funkciója",
    "type": "mc",
    "q": "Az FBA-modell szerint melyik a problémás viselkedés NÉGY lehetséges funkciója?",
    "opts": [
      "Agresszió, menekülés, játék, alvás",
      "Figyelem elérése, tárgy/tevékenység elérése, kellemetlenség elkerülése, szenzoros stimuláció",
      "Kommunikáció, szabálykövetés, szociális részvétel, önkifejezés",
      "Bosszú, félelem, unalom, utánzás"
    ],
    "ans": 1,
    "exp": "Az FBA ABC-modellje szerint négy lehetséges funkció: (1) figyelem elérése, (2) tárgy vagy tevékenység elérése, (3) kellemetlenség elkerülése, (4) szenzoros stimuláció (öningerlés).",
    "diff": 2
  },
  {
    "id": "w3_14",
    "w": 3,
    "topic": "Kognitív stimuláció",
    "type": "mc",
    "q": "Mi a kognitív stimuláció?",
    "opts": [
      "A tanuló IQ-jának mérésére irányuló standardizált eljárás",
      "Tervezett, strukturált tevékenységrendszer a kognitív funkciók fenntartására, fejlesztésére vagy rehabilitációjára",
      "Gyógyszeres kezelés a kognitív teljesítmény javítására",
      "A tananyag mennyiségének csökkentése a tanuló terhelésének mérséklésére"
    ],
    "ans": 1,
    "exp": "A kognitív stimuláció tervezett, strukturált tevékenységrendszer. Az agyi plaszticitást kihasználva, motiváló és értelmes tevékenységeken keresztül fejleszti a figyelmet, emlékezetet, észlelést, gondolkodást, problémamegoldást, nyelvet.",
    "diff": 1
  },
  {
    "id": "w3_15",
    "w": 3,
    "topic": "Logikai-matematikai fogalmak",
    "type": "mc",
    "q": "Melyik logikai-matematikai alapfogalomhoz illeszkedik a következő tevékenység: „A tanuló minden tányérhoz pontosan egy villát helyez\"?",
    "opts": [
      "Osztályozás (szeriáció)",
      "Sorozatalkotás (szeriálás)",
      "Megfeleltetés (bijekció)",
      "Megmaradás elve"
    ],
    "ans": 2,
    "exp": "A megfeleltetés (bijekció): elemek egy-egy hozzárendelése két halmaz között. A tányér-villa feladat klasszikus bijekciógyakorlat, amely megalapozza az egyenlő mennyiség fogalmát.",
    "diff": 2
  },
  {
    "id": "w3_16",
    "w": 3,
    "topic": "Logikai-matematikai fogalmak",
    "type": "mc",
    "q": "Mi a megmaradás elve (conservation)?",
    "opts": [
      "Tárgyak sorba rendezése növekvő vagy csökkenő sorrend szerint",
      "Elemek egy-egy hozzárendelése két halmaz között",
      "Annak felismerése, hogy egy mennyiség nem változik meg attól, hogy más formában jelenik meg",
      "Tárgyak csoportosítása közös tulajdonság alapján"
    ],
    "ans": 2,
    "exp": "A megmaradás elve (Piaget): a mennyiség nem változik meg pusztán attól, hogy más formában vagy elrendezésben jelenik meg. A klasszikus feladat: azonos mennyiségű víz különböző alakú poharakban.",
    "diff": 2
  },
  {
    "id": "w3_17",
    "w": 3,
    "topic": "Kognitív fejlesztő practice",
    "type": "order",
    "q": "Rendezd helyes sorrendbe egy kognitív fejlesztő gyakorlat általános szerkezetét!",
    "items": [
      "1. Ráhangolódás / motiváló bevezető (2–3 perc)",
      "2. A feladat ismertetése és modellezés (3–5 perc)",
      "3. Irányított gyakorlás (5–10 perc)",
      "4. Önálló gyakorlás és értékelés (5–10 perc)"
    ],
    "exp": "A négy szakasz: (1) Ráhangolódás → (2) Modellezés → (3) Irányított gyakorlás → (4) Önálló gyakorlás. A segítség fokozatosan csökken (scaffolding).",
    "diff": 1
  },
  {
    "id": "w3_18",
    "w": 3,
    "topic": "Autonómia",
    "type": "mc",
    "q": "Melyik NEM tartozik a személyes és társadalmi autonómia fejlesztési területei közé?",
    "opts": [
      "Önkiszolgálási készségek",
      "Háztartási és praktikus készségek",
      "Emelt szintű irodalmi ismeretek",
      "Biztonságos közlekedés és tájékozódás"
    ],
    "ans": 2,
    "exp": "A négy fejlesztési terület: (1) Önkiszolgálási készségek, (2) Háztartási és praktikus készségek, (3) Szociális és kommunikációs készségek, (4) Biztonságos közlekedés és tájékozódás.",
    "diff": 1
  },
  {
    "id": "w3_19",
    "w": 3,
    "topic": "Feladatelemzés",
    "type": "mc",
    "q": "Mi a feladatelemzés (task analysis) szerepe az autonómiafejlesztésben?",
    "opts": [
      "Egyszeri összefoglaló értékelést készít a tanuló teljesítményéről",
      "Összetett készségeket apró, egymást követő, mérhető lépésekre bont, lehetővé téve a lépésenkénti elsajátítást",
      "A tanuló IQ-értékét méri a fejlesztési célok meghatározásához",
      "A segítség mennyiségét automatikusan növeli nehézségek esetén"
    ],
    "ans": 1,
    "exp": "A feladatelemzés összetett készségeket (pl. fogmosás, öltözkedés) apró lépésekre bont. A tanuló nem az egész feladattal szembesül egyszerre, és a pedagógus meghatározhatja, melyik lépésnél van szükség segítségre.",
    "diff": 1
  },
  {
    "id": "w3_20",
    "w": 3,
    "topic": "Feladatelemzés",
    "type": "mc",
    "q": "Mi a visszatartó láncolás (backward chaining)?",
    "opts": [
      "A tanuló az első lépéstől kezd el önállóan dolgozni, és fokozatosan hozzáadódnak a következő lépések",
      "A pedagógus elvégzi az összes lépést a tanuló helyett, kivéve az utolsót – a tanuló az utolsó lépésnél él át sikerélményt",
      "A feladat lépéseit visszafelé tanítjuk, az utolsótól az első felé haladva",
      "A segítség automatikusan visszatér, ha a tanuló hibát követ el"
    ],
    "ans": 1,
    "exp": "A visszatartó láncolás: a pedagógus elvégzi az összes lépést, kivéve az utolsót. A tanuló mindig a befejező lépésnél él át sikerélményt, majd fokozatosan veszi át a korábbi lépések felelősségét is.",
    "diff": 2
  },
  {
    "id": "w3_21",
    "w": 3,
    "topic": "Feladatelemzés",
    "type": "mc",
    "q": "Mi a „prompt dependency\" (segítségre való ráutaltság)?",
    "opts": [
      "Az a helyzet, amikor a tanuló csak segítséggel képes befejezni a feladatot, anélkül nem kezd bele",
      "A prompt fading helyes alkalmazásának eredménye",
      "A backward chaining egyik szakasza",
      "A pedagógus által adott fizikai segítség neve"
    ],
    "ans": 0,
    "exp": "A prompt dependency (segítségre való ráutaltság) azt jelenti, hogy a tanuló csak segítséggel hajlandó vagy képes cselekedni. A prompt fading célja éppen ennek megakadályozása.",
    "diff": 2
  },
  {
    "id": "w3_22",
    "w": 3,
    "topic": "Curriculum fogalmak",
    "type": "mc",
    "q": "Mi a különbség az adaptált curriculum és a differenciált curriculum között?",
    "opts": [
      "Az adaptált curriculum osztályszintű módosítás közös célok felé; a differenciált egyéni, módosított célokat tartalmaz",
      "A differenciált curriculum osztályszintű módosítás közös célok felé; az adaptált egyéni, módosított célokat tartalmaz",
      "A kettő azonos, csak az életkortól függően alkalmazzák őket",
      "Az adaptált curriculum csak a tartalmat módosítja, a differenciált csak a folyamatot"
    ],
    "ans": 1,
    "exp": "Differenciált curriculum: osztályszintű, közös célok. Adaptált curriculum: CES tanulóknak, csökkentett/módosított/alternatív célok, a PIP részét képezi.",
    "diff": 2
  },
  {
    "id": "w3_23",
    "w": 3,
    "topic": "UDL",
    "type": "mc",
    "q": "Mi az Univerzális Tanulástervezés (UDL/DUA) alapelve?",
    "opts": [
      "Minden tanuló számára azonos tananyagot és módszert kell alkalmazni",
      "Az oktatási tartalom, módszer és értékelés rugalmas, eleve sokféle tanulóra gondolt kialakítása – a különbség nem kivétel, hanem norma",
      "A CES tanulók számára külön, speciális tantervet kell kidolgozni minden tantárgyból",
      "Az értékelést csak szóbeli formában szabad végezni a méltányosság érdekében"
    ],
    "ans": 1,
    "exp": "UDL/DUA: csökkenti az utólagos adaptáció szükségességét. Alapelve: a különbség nem kivétel, hanem norma. A tartalom, módszer és értékelés rugalmasan, előre sokféle tanulóra gondolva tervezett.",
    "diff": 1
  },
  {
    "id": "w3_24",
    "w": 3,
    "topic": "UDL",
    "type": "mc",
    "q": "Az UDL második alapelve (a cselekvés és kifejezés többféle módja) mire vonatkozik?",
    "opts": [
      "Arra, hogy az információt különböző formátumokban kell hozzáférhetővé tenni",
      "Arra, hogy a tanulók különböző módokon adhatják vissza tudásukat – ne csak az írásbeli feladatmegoldás legyen elfogadott",
      "Arra, hogy a tanulók bevonódását és motivációját személyes relevanciával kell biztosítani",
      "Arra, hogy az értékelés kizárólag formatív legyen"
    ],
    "ans": 1,
    "exp": "Az UDL három alapelve: (1) Reprezentáció többféle módja – Mit tanulunk? (2) Cselekvés és kifejezés többféle módja – Hogyan mutatjuk meg? (3) Érdeklődés és motiváció többféle módja – Miért tanulunk?",
    "diff": 2
  },
  {
    "id": "w3_25",
    "w": 3,
    "topic": "IKT",
    "type": "mc",
    "q": "Melyik az IKT alkalmazásának előnye a speciális oktatásban?",
    "opts": [
      "Az IKT minden tanuló számára szenzorosan megfelelő és biztonságos",
      "Az IKT önmagában garantálja a hatékony tanulást",
      "Személyre szabhatóság: digitális eszközök a tanuló tempójához, szintjéhez igazíthatók valós idejű visszajelzéssel",
      "Az IKT megszünteti a digitális egyenlőtlenséget az iskolák között"
    ],
    "ans": 2,
    "exp": "Az IKT előnyei: személyre szabhatóság, motiváció és bevonódás növelése, kommunikációs segédeszközök (AAC alkalmazások). Korlátok: egyenlőtlen hozzáférés, szenzoros kihívások, pedagógiai minőség kockázata.",
    "diff": 1
  },
  {
    "id": "w3_26",
    "w": 3,
    "topic": "IKT",
    "type": "tf",
    "q": "A digitális eszközök minden autizmus spektrumon lévő tanuló számára szenzorosan megfelelőek, mivel interaktív és motiváló tartalmat kínálnak.",
    "ans": false,
    "exp": "HAMIS. Az IKT egyik korlátja: egyes ASD tanulók számára a képernyő fénye, hangjai vagy a változó vizuális ingerek megterhelőek lehetnek. Az IKT nem minden esetben szenzorosan megfelelő.",
    "diff": 2
  },
  {
    "id": "fill_06",
    "w": 3,
    "topic": "Intervenciós módszerek",
    "type": "fill",
    "q": "Egészítsd ki: A PECS a Picture Exchange Communication System rövidítése, magyarul ____________ kommunikációs rendszer.",
    "ans": "képcsere",
    "exp": "A PECS (Képcsere kommunikációs rendszer) képkártyák cseréjén alapuló augmentatív és alternatív kommunikációs (AAC) rendszer.",
    "diff": 1
  },
  {
    "id": "fill_07",
    "w": 3,
    "topic": "Feladatelemzés",
    "type": "fill",
    "q": "Egészítsd ki: A segítség fokozatos csökkentésének neve angolul prompt ____________.",
    "ans": "fading",
    "exp": "A prompt fading (segítség fokozatos elhalványítása) megakadályozza a prompt dependency (segítségre való ráutaltság) kialakulását.",
    "diff": 2
  },
  {
    "id": "short_04",
    "w": 3,
    "topic": "Intervenciós módszerek",
    "type": "short",
    "q": "Írj egy-egy kulcsszót minden módszerhez: ABA, TEACCH, PECS, Szociális narratívák!",
    "keywords": [
      "megerősítés",
      "strukturált",
      "képcsere",
      "történet"
    ],
    "exp": "ABA = megerősítés (viselkedésmódosítás); TEACCH = strukturált (tanulási környezet); PECS = képcsere (kommunikáció); Szociális narratívák = történet (szociális helyzetek előkészítése).",
    "diff": 2
  },
  {
    "id": "short_05",
    "w": 3,
    "topic": "UDL",
    "type": "short",
    "q": "Nevezd meg az UDL/DUA három alapelvét!",
    "keywords": [
      "reprezentáció",
      "cselekvés",
      "motiváció"
    ],
    "exp": "Az UDL három alapelve: (1) A reprezentáció többféle módja (Mit tanulunk?); (2) A cselekvés és kifejezés többféle módja (Hogyan mutatjuk meg?); (3) Az érdeklődés és motiváció többféle módja (Miért tanulunk?).",
    "diff": 2
  }
];
