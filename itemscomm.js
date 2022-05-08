function display(dataArr){
    dataArr.forEach(function(ele){
    var divall=document.createElement("div");
    var divgrid=document.createElement("div");

    var img=document.createElement("img");
    img.setAttribute("class","image")
    img.src=ele.img;

    var name=document.createElement("p");
    name.setAttribute("class","p")
    name.innerHTML=ele.name;

    var price=document.createElement("p");
    price.setAttribute("class","p")
    price.innerHTML="$"+ ele.price;

    var btn=document.createElement("button");
    btn.innerText="Add To Cart"
    btn.setAttribute("id","btn")
    divall.append(img,name,price,btn);

    divgrid.append(divall)
    document.querySelector(".productitems").append(divgrid)

    btn.addEventListener("click",function(){
        AddtoCart(ele)
    })
})
}

function AddtoCart(ele){
    var cartitems= JSON.parse(localStorage.getItem("cartitems"))||[]
    var obj = cartitems.find(function(o) { 
        return o.productId == ele.productId;
    })
    if(obj != undefined) {
        obj.quantity ++;
        var cartitems = cartitems.filter(function(o) {
            return o.productId != ele.productId
        })
        cartitems.push(obj);
    } else {
        ele.quantity = 1;
        cartitems.push(ele);
    }
    localStorage.setItem("cartitems",JSON.stringify(cartitems));
    alert("Add cart items successfully");
}

document.querySelector("#select").addEventListener("change",function(){
    Shortfun()
})

function Shortfun(){
    var str=document.querySelector("select").value;
    var h=dataArr || []
    if(str == "high"){
        h.sort(function(a, b) {
            return b.price - a.price
        })
    }
    else {
        h.sort(function(a, b) {
            return a.price - b.price
        })
    }
    document.querySelector(".productitems").innerHTML="";
    display(h)
}