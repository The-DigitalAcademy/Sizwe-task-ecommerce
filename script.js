// PRODUCTS VARIABLE
var productsState = [
  {
    id: 1,
    name: 'Men Coat Winter',
    price: 1100,
    rates: 5,
    image:
      'https://litb-cgis.rightinthebox.com/images/x/202010/zxszkn1603458969900.jpg',
  },
  {
    id: 2,
    name: 'MKM blue skinny',
    price: 599,
    rates: 3,
    image:
      'https://image.tfgmedia.co.za/image/1/process/486x486?source=https://cdn.tfgmedia.co.za/02/ProductImages/59417917_03.jpg',
  },
  {
    id: 1,
    name: 'Shoulder Bags',
    price: 399,
    rates: 2,
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ5R9kBbGhISOzd3DVOPDrf_P3qBU1HZyWrk4pm9MV7o50Ve7BneG2gawE_k5jQtHajuranGRuk6gbAfxobhHHGvjuccilCqaN3qMYTZt62tCYDIiMTwtiv-A&usqp=CAE',
  },
  {
    id: 1,
    name: 'Men Mason Explorer Leather Backpack',
    price: 3500,
    rates: 1,
    image:
      'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/16529752_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp',
  },
  {
    id: 1,
    name: 'Men Leather Dress Belt',
    price: 490,
    rates: 1,
    image:
      'https://slimages.macysassets.com/is/image/MCY/products/5/optimized/8889015_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp',
  },
  {
    id: 1,
    name: 'Original Grand Wing Oxfords',
    price: 2910,
    rates: 5,
    image:
      'https://slimages.macysassets.com/is/image/MCY/products/6/optimized/14735036_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp',
  },
  {
    id: 1,
    name: 'Slim-Fit Magenta & Blue Floral Blazer',
    price: 970,
    rates: 4,
    image:
      'https://slimages.macysassets.com/is/image/MCY/products/6/optimized/21369806_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp',
  },
  {
    id: 1,
    name: ' Grey Check Slim-Fit Dress Pants, Created for Macy',
    price: 450,
    rates: 3,
    image:
      'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/21543702_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp',
  },
]


var jobCount = []


// LINK JS TO HTML ELEMENT
const products = document.getElementById('products')
const showDisplay = document.getElementById('showDisplay');
const totalCart = document.getElementById('totalCart')


// DISPLAY PRODUCTS IN HOME PAGE
function homeDisplayProducts() {
    products.innerHTML = ""
  // loop into productsState and display
  for (let i = 0; i < productsState.length; i++) {
    products.innerHTML += `
    
    <div class="product">
        <div class="product__img">
            <img
              src=${productsState[i].image}
              alt=""
            />
        </div>
            <div class="product__name">${productsState[i].name}</div>
              <div class="product__rate">
                ${'<span>*</span>'.repeat(productsState[i].rates)}
              </div>
              <div class="product__price">R <span>${productsState[i].price}</span></div> 
                <button onclick="Disshow(${i})">Add To Bag</button> 
          </div>
    
    `
    
  }
  countCart.innerHTML = jobCount.length
}

function Disshow(i) {
  document.getElementById('countCart').innerHTML = jobCount.length;
  jobCount.push(productsState[i])

  homeDisplayProducts();

  display()
  Showtotal()
  saveToStroage()
  getToLocalStorage()
  
}

function display() {
  showDisplay.innerHTML = ""
  // loop into productsState and display
  for (let i = 0; i < jobCount.length; i++) {
    showDisplay.innerHTML += `
    
    <div class="product">
        <div class="product__img">
            <img
              src=${jobCount[i].image}
              alt=""
            />
        </div>
            <div class="product__name">${jobCount[i].name}</div>
              <div class="product__rate">
                ${'<span>*</span>'.repeat(jobCount[i].rates)}
              </div>
              <div class=+"product__price">R <span>${jobCount[i].price}</span></div> 
                <button onclick="remove(${i})">- Remove</button> 
          </div>
    
    `
    
}
saveToStroage()
  getToLocalStorage()

}

function remove(i) {
  jobCount.splice(i, 1)
  document.getElementById('countCart').innerHTML = jobCount.length;
  display();
  Showtotal()
  saveToStroage()
  getToLocalStorage()
}
display()

totalCart.innerHTML = jobCount

// CALL THE DISPLAY FUNCTION
homeDisplayProducts()

function Showtotal(i) {
 let total = 0;

  for (let i = 0; i < jobCount.length; i++) {
    total += jobCount[i].price
    
  }
  
  totalCart.innerHTML = "R"+total 
  
  Showtotal()

  homeDisplayProducts();
  saveToStroage()
  getToLocalStorage()
  
}

//function can save into LocalStorage
function  saveToStroage() {
  let data = JSON.stringify(jobCount)
  localStorage.setItem('jobCount', data)

}
 function getToLocalStorage() {
  let data = JSON.parse(localStorage.getItem('jobCount'))
  jobCount = data
 }
 
display()


