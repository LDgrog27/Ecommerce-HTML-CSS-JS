// Cambio en la cantidad de articulos ingresado por el usuario

let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', () => {
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

minusBtn.addEventListener('click', () => {
    userInputNumber--;

    if (userInputNumber <= 0) {
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

// Agregar el total de productos al carrito

let addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', ()=> {   

    
    lastValue = lastValue + userInputNumber;

    cartNotification.innerText = lastValue; // Para hacer que se sumen las compras, cambio userInputNumber por lastValue
    cartNotification.style.display = 'block';
    drawProductModal();
    
    console.log('Funciona')
})

// Mostrar el modal del carrito 
let cartIconBtn = document.querySelector('.header__cart');
let cartModal = document.querySelector('.cart-modal');
let priceModal = document.querySelector('.cart-modal__price');
let productContainer = document.querySelector('.cart-modal__checkout-container');

cartIconBtn.addEventListener('click', ()=> {
   // cartModal.style.display = 'block';
    cartModal.classList.toggle('show');

    if (lastValue == 0) {
        drawProductModal();
    }
    
} );

   // Borrar contenido del carrito
   function deleteProduct() {
    let deleteProductBtn = document.querySelector('.cart-modal__delete');
    deleteProductBtn.addEventListener('click', ()=> {
    productContainer.innerHTML = '<p class="cart_empty">Your cart is empty<p/>';
    lastValue = 0;
    cartNotification.innerText = lastValue;
   });
}
   // FUNCIONES

   function drawProductModal (){
    productContainer.innerHTML == `
    <div class="cart-modal__details-container">
        <img class="cart-modal__image" src="/images/image-product-1-thumbnail.jpg">
        <div>
        <p class="cart-modal__product">Autumn Limited Edition</p>
        <p class="cart-modal__price">125 x3 <span>$375.00</span></p>
        </div>
        <img class="cart-modal__delete" src="/images/icon-delete.svg">
    </div>
    <button class="cart-modal__checkout">Checkout</button>`;
    deleteProduct();
    priceModal.innerHTML = `$125 x${lastValue} <span>$${lastValue*125}.00</span>`
   }