var dog,dogImg,dogImg2;
var database;
var foodS,foodStock;
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png")
  dogImg2 = loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database();
	createCanvas(800, 700);
   
  dog = createSprite(400,400,30,40)
   dog.addImage(dogImg)
   dog.scale = 0.4

   foodStock = database.ref('food')
   foodStock.on("value",readStock);
   textSize(20); 
}


function draw() {  
  //readStock()
  background(46,139,87);
 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg2);
  }

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text(" Press UP ARROW Key To Feed the dog Milk!",130,10,300,20);
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
 if(x<=0){
   x=0;
 }else{
   x=x-1;
 }
database.ref('/').update({
Food:x
 })
}


