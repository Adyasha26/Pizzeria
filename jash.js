const btnCart = document.getElementById('cart-btn');
const cartContainer = document.querySelector('.cart-container');
const btnClose =document.querySelector('.close');

const placeOrderButton = document.getElementById('place-order-btn');





btnCart.addEventListener('click', () =>{
    cartContainer.classList.toggle('show-cart-container');
});






btnClose.addEventListener('click',() =>{
    cartContainer.classList.remove('show-cart-container');
    
});



    document.addEventListener('DOMContentLoaded', loadFood);
     

    function loadFood(){
        loadContent();
    }

    function loadContent(){
//baki
 let btnRemove=document.querySelectorAll('.cart-remove');
 console.log(btnRemove);
 btnRemove.forEach((btn)=>{
    btn.addEventListener('click',removeItem);
 });

 let qtyElements = document.querySelectorAll('.cart-quantity');
 qtyElements.forEach((input)=>{
    input.addEventListener('change',changeQty);
 });



 


let cartBtns = document.querySelectorAll('.add-cart');
cartBtns.forEach((btn)=>{
    btn.addEventListener('click',addCart);
   
});


cartBtns.forEach((btn2) => {
    btn2.addEventListener('click', () => {
        cartContainer.classList.toggle('show-cart-container');
        
    });
});



updateTotal();

    }


function removeItem(){
    if(confirm('Are you sure to remove')){
     let title =this.parentElement.querySelector('.cart-info-name').innerHTML;
     itemList = itemList.filter(el => el.title != title);
     this.parentElement.remove();
     loadContent();
    }

}
function changeQty(){
    if(isNaN(this.value) || this.value <1){
        this.value=1;
    }
    loadContent();
    //updateTotal();
}
/*function changeQty() {
    const inputValue = parseInt(this.value);
    if (isNaN(inputValue) || inputValue < 1) {
        this.value = 1;
    }

    loadContent();
    updateTotal(); // Update the total immediately
}*/
let itemList =[];


function addCart(){

    let food = this.parentElement;
    let title = food.querySelector('.cart-info-name').innerHTML;
    let price=food.querySelector('.cart-price').innerHTML;
    let imgSrc =this.parentElement.querySelector('.cart-img').src;

    let newProduct ={title,price,imgSrc}

    if(itemList.find((el) => el.title == newProduct.title)){
        alert("Product Already added in cart");
        return;
    }

    else{
        itemList.push(newProduct);
    }

    let newProductElement = createCartProduct(title,price,imgSrc);
    let element = document.createElement('div');
    
    element.innerHTML=newProductElement;
    let cartBasket =document.querySelector('.cart-list');
    cartBasket.append(element);
    loadContent();
}

function createCartProduct(title,price,imgSrc){
    return`
     

    <div class="cart-box">
    <img src="${imgSrc}" class="cart-img" alt="">
    <div class="cart-info">
      <div class="cart-info-name">${title}</div>
      <div class="cart-price">${price}</div>
      <div class="cart-amt">${price}</div>
    </div>
    <input type="number" value="1" class="cart-quantity">
    <div class="cart-remove">+</div>
   </div>


    `;
}

function updateTotal(){
    const cartItems = document.querySelectorAll('.cart-box');
    const totalValue=document.getElementById('cart-total-value');

    let total=0;

    cartItems.forEach(product =>{
        let priceElement = product.querySelector('.cart-price');
        let priceText=priceElement.innerHTML;
        console.log("Price Text:",priceText);
        let price=parseFloat(priceText.replace("Rs",""));
         console.log("price:",price);

        let qtyElements = product.querySelector('.cart-quantity');
        let qty = parseInt(qtyElements.value);
        console.log("Quantity:",qty);


        total+= price*qty;
        console.log(total);
        product.querySelector('.cart-amt').innerHTML="Rs."+(price * qty);

    });

    totalValue.innerHTML='Rs.'+ total;
    console.log(total);


   
    


    const cartCount =document.getElementById('cart-count-info');
let count=itemList.length;
console.log(count);
cartCount.innerHTML=count;



if(count===0){
cartCount.style.display = 'none' 
   
} else {
    cartCount.style.display = 'block';
}



placeOrderButton.addEventListener('click', function() {
    // Display an alert when the button is clicked
    alert('Confirm Your Order of '+ total +' !!');

    // You can also perform additional actions here, such as submitting the order to a server.
});

document.addEventListener('DOMContentLoaded', function() {
    const placeOrderButton = document.getElementById('place-order-btn');

    // Define the event listener function
    function handlePlaceOrderClick() {
        // Calculate the total amount based on your cart items or wherever it's derived from
        const total = updateTotalTotal(); // Replace with your actual calculation logic

        // Display an alert with the total amount
        alert('Confirm Your Order of ' + total + ' !!');

        // You can also perform additional actions here, such as submitting the order to a server.

        // Remove the event listener to ensure it runs only once
        placeOrderButton.removeEventListener('click', handlePlaceOrderClick);
    }

    // Add the event listener to the button
    placeOrderButton.addEventListener('click', handlePlaceOrderClick);

    // Function to calculate the total amount (replace with your calculation logic)
   
});
console.log("external");
console.log(total);



var options = {
    "key": "rzp_test_YFUEuQnNjPDf6o", // Enter the Key ID generated from the Dashboard
    "amount": total, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Pizzeria", //your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "order_MfpurA9McbKMBd", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com", 
        "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
console.log("extra");
console.log(total);
var rzp1 = new Razorpay(options);
rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});
document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}


}











    