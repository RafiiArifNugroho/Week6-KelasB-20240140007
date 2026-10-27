const API_URL = "https://dummyjson.com/products";

const gridEl = document.getElementById("productGrid");
const countEl = document.getElementById("resultCount");

let allProducts = [];

function formatPrice(value) {
  return `$${Number(value).toFixed(2)}`;
}

function createCard(product) {
  const card = document.createElement("article");
  card.className = "card";

  const thumb = document.createElement("div");
  thumb.className = "thumb";
  const img = document.createElement("img");
  img.src = product.thumbnail;
  img.alt = product.title;
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
  if (countEl) {
    countEl.textContent = `${products.length} dari ${allProducts.length} produk`;
  }
  const fragment = document.createDocumentFragment();
  products.forEach((product) => fragment.appendChild(createCard(product)));
  gridEl.appendChild(fragment);
}

async function fetchProducts() {
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
    renderProducts(allProducts);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", fetchProducts);
} else {
  fetchProducts();
}
