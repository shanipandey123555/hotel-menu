function orderFood(){

let pizza = document.getElementById("pizza").value;
let burger = document.getElementById("burger").value;
let dosa = document.getElementById("dosa").value;
let noodles = document.getElementById("noodles").value;

let total = (pizza*200) + (burger*120) + (dosa*80) + (noodles*150);

document.getElementById("bill").innerHTML = "Total Bill = ₹" + total;

let message = "New Order:%0A";

if(pizza>0){message += "Pizza x " + pizza + "%0A";}
if(burger>0){message += "Burger x " + burger + "%0A";}
if(dosa>0){message += "Dosa x " + dosa + "%0A";}
if(noodles>0){message += "Noodles x " + noodles + "%0A";}

message += "Total = ₹" + total;

window.open("https://wa.me/91XXXXXXXXXX?text="+message);

}
