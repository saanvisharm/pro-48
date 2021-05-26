var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var player, form;
var girl, boy;
var players;

function preload(){
girlimg=loadImage("bbike.png");
boyimg=loadImage("rbike.png");
 road=loadImage("track.jpg");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
} 


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
    textSize(25);
    fill("white");
    text("You Win",displayHeight/2,displayWidth/2);
  }
}
