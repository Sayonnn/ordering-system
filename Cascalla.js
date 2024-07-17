"use strict";
const Chicken = 300;
const Burger = 200;
const Fries = 50;
const Pizza =500;
const Sandwich = 150;
const Pasta = 250;
const Soda = 50

var quantity = 0;
var total = 0;
  
var arrOrders = [

]
renderOrder();

//computation total


function renderOrder(){
    let sales = 0;
    let orderHTML = "\nItem\t\tQuantity\t\tPrice\r\n\n";
    for(let i = 0; i<arrOrders.length;i++){
        let Items = arrOrders[i];
        let {Item,Quantity,Price} = Items;
        orderHTML += `${Item}\t\t${Quantity}\t\t${Price}\r\n\n`;
        sales += Price;
    }
    document.getElementById("orderContainer").value = orderHTML;

    document.getElementById("Total").value = sales;


    
}

//getting first eleent of article in the html structure


function Reset(){
    document.getElementById("orderContainer").value = " ";
    document.getElementById("Total").value = " ";
}
function renderchicken(){
    quantity = prompt('Enter Product Quantity');
    confirm('Want to Proceed?');
    total = quantity * Chicken;
    try {
        if(total === 0 && quantity < 1 ){
            confirm('Please Verify your order');
        }else{
            arrOrders.push({
                Item:"Chicken",
                Quantity: quantity,
                Price: total
            })
            renderOrder();
        }
    } catch (error) {
        console.log(error);
    }
    
}
function renderBurger(){
    quantity = prompt('Enter Product Quantity');
    confirm('Want to Proceed?');
    total = quantity * Burger;
    try {
        if(total === 0 && quantity < 1){
            confirm('Please Verify your order');
        }else{
            arrOrders.push({
                Item:"Burger",
                Quantity: quantity,
                Price: total
            })
            renderOrder();
        }
    } catch (error) {
        console.log(error);
    }
    
}
function renderFries(){
    quantity = prompt('Enter Product Quantity');
    confirm('Want to Proceed?');
    total = quantity * Fries;
    try {
        if(total === 0 && quantity < 1){
            confirm('Please Verify your order');
        }else{
            arrOrders.push({
                Item:"Fries",
                Quantity: quantity,
                Price: total
            })
            renderOrder();
        }
    } catch (error) {
        console.log(error);
    }
    
}
function renderPizza(){
    quantity = prompt('Enter Product Quantity');
    confirm('Want to Proceed?');
    total = quantity * Pizza;
    try {
        if(total === 0 && quantity < 1){
            confirm('Please Verify your order');
        }else{
            arrOrders.push({
                Item:"Pizza",
                Quantity: quantity,
                Price: total
            })
            renderOrder();
        }
    } catch (error) {
        console.log(error);
    }
    
}
function renderSandwich(){
    quantity = prompt('Enter Product Quantity');
    confirm('Want to Proceed?');
    total = quantity * Sandwich;
    try {
        if(total === 0 && quantity < 1){
            confirm('Please Verify your order');
        }else{
            arrOrders.push({
                Item:"Sandwich",
                Quantity: quantity,
                Price: total
            })
            renderOrder();
        }
    } catch (error) {
        console.log(error);
    }
    
}
function renderPasta(){
    quantity = prompt('Enter Product Quantity');
    confirm('Want to Proceed?');
    total = quantity * Pasta;
    try {
        if(total === 0 && quantity < 1){
            confirm('Please Verify your order');
        }else{
            arrOrders.push({
                Item:"Pasta",
                Quantity: quantity,
                Price: total
            })
            renderOrder();
        }
    } catch (error) {
        console.log(error);
    }
    
}
function renderSoda(){
    quantity = prompt('Enter Product Quantity');
    confirm('Want to Proceed?');
    total = quantity * Soda;
    try {
        if(total === 0 && quantity < 1){
            confirm('Please Verify your order');
        }else{
            arrOrders.push({
                Item:"Soda",
                Quantity: quantity,
                Price: total
            })
            renderOrder();
        }
    } catch (error) {
        console.log(error);
    }
    
}