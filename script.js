
// Carrito de compras
let cart = [];

function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartCount.textContent = cart.length;

    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartDisplay();
    alert(`${name} ha sido añadido al carrito.`);  // Alerta para notificar al usuario
}

document.querySelectorAll('.btn-secondary').forEach(button => {
    button.addEventListener('click', (event) => {
        const productInfo = event.target.closest('.product-item');
        const name = productInfo.querySelector('h3').textContent;
        const price = parseFloat(productInfo.querySelector('.price').textContent.replace('$', '').replace(',', ''));
        addToCart(name, price);
    });
});

document.getElementById('view-cart').addEventListener('click', () => {
    const cartContent = document.getElementById('cart-content');
    cartContent.style.display = cartContent.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('El carrito está vacío.');
    } else {
        alert('Compra finalizada exitosamente! Gracias por tu compra.');
        cart = [];  // Vacía el carrito después de finalizar la compra
        updateCartDisplay();
    }
});

// Función para alternar el contenido de las secciones (colapsables)
function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
