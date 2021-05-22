 var player;
 //var ground;
 var playerImage;
 var groundImage;
 var invisibleGround;
 var obstaclesGroup
                                       
 function preload() {
  playerImage=loadImage("images/C 44.png") 
  obstacleImage=loadImage("images/download 1.png")
  //groundImage=loadImage("images/garden.jfif")

 }

 function setup(){
  createCanvas(500,400)
  //ground=createSprite(width/2,380,width,20);
  // ground.addImage(groundImage)
  // ground.velocityX=-3
   //ground.x=ground.width/2
   player=createSprite(400,360,50,50);
   player.scale=0.10
  // ground.shapeColor="brown"
   player.addImage(playerImage)
   edges=createEdgeSprites()
   invisibleGround=createSprite(200,390,600,10)
   obstaclesGroup=new Group() 
      
  
 }
 function draw(){
   background(0)
   drawSprites();
  if(keyDown(LEFT_ARROW)){
    player.velocityX=-5;
    player.velocityY=0;
  }
  if(keyDown(RIGHT_ARROW)){
    player.velocityX=5;
    player.velocityY=0;
  }
  if(keyDown("space")){
    player.velocityY=-11;
  }
  player.velocityY=player.velocityY+0.8
  //if(ground.x<0){
    //ground.x=ground.width/2
  //}
  
  //player.collide(ground);
  //player.bounceOff(edges[0])
  //player.bounceOff(edges[1])
  //player.bounceOff(edges[2])
  player.collide(invisibleGround)

  //ground.depth=player.depth

  player.depth=player.depth+1
  console.log("player.depth"+player.depth)
  //console.log("ground.depth"+ground.depth) 

 spawnObstacle();

  drawSprites();
 }
 
 function spawnObstacle(){
   if(frameCount%100===0){
     var obstacle=createSprite(500,370,50,5);
      obstacle.addImage(obstacleImage)
      obstacle.scale=0.2
      obstacle.velocityX=-5
      obstaclesGroup.add(obstacle)
   }
 }