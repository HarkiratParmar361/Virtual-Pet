//Create variables here
var dataBase;
var dog,happyDog,foodS,foodStock;
function preload()
{
  //load images here
  dogImg.loadImage(img/dog.png)
  dog1Img.loadImage(img/dog1.png)
}

function setup() {
	createCanvas(500,500);
  foodstocl=dataBase.ref('food');
foodStock.on("value",redstock);
}
function draw() {  
  dog=createSprite(100,200);
  dog.addImage(dogImg)

  dog1=createSprite(100,300);
  dog1.addImage(dog1Img)

  drawSprites();
  //add styles here

}
if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(dogHappy);
}
function redstock(data){
  foods=data.val();
}

function writeStock(x){
  dataBase.ref('/').update({
    food:x
  })
}




