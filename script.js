const serviceData = [
  {
    title: "Natural Nail",
    items: [
      { name: "Manicure", price: "&pound;15" },
      { name: "Pedicure", price: "&pound;28" },
      { name: "Manicure and Pedicure", price: "&pound;40" },
      { name: "French Manicure", price: "&pound;18" }
    ]
  },
  {
    title: "Gel Colour",
    items: [
      { name: "Shellac Nail", price: "&pound;20" },
      { name: "Manicure with shellac", price: "&pound;28" },
      { name: "Shellac Toes", price: "&pound;25" },
      { name: "Pedicure with shellac", price: "&pound;38" },
      { name: "BIAB", price: "&pound;35" }
    ]
  },
  {
    title: "Nail Extensions - Acrylic",
    columns: ["Full set", "Full in"],
    items: [
      { name: "Acrylic", fullSet: "&pound;30", fullIn: "&pound;22" },
      { name: "Acrylic with shellac", fullSet: "&pound;38", fullIn: "&pound;28" },
      { name: "Acrylic overlay", fullSet: "&pound;30", fullIn: "&pound;22" },
      { name: "Acrylic overlay with shellac", fullSet: "&pound;38", fullIn: "&pound;28" },
      { name: "Take off new set", fullSet: "&pound;35", fullIn: "" },
      { name: "Take off new set with shellac", fullSet: "&pound;43", fullIn: "" }
    ]
  },
  {
    title: "Nail Extensions - Gel, Pink and White, Ombre",
    columns: ["Full set", "Full in"],
    items: [
      { name: "Gel", fullSet: "&pound;33", fullIn: "&pound;28" },
      { name: "Gel with shellac", fullSet: "&pound;40", fullIn: "&pound;33" },
      { name: "Gel overlay", fullSet: "&pound;33", fullIn: "&pound;28" },
      { name: "Gel overlay with shellac", fullSet: "&pound;40", fullIn: "&pound;33" },
      { name: "Take off new set", fullSet: "&pound;38", fullIn: "" },
      { name: "Take off new set with shellac", fullSet: "&pound;43", fullIn: "" },
      { name: "Pink and white", fullSet: "&pound;40", fullIn: "&pound;33" },
      { name: "Take off new set pink & white", fullSet: "&pound;45", fullIn: "" },
      { name: "Ombre", fullSet: "&pound;40", fullIn: "&pound;33" },
      { name: "Take off new set ombre", fullSet: "&pound;45", fullIn: "" },
      { name: "Take off new set SNS", fullSet: "&pound;35", fullIn: "" }
    ]
  },
  {
    title: "Extra",
    items: [
      { name: "Polish change (hand)", price: "&pound;10" },
      { name: "Nail repair (per nail)", price: "&pound;3" },
      { name: "Nail art design from", price: "&pound;5" },
      { name: "Gem (x10)", price: "&pound;3" },
      { name: "1 toes nail", price: "&pound;5" }
    ]
  }
];

const galleryItems = [
  {
    src: "1.jpg",
    alt: "Black and nude detailed nail art with floral accents",
    label: "Black floral detail",
    note: "Statement accents with a glossy sculpted finish."
  },
  {
    src: "2.jpg",
    alt: "Long almond nails with dark chrome and floral detailing",
    label: "Dark chrome flowers",
    note: "High-shine colour with delicate art work."
  },
  {
    src: "3.jpg",
    alt: "Pink sculpted nail set with floral details and glossy tips",
    label: "Pink sculpted set",
    note: "Soft pink length with raised floral accents."
  },
  {
    src: "4.jpg",
    alt: "Long pink stiletto nails with detailed flower art",
    label: "Pink stiletto art",
    note: "Sharp length with layered floral detail."
  },
  {
    src: "5.jpg",
    alt: "Long almond nails with tortoiseshell and gold accents",
    label: "Tortoiseshell tips",
    note: "Warm detail with a polished almond shape."
  },
  {
    src: "6.jpg",
    alt: "Bronze chrome almond nails with metallic highlights",
    label: "Bronze chrome",
    note: "Reflective tones for a sharp evening look."
  },
  {
    src: "7.jpg",
    alt: "Chrome almond nail set with olive and pink reflective polish",
    label: "Olive chrome",
    note: "Mirror shine with a neat almond silhouette."
  },
  {
    src: "8.jpg",
    alt: "Brown glossy almond nails with soft curved French tips",
    label: "Brown gloss tips",
    note: "A smooth curved finish with rich colour."
  },
  {
    src: "9.jpg",
    alt: "Silver chrome stiletto nails with reflective pointed tips",
    label: "Silver chrome points",
    note: "Bright metallic shine on a long pointed shape."
  },
  {
    src: "10.jpg",
    alt: "Glossy white and gold almond nail set with sculpted flower detail",
    label: "White gold flower",
    note: "Pearl tones with gold accents and floral texture."
  },
  {
    src: "11.jpg",
    alt: "Soft pink transparent nails with raised flower designs",
    label: "Transparent florals",
    note: "Light pink detail with a glassy finish."
  },
  {
    src: "12.jpg",
    alt: "Yellow and white floral nail art on long square tips",
    label: "Yellow floral set",
    note: "Fresh colour with bright floral details."
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
