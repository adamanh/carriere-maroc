window.addEventListener("DOMContentLoaded", () => {

  // ===== Modal elements
  const infoModal = document.getElementById("infoModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalClose = document.getElementById("modalClose");
  const modalOk = document.getElementById("modalOk");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  // Selects
  const selInterest = document.getElementById("interest");
  const selStrength = document.getElementById("strength");
  const selPath = document.getElementById("path");

  function openModal(title, html){
    if (!infoModal) return;
    const lang = localStorage.getItem("lang") || "fr";

    modalTitle.textContent = title;
    modalBody.innerHTML = html;

    const card = infoModal.querySelector(".modal-card");
    if (card){
      card.style.direction = (lang === "ar") ? "rtl" : "ltr";
      card.style.textAlign = (lang === "ar") ? "right" : "left";
    }

    infoModal.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeModal(){
    if (!infoModal) return;
    infoModal.classList.remove("show");
    document.body.style.overflow = "";
  }

  modalBackdrop?.addEventListener("click", closeModal);
  modalClose?.addEventListener("click", closeModal);
  modalOk?.addEventListener("click", closeModal);
  window.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });

  // ===== DATA FR / AR (CORRECT)
  const tips = {
    fr: {
      interest: {
        tech: {
          title: "Technologie / Informatique",
          body: `
            <span class="pill">Conseils</span>
            <ul>
              <li>Commence par des projets simples + GitHub.</li>
              <li>Parcours : OFPPT, BTS/EST, Fac Info.</li>
              <li>Compétences : HTML, CSS, JS.</li>
            </ul>`
        }
      }
    },
    ar: {
      interest: {
        tech: {
          title: "التكنولوجيا / الإعلاميات",
          body: `
            <span class="pill">نصائح</span>
            <ul>
              <li>بدا بمشاريع بسيطة + GitHub.</li>
              <li>مسارات: OFPPT، BTS/EST، كلية الإعلاميات.</li>
              <li>مهارات: HTML، CSS، JavaScript.</li>
            </ul>`
        }
      }
    }
  };

  function attachAutoModal(selectEl, type){
    if (!selectEl) return;
    selectEl.addEventListener("change", () => {
      const lang = localStorage.getItem("lang") || "fr";
      const v = selectEl.value;
      const data = tips[lang]?.[type]?.[v];
      if (data) openModal(data.title, data.body);
    });
  }

  attachAutoModal(selInterest, "interest");

});
