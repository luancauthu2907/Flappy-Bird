import {bird} from "./bird.js";
import {ongcong} from "./ong.js";
let canvas =document.getElementById("gameZone");
 let context= canvas.getContext("2d");
let diem =document.getElementById("score");
let diem1=0;

const conchim=new Image();
const ongduoi=new Image();
const ongtren=new Image();
const hinhnen =new Image();
const khoangcachong=300;
conchim.src="img/bird.png";
ongduoi.src="img/ongduoi.png";
ongtren.src="img/ongtren.png";
hinhnen.src="./img/nenchinh.png";



let bird1 = new bird(canvas.width,canvas.height);
const run = () => 
{

    context.drawImage(hinhnen,0,0);
    context.drawImage(conchim,bird1.x,bird1.y);
    bird1.y+=3; 
   
    console.log(hinhnen);  
    requestAnimationFrame(run);

    for(var i=0;ongcong.length;i++)
    {
        context.drawImage(ongtren,ongcong[i].x,ongcong[i].y-700);
        context.drawImage(ongduoi,ongcong[i].x,ongcong[i].y+khoangcachong);
        ongcong[i].x-=1;
        if(ongcong[i].x == 1260/2) 
        {
            ongcong.push({x:1260,
                        y: 0});
        }
        if(ongcong[i]==0)
        {
            ongcong.splice(0,1);
        }
         
        if((bird1.x>=ongcong[i].x-25) &&(bird1.x<=ongcong[i].x+25))  
        {
             if((bird1.y <788-700)&&(bird1.y >788-700+khoangcachong))
             {
                 diem1++;
                 diem.innerText="over"+diem1;
             }  
        };
    }           
         
}
document.addEventListener("keydown",function()
{
    bird1.y-=80;

});      
run(); 