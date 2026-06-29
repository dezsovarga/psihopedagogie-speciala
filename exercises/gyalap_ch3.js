const EXERCISES_GYALAP_CH3 = [
  // ── A család fogalma ────────────────────────────────────────────────────────
  {
    id: 'gyalap_ch3_01',
    w: 103,
    topic: 'A család fogalma',
    type: 'mc',
    q: 'Hogyan határozza meg a szociológia szűk értelemben a „nukleáris" (mag)családot?',
    opts: [
      'Egy férfi, egy nő és valamennyi rokonuk tartós együttélése',
      'Egy férfi, egy nő és leszármazottaik tartós együttélése, házassági vagy vérségi kapcsolattal',
      'Kizárólag a szülőket és a velük élő nem házas gyermekeket foglalja magába',
      'Kommunában élő személyek önkéntes közössége'
    ],
    ans: 2,
    exp: 'A statisztikai/nukleáris fogalom csak a szülőket (vagy egyedülálló szülőt) és a velük együtt élő nem házas gyermekeiket számítja a családhoz; három típusa: házaspár, házaspár gyermekkel, egy szülő gyermekkel.',
    diff: 2
  },
  {
    id: 'gyalap_ch3_02',
    w: 103,
    topic: 'A család fogalma',
    type: 'tf',
    q: 'Kommunikációs elmélet szerint a család egy önszabályzó egyensúlyi rendszer, amelynek egyensúlyát a családi normák szabályozzák.',
    ans: true,
    exp: 'Igaz. Kommunikációs elmélet szerint a család önszabályzó egyensúlyi rendszer, amelynek normái a családi interakciós rendszer kiépülése során alakulnak ki.',
    diff: 1
  },
  {
    id: 'gyalap_ch3_03',
    w: 103,
    topic: 'A család fogalma',
    type: 'mc',
    q: 'Mit jelent a család „tükrözés" funkciója Winnicott szerint?',
    opts: [
      'A szülők megmutatják a gyermeknek a tükörben a saját képét',
      'A szocializáció során a család üzeneteket közvetít a gyermeknek önmagáról, értékéről és helyéről az életben',
      'A szülők tükrözik egymás viselkedési mintáit',
      'A gyermek az iskola tükrén keresztül ismeri meg a világot'
    ],
    ans: 1,
    exp: 'A tükrözés funkció azt jelenti, hogy a szocializáció során a család a gyermek születése pillanatától üzeneteket közvetít a számára önmagáról, értékéről, helyéről az életben – a tükörfunkció fogyatékos gyermek esetén különösen nagy jelentőségű (Winnicott).',
    diff: 2
  },
  {
    id: 'gyalap_ch3_04',
    w: 103,
    topic: 'A család fogalma',
    type: 'fill',
    q: 'A hagyományos értelemben vett, szociológiai fogalomhasználatban a szülőkből és velük élő nem házas gyermekeikből álló kiscsoportot __________ vagy nukleáris családnak nevezzük.',
    ans: 'családmagnak',
    exp: 'A szülőkből (vagy egyedülálló szülőből) és velük élő nem házas gyermekeikből álló egységet családmagnak vagy nukleáris családnak nevezzük.',
    diff: 1
  },
  // ── A család funkciói ───────────────────────────────────────────────────────
  {
    id: 'gyalap_ch3_05',
    w: 103,
    topic: 'A család funkciói',
    type: 'mc',
    q: 'Hány alapvető funkciót sorol fel a fejezet a családdal kapcsolatban?',
    opts: ['8', '10', '12', '14'],
    ans: 2,
    exp: 'A fejezet 12 alapvető funkciót sorol fel, a népesség utánpótlásától a jogi funkcióig.',
    diff: 1
  },
  {
    id: 'gyalap_ch3_06',
    w: 103,
    topic: 'A család funkciói',
    type: 'match',
    q: 'Párosítsa a családi funkció megnevezését és tartalmát!',
    pairs: [
      { L: 'Gondozó, szocializációs funkció', R: 'Gyermekek nevelése, szocializálása' },
      { L: 'Referencia és kontroll csoport', R: 'Viszonyítási alap és szabályozó szerep' },
      { L: 'Tükrözés', R: 'Énkép és értéktudatosítás a gyermekben' },
      { L: 'Jogi funkció', R: 'Jogok és kötelességek szabályozása a tagok között' }
    ],
    exp: 'A négy megnevezett funkció: gondozó/szocializációs, referencia és kontroll csoport, tükrözés (Winnicott), jogi funkció.',
    diff: 2
  },
  // ── Normatív krízisek ───────────────────────────────────────────────────────
  {
    id: 'gyalap_ch3_07',
    w: 103,
    topic: 'Normatív krízisek',
    type: 'order',
    q: 'Helyezze helyes sorrendbe a családi életciklus normatív szakaszait!',
    items: [
      'Az udvarlás periódusa',
      'A házasság korai szakasza',
      'Az első gyermek születése',
      'A gyermekek iskoláskora (középső szakasz)',
      'A gyermekek kirepülése a fészekből',
      'Nyugdíjaskor',
      'Veszteségek korszaka, halál'
    ],
    exp: 'A normatív (előrelátható) életciklus-szakaszok helyes sorrendben: udvarlás → korai házasság → első gyermek születése → iskoláskori középső szakasz → kirepülés → nyugdíjaskor → veszteségek/halál.',
    diff: 2
  },
  {
    id: 'gyalap_ch3_08',
    w: 103,
    topic: 'Normatív krízisek',
    type: 'tf',
    q: 'A normatív krízisek (pl. első gyermek születése) előre nem látható események, amelyekre a família nem tud felkészülni.',
    ans: false,
    exp: 'Hamis. A normatív krízisek éppen hogy előrelátható, az életciklushoz tartozó változások; a valódi (nem normatív) krízisek az előre nem látható események, mint például a sérült gyermek születése.',
    diff: 2
  },
  // ── Valódi krízisek – sérült gyermek születése ──────────────────────────────
  {
    id: 'gyalap_ch3_09',
    w: 103,
    topic: 'Valódi krízisek',
    type: 'mc',
    q: 'Melyik modellt dolgozta ki Reuben Hill a stresszel való megküzdésre, amelyben X a három tényező kölcsönhatásaként jön létre?',
    opts: ['ICF modell', 'ABCX modell', 'Bio-pszicho-szociális modell', 'Bronfenbrenner-féle ökológiai modell'],
    ans: 1,
    exp: 'Reuben Hill ABCX modelljében: A = az eredeti stressz-esemény, B = a család megküzdési mechanizmusa és erőforrásai, C = a stressz-meghatározás, X = a krízis.',
    diff: 2
  },
  {
    id: 'gyalap_ch3_10',
    w: 103,
    topic: 'Valódi krízisek',
    type: 'fill',
    q: 'Reiss (1981) szerint a hatékonyan működő, információgyűjtésre és csapatmunkára képes családtípus neve: __________ família.',
    ans: 'környezet-érzékeny',
    exp: 'Reiss három típusa: környezet-érzékeny (hatékonyan működő), távolság-érzékeny (tagok egymástól függetlenül oldják meg a problémát), konszenzus-érzékeny (teljes egyetértést keres, kohézió fontosabb az optimális megoldásnál).',
    diff: 2
  },
  {
    id: 'gyalap_ch3_11',
    w: 103,
    topic: 'Valódi krízisek',
    type: 'mc',
    q: 'Reiss konfiguráció-koordináció-zártság három dimenziója alapján melyik famiglia-típusnál a „felsőbbrendűség és függetlenség bizonyítása" a legfőbb cél, nem a problémamegoldás?',
    opts: [
      'Környezet-érzékeny família',
      'Konszenzus-érzékeny família',
      'Távolság-érzékeny família',
      'Nukleáris família'
    ],
    ans: 2,
    exp: 'A távolság-érzékeny família tagjai egymástól függetlenül fejezik ki véleményüket, a másik ötletének elfogadását a gyengeség jelének tartják; a probléma megoldása másodlagos, a függetlenség demonstrálása az elsődleges.',
    diff: 3
  },
  {
    id: 'gyalap_ch3_12',
    w: 103,
    topic: 'Valódi krízisek',
    type: 'mc',
    q: 'Melyik tényező NEM szerepel Stoppard (1997) felsorolásában a családi rendszer működését befolyásoló faktorok között?',
    opts: [
      'A sérülés súlyossága és szembetűnő volta',
      'A szülők vallása és világnézete',
      'A gyermek testvéri sorban elfoglalt helye',
      'A szomszédság szociális státusza'
    ],
    ans: 3,
    exp: 'Stoppard a sérülés természetét, a szülők életkorát, a támogatási rendszereket, az iskolázottságot, a vallást, a család anyagi hátterét és a gyermek testvéri helyét sorolja fel – a szomszédság szociális státusza nem szerepel.',
    diff: 3
  },
  {
    id: 'gyalap_ch3_13',
    w: 103,
    topic: 'Valódi krízisek',
    type: 'short',
    q: 'Ismertesse röviden Reiss (1981) három dimenzióját, amelyek a családi interakciók jellemzésére szolgálnak!',
    keywords: ['konfiguráció', 'koordináció', 'zártság'],
    exp: 'Konfiguráció = alkalmazkodás hatékonysága (hozzájárulás a megoldáshoz); koordináció = tagok azonos módú problémamegoldása (kohézió, együttműködés); zártság = a család rugalmassága.',
    diff: 2
  },
  // ── Alkalmazkodási szakaszok ─────────────────────────────────────────────────
  {
    id: 'gyalap_ch3_14',
    w: 103,
    topic: 'Alkalmazkodási szakaszok',
    type: 'mc',
    q: 'Hány alkalmazkodási szakaszt ír le a fejezet a speciális igény elfogadásával kapcsolatban?',
    opts: ['3', '4', '5', '7'],
    ans: 2,
    exp: 'A fejezet 5 szakaszt ír le: 1. Sokk, 2. Emocionális elfogadás, 3. Tagadás–remény, 4. Racionális elfogadás, 5. Konstruktív tevékenység.',
    diff: 1
  },
  {
    id: 'gyalap_ch3_15',
    w: 103,
    topic: 'Alkalmazkodási szakaszok',
    type: 'order',
    q: 'Helyezze sorrendbe a speciális igény elfogadásának 5 szakaszát!',
    items: [
      'Sokk',
      'Emocionális elfogadás',
      'Tagadás – remény',
      'Racionális elfogadás',
      'Konstruktív tevékenység'
    ],
    exp: 'A helyes sorrend: 1. Sokk → 2. Emocionális elfogadás → 3. Tagadás–remény → 4. Racionális elfogadás → 5. Konstruktív tevékenység.',
    diff: 1
  },
  {
    id: 'gyalap_ch3_16',
    w: 103,
    topic: 'Alkalmazkodási szakaszok',
    type: 'mc',
    q: 'Mi jellemzi a sokk szakaszát?',
    opts: [
      'A szülők realisztikusan értékelik a gyermek képességeit és aktívan részt vesznek a fejlesztésben',
      'Természetes védekezési mechanizmus; a szülők tagadják a valóságot, kételkednek a diagnózisban, szégyent és bűntudatot éreznek',
      'Orvostól orvoshoz szaladnak a gyógyulás reményében, harag jelenik meg',
      'A szülő alkudozik a szakemberekkel és a teljes önfeláldozás lesz az életstílusuk'
    ],
    ans: 1,
    exp: 'A sokk természetes védekezési mechanizmus, amely megvéd az azonnal be nem fogadható információktól. Jellemzi: a valóság tagadása, kételkedés a diagnózisban, szégyen, bűntudat, elszigeteltség érzése.',
    diff: 2
  },
  {
    id: 'gyalap_ch3_17',
    w: 103,
    topic: 'Alkalmazkodási szakaszok',
    type: 'mc',
    q: 'Melyik szakaszban keresnek a szülők orvostól orvosig, bűntudatosan kutatnak a múltban, és félnek a jövőtől?',
    opts: [
      '1. szakasz – Sokk',
      '2. szakasz – Emocionális elfogadás',
      '3. szakasz – Tagadás–remény',
      '4. szakasz – Racionális elfogadás'
    ],
    ans: 1,
    exp: 'Az emocionális elfogadás szakaszában a szülők egyik orvostól a másikig szaladnak, bűntudatosan keresik a múltbeli hibákat, és félnek a jövőtől. Ez a gyanakvás időszaka is.',
    diff: 2
  },
  {
    id: 'gyalap_ch3_18',
    w: 103,
    topic: 'Alkalmazkodási szakaszok',
    type: 'tf',
    q: 'A tagadás–remény szakasz általában rövid ideig tart, legfeljebb néhány hétig.',
    ans: false,
    exp: 'Hamis. A tagadás–remény szakasz akár évekig is elhúzódhat, amíg a szülők elfogadják a segítséget.',
    diff: 2
  },
  {
    id: 'gyalap_ch3_19',
    w: 103,
    topic: 'Alkalmazkodási szakaszok',
    type: 'mc',
    q: 'A tagadás–remény szakaszban a szülők haragja elsősorban mire irányul?',
    opts: [
      'Kizárólag saját magukra',
      'Az orvosra, gyógypedagógusra, házastársra, a gyermekre, önmagukra és Istenre egyaránt',
      'Az oktatási rendszerre és az állami intézményekre',
      'A tágabb rokonságra és szomszédságra'
    ],
    ans: 1,
    exp: 'A harag kimondva vagy kimondatlanul irányulhat az orvosra, a gyógypedagógusra, a házastársra, saját gyermekére, önmagára és Istenre is. Ez az igazságtalanság érzéséből fakad.',
    diff: 2
  },
  {
    id: 'gyalap_ch3_20',
    w: 103,
    topic: 'Alkalmazkodási szakaszok',
    type: 'mc',
    q: 'Mit jelent a racionális elfogadás szakasza a szülők számára?',
    opts: [
      'A szülők lemondanak a gyermek fejlesztéséről',
      'A szülők felismerik a gyermek mindennapi szükségleteit és hajlandóak folyamatosan tanulni',
      'A szülők teljesen optimistán tekintenek a jövőbe, és a depresszió már nem tér vissza',
      'A szülők átveszik a koterapeuta szerepét'
    ],
    ans: 1,
    exp: 'A racionális elfogadás azt jelenti, hogy a szülők felismerik a gyermek mindennapi szükségleteit, hajlandóak minden nap valami újat tanulni. Az elfogadás nem jelenti az állandó optimizmust – a depresszió, harag, fájdalom visszatérhetnek.',
    diff: 2
  },
  {
    id: 'gyalap_ch3_21',
    w: 103,
    topic: 'Alkalmazkodási szakaszok',
    type: 'tf',
    q: 'A konstruktív tevékenység szakaszában a szülők már realisztikusan tekintenek gyermekükre és gyorsan képesek új interakciós technikákat, nevelési módszereket elsajátítani.',
    ans: true,
    exp: 'Igaz. Az 5. szakaszban a szülők realisztikusan néznek a gyermekre, aktívan és gyorsan sajátítanak el új interakciós technikákat és nevelési módszereket.',
    diff: 1
  },
  {
    id: 'gyalap_ch3_22',
    w: 103,
    topic: 'Alkalmazkodási szakaszok',
    type: 'mc',
    q: 'A gyermek elutasításának hány megnyilvánulási formáját sorolja fel a fejezet?',
    opts: ['2', '3', '4', '5'],
    ans: 2,
    exp: 'A fejezet 4 megnyilvánulási formát sorol fel: a képességek alábecsülése miatti nulla elvárás; túlzott, elérhetetlen elvárások; az egyik szülő elhagyja a családot; krónikus stresszzavar (ha nem tudják önmaguknak sem bevallani az elutasítást).',
    diff: 3
  },
  {
    id: 'gyalap_ch3_23',
    w: 103,
    topic: 'Alkalmazkodási szakaszok',
    type: 'short',
    q: 'Mi a Montessori-felfogás kulcsmondata a szülő-szakember kapcsolatban, és mit fejez ki?',
    keywords: ['segíts', 'megtegyem magam', 'autonómia'],
    exp: 'A kulcsmondat: „Segíts, hogy megtegyem magam!" – azt fejezi ki, hogy a szülők szakmai tanácsokra csak azért szorulnak, hogy viszonylag autonóm módon hajthassák végre az új feladatokat; a szakember célja az autonómia visszaadása.',
    diff: 2
  },
  // ── Testvérek és tágabb környezet ───────────────────────────────────────────
  {
    id: 'gyalap_ch3_24',
    w: 103,
    topic: 'Testvérek és tágabb környezet',
    type: 'mc',
    q: 'Mi történik szociális szempontból a sérült gyermekkel a testvéri sorban a fejezet szerint?',
    opts: [
      'Automatikusan a rangidős pozícióba kerül',
      'Előbb-utóbb a család szociális szempontból legkisebb gyermekévé válik',
      'Megtartja születési sorrendben elfoglalt helyét',
      'Kikerül a testvéri sorból és különleges státuszt kap'
    ],
    ans: 1,
    exp: 'Ha az egyik gyermek sérült, szociális szempontból előbb-utóbb a família legkisebb gyermekévé válik, tekintet nélkül a születési sorrendre.',
    diff: 2
  },
  {
    id: 'gyalap_ch3_25',
    w: 103,
    topic: 'Testvérek és tágabb környezet',
    type: 'tf',
    q: 'A fogyatékos testvérrel való együttélés az ép testvér személyiségfejlődésére kizárólag negatív hatással van.',
    ans: false,
    exp: 'Hamis. Az együttélés sok szempontból pozitív hatással is lehet (nagyobb empátia, érettebb értékrend), ugyanakkor valós nehézségeket is jelent (háttérbe szorulás, fokozott önállóság iránti elvárás).',
    diff: 1
  },
  // ── Tanácsadás és irányítás ─────────────────────────────────────────────────
  {
    id: 'gyalap_ch3_26',
    w: 103,
    topic: 'Tanácsadás és irányítás',
    type: 'mc',
    q: 'Mi a különbség a tanácsadás és az irányítás között a fejezet szerint?',
    opts: [
      'A tanácsadás orvosi, az irányítás pedagógiai feladat',
      'A tanácsadás a szülő érzéseinek megértését és elfogadását segíti; az irányítás a szülők oktatása, információhiányuk csökkentése',
      'A tanácsadás csak egyéni, az irányítás csoportos formában történik',
      'Nincs különbség, a két fogalom szinonima'
    ],
    ans: 1,
    exp: 'Tanácsadás = a szülő megérti és elfogadja saját érzéseit, viselkedését; az irányítás = a szülők oktatása, információhiányuk csökkentése. A kettő kölcsönösen kiegészíti egymást.',
    diff: 2
  },
  {
    id: 'gyalap_ch3_27',
    w: 103,
    topic: 'Tanácsadás és irányítás',
    type: 'mc',
    q: 'Hány elvet sorol fel a fejezet a tanácsadás és irányítás kapcsán?',
    opts: ['8', '10', '12', '15'],
    ans: 2,
    exp: 'A fejezet 12 elvet sorol fel, a segítség ráerőszakolásának kerülésétől a kis lépések elvének alkalmazásáig.',
    diff: 2
  },
  {
    id: 'gyalap_ch3_28',
    w: 103,
    topic: 'Tanácsadás és irányítás',
    type: 'mc',
    q: 'Pueschel és munkatársai (1976) megfigyelése szerint a szokk utáni diagnózis-közlés kapcsán mire emlékeznek a szülők a legtisztábban?',
    opts: [
      'A diagnózis pontos orvosi tartalmára',
      'A rendelő pontos helyére és időpontjára',
      'Az informátor attitűdjére, hozzáállására',
      'A többi jelen lévő szakember nevére'
    ],
    ans: 2,
    exp: 'Pueschel (1976) szerint a szülők konkrétumokból keveset emlékeznek a sokk miatt, viszont tisztán emlékeznek arra, milyen volt az informátor attitűdje – ezért kulcsfontosságú a szakember empatikus, aktívan figyelő hozzáállása.',
    diff: 2
  },
  {
    id: 'gyalap_ch3_29',
    w: 103,
    topic: 'Tanácsadás és irányítás',
    type: 'tf',
    q: 'A szakember–szülő harmonikus kapcsolat egyik feltétele az empatikus (sokkal inkább, mint szimpatikus) és aktív figyelés.',
    ans: true,
    exp: 'Igaz. A fejezet szerint a szakember részéről az őszinte, empatikus (nem csupán szimpatikus) aktív figyelés és megértés alapvető fontossággal bír.',
    diff: 1
  },
  {
    id: 'gyalap_ch3_30',
    w: 103,
    topic: 'Tanácsadás és irányítás',
    type: 'short',
    q: 'Sorolja fel a szülő–szakember harmonikus kapcsolat legalább négy feltételét!',
    keywords: ['információ', 'attitűd', 'kompetencia', 'flexibilitás'],
    exp: 'A harmonikus kapcsolat feltételei: (1) Információ (korrekt, empatikus, időben nyújtott), (2) A szakember attitűdje (empatikus, aktívan figyelő), (3) Szakmai kompetencia (interperszonális készségek is), (4) Szülői kompetenciaérzés erősítése, (5) Flexibilitás, (6) Ötletek (gyakorlati tanácsok).',
    diff: 3
  }
];
