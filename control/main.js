import {bird} from "./bird.js";
import {ongcong} from "./ong.js";
let canvas =document.getElementById("gameZone");
 let context= canvas.getContext("2d");
let diem =document.getElementById("score");
let diem1=0;
let audio =new Audio();
audio.src='../nhac/1.mp3'
const conchim=new Image();
const ongduoi=new Image();
const ongtren=new Image();
const hinhnen =new Image();
const khoangcachong=300;
conchim.src="img/bird.png";
ongduoi.src="img/ongduoi.png";
ongtren.src="img/ongtren.png";
hinhnen.src="img/nenchinh.png";



let bird1 = new bird(canvas.width,canvas.height);
const run = () => 
{
        
    context.drawImage(hinhnen,0,0);
    context.drawImage(conchim,bird1.x,bird1.y);
    
    
    for(let i=0;i<=ongcong.length-1;i++)  
    {
       
        console.log(ongcong[0].x);
        context.drawImage(ongtren,ongcong[i].x,ongcong[i].y-700);
        context.drawImage(ongduoi,ongcong[i].x,ongcong[i].y+khoangcachong);
      
            ongcong[i].x-=1;
          
    
      
        if(ongcong[i].x == 1260/2) 
        {
            ongcong.push({x:1260, 
                        y: Math.floor(Math.random()*300+1)}); 
                      
        }
        if(ongcong[i]==0)
        {
            ongcong.splice(0,1);
        }
        console.log(conchim.height);
         if((bird1.y+conchim.height+1)>=canvas.height||bird1.y-conchim.height-1<=0)     
         {       
            audio.pause();
             return;        
         }    
         if(((bird1.x)>=(ongcong[i].x-ongtren.width))&&((bird1.x)<=(ongcong[i].x+ongtren.width))&&(((bird1.y+conchim.height)>=(ongcong[i].y+khoangcachong))||((bird1.y+conchim.height)<=(ongtren.height-(-ongcong[i].y+700)))))   
         {
             audio.pause();
              return;  
         }     
     
    } 
    
    requestAnimationFrame(run); 
    for(var j=0 ;j<=2;j++)
    {
        bird1.y+=0.5;   
    }
    
    
    
  
   
    audio.play();       
}
document.addEventListener("keydown",function()
{
    for(var j=0 ;j<=3;j++)
    {
        bird1.y-=20;   
    }
    

});        
run(); 
