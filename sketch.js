const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  engine, world;
var boyImg;
var boy;
var drops;
dropsA=[];
function preload(){
    boyImg=loadImage("proC41Img.png");
}

function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;

    for(var i=0;i<=60;i++)
    {
        drops=new Rain(random(10,390),5,9);
        dropsA.push(drops);

    }
   
    
}

function draw(){
    Engine.update(engine);
    background(50);

   
    for(var i=0;i<dropsA.length;i++)
    {
        dropsA[i].display();
    }
    
}   

