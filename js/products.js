const API_URL = "https://dummyjson.com/products";

const statusEl = document.getElementById("status");
const gridEl = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const countEl = document.getElementById("resultCount");

let allProducts = [];

function formatPrice(value) {
  return `$${Number(value).toFixed(2)}`;
}

function showLoading() {
  statusEl.className = "status visible";
  statusEl.replaceChildren();

  const spinner = document.createElement("div");
  spinner.className = "spinner";

  const text = document.createElement("span");
  text.textContent = "Memuat produk...";

  statusEl.append(spinner, text);
}

function showError(message) {
  statusEl.className = "status visible error";
  statusEl.replaceChildren();

  const text = document.createElement("span");
  text.textContent = `Produk belum bisa ditampilkan (${message}). Silakan coba lagi.`;

  const retryBtn = document.createElement("button");
  retryBtn.type = "button";
  retryBtn.className = "retry-btn";
  retryBtn.textContent = "Coba lagi";
  retryBtn.addEventListener("click", fetchProducts);

  statusEl.append(text, retryBtn);
}

function showInfo(message) {
  statusEl.className = "status visible";
  statusEl.textContent = message;
}

function hideStatus() {
  statusEl.className = "status";
  statusEl.replaceChildren();
}

function createCard(product) {
  const card = document.createElement("article");
  card.className = "card";

  const thumb = document.createElement("div");
  thumb.className = "thumb";
  const img = document.createElement("img");
  img.src = product.thumbnail;
  img.alt = product.title;
  img.loading = "lazy";
  img.onerror = () => {
    img.onerror = null;
    img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect fill='%23e2e8f0' width='300' height='200'/%3E%3Ctext fill='%2364748b' font-family='sans-serif' font-size='14' dy='5' font-weight='600' x='50%25' y='50%25' text-anchor='middle'%3EGambar tidak tersedia%3C/text%3E%3C/svg%3E";
  };
  thumb.appendChild(img);

  const body = document.createElement("div");
  body.className = "card-body";

  const category = document.createElement("span");
  category.className = "card-category";
  category.textContent = product.category;

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = product.title;

  const price = document.createElement("span");
  price.className = "card-price";
  price.textContent = formatPrice(product.price);

  body.append(category, title, price);
  card.append(thumb, body);
  return card;
}

function renderProducts(products) {
  gridEl.replaceChildren();
  countEl.textContent = `${products.length} dari ${allProducts.length} produk`;

  if (products.length === 0) {
    showInfo("Produk tidak ditemukan.");
    return;
  }

  hideStatus();
  const fragment = document.createDocumentFragment();
  products.forEach((product) => fragment.appendChild(createCard(product)));
  gridEl.appendChild(fragment);
}

function handleSearch() {
  const keyword = searchInput.value.trim().toLowerCase();
  const filtered = allProducts.filter(
    (p) =>
      (p.title && p.title.toLowerCase().includes(keyword)) ||
      (p.category && p.category.toLowerCase().includes(keyword)) ||
      (p.brand && p.brand.toLowerCase().includes(keyword))
  );
  renderProducts(filtered);
}

async function fetchProducts() {
  showLoading();
  gridEl.replaceChildren();
  countEl.textContent = "";
  searchInput.disabled = true;

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`server membalas status ${response.status}`);
    }

    const data = await response.json();

    if (!data || !Array.isArray(data.products)) {
      throw new Error("format data dari server tidak sesuai");
    }

    allProducts = data.products;
    searchInput.disabled = false;
    renderProducts(allProducts);
  } catch (error) {
    console.error("Fetch error:", error);
    showError(error.message);
  }
}

searchInput.addEventListener("input", handleSearch);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", fetchProducts);
} else {
  fetchProducts();
}
