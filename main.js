canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

rover_width=100;
rover_height=90;
background_image="mars.jpg"
rover_image="rover.png"
rover_x=10
rover_y=10

function add(){
background_imagetag=new Image();
background_imagetag.onload = f1bg;
background_imagetag.src=background_image;

rover_imagetag=new Image();
rover_imagetag.onload =f2rover;
rover_imagetag.src=rover_image;
}

function f1bg(){
ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height)
}
function f2rover(){
    ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height)
    }
    window.addEventListener("keydown",my_keydown);
    function my_keydown(e)
    {keyPressed =e.keyCode;
        console.log(keyPressed);
        if(keyPressed == '38'){
            console.log("up")
            up();
            
        }
        if(keyPressed == '40'){
            console.log("down")
            down();
            
        }
        if(keyPressed == '37'){
            console.log("left")
            left();
            
        }
        if(keyPressed == '39'){
            console.log("right")
            right();
            
        }
    }