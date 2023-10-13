const cartData = JSON.parse(localStorage.getItem('cartItems'));

// Check if cartData is not null and display the items
if (cartData) {
    const cartContainer = document.getElementById('cart-container');

    cartData.forEach(item => {
        // Create and append cart-box elements on the page
        const cartBox = document.createElement('div');
        cartBox.className = 'cart-box';

        // Build the cart box content using item data (title, price, imgSrc, etc.)
        // ...

        // Example: Create elements for title, price, and image
        const titleElement = document.createElement('div');
        titleElement.className = 'cart-info-name';
        titleElement.textContent = item.title;

        const priceElement = document.createElement('div');
        priceElement.className = 'cart-price';
        priceElement.textContent = item.price;

        const imgElement = document.createElement('img');
        imgElement.className = 'cart-img';
        imgElement.src = item.imgSrc;

        // Append the created elements to the cartBox
        cartBox.appendChild(titleElement);
        cartBox.appendChild(priceElement);
        cartBox.appendChild(imgElement);

        // Append the cartBox to the cartContainer
        cartContainer.appendChild(cartBox);

    });

}