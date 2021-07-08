var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;
var removeFood;

//create feed and lastFed variable here
var feed;
var lastfed;

function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //create feed the dog button here

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

removeFood = createButton("Feed the dog")
removeFood.position(600,95)
removeFood.mousePressed(deleteFoods)

}

function draw() {
  background(46,139,87);
  foodObj.display();

  //write code to read fedtime value from the database 
  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });

 
  //write code to display text lastFed time here
//Text("last fed ",700,95,50,50)
 
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happyDog);
readStock();
  //write code here to update food stock and last fed time
readStock(data)
lastfed.database.ref('Feedtime').update({
  lastfed:Feedtime
})

}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}

function deleteFoods(){
  foodS--;
  database.ref('/').update({
    Food:foodS
  })
}
