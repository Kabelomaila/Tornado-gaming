let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    document.getElementById('cart-count').innerText = cart.length;
    alert(`${productName} has been added to your cart.`);
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let cartItems = cart
        .map(item => `${item.productName} - R${item.price}`)
        .join("\n");
    alert(`Checkout:\n\n${cartItems}\n\nTotal: R${cart.reduce((total, item) => total + item.price, 0)}`);
}
