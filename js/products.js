document.addEventListener("DOMContentLoaded", async () => {
    const productsContainer = document.getElementById("productos");
    const categoryFilter = document.getElementById("filter-category");
    const priceFilter = document.getElementById("filter-price");
  
    // Cargar productos desde JSON
    const response = await fetch("productos.json");
    const products = await response.json();
  
    function renderProducts(filteredProducts) {
      productsContainer.innerHTML = "";
      filteredProducts.forEach(product => {
        const productCard = `
          <div class="card" style="width: 18rem">
            <img src="${product.imagen}" class="card-img-top" alt="${product.nombre}" />
            <div class="card-body">
              <h5 class="card-title">${product.nombre}</h5>
              <p class="card-text">${product.descripcion}</p>
              <p><b>$${product.precio}</b></p>
              <a href="#" class="btn btn-primary">Comprar</a>
            </div>
          </div>`;
        productsContainer.innerHTML += productCard;
      });
    }
  
    function filterProducts() {
      let filtered = [...products];
  
      // Filtrar por categoría
      const category = categoryFilter.value;
      if (category !== "all") {
        filtered = filtered.filter(product => product.categoria === category);
      }
  
      // Ordenar por precio
      const priceOrder = priceFilter.value;
      if (priceOrder === "asc") {
        filtered.sort((a, b) => a.precio - b.precio);
      } else if (priceOrder === "desc") {
        filtered.sort((a, b) => b.precio - a.precio);
      }
  
      renderProducts(filtered);
    }
  
    // Event listeners para los filtros
    categoryFilter.addEventListener("change", filterProducts);
    priceFilter.addEventListener("change", filterProducts);
  
    // Renderizar productos inicialmente
    renderProducts(products);
  });