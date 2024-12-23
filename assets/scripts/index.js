const productsContainer = document.querySelector(".products__cards");
const showMoreBtn = document.querySelector(".btn__loaded");
const categoryFilter = document.getElementById("categoryFilter");
const searchBar = document.getElementById("searchBar");
const clearSearchBtn = document.getElementById("clearSearch");
const showPricesInPesos = document.querySelector(".switch input"); // Selecciona el checkbox para alternar precios

let loadedProducts = 12;
const productsPerPage = 12;
let dolarBlueVenta = null;

const formatPrice = (price) => {
  const hasCents = price % 1 !== 0;
  return (hasCents ? price.toFixed(2) : price.toString())
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const obtenerValorDolarBlue = async () => {
  try {
    const response = await fetch("https://dolarapi.com/v1/dolares/blue");
    const data = await response.json();
    dolarBlueVenta = data.venta;
    console.log(`Valor actual del Dólar Blue: ${dolarBlueVenta}`);
  } catch (error) {
    console.error("Error al obtener el valor del Dólar Blue:", error);
  }
};

const createProductTemplate = (product) => {
  const { id, nombre, imagen, precio, stock } = product;
  const disponibilidad = stock > 0 ? "Entrega inmediata" : "A pedido";
  const disponibilidadClase =
    stock > 0 ? "availability--green" : "availability--orange";

  const precioPesos = dolarBlueVenta ? precio * dolarBlueVenta : "N/A";
  const mostrarPesos = showPricesInPesos.checked;

  return `<div class="card">
    <div class="card__img">
      <img src="${imagen}" alt="${nombre}">
    </div>

    <div class="card__content">
      <h3>${nombre}</h3>
      <div class="card__price">
        <div class="container__prices">
          ${
            mostrarPesos
              ? `<span><img src="./assets/img/banderaargentina.webp" alt="Argentina" class="flag-icon"> $${formatPrice(
                  precioPesos
                )}</span>`
              : `<span><img src="./assets/img/us.webp" alt="EEUU" class="flag-icon"> $${formatPrice(
                  precio
                )}</span>`
          }
        </div>
        <p class="availability ${disponibilidadClase}">${disponibilidad}</p>
      </div>
    </div>

    <div class="card__buy">
      <button class="btn" onclick="sendToWhatsApp('${id}', '${nombre}', '${precio}')">
        ¡Lo quiero!
      </button>
    </div>
  </div>`;
};

const sendToWhatsApp = (id, nombre, precio) => {
  const numeroWhatsApp = "542984779890";
  const mensaje = `Hola, estoy interesado en el producto: ${nombre}, que cuesta $${precio} USD.`;

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
    mensaje
  )}`;

  window.open(url, "_blank");
};

const renderProducts = (productList) => {
  productsContainer.innerHTML = "";

  if (productList.length === 0) {
    productsContainer.innerHTML = `<p class="no-results">No se han encontrado productos...</p>`;
    return;
  }

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

const actualizarValorDolarBlue = () => {
  setInterval(async () => {
    await obtenerValorDolarBlue();
    renderProducts(appState.filteredProducts.slice(0, loadedProducts));
  }, 600000);
};

const appState = {
  products: productsData,
  filteredProducts: productsData,
};

const init = async () => {
  await obtenerValorDolarBlue();
  const initialProducts = appState.filteredProducts.slice(0, loadedProducts);
  renderProducts(initialProducts);

  actualizarValorDolarBlue();

  showMoreBtn.addEventListener("click", showMoreProducts);
  categoryFilter.addEventListener("change", applyFilter);
  searchBar.addEventListener("input", () => {
    applySearch();
    toggleClearButton();
  });
  clearSearchBtn.addEventListener("click", clearSearch);
  showPricesInPesos.addEventListener("change", () => {
    renderProducts(appState.filteredProducts.slice(0, loadedProducts));
  });
};

init();
