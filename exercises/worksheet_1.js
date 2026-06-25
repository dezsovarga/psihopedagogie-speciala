// Worksheet 1 exercises — auto-managed, edit with care
const EXERCISES_W1 = [
  {
    "id": "w1_01",
    "w": 1,
    "topic": "Fogalmak – Értékelés",
    "type": "mc",
    "q": "Melyik fogalom leírása: „Elsődleges, gyors eljárás, amelynek célja azon gyermekek azonosítása, akiknél fejlődési eltérés gyanúja merül fel, és mélyebb vizsgálatra van szükség\"?",
    "opts": [
      "Diagnózis",
      "Pszichopedagógiai értékelés",
      "Szűrés",
      "Funkcionális profil"
    ],
    "ans": 2,
    "exp": "A szűrés (screening) nem diagnosztikus jellegű – csupán jelzőrendszerként működik, és mélyebb vizsgálatra utalja a gyanús eseteket.",
    "diff": 1
  },
  {
    "id": "w1_02",
    "w": 1,
    "topic": "Fogalmak – Értékelés",
    "type": "mc",
    "q": "Mit jelent a pszichopedagógiai értékelés?",
    "opts": [
      "Egyszeri vizsgálat, amely megnevezi a fogyatékosság típusát",
      "Komplex, multidiszciplináris folyamat, amely a tanuló fejlődési szükségleteit határozza meg",
      "Gyors szűrési eljárás fejlődési eltérések azonosítására",
      "A tanuló erősségeinek és nehézségeinek rövid leírása"
    ],
    "ans": 1,
    "exp": "A pszichopedagógiai értékelés komplex, multidiszciplináris folyamat: standardizált és nem standardizált eszközökkel vizsgálja a kognitív, érzelmi, szociális, kommunikációs és motorikus fejlődést.",
    "diff": 1
  },
  {
    "id": "w1_03",
    "w": 1,
    "topic": "Fogalmak – Értékelés",
    "type": "mc",
    "q": "Mi a diagnózis szerepe a pszichopedagógiai folyamatban?",
    "opts": [
      "A tanuló iskolai teljesítményének nyomon követése",
      "A szülők tájékoztatása a fejlesztési célokról",
      "A fogyatékosság típusának és súlyosságának megnevezése, az intervenció alapjaként",
      "Standardizált tesztek alkalmazása összehasonlítható adatok gyűjtésére"
    ],
    "ans": 2,
    "exp": "A diagnózis a pszichopedagógiai értékelés alapján felállított szakmai megállapítás – megnevezi a fogyatékosság típusát és súlyosságát, és alapul szolgál az intervencióhoz.",
    "diff": 1
  },
  {
    "id": "w1_04",
    "w": 1,
    "topic": "Fogalmak – Értékelés",
    "type": "mc",
    "q": "Melyik állítás igaz a formatív pszichodiagnosztikáról?",
    "opts": [
      "Statikus képet ad a tanuló jelenlegi teljesítményéről",
      "Kizárólag standardizált tesztekre épül",
      "A fejlődési potenciált vizsgálja – azt, amit a tanuló megfelelő segítséggel elérhet",
      "Egyszeri, lezáró értékelési aktus"
    ],
    "ans": 2,
    "exp": "A formatív pszichodiagnosztika Vigotszkij ZPD-elvével áll összhangban: nem azt méri, amit a gyermek már tud, hanem azt, amit megfelelő segítséggel képes elérni. Dinamikus és folyamatos jellegű.",
    "diff": 2
  },
  {
    "id": "w1_05",
    "w": 1,
    "topic": "Fogalmak – Értékelés",
    "type": "mc",
    "q": "Mit tartalmaz a funkcionális profil?",
    "opts": [
      "A tanuló orvosi diagnózisát és gyógyszerezési tervét",
      "A tanuló erősségeinek és nehézségeinek átfogó leírását különböző fejlődési területeken",
      "A tanórai teljesítményt és az osztályzatokat",
      "Az iskolai integrációs terv jogi kereteit"
    ],
    "ans": 1,
    "exp": "A funkcionális profil a tanuló erősségeit és nehézségeit írja le különböző fejlődési területeken (kognitív, kommunikációs, szociális, motorikus stb.). Ez képezi az egyéni intervenciós terv alapját.",
    "diff": 1
  },
  {
    "id": "w1_06",
    "w": 1,
    "topic": "Fogalmak – Értékelés",
    "type": "tf",
    "q": "A formatív pszichodiagnosztika lezáró ítéletet ad a tanuló képességeiről, és nem vizsgálja a fejlődési potenciált.",
    "ans": false,
    "exp": "HAMIS. A formatív pszichodiagnosztika éppen fordítva: nem lezárást, hanem fejlődési folyamatot vizsgál. A tanuló meglévő képességeire és tanulási potenciáljára fókuszál.",
    "diff": 1
  },
  {
    "id": "w1_07",
    "w": 1,
    "topic": "Alapelvek",
    "type": "mc",
    "q": "Az értékelés során minden gyermeket egyediként kezelnek, és az értékelés az adott személy sajátosságaihoz igazodik. Ez melyik alapelvet tükrözi?",
    "opts": [
      "Komplexitás elve",
      "Multidiszciplinaritás elve",
      "Individualitás elve",
      "Dinamikusság elve"
    ],
    "ans": 2,
    "exp": "Az individualitás elve szerint minden gyermek egyedi, ezért az értékelés az adott személy sajátosságaihoz igazodik.",
    "diff": 1
  },
  {
    "id": "w1_08",
    "w": 1,
    "topic": "Alapelvek",
    "type": "mc",
    "q": "Melyik alapelv fejezi ki azt, hogy pszichológus, logopédus, gyógypedagógus, orvos és szociális munkás együttműködésével valósul meg az értékelés?",
    "opts": [
      "Individualitás elve",
      "Dinamikusság elve",
      "A család bevonásának elve",
      "Multidiszciplinaritás elve"
    ],
    "ans": 3,
    "exp": "A multidiszciplinaritás elve azt jelenti, hogy különböző szakemberek együttműködésével valósul meg az értékelés – pszichológus, logopédus, gyógypedagógus, orvos, szociális munkás.",
    "diff": 1
  },
  {
    "id": "w1_09",
    "w": 1,
    "topic": "Alapelvek",
    "type": "order",
    "q": "Rendezd sorba a komplex pszichopedagógiai értékelés öt alapelvét (a megadott nevük alapján)!",
    "items": [
      "Komplexitás elve – valamennyi személyiségterület felölelése",
      "Individualitás elve – minden gyermek egyedi",
      "Dinamikusság elve – folyamatos, fejlődést nyomon követő",
      "Multidiszciplinaritás elve – szakemberek együttműködése",
      "A család bevonásának elve – szülők aktív részvétele"
    ],
    "exp": "A öt alapelv: Komplexitás, Individualitás, Dinamikusság, Multidiszciplinaritás, A család bevonása. Ezek mindegyike kötelező az érvényes értékeléshez.",
    "diff": 2
  },
  {
    "id": "w1_10",
    "w": 1,
    "topic": "Fejlődési területek",
    "type": "mc",
    "q": "Melyik fejlődési terület vizsgálata NEM tartozik a CES tanulók komplex értékelésének öt kötelező területe közé?",
    "opts": [
      "Kognitív fejlődés",
      "Szociális-érzelmi fejlődés",
      "Pszichomotoros fejlődés",
      "Gazdasági-pénzügyi tájékozottság"
    ],
    "ans": 3,
    "exp": "Az öt kötelező terület: Kognitív fejlődés, Kommunikáció és nyelvi fejlődés, Szociális-érzelmi fejlődés, Pszichomotoros fejlődés, Adaptív viselkedés.",
    "diff": 1
  },
  {
    "id": "w1_11",
    "w": 1,
    "topic": "Fejlődési területek",
    "type": "match",
    "q": "Párosítsd a fejlődési területet a hozzá tartozó leírással!",
    "pairs": [
      {
        "L": "Adaptív viselkedés",
        "R": "Önkiszolgálás, mindennapi életvitel, iskolai alkalmazkodás"
      },
      {
        "L": "Kognitív fejlődés",
        "R": "Figyelem, emlékezet, gondolkodás, problémamegoldás"
      },
      {
        "L": "Pszichomotoros fejlődés",
        "R": "Nagy- és finommotoros készségek, térbeli tájékozódás, testséma"
      },
      {
        "L": "Kommunikáció és nyelvi fejlődés",
        "R": "Expresszív és receptív nyelvi készségek, szókincs"
      }
    ],
    "exp": "Adaptív viselkedés = önkiszolgálás; Kognitív = figyelem/emlékezet; Pszichomotoros = motorika; Kommunikáció = nyelvi készségek.",
    "diff": 2
  },
  {
    "id": "w1_12",
    "w": 1,
    "topic": "Értékelési módszerek",
    "type": "mc",
    "q": "Melyik az a dinamikus értékelési módszer, amely tesztelés–tanítás–újratesztelés lépéseken alapul?",
    "opts": [
      "Standardizált teszt (WISC)",
      "Formatív pszichodiagnosztika eljárása – dinamikus értékelés",
      "Portfólió értékelés",
      "Megfigyelési ellenőrzőlista"
    ],
    "ans": 1,
    "exp": "A formatív pszichodiagnosztika alkalmazható eljárása a dinamikus értékelés: felmér → célzott segítség → újraértékelés. A különbség megmutatja a tanuló tanulási kapacitását.",
    "diff": 2
  },
  {
    "id": "w1_13",
    "w": 1,
    "topic": "Értékelési módszerek",
    "type": "mc",
    "q": "Mi a megfigyelés (observarea) mint értékelési módszer egyik korlátja?",
    "opts": [
      "Nem mutatja a valós viselkedést",
      "Torzítja a tesztszorongás",
      "Szubjektív lehet és nehéz standardizálni",
      "Csak normacsoporthoz viszonyít"
    ],
    "ans": 2,
    "exp": "A megfigyelés előnye: természetes környezetben rögzít. Korlátja: szubjektív lehet, időigényes, nehéz standardizálni.",
    "diff": 2
  },
  {
    "id": "w1_14",
    "w": 1,
    "topic": "Értékelési módszerek",
    "type": "mc",
    "q": "Mi a standardizált tesztek (pl. WISC, Raven) egyik korlátja?",
    "opts": [
      "Nem adnak összehasonlítható adatokat",
      "Nem veszik figyelembe a kulturális és nyelvi különbségeket",
      "Szubjektív értékelési eredményt adnak",
      "Nem alkalmasak normacsoporthoz való viszonyításra"
    ],
    "ans": 1,
    "exp": "A standardizált tesztek előnye az összehasonlíthatóság. Korlátjuk: nem veszik figyelembe a kulturális és nyelvi különbségeket, és statikus képet adnak a teljesítményről.",
    "diff": 2
  },
  {
    "id": "w1_15",
    "w": 1,
    "topic": "Értékelő jelentés",
    "type": "mc",
    "q": "Mi NEM része a pszichopedagógiai értékelő jelentésnek?",
    "opts": [
      "Az alkalmazott módszerek és eszközök",
      "Az értékelés eredményei fejlődési területenként",
      "A tanuló szülei foglalkozásának részletes leírása",
      "Javaslatok az intervencióra"
    ],
    "ans": 2,
    "exp": "A pszichopedagógiai értékelő jelentés elemei: személyes adatok, értékelés célja, módszerek, eredmények, összefoglaló diagnózis, javaslatok. A szülők foglalkozása nem kötelező eleme.",
    "diff": 2
  },
  {
    "id": "w1_16",
    "w": 1,
    "topic": "Értékelő jelentés",
    "type": "mc",
    "q": "Miért szükséges a multidiszciplináris team bevonása az értékelésbe?",
    "opts": [
      "Azért, mert egyetlen szakember nem képes a tanuló valamennyi területét kompetensen vizsgálni",
      "Azért, mert a jogi előírások megkövetelik a négy különböző orvos jelenlétét",
      "Azért, hogy a szülők kimaradjanak a döntési folyamatból",
      "Azért, hogy csökkentsék a vizsgálati időt"
    ],
    "ans": 0,
    "exp": "Egyetlen szakember nem képes a tanuló valamennyi területét kompetensen vizsgálni. A team átfogó, megbízható képet nyújt és megelőzi az egyoldalú értékelést.",
    "diff": 1
  },
  {
    "id": "w1_17",
    "w": 1,
    "topic": "Foglalkozásterápia",
    "type": "mc",
    "q": "Melyik meghatározás illik legjobban a foglalkozásterápiára?",
    "opts": [
      "Olyan pszichiátriai kezelés, amely gyógyszerekkel kezeli a viselkedési zavarokat",
      "Célirányos, értelmes tevékenységek segítségével fejleszti a funkcionális képességeket és elősegíti az önállóságot",
      "Kizárólag fizikai rehabilitációra irányuló orvosi szakdiszciplína",
      "A tanulók tanórai teljesítményét értékelő pedagógiai módszer"
    ],
    "ans": 1,
    "exp": "A foglalkozásterápia (terapia ocupațională) egészségügyi és rehabilitációs szakdiszciplína. Célirányos, értelmes tevékenységekkel fejleszti a funkcionális képességeket és elősegíti az önállóságot és társadalmi részvételt.",
    "diff": 1
  },
  {
    "id": "w1_18",
    "w": 1,
    "topic": "Foglalkozásterápia",
    "type": "mc",
    "q": "Mi a foglalkozásterápia kompenzáló funkciója?",
    "opts": [
      "A meglévő képességek erősítése, új készségek kialakítása",
      "A másodlagos fogyatékosságok és funkcionális visszaesés megelőzése",
      "A sérült funkciók helyett más képességek mozgósítása, segédeszközök alkalmazása",
      "Az értékelési folyamat dokumentálása és archiválása"
    ],
    "ans": 2,
    "exp": "A három funkció: fejlesztő (meglévő képességek erősítése), kompenzáló (sérült funkciók helyett más képességek mozgósítása, segédeszközök), prevenciós (másodlagos fogyatékosságok megelőzése).",
    "diff": 2
  },
  {
    "id": "w1_19",
    "w": 1,
    "topic": "Foglalkozásterápia",
    "type": "order",
    "q": "Rendezd helyes sorrendbe a foglalkozásterápiás folyamat három szakaszát!",
    "items": [
      "1. Értékelési szakasz – funkcionális állapot felmérése, eszközök alkalmazása",
      "2. Tervezési és intervenciós szakasz – egyéni fejlesztési terv kidolgozása",
      "3. Értékelési és lezárási szakasz – eredmények monitorozása, dokumentálás"
    ],
    "exp": "A három szakasz sorrendben: (1) Értékelési szakasz → (2) Tervezési és intervenciós szakasz → (3) Értékelési és lezárási szakasz.",
    "diff": 1
  },
  {
    "id": "w1_20",
    "w": 1,
    "topic": "Foglalkozásterápia",
    "type": "mc",
    "q": "Az ADL (Activities of Daily Living) tevékenységek melyik szervezési formához tartoznak?",
    "opts": [
      "Egyéni foglalkozás",
      "Kiscsoportos tevékenység",
      "Mindennapi életviteli tevékenységek",
      "Terápiás csoportos foglalkozás"
    ],
    "ans": 2,
    "exp": "Az ADL – Mindennapi életviteli tevékenységek: önkiszolgálási feladatok (öltözködés, étkezés, higiénia) gyakorlása valós vagy szimulált környezetben.",
    "diff": 1
  },
  {
    "id": "w1_21",
    "w": 1,
    "topic": "Pszichomotorika",
    "type": "mc",
    "q": "Mit jelent a testséma (schema corporală)?",
    "opts": [
      "A tér irányainak ismerete saját testhez viszonyítva",
      "A domináns oldal következetes alkalmazása",
      "A ritmus és az időbeli sorrend érzékelésének képessége",
      "A saját test részeinek, határainak és mozgáslehetőségeinek tudatos ismerete"
    ],
    "ans": 3,
    "exp": "A testséma (schema corporală): a saját test részeinek, határainak és mozgáslehetőségeinek tudatos ismerete és érzékelése.",
    "diff": 1
  },
  {
    "id": "w1_22",
    "w": 1,
    "topic": "Pszichomotorika",
    "type": "mc",
    "q": "Melyik fogalom jelöli a domináns oldal (jobb vagy bal kéz, láb, szem) következetes alkalmazását mozgásos tevékenységek során?",
    "opts": [
      "Térbeli tájékozódás",
      "Testséma",
      "Lateralitás",
      "Időbeli tájékozódás"
    ],
    "ans": 2,
    "exp": "A lateralitás a domináns oldal (jobb vagy bal kéz, láb, szem) következetes alkalmazása mozgásos tevékenységek során.",
    "diff": 1
  },
  {
    "id": "w1_23",
    "w": 1,
    "topic": "Pszichomotorika",
    "type": "match",
    "q": "Párosítsd a pszichomotorika összetevőit a definícióikkal!",
    "pairs": [
      {
        "L": "Testséma",
        "R": "A saját test részeinek és mozgáslehetőségeinek tudatos ismerete"
      },
      {
        "L": "Térbeli tájékozódás",
        "R": "Fent-lent, jobbra-balra irányok ismerete tárgyakhoz viszonyítva"
      },
      {
        "L": "Időbeli tájékozódás",
        "R": "Ritmus, időtartam és időbeli sorrend érzékelése"
      },
      {
        "L": "Lateralitás",
        "R": "Domináns oldal következetes alkalmazása"
      }
    ],
    "exp": "A négy összetevő: Testséma, Térbeli tájékozódás, Időbeli tájékozódás, Lateralitás.",
    "diff": 2
  },
  {
    "id": "w1_24",
    "w": 1,
    "topic": "Differenciálás",
    "type": "mc",
    "q": "Mi a különbség a curriculumdifferenciálás és az individualizálás között?",
    "opts": [
      "A curriculumdifferenciálás egyéni szintű tervezés, az individualizálás osztályszintű módosítás",
      "A curriculumdifferenciálás az egész osztálynak szóló módosítás közös célok felé, az individualizálás egyéni szintű tervezés",
      "A kettő azonos fogalom, csak a jogszabályi szóhasználat tér el",
      "Az individualizálás kizárólag a tananyag mennyiségét csökkenti"
    ],
    "ans": 1,
    "exp": "Curriculumdifferenciálás: osztályszintű módosítás, mindenki közös célok felé halad. Individualizálás: kizárólag az adott tanuló egyéni szükségleteire irányuló tervezés (PIP keretében).",
    "diff": 2
  },
  {
    "id": "w1_25",
    "w": 1,
    "topic": "Differenciálás",
    "type": "mc",
    "q": "Mi a hozzáférési adaptáció?",
    "opts": [
      "Az elsajátítandó tananyag mennyiségének csökkentése",
      "Az oktatási eszközök, módszerek vagy környezet módosítása, hogy a tanuló fizikailag és kognitívan hozzáférhessen az ismeretek elsajátításához",
      "A tanuló értékelési módszerének teljes elhagyása",
      "A pedagógus módszertani megközelítésének egységesítése az egész osztályra"
    ],
    "ans": 1,
    "exp": "Hozzáférési adaptáció: az eszközök, módszerek vagy környezet módosítása (pl. Braille-írás, képes instrukciók, hangrögzítő), hogy a tanuló hozzáférhessen az ismeretek elsajátításához.",
    "diff": 1
  },
  {
    "id": "w1_26",
    "w": 1,
    "topic": "PIP",
    "type": "mc",
    "q": "Melyik NEM kötelező eleme az egyéni intervenciós tervnek (PIP)?",
    "opts": [
      "A tanuló jelenlegi funkcionális szintjének leírása",
      "Hosszú távú és rövid távú célok",
      "A tanuló szüleinek iskolai végzettsége",
      "Az értékelési eljárás és időpont"
    ],
    "ans": 2,
    "exp": "A PIP hat kötelező eleme: funkcionális szint leírása, hosszú távú célok, rövid távú célok, módszerek és eszközök, felelős személyek és szolgáltatások, értékelési eljárás és időpont.",
    "diff": 1
  },
  {
    "id": "w1_27",
    "w": 1,
    "topic": "PIP",
    "type": "order",
    "q": "Rendezd sorba az egyéni intervenciós terv (PIP) hat lényeges elemét!",
    "items": [
      "Jelenlegi funkcionális szint leírása (erősségek, nehézségek)",
      "Hosszú távú célok – tanév végére elérendő célok",
      "Rövid távú célok – kisebb, mérhető lépések",
      "Alkalmazott módszerek és eszközök",
      "Felelős személyek és szolgáltatások",
      "Értékelési eljárás és időpont"
    ],
    "exp": "A PIP hat eleme logikus sorrendben: (1) Jelenlegi szint → (2) Hosszú távú célok → (3) Rövid távú célok → (4) Módszerek → (5) Felelős személyek → (6) Értékelési eljárás.",
    "diff": 2
  },
  {
    "id": "w1_28",
    "w": 1,
    "topic": "SMART célok",
    "type": "mc",
    "q": "Mit jelent a SMART rövidítés az oktatási célok meghatározásában?",
    "opts": [
      "Szimbolikus, Mérhető, Adaptív, Rövid, Technológiai",
      "Specifikus, Mérhető, Elérhető, Releváns, Időhöz kötött",
      "Strukturált, Módszeres, Automatikus, Rendszeres, Tesztelható",
      "Szociális, Motiváló, Aktív, Rendszeres, Tervezett"
    ],
    "ans": 1,
    "exp": "SMART: Specifikus, Mérhető, Elérhető (Achievable), Releváns, Időhöz kötött (Time-bound). Mindkét célnak ezeket a kritériumokat kell teljesítenie.",
    "diff": 1
  },
  {
    "id": "w1_29",
    "w": 1,
    "topic": "SMART célok",
    "type": "tf",
    "q": "Egy jó SMART cél: „Andrei tanuljon meg jobban matematikát.\" – Ez megfelel a SMART kritériumoknak.",
    "ans": false,
    "exp": "HAMIS. Ez a cél nem specifikus, nem mérhető és nem időhöz kötött. Helyes SMART cél pl.: „3 hónapon belül, egyéni foglalkozásokon, Andrei képes lesz 10 egyjegyű szám összeadási feladatot legalább 80%-os pontossággal megoldani.\"",
    "diff": 2
  },
  {
    "id": "w1_30",
    "w": 1,
    "topic": "Tanítási módszerek",
    "type": "mc",
    "q": "Hogyan adaptálandó a kooperatív tanulás autizmus spektrumon lévő tanuló számára?",
    "opts": [
      "A tanuló egyedül dolgozzon, ne vegyen részt csoportmunkában",
      "A csoportmunka előre strukturált, vizuális napirenden bemutatva; a tanuló szerepe kiszámítható és ismétlődő",
      "A csoportmunkában a tanuló bármilyen szerepet kaphat véletlenszerűen",
      "A tanuló csoporton kívül ül, de figyeli a többieket"
    ],
    "ans": 1,
    "exp": "ASD tanulónál a kooperatív tanulás adaptálása: strukturált, vizuális napirend; kiszámítható és ismétlődő szerep; fizikai közelség és váratlan változások minimalizálva; pedagógus diszkrét jelenléte.",
    "diff": 2
  },
  {
    "id": "fill_01",
    "w": 1,
    "topic": "Fogalmak – Értékelés",
    "type": "fill",
    "q": "Egészítsd ki: A szűrés nem diagnosztikus jellegű, csupán ____________ rendszerként működik.",
    "ans": "jelző",
    "exp": "A szűrés (screening) jelzőrendszerként működik: azonosítja a gyanús eseteket és mélyebb vizsgálatra utalja őket.",
    "diff": 1
  },
  {
    "id": "fill_02",
    "w": 1,
    "topic": "Fogalmak – Értékelés",
    "type": "fill",
    "q": "Egészítsd ki: A formatív pszichodiagnosztika Vigotszkij ____________ elvével áll összhangban.",
    "ans": "ZPD",
    "exp": "A formatív pszichodiagnosztika a Legközelebbi Fejlődési Zóna (ZPD – Zona Proximei Dezvoltări) elvével áll összhangban.",
    "diff": 2
  },
  {
    "id": "fill_03",
    "w": 1,
    "topic": "Pszichomotorika",
    "type": "fill",
    "q": "Egészítsd ki: A pszichomotorika négy összetevője: testséma, térbeli tájékozódás, időbeli tájékozódás és ____________.",
    "ans": "lateralitás",
    "exp": "A lateralitás a domináns oldal (jobb vagy bal kéz, láb, szem) következetes alkalmazása mozgásos tevékenységek során.",
    "diff": 1
  },
  {
    "id": "fill_08",
    "w": 1,
    "topic": "PIP",
    "type": "fill",
    "q": "Egészítsd ki: Az egyéni intervenciós terv magyar rövidítése ____________ (románul Plan de Intervenție Personalizat).",
    "ans": "PIP",
    "exp": "A PIP (Plan de Intervenție Personalizat / Egyéni intervenciós terv) hat kötelező elemet tartalmaz.",
    "diff": 1
  },
  {
    "id": "short_01",
    "w": 1,
    "topic": "Alapelvek",
    "type": "short",
    "q": "Sorold fel a komplex pszichopedagógiai értékelés öt alapelvét!",
    "keywords": [
      "komplexitás",
      "individualitás",
      "dinamikusság",
      "multidiszciplinaritás",
      "család"
    ],
    "exp": "Az öt alapelv: (1) Komplexitás – valamennyi terület felölelése; (2) Individualitás – egyéni sajátosságokhoz igazodás; (3) Dinamikusság – folyamatos nyomon követés; (4) Multidiszciplinaritás – szakemberek együttműködése; (5) A család bevonása.",
    "diff": 2
  },
  {
    "id": "short_02",
    "w": 1,
    "topic": "Foglalkozásterápia",
    "type": "short",
    "q": "Nevezd meg a foglalkozásterápia három funkcióját!",
    "keywords": [
      "fejlesztő",
      "kompenzáló",
      "prevenciós"
    ],
    "exp": "A három funkció: (1) Fejlesztő – meglévő képességek erősítése, új készségek kialakítása; (2) Kompenzáló – sérült funkciók helyett más képességek mozgósítása; (3) Prevenciós – másodlagos fogyatékosságok megelőzése.",
    "diff": 2
  }
];
