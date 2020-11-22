
const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies;
 var engine, world;
  var ground,ball;
   function setup() { createCanvas(800,400);
     engine = Engine.create();
      world = engine.world;
       var object_options = {
          isStatic : true } 
          ground = Bodies.rectangle(400,380,400,20,object_options);
           World.add(world, ground); console.log(ground); 
           var ball_options = {
              restitution: 1 
            } 
            ball = Bodies.circle(400,200,40, ball_options);
             World.add(world, ball);
             } 
             function draw()
              { background("pink");
               rectMode(CENTER);
                Engine.update(engine);
                 rect(ground.position.x, ground.position.y, 400,20);
                  ellipseMode(RADIUS);
                   ellipse(ball.position.x, ball.position.y,40,40);
                   }
