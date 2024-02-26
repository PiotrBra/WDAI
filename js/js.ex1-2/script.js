let originalProductsData = [];
let displayedProducts = [];

function fetchDataAndRender() {
    fetch("https://dummyjson.com/products")
        .then(response => response.json())
        .then(data => {
            originalProductsData = data.products;
            displayedProducts = [...originalProductsData];
            renderProductList(displayedProducts);
        })
        .catch(error => console.error('Error loading JSON file:', error));
}

function renderProductList(products) {
    const productListContainer = document.getElementById('product-list');
    productListContainer.innerHTML = '';

    products.forEach(product => {
        const productContainer = document.createElement('div');
        productContainer.className = 'product';

        const productTitle = document.createElement('h2');
        productTitle.textContent = product.title;

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        const productIcon = document.createElement('img');
        productIcon.src = product.thumbnail;
        productIcon.alt = product.title;

        productContainer.appendChild(productTitle);
        productContainer.appendChild(productDescription);
        productContainer.appendChild(productIcon);

        productListContainer.appendChild(productContainer);
    });
}

function toggleFilterOptions() {
    const filterOptions = document.getElementById('filter-options');
    filterOptions.style.display = (filterOptions.style.display === 'none' || filterOptions.style.display === '') ? 'block' : 'none';
}

function toggleSortOptions() {
    const sortOptions = document.getElementById('sort-options');
    sortOptions.style.display = (sortOptions.style.display === 'none' || sortOptions.style.display === '') ? 'block' : 'none';
}

function filterByCategory(category) {
    displayedProducts = originalProductsData.filter(product => product.category === category);
    applySort();
}

function resetFilter() {
    displayedProducts = [...originalProductsData];
    applySort();
}

function sortByName(order) {
    if (order === 'asc') {
        displayedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (order === 'dsc') {
        displayedProducts.sort((a, b) => b.title.localeCompare(a.title));
    }
    renderProductList(displayedProducts);
}

function resetSort() {
    displayedProducts.sort((a, b) => a.id - b.id);
    renderProductList(displayedProducts);
}

function applySort() {
    renderProductList(displayedProducts);
}

// Na początku załaduj dane i zainicjalizuj widok.
fetchDataAndRender();
