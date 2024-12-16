const sizeCoffee = document.querySelector('.sizeCoffee'); 
const extraCoffee = document.querySelector('.extraCoffee'); 
const milkTypeCoffee = document.querySelector('.milkTypeCoffee'); 
const update = document.querySelector('.update'); 
const silka = document.querySelector('.OS'); 
const priceForOrderAndBuy = document.querySelector('.priceForOrder'); 
const but_buy_price = document.querySelector('.but_buy_price'); 
const textCoffeeOglavlenie = document.querySelector('.textCoffeeOglavlenie'); 
const couCof = document.querySelector(".countOrder"); 

let listOrder = [];

!localStorage.listOrder ? listOrder = [] : listOrder = JSON.parse(localStorage.getItem('listOrder')); 

const updateocsl = () => { 
    localStorage.setItem('listOrder', JSON.stringify(listOrder)); 
}


const cou_Coff = () => {
  let k = 0;
  listOrder.forEach(lis => {
    k += lis[4];
  })
  couCof.innerHTML = `<p>${k}</p>`;
}
cou_Coff();


const data = JSON.parse(localStorage.getItem('PossibleOrder'));
console.log(data);
let priceCoffee = data.Price;
let fixPrice = 0;

textCoffeeOglavlenie.innerHTML = `<h1>${data.Name}</h1>
                <p>A single espresso shot poured into hot foamy milk, with the surface topped with mildly sweetened cocoa powder and drizzled with scrumptious caramel syrup.</p>`;

let ourCoffeeAdd = []


let PikcherOnCofeSizeWhite = [
  [
    "images/Pikcher.jpg",
    "images/Pikcher.jpg",
    "images/Pikcher.jpg",
    "images/Pikcher.jpg"
  ]
]
const PikcherOnCofeSizeBlack = [
  [
    "images/PickcherBlack.jpg",
  "images/PickcherBlack.jpg",
  "images/PickcherBlack.jpg",
  "images/PickcherBlack.jpg"
  ]
]
const dopss = [
  [
    "SHORT",
    "TALL",
    "GRANDE",
    "VENTI"
  ],
  [
    "SUGAR",
    "MILK"
  ],
  [
    "OAT MILK",
    "SOY MILK",
    "ALMOND MILK"
  ]
]
let colorDopss = [
  [
    "rgb(255, 255, 255)",
    "rgb(255, 255, 255)",
    "rgb(255, 255, 255)",
    "rgb(255, 255, 255)"
  ],
  [
    "rgb(255, 255, 255)",
    "rgb(255, 255, 255)"
  ],
  [
    "rgb(255, 255, 255)",
    "rgb(255, 255, 255)",
    "rgb(255, 255, 255)"
  ]
]
const priceDopss = [
  [
    0,
    0,
    0,
    0
  ],
  [
    0,
    0
  ],
  [
    0,
    0,
    0
  ]
]
const realPriceDopss = [
  [
    50,
    60,
    70,
    100
  ],
  [
    200,
    250
  ],
  [
    300,
    400,
    500
  ]
]
const showAllViborOrder = () => {
  let s1 = ""; let s2 = ""; let s3 = "";
  let i = 0;
  let width = 40; let height = 40;
  dopss[0].forEach(element => {
    s1 += `<div class="sizeCoffeeBox" style="background-color:${colorDopss[0][i]};" onclick="doppsCoffee('${element}', ${0}, ${i})">
      <img style="width: ${width}px; height: ${height}px;" src="${PikcherOnCofeSizeWhite[0][i]}" alt="">
      <button style="background-color:${colorDopss[0][i]}; border: 1px solid ${colorDopss[0][i]};" class="but_vib_size">${element}</button>
      </div>`;
    i++;
  });
  i = 0;
  dopss[1].forEach(element => {
    s2 += `<button style="background-color:${colorDopss[1][i]};" class="but_vib_extra" onclick="doppsCoffee('${element}', ${1}, ${i})">${element}</button>`;
    i++;
  });
  i = 0;
  dopss[2].forEach(element => {
    s3 += `<button style="background-color:${colorDopss[2][i]};" class="but_vib_milktype" onclick="doppsCoffee('${element}', ${2}, ${i})">${element}</button>`;
    i++;
  });

  sizeCoffee.innerHTML = s1;
  extraCoffee.innerHTML = s2;
  milkTypeCoffee.innerHTML = s3;

}

const doppsCoffee = (siz, j, i) => {
  
  let k = 0;
    colorDopss[j].forEach(element => {
      if (k == i){
        if (priceDopss[j][k] == realPriceDopss[j][k] || colorDopss[j][k] == "rgb(223, 186, 84)"){ 
          colorDopss[j][k] = "rgb(255, 255, 255)";
          priceDopss[j][k] = 0;
          if (j == 0){
            PikcherOnCofeSizeWhite[j][k] = "images/Pikcher.jpg";
          }
        }
        else{
          colorDopss[j][k] = "rgb(223, 186, 84)";
          priceDopss[j][k] = realPriceDopss[j][k];
          if (j == 0){
            PikcherOnCofeSizeWhite[j][k] = PikcherOnCofeSizeBlack[j][k];
          }

        }
      }
      else{
        colorDopss[j][k] = "rgb(255, 255, 255)";
        priceDopss[j][k] = 0;
        if (j == 0){
          PikcherOnCofeSizeWhite[j][k] = "images/Pikcher.jpg";
        }
      }
      k++;
    })
    showAllViborOrder();

  
  let p = 0;
  if (ourCoffeeAdd != null){
    k = 0;
    dopss.forEach(strok => {
      strok.forEach(na => {
        if (siz == na){ p = k; }
      })
      k++;
    })
    ourCoffeeAdd[p] = siz;
  }
  else{
    ourCoffeeAdd.push(siz);
  }

  console.log(ourCoffeeAdd);
  console.log(priceDopss)

  let yourPrice = 0; 
  priceDopss.forEach(elem => {
    elem.forEach(el => {
      yourPrice += el;
    })
  })
  fixPrice = yourPrice;
  console.log(fixPrice)
  PriceOrderMade(1);
}
showAllViborOrder();


const PriceOrderMade = (c) => {
  if (c <= 0) { c = 0; }
  let yourPrice = (priceCoffee + fixPrice) * c;
  console.log(yourPrice);
  let f = "";
  f += `
        <p class="cPC">${yourPrice}р</p>
        <div class="countCoffee">
          <button class="minusCoffee" onclick="PriceOrderMade(${c - 1})">-</button>
          <p>${c}</p>
          <button class="plusCoffee" onclick="PriceOrderMade(${c + 1})">+</button>
        </div>`;
  priceForOrderAndBuy.innerHTML = f;
  but_buy_price.innerHTML = `<button onclick="addOrderInList(${yourPrice}, ${c})">Place Order</button>`;
}
PriceOrderMade(1);


const addOrderInList = (yourPrice,c) => {
  if (c < 1){
    alert("Вы не можете заказать кофе, так как кол-во кофе меньше 1")
  }
  else{
    let ordered = [];
    let check = false;
    listOrder.forEach(elem => {
      if (elem[0] == data.Name){
        elem[4] += 1;
        check = true;
      }
    })
  
    if (!check){ 
      ordered.push(data.Name);
      ordered.push(data.Price);
      ordered.push(data.Im);
      ordered.push(yourPrice);
      ordered.push(c);
      listOrder.push(ordered);
    }
      updateocsl();
      console.log(listOrder);
      location.reload(false); 
  }
}


silka.addEventListener("click", () => {   
  ProzrachnotOnBody(true);
  updateTask();
}); 

const updateTask = () => {   
  update.classList.remove("close"); 
  update.classList.add("open"); 
  let s = ''; 
  s += `<div class="update_form"> 
      <div class="mainOreder">
        <h1>Order Status</h1>
        <a id="exithide" href="#" onclick="closeform()">HIDE</a>
      </div>
  </div>
  <div class="Ordered_Kitchen">
      <p>Ordered</p>
      <div class="SavedOrder">

      </div>
  </div>
  <div class="FinalPriceFromOrder">
      
  </div>`;
  update.innerHTML = s;

  const savedOrder = document.querySelector('.SavedOrder');
  const finalPriceFromOrder = document.querySelector('.FinalPriceFromOrder');
  let s2 = ''; let s3 = '';
  listOrder.forEach(lis => {
    s2 += `<div class="CoffeYourOrder">
                <img src="${lis[2]}" alt="кофе">
                <p class="prco">${lis[0]}</p>
                <div class="countisto">
                  <p>${lis[4]}</p>
                </div>
            </div>`;
  })
  savedOrder.innerHTML = s2;

  

  let zena = 0; 
  listOrder.forEach(lis => {
    zena += lis[3];
  })
  s3 += `<p class="total">Total:</p><p class="zena">${zena}р</p>`;
  finalPriceFromOrder.innerHTML = s3;
}; 

const closeform = () => {  
  update.classList.add("close"); 
  update.classList.remove("open");
  ProzrachnotOnBody(false);
};  

const ProzrachnotOnBody = (item) => { 
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  if (item){
    header.style.background = '#f5f5f5'; header.style.opacity = '.3';
    main.style.background = '#f5f5f5'; main.style.opacity = '.3';
  }
  else{
    header.style.background = 'white'; header.style.opacity = '1';
    main.style.background = 'white'; main.style.opacity = '1';
  }
}