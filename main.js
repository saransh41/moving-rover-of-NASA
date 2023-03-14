canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_height = 99;
rover_width = 99;


background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

//Create "add()" function
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;    
}
//Create "uploadBackground()" function.
function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}




window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    
	if(keyPressed == '38')
    {
        up();
        console.log("up");
    }	
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }	
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }	
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }	
     //Write code if keypressed is down. ASCII value of "up" arrow is 40.
		




    //Additional Activity
    //Write the code for left and right arrow pressed. 
}

function up(){

}
function down(){
	
}
function right(){
	
}
function left(){
	
}



