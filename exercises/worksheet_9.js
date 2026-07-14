// Worksheet 9 exercises — Pszichofizikai/társadalmi fejlődés · Kommunikáció individualizálása · Esettanulmány és problémamegoldó tanulás
// Source: gyakorlas_9_megoldasok_cl.docx
const EXERCISES_W9 = [
  // ─── I. TÉTEL – Pszichofizikai és társadalmi fejlődés ──────────────────────
  {
    id:'w9_01', w:9, topic:'Pszichofizikai fejlődés', type:'mc', diff:2,
    q:'Mi jellemzi a pszichofizikai fejlődést a definíció szerint?',
    opts:[
      'Kizárólag a testi (motoros, szenzoros) funkciók érése, a pszichés folyamatoktól függetlenül',
      'A testi és a pszichés funkciók egymással szoros kölcsönhatásban zajló, minőségi és mennyiségi átalakulása',
      'A személyiség változatlan, statikus állapota',
      'Csak a kognitív képességek életkori növekedése'
    ],
    ans:1,
    exp:'A pszichofizikai fejlődés a személy testi (motoros, szenzoros, biológiai érési) és pszichés (kognitív, érzelmi, szociális) funkcióinak életkorral együtt járó, egymással szoros kölcsönhatásban zajló, minőségi és mennyiségi átalakulása.'
  },
  {
    id:'w9_02', w:9, topic:'Kompenzáció', type:'mc', diff:2,
    q:'Mit jelent a kompenzáció fogalma?',
    opts:[
      'A sérült funkció végleges elvesztése minden helyettesítés nélkül',
      'A sérült vagy korlátozottan működő funkció helyettesítése vagy kiegészítése más, épen maradt funkciókkal vagy alternatív stratégiákkal',
      'A fogyatékosság teljes gyógyítása gyógyszerrel',
      'A tanuló minden feladat alóli felmentése'
    ],
    ans:1,
    exp:'A kompenzáció az a pszichés és funkcionális folyamat, amelynek során a sérült vagy korlátozottan működő funkciót más, épen maradt funkciók vagy alternatív stratégiák helyettesítik vagy egészítik ki (pl. a látássérült fokozott tapintási-hallási tájékozódása).'
  },
  {
    id:'w9_03', w:9, topic:'Adaptív működés', type:'tf', diff:2,
    q:'Az adaptív működés a fogalmi, szociális és gyakorlati készségek együttese, amelyeket a személy a mindennapi, önálló életvitelhez alkalmaz.',
    ans:true,
    exp:'Igaz. Az adaptív működés (funcționare adaptativă) azoknak a fogalmi, szociális és gyakorlati készségeknek az együttese, amelyeket a személy a mindennapi, önálló életvitelhez és a környezeti elvárásoknak való megfeleléshez alkalmaz.'
  },
  {
    id:'w9_04', w:9, topic:'Társadalmi részvétel', type:'mc', diff:2,
    q:'Mit jelent a társadalmi részvétel (participare socială) a definíció szerint?',
    opts:[
      'Kizárólag a fizikai jelenlét egy közösségben',
      'A személy tényleges bevonódása és érdemi, értelemmel bíró közreműködése az élet különböző területein',
      'A közösségi eseményektől való távolmaradás',
      'A jogszabályi keret puszta ismerete'
    ],
    ans:1,
    exp:'A társadalmi részvétel a személy tényleges bevonódása és aktív jelenléte az élet különböző területein (oktatás, munka, közösségi élet, kapcsolatok) — nem csupán a fizikai jelenlét, hanem az érdemi, értelemmel bíró közreműködés értelmében.'
  },
  {
    id:'w9_05', w:9, topic:'Személyiség', type:'tf', diff:3,
    q:'Fogyatékosság esetén a személyiséget elsősorban a diagnózis, nem a személyes fejlődéstörténet határozza meg.',
    ans:false,
    exp:'Hamis. A definíció szerint a személyiséget fogyatékosság esetén is elsősorban a személyes fejlődéstörténet, nem a diagnózis határozza meg; a személyiség a biológiai adottságok, a tapasztalatok és a szociális környezet kölcsönhatásában alakul ki.'
  },
  {
    id:'w9_06', w:9, topic:'Kognitív sajátosságok', type:'mc', diff:2,
    q:'Melyik állítás igaz az észlelésre egyes fejlődési zavaroknál (pl. tanulási zavarok)?',
    opts:[
      'Csak akkor nehezített, ha az érzékszervek is sérültek',
      'Az ingerek értelmezése (pl. alak-háttér megkülönböztetés, téri észlelés) ép érzékszervek mellett is nehezített lehet',
      'Az észlelés mindig teljesen ép marad',
      'Kizárólag az elsődleges ingerfelvételt érinti'
    ],
    ans:1,
    exp:'Az észlelés a beérkező ingerek értelmezése (pl. alak-háttér megkülönböztetés, téri észlelés), amely egyes fejlődési zavaroknál (pl. tanulási zavarok) ép érzékszervek mellett is nehezített lehet — szemben az érzékeléssel, amely az elsődleges ingerfelvétel.'
  },
  {
    id:'w9_07', w:9, topic:'Kognitív sajátosságok', type:'match', diff:3,
    q:'Párosítsa a kognitív területet a fogyatékosságnál gyakran megjelenő sajátosságával!',
    pairs:[
      { L:'Figyelem', R:'A fenntartás, megosztás vagy váltás nehézsége (pl. ADHD, autizmus)' },
      { L:'Emlékezet', R:'A mechanikus memória viszonylag ép, a szemantikus szervezés nehezített' },
      { L:'Gondolkodás', R:'Az elvont gondolkodás lassabb, tovább stabilizálódik a konkrét szinten' },
      { L:'Végrehajtó funkciók', R:'Tervezés, gátlás, kognitív rugalmasság és önmonitorozás nehézsége' }
    ],
    exp:'A figyelemnél a fenntartás/megosztás/váltás; az emlékezetnél az ép mechanikus vs. nehezített szemantikus szervezés; a gondolkodásnál a konkrét szinten való hosszabb stabilizálódás; a végrehajtó funkcióknál a tervezés-gátlás-rugalmasság-önmonitorozás nehézsége a jellemző.'
  },
  {
    id:'w9_08', w:9, topic:'Motiváció és érzelmek', type:'mc', diff:2,
    q:'Mit jelent a „tanult tehetetlenség” (learned helplessness)?',
    opts:[
      'A tanuló veleszületett képtelensége a tanulásra',
      'Az ismételt kudarcélmények nyomán kialakuló állapot, amely csökkenti a feladatokba való belefogás hajlandóságát',
      'A túlzott önbizalom egy formája',
      'A figyelem tudatos megosztásának képessége'
    ],
    ans:1,
    exp:'A tanult tehetetlenség az ismételt kudarcélmények következtében kialakuló állapot, amely csökkenti a feladatokba való belefogás hajlandóságát — ezért kulcsfontosságú a sikerélmény tudatos megszervezése.'
  },
  {
    id:'w9_09', w:9, topic:'Motiváció és érzelmek', type:'tf', diff:3,
    q:'Autizmus spektrumzavarnál az érzelmi állapotok eltérő kifejezése az érzelmek hiányát jelenti.',
    ans:false,
    exp:'Hamis. Az affektivitásnál az érzelmi állapotok kifejezése és felismerése egyes kategóriáknál (pl. autizmus spektrumzavar) eltérő mintázatot mutathat, ami nem az érzelmek hiányát, hanem azok másképp történő megnyilvánulását jelenti.'
  },
  {
    id:'w9_10', w:9, topic:'Adaptív viselkedés', type:'match', diff:2,
    q:'Párosítsa az adaptív viselkedés területét a hozzá tartozó példával!',
    pairs:[
      { L:'Fogalmi (konceptuális) terület', R:'Nyelvhasználat, alapvető szám- és időfogalmak alkalmazása' },
      { L:'Szociális terület', R:'Szabályok betartása, mások érzelmi jelzéseinek felismerése' },
      { L:'Gyakorlati (praktikus) terület', R:'Önkiszolgálás, közlekedés, háztartási feladatok' },
      { L:'Adaptív működés célja', R:'Önálló életvitel és a környezeti elvárásoknak való megfelelés' }
    ],
    exp:'A fogalmi terület: nyelv, szám- és időfogalmak; a szociális terület: normák betartása, érzelmi jelzések felismerése; a gyakorlati terület: önkiszolgálás, életvezetés; mindezek célja az önálló életvitel.'
  },
  {
    id:'w9_11', w:9, topic:'Védőfaktorok', type:'mc', diff:2,
    q:'Melyik erősség- vagy védőfaktor támogatja a személyiségfejlődést?',
    opts:[
      'A környezet túlvédő, alulbecsülő attitűdje',
      'Biztonságos, elfogadó családi kötődés, amely stabil érzelmi alapot ad',
      'A kortárskapcsolatok beszűkülése',
      'Az ismételt kudarcélmények halmozása'
    ],
    ans:1,
    exp:'Védőfaktor a biztonságos, elfogadó családi kötődés, amely stabil érzelmi alapot ad a megküzdéshez; további védőfaktorok: korai, jól illeszkedő szakmai támogatás, pozitív kortárskapcsolatok és az erősségekre épülő, sikerélményt biztosító tevékenységek.'
  },
  {
    id:'w9_12', w:9, topic:'Integráció akadályai', type:'mc', diff:3,
    q:'A megoldás szerint mi lehet súlyosabb akadály, mint maga az eredeti károsodás?',
    opts:[
      'A tanuló saját erősségei',
      'A környezet negatív attitűdjei és alacsony elvárásai (stigma, túlvédés, kirekesztés)',
      'A korai intervenció megléte',
      'A befogadó szociális környezet'
    ],
    ans:1,
    exp:'A környezet negatív attitűdjei és alacsony elvárásai (stigma, túlvédés vagy kirekesztés) másodlagos akadályt jelenthetnek, amely súlyosabb is lehet, mint maga az eredeti károsodás.'
  },
  {
    id:'w9_13', w:9, topic:'Integráció akadályai', type:'tf', diff:2,
    q:'A társadalmi részvétel strukturális akadályai nem a személy képességeiből, hanem a környezet felkészületlenségéből fakadnak.',
    ans:true,
    exp:'Igaz. A társadalmi részvétel strukturális akadályai (fizikai, kommunikációs vagy attitűdbeli akadálymentesítés hiánya) nem a személy képességeiből, hanem a környezet felkészületlenségéből fakadnak — ez az akadálymentesítés és az inkluzív szemlélet megerősítésének fő indoka.'
  },

  // ─── II. TÉTEL – A kommunikáció fogyatékosságspecifikus individualizálása ──
  {
    id:'w9_14', w:9, topic:'Hozzáférhető kommunikáció', type:'mc', diff:2,
    q:'Mit jelent a hozzáférhető kommunikáció?',
    opts:[
      'A kommunikáció mindenki számára azonos, egységes formában zajlik',
      'A csatorna, forma és tempó igazodik a személy érzékelési, motoros és kognitív lehetőségeihez',
      'Kizárólag írott szöveget használ',
      'A partner kitalálja az üzenetet a személy helyett'
    ],
    ans:1,
    exp:'A hozzáférhető kommunikáció azt jelenti, hogy a kommunikációs csatorna, forma és tempó igazodik a személy érzékelési, motoros és kognitív lehetőségeihez, így ténylegesen fel tudja fogni és létre tudja hozni az üzeneteket.'
  },
  {
    id:'w9_15', w:9, topic:'Funkcionális kommunikáció', type:'tf', diff:2,
    q:'A funkcionális kommunikáció valós, a mindennapi életben releváns célokat szolgál (igény kifejezése, választás, társas kapcsolattartás), nem elszigetelt gyakorlat.',
    ans:true,
    exp:'Igaz. A funkcionális kommunikáció azt jelenti, hogy a kommunikáció valós, a mindennapi életben releváns célokat szolgál — a személy önrendelkezését és részvételét ténylegesen növelő eszköz, nem elszigetelt gyakorlat.'
  },
  {
    id:'w9_16', w:9, topic:'AAC felmérése', type:'order', diff:3,
    q:'Rendezze sorrendbe az AAC felmérésének és kiválasztásának lépéseit!',
    items:[
      'Többforrású felmérés (jelenlegi formák, szükségletek, kontextusok)',
      'A motoros, érzékelési és kognitív képességek felmérése',
      'A kommunikációs célok és partnerek azonosítása',
      'Az eszköz/rendszer kipróbálása (trial) valós helyzetekben',
      'Döntés, bevezetés és folyamatos felülvizsgálat'
    ],
    exp:'Az öt lépés: 1. többforrású felmérés → 2. a motoros/érzékelési/kognitív képességek felmérése → 3. a célok és partnerek azonosítása → 4. kipróbálás valós helyzetekben → 5. döntés, bevezetés és folyamatos felülvizsgálat.'
  },
  {
    id:'w9_17', w:9, topic:'Kommunikációs partneri stratégiák', type:'mc', diff:3,
    q:'Mit jelent a modellezés (aided language stimulation) mint kommunikációspartneri stratégia?',
    opts:[
      'A partner kitalálja és megelőzi a tanuló üzenetét',
      'A kommunikációs eszköz/szimbólumrendszer folyamatos, a saját beszéddel párhuzamos használata a partner részéről, mintát adva',
      'Kizárólag zárt, igen/nem kérdések feltevése',
      'A tanuló csatornájának mellőzése egy preferált csatorna érdekében'
    ],
    ans:1,
    exp:'A modellezés (aided language stimulation) a kommunikációs eszköz/szimbólumrendszer folyamatos, a saját beszéddel párhuzamos használata a partner részéről, mintát adva a tanulónak.'
  },
  {
    id:'w9_18', w:9, topic:'Kommunikációs partneri stratégiák', type:'tf', diff:2,
    q:'Hatékony partneri stratégia a válaszadásra való várakozás és a kommunikációs idő meghosszabbítása, ahelyett hogy a partner megelőzné az üzenetet.',
    ans:true,
    exp:'Igaz. A várakozás és tér biztosítása a válaszadásra (a kommunikációs idő meghosszabbítása) alapvető partneri stratégia, ahelyett hogy a partner kitalálná és megelőzné az üzenetet.'
  },
  {
    id:'w9_19', w:9, topic:'Kommunikációt támogató környezet', type:'mc', diff:2,
    q:'Melyik elem támogatja a kommunikációt a fizikai és társas környezetben?',
    opts:[
      'Az eszközök csak a „kommunikációs órán” elérhetők',
      'Az eszközök/szimbólumok állandó, kiszámítható elérhetősége minden releváns helyzetben',
      'Magas zajszint és rossz megvilágítás',
      'A kortársak kizárása a kommunikációból'
    ],
    ans:1,
    exp:'A kommunikációt támogató környezet eleme az eszközök/szimbólumok állandó, kiszámítható elérhetősége minden releváns helyzetben (nem csak a „kommunikációs órán”), valamint a csökkentett zajszint, az átlátható tér és a kortársak-felnőttek bevonása.'
  },
  {
    id:'w9_20', w:9, topic:'Kommunikációs fejlődés mutatói', type:'mc', diff:3,
    q:'Melyik megfigyelhető kommunikációs fejlődési mutató?',
    opts:[
      'A felszólításra adott válaszok számának csökkenése',
      'A spontán kezdeményezett kommunikációs megnyilvánulások gyakoriságának növekedése',
      'A kommunikáció beszűkülése egyetlen partnerre',
      'A kifejezett funkciók körének szűkülése'
    ],
    ans:1,
    exp:'Fejlődési mutató a spontán kezdeményezett megnyilvánulások gyakoriságának növekedése, a kifejezett kommunikációs funkciók körének bővülése (kéréstől a tiltakozásig, társalgásig), és a generalizálódás különböző partnerek és helyzetek között.'
  },
  {
    id:'w9_21', w:9, topic:'Fogyatékosságspecifikus adaptáció', type:'match', diff:2,
    q:'Párosítsa a fogyatékossági kategóriát a hozzá illő kommunikációs adaptációval!',
    pairs:[
      { L:'Hallássérülés', R:'Vizuális információ dominanciája, FM-rendszer, szemből való artikuláció' },
      { L:'Autizmus spektrumzavar', R:'Vizuális napirend, konkrét, iróniamentes nyelv, szociális történetek' },
      { L:'Súlyos beszédmotoros zavar', R:'Kapcsolóval vezérelt kommunikációs tábla, kellő válaszidő' },
      { L:'Hozzáférhető kommunikáció', R:'A csatorna, forma és tempó a személyhez igazítása' }
    ],
    exp:'Hallássérülésnél a vizuális dominancia és FM-rendszer; autizmusnál a vizuális napirend és konkrét nyelv; beszédmotoros zavarnál a kapcsolós tábla és válaszidő; a hozzáférhető kommunikáció maga a csatorna/forma/tempó igazítása.'
  },
  {
    id:'w9_22', w:9, topic:'Fogyatékosságspecifikus adaptáció', type:'tf', diff:2,
    q:'Autizmus spektrumzavarnál ajánlott a konkrét, egyértelmű, metaforáktól és iróniától mentes nyelvhasználat.',
    ans:true,
    exp:'Igaz. Autizmus spektrumzavar esetén a konkrét, egyértelmű, metaforáktól és iróniától mentes nyelvhasználat, a vizuális napirend, a vizuális támogatók és az elegendő feldolgozási idő biztosítása az ajánlott adaptáció.'
  },
  {
    id:'w9_23', w:9, topic:'Fogyatékosságspecifikus adaptáció', type:'short', diff:2,
    q:'Nevezze meg röviden, milyen hallókészülék-kompatibilis technológia javítja a hallássérült tanuló számára a beszéd követését az osztályteremben!',
    keywords:['FM'],
    exp:'Az FM-rendszer (vagy más hallókészülék-kompatibilis technológia) alkalmazása javítja a hallássérült tanuló számára a beszéd követését.'
  },

  // ─── III. TÉTEL – Esettanulmány és problémamegoldó tanulás ────────────────
  {
    id:'w9_24', w:9, topic:'Esettanulmány', type:'mc', diff:2,
    q:'Mi jellemzi az esettanulmány (studiu de caz) módszerét?',
    opts:[
      'Egyetlen „helyes” megoldás gyors megtalálása',
      'Egy konkrét, komplex helyzet mélyreható, több szempontú vizsgálata, a hangsúly az elemzésen és a reflektív értelmezésen',
      'Kizárólag elméleti fogalmak memorizálása',
      'A tanulói szerepvállalás teljes mellőzése'
    ],
    ans:1,
    exp:'Az esettanulmány egy konkrét, valós vagy valósághű, komplex helyzet mélyreható, több szempontú vizsgálatára épül; a hangsúly az elemzésen, az összefüggések feltárásán és a reflektív értelmezésen van, nem feltétlenül egyetlen „helyes” megoldás megtalálásán.'
  },
  {
    id:'w9_25', w:9, topic:'Problémamegoldó tanulás', type:'mc', diff:2,
    q:'Mi jellemzi a problémamegoldó tanulást?',
    opts:[
      'Egy jól körülhatárolt probléma megoldására irányul, a hangsúly a megoldási stratégia kidolgozásán és értékelésén, aktív tanulói szereppel',
      'A passzív befogadáson és a reflexió elkerülésén',
      'Egyetlen komplex helyzet többszempontú elemzésén, megoldás nélkül',
      'Kizárólag a pedagógus általi bemutatáson'
    ],
    ans:0,
    exp:'A problémamegoldó tanulás egy konkrét, jól körülhatárolt probléma megoldására irányul, meghatározott célú, gyakran lépésről lépésre strukturált folyamatban; a hangsúly a megoldási stratégia kidolgozásán, kipróbálásán és az eredmény értékelésén van, aktív, cselekvésközpontú tanulói szerepvállalással.'
  },
  {
    id:'w9_26', w:9, topic:'Esettanulmány', type:'order', diff:3,
    q:'Rendezze sorrendbe az esettanulmány módszer lépéseit!',
    items:[
      'Az eset kiválasztása és bemutatása',
      'Adatgyűjtés és többforrású információszerzés',
      'A kulcskérdés/probléma azonosítása',
      'Többszempontú elemzés',
      'Megoldási alternatívák/ajánlások kidolgozása',
      'Szintézis, következtetések és reflexió'
    ],
    exp:'A hat lépés: 1. az eset kiválasztása és bemutatása → 2. adatgyűjtés → 3. a kulcskérdés azonosítása → 4. többszempontú elemzés → 5. megoldási alternatívák kidolgozása → 6. szintézis, következtetések és reflexió.'
  },
  {
    id:'w9_27', w:9, topic:'Módszer előnyei és korlátai', type:'mc', diff:2,
    q:'Melyik az esettanulmány/problémamegoldó tanulás egyik korlátja?',
    opts:[
      'Nem fejleszti a döntéshozatalt',
      'Időigényes módszer, amely gondos előkészítést és rugalmas óraszervezést igényel',
      'Csökkenti a tanulási tartalom relevanciáját',
      'Soha nem igényel adaptációt'
    ],
    ans:1,
    exp:'Korlát, hogy időigényes módszer, amely gondos előkészítést és rugalmas óraszervezést igényel; továbbá egyes SNI-tanulóknál az eset teljes komplexitásában való feldolgozása meghaladhatja a képességszintet megfelelő adaptáció nélkül.'
  },
  {
    id:'w9_28', w:9, topic:'Módszer előnyei és korlátai', type:'tf', diff:2,
    q:'Az esettanulmány növeli a tanulási tartalom relevanciáját és motiváló erejét, mert a tanuló saját tapasztalataihoz kapcsolható helyzetekből indul ki.',
    ans:true,
    exp:'Igaz. Előny, hogy fejleszti a valós élethelyzetekre jellemző gondolkodást és döntéshozatalt, valamint növeli a tartalom relevanciáját és motiváló erejét, mivel konkrét, a tanuló tapasztalataihoz kapcsolható helyzetekből indul ki.'
  },
  {
    id:'w9_29', w:9, topic:'Részvétel értékelése', type:'mc', diff:2,
    q:'Melyik elem tartozik a részvétel értékelésére szolgáló megfigyelési laphoz?',
    opts:[
      'A tanuló magasságának mérése',
      'A bevonódás mértéke (aktív figyelem, kérdezés, hozzászólás)',
      'A tanterem hőmérséklete',
      'A pedagógus életkora'
    ],
    ans:1,
    exp:'A négyelemű megfigyelési lap része a bevonódás mértéke, a kommunikációs hozzájárulás formája, a társakkal való együttműködés és a megoldási/reflexiós folyamatban nyújtott önállóság szintje.'
  },
  {
    id:'w9_30', w:9, topic:'Etikai és pedagógiai követelmények', type:'mc', diff:3,
    q:'Melyik etikai követelmény vonatkozik a valós személyeken alapuló esettanulmányra?',
    opts:[
      'A szereplők valós nevének kötelező feltüntetése',
      'Az anonimitás és az érintettek/családok tájékozott beleegyezésének biztosítása',
      'A megbélyegző megfogalmazások bátorítása',
      'A tájékoztatás mellőzése'
    ],
    ans:1,
    exp:'Ha az esettanulmány valós személyek helyzetén alapul, biztosítani kell az anonimitást és az érintettek/családok tájékozott beleegyezését, továbbá kerülni kell a megbélyegző, sztereotipizáló eseteket és megfogalmazásokat.'
  },
  {
    id:'w9_31', w:9, topic:'Etikai és pedagógiai követelmények', type:'tf', diff:2,
    q:'Pedagógiai követelmény, hogy világos, előre ismertetett strukturális keretet (lépések, időbeosztás, elvárt kimenet) kell nyújtani, hogy a nyitott jelleg ne okozzon szorongást.',
    ans:true,
    exp:'Igaz. Pedagógiai követelmény a nehézségi szint és a nyelvi komplexitás csoporthoz igazítása, valamint a világos, előre ismertetett strukturális keret nyújtása, hogy a kevésbé strukturált jelleg ne okozzon bizonytalanságot vagy szorongást.'
  },
  {
    id:'w9_32', w:9, topic:'Alkalmazás CES-tanulóknál', type:'mc', diff:3,
    q:'Miért alkalmazható jól az esettanulmány autizmus spektrumzavarral élő tanulónál?',
    opts:[
      'Mert kerüli a társas helyzetek elemzését',
      'Mert a társas helyzetek explicit, strukturált, lépésenkénti elemzését teszi lehetővé, ami spontán módon nehezebben alakul ki',
      'Mert kizárólag elvont fogalmakkal dolgozik',
      'Mert nem igényel vizuális támogatást'
    ],
    ans:1,
    exp:'Az esettanulmány jól alkalmazható a társas helyzetek explicit, strukturált elemzésére, ami autizmusnál gyakran spontán nehezebben alakul ki (mások szándékának, nézőpontjának tudatos, lépésenkénti végiggondolása), vizuálisan támogatott kártyákkal és irányított kérdésekkel.'
  },
  {
    id:'w9_33', w:9, topic:'Alkalmazás CES-tanulóknál', type:'fill', diff:2,
    q:'A készség több helyzetben és helyszínen való gyakoroltatásának célja a ________ (a készség átvitele más kontextusokra) elősegítése.',
    ans:'generalizáció',
    exp:'A funkcionális probléma lépéssorát hasonló mindennapi helyzetekben is gyakorolják a generalizáció (a készség átvitele más kontextusokra) érdekében.'
  },
  {
    id:'w9_34', w:9, topic:'Kommunikáció', type:'short', diff:2,
    q:'Nevezze meg röviden azt a partneri stratégiát, amelyben a partner nyitott kérdéseket és választási lehetőségeket kínál a zárt, igen/nem kérdések helyett!',
    keywords:['választ'],
    exp:'A nyitott kérdések és választási lehetőségek felkínálása (zárt, igen/nem kérdések helyett, ahol ez a tanuló szintjének megfelel) az egyik kommunikációspartneri stratégia.'
  },
  {
    id:'w9_35', w:9, topic:'Inkluzív tervezés', type:'tf', diff:2,
    q:'Egy közös tevékenységnél (pl. „Napi hangulatkör”) a keret azonos maradhat, miközben csak a kifejezés formája és eszköze adaptálódik — így a tevékenység valóban inkluzív, nem párhuzamos, elkülönített gyakorlat.',
    ans:true,
    exp:'Igaz. A közös keret (pl. napi hangulat megosztása) minden tanuló számára azonos marad, csak a kifejezés formája és eszköze adaptálódik — ezzel a tevékenység valóban inkluzív, nem párhuzamos, elkülönített gyakorlat.'
  }
];
