var canvas = new fabric.canvas('myCanvas');
blockImageWidth = 30;
blockImageHeight = 30;
playerY = 10;
playerY = 10;

var playerObject= "";


function playerUpdate()
{
    fabric.Image.fromURL("player.png", function(Img) {
        playerObject = Img;

        playerObject.scaletoWidth(150);
        playerObject.scaleToHeigth(140);
playerObject.set({
    
top:playerY, 
left:playerX
    });

    canvas.add(playerObject);
});

}




function newImage(getImage)

{
    fabric.Image.fromURL(getImage, function(Img){
        blockImageObject = Img;

        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeigth(blockImageHeight);
        blockImageObject.set({
        top:playerY,
        top:playerX
    });
    canvas.add(blockImageObject);

})}
window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
console.log = e.KeyDown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed =="80")
    {
console.log("p e shift pressionadas juntas");
blockImageWidth = blockImageWidth + 10;
blockImageHeight = blockImageHeight + 10;
document.getElementById("currentWidth").innerHTML = blockImageWidth;
document.getElementById("currentHeight").innerHTML = blockImageHeight;

    }
}
if (e.shiftKey && keyPressed =='77')
{

    console.log("p e shift pressionadas juntas");
blockImageWidth = blockImageWidth - 10;
blockImageHeight = blockImageHeight - 10;
document.getElementById("currentWidth").innerHTML = blockImageWidth;
document.getElementById("currentHeight").innerHTML = blockImageHeight;

}




if(keyPressed == '38')
{
    up();
    console.log("cima");
}






if(keyPressed == '40')
{
    down();
    console.log("baixo");
}





if(keyPressed == '37')
{
    left();
    console.log("esquerdo");
}



if(keyPressed == '39')
{
    right();
    console.log("direita");
}





if(keyPressed == '87')
{
    newImage('wall.jpg');
    console.log("w");
}


if(keyPressed == '71')
{
    newImage('ground.png');
    console.log("g");
}



if(keyPressed == '76')
{
    newImage('light_green.jpg');
    console.log("l");
}


if(keyPressed == '84')
{
    newImage('trunk.jpg');
    console.log("t");
}


if(keyPressed == '82')
{
    newImage('roof.jpg');
    console.log("r");
}



if(keyPressed == '89')
{
    newImage('yellow_wall.png');
    console.log("y");
}



if(keyPressed == '68')
{
    newImage('dark.png');
    console.log("d");
}



if(keyPressed == '85')
{
    newImage('unique.png');
    console.log("u");
}




if(keyPressed == '67')
{
    newImage('cloud.jpg');
    console.log("c");
}


function up()
{
    if(playerY >=0)
    {
        playerY = playerY - blockImageHeight;
console.log("altura da imagem do bloco = " + blockImageHeight);
console.log("quando a tecla direcional Cima for pressionada, X = " + playerX " , Y = "+playerY);
canvas.remove(playerObject);
playerUpdate();
    }
    
}



function down()
{
    if(playerY < 500)
    {
        playerY = playerY - blockImageHeight;
console.log("altura da imagem do bloco = " + blockImageHeight);
console.log("quando a tecla direcional Baixo for pressionada, X = " + playerX " , Y = "+playerY);
canvas.remove(playerObject);
playerUpdate();
    }
    
}



function left()
{
    if(playerX > 0)
    {
        playerX = playerX - blockImageWidth;
console.log("altura da imagem do bloco = " + blockImageWidth);
console.log("quando a tecla direcional Esquerda for pressionada, X = " + playerX " , Y = "+playerY);
canvas.remove(playerObject);
playerUpdate();
    }
    
}

function right()
{
    if(player <=850)
    {
        playerX = playerX - blockImageWidth;
console.log("altura da imagem do bloco = " + blockImageWidth);
console.log("quando a tecla direcional Direita for pressionada, X = " + playerX " , Y = "+playerY);
canvas.remove(playerObject);
playerUpdate();
    }
    
}