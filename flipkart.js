const ProductsData = [
    {
        id: 1,
        img :"https://tse3.mm.bing.net/th/id/OIP.DtamAZGSvUAtmfXJnopPWQHaEK?pid=Api&P=0&h=180",
        name:"laptop",
        desc: "This is a laptop",
        Price:50000
    },
     {
        id: 2,
        img:"https://tse2.mm.bing.net/th/id/OIP.G21jGJPJH7rxyssLQxRT-QHaEo?pid=Api&P=0&h=180",
        name:"Mobile",
        desc: "This is a mobile",
        Price:20000
    },
     {
        id: 3,
        img:"https://tse1.mm.bing.net/th/id/OIP.Gq_Ox5iEYAca2ivrItuwNwHaE8?pid=Api&P=0&h=180",
        name:"HeadPhones",
        desc: "This is a headphones",
        Price:3000
    },
     {
        id: 4,
        img:"https://tse3.mm.bing.net/th/id/OIP.Pn1lAUt87oBFL4QbAKmfSQHaJ4?pid=Api&P=0&h=180",
        name:"Jeans",
        desc: "This is a jeans",
        Price:1000
    },
     {
        id: 5,
        img:"https://tse4.mm.bing.net/th/id/OIP.QyUCcllQqRMzpHF5JenZqAHaJ4?pid=Api&P=0&h=180",
        name:"Shirts",
        desc: "This is a shirt",
        Price:15000
    },
     {
        id: 6,
        img:"https://tse1.mm.bing.net/th/id/OIP._q2ZA3SymCFdNkFxCJIeBgHaDt?pid=Api&P=0&h=180",
        name:"watch",
        desc: "This is a watch",
        Price:2000
    },
     {
        id: 7,
        img:"https://tse4.mm.bing.net/th/id/OIP.B_fNZJIyu6ciuDfGH9_t7AHaEW?pid=Api&P=0&h=180",
        name:"Mouse",
        desc: "This is a mouse",
        Price:2500
    },
     {
        id: 8,
        img:"https://tse2.mm.bing.net/th/id/OIP.sK_yALdK5mW8mzwj56WvOgHaE8?pid=Api&P=0&h=180",
        name:"Keypad",
        desc: "This is a keypad",
        Price:5000
    },
     {
        id: 9,
        img:"https://tse2.mm.bing.net/th/id/OIP.DqVzU35a5apBk8kQnHZ_MwHaEJ?pid=Api&P=0&h=180",
        name:"Bag",
        desc: "This is a bag",
        Price:1000
    },
     {
        id: 10,
        img:"https://tse1.mm.bing.net/th/id/OIP.itMC2inOfzXMKFw6qpMzagHaE8?pid=Api&P=0&h=180",
        name:"Tab",
        desc: "This is a tab",
        Price:85000
    }
];
let cart = []
let Container = document.getElementById('Container');
function data(Products){
    Container.innerHTML = ""
    Products.forEach((value)=>{
        Container.innerHTML += `<div id="cart">
            <img src="${value.img}">
            <h1>${value.name}</h1>
            <p>${value.desc}</p>
            <mark>${value.Price}</mark> <br>
            <button onclick="add(${value.id})">Add Product </button>

        </div>`


    })
}
data(ProductsData)

function filterD(){
    let search = document.getElementById('search').value.toLowerCase();
    let tempData = ProductsData.filterData((item)=>item.name.toLowerCase()).includes((search));
    data(tempData)
}
function add(product){
    let tempData = ProductsData.find((item)=>item.id==product);
    alert(`${tempData.name} is added`);
    cart.push(tempData);
    totalBill()
    document.getElementById('cartLength').innerHTML = cart.length
}

function totalBill(){
    let sum = cart.reduce((acc,value)=>acc+value.price,0);
    document.getElementById('cartTotal').innerHTML = sum
}