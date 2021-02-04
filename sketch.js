const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var grd1,grd2,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,grd3,Polygon,d1;


function preload(){

}


function setup(){
 
    var canvas = createCanvas(480,700);
    engine = Engine.create();
    world = engine.world;

   grd1=new Ground(240,690,500,10)

}

function draw(){
  background(0)
  Engine.update(engine)
  var divisionHeight=300;

  var particles=[]
  var plinkos=[]
  var divisions=[]
  

  for(var k=0;k<divisions.length;k=k++)         {
    divisions.push(new division(k,height-divisionHeight/2,10,divisionHeight));
  divisions[k].display();
  }
  division.display();
  grd1.display();
}

