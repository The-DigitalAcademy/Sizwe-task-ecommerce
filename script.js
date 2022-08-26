
// VARIABLES
var StoreData = [
  {
    Number: 1,
    category: 'MAC',
    costs: 4,
    money: 12000,
    image: 'https://www.istore.co.za/media/catalog/product/m/g/mgnd3zea.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700',

},

{
  Number: 2,
  category: 'iPhone 13 mini',
  costs: 3,
  money: 16000,
  image: 'https://www.istore.co.za/media/catalog/product/i/p/iphone_13_green_pdp_image_position-1a__wwen_4_1.png?format=jpeg',

},

{
  Number: 3,
  category: 'iPad Pro M1',
  costs: 4,
  money: 16999,
  image: 'https://www.istore.co.za/media/catalog/product/i/p/ipad_pro_wi-fi_12.9_in_space_gray_pdp_image_position-1b__wwen_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700',

},

{
  no: 4,
  category: 'Watch Series 7',
  costs: 5,
  money: 6290,
  image: 'https://www.istore.co.za/media/catalog/product/s/t/starlight_2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=300&canvas=300:300',

},

{
  Number: 5,
  category: 'AirTag',
  costs: 3,
  money: 700,
  image: 'https://www.istore.co.za/media/catalog/product/a/i/airtag_white_pure_front_screen__usen_1_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=300&canvas=300:300',

},

{
  Number: 6,
  category: 'New Balance Fire',
  costs: 4,
  money: 1100,
  image: 'https://th.bing.com/th/id/OIP.DSuzP9FSUAEKDwt84zECEQHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',

},

{
  Number: 7,
  category: 'Apple TV HD 6th Gen - 32GB',
  costs: 5,
  money: 5199,
  image: 'https://www.istore.co.za/media/catalog/product/a/p/apple_tv_4k_siri_remote_pure_front_screen__usen_2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=300&canvas=300:300',

},

{
  Number: 8,
  category: 'Apple AirPods 2 With Charging Case',
  costs: 4,
  money: 2567,
  image: '',

},
]

// this is dislay to HTML in JS
let ProductsiPhoneStore = document.getElementById('ProductsiPhoneStore');
let displayAmount = document.getElementById('displayAmount');
let cartTotal = document.getElementById('cartItems')


// this is variables to JS
let cartMath = 0;
let productMoney = 0;
let productcategory;
let productcosts;
let productImage;




function myCart() {
  
  cartNum = document.getElementById('cartNum').innerHTML = ++ cartMath;

  displayCart.push({Number: displayCart.length +1,
                      category: productcategory,
                      costs: productcosts,
                      money: productMoney,
                      image: '',})

  myDisplay();

//   console.log('displayCart')
}


//i want to show myDisplay to HTML
function myDisplay() {

    ProductsiPhoneStore.innerHTML = ""

    // this is show the number
    for (let d = 0; d < StoreData.length; d++) {
        ProductsiPhoneStore.innerHTML += 
        
        `<div class="product">
        <div class="product__img">
          <img
            src=${StoreData[d].image}
            alt=""
          />
        </div>

        <div class="product__category">${StoreData[d].category}</div>
        <div class="product__cost">
        ${'<span>*</span>'.repeat(StoreData[d].costs)}
        </div>
        <div class="product__price">R <span>${StoreData[d].money}</span></div>
        <button onclick="myCart()">+ ADD TO CART</button>
      </div>`
        
    }


}
myDisplay();