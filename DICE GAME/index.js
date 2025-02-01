var number_rand = Math.floor(Math.random()*6)+1;
var random_dice_image = "dice" + number_rand + ".png";
var random_img_src = "images/" + random_dice_image;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",random_img_src);

var number_rand2 = Math.floor(Math.random()*6)+1;
var random_dice_image2 = "dice" + number_rand2 + ".png";
var random_img_src2 = "images/" + random_dice_image2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",random_img_src2); 
//if player 1 wins
 if(number_rand > number_rand2){
    document.querySelector("h1").innerHTML = "🤗Player1wins";
 }
 else if(number_rand2 > number_rand){
    document.querySelector("h1").innerHTML = "Player2wins 🤗";
 }
 else{
    document.querySelector("h1").innerHTML = "Draw";
 }