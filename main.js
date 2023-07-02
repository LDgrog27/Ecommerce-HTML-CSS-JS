// Cambio en la cantidad de artículos ingresados por el usuario
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

addToCartBtn.addEventListener('click', () => {
  lastValue += userInputNumber;
  cartNotification.innerText = lastValue;
  cartNotification.style.display = 'block';
  drawProductModal();
  console.log('Funciona');
});

// Mostrar el modal del carrito
let cartIconBtn = document.querySelector('.header__cart');
let cartModal = document.querySelector('.cart-modal');
let priceModal = document.querySelector('.cart-modal__price');
let productContainer = document.querySelector('.cart-modal__checkout-container');

cartIconBtn.addEventListener('click', () => {
  cartModal.classList.toggle('show');
  if (lastValue === 0) {
    drawProductModal();
  }
});

// Borrar contenido del carrito
function deleteProduct() {
  productContainer.innerHTML = '<p class="cart_empty">Your cart is empty<p/>';
  lastValue = 0;
  cartNotification.innerText = lastValue;
}


//cambiar imagenes cuando se precione los botones flecha.
const imageContainer = document.querySelector(".gallery__image-container");
const previousGalleryBtn = document.querySelector(".gallery__previous");
const nextGalleryBtn = document.querySelector(".gallery__next");
let imgIndex = 1;


nextGalleryBtn.addEventListener('click', () =>{
    changeNextImage(imageContainer);
});

previousGalleryBtn.addEventListener('click', () =>{
  changePreviousImage(imageContainer);
});


//Mostrar el modal de iamgenes cuando hago click en la imagen principal


// FUNCIONES
function drawProductModal() {
  productContainer.innerHTML = '';

  if (lastValue > 0) {
    const product = document.createElement('div');
    product.classList.add('cart-modal__details-container');
    product.innerHTML = `
      <img class="cart-modal__image" src="/images/image-product-1-thumbnail.jpg">
      <div>
        <p class="cart-modal__product">Autumn Limited Edition</p>
        <p class="cart-modal__price">125 x ${lastValue} <span>$${lastValue * 125}.00</span></p>
      </div>
      <img class="cart-modal__delete" src="/images/icon-delete.svg">`;

    productContainer.appendChild(product);

    const deleteProductBtn = product.querySelector('.cart-modal__delete');
    deleteProductBtn.addEventListener('click', deleteProduct);
  } else {
    productContainer.innerHTML = '<p class="cart_empty">Your cart is empty<p/>';
  }

  if (lastValue > 0) {
    priceModal.innerHTML = `$125 x ${lastValue} <span>$${lastValue * 125}.00</span>`;
    const checkoutBtn = document.createElement('button');
    checkoutBtn.classList.add('cart-modal__checkout');
    checkoutBtn.innerText = 'Checkout';
    productContainer.appendChild(checkoutBtn);
  } else {
    priceModal.innerHTML = 'Your cart is empty';
  }
}

function changeNextImage(imgContainer) {
  if(imgIndex == 4) {
    imgIndex = 1;
  }else {
    imgIndex++;
  };
  imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`
};

function changePreviousImage (imgContainer) {
  if(imgIndex == 1) {
    imgIndex = 4;
  }else {
    imgIndex--;
  };
  imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`
};