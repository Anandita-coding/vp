var dog , happyDog
var foodS,foodStock


function preload()
{
  //load images here
  
  dogI = loadImage("images/dogImg.png")
  dogH = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(900, 500);
  database = firebase.database();

  foodStock = database.ref('food')
  foodStock.on("value",readStock)
  
  var dog = createSprite(650,250,10,10)
  dog.addImage(dogI)
  dog.scale =0.3
}


function draw() {  
background(47,97,139)
  drawSprites();
  //add styles here

}
function readStock(data){
   foodS = data.val();
}


