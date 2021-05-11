var count = 0;

var color = [];
const canvas2 = document.getElementById("myGame");
const ctx = canvas2.getContext('2d');

let cWidth = canvas2.width;
let cHeight = canvas2.height;

let cPosX = cWidth/2; //horizontal center
let cPosY = cHeight/2; //vertical center

let cVelX = 2;
let cVelY = 1;

let cRadius = 75;
function drawFrame(){
    ctx.clearRect(0, 0, cWidth, cHeight);
    //ctx.fillStyle = "#" + ballColor;
    ctx.strokeStyle = "green";

    ctx.beginPath();
    ctx.arc(cPosX, cPosY, cRadius, 0, Math.PI*2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    if(cPosX + cRadius >= cWidth || cPosX - cRadius <= 0) {
        cVelX = cVelX * -1; //reverse the horizontal direction
    }
    if(cPosY + cRadius >= cHeight || cPosY - cRadius <= 0){
        cVelY = cVelY * -1;
    }

    cPosX = cPosX + cVelX; // change position by velocity
    cPosY = cPosY + cVelY; //
    window.requestAnimationFrame(drawFrame);
}

const g = drawFrame();

canvas2.addEventListener("click", function(event){

    var disp = document.getElementById("display");
    let mouseXp = event.pageX - event.target.offsetLeft;
    let mouseYp = event.pageY - event.target.offsetTop;
    //console.log("Mouse X: " + mouseXp + " Mouse Y: " + mouseYp);
    let distX = Math.abs(cPosX - mouseXp);
    let distY = Math.abs(cPosY - mouseYp);
    if(distX < cRadius && distY < cRadius){
        count++;
        disp.innerHTML = count;
        cVelX = cVelX * 1.5;
        cVelY = cVelY * 1.5;
        setBg();
        const ballColor = Math.floor(Math.random()*1677721).toString(16);
        ctx.beginPath();
        ctx.fillStyle = "#" + ballColor;
        ctx.fill();
        ctx.closePath();

    }

})

const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

setBg();