const form = document.getElementById("careerForm");
const results = document.getElementById("results");

const btnFR = document.getElementById("btnFR");
const btnAR = document.getElementById("btnAR");

const i18n = {
  fr: {
    dir: "ltr",
    title: "Carrière Maroc",
    subtitle: "Un test simple pour aider les étudiants marocains à choisir une filière et une carrière.",
    test_title: "Test d’orientation (30 secondes)",
    test_desc: "Réponds à ces questions pour obtenir 3 suggestions adaptées.",
    q1: "Quel domaine t’intéresse le plus ?",
    q2: "Ta matière la plus forte ?",
    q3: "Tu préfères quel style d’études ?",
    submit: "Voir mes suggestions",
    results_title: "Résultats",
    results_hint: "Remplis le test et clique sur “Voir mes suggestions”.",
    paths_title: "Parcours d’études au Maroc",
    paths_desc: "Clique sur un parcours pour voir les conditions, la durée et les débouchés.",
    contact_title: "Suggestions / Contact",
    contact_desc: "Propose une idée de métier ou demande un conseil.",
    send: "Envoyer",
    c_name: "Ton nom",
    c_email: "Ton email",
    c_msg: "Ton message...",
    footer: "© 2026 Carrière Maroc — Projet étudiant",

    ofppt_sum: "OFPPT – Formation professionnelle",
    ofppt_body: {
  c: "Selon la filière et le niveau (collège/lycée/bac). Sélection ou concours selon l’établissement.",
  d: "1 à 2 ans (Technicien / Technicien Spécialisé) + stages.",
  f: "Développement Digital, Réseaux, Infographie, Gestion, Comptabilité, Électricité…",
  o: "Insertion rapide, possibilité de poursuivre selon les passerelles.",
  s: "Dév web (junior) : ~6 000–10 000 MAD/mois ; confirmé : ~10 000–20 000+ MAD/mois.",
  l: [
    { t: "Site OFPPT", u: "https://www.ofppt.ma/" },
    { t: "MyWay (établissements)", u: "https://www.myway.ac.ma/etablissements" }
  ]
},

    ensa_sum: "ENSA – École Nationale des Sciences Appliquées",
   ensa_body: {
  c: "Bac scientifique/technique + concours/sélection (varie selon l’ENSA). Candidature souvent via la plateforme nationale.",
  d: "5 ans.",
  f: "Génie Informatique, Industriel, Civil, Télécom/Réseaux…",
  o: "Ingénieur en entreprise, bonnes opportunités au Maroc et à l’international.",
  s: "Ingénieur junior : souvent ~8 000–15 000+ MAD/mois (selon secteur/ville).",
  l: [
    { t: "Plateforme CursusSup (candidatures)", u: "https://www.cursussup.gov.ma/" },
    { t: "Ministère de l’Enseignement Supérieur", u: "https://www.enssup.gov.ma/" }
  ]
},

    encg_sum: "ENCG – École Nationale de Commerce et de Gestion",
   encg_body: {
  c: "Bac + concours (TAFEM). Il existe aussi des passerelles (Bac+2/Bac+4) حسب المدرسة.",
  d: "5 ans.",
  f: "Finance, Marketing, Comptabilité, Audit, Management…",
  o: "Cadre en entreprise, banque, cabinet d’audit, consulting.",
  s: "Comptabilité (junior) : ~4 000–8 000 MAD/mois ; Marketing : ~7 000–30 000 MAD/mois حسب الخبرة.",
  l: [
    { t: "Plateforme CursusSup", u: "https://www.cursussup.gov.ma/" },
    { t: "Portail BTS Libre (وزارة)", u: "https://btslibre.men.gov.ma/" }
  ]
},

    bts_est_sum: "BTS / EST (École Supérieure de Technologie)",
    bts_est_body: {
  c: "Bac + sélection/dossier. Pour BTS Libre: candidature via portail الوزارة. Pour EST: concours/selection حسب الجامعة.",
  d: "2 ans (BTS) / 2 ans (DUT à l’EST) حسب المؤسسة.",
  f: "Informatique, Génie électrique, Génie mécanique, Gestion…",
  o: "Technicien supérieur, insertion pro et possibilité poursuite d’études selon passerelles.",
  s: "Technicien/TS: غالباً ~4 000–8 000+ MAD/mois حسب المجال والخبرة.",
  l: [
    { t: "BTS Libre (MEN)", u: "https://btslibre.men.gov.ma/" },
    { t: "Ministère MEN", u: "https://www.men.gov.ma/" },
    { t: "Exemple EST (Salé)", u: "https://www.est.um5.ac.ma/" }
  ]
},


    opt: {
      tech: "Technologie / Informatique",
      business: "Business / Gestion",
      health: "Santé",
      design: "Design / Création",
      education: "Éducation",

      math: "Maths / Physique",
      lang: "Langues / Communication",
      bio: "SVT / Biologie",
      eco: "Économie",
      art: "Art / Créativité",

      short: "Courte (OFPPT / BTS / DUT)",
      long: "Longue (Fac / Écoles / Master)",
      both: "Peu importe"
    }
  },

  ar: {
    dir: "rtl",
    title: "المسار المهني المغرب",
    subtitle: "اختبار بسيط لمساعدة الطلبة المغاربة على اختيار الشعبة والمسار المهني.",
    test_title: "اختبار توجيهي (30 ثانية)",
    test_desc: "أجب عن الأسئلة لتحصل على 3 اقتراحات مناسبة.",
    q1: "ما المجال الذي يهمّك أكثر؟",
    q2: "ما المادة التي تتفوّق فيها أكثر؟",
    q3: "ما نوع الدراسة التي تفضّلها؟",
    submit: "عرض الاقتراحات",
    results_title: "النتائج",
    results_hint: "أكمل الاختبار ثم اضغط على “عرض الاقتراحات”.",
    paths_title: "مسارات الدراسة في المغرب",
    paths_desc: "اضغط على المسار لرؤية الشروط، المدة، والآفاق.",
    contact_title: "اقتراحات / تواصل",
    contact_desc: "اقترح مهنة أو اطلب نصيحة.",
    send: "إرسال",
    c_name: "اسمك",
    c_email: "بريدك الإلكتروني",
    c_msg: "رسالتك...",
    footer: "© 2026 المسار المهني المغرب — مشروع طلابي",

    ofppt_sum: "OFPPT — التكوين المهني",
    ofppt_body: {
      c: "حسب الشعبة والمستوى (إعدادي/ثانوي/باك). انتقاء أو مباراة حسب المؤسسة.",
      d: "سنة إلى سنتين (تقني/تقني متخصص) + تدريب.",
      f: "التطوير الرقمي، الشبكات، التصميم، التسيير، المحاسبة، الكهرباء…",
      o: "اندماج سريع في سوق الشغل، وإمكانية متابعة الدراسة حسب المسارات."
    },
    ensa_sum: "ENSA — المدرسة الوطنية للعلوم التطبيقية",
    ensa_body: {
      c: "باك علمي/تقني + مباراة/انتقاء (يختلف حسب المدرسة).",
      d: "5 سنوات.",
      f: "هندسة الإعلاميات، الصناعية، المدنية، الاتصالات/الشبكات…",
      o: "مهندس في الشركات، فرص جيدة في المغرب وخارجه."
    },
    encg_sum: "ENCG — المدرسة الوطنية للتجارة والتسيير",
    encg_body: {
      c: "باك + مباراة (غالبًا TAFEM) أو مسارات أخرى حسب القوانين المعتمدة.",
      d: "5 سنوات.",
      f: "المالية، التسويق، المحاسبة، الافتحاص، التسيير…",
      o: "أطر في الشركات، الأبناك، مكاتب الافتحاص، الاستشارة."
    },
    bts_est_sum: "BTS / EST",
    bts_est_body: {
      c: "باك (حسب الشعبة) + انتقاء/ملف (يختلف حسب المؤسسة).",
      d: "سنتان.",
      f: "الإعلاميات، الكهرباء، الميكانيك، التسيير…",
      o: "تقني عالي، وإمكانية متابعة الدراسة حسب الجسور."
    },

    opt: {
      tech: "التكنولوجيا / الإعلاميات",
      business: "التجارة / التسيير",
      health: "الصحة",
      design: "التصميم / الإبداع",
      education: "التعليم",

      math: "الرياضيات / الفيزياء",
      lang: "اللغات / التواصل",
      bio: "علوم الحياة والأرض",
      eco: "الاقتصاد",
      art: "الفن / الإبداع",

      short: "دراسة قصيرة (OFPPT / BTS / DUT)",
      long: "دراسة طويلة (الجامعة / المدارس / ماستر)",
      both: "لا يهم"
    }
  }
};

function setText(id, value){
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}
function setPlaceholder(id, value){
  const el = document.getElementById(id);
  if (el) el.placeholder = value;
}

function setLang(lang){
  localStorage.setItem("lang", lang);

  document.documentElement.lang = lang;
  document.body.dir = i18n[lang].dir;

  setText("t_title", i18n[lang].title);
  setText("t_subtitle", i18n[lang].subtitle);
  setText("t_test_title", i18n[lang].test_title);
  setText("t_test_desc", i18n[lang].test_desc);
  setText("t_q1", i18n[lang].q1);
  setText("t_q2", i18n[lang].q2);
  setText("t_q3", i18n[lang].q3);
  setText("t_submit", i18n[lang].submit);
  setText("t_results_title", i18n[lang].results_title);
  setText("t_results_hint", i18n[lang].results_hint);
  setText("t_paths_title", i18n[lang].paths_title);
  setText("t_paths_desc", i18n[lang].paths_desc);
  setText("t_contact_title", i18n[lang].contact_title);
  setText("t_contact_desc", i18n[lang].contact_desc);
  setText("t_send", i18n[lang].send);
  setText("t_footer", i18n[lang].footer);

  // Parcours: titres
  setText("t_ofppt_sum", i18n[lang].ofppt_sum);
  setText("t_ensa_sum", i18n[lang].ensa_sum);
  setText("t_encg_sum", i18n[lang].encg_sum);
  setText("t_bts_est_sum", i18n[lang].bts_est_sum);

  // Placeholders
  setPlaceholder("c_name", i18n[lang].c_name);
  setPlaceholder("c_email", i18n[lang].c_email);
  setPlaceholder("c_msg", i18n[lang].c_msg);

  // Options select
  const interest = document.getElementById("interest");
  const strength = document.getElementById("strength");
  const path = document.getElementById("path");

  if (interest){
    [...interest.options].forEach(opt => {
      opt.textContent = i18n[lang].opt[opt.value] || opt.textContent;
    });
  }
  if (strength){
    [...strength.options].forEach(opt => {
      opt.textContent = i18n[lang].opt[opt.value] || opt.textContent;
    });
  }
  if (path){
    [...path.options].forEach(opt => {
      opt.textContent = i18n[lang].opt[opt.value] || opt.textContent;
    });
  }

  // Boutons
  btnFR.classList.toggle("active", lang === "fr");
  btnAR.classList.toggle("active", lang === "ar");

  // Mettre à jour le contenu des bodies parcours (via HTML existant)
  const ofppt = document.getElementById("t_ofppt_body");
  const ensa = document.getElementById("t_ensa_body");
  const encg = document.getElementById("t_encg_body");
  const bts = document.getElementById("t_bts_est_body");

 function linksHTML(list){
  return (list || []).map(x => `<li><a href="${x.u}" target="_blank" rel="noopener noreferrer">${x.t}</a></li>`).join("");
}

if (ofppt) ofppt.innerHTML = `
  <p><strong>${lang==="ar"?"✅ الشروط":"Conditions"} :</strong> ${i18n[lang].ofppt_body.c}</p>
  <p><strong>${lang==="ar"?"⏳ المدة":"Durée"} :</strong> ${i18n[lang].ofppt_body.d}</p>
  <p><strong>${lang==="ar"?"🎯 الشعب":"Filières"} :</strong> ${i18n[lang].ofppt_body.f}</p>
  <p><strong>${lang==="ar"?"🚀 الآفاق":"Débouchés"} :</strong> ${i18n[lang].ofppt_body.o}</p>
  <p><strong>${lang==="ar"?"💰 راتب تقريبي":"💰 Salaire estimatif"} :</strong> ${i18n[lang].ofppt_body.s}</p>
  <p><strong>${lang==="ar"?"🔗 روابط رسمية":"🔗 Liens officiels"} :</strong></p>
  <ul class="links">${linksHTML(i18n[lang].ofppt_body.l)}</ul>
`;

if (ensa) ensa.innerHTML = `
  <p><strong>${lang==="ar"?"✅ الشروط":"Conditions"} :</strong> ${i18n[lang].ensa_body.c}</p>
  <p><strong>${lang==="ar"?"⏳ المدة":"Durée"} :</strong> ${i18n[lang].ensa_body.d}</p>
  <p><strong>${lang==="ar"?"🎯 الشعب":"Filières"} :</strong> ${i18n[lang].ensa_body.f}</p>
  <p><strong>${lang==="ar"?"🚀 الآفاق":"Débouchés"} :</strong> ${i18n[lang].ensa_body.o}</p>
  <p><strong>${lang==="ar"?"💰 راتب تقريبي":"💰 Salaire estimatif"} :</strong> ${i18n[lang].ensa_body.s}</p>
  <p><strong>${lang==="ar"?"🔗 روابط رسمية":"🔗 Liens officiels"} :</strong></p>
  <ul class="links">${linksHTML(i18n[lang].ensa_body.l)}</ul>
`;

if (encg) encg.innerHTML = `
  <p><strong>${lang==="ar"?"✅ الشروط":"Conditions"} :</strong> ${i18n[lang].encg_body.c}</p>
  <p><strong>${lang==="ar"?"⏳ المدة":"Durée"} :</strong> ${i18n[lang].encg_body.d}</p>
  <p><strong>${lang==="ar"?"🎯 الشعب":"Filières"} :</strong> ${i18n[lang].encg_body.f}</p>
  <p><strong>${lang==="ar"?"🚀 الآفاق":"Débouchés"} :</strong> ${i18n[lang].encg_body.o}</p>
  <p><strong>${lang==="ar"?"💰 راتب تقريبي":"💰 Salaire estimatif"} :</strong> ${i18n[lang].encg_body.s}</p>
  <p><strong>${lang==="ar"?"🔗 روابط رسمية":"🔗 Liens officiels"} :</strong></p>
  <ul class="links">${linksHTML(i18n[lang].encg_body.l)}</ul>
`;

if (bts) bts.innerHTML = `
  <p><strong>${lang==="ar"?"✅ الشروط":"Conditions"} :</strong> ${i18n[lang].bts_est_body.c}</p>
  <p><strong>${lang==="ar"?"⏳ المدة":"Durée"} :</strong> ${i18n[lang].bts_est_body.d}</p>
  <p><strong>${lang==="ar"?"🎯 الشعب":"Filières"} :</strong> ${i18n[lang].bts_est_body.f}</p>
  <p><strong>${lang==="ar"?"🚀 الآفاق":"Débouchés"} :</strong> ${i18n[lang].bts_est_body.o}</p>
  <p><strong>${lang==="ar"?"💰 راتب تقريبي":"💰 Salaire estimatif"} :</strong> ${i18n[lang].bts_est_body.s}</p>
  <p><strong>${lang==="ar"?"🔗 روابط رسمية":"🔗 Liens officiels"} :</strong></p>
  <ul class="links">${linksHTML(i18n[lang].bts_est_body.l)}</ul>
`;


// Init langue
const saved = localStorage.getItem("lang") || "fr";
setLang(saved);

btnFR.addEventListener("click", () => setLang("fr"));
btnAR.addEventListener("click", () => setLang("ar"));

const suggestions = [
  {
    key:"dev",
    interest:"tech",
    strengths:["math","lang"],
    path:["short","long","both"],
    fr:{
      title:"Développeur Web / Apps",
      study:"OFPPT (Développement Digital), BTS/DUT, Faculté (Info), écoles d’ingénieurs",
      market:"Très demandé",
      access:"Bac (souvent scientifique/tech) + formation (OFPPT/BTS/Fac) + portfolio/projets.",
      salary:"Junior ~6 000–10 000 MAD/mois ; confirmé ~10 000–20 000 MAD/mois ; senior 20 000+ MAD/mois.",
      links:[
        {t:"OFPPT (officiel)", u:"https://www.ofppt.ma/"},
        {t:"MyWay (OFPPT – établissements)", u:"https://www.myway.ac.ma/etablissements"}
      ]
    },
    ar:{
      title:"مطور ويب / تطبيقات",
      study:"OFPPT (التطوير الرقمي)، BTS/DUT، كلية الإعلاميات، مدارس الهندسة",
      market:"مطلوب جدًا",
      access:"باك (غالبًا علمي/تقني) + تكوين (OFPPT/BTS/كلية) + مشاريع/Portfolio.",
      salary:"مبتدئ ~6000–10000 درهم/شهر؛ متوسط ~10000–20000؛ خبير 20000+.",
      links:[
        {t:"OFPPT (رسمي)", u:"https://www.ofppt.ma/"},
        {t:"MyWay (مؤسسات OFPPT)", u:"https://www.myway.ac.ma/etablissements"}
      ]
    }
  },

  {
    key:"data",
    interest:"tech",
    strengths:["math"],
    path:["long","both"],
    fr:{
      title:"Data Analyst",
      study:"Fac (Math/Info), licences/masters, bootcamps",
      market:"Demande en hausse",
      access:"Bac scientifique + compétences Excel/SQL + stats; غالبًا مسار طويل (Licence/Master).",
      salary:"Souvent ~8 000–12 000 MAD/mois (selon ville/exp.).",
      links:[
        {t:"CursusSup (orientation/candidatures)", u:"https://www.cursussup.gov.ma/"}
      ]
    },
    ar:{
      title:"محلل بيانات",
      study:"كلية (رياضيات/إعلاميات) + تكوينات SQL/Excel",
      market:"الطلب في ارتفاع",
      access:"باك علمي + SQL/Excel + إحصاء؛ غالبًا مسار جامعي/ماستر.",
      salary:"غالبًا ~8000–12000 درهم/شهر.",
      links:[
        {t:"CursusSup (منصة رسمية)", u:"https://www.cursussup.gov.ma/"}
      ]
    }
  },

  {
    key:"compta",
    interest:"business",
    strengths:["eco","math"],
    path:["short","long","both"],
    fr:{
      title:"Comptabilité / Finance",
      study:"OFPPT, BTS/EST, Licence Éco-Gestion, ENCG",
      market:"Toujours demandé",
      access:"Bac + BTS/EST أو Licence؛ ENCG غالبًا عبر concours (TAFEM حسب النظام).",
      salary:"Comptable souvent ~4 000–8 000 MAD/mois (base).",
      links:[
        {t:"ENCG via CursusSup", u:"https://www.cursussup.gov.ma/"},
        {t:"BTS Libre (MEN)", u:"https://btslibre.men.gov.ma/"},
        {t:"MEN (officiel)", u:"https://www.men.gov.ma/"}
      ]
    },
    ar:{
      title:"المحاسبة / المالية",
      study:"OFPPT، BTS/EST، إجازة اقتصاد/تسيير، ENCG",
      market:"مطلوب دائمًا",
      access:"باك + BTS/EST أو إجازة؛ ENCG غالبًا عبر مباراة/TAFEM حسب النظام.",
      salary:"محاسب غالبًا ~4000–8000 درهم/شهر.",
      links:[
        {t:"CursusSup (رسمي)", u:"https://www.cursussup.gov.ma/"},
        {t:"BTS Libre (وزارة)", u:"https://btslibre.men.gov.ma/"},
        {t:"MEN (رسمي)", u:"https://www.men.gov.ma/"}
      ]
    }
  },

  {
    key:"marketing",
    interest:"business",
    strengths:["lang"],
    path:["short","long","both"],
    fr:{
      title:"Marketing digital",
      study:"OFPPT, BTS/EST, licences, écoles de commerce",
      market:"Bon pour communication",
      access:"Bac + formation (OFPPT/BTS/Licence) + compétences (contenu, pub, analytics).",
      salary:"Marketing/Com ~8 000–12 000 MAD (junior) puis plus avec expérience.",
      links:[
        {t:"OFPPT (officiel)", u:"https://www.ofppt.ma/"},
        {t:"CursusSup", u:"https://www.cursussup.gov.ma/"}
      ]
    },
    ar:{
      title:"التسويق الرقمي",
      study:"OFPPT، BTS/EST، إجازة، مدارس التجارة",
      market:"مناسب للتواصل",
      access:"باك + تكوين + مهارات (محتوى/إعلانات/تحليل).",
      salary:"تقريبًا ~8000–12000 درهم (مبتدئ) وقد يزيد مع الخبرة.",
      links:[
        {t:"OFPPT (رسمي)", u:"https://www.ofppt.ma/"},
        {t:"CursusSup", u:"https://www.cursussup.gov.ma/"}
      ]
    }
  },

  {
    key:"nurse",
    interest:"health",
    strengths:["bio"],
    path:["short","both"],
    fr:{
      title:"Infirmier / Infirmière",
      study:"Instituts / écoles de santé",
      market:"Forte demande",
      access:"Bac (souvent scientifique) + concours/selection selon l’institut.",
      salary:"Public ~4 500 MAD (moyen) ; privé débutant ~3 500–4 000 MAD/mois (indicatif).",
      links:[
        {t:"CursusSup (certains concours)", u:"https://www.cursussup.gov.ma/"}
      ]
    },
    ar:{
      title:"ممرض / ممرضة",
      study:"معاهد / مدارس الصحة",
      market:"طلب مرتفع",
      access:"باك (غالبًا علمي) + مباراة/انتقاء حسب المعهد.",
      salary:"العمومي ~4500 درهم؛ الخاص مبتدئ ~3500–4000 (تقريبي).",
      links:[
        {t:"CursusSup", u:"https://www.cursussup.gov.ma/"}
      ]
    }
  },

  {
    key:"ux",
    interest:"design",
    strengths:["art","lang"],
    path:["short","long","both"],
    fr:{
      title:"Designer (Graphique / UI-UX)",
      study:"OFPPT, écoles, formations",
      market:"Portfolio important",
      access:"Bac + تكوين + Portfolio قوي (تصاميم/دراسات UX).",
      salary:"UX/UI ~5 000–14 000 MAD/mois (indicatif).",
      links:[
        {t:"OFPPT (officiel)", u:"https://www.ofppt.ma/"}
      ]
    },
    ar:{
      title:"مصمم (غرافيك / UI-UX)",
      study:"OFPPT، مدارس، تكوينات",
      market:"الـPortfolio مهم",
      access:"باك + تكوين + Portfolio قوي.",
      salary:"تقريبًا ~5000–14000 درهم/شهر.",
      links:[
        {t:"OFPPT", u:"https://www.ofppt.ma/"}
      ]
    }
  },

  {
    key:"teacher",
    interest:"education",
    strengths:["lang"],
    path:["long","both"],
    fr:{
      title:"Enseignement / Formation",
      study:"Fac + parcours enseignement / concours",
      market:"Stable",
      access:"Licence + concours/formation حسب المسار (public/privé).",
      salary:"Enseignant ~6 000–19 000 MAD/mois (estimations variables).",
      links:[
        {t:"MEN (officiel)", u:"https://www.men.gov.ma/"}
      ]
    },
    ar:{
      title:"التعليم / التكوين",
      study:"الجامعة + مسارات التعليم / مباريات",
      market:"مستقر",
      access:"إجازة + مباراة/تكوين حسب المسار.",
      salary:"تقريبًا ~6000–19000 درهم/شهر (كيختلف).",
      links:[
        {t:"MEN (رسمي)", u:"https://www.men.gov.ma/"}
      ]
    }
  }
];


function matchScore(interest, strength, pathChoice, item){
  let score = 0;
  if (item.interest === interest) score += 3;
  if (item.strengths.includes(strength)) score += 2;
  if (item.path.includes(pathChoice)) score += 1;
  return score;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const interest = document.getElementById("interest").value;
  const strength = document.getElementById("strength").value;
  const pathChoice = document.getElementById("path").value;

  const lang = localStorage.getItem("lang") || "fr";

  const ranked = [...suggestions]
    .map(item => ({ item, score: matchScore(interest, strength, pathChoice, item) }))
    .sort((a,b) => b.score - a.score)
    .slice(0,3);

  const scoreLabel = lang === "ar" ? "النقطة" : "Score";
  const studyLabel = lang === "ar" ? "Études / Parcours" : "Études / Parcours";
  const marketLabel = lang === "ar" ? "Marché" : "Marché";

// 🔹 Relancer l’animation des résultats
results.classList.remove("is-animating");
void results.offsetWidth; // force le reflow (redémarre l’animation)
results.classList.add("is-animating");

function linksHTML(list){
  return (list || []).map(x =>
    `<li><a href="${x.u}" target="_blank" rel="noopener noreferrer">${x.t}</a></li>`
  ).join("");
}

results.innerHTML = ranked.map(({item, score}) => `
  <div class="item">
    <span class="tag">${scoreLabel}: ${score}/6</span>
    <h3>${item[lang].title}</h3>

    <p><strong>${lang==="ar" ? "📚 المسار" : "📚 Parcours"} :</strong> ${item[lang].study}</p>
    <p><strong>${lang==="ar" ? "✅ شروط الولوج" : "✅ Conditions d’accès"} :</strong> ${item[lang].access}</p>
    <p><strong>${lang==="ar" ? "💰 راتب تقريبي" : "💰 Salaire estimatif"} :</strong> ${item[lang].salary}</p>
    <p><strong>${lang==="ar" ? "🔗 روابط رسمية" : "🔗 Liens officiels"} :</strong></p>
    <ul class="links">${linksHTML(item[lang].links)}</ul>

    <p><strong>${lang==="ar" ? "📈 السوق" : "📈 Marché"} :</strong> ${item[lang].market}</p>
  </div>
`).join("");

