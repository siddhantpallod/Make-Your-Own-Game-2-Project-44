var ball;
var board;
var bubbles;
var ballImg, boardImg;
var blue,green,orange,purple,red,yellow;
var blueImg,greenImg,orangeImg,yellowImg;
var gameState = "start";
var blueGroup, greenGroup, orangeGroup, yellowGroup;
var score = 0;
var heartImg, heart1, heart2 , heart3;
var bombImg , bomb, bombGroup;
var count = 0;
var boomImg, gameOverImg;
var boom , gameOver;
var spaceImg, space;
var bg;

function preload(){
  ballImg = loadImage("images/ball1.png");
  boardImg = loadImage("images/skateboard1.png");
  blueImg = loadImage("images/blue.png");
  greenImg = loadImage("images/green.png");
  orangeImg = loadImage("images/orange.png");
  yellowImg = loadImage("images/yellow.png");
  heartImg = loadImage("images/heart.png");
  bombImg = loadImage("images/bomb.png");
  boomImg = loadImage("images/Boom.JPG");
  gameOverImg = loadImage("images/gameover1.JPG");
  spaceImg = loadImage("images/Space.png");
}

function setup(){
  createCanvas(600,500);
  ball = createSprite(300,440,20,20);
  ball.addImage(ballImg);
  ball.scale = 0.2;
 // ball.debug = true;
  ball.setCollider("circle",15,0,70);

  board = createSprite(300,450,80,20);
  board.addImage(boardImg);
  board.scale = 0.4;
  //board.debug = true;
  board.setCollider("rectangle",0,0,150,10);

  blueGroup = createGroup();
  greenGroup = createGroup();
  orangeGroup = createGroup();
  yellowGroup = createGroup();
  bombGroup = createGroup();

  /*heart1 = createSprite(550,30,20,20);
  heart1.addImage(heartImg);
  heart1.scale = 0.05;

  heart2 = createSprite(520,30,20,20);
  heart2.addImage(heartImg);
  heart2.scale = 0.05;

  heart3 = createSprite(490,30,20,20);
  heart3.addImage(heartImg);
  heart3.scale = 0.05;

  boom = createSprite(300,330,400,400);
  boom.addImage(boomImg);
  boom.scale = 1.16;
  boom.visible = false;

  gameOver = createSprite(290,250,20,50);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 1.13;
  gameOver.visible = false;

  space = createSprite(515,400,20,20);
  space.addImage(spaceImg);
  space.scale = 0.2;
  space.visible = false;
*/
}

function draw(){
   background("black");
  
  edges = createEdgeSprites();
  board.bounceOff(edges);

  if (gameState === "start"){ 
    clear();
    textSize(20);
    fill("red");
    text("Press Space To Start!!", 200,200);
    
    if(keyDown("space")){
      board.velocityX = 5;
      gameState = "stage1";
      
    }
  }

  if(gameState === "stage1"){
    
    if(ball.collide(board)){
    ball.x = board.x;
    }
    
    if(keyDown("UP_ARROW") && ball.y > 400){
      ball.velocityY = -12; 
    }

    if(keyDown("LEFT_ARROW")){
      //ball.velocityY = -7;
      ball.velocityX = -3;
    }

    if(keyDown("RIGHT_ARROW")){
      //ball.velocityY = -7;
      ball.velocityX = 3;
    }

    ball.velocityY += 0.2;

    if(ball.isTouching(blueGroup) && ball.y < 430){
      blueGroup.destroyEach();
      score += 1;
    }

    if(ball.isTouching(greenGroup) && ball.y < 430){
      greenGroup.destroyEach();
      score += 1;
    }

    if(ball.isTouching(orangeGroup) && ball.y < 430){
      orangeGroup.destroyEach();
      score += 1;
    }

    if(ball.isTouching(yellowGroup) && ball.y < 430){
      yellowGroup.destroyEach();
      score += 1;
    }

    /*if(ball.isTouching(bombGroup) && ball.y < 430){
      count += 1;
      bombGroup.destroyEach();
    }
    */

   // if(ball.y > 500){
     // count = count + 1;
      //gameState = "resume";
    //}

    /*switch(count){
      case 1 : heart1.visible = false;
      break;
      case 2 : heart2.visible = false;
      break;
      case 3 : heart3.visible = false;
      break;
      default : 
      break;
    }
    

    if(count === 3){
      gameState = "end";
    }

    */

    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[1]);
    ball.bounceOff(edges[0]);


    createBubble();
    createBomb();

    textSize(20);
    stroke("white");
    text("Score: " + score , 30,70);

    

    
    
  }

  /*if(gameState === "resume"){
    textSize(20);
    fill("white");
    text("Press 'Space' To Resume!!",200,200)
    bombGroup.setVelocityEach(0,0);
    blueGroup.setVelocityEach(0,0);
    greenGroup.setVelocityEach(0,0);
    orangeGroup.setVelocityEach(0,0);
    yellowGroup.setVelocityEach(0,0);
    bombGroup.setLifetimeEach(-1);
    blueGroup.setLifetimeEach(-1);
    greenGroup.setLifetimeEach(-1);
    orangeGroup.setLifetimeEach(-1);
    yellowGroup.setLifetimeEach(-1);
    board.visible = false;
  }
  
  if(keyDown("space") && gameState === "resume"){
    board.visible = true;
    board.velocityX = 5;
    ball.x = board.x;
    ball.y = 440;
    bombGroup.destroyEach();
    blueGroup.destroyEach();
    greenGroup.destroyEach();
    orangeGroup.destroyEach();
    yellowGroup.destroyEach();
    gameState = "stage1";
  }

  if (gameState === "end") {
    space.visible = true;
    boom.visible = true;
    
    if(keyDown("space")){
      gameState = "end1";
    }
  }

  if (gameState === "end1") {
    boom.visible = false;
    space.visible = false;
    gameOver.visible = true;
  }
  */

  ball.collide(board);
  
  drawSprites();
  
}

function createBubble(){
  if(frameCount % 120 === 0){
    blue = createSprite(random(30,550),0,20,20);
    blue.addImage(blueImg);
    blue.scale = 0.7;
    blue.velocityY = 3; 
    blue.depth = ball.depth - 1;
    blue.lifetime = 167;
    blueGroup.add(blue);
  }
  if(frameCount % 115 === 0){
    orange = createSprite(random(30,550),0,20,20);
    orange.addImage(orangeImg);
    orange.scale = 0.7;
    orange.velocityY = 3; 
    orange.depth = ball.depth - 1;
    orange.lifetime = 167;
    orangeGroup.add(orange);
  }
  if(frameCount % 130 === 0){
    green = createSprite(random(30,550),0,20,20);
    green.addImage(greenImg);
    green.scale = 0.7;
    green.velocityY = 3; 
    green.depth = ball.depth - 1;
    green.lifetime = 167;
    greenGroup.add(green);
  }
  if(frameCount% 120 === 0){
    yellow = createSprite(random(30,550),0,20,20);
    yellow.addImage(yellowImg);
    yellow.scale = 0.7;
    yellow.velocityY = 3; 
    yellow.depth = ball.depth - 1;
    yellow.lifetime = 167;
    yellowGroup.add(yellow);
  }
}

function createBomb(){
  if(frameCount % 200 === 0){
    bomb = createSprite(random(30,550),0,20,20);
    bomb.addImage(bombImg);
    bomb.velocityY = 6;
    bomb.depth = ball.depth - 1;
    bomb.scale = 0.1;
    bomb.lifetime = 84;
    bombGroup.add(bomb);
  }
}

