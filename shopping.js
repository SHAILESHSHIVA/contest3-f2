const itemContainer = document.getElementById("item-container");

// const itemCard = document.getElementById("item-card");

/*
<div class="items">
<img src="https://source.unsplash.com/random/1920x1080/?cheeseburger" alt="">

<div class="price">
    <p id="item_name">name</p>
    <p id="item_price">price</p>
</div>


</div>
<button class="btn">Add To Cart</button>
*/

async function getData() {
  const url =
    "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";

  const resp = await fetch(url);
  const data = await resp.json();

  for (let i = 0; i < data.length; i++) {
    let name = data[i].name;
    let price = data[i].price;

    itemContainer.innerHTML += `

        <div class="item-card" id="item-card">

        <div class="items">
            <img src= ${data[i].imgSrc} alt="">
            
            <div class="price">
                <p id="item_name">${name}</p>
                <p id="item_price">$${price} </p>
            </div>
            
            
        </div>
                
                

        </div>`;
  }

}

  // functions

  function takeOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({O1:"cheeseBurger",O2:"Pizza",O3:"Veggies"});
      }, 2500);
    });
  }

  function orderPrep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }

  function payOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }

  function thankyouFnc() {
    alert("Thank you for eating with us today!");
  }


const btn = document.getElementById("btn");
btn.addEventListener("click", async () => {
  try {
    const order = await takeOrder();
    console.log("Order placed: ", order);

    const orderStatus = await orderPrep();
    console.log("Order status: ", orderStatus);

    const payment = await payOrder();
    console.log("Payment status: ", payment);

    if (payment.paid) {
      thankyouFnc();
    }
  } catch (error) {
    console.log(error);
  }
});



getData();

// loadSingleData();
