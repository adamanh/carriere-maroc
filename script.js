const form = document.getElementById("careerForm");
const results = document.getElementById("results");

const suggestions = [
  {
    id: "dev",
    title: "Développeur / Développeuse (Web & Apps)",
    interest: "tech",
    strengths: ["math", "lang"],
    path: ["short", "long", "both"],
    study: "OFPPT (Développement Digital), BTS/DUT, Faculté (Info), Écoles d’ingénieurs",
    skills: ["HTML/CSS/JS", "Python/Java", "Projets", "Git"],
    market: "Très demandé (entreprises & freelance)"
  },
  {
    id: "data",
    title: "Data Analyst / Data Scientist",
    interest: "tech",
    strengths: ["math"],
    path: ["long", "both"],
    study: "Fac (Math/Info), Master, écoles",
    skills: ["Excel/SQL", "Python", "Stats", "Power BI"],
    market: "Demande en hausse"
  },
  {
    id: "marketing",
    title: "Marketing Digital / Community Manager",
    interest: "business",
    strengths: ["lang"],
    path: ["short", "long", "both"],
    study: "OFPPT, BTS, Licence en gestion/marketing",
    skills: ["Réseaux sociaux", "Création contenu", "Publicité", "Analyse"],
    market: "Bon pour profils communication"
  },
  {
    id: "compta",
    title: "Comptabilité / Finance",
    interest: "business",
    strengths: ["eco", "math"],
    path: ["short", "long", "both"],
    study: "OFPPT, BTS, Licence Éco-Gestion, ENCG",
    skills: ["Excel", "Analyse", "Organisation", "Droit de base"],
    market: "Toujours demandé"
  },
  {
    id: "nurse",
    title: "Infirmier / Infirmière",
    interest: "health",
    strengths: ["bio"],
    path: ["short", "both"],
    study: "Instituts / écoles de santé",
    skills: ["Soins", "Empathie", "Rigueur"],
    market: "Forte demande"
  },
  {
    id: "ux",
    title: "Designer (Graphique / UI-UX)",
    interest: "design",
    strengths: ["art", "lang"],
    path: ["short", "long", "both"],
    study: "OFPPT, écoles, formations",
    skills: ["Photoshop/Figma", "Créativité", "Communication"],
    market: "Très utile avec portfolio"
  },
  {
    id: "teacher",
    title: "Enseignant / Formateur",
    interest: "education",
    strengths: ["lang"],
    path: ["long", "both"],
    study: "Fac + parcours enseignement / CRMEF (selon filière)",
    skills: ["Pédagogie", "Patience", "Organisation"],
    market: "Stable"
  }
];

function matchScore(interest, strength, pathChoice, item) {
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

  const ranked = [...suggestions]
    .map(item => ({ item, score: matchScore(interest, strength, pathChoice, item) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  results.innerHTML = ranked.map(({ item, score }) => `
    <div class="item">
      <span class="tag">Score: ${score}/6</span>
      <h3>${item.title}</h3>
      <p><strong>Études possibles :</strong> ${item.study}</p>
      <p><strong>Compétences :</strong> ${item.skills.join(", ")}</p>
      <p><strong>Marché au Maroc :</strong> ${item.market}</p>
    </div>
  `).join("");
});
