const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  engine, world;
var boyImg;
var boy,umbrella;
var dropsA=[];
var ground;
var bolt;
var a,b,c,d;
var ani;
function preload(){
    boyImg=loadImage("proC41Img.png");
    a=loadImage("1.png");
    b=loadImage("2.png");
    c=loadImage("3.png");
    d=loadImage("4.png");
}

function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;
    boy=createSprite(200,400,50,50);
    umbrella = Bodies.circle(boy.x,boy.y,100,{isStatic:true});
    World.add(world,umbrella);
    ground=createSprite(200,560,450,20);
    bolt=createSprite(200,10);
    bolt.addImage("a",a);
    bolt.addImage("b",b);
    bolt.addImage("c",c);
    bolt.addImage("d",d);
    bolt.scale=0.5

    bolt.visible=false;
    for(var i=0;i<=60;i++)
    {
        
        dropsA.push(new Rain(random(10,390),random(5,600),4));

    }
   
    
}

function draw(){
    background(0);
    Engine.update(engine);
   

   
    for(var i=0;i<dropsA.length;i++)
    {
        if(dropsA[i].body.position.y>=550)
        {
         Matter.Body.setPosition(dropsA[i].body,{x:random(10,390),y:random(5,530)})
        }
        dropsA[i].display();
    }
    imageMode(CENTER)
    boy.scale=2;
    boy.addImage("AAB",boyImg);
    
    if(frameCount%70===0)
    {
        bolt.visible=true
        ani=random(1,4);
        if(ani===1)
        {
            bolt.changeImage("a",a)
        }else if(ani===2)
        {
            bolt.changeImage("b",b)

        }else if(ani===3)
        {
            bolt.changeImage("c",c)
        }else if(ani===4)
        {
            bolt.changeImage("d",d)
            
        }

    }else{
        bolt.visible=false
    }

    drawSprites()
}   

