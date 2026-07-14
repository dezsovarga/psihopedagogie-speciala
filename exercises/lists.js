// Enumeration (list) questions — free-text recall of a set, graded locally with
// a partial-credit checklist. Maintained by hand for ALL worksheets (kept here,
// not in worksheet_N.js, so the generator cannot overwrite them).
//
// Item forms: a plain string, or { label, alt: [...] }. An item counts as
// recalled if the answer contains the label or any alt (case-insensitive
// substring). Optional `need` sets the pass threshold (default = all items).
const EXERCISES_LISTS = [

  // ══════════════════════════════════════════════
  // 1. VÁLTOZAT
  // ══════════════════════════════════════════════
  {
    id:'list_w1_01', w:1, topic:'Komplex értékelés', type:'list', diff:3, need:4,
    q:'Sorolja fel a komplex pszichopedagógiai értékelés öt alapelvét!',
    items:[
      { label:'Komplexitás elve', alt:['komplexitás'] },
      { label:'Individualitás elve', alt:['individualitás', 'egyediség'] },
      { label:'Dinamikusság elve', alt:['dinamik'] },
      { label:'Multidiszciplinaritás elve', alt:['multidiszciplin'] },
      { label:'A család bevonásának elve', alt:['család bevon', 'szülő'] }
    ],
    exp:'Az öt alapelv: komplexitás, individualitás, dinamikusság, multidiszciplinaritás és a család bevonása.'
  },
  {
    id:'list_w1_02', w:1, topic:'Komplex értékelés', type:'list', diff:2, need:4,
    q:'Sorolja fel a CES tanulók komplex értékelésének öt fejlődési területét!',
    items:[
      { label:'Kognitív fejlődés', alt:['kognitív'] },
      { label:'Kommunikáció és nyelvi fejlődés', alt:['kommunikáció', 'nyelvi'] },
      { label:'Szociális-érzelmi fejlődés', alt:['szociális-érzelmi', 'szociális', 'érzelmi'] },
      { label:'Pszichomotoros fejlődés', alt:['pszichomotoros'] },
      { label:'Adaptív viselkedés', alt:['adaptív'] }
    ],
    exp:'Az öt terület: kognitív, kommunikáció/nyelvi, szociális-érzelmi, pszichomotoros fejlődés és adaptív viselkedés.'
  },
  {
    id:'list_w1_03', w:1, topic:'Foglalkozásterápia', type:'list', diff:1, need:3,
    q:'Sorolja fel a foglalkozásterápia három funkcióját!',
    items:[
      { label:'Fejlesztő funkció', alt:['fejlesztő'] },
      { label:'Kompenzáló funkció', alt:['kompenzál'] },
      { label:'Prevenciós funkció', alt:['prevenció', 'megelőz'] }
    ],
    exp:'A három funkció: fejlesztő (képességek erősítése), kompenzáló (sérült funkciók pótlása) és prevenciós (másodlagos fogyatékosság megelőzése).'
  },
  {
    id:'list_w1_04', w:1, topic:'Foglalkozásterápia', type:'list', diff:2, need:3,
    q:'Sorolja fel a foglalkozásterápiás folyamat három szakaszát!',
    items:[
      { label:'Értékelési szakasz', alt:['értékelés'] },
      { label:'Tervezési és intervenciós szakasz', alt:['tervezés', 'intervenció'] },
      { label:'Értékelési és lezárási szakasz', alt:['lezárás', 'monitoroz'] }
    ],
    exp:'A három szakasz: értékelési (állapotfelmérés), tervezési-intervenciós (egyéni terv, megvalósítás) és értékelési-lezárási (monitorozás, dokumentálás).'
  },
  {
    id:'list_w1_05', w:1, topic:'Pszichomotorika', type:'list', diff:2, need:4,
    q:'Sorolja fel a pszichomotorika négy összetevőjét!',
    items:[
      { label:'Testséma', alt:['test séma'] },
      { label:'Térbeli tájékozódás', alt:['térbeli'] },
      { label:'Időbeli tájékozódás', alt:['időbeli'] },
      { label:'Lateralitás', alt:['domináns oldal'] }
    ],
    exp:'A négy összetevő: testséma, térbeli tájékozódás, időbeli tájékozódás és lateralitás.'
  },
  {
    id:'list_w1_06', w:1, topic:'PIP', type:'list', diff:3, need:4,
    q:'Sorolja fel az egyéni intervenciós terv (PIP) hat lényeges elemét!',
    items:[
      { label:'Jelenlegi funkcionális szint', alt:['funkcionális szint', 'erősségek és nehézségek'] },
      { label:'Hosszú távú célok', alt:['hosszú távú'] },
      { label:'Rövid távú célok (lépések)', alt:['rövid távú'] },
      { label:'Alkalmazott módszerek és eszközök', alt:['módszer', 'eszköz'] },
      { label:'Felelős személyek és szolgáltatások', alt:['felelős', 'szolgáltatás'] },
      { label:'Értékelési eljárás és időpont', alt:['értékelési eljárás', 'felülvizsgálat'] }
    ],
    exp:'A hat elem: jelenlegi funkcionális szint, hosszú távú célok, rövid távú célok, módszerek/eszközök, felelős személyek/szolgáltatások, értékelési eljárás/időpont.'
  },

  // ══════════════════════════════════════════════
  // 2. VÁLTOZAT
  // ══════════════════════════════════════════════
  {
    id:'list_w2_01', w:2, topic:'Inkluzív oktatás', type:'list', diff:2, need:3,
    q:'Sorolja fel az integrált/inkluzív oktatás négy alapelvét!',
    items:[
      { label:'Az egyenlő hozzáférés elve', alt:['egyenlő hozzáférés', 'hozzáférés'] },
      { label:'A sokféleség tiszteletének elve', alt:['sokféleség', 'sokszínűség'] },
      { label:'A részvétel és befogadás elve', alt:['részvétel', 'befogadás'] },
      { label:'Az együttműködés elve', alt:['együttműköd'] }
    ],
    exp:'A négy alapelv: egyenlő hozzáférés, a sokféleség tisztelete, részvétel és befogadás, valamint együttműködés.'
  },
  {
    id:'list_w2_02', w:2, topic:'Utazótanár', type:'list', diff:3, need:4,
    q:'Sorolja fel az utazó és támogató tanár öt alapvető feladatát!',
    items:[
      { label:'Pszichopedagógiai értékelés és tanácsadás', alt:['értékelés', 'tanácsadás'] },
      { label:'Egyéni fejlesztési tervezés (PIP)', alt:['fejlesztési tervezés', 'pip'] },
      { label:'Közvetlen fejlesztő munka', alt:['fejlesztő munka', 'fejlesztő foglalkozás'] },
      { label:'Együttműködés a pedagógussal', alt:['pedagógus', 'együttműköd'] },
      { label:'Kapcsolattartás a családdal', alt:['család', 'szülő'] }
    ],
    exp:'Az öt feladat: pszichopedagógiai értékelés/tanácsadás, egyéni fejlesztési tervezés, közvetlen fejlesztő munka, együttműködés a pedagógussal, kapcsolattartás a családdal.'
  },
  {
    id:'list_w2_03', w:2, topic:'Demutizálás', type:'list', diff:2, need:3,
    q:'Sorolja fel a demutizálás három lehetséges kommunikációs módszerét!',
    items:[
      { label:'Orális-auditív módszer', alt:['orális', 'auditív'] },
      { label:'Jelnyelv', alt:['jelnyelv'] },
      { label:'Totális kommunikáció', alt:['totális'] }
    ],
    exp:'A három módszer: orális-auditív (maradék hallás + szájról olvasás), jelnyelv és totális kommunikáció (több csatorna együtt).'
  },
  {
    id:'list_w2_04', w:2, topic:'Siketvakság', type:'list', diff:2, need:3,
    q:'Sorolja fel a siketvak személyek három hozzáférhető kommunikációs formáját!',
    items:[
      { label:'Tapintásos (taktilis) jelnyelv', alt:['tapintásos jelnyelv', 'taktilis'] },
      { label:'Lorm-ábécé', alt:['lorm'] },
      { label:'Braille-írás és tapintásos szimbólumok', alt:['braille', 'dombornyom'] }
    ],
    exp:'A három forma: tapintásos (taktilis) jelnyelv, Lorm-ábécé (tenyérírás) és Braille-írás/tapintásos szimbólumok.'
  },
  {
    id:'list_w2_05', w:2, topic:'Olvasás-írás', type:'list', diff:3, need:4,
    q:'Sorolja fel az olvasás-írás tanulásának öt perceptív-motoros vagy nyelvi előfeltételét!',
    items:[
      { label:'Vizuális diszkrimináció', alt:['vizuális'] },
      { label:'Auditív diszkrimináció / fonológiai tudatosság', alt:['auditív', 'fonológiai'] },
      { label:'Lateralitás és irányvétel', alt:['lateralitás', 'irányvétel'] },
      { label:'Finommotoros készségek', alt:['finommotor'] },
      { label:'Szókincs és szóbeli kifejezőképesség', alt:['szókincs', 'kifejező'] }
    ],
    exp:'Az öt előfeltétel: vizuális diszkrimináció, auditív diszkrimináció/fonológiai tudatosság, lateralitás/irányvétel, finommotoros készségek, szókincs/szóbeli kifejezőképesség.'
  },
  {
    id:'list_w2_06', w:2, topic:'Olvasás-írás', type:'list', diff:2, need:3,
    q:'Sorolja fel az olvasás-írás elsajátításának három szakaszát!',
    items:[
      { label:'Előábécés (logografikus) szakasz', alt:['logografikus', 'előábécés', 'globális'] },
      { label:'Ábécés (alfabetikus) szakasz', alt:['alfabetikus', 'betű-hang'] },
      { label:'Ábécé utáni (ortografikus) szakasz', alt:['ortografikus', 'ábécé utáni', 'szókép'] }
    ],
    exp:'A három szakasz: előábécés (logografikus), ábécés (alfabetikus, betű-hang megfeleltetés) és ábécé utáni (ortografikus, szóképes olvasás).'
  },

  // ══════════════════════════════════════════════
  // 3. VÁLTOZAT
  // ══════════════════════════════════════════════
  {
    id:'list_w3_01', w:3, topic:'Autizmus', type:'list', diff:2, need:3,
    q:'Sorolja fel az autizmus spektrum három fő jellemzőjét!',
    items:[
      { label:'Szociális kommunikáció és interakció nehézségei', alt:['szociális kommunikáció', 'interakció'] },
      { label:'Korlátozott, ismétlődő viselkedés és érdeklődés', alt:['korlátozott', 'ismétlődő', 'rutin', 'rituálé'] },
      { label:'Szenzoros feldolgozás eltérései', alt:['szenzoros'] }
    ],
    exp:'A három jellemző: szociális kommunikáció/interakció nehézségei, korlátozott/ismétlődő viselkedés és érdeklődés, szenzoros feldolgozás eltérései.'
  },
  {
    id:'list_w3_02', w:3, topic:'ADHD', type:'list', diff:1, need:3,
    q:'Sorolja fel az ADHD három fő jellemzőjét!',
    items:[
      { label:'Figyelmetlenség', alt:['figyelmetlen', 'figyelemhiány'] },
      { label:'Hiperaktivitás', alt:['hiperaktiv'] },
      { label:'Impulzivitás', alt:['impulziv'] }
    ],
    exp:'A három jellemző: figyelmetlenség, hiperaktivitás és impulzivitás.'
  },
  {
    id:'list_w3_03', w:3, topic:'Viselkedéselemzés', type:'list', diff:3, need:3,
    q:'Sorolja fel a problémás viselkedés négy lehetséges funkcióját (FBA)!',
    items:[
      { label:'Figyelem elérése', alt:['figyelem'] },
      { label:'Tárgy vagy tevékenység elérése', alt:['tárgy', 'tevékenység elérés'] },
      { label:'Kellemetlenség elkerülése', alt:['elkerül', 'menekül'] },
      { label:'Szenzoros stimuláció (öningerlés)', alt:['szenzoros', 'öningerlés', 'stimul'] }
    ],
    exp:'A négy funkció: figyelem elérése, tárgy/tevékenység elérése, kellemetlenség elkerülése, szenzoros stimuláció (öningerlés).'
  },
  {
    id:'list_w3_04', w:3, topic:'Autizmus', type:'list', diff:2, need:3,
    q:'Sorolja fel az autizmus spektrumzavarral élő tanulóknál alkalmazott négy jól ismert módszert!',
    items:[
      { label:'ABA (alkalmazott viselkedéselemzés)', alt:['aba', 'viselkedéselemzés'] },
      { label:'TEACCH (strukturált tanítás)', alt:['teacch', 'strukturált tanítás'] },
      { label:'PECS (képcsere kommunikáció)', alt:['pecs', 'képcsere'] },
      { label:'Szociális narratívák', alt:['szociális történet', 'social stor', 'narratíva'] }
    ],
    exp:'A négy módszer: ABA (viselkedéselemzés), TEACCH (strukturált tanítás), PECS (képcsere) és szociális narratívák.'
  },
  {
    id:'list_w3_05', w:3, topic:'Kognitív stimuláció', type:'list', diff:2, need:4,
    q:'Sorolja fel az öt szenzoros-perceptív fejlesztési területet!',
    items:[
      { label:'Vizuális percepció', alt:['vizuális'] },
      { label:'Auditív percepció', alt:['auditív'] },
      { label:'Taktilis-kinesztetikus percepció', alt:['taktilis', 'kinesztetikus', 'tapintás'] },
      { label:'Térbeli és időbeli tájékozódás', alt:['térbeli', 'időbeli', 'tájékozódás'] },
      { label:'Testséma és lateralitás', alt:['testséma', 'lateralitás'] }
    ],
    exp:'Az öt terület: vizuális, auditív, taktilis-kinesztetikus percepció, térbeli/időbeli tájékozódás, testséma/lateralitás.'
  },
  {
    id:'list_w3_06', w:3, topic:'Logikai-matematikai', type:'list', diff:2, need:3,
    q:'Sorolja fel a négy logikai-matematikai alapfogalmat!',
    items:[
      { label:'Osztályozás', alt:['osztályoz', 'csoportosít'] },
      { label:'Sorozatalkotás (szeriálás)', alt:['sorozat', 'szeriál'] },
      { label:'Megfeleltetés (bijekció)', alt:['megfeleltetés', 'bijekció'] },
      { label:'Megmaradás elve', alt:['megmaradás'] }
    ],
    exp:'A négy alapfogalom: osztályozás, sorozatalkotás (szeriálás), megfeleltetés (bijekció) és a megmaradás elve.'
  },

  // ══════════════════════════════════════════════
  // 4. VÁLTOZAT
  // ══════════════════════════════════════════════
  {
    id:'list_w4_01', w:4, topic:'Pszichopedagógia', type:'list', diff:2, need:3,
    q:'Sorolja fel azt a négy társtudományt, amellyel a pszichopedagógia specialis szorosan kapcsolódik!',
    items:[
      { label:'Pszichológia', alt:['pszichológ'] },
      { label:'Orvostudomány (medicina)', alt:['orvos', 'medicina'] },
      { label:'Szociológia és szociális munka', alt:['szociológia', 'szociális munka'] },
      { label:'Logopédia', alt:['logopéd'] }
    ],
    exp:'A négy társtudomány: pszichológia, orvostudomány, szociológia/szociális munka és logopédia.'
  },
  {
    id:'list_w4_02', w:4, topic:'Pszichopedagógia', type:'list', diff:3, need:3,
    q:'Sorolja fel a pszichopedagógia specialis négy alapvető feladatát!',
    items:[
      { label:'Megismerő-értékelő feladat', alt:['megismerő', 'értékelő', 'értékelés'] },
      { label:'Tervező és intervenciós feladat', alt:['tervező', 'intervenció', 'pip'] },
      { label:'Megelőző feladat', alt:['megelőz', 'prevenció'] },
      { label:'Kutatás és szakmaközi együttműködés', alt:['kutatás', 'együttműköd'] }
    ],
    exp:'A négy feladat: megismerő-értékelő, tervező-intervenciós, megelőző, valamint kutatás és szakmaközi együttműködés.'
  },
  {
    id:'list_w4_03', w:4, topic:'Integrált terápia', type:'list', diff:3, need:3,
    q:'Sorolja fel a komplex, integrált oktatási terápia négy terápiás modulját!',
    items:[
      { label:'Kognitív stimulációs és tanulástámogató modul', alt:['kognitív', 'tanulástámogat'] },
      { label:'Kommunikációs és logopédiai modul', alt:['kommunikáció', 'logopéd'] },
      { label:'Pszichomotoros és foglalkozásterápiás modul', alt:['pszichomotoros', 'foglalkozásterápi'] },
      { label:'Szocioemocionális és viselkedéstámogató modul', alt:['szocioemocionális', 'viselkedéstámogat', 'érzelmi'] }
    ],
    exp:'A négy modul: kognitív stimulációs/tanulástámogató, kommunikációs/logopédiai, pszichomotoros/foglalkozásterápiás, szocioemocionális/viselkedéstámogató.'
  },
  {
    id:'list_w4_04', w:4, topic:'Artikulációs terápia', type:'list', diff:3, need:4,
    q:'Sorolja fel az artikulációs zavar terápiájának öt szakaszát!',
    items:[
      { label:'Előkészítő szakasz', alt:['előkészít'] },
      { label:'Hangkialakítási szakasz', alt:['hangkialakítás', 'hangképzés', 'hang kialakít'] },
      { label:'Rögzítési szakasz', alt:['rögzít'] },
      { label:'Differenciálási szakasz', alt:['differenciál'] },
      { label:'Automatizálási szakasz', alt:['automatizál'] }
    ],
    exp:'Az öt szakasz: előkészítő, hangkialakítási, rögzítési, differenciálási és automatizálási szakasz.'
  },
  {
    id:'list_w4_05', w:4, topic:'Oktatási eszközök', type:'list', diff:2, need:3,
    q:'Nevezzen meg három speciális oktatási eszközcsoportot, amelyet SNI/CES tanulók fejlesztésében alkalmaznak!',
    items:[
      { label:'Kommunikációs táblák / PECS-kártyák', alt:['kommunikációs tábla', 'pecs', 'képkártya'] },
      { label:'Érzékszervi integrációs eszközök', alt:['érzékszervi', 'szenzoros', 'súlyozott takaró'] },
      { label:'Adaptált írástámogató eszközök', alt:['írástámogató', 'ceruzafogó', 'adaptált író'] }
    ],
    exp:'A három eszközcsoport: kommunikációs táblák/PECS, érzékszervi integrációs eszközök és adaptált írástámogató eszközök.'
  },

  // ══════════════════════════════════════════════
  // 5. VÁLTOZAT
  // ══════════════════════════════════════════════
  {
    id:'list_w5_01', w:5, topic:'Etiológia', type:'list', diff:1, need:3,
    q:'Sorolja fel az etiológiai tényezők három időszakát (a bekövetkezés ideje szerint)!',
    items:[
      { label:'Prenatális (születés előtti)', alt:['prenatális', 'születés előtt'] },
      { label:'Perinatális (szülés körüli)', alt:['perinatális', 'szülés körüli'] },
      { label:'Posztnatális (születés utáni)', alt:['posztnatális', 'születés utáni'] }
    ],
    exp:'A három időszak: prenatális (születés előtti), perinatális (szülés körüli) és posztnatális (születés utáni).'
  },
  {
    id:'list_w5_02', w:5, topic:'Curriculum', type:'list', diff:3, need:4,
    q:'Sorolja fel a nemzeti curriculum öt összetevőjét!',
    items:[
      { label:'Oktatási célok és kompetenciák', alt:['célok', 'kompetencia'] },
      { label:'Tartalmak', alt:['tartalom', 'tartalmak'] },
      { label:'Módszertani irányelvek', alt:['módszertani', 'módszer'] },
      { label:'Értékelési keretek', alt:['értékelés'] },
      { label:'Időkeret és tantervstruktúra', alt:['időkeret', 'órakeret', 'tantervstruktúra'] }
    ],
    exp:'Az öt összetevő: oktatási célok/kompetenciák, tartalmak, módszertani irányelvek, értékelési keretek, időkeret/tantervstruktúra.'
  },
  {
    id:'list_w5_03', w:5, topic:'Curriculum', type:'list', diff:2, need:3,
    q:'Sorolja fel a speciális curriculum négy sajátosságát!',
    items:[
      { label:'Funkcionális, életszerű tartalmak', alt:['funkcionális', 'életszerű'] },
      { label:'Egyénre szabottság', alt:['egyénre szab', 'individualiz'] },
      { label:'Terápiás elemek integrációja', alt:['terápiás', 'integrác'] },
      { label:'Lassabb tempó és fokozatosság', alt:['lassabb', 'fokozatos', 'ismétlés'] }
    ],
    exp:'A négy sajátosság: funkcionális/életszerű tartalmak, egyénre szabottság (PIP), terápiás elemek integrációja, lassabb tempó/fokozatosság.'
  },
  {
    id:'list_w5_04', w:5, topic:'Operacionalizált cél', type:'list', diff:2, need:3,
    q:'Sorolja fel az operacionalizált cél három kötelező elemét!',
    items:[
      { label:'Megfigyelhető viselkedés', alt:['megfigyelhető', 'viselkedés'] },
      { label:'Feltétel', alt:['feltétel', 'körülmény'] },
      { label:'Teljesítménykritérium', alt:['kritérium', 'teljesítmény'] }
    ],
    exp:'A három elem: megfigyelhető viselkedés, feltétel (körülmények) és teljesítménykritérium.'
  },
  {
    id:'list_w5_05', w:5, topic:'Fejlődési szakaszok', type:'list', diff:2, need:3,
    q:'Sorolja fel a CES gyermek három ontogenetikus fejlődési szakaszát!',
    items:[
      { label:'Csecsemő- és kisgyermekkor (0–3 év, korai fejlesztés)', alt:['csecsemő', 'kisgyermekkor', 'korai fejlesztés'] },
      { label:'Óvodáskor (3–7 év, szocializáció)', alt:['óvodáskor', 'szocializáció'] },
      { label:'Kisiskoláskor (7–12 év, iskolai tanulás)', alt:['kisiskol', 'iskolai tanulás'] }
    ],
    exp:'A három szakasz: csecsemő-/kisgyermekkor (0–3, korai fejlesztés), óvodáskor (3–7, szocializáció), kisiskoláskor (7–12, iskolai tanulás).'
  },

  // ══════════════════════════════════════════════
  // 6. VÁLTOZAT
  // ══════════════════════════════════════════════
  {
    id:'list_w6_01', w:6, topic:'Intellektuális fogyatékosság', type:'list', diff:1, need:3,
    q:'Sorolja fel az adaptív viselkedés három területét!',
    items:[
      { label:'Konceptuális', alt:['fogalmi'] },
      { label:'Szociális', alt:['társas'] },
      { label:'Gyakorlati' }
    ],
    exp:'Az adaptív viselkedés három területe: konceptuális (nyelvi, idő, pénz), szociális (interperszonális készségek, szabálykövetés) és gyakorlati (önellátás, munka, közlekedés).'
  },
  {
    id:'list_w6_02', w:6, topic:'Intellektuális fogyatékosság', type:'list', diff:3, need:4,
    q:'Sorolja fel a komplex értékelés öt szempontját a modern (AAIDD, ICF-alapú) megközelítésben!',
    items:[
      { label:'Intellektuális képességek', alt:['intellektuális', 'kognitív', 'iq'] },
      { label:'Adaptív viselkedés', alt:['adaptív'] },
      { label:'Részvétel, szociális szerepek', alt:['részvétel', 'interakció', 'szociális szerep'] },
      { label:'Egészségi állapot', alt:['egészség'] },
      { label:'Kontextus', alt:['környezet', 'személyes tényez'] }
    ],
    exp:'Az öt szempont: intellektuális képességek, adaptív viselkedés, részvétel/szociális szerepek, egészségi állapot, kontextus.'
  },
  {
    id:'list_w6_03', w:6, topic:'Intellektuális fogyatékosság', type:'list', diff:2, need:4,
    q:'Sorolja fel a tanulási folyamat öt alapelvét intellektuális fogyatékosságú tanulók fejlesztésében!',
    items:[
      { label:'Konkretizálás', alt:['szemléltet'] },
      { label:'Kis lépések', alt:['kis lépés', 'task analysis'] },
      { label:'Ismétlés', alt:['ismétl'] },
      { label:'Transzfer', alt:['átvitel', 'általánosít'] },
      { label:'Megerősítés', alt:['visszajelzés', 'dicséret', 'jutalm'] }
    ],
    exp:'Az öt alapelv: konkretizálás, kis lépések elve, ismétlés, transzfer és megerősítés.'
  },
  {
    id:'list_w6_04', w:6, topic:'Ludoterápia', type:'list', diff:2, need:3,
    q:'Sorolja fel a játék fejlődésének három szakaszát (Piaget nyomán)!',
    items:[
      { label:'Gyakorlójáték (szenzomotoros)', alt:['gyakorló', 'szenzomotoros', 'szenzomotoro'] },
      { label:'Szimbolikus / szerepjáték', alt:['szimbolikus', 'szerepjáték', 'mintha'] },
      { label:'Szabályjáték', alt:['szabály'] }
    ],
    exp:'A három szakasz: gyakorló-/szenzomotoros játék (0–2 év), szimbolikus/szerepjáték (2–7 év), szabályjáték (7 év felett).'
  },
  {
    id:'list_w6_05', w:6, topic:'Didaktikai játék', type:'list', diff:2, need:4,
    q:'Sorolja fel a didaktikai játék négy alkotóelemét!',
    items:[
      { label:'Didaktikai cél', alt:['cél'] },
      { label:'Játékos tartalom', alt:['tartalom', 'elemek'] },
      { label:'Játékszabályok', alt:['szabály'] },
      { label:'Játékos akció (eszközök)', alt:['akció', 'eszköz', 'cselekvés'] }
    ],
    exp:'A négy alkotóelem: didaktikai cél, játékos tartalom, játékszabályok, játékos akció (eszközök, cselekvések).'
  },
  {
    id:'list_w6_06', w:6, topic:'Tanulásszervezés', type:'list', diff:2, need:3,
    q:'Sorolja fel a speciális és integrált oktatás négy fő tanulásszervezési formáját!',
    items:[
      { label:'Egyéni tanulás', alt:['egyéni'] },
      { label:'Kiscsoportos tanulás', alt:['kiscsoport', 'kis csoport'] },
      { label:'Többszintű tanulás', alt:['többszint', 'niveluri', 'differenciált'] },
      { label:'Team-teaching', alt:['team', 'co-teaching', 'páros tanítás', 'predare în echipă'] }
    ],
    exp:'A négy forma: egyéni tanulás, kiscsoportos tanulás, többszintű tanulás és team-teaching.'
  },
  {
    id:'list_w6_07', w:6, topic:'Ludoterápia', type:'list', diff:2, need:3,
    q:'Sorolja fel a ludoterápia három funkcióját a komplex intervencióban!',
    items:[
      { label:'Diagnosztikai funkció', alt:['diagnosztik'] },
      { label:'Terápiás funkció', alt:['terápiás'] },
      { label:'Fejlesztő-oktatási funkció', alt:['fejlesztő', 'oktatási'] }
    ],
    exp:'A három funkció: diagnosztikai (megfigyelés játék közben), terápiás (feszültséglevezetés) és fejlesztő-oktatási (készségfejlesztés).'
  },
  {
    id:'list_w6_08', w:6, topic:'Didaktikai játék', type:'list', diff:2, need:3,
    q:'Sorolja fel a didaktikai játék szervezésének négy lépését!',
    items:[
      { label:'Bevezetés (motiváció)', alt:['bevezet', 'motiváció'] },
      { label:'A szabályok elmagyarázása', alt:['szabály', 'elmagyaráz'] },
      { label:'A játék lebonyolítása', alt:['lebonyolít', 'facilitál'] },
      { label:'Lezárás és értékelés', alt:['lezárás', 'értékelés'] }
    ],
    exp:'A négy lépés: bevezetés (motiváció), a szabályok elmagyarázása, a játék lebonyolítása, lezárás és értékelés.'
  },

  // ══════════════════════════════════════════════
  // 7. VÁLTOZAT
  // ══════════════════════════════════════════════
  {
    id:'list_w7_01', w:7, topic:'Tanulási zavarok', type:'list', diff:1, need:3,
    q:'Sorolja fel a specifikus tanulási zavarok három fő típusát!',
    items:[
      { label:'Diszlexia (olvasás)', alt:['diszlexia'] },
      { label:'Diszgráfia (írás)', alt:['diszgráfia'] },
      { label:'Diszkalkulia (számolás)', alt:['diszkalkulia'] }
    ],
    exp:'A három fő típus: diszlexia (olvasási zavar), diszgráfia (írászavar) és diszkalkulia (számolási zavar).'
  },
  {
    id:'list_w7_02', w:7, topic:'Azonosítás', type:'list', diff:2, need:3,
    q:'Sorolja fel a tanulási zavar azonosításának és komplex értékelésének négy lépését!',
    items:[
      { label:'Észlelés / szűrés', alt:['észlelés', 'szűrés'] },
      { label:'Beutalás és előzetes konzultáció', alt:['beutalás', 'konzultáció', 'cjrae', 'cmbrae'] },
      { label:'Komplex, multidiszciplináris kivizsgálás', alt:['kivizsgálás', 'multidiszciplin', 'komplex'] },
      { label:'Diagnózis és beavatkozási terv (PIP)', alt:['diagnózis', 'pip', 'beavatkozási terv'] }
    ],
    exp:'A négy lépés: észlelés/szűrés, beutalás és konzultáció (CJRAE/CMBRAE), komplex multidiszciplináris kivizsgálás, diagnózis és PIP.'
  },
  {
    id:'list_w7_03', w:7, topic:'Alapfunkciók', type:'list', diff:3, need:4,
    q:'Sorolja fel az iskolai tanuláshoz kapcsolódó öt kognitív alapfunkciót!',
    items:[
      { label:'Fonológiai tudatosság', alt:['fonológiai'] },
      { label:'Munkamemória', alt:['munkamemória'] },
      { label:'Végrehajtó funkciók', alt:['végrehajtó'] },
      { label:'Verbális megértés', alt:['verbális', 'nyelvi megértés'] },
      { label:'Feldolgozási sebesség', alt:['feldolgozási', 'sebesség'] }
    ],
    exp:'Az öt alapfunkció: fonológiai tudatosság, munkamemória, végrehajtó funkciók, verbális megértés, feldolgozási sebesség.'
  },
  {
    id:'list_w7_04', w:7, topic:'Metakogníció', type:'list', diff:2, need:3,
    q:'Sorolja fel a négy metakognitív tanulási stratégiát!',
    items:[
      { label:'Tervezés', alt:['tervezés'] },
      { label:'Önmonitorozás', alt:['önmonitoroz', 'önellenőrzés'] },
      { label:'Önértékelés', alt:['önértékelés'] },
      { label:'Stratégiaválasztás és -váltás', alt:['stratégiaválasztás', 'stratégia'] }
    ],
    exp:'A négy stratégia: tervezés, önmonitorozás, önértékelés, valamint stratégiaválasztás és -váltás.'
  },
  {
    id:'list_w7_05', w:7, topic:'Értékelés', type:'list', diff:3, need:4,
    q:'Sorolja fel az értékelés öt funkcióját!',
    items:[
      { label:'Diagnosztikus funkció', alt:['diagnosztik'] },
      { label:'Prognosztikus funkció', alt:['prognosztik', 'előrejelz'] },
      { label:'Motivációs funkció', alt:['motiváció'] },
      { label:'Szelekciós / minősítő funkció', alt:['szelekció', 'minősít', 'osztályoz'] },
      { label:'Szabályozó / fejlesztő funkció', alt:['szabályozó', 'fejlesztő', 'korrekció'] }
    ],
    exp:'Az öt funkció: diagnosztikus, prognosztikus, motivációs, szelekciós/minősítő, szabályozó/fejlesztő.'
  },
  {
    id:'list_w7_06', w:7, topic:'Értékelés', type:'list', diff:2, need:3,
    q:'Sorolja fel az értékelés három formáját az időzítése (a folyamatban elfoglalt helye) szerint!',
    items:[
      { label:'Kezdő / diagnosztikus értékelés', alt:['kezdő', 'diagnosztikus', 'inițial'] },
      { label:'Formatív / folyamatos értékelés', alt:['formatív', 'folyamatos'] },
      { label:'Szummatív / záró értékelés', alt:['szummatív', 'záró', 'sumativ'] }
    ],
    exp:'Időzítés szerint: kezdő/diagnosztikus, formatív/folyamatos és szummatív/záró értékelés.'
  },
  {
    id:'list_w7_07', w:7, topic:'Értékelés', type:'list', diff:2, need:3,
    q:'Sorolja fel a viszonyítás alapja szerinti három értékelési módot!',
    items:[
      { label:'Kritériumorientált', alt:['kritérium'] },
      { label:'Normaorientált', alt:['norma'] },
      { label:'Egyéni fejlődéshez viszonyított (ipszatív)', alt:['ipszatív', 'egyéni fejlődés', 'saját korábbi'] }
    ],
    exp:'A három mód: kritériumorientált (standardhoz), normaorientált (csoportátlaghoz) és ipszatív (saját korábbi teljesítményhez) viszonyító értékelés.'
  },

  // ─── 8. VÁLTOZAT ──────────────────────────────────────────────────────────
  {
    id:'list_w8_01', w:8, topic:'Etiológia és osztályozás', type:'list', diff:2, need:3,
    q:'Sorolja fel a motoros/neuromotoros fogyatékosság etiológiai és osztályozási szempontjait (legalább hármat)!',
    items:[
      { label:'Az érintettség időpontja (prenatális/perinatális/posztnatális)', alt:['érintettség időpontja', 'prenatális', 'perinatális', 'posztnatális'] },
      { label:'Az érintett terület kiterjedése (mono-/hemi-/di-/quadriplégia)', alt:['kiterjedés', 'monoplégia', 'hemiplégia', 'diplégia', 'quadriplégia', 'tetraplégia'] },
      { label:'Az izomtónus jellege (spasztikus/dyskinetikus/ataxiás)', alt:['izomtónus', 'spasztikus', 'dyskinetikus', 'ataxiás', 'hypotóniás'] },
      { label:'A funkcionális súlyosság (GMFCS I–V.)', alt:['funkcionális súlyosság', 'GMFCS'] },
      { label:'Az etiológiai eredet jellege (genetikai/strukturális/traumás stb.)', alt:['etiológiai eredet', 'genetikai', 'strukturális', 'traumás', 'multifaktoriális'] }
    ],
    exp:'Öt szempont: az érintettség időpontja, az érintett terület kiterjedése, az izomtónus jellege, a funkcionális súlyosság (GMFCS) és az etiológiai eredet jellege.'
  },
  {
    id:'list_w8_02', w:8, topic:'Cerebrális parézis', type:'list', diff:2, need:3,
    q:'Sorolja fel a cerebrális parézis három fő típusát az izomtónus/mozgásmintázat szerint!',
    items:[
      { label:'Spasztikus (fokozott tónus, „ollózó” mozgás)', alt:['spasztikus'] },
      { label:'Dyskinetikus/atetoid (ingadozó tónus, akaratlan mozgások)', alt:['dyskinetikus', 'atetoid'] },
      { label:'Ataxiás (egyensúly- és koordinációzavar)', alt:['ataxiás'] }
    ],
    exp:'A három fő CP-típus: spasztikus, dyskinetikus/atetoid és ataxiás.'
  },
  {
    id:'list_w8_03', w:8, topic:'Családközpontú alapelvek', type:'list', diff:2, need:4,
    q:'Sorolja fel a korai intervenció családközpontú alapelveit (legalább négyet)!',
    items:[
      { label:'A család mint elsődleges partner', alt:['elsődleges partner', 'család mint partner', 'aktív résztvevő'] },
      { label:'Erősségalapú megközelítés', alt:['erősségalapú', 'erőforrás', 'kompetenciákra épít'] },
      { label:'Individualizáció', alt:['individualizáció', 'egyedi kontextus', 'személyre szabott'] },
      { label:'A mindennapi rutinokba ágyazott fejlesztés', alt:['mindennapi rutin', 'rutinokba ágyazott', 'természetes tevékenység'] },
      { label:'Átlátható és folyamatos információmegosztás', alt:['információ', 'tájékoztatás', 'átlátható', 'tájékozott beleegyezés'] }
    ],
    exp:'Öt alapelv: a család mint elsődleges partner, erősségalapú megközelítés, individualizáció, rutinokba ágyazott fejlesztés, és átlátható, folyamatos információmegosztás.'
  },
  {
    id:'list_w8_04', w:8, topic:'Korai intervenciós folyamat', type:'list', diff:3, need:4,
    q:'Sorolja fel a korai intervenciós program lépéseit a felméréstől az újraértékelésig (legalább négyet)!',
    items:[
      { label:'Beutalás/jelzés (referire) és kezdeti szűrés', alt:['beutalás', 'jelzés', 'referire', 'szűrés'] },
      { label:'Komplex felmérés (evaluare inițială)', alt:['komplex felmérés', 'evaluare', 'felmérés'] },
      { label:'Célmeghatározás a családdal közösen', alt:['célmeghatározás', 'célok kitűzése', 'közös cél'] },
      { label:'A beavatkozási/szolgáltatási terv kidolgozása (PSI/PIP)', alt:['terv kidolgozása', 'PSI', 'PIP', 'beavatkozási terv'] },
      { label:'A terv megvalósítása a rutinokba ágyazva', alt:['megvalósítás', 'rutinokba ágyazva'] },
      { label:'Rendszeres újraértékelés és korrekció', alt:['újraértékelés', 'korrekció', 'felülvizsgálat'] }
    ],
    exp:'A hat lépés: 1. beutalás/jelzés, 2. komplex felmérés, 3. közös célmeghatározás, 4. terv kidolgozása (PSI/PIP), 5. megvalósítás a rutinokba ágyazva, 6. újraértékelés és korrekció.'
  },
  {
    id:'list_w8_05', w:8, topic:'Segítő technológia', type:'list', diff:2, need:3,
    q:'Sorolja fel a segítő és hozzáférési technológiák kulcsfogalmait (legalább hármat)!',
    items:[
      { label:'Segítő technológia (tehnologie asistivă)', alt:['segítő technológia', 'tehnologie asistivă'] },
      { label:'Alternatív hozzáférés (kapcsoló, szemkövetés)', alt:['alternatív hozzáférés', 'acces alternativ', 'kapcsoló', 'switch', 'szemkövet'] },
      { label:'Augmentatív és alternatív kommunikáció (AAC)', alt:['AAC', 'augmentatív', 'alternatív kommunikáció'] },
      { label:'Pozicionálás (poziționare)', alt:['pozicionálás', 'poziționare', 'testtartás'] },
      { label:'Környezetvezérlés (control al mediului)', alt:['környezetvezérlés', 'control al mediului'] }
    ],
    exp:'Öt kulcsfogalom: segítő technológia, alternatív hozzáférés, AAC, pozicionálás és környezetvezérlés.'
  },
  {
    id:'list_w8_06', w:8, topic:'Technológiaválasztás', type:'list', diff:3, need:3,
    q:'Sorolja fel a segítő technológia kiválasztásának személy-, feladat- és környezetközpontú szempontjait (legalább hármat)!',
    items:[
      { label:'A tanuló motoros és érzékelési profilja', alt:['motoros profil', 'érzékelési profil', 'megbízható mozgás'] },
      { label:'A kognitív és nyelvi szint', alt:['kognitív szint', 'nyelvi szint'] },
      { label:'A konkrét tevékenység/feladat követelményei', alt:['feladat követelményei', 'tevékenység követelményei'] },
      { label:'A használati környezet jellemzői', alt:['használati környezet', 'osztályterem', 'hordozhatóság'] },
      { label:'A fenntarthatóság (támogatási kapacitás, költség, motiváció)', alt:['fenntarthatóság', 'költség', 'támogatási kapacitás', 'motiváció'] }
    ],
    exp:'Öt szempont: a tanuló motoros/érzékelési profilja, a kognitív-nyelvi szint, a feladat követelményei, a használati környezet és a fenntarthatóság.'
  },

  // ─── 9. VÁLTOZAT ──────────────────────────────────────────────────────────
  {
    id:'list_w9_01', w:9, topic:'Adaptív viselkedés', type:'list', diff:2, need:3,
    q:'Sorolja fel az adaptív viselkedés három területét!',
    items:[
      { label:'Fogalmi (konceptuális) terület', alt:['fogalmi', 'konceptuális', 'nyelv', 'szám- és idő'] },
      { label:'Szociális terület', alt:['szociális', 'társas', 'normák', 'szabályok'] },
      { label:'Gyakorlati (praktikus) terület', alt:['gyakorlati', 'praktikus', 'önkiszolgálás', 'életvezetés'] }
    ],
    exp:'A három terület: fogalmi (konceptuális), szociális és gyakorlati (praktikus).'
  },
  {
    id:'list_w9_02', w:9, topic:'Kognitív sajátosságok', type:'list', diff:3, need:4,
    q:'Sorolja fel azokat a kognitív területeket, amelyeken fogyatékosságnál sajátosságok jelenhetnek meg (legalább négyet)!',
    items:[
      { label:'Érzékelés', alt:['érzékelés', 'ingerfelvétel'] },
      { label:'Észlelés', alt:['észlelés', 'alak-háttér', 'téri'] },
      { label:'Figyelem', alt:['figyelem'] },
      { label:'Emlékezet', alt:['emlékezet', 'memória'] },
      { label:'Gondolkodás', alt:['gondolkodás', 'elvont', 'általánosít'] },
      { label:'Végrehajtó funkciók', alt:['végrehajtó', 'tervezés', 'gátlás', 'önmonitorozás'] }
    ],
    exp:'Az érintett területek: érzékelés, észlelés, figyelem, emlékezet, gondolkodás és végrehajtó funkciók.'
  },
  {
    id:'list_w9_03', w:9, topic:'Védőfaktorok', type:'list', diff:2, need:3,
    q:'Sorolja fel a személyiségfejlődést támogató erősség- vagy védőfaktorokat (legalább hármat)!',
    items:[
      { label:'Biztonságos, elfogadó családi kötődés', alt:['családi kötődés', 'család', 'kötődés'] },
      { label:'Korai, jól illeszkedő szakmai támogatás', alt:['korai támogatás', 'korai intervenció', 'szakmai támogatás'] },
      { label:'Pozitív kortárskapcsolatok és befogadó környezet', alt:['kortárskapcsolat', 'befogadó', 'kortárs'] },
      { label:'Erősségekre épülő, sikerélményt biztosító tevékenységek', alt:['erősség', 'sikerélmény', 'érdeklődés', 'önhatékonyság'] }
    ],
    exp:'Négy védőfaktor: biztonságos családi kötődés, korai szakmai támogatás, pozitív kortárskapcsolatok, és az erősségekre épülő, sikerélményt adó tevékenységek.'
  },
  {
    id:'list_w9_04', w:9, topic:'AAC felmérése', type:'list', diff:3, need:4,
    q:'Sorolja fel az AAC felmérésének és kiválasztásának lépéseit (legalább négyet)!',
    items:[
      { label:'Többforrású felmérés', alt:['többforrású', 'jelenlegi formák', 'megfigyelés', 'interjú'] },
      { label:'A motoros, érzékelési és kognitív képességek felmérése', alt:['motoros', 'érzékelési', 'kognitív', 'csatorna'] },
      { label:'A kommunikációs célok és partnerek azonosítása', alt:['célok', 'partnerek', 'üzenettípus'] },
      { label:'Az eszköz/rendszer kipróbálása valós helyzetekben (trial)', alt:['kipróbálás', 'trial', 'tesztelés'] },
      { label:'Döntés, bevezetés és folyamatos felülvizsgálat', alt:['döntés', 'bevezetés', 'felülvizsgálat', 'újraértékelés'] }
    ],
    exp:'Az öt lépés: többforrású felmérés, a képességek felmérése, a célok/partnerek azonosítása, kipróbálás valós helyzetekben, döntés-bevezetés-felülvizsgálat.'
  },
  {
    id:'list_w9_05', w:9, topic:'Kommunikációs partneri stratégiák', type:'list', diff:3, need:3,
    q:'Sorolja fel a kommunikációspartneri stratégiákat (legalább hármat)!',
    items:[
      { label:'Várakozás és tér biztosítása a válaszadásra', alt:['várakozás', 'válaszidő', 'kommunikációs idő'] },
      { label:'Modellezés (aided language stimulation)', alt:['modellezés', 'aided language', 'mintaadás'] },
      { label:'Nyitott kérdések és választási lehetőségek felkínálása', alt:['nyitott kérdés', 'választási lehetőség', 'választás'] },
      { label:'A kommunikációs kezdeményezések azonnali megerősítése', alt:['megerősítés', 'kezdeményezés megerősítése'] },
      { label:'A tanuló kommunikációs csatornájának elfogadása', alt:['csatorna elfogadása', 'ráhangolódás'] }
    ],
    exp:'Öt stratégia: várakozás/válaszidő, modellezés, nyitott kérdések, a kezdeményezések megerősítése, és a tanuló csatornájának elfogadása.'
  },
  {
    id:'list_w9_06', w:9, topic:'Esettanulmány', type:'list', diff:3, need:4,
    q:'Sorolja fel az esettanulmány módszer lépéseit (legalább négyet)!',
    items:[
      { label:'Az eset kiválasztása és bemutatása', alt:['eset kiválasztása', 'bemutatás'] },
      { label:'Adatgyűjtés és többforrású információszerzés', alt:['adatgyűjtés', 'információszerzés'] },
      { label:'A kulcskérdés/probléma azonosítása', alt:['kulcskérdés', 'probléma azonosítása'] },
      { label:'Többszempontú elemzés', alt:['elemzés', 'többszempontú', 'nézőpont'] },
      { label:'Megoldási alternatívák/ajánlások kidolgozása', alt:['megoldási alternatíva', 'ajánlás'] },
      { label:'Szintézis, következtetések és reflexió', alt:['szintézis', 'következtetés', 'reflexió', 'tanulság'] }
    ],
    exp:'A hat lépés: az eset kiválasztása, adatgyűjtés, a kulcskérdés azonosítása, többszempontú elemzés, megoldási alternatívák kidolgozása, szintézis és reflexió.'
  }
];
