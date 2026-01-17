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
      o: "Insertion rapide, possibilité de poursuivre selon les passerelles."
    },
    ensa_sum: "ENSA – École Nationale des Sciences Appliquées",
    ensa_body: {
      c: "Bac scientifique/technique + concours/sélection (varie selon l’ENSA).",
      d: "5 ans.",
      f: "Génie Informatique, Industriel, Civil, Télécom/Réseaux…",
      o: "Ingénieur en entreprise, bonnes opportunités au Maroc et à l’international."
    },
    encg_sum: "ENCG – École Nationale de Commerce et de Gestion",
    encg_body: {
      c: "Bac + concours (souvent TAFEM) ou voies spécifiques selon les règles en vigueur.",
      d: "5 ans.",
      f: "Finance, Marketing, Comptabilité, Audit, Management…",
      o: "Cadre en entreprise, banque, cabinet d’audit, consulting."
    },
    bts_est_sum: "BTS / EST (École Supérieure de Technologie)",
    bts_est_body: {
      c: "Bac (souvent selon la filière), sélection/dossier (varie selon l’établissement).",
      d: "2 ans.",
      f: "Informatique, Génie électrique, Génie mécanique, Gestion…",
      o: "Technicien supérieur, poursuite d’études possible (selon passerelles)."
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

  if (ofppt) ofppt.innerHTML = `
    <p><strong>${lang==="ar"?"✅ الشروط":"Conditions"} :</strong> ${i18n[lang].ofppt_body.c}</p>
    <p><strong>${lang==="ar"?"⏳ المدة":"Durée"} :</strong> ${i18n[lang].ofppt_body.d}</p>
    <p><strong>${lang==="ar"?"🎯 الشعب":"Filières"} :</strong> ${i18n[lang].ofppt_body.f}</p>
    <p><strong>${lang==="ar"?"🚀 الآفاق":"Débouchés"} :</strong> ${i18n[lang].ofppt_body.o}</p>
  `;
  if (ensa) ensa.innerHTML = `
    <p><strong>${lang==="ar"?"✅ الشروط":"Conditions"} :</strong> ${i18n[lang].ensa_body.c}</p>
    <p><strong>${lang==="ar"?"⏳ المدة":"Durée"} :</strong> ${i18n[lang].ensa_body.d}</p>
    <p><strong>${lang==="ar"?"🎯 الشعب":"Filières"} :</strong> ${i18n[lang].ensa_body.f}</p>
    <p><strong>${lang==="ar"?"🚀 الآفاق":"Débouchés"} :</strong> ${i18n[lang].ensa_body.o}</p>
  `;
  if (encg) encg.innerHTML = `
    <p><strong>${lang==="ar"?"✅ الشروط":"Conditions"} :</strong> ${i18n[lang].encg_body.c}</p>
    <p><strong>${lang==="ar"?"⏳ المدة":"Durée"} :</strong> ${i18n[lang].encg_body.d}</p>
    <p><strong>${lang==="ar"?"🎯 الشعب":"Filières"} :</strong> ${i18n[lang].encg_body.f}</p>
    <p><strong>${lang==="ar"?"🚀 الآفاق":"Débouchés"} :</strong> ${i18n[lang].encg_body.o}</p>
  `;
  if (bts) bts.innerHTML = `
    <p><strong>${lang==="ar"?"✅ الشروط":"Conditions"} :</strong> ${i18n[lang].bts_est_body.c}</p>
    <p><strong>${lang==="ar"?"⏳ المدة":"Durée"} :</strong> ${i18n[lang].bts_est_body.d}</p>
    <p><strong>${lang==="ar"?"🎯 الشعب":"Filières"} :</strong> ${i18n[lang].bts_est_body.f}</p>
    <p><strong>${lang==="ar"?"🚀 الآفاق":"Débouchés"} :</strong> ${i18n[lang].bts_est_body.o}</p>
  `;
}

// Init langue
const saved = localStorage.getItem("lang") || "fr";
setLang(saved);

btnFR.addEventListener("click", () => setLang("fr"));
btnAR.addEventListener("click", () => setLang("ar"));

/* ===== Suggestions test ===== */
const suggestions = [
  { key:"dev", interest:"tech", strengths:["math","lang"], path:["short","long","both"],
    fr:{ title:"Développeur Web / Apps", study:"OFPPT (Développement Digital), BTS/DUT, Faculté (Info), Écoles", market:"Très demandé" },
    ar:{ title:"مطور ويب / تطبيقات", study:"OFPPT، BTS/DUT، كلية الإعلاميات، مدارس", market:"مطلوب جدًا" }
  },
  { key:"data", interest:"tech", strengths:["math"], path:["long","both"],
    fr:{ title:"Data Analyst / Data Scientist", study:"Fac (Math/Info), Master, écoles", market:"Demande en hausse" },
    ar:{ title:"محلل بيانات / عالم بيانات", study:"كلية (رياضيات/إعلاميات)، ماستر، مدارس", market:"الطلب في ارتفاع" }
  },
  { key:"marketing", interest:"business", strengths:["lang"], path:["short","long","both"],
    fr:{ title:"Marketing digital", study:"OFPPT, BTS, Licence", market:"Bon pour communication" },
    ar:{ title:"التسويق الرقمي", study:"OFPPT، BTS، إجازة", market:"مناسب للتواصل" }
  },
  { key:"compta", interest:"business", strengths:["eco","math"], path:["short","long","both"],
    fr:{ title:"Comptabilité / Finance", study:"OFPPT, BTS, Licence Éco-Gestion, ENCG", market:"Toujours demandé" },
    ar:{ title:"المحاسبة / المالية", study:"OFPPT، BTS، إجازة اقتصاد/تسيير، ENCG", market:"مطلوب دائمًا" }
  },
  { key:"nurse", interest:"health", strengths:["bio"], path:["short","both"],
    fr:{ title:"Infirmier / Infirmière", study:"Instituts / écoles de santé", market:"Forte demande" },
    ar:{ title:"ممرض / ممرضة", study:"معاهد / مدارس الصحة", market:"طلب مرتفع" }
  },
  { key:"ux", interest:"design", strengths:["art","lang"], path:["short","long","both"],
    fr:{ title:"Designer (Graphique / UI-UX)", study:"OFPPT, écoles, formations", market:"Portfolio important" },
    ar:{ title:"مصمم (غرافيك / UI-UX)", study:"OFPPT، مدارس، تكوينات", market:"الـPortfolio مهم" }
  },
  { key:"teacher", interest:"education", strengths:["lang"], path:["long","both"],
    fr:{ title:"Enseignement / Formation", study:"Fac + parcours enseignement", market:"Stable" },
    ar:{ title:"التعليم / التكوين", study:"الجامعة + مسار التعليم", market:"مستقر" }
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

  results.innerHTML = ranked.map(({item, score}) => `
    <div class="item">
      <span class="tag">${scoreLabel}: ${score}/6</span>
      <h3>${item[lang].title}</h3>
      <p><strong>${studyLabel} :</strong> ${item[lang].study}</p>
      <p><strong>${marketLabel} :</strong> ${item[lang].market}</p>
    </div>
  `).join("");
});
