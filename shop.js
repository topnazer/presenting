// Base API URL (Replace with your actual API endpoint)
const API_URL = 'https://api.example.com/products';

// Fetch and display products
async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

// Display products in the product grid
function displayProducts(products) {
  const productGrid = document.getElementById('productGrid');
  productGrid.innerHTML = ''; // Clear previous products

  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productGrid.appendChild(productElement);
  });
}

// Search for products based on search bar input
async function searchItems() {
  const query = document.getElementById('searchBar').value;
  if (query) {
    try {
      const response = await fetch(`${API_URL}?search=${query}`);
      const products = await response.json();
      displayProducts(products);
    } catch (error) {
      console.error('Error searching for products:', error);
    }
  } else {
    fetchProducts(); // Load all products if search query is empty
  }
}

// Filter products by category
async function filterCategory(category) {
  try {
    const response = await fetch(`${API_URL}?category=${category}`);
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error('Error filtering products by category:', error);
  }
}

// Add item to cart
function addToCart(productId) {
  // Cart logic here (e.g., increment cart count, store in local storage)
  const cartCount = document.getElementById('cartCount');
  cartCount.textContent = parseInt(cartCount.textContent) + 1;
}

// Load products when page loads
window.addEventListener('DOMContentLoaded', fetchProducts);
