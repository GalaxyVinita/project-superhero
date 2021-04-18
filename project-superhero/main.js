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