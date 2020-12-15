const Engine =Matter.Engine;
const World =Matter.World;
const Bodies =Matter.Bodies;
var engine,world;
var boy,boy_img;
var l,i,g,h,height;
var drops=[],light;
var maxDrops=100;
var rand,umb;
function preload(){
   // boy_img = loadImage("images/walking_5.png");
    l = loadImage("thunderbolt/1.png");
    i = loadImage("thunderbolt/2.png");
    g = loadImage("thunderbolt/3.png");
    h = loadImage("thunderbolt/4.png");
}
function setup(){
    
    engine = Engine.create();
    world = engine.world;
    createCanvas(500,700);
  
   
    
    umb = new Umbrella(250,450,30);
    for (var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,400),random(0,400)))
    }

   height = 701;

   
  
}

function draw(){
    
    Engine.update(engine);
    background(0);
    
    rand = Math.round(random(1,4));
    if (frameCount%50===0)
    {
        light = createSprite(random(10,370),random(10,30),1,1);
        
    switch(rand){
        case 1: light.addImage(l);
        break;
        case 2: light.addImage(i);
        break;
        case 3: light.addImage(g);
        break;
        case 4: light.addImage(h);
        break;
        default:break;

    }
    light.scale= random(0.3,0.6);
}
umb.display();
for (var i = 0; i<maxDrops; i++){
    drops[i].showDrop();
    drops[i].updateY();
}
console.log(frameCount);

 drawSprites();
    
}   

