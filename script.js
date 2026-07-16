const serviceData = [
  {
    title: "Full Set",
    items: [
      { name: "Acrylic with Gel", price: "&pound;38" },
      { name: "Ombre Powder", price: "&pound;38" },
      { name: "Acrylic with French Tip", price: "&pound;42" },
      { name: "Acrylic with Normal Polish", price: "&pound;30" },
      { name: "Acrylic Toes with Gel", price: "&pound;40" },
      { name: "Take Off & New Set with Gel", price: "&pound;43" },
      { name: "Take Off & New Set Ombre", price: "&pound;43" },
      { name: "BIAB on Natural Nails", price: "&pound;35" },
      { name: "BIAB Extensions", price: "&pound;38" },
      { name: "Take Off & New Set with Normal Polish", price: "&pound;35" }
    ]
  },
  {
    title: "Infill",
    items: [
      { name: "Acrylic with Gel", price: "&pound;28" },
      { name: "Ombre Powder", price: "&pound;30" },
      { name: "Acrylic with French Tip", price: "&pound;32" },
      { name: "Acrylic with Normal Polish", price: "&pound;32" },
      { name: "BIAB", price: "&pound;30" },
      { name: "Acrylic Toes with Gel", price: "&pound;30" }
    ]
  },
  {
    title: "Natural Nails",
    items: [
      { name: "Gel Colour", price: "&pound;20" },
      { name: "Manicure with Gel", price: "&pound;28" },
      { name: "Pedicure with Gel", price: "&pound;38" },
      { name: "Combo Manicure + Pedicure with Gel", price: "&pound;65" },
      { name: "Take Off & Redo", price: "&pound;25" },
      { name: "Manicure with Normal Polish", price: "&pound;15" },
      { name: "Pedicure with Normal Polish", price: "&pound;30" },
      { name: "Combo Manicure + Pedicure with Normal Polish", price: "&pound;42" }
    ]
  },
  {
    title: "Design Extra",
    items: [
      { name: "Nail Art + Design", price: "From &pound;5" },
      { name: "Nail Repair", price: "From &pound;3" },
      { name: "Extra-Long Length", price: "From &pound;5" },
      { name: "Diamond Gem (x10)", price: "From &pound;3" },
      { name: "Chrome Nails", price: "From &pound;5" },
      { name: "Cat Eye Colour", price: "From &pound;5" },
      { name: "Acrylic 2 Big Toes", price: "From &pound;10" }
    ]
  }
];

const galleryItems = [
  {
    src: "assets/images/new-nails/nail-02.jpg",
    alt: "Long pink stiletto nails with bright tropical flower art",
    label: "Tropical pink",
    note: "Bright florals on a sharp sculpted shape."
  },
  {
    src: "assets/images/new-nails/nail-03.jpg",
    alt: "Turquoise, black and nude square nail art with gold details",
    label: "Turquoise framing",
    note: "Graphic colour framed with crisp dark tips."
  },
  {
    src: "assets/images/new-nails/nail-04.jpg",
    alt: "Soft pastel almond nails with delicate coloured tips",
    label: "Pastel almond",
    note: "A soft everyday set with subtle colour."
  },
  {
    src: "assets/images/new-nails/nail-05.jpg",
    alt: "Long nude stiletto nails with vivid red curved line art",
    label: "Red linework",
    note: "High-impact red curves on a nude base."
  },
  {
    src: "assets/images/new-nails/nail-06.jpg",
    alt: "Pink, red and gold almond nails with heart details",
    label: "Heart accents",
    note: "Playful details with a polished gold finish."
  },
  {
    src: "assets/images/new-nails/nail-07.jpg",
    alt: "Long floral nails with lilac flowers and gold embellishments",
    label: "Lilac florals",
    note: "Layered flowers and fine metallic details."
  },
  {
    src: "assets/images/new-nails/nail-08.jpg",
    alt: "Square French nails with pink flowers and animal print tips",
    label: "Floral animal print",
    note: "Detailed tips balanced by a natural base."
  },
  {
    src: "assets/images/new-nails/nail-09.jpg",
    alt: "Long yellow and pink nails with flowers and animal print",
    label: "Butter yellow art",
    note: "Warm colour with statement floral details."
  },
  {
    src: "assets/images/new-nails/nail-12.jpg",
    alt: "Short square nails with pink, yellow and green curved details",
    label: "Pastel curves",
    note: "A colourful design on a practical short shape."
  },
  {
    src: "assets/images/new-nails/nail-14.jpg",
    alt: "Long stiletto French nails with black and gold graphic tips",
    label: "Graphic French",
    note: "Sharp monochrome tips with gold highlights."
  },
  {
    src: "assets/images/new-nails/nail-15.jpg",
    alt: "Square nude French nails with black lace and silver gems",
    label: "Black lace French",
    note: "Classic nude with detailed dark accents."
  },
  {
    src: "assets/images/new-nails/nail-16.jpg",
    alt: "Long pink stiletto nails with black and white tip art",
    label: "Pink statement tips",
    note: "Bold pointed tips with a soft pink base."
  },
  {
    src: "assets/images/new-nails/nail-17.jpg",
    alt: "Pink almond nails with black French details and raised flowers",
    label: "Raised florals",
    note: "Sculpted flower art with graphic French tips."
  },
  {
    src: "assets/images/new-nails/nail-19.jpg",
    alt: "Long blush square nails with silver chrome details",
    label: "Blush chrome",
    note: "Soft colour sharpened with metallic accents."
  },
  {
    src: "assets/images/new-nails/nail-20.jpg",
    alt: "Short pink square nails with fine black French details",
    label: "Fine French detail",
    note: "A neat short set with precise line work."
  },
  {
    src: "assets/images/new-nails/nail-21.jpg",
    alt: "Pastel square nails with colourful wavy French tips",
    label: "Pastel waves",
    note: "Fresh curved colour on a clean nude base."
  },
  {
    src: "assets/images/new-nails/nail-22.jpg",
    alt: "Pink French manicure with dotted tips and floral accent nails",
    label: "Dotted French",
    note: "Soft pink tips with a delicate flower accent."
  },
  {
    src: "assets/images/new-nails/nail-23.jpg",
    alt: "Brown and white chrome almond nails with curved abstract tips",
    label: "Mocha chrome",
    note: "Reflective neutral tones with curved detailing."
  },
  {
    src: "assets/images/new-nails/nail-24.jpg",
    alt: "Long pink stiletto nails with flowers and silver line art",
    label: "Pink silver florals",
    note: "Fine metallic lines around bold flower art."
  },
  {
    src: "assets/images/new-nails/nail-27.jpg",
    alt: "Glossy nude nails with bright coral flame tips",
    label: "Coral flames",
    note: "A vivid tip treatment on a natural base."
  },
  {
    src: "assets/images/new-nails/nail-28.jpg",
    alt: "Neutral almond nails with sculpted gold chrome details",
    label: "Sculpted gold",
    note: "Warm metallic accents with a refined neutral base."
  },
  {
    src: "assets/images/new-nails/nail-31.jpg",
    alt: "Pink almond nails with striped and swirled French art",
    label: "Pink ribbon tips",
    note: "Layered pink linework on a glossy almond shape."
  },
  {
    src: "assets/images/new-nails/nail-01.jpg",
    alt: "Green almond nails with raised flowers and silver details",
    label: "Emerald florals",
    note: "Rich green detail with a soft sculpted finish."
  },
  {
    src: "assets/images/new-nails/nail-18.jpg",
    alt: "Long lilac and nude nails with flowers and gold embellishments",
    label: "Lilac garden",
    note: "Layered floral art with delicate gold accents."
  }
];

const serviceList = document.getElementById("service-list");
const galleryGrid = document.getElementById("gallery-grid");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".main-nav");
const scrollTopButton = document.querySelector(".scroll-top");
const phoneFloat = document.querySelector(".phone-float");
const galleryModal = document.getElementById("gallery-modal");
const modalImage = document.getElementById("modal-image");
const modalCaption = document.getElementById("modal-caption");
const modalClose = document.querySelector(".modal-close");
const modalPlaceholder = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

function createServiceSection() {
  serviceData.forEach((category, index) => {
    const details = document.createElement("details");
    details.className = "service-category";
    if (index === 0) {
      details.open = true;
    }

    details.innerHTML = `
      <summary>
        <h3>${category.title}</h3>
        <span>${category.items.length} services</span>
      </summary>
      <div class="service-items"></div>
    `;

    const itemsContainer = details.querySelector(".service-items");
    if (category.columns) {
      const headerEl = document.createElement("div");
      headerEl.className = "service-row service-row-header";
      headerEl.innerHTML = `
        <span>Service</span>
        <span>${category.columns[0]}</span>
        <span>${category.columns[1]}</span>
      `;
      itemsContainer.appendChild(headerEl);
    }

    category.items.forEach((item) => {
      const itemEl = document.createElement("article");
      itemEl.className = category.columns ? "service-row service-item" : "service-item";
      if (category.columns) {
        itemEl.innerHTML = `
          <strong>${item.name}</strong>
          <span>${item.fullSet || "-"}</span>
          <span>${item.fullIn || "-"}</span>
        `;
      } else {
        itemEl.innerHTML = `
          <div class="service-meta">
            <strong>${item.name}</strong>
          </div>
          <div class="service-cost">
            <strong>${item.price}</strong>
          </div>
        `;
      }
      itemsContainer.appendChild(itemEl);
    });

    serviceList.appendChild(details);
  });
}

function createGallery() {
  galleryItems.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "gallery-card";
    card.innerHTML = `
      <img src="${item.src}" alt="${item.alt}" loading="lazy">
      <h3>${item.label}</h3>
      <p>${item.note}</p>
    `;
    card.addEventListener("click", () => openModal(item));
    galleryGrid.appendChild(card);
  });
}

function openModal(item) {
  modalImage.src = item.src;
  modalImage.alt = item.alt;
  modalCaption.textContent = item.label;
  galleryModal.classList.add("open");
  galleryModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeModal() {
  galleryModal.classList.remove("open");
  galleryModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  modalImage.src = modalPlaceholder;
  modalImage.alt = "";
}

function setFloatingButtons(visible) {
  scrollTopButton.classList.toggle("visible", visible);
  phoneFloat.classList.toggle("visible", visible);
}

navToggle.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

scrollTopButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

galleryModal.addEventListener("click", (event) => {
  if (event.target === galleryModal || event.target === modalClose) {
    closeModal();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && galleryModal.classList.contains("open")) {
    closeModal();
  }
});

const heroObserver = new IntersectionObserver(
  ([entry]) => {
    setFloatingButtons(!entry.isIntersecting);
  },
  { threshold: 0.08 }
);

heroObserver.observe(document.querySelector(".hero"));

createServiceSection();
createGallery();
