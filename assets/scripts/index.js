const productsContainer = document.querySelector(".products__cards");
const showMoreBtn = document.querySelector(".btn__loaded");
const categoryFilter = document.getElementById("categoryFilter");
const searchBar = document.getElementById("searchBar");
const clearSearchBtn = document.getElementById("clearSearch");

let loadedProducts = 12;
const productsPerPage = 12;

const formatPrice = (price) => {
  const hasCents = price % 1 !== 0;
  return (hasCents ? price.toFixed(2) : price.toString())
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const createProductTemplate = (product) => {
  const { id, nombre, imagen, precio } = product;
  return `<div class="card">
    <div class="card__img">
      <img src="${imagen}" alt="${nombre}">
    </div>

    <div class="card__content">
      <h3>${nombre}</h3>
      <span>$${formatPrice(precio)} USD</span>
    </div>

    <div class="card__buy">
      <button class="btn" data-id='${id}' data-name="${nombre}" data-image="${imagen}" data-price="${precio}">
        Agregar al carrito
      </button>
    </div>
  </div>`;
};

const renderProducts = (productList) => {
  productsContainer.innerHTML = "";
  productList.forEach((product) => {
    productsContainer.innerHTML += createProductTemplate(product);
  });
};

const showMoreProducts = () => {
  loadedProducts += productsPerPage;
  const nextProducts = appState.filteredProducts.slice(0, loadedProducts);
  renderProducts(nextProducts);

  if (loadedProducts >= appState.filteredProducts.length) {
    showMoreBtn.style.display = "none";
  }
};

const applyFilter = () => {
  const selectedCategory = categoryFilter.value;
  let filteredProducts = appState.products;

  if (selectedCategory !== "Todos") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );
  }

  appState.filteredProducts = filteredProducts.filter((product) =>
    product.nombre.toLowerCase().includes(searchBar.value.toLowerCase())
  );

  loadedProducts = productsPerPage;

  const visibleProducts = appState.filteredProducts.slice(0, loadedProducts);

  renderProducts(visibleProducts);

  if (appState.filteredProducts.length > productsPerPage) {
    showMoreBtn.style.display = "inline-block";
  } else {
    showMoreBtn.style.display = "none";
  }
};

const applySearch = () => {
  applyFilter();
};

const toggleClearButton = () => {
  if (searchBar.value.trim() !== "") {
    clearSearchBtn.hidden = false;
  } else {
    clearSearchBtn.hidden = true;
  }
};

const clearSearch = () => {
  searchBar.value = "";
  clearSearchBtn.hidden = true;
  applySearch();
};

const appState = {
  products: productsData,
  filteredProducts: productsData,
};

const init = () => {
  const initialProducts = appState.filteredProducts.slice(0, loadedProducts);
  renderProducts(initialProducts);

  showMoreBtn.addEventListener("click", showMoreProducts);
  categoryFilter.addEventListener("change", applyFilter);
  searchBar.addEventListener("input", () => {
    applySearch();
    toggleClearButton();
  });
  clearSearchBtn.addEventListener("click", clearSearch);
};

init();
