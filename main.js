var canvas = new fabric.Canvas("myCanvas");

blocks_width = 30;
blocks_height = 30;
player_x = 10;
player_y = 10;

function player_update(){
    fabric.Image.fromURL("player.png", function(img)
    {
player_object = img;
player_object.scaleToWidth(100);
player_object.scaleToHeight(100);
player_object.set({
    top: player_y,
    left: player_x 
});    
canvas.add(player_object);
});
};

window.addEventListener("keydown", my_keydown)

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '70')
    {
        new_image('ironman_face.png');
        console.log("f");
    }

    if(keyPressed == '66')
    {
        new_image('spiderman_body.png')
        console.log("b");
    }

    if(keyPressed == '76')
    {
        new_image('hulk_legs.png')
        console.log("l");
    }
    if(keyPressed == '82')
    {
        new_image('thor_right_hand.png')
        console.log("r");
    }

    if(keyPressed == '72')
    {
        new_image('captain_america_left_hand.png')
        console.log("h")
    }

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
}

