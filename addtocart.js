const product = [
    {
        id: 0,
        image: 'images/cashew.jpg',
        title: 'Cashews',
        price: 120,
    },
    {
        id: 1,
        image: 'images/Fortune.jpg',
        title: 'Fortune',
        price: 60,
    },
    {
        id: 2,
        image: 'images/harpic.jpg',
        title: 'Harpic',
        price: 130,
    },
    {
        id: 3,
        image: 'images/sugar.jpg',
        title: 'Sugar ',
        price: 100,
    },
    {
        id: 4,
        image: 'images/corn.jpg',
        title: 'CornFlakes',
        price: 100,
    },
    {
        id: 5,
        image: 'images/horlicks.jpg',
        title: 'Horlicks',
        price: 115,
    }

];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Rs ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Rs "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Rs "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>Rs ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}