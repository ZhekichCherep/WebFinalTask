const CoffeeAllList = [
  [
    {
      image: "images/One.jpg",
      name: "Marchiruno",
      price: 99,
    },
    {
      image: "images/Two.jpg",
      name: "Semistalka",
      price: 199,
    },
    {
      image: "images/Three.jpg",
      name: "Valvero",
      price: 299,
    },
    {
      image: "images/Two.jpg",
      name: "Malbert",
      price: 399,
    },
    {
      image: "images/Three.jpg",
      name: "Valframi",
      price: 499,
    },
    {
      image: "images/One.jpg",
      name: "Mactaracencin",
      price: 599,
    },
    {
      image: "images/Three.jpg",
      name: "Sazenkin",
      price: 699,
    },
  ],
  [
    {
      image: "images/Three.jpg",
      name: "Krushoviza",
      price: 99,
    },
    {
      image: "images/One.jpg",
      name: "Maktaracenkin",
      price: 199,
    },
    {
      image: "images/Two.jpg",
      name: "Barbarasenkin",
      price: 299,
    },
    {
      image: "images/One.jpg",
      name: "Fermucho",
      price: 399,
    },
    {
      image: "images/Two.jpg",
      name: "Maciliviian",
      price: 499,
    },
    {
      image: "images/Three.jpg",
      name: "Saimichec",
      price: 599,
    },
    {
      image: "images/One.jpg",
      name: "Faliano",
      price: 699,
    },
  ],
  [
    {
      image: "images/One.jpg",
      name: "Americanostardes",
      price: 99,
    },
    {
      image: "images/Three.jpg",
      name: "Rumilio",
      price: 199,
    },
    {
      image: "images/Two.jpg",
      name: "Ameriinziala",
      price: 299,
    },
    {
      image: "images/Two.jpg",
      name: "AmeLamburfini",
      price: 399,
    },
    {
      image: "images/One.jpg",
      name: "Malviciano",
      price: 499,
    },
    {
      image: "images/Three.jpg",
      name: "Sugarda",
      price: 599,
    },
    {
      image: "images/Three.jpg",
      name: "Abramovic",
      price: 699,
    },
  ],
  [
    {
      image: "images/Two.jpg",
      name: "Vilasso",
      price: 99,
    },
    {
      image: "images/One.jpg",
      name: "Simantico",
      price: 199,
    },
    {
      image: "images/Three.jpg",
      name: "Siliciano",
      price: 299,
    },
    {
      image: "images/One.jpg",
      name: "Firucho",
      price: 399,
    },
    {
      image: "images/Two.jpg",
      name: "Mikanomi",
      price: 499,
    },
    {
      image: "images/Three.jpg",
      name: "Sevilia",
      price: 599,
    },
    {
      image: "images/Three.jpg",
      name: "Rifino",
      price: 699,
    },
  ],
  [
    {
      image: "images/Two.jpg",
      name: "Xerocs",
      price: 99,
    },
    {
      image: "images/Three.jpg",
      name: "Perlamut",
      price: 199,
    },
    {
      image: "images/One.jpg",
      name: "Miliano",
      price: 299,
    },
    {
      image: "images/Three.jpg",
      name: "Kamac",
      price: 399,
    },
    {
      image: "images/One.jpg",
      name: "Kivilio",
      price: 499,
    },
    {
      image: "images/Two.jpg",
      name: "Malivio",
      price: 599,
    },
    {
      image: "images/Three.jpg",
      name: "Siguro",
      price: 699,
    },
  ],
  [
    {
      image: "images/Two.jpg",
      name: "Flatino",
      price: 99,
    },
    {
      image: "images/Three.jpg",
      name: "Furnomi",
      price: 199,
    },
    {
      image: "images/One.jpg",
      name: "Debirno",
      price: 299,
    },
    {
      image: "images/One.jpg",
      name: "Piki",
      price: 399,
    },
    {
      image: "images/Two.jpg",
      name: "Auerox",
      price: 499,
    },
    {
      image: "images/Three.jpg",
      name: "Sirops",
      price: 599,
    },
    {
      image: "images/One.jpg",
      name: "Samopalovich",
      price: 699,
    },
  ],
  [
    {
      image: "images/One.jpg",
      name: "Rusialodano",
      price: 99,
    },
    {
      image: "images/Two.jpg",
      name: "Simanovich",
      price: 199,
    },
    {
      image: "images/Three.jpg",
      name: "Rusiinziala",
      price: 299,
    },
    {
      image: "images/Three.jpg",
      name: "RusLamburfini",
      price: 399,
    },
    {
      image: "images/One.jpg",
      name: "Rusicano",
      price: 499,
    },
    {
      image: "images/Two.jpg",
      name: "MilkRus",
      price: 599,
    },
    {
      image: "images/Three.jpg",
      name: "Rafinorus",
      price: 699,
    },
  ]
]

const navKar = document.querySelector("#navKar");
const boxCoffe = document.querySelector("#boxCoffee");
const update = document.querySelector('.update'); 
const menu = document.querySelector('.menu');
const silka = document.querySelector('.OS');
const brow = document.querySelector(".input-with-icon");
const couCof = document.querySelector(".countOrder");
const orderStatusVector = document.querySelector('.OrderStatusVector');

let listOrder = [];
!localStorage.listOrder ? listOrder = [] : listOrder = JSON.parse(localStorage.getItem('listOrder')); 

const cou_Coff = () => {
  let k = 0;
  listOrder.forEach(lis => {
    k += lis[4];
  })
  couCof.innerHTML = `<p>${k}</p>`;
}
cou_Coff();

const showCoffees = (
  coffOnePrice,
  coffTwoPrice,
  coffThreePrice,
  coffOneIm,
  coffTwoIm,
  coffThreeIm,
  coffOneName,
  coffTwoName,
  coffThreeName
) => {
  return `<div class="more_card_coffe">
        <div class="cardCoffee">
            <img src="${coffOneIm}" alt="Фотография_Кофе">
            <p>${coffOneName}</p>
            <div class="addCof">
              <p>${coffOnePrice}р</p>
              <button onclick="vibor('${coffOneName}', ${coffOnePrice}, '${coffOneIm}')">+</button>
            </div>
        </div>
        <div class="cardCoffee">
            <img src="${coffTwoIm}" alt="Фотография_Кофе">
            <p>${coffTwoName}</p>
            <div class="addCof">
              <p>${coffTwoPrice}р</p>
              <button onclick="vibor('${coffTwoName}', ${coffTwoPrice}, '${coffTwoIm}')">+</button>
            </div>
        </div>
        <div class="cardCoffee">
            <img src="${coffThreeIm}" alt="Фотография_Кофе">
            <p>${coffThreeName}</p>
            <div class="addCof">
              <p>${coffThreePrice}р</p>
              <button onclick="vibor('${coffThreeName}', ${coffThreePrice}, '${coffThreeIm}')">+</button>
            </div>
        </div>
    </div>`;
};

const showAllCoffees = (j) => {
  let s = "";

  for (let i = 0; i < CoffeeAllList[j].length; i += 3) {
    if (CoffeeAllList[j][i] != null && CoffeeAllList[j][i + 1] != null && CoffeeAllList[j][i + 2] != null) {
      s += showCoffees(
        CoffeeAllList[j][i].price,
        CoffeeAllList[j][i + 1].price,
        CoffeeAllList[j][i + 2].price,
        CoffeeAllList[j][i].image,
        CoffeeAllList[j][i + 1].image,
        CoffeeAllList[j][i + 2].image,
        CoffeeAllList[j][i].name,
        CoffeeAllList[j][i + 1].name,
        CoffeeAllList[j][i + 2].name
      );
    }
  }
  boxCoffe.innerHTML = s;
};

const navigatorCoffee = (item) => {
  if (item > 6){
    item = 0;
  }
  if (item < 0){
    item = 6;
  }

  const NamCof = [
    "Ferucho",
    "Capuchino",
    "Americano",
    "Latte",
    "Expresso",
    "Flat",
    "Milamon"
  ]
  const elem = [];
  s = '';

  if (item > 2){
    let n = 0;
    let k = item
    while (n != 5){
      if (k == 7){
        k = 0;
      }
      elem.push(k);
      console.log(k)
      n++; k++;
    }
  }
  else{
    let n = item;
    while (n != item + 5){
      elem.push(n);
      n++;
    }
  }

    s +=   `<div class="navigator">
              <button class="but_up" onclick="navigatorCoffee(${item - 1})"><img class="imgUp" src="images/Up.jpg" alt="вверх"></button>
              <button class="but_but" onclick="showAllCoffees(${elem[0]})">${NamCof[elem[0]]}</button>
              <button class="but_but" onclick="showAllCoffees(${elem[1]})">${NamCof[elem[1]]}</button>
              <button class="but_but" onclick="showAllCoffees(${elem[2]})">${NamCof[elem[2]]}</button>
              <button class="but_but" onclick="showAllCoffees(${elem[3]})">${NamCof[elem[3]]}</button>
              <button class="but_but" onclick="showAllCoffees(${elem[4]})">${NamCof[elem[4]]}</button>
              <button class="but_down" onclick="navigatorCoffee(${item + 1})"><img class="imgDown" src="images/Down.jpg" alt="вниз"></button>
            </div>`

  navKar.innerHTML = s;
};

const vibor = (coffName, coffPrice, coffIm) => {
  console.log(coffName);
  console.log(coffPrice);
  console.log(coffIm);
  window.open("CoffeeBuy.html","_self") 
  
  localStorage.setItem('PossibleOrder', JSON.stringify({Name: `${coffName}`, Price: coffPrice, Im: `${coffIm}`}));
};

showAllCoffees(0);
navigatorCoffee(0); 

document.addEventListener('keydown', function(event){ 
  if (event.key === 'Enter'){
    let check = false;
    let s = "";
    const myCoffee = (document.querySelector(".input-with-icon")).value;
    CoffeeAllList.forEach(listening => {
      listening.forEach(lis => {
        console.log(lis.name);
        if (lis.name == myCoffee){
          s += `<div class="cardCoffee">
              <img src="${lis.image}" alt="Фотография_Кофе">
              <p>${lis.name}</p>
              <div class="addCof">
                <p>${lis.price}р</p>
                <button onclick="vibor('${lis.name}', ${lis.price}, '${lis.image}')">+</button>
              </div>
            </div>`;
            boxCoffe.innerHTML = s;
          check = true;
        }
      })   
    })
    if (!check){
      alert("Извините, но в нашем магазине нету такого кофе");
    }
    (document.querySelector(".input-with-icon")).value = ""; 
  }
})

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
  const nav = document.querySelector('nav');
  if (item){
    header.style.background = '#f5f5f5'; header.style.opacity = '.3';
    main.style.background = '#f5f5f5'; main.style.opacity = '.3';
    nav.style.background = '#f5f5f5'; nav.style.opacity = '.3';
  }
  else{
    header.style.background = 'rgb(236, 236, 236)'; header.style.opacity = '1';
    main.style.background = 'rgb(236, 236, 236)'; main.style.opacity = '1';
    nav.style.background = 'rgb(236, 236, 236)'; nav.style.opacity = '1';
  }
} 

function handleResize() {
  const width = window.innerWidth;
  if (width >= 769){
    let s = `<img src="images/Vector.jpg" alt="Бургер" onclick="openMenu()">`
    orderStatusVector.innerHTML = s;
  }
  else{
    if (width < 769) {
      let s = `<img src="images/burger.jpg" alt="Бургер" onclick="openMenu()">`
      orderStatusVector.innerHTML = s;
    }
  
    else{
      navigatorCoffee(0);
    }
  }
}
window.addEventListener('resize', handleResize);
handleResize();

const openMenu = () => {
  menu.classList.remove("closeM"); 
  menu.classList.add("openM");
  let s = `<div class="viborka">
            <button onclick="showAllCoffees(0)">Black</button>
            <button onclick="showAllCoffees(1)">Capuchino</button>
            <button onclick="showAllCoffees(2)">Americano</button>
            <button onclick="showAllCoffees(3)">Latte</button>
            <button onclick="showAllCoffees(4)">Expresso</button>
            <button onclick="showAllCoffees(5)">Flat</button>
            <button onclick="showAllCoffees(6)">Rus</button>
          </div>`
  menu.innerHTML = s;

  let s1 = `<img src="images/burger.jpg" alt="Бургер" onclick="closeMenu()">`
  orderStatusVector.innerHTML = s1;
}
const closeMenu = () => {  
  menu.classList.add("closeM"); 
  menu.classList.remove("openM");
  if (window.innerWidth < 769){
    let s = `<img src="images/burger.jpg" alt="Бургер" onclick="openMenu()">`
    orderStatusVector.innerHTML = s;
  }
};
closeMenu();