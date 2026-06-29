// 1. Fejezet: A gyógypedagógia fogalma, története
// Forrás: Gyógypedagógiai Alapismeretek – Tanulmányi Útmutató (2018), 1. fejezet (10–21. oldal)
const EXERCISES_GYALAP_CH1 = [

  // ─── A gyógypedagógia fogalma ──────────────────────────────────────────────

  {
    id: 'gyalap_ch1_01',
    w: 101,
    topic: 'A gyógypedagógia fogalma',
    type: 'mc',
    q: 'Melyik tudományterületek körébe sorolható a gyógypedagógia?',
    opts: ['Természettudományok', 'Humán tudományok', 'Műszaki tudományok', 'Közgazdasági tudományok'],
    ans: 1,
    exp: 'A gyógypedagógia a humán tudományok körébe tartozik.',
    diff: 1
  },
  {
    id: 'gyalap_ch1_02',
    w: 101,
    topic: 'A gyógypedagógia fogalma',
    type: 'mc',
    q: 'A gyógypedagógia határtudomány – mely négy tudományterület eredményeit hasznosítja nagymértékben?',
    opts: [
      'Kémia, fizika, biológia és matematika',
      'Orvostudomány, pszichológia, pedagógia és szociológia',
      'Informatika, közgazdaságtan, jog és politológia',
      'Állattan, növénytan, geológia és asztronómia'
    ],
    ans: 1,
    exp: 'A gyógypedagógia nagymértékben az orvostudomány, a pszichológia, a pedagógia és a szociológia eredményeit felhasználja.',
    diff: 1
  },
  {
    id: 'gyalap_ch1_03',
    w: 101,
    topic: 'A gyógypedagógia fogalma',
    type: 'tf',
    q: 'A gyógypedagógia önálló, autonóm tudomány, amelynek sajátos funkciója, módszerei és elméleti rendszere van.',
    ans: true,
    exp: 'Igaz. Bár a neveléstudományok körébe tartozik, a gyógypedagógia önálló, autonóm tudomány sajátos funkciókkal, módszerekkel és elméleti rendszerrel.',
    diff: 1
  },
  {
    id: 'gyalap_ch1_04',
    w: 101,
    topic: 'A gyógypedagógia fogalma',
    type: 'mc',
    q: 'Mi a gyógypedagógia fő célja?',
    opts: [
      'A fogyatékosságot okozó tényező teljes megszüntetése',
      'Neveléssel biztosítani a fejlődést, annak ellenére, hogy a fejlődést gátló ártalmat nem lehet megszüntetni',
      'Gyógyszerekkel kezelni a sérültek állapotát',
      'A sérültek elszigetelése a társadalomtól'
    ],
    ans: 1,
    exp: 'A gyógypedagógia célja: neveléssel biztosítani a fejlődést, annak ellenére, hogy a fejlődést gátló ártalmat megszüntetni nem tudja.',
    diff: 1
  },
  {
    id: 'gyalap_ch1_05',
    w: 101,
    topic: 'A gyógypedagógia fogalma',
    type: 'fill',
    q: 'A gyógypedagógia legrégebbi megnevezése a „___________ nevelés" (Heilerziehung).',
    ans: 'gyógyító',
    exp: 'A gyógyító nevelés (Heilerziehung) a gyógypedagógia legrégebbi megnevezése.',
    diff: 2
  },
  {
    id: 'gyalap_ch1_06',
    w: 101,
    topic: 'A gyógypedagógia fogalma',
    type: 'fill',
    q: 'A gyógypedagógia eszköze a ___________ és a nevelés.',
    ans: 'szoktatás',
    exp: 'A gyógypedagógia eszköze a szoktatás és a nevelés, melynek eredményeként a speciális szükségletű személy jobban boldogul a mindennapokban.',
    diff: 2
  },

  // ─── A sérültek helyzete az ókorban ───────────────────────────────────────

  {
    id: 'gyalap_ch1_07',
    w: 101,
    topic: 'Történeti kitekintés',
    type: 'mc',
    q: 'Kire utal a szöveg mint az ókori görög mítoszok egyik ismert testi sérültjére?',
    opts: ['Odüsszeuszra', 'Akhilleuszra', 'Hephaisztoszra, Hera sánta fiára', 'Arészre'],
    ans: 2,
    exp: 'Hephaisztosz, Hera sánta fia, a tűz és kovácsmesterség istene a görög mítoszok egyik ismert testi sérültje.',
    diff: 2
  },
  {
    id: 'gyalap_ch1_08',
    w: 101,
    topic: 'Történeti kitekintés',
    type: 'tf',
    q: 'Az ókori világban a sérültek sorsát kizárólag a Tajgetoszra vagy a Tarpei sziklára vetés jellemezte.',
    ans: false,
    exp: 'Nem igaz. Az ókort sem csak a Tajgetosz vagy a Tarpei szikla jellemzi – a sérülttek sorsa nem volt mindenütt és mindenhol egyforma.',
    diff: 2
  },
  {
    id: 'gyalap_ch1_09',
    w: 101,
    topic: 'Történeti kitekintés',
    type: 'mc',
    q: 'Ki volt Szophoklesz tragédiájának főszereplője, akinek neve „dagadt, fájós lábút" jelent?',
    opts: ['Antigoné', 'Oidipusz rex', 'Elektra', 'Héraklész'],
    ans: 1,
    exp: 'Oidipusz rex (nevének jelentése: dagadt, fájós lábú) Szophoklesz (i.e. 496–406) tragédiájának főszereplője.',
    diff: 2
  },

  // ─── Jótékonysági modell ──────────────────────────────────────────────────

  {
    id: 'gyalap_ch1_10',
    w: 101,
    topic: 'Jótékonysági modell',
    type: 'mc',
    q: 'Mi jellemzi leginkább a jótékonysági modellt?',
    opts: [
      'A sérültek nevelése és tanítása volt a fő cél',
      'Anyagi javakkal próbálták kompenzálni a természet által elvett vagy megtagadott képességeket',
      'Orvosi kezelést biztosítottak a sérülteknek',
      'A sérültek jogait törvénnyel garantálták'
    ],
    ans: 1,
    exp: 'A jótékonysági modell anyagi javakkal próbálta kompenzálni azt, amit a természet elvett – a nevelés nem volt célja.',
    diff: 1
  },
  {
    id: 'gyalap_ch1_11',
    w: 101,
    topic: 'Jótékonysági modell',
    type: 'tf',
    q: 'A jótékonysági modell főleg az angolszász területen terjedt el, és a veszteség okozta tragédiát hangsúlyozta.',
    ans: true,
    exp: 'Igaz. A jótékonysági modell főleg az angolszász területen terjedt el, a veszteség okozta tragédiát hangsúlyozta, ami sajnálatot, félelmet és szégyent vált ki.',
    diff: 2
  },
  {
    id: 'gyalap_ch1_12',
    w: 101,
    topic: 'Jótékonysági modell',
    type: 'mc',
    q: 'A jótékonysági modell mentalitása nagyjából mikor változott meg?',
    opts: ['A középkor elején', 'A XVII. század elejéig változatlan maradt', 'Az i.e. III. századig', 'A XIX. század végére'],
    ans: 1,
    exp: 'A jótékonysági modell mentalitása a XVII. század elejéig változatlan maradt.',
    diff: 3
  },

  // ─── Orvosi modell ────────────────────────────────────────────────────────

  {
    id: 'gyalap_ch1_13',
    w: 101,
    topic: 'Orvosi modell',
    type: 'mc',
    q: 'Ki volt az ortopédia kifejezés első használója, és mikor?',
    opts: [
      'Hippokratész, i.e. 460-ban',
      'N. Andry francia orvos, 1741-ben',
      'Bárczi Gusztáv, 1945-ben',
      'Bronfenbrenner, 1979-ben'
    ],
    ans: 1,
    exp: 'N. Andry francia orvos használta először az "ortopédia" kifejezést 1741-ben.',
    diff: 2
  },
  {
    id: 'gyalap_ch1_14',
    w: 101,
    topic: 'Orvosi modell',
    type: 'mc',
    q: 'Mikor és hol nyílt az első intézet értelmi akadályozottak számára?',
    opts: ['1741-ben Londonban', '1828-ban Párizsban', '1868-ban Bécsben', '1898-ban Kolozsváron'],
    ans: 1,
    exp: 'Az értelmi akadályozottaknak az első intézet 1828-ban nyílt Párizsban, bár inkább tébolyda volt, mint iskola.',
    diff: 2
  },
  {
    id: 'gyalap_ch1_15',
    w: 101,
    topic: 'Orvosi modell',
    type: 'tf',
    q: 'Romániában a kommunizmus ideje alatt a sérültekre az inklúzió elvét alkalmazták.',
    ans: false,
    exp: 'Nem igaz. Romániában a kommunizmus alatt a sérültekre mint selejtre tekintettek, eldugták őket – míg a nemzetközi gyakorlatban az inklúzió hódított teret.',
    diff: 2
  },
  {
    id: 'gyalap_ch1_16',
    w: 101,
    topic: 'Orvosi modell',
    type: 'mc',
    q: 'Az erdélyi sérültek gondozásáról szóló első feljegyzés melyik évből való?',
    opts: ['1428-ból', '1549-ből', '1741-ből', '1868-ból'],
    ans: 1,
    exp: 'Az erdélyi sérültek gondozásáról szóló első feljegyzés 1549-ből való (Bárány, 1936).',
    diff: 3
  },

  // ─── Szociális modell / LKK ───────────────────────────────────────────────

  {
    id: 'gyalap_ch1_17',
    w: 101,
    topic: 'Szociális modell',
    type: 'mc',
    q: 'A szociális modell szerint hol keresendők az akadályok a fogyatékos gyermek esetén?',
    opts: [
      'Kizárólag a gyermek biológiai adottságaiban',
      'A gyermek génállományában',
      'A gyermek környezetében',
      'A gyermek szüleinek hibáiban'
    ],
    ans: 2,
    exp: 'A szociális modell azt tartja, hogy a gyermek környezetében vannak az akadályok – nem magában a gyermekben keresi a hibát.',
    diff: 1
  },
  {
    id: 'gyalap_ch1_18',
    w: 101,
    topic: 'Szociális modell',
    type: 'fill',
    q: 'A szociális modellben az LKK rövidítés a „___________ korlátozó környezet" kifejezést takarja.',
    ans: 'legkevésbé',
    exp: 'Az LKK a Legkevésbé Korlátozó Környezet (least restrictive environment) rövidítése.',
    diff: 2
  },
  {
    id: 'gyalap_ch1_19',
    w: 101,
    topic: 'Szociális modell',
    type: 'order',
    q: 'Rendezze az LKK-hierarchiát a legsúlyosabban korlátozótól a legkevésbé korlátozóig!',
    items: [
      'Kórházi iskola',
      'Speciális iskola',
      'Speciális osztály',
      'Hagyományos iskolai osztály'
    ],
    exp: 'Sorrend: Kórházi iskola (legsúlyosabb) → Speciális iskola → Speciális osztály → Hagyományos iskolai osztály (legkevésbé korlátozó).',
    diff: 2
  },
  {
    id: 'gyalap_ch1_20',
    w: 101,
    topic: 'Szociális modell',
    type: 'mc',
    q: 'Mikor írta alá Románia a Salamancai egyezményt, és mi annak alapgondolata?',
    opts: [
      '1989-ben; a speciális intézetek fejlesztése',
      '1994-ben; az oktatást mindenki számára hozzáférhetővé kell tenni',
      '2006-ban; az akadálymentesítés kötelezővé tétele',
      '1990-ben; a sérültek jogainak visszaállítása'
    ],
    ans: 1,
    exp: 'Románia 1994-ben írta alá a Salamancai egyezményt – alapgondolata: az oktatást mindenki számára hozzáférhetővé kell tenni, az iskola „mindenki iskolája".',
    diff: 2
  },

  // ─── Civil jogi modell ────────────────────────────────────────────────────

  {
    id: 'gyalap_ch1_21',
    w: 101,
    topic: 'Civil jogi modell',
    type: 'mc',
    q: 'Mit mondott ki az 1868-as tanügyi törvény 38. t.c. a sérült gyermekekről?',
    opts: [
      'Kötelező beiratkozásukat a speciális iskolákba',
      'A gyenge pszichikumú vagy fizikumú gyermek orvosi igazolással felmenthető az iskolába járás alól',
      'Számukra is kötelező az általános iskolai oktatás kivétel nélkül',
      'Az integrált oktatás bevezetését'
    ],
    ans: 1,
    exp: 'Az 1868-as tanügyi törvény 38. t.c. kimondta, hogy a gyenge pszichikumú vagy fizikumú gyermek orvosi igazolással felmenthető az iskolába járás alól.',
    diff: 3
  },
  {
    id: 'gyalap_ch1_22',
    w: 101,
    topic: 'Civil jogi modell',
    type: 'mc',
    q: 'Mit jelent a cselekvőképesség a civil jogi modell értelmében?',
    opts: [
      'A fizikai mozgásképességet',
      'A fogyatékosság mértékének csökkentését',
      'Saját akarata alapján, saját nevében jogokat szerezni és kötelezettségeket vállalni',
      'Az iskolai teljesítményre való képességet'
    ],
    ans: 2,
    exp: 'A cselekvőképes személy saját akarata alapján, saját nevében szerezhet jogokat és vállalhat kötelezettségeket.',
    diff: 2
  },

  // ─── Ökológiai modell (Bronfenbrenner) ───────────────────────────────────

  {
    id: 'gyalap_ch1_23',
    w: 101,
    topic: 'Ökológiai modell',
    type: 'match',
    q: 'Párosítsa Bronfenbrenner ökológiai modelljének rendszereit leírásukkal!',
    pairs: [
      { L: 'Mikrorendszer', R: 'Közvetlen környezet: család, bölcsőde, iskola' },
      { L: 'Mezorendszer', R: 'Mikrorendszerek közötti kapcsolatok' },
      { L: 'Exorendszer', R: 'Befolyásolja a gyermeket, de nem aktív részese' },
      { L: 'Makrorendszer', R: 'Tágabb valós és lehetséges társadalmi világ' }
    ],
    exp: 'Mikrorendszer = közvetlen környezet; mezorendszer = mikrorendszerek kapcsolatai; exorendszer = közvetett befolyás; makrorendszer = tágabb társadalmi kontextus.',
    diff: 2
  },
  {
    id: 'gyalap_ch1_24',
    w: 101,
    topic: 'Ökológiai modell',
    type: 'mc',
    q: 'Hány alapvető és egymásra tevődő rendszert különböztet meg Bronfenbrenner ökológiai modellje?',
    opts: ['2', '3', '4', '5'],
    ans: 2,
    exp: 'Bronfenbrenner 4 alapvető és egymásra tevődő rendszert különböztet meg: mikrorendszer, mezorendszer, exorendszer, makrorendszer.',
    diff: 2
  },
  {
    id: 'gyalap_ch1_25',
    w: 101,
    topic: 'Ökológiai modell',
    type: 'fill',
    q: 'Bronfenbrenner modelljében a különböző mikrorendszerek közötti kapcsolatokat a ___________ jelöli.',
    ans: 'mezorendszer',
    exp: 'A mezorendszer a különböző mikrorendszerek közötti kapcsolatokat jelöli, amelyek révén a gyerek megtapasztalja a valóságot.',
    diff: 2
  },

  // ─── Bio-pszicho szociális modell ─────────────────────────────────────────

  {
    id: 'gyalap_ch1_26',
    w: 101,
    topic: 'Bio-pszicho szociális modell',
    type: 'mc',
    q: 'A bio-pszicho szociális modell szerint a zavarok kialakulásában milyen tényezőket különítenek el?',
    opts: [
      'Genetikai, örökletes és szerzett tényezőket',
      'Prediszponáló, precipitáló és fenntartó tényezőket',
      'Biológiai, kémiai és fizikai tényezőket',
      'Egyéni, csoportos és társadalmi tényezőket'
    ],
    ans: 1,
    exp: 'A bio-pszicho szociális modell prediszponáló (hajlamosító), precipitáló (sérüléshez vezető) és fenntartó tényezőket különít el.',
    diff: 2
  },
  {
    id: 'gyalap_ch1_27',
    w: 101,
    topic: 'Bio-pszicho szociális modell',
    type: 'tf',
    q: 'A bio-pszicho szociális modell felismeri a pszichológiai, szociális és kulturális faktorok szerepét egy állapot kialakulásában és lefolyásában.',
    ans: true,
    exp: 'Igaz. A bio-pszicho szociális modell felismeri a pszichológiai, szociális, kulturális faktorok szerepét, és kölcsönhatást tételez fel a biológiai, pszichológiai, viselkedési és szociális területek között.',
    diff: 1
  },

  // ─── Összefoglaló / vegyes ────────────────────────────────────────────────

  {
    id: 'gyalap_ch1_28',
    w: 101,
    topic: 'Történeti modellek',
    type: 'match',
    q: 'Párosítsa a fogyatékossági modelleket főbb jellemzőikkel!',
    pairs: [
      { L: 'Jótékonysági modell', R: 'Karitatív cselekedetek, anyagi kompenzáció' },
      { L: 'Orvosi modell', R: 'Fogyatékosok gondozása orvosok feladatköre' },
      { L: 'Szociális modell', R: 'Akadályok a környezetben, nem a személyben' },
      { L: 'Bio-pszicho szociális modell', R: 'Prediszponáló, precipitáló, fenntartó tényezők' }
    ],
    exp: 'Jótékonysági = karitatív; orvosi = orvosi ellátás; szociális = környezeti akadályok; bio-pszicho szociális = komplex biológiai-pszichológiai-társadalmi tényezők.',
    diff: 2
  },
  {
    id: 'gyalap_ch1_29',
    w: 101,
    topic: 'A gyógypedagógia fogalma',
    type: 'short',
    q: 'Sorolja fel a gyógypedagógia négy fő célját és feladatát!',
    keywords: ['felismerni', 'megelőzni', 'korrekció', 'beilleszkedés'],
    exp: 'A négy fő cél: minél előbb felismerni a különleges igényeket, megelőzni az akadályozottságot, elősegíteni a korrekciót és rehabilitációt, könnyebbé tenni a beilleszkedést (család, iskola, munka, társadalom).',
    diff: 2
  },
  {
    id: 'gyalap_ch1_30',
    w: 101,
    topic: 'Ökológiai modell',
    type: 'short',
    q: 'Sorolja fel Bronfenbrenner ökológiai modelljének négy rendszerét!',
    keywords: ['mikrorendszer', 'mezorendszer', 'exorendszer', 'makrorendszer'],
    exp: 'A négy rendszer: mikrorendszer (közvetlen környezet), mezorendszer (mikrorendszerek kapcsolatai), exorendszer (közvetett befolyás), makrorendszer (tágabb társadalmi kontextus).',
    diff: 1
  },
];
