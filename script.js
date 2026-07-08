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
      { name: "Dipping powder", fullSet: "&pound;30", fullIn: "" },
      { name: "Take off new set SNS", fullSet: "&pound;35", fullIn: "" }
    ]
  },
  {
    title: "Extra",
    items: [
      { name: "Polish change (hand)", price: "&pound;10" },
      { name: "Polish change (toes)", price: "&pound;12" },
      { name: "Take off (gel, acrylic and shellac)", price: "&pound;10" },
      { name: "Take off and manicure", price: "&pound;20" },
      { name: "Nail cut", price: "&pound;5" },
      { name: "Toes nail cut", price: "&pound;7" },
      { name: "Nail repair (per nail)", price: "&pound;3" },
      { name: "Nail art design from", price: "&pound;5" },
      { name: "Gem (x10)", price: "&pound;3" },
      { name: "Full set toes", price: "&pound;40" },
      { name: "Full set toes with shellac", price: "&pound;45" },
      { name: "1 toes nail", price: "&pound;5" }
    ]
  }
];

const galleryItems = [
  {
    src: "assets/images/ai-gallery-biab.webp",
    alt: "Glossy BIAB manicure with nude pink and deep rose polish",
    label: "BIAB rose gloss",
    note: "Short-to-medium length with a polished finish."
  },
  {
    src: "assets/images/ai-hero-salon.webp",
    alt: "Nude manicure on a clean salon table with polish bottles",
    label: "Soft nude manicure",
    note: "Clean prep and a calm everyday colour."
  },
  {
    src: "assets/images/ai-pedicure.webp",
    alt: "Pedicure setup with polished toes and salon polish bottles",
    label: "Fresh pedicure",
    note: "A tidy finish for sandal days and holidays."
  },
  {
    src: "assets/images/ai-service-detail.webp",
    alt: "Nail technician filing a client's nails at a salon table",
    label: "Shaping detail",
    note: "A careful shape before colour goes on."
  },
  {
    src: "assets/images/gallery-chrome-idea.webp",
    alt: "Chrome manicure with reflective pearl nails at a salon table",
    label: "Chrome idea",
    note: "A brighter finish for a sharper look."
  },
  {
    src: "assets/images/gallery-fine-line-art.webp",
    alt: "Fine line nail art on nude gel nails at a salon table",
    label: "Fine line art",
    note: "Subtle detail without a heavy design."
  },
  {
    src: "assets/images/gallery-white-french-tips.webp",
    alt: "Classic white French tip manicure on a salon table",
    label: "White French tips",
    note: "A clean classic for most nail lengths."
  },
  {
    src: "assets/images/gallery-natural-nails.webp",
    alt: "Short natural nude manicure with tidy cuticles at a salon table",
    label: "Natural nails",
    note: "Simple colour with a neat natural shape."
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
