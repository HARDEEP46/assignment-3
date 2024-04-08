let cartItems = [];

function addToCart(productName, price) {
  cartItems.push({ name: productName, price: price });
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
  });
}

function checkout() {
  if (cartItems.length > 0) {
    alert('Thank you for your purchase!');
    cartItems = [];
    renderCart();
  } else {
    alert('Your cart is empty. Please add items before checkout.');
  }
}
