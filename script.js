const serviceData = [
  {
    title: "Acrylic and BIAB - Full Set",
    items: [
      { name: "Full Set Acrylic With Gel Polish", duration: "40 mins", price: "&pound;38.00" },
      { name: "Full Set Acrylic With Normal Colour", duration: "40 mins", price: "&pound;30.00" },
      { name: "Full Set Acrylic With White Tip", duration: "45 mins", price: "&pound;42.00" },
      { name: "Full Set Builder Gel (BIAB)", duration: "40 mins", price: "&pound;35.00" },
      { name: "Full Set Builder Gel (BIAB) With White Tip", duration: "45 mins", price: "&pound;38.00" },
      { name: "Full Set Ombre Powder", duration: "40 mins", price: "&pound;38.00" },
      { name: "Full Set Pink and White", duration: "45 mins", price: "&pound;43.00" },
      { name: "Full Set Acrylic - 2 Big Toes", duration: "30 mins", price: "&pound;10.00" },
      { name: "Full Set Acrylic on Toes With Gel Polish", duration: "45 mins", price: "&pound;40.00" },
      { name: "Full Set BIAB Extensions", duration: "40 mins", price: "&pound;38.00" }
    ]
  },
  {
    title: "Acrylic and BIAB - Infill",
    items: [
      { name: "Infill Acrylic With Gel Polish", duration: "40 mins", price: "&pound;28.00" },
      { name: "Infill Acrylic With Normal Colour", duration: "35 mins", price: "&pound;22.00" },
      { name: "Infill Acrylic With White Tip", duration: "45 mins", price: "&pound;32.00" },
      { name: "Infill Builder Gel (BIAB)", duration: "40 mins", price: "&pound;30.00" },
      { name: "Infill Builder Gel (BIAB) With White Tip", duration: "40 mins", price: "&pound;33.00" },
      { name: "Infill Dipping Powder", duration: "40 mins", price: "&pound;30.00" },
      { name: "Infill Ombre Powder", duration: "40 mins", price: "&pound;30.00" },
      { name: "Infill Acrylic - 2 Big Toes", duration: "25 mins", price: "&pound;5.00" },
      { name: "Infill for Acrylic on Toes With Gel Polish", duration: "45 mins", price: "&pound;30.00" }
    ]
  },
  {
    title: "Pedicure and Manicure",
    items: [
      { name: "Pedicure With Gel Polish", duration: "45 mins", price: "&pound;38.00" },
      { name: "Pedicure With Normal Polish", duration: "45 mins", price: "&pound;30.00" },
      { name: "Manicure With Gel Polish", duration: "30 mins", price: "&pound;28.00" },
      { name: "Manicure With Normal Polish", duration: "30 mins", price: "&pound;15.00" },
      { name: "Pedicure and Manicure With Gel Polish", duration: "60 mins", price: "&pound;65.00" },
      { name: "Pedicure and Manicure With Normal Polish", duration: "60 mins", price: "&pound;45.00" },
      { name: "Take Off and Manicure With Gel Polish", duration: "30 mins", price: "&pound;30.00" },
      { name: "Take Off and Manicure With Normal Polish", duration: "30 mins", price: "&pound;20.00" }
    ]
  },
  {
    title: "Natural Nails",
    items: [
      { name: "Shellac on Hands", duration: "30 mins", price: "&pound;20.00" },
      { name: "Shellac on Hands With White Tip", duration: "30 mins", price: "&pound;23.00" },
      { name: "Shellac on Toes", duration: "30 mins", price: "&pound;25.00" },
      { name: "Normal Colour on Hands", duration: "30 mins", price: "&pound;12.00" },
      { name: "Normal Colour on Toes", duration: "30 mins", price: "&pound;15.00" },
      { name: "Take Off and Renew Shellac", duration: "30 mins", price: "&pound;25.00" }
    ]
  },
  {
    title: "Removal Services",
    items: [
      { name: "Take Off Acrylic", duration: "20 mins", price: "&pound;12.00" },
      { name: "Take Off Gel Colour", duration: "25 mins", price: "&pound;10.00" }
    ]
  },
  {
    title: "Take Off and New Set",
    items: [
      { name: "Take Off and New Set Acrylic With Gel Polish", duration: "60 mins", price: "&pound;43.00" },
      { name: "Take Off and New Set Acrylic With Normal Colour", duration: "60 mins", price: "&pound;35.00" },
      { name: "Take Off and New Set Builder Gel (BIAB)", duration: "60 mins", price: "&pound;40.00" },
      { name: "Take Off and New Set Acrylic on Toes With Gel Polish", duration: "50 mins", price: "&pound;45.00" },
      { name: "Take Off and New Set Ombre Powder", duration: "60 mins", price: "&pound;43.00" },
      { name: "Take Off and New Set Pink and White", duration: "60 mins", price: "&pound;43.00" }
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
    category.items.forEach((item) => {
      const itemEl = document.createElement("article");
      itemEl.className = "service-item";
      itemEl.innerHTML = `
        <div class="service-meta">
          <strong>${item.name}</strong>
          <span>${item.duration}</span>
        </div>
        <div class="service-cost">
          <strong>${item.price}</strong>
          <span>Cash only</span>
        </div>
      `;
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
