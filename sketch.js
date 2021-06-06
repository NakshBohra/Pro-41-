var canvas, backgroundImage;
var xVel,yVel,xSet;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1_Img,car2_Img,car3_Img,car4_Img;
var track,ground;

function preload(){
  track = loadImage("images/track.jpg");
  ground = loadImage("images/ground.png");
  car1_Img = loadImage("images/car1.png");
  car2_Img = loadImage("images/car2.png");
  car3_Img = loadImage("images/car3.png");
  car4_Img = loadImage("images/car4.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  gameState = 0;
  distance = 0;
  xVel = 0;
  yVel = 0;

  xSet = false;
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(200,200,255);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
