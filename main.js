var canvas = new fabric.Canvas("myCanvas")

player_X = 10;
player_Y = 10;

block_image_width = 20;
block_image_height = 20;

var player_object = "";
    
var block_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_Y,
            left:player_X
        })
        canvas.add(player_object)
    })
}

function new_block(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_Y,
            left:player_X
        })
        canvas.add(block_image_object)
    })
}

window.addEventListener("keydown", my_keypress)

function my_keypress(e){
    keypress = e.keyCode;

    if (e.shiftKey == true && keypress == '80'){
        block_image_width = block_image_width + 10
        block_image_height = block_image_height + 10
        document.getElementById("current_width").innerHTML = block_image_width
        document.getElementById("current_height").innerHTML = block_image_width
    }

    if (e.shiftKey == true && keypress == '77'){
        block_image_width = block_image_width - 10
        block_image_height = block_image_height - 10
        document.getElementById("current_width").innerHTML = block_image_width
        document.getElementById("current_height").innerHTML = block_image_width
    }

    if(keypress == '38'){
        up()
        console.log("chicken nuggets")
    }
    if(keypress == '40'){
        down()
        console.log("chicken nuggs")
    }
    if(keypress == '37'){
        left()
        console.log("chicken n")
    }
    if(keypress == '39'){
        right()
        console.log("chickeeeeeennuggets")
    }

    if(keypress == '84'){
        new_block("trunk.jpg")
        console.log("cofee")
    }
    if(keypress == '68'){
        new_block("dark_green.jpg")
        console.log("cofin")
    }
    if(keypress == '76'){
        new_block("light_green.png")
        console.log("yumi")
    }
    if(keypress == '71'){
        new_block("ground.png")
        console.log("food")
    }
    if(keypress == '87'){
        new_block("wall.jpg")
        console.log("yes")
    }
    if(keypress == '89'){
        new_block("yellow_wall.png")
        console.log("kidgets")
    }
    if(keypress == '82'){
        new_block("roof.jpg")
        console.log("nogets")
    }
    if(keypress == '67'){
        new_block("cloud.jpg")
        console.log("trumpets")
    }

    
}

//Seriouslyyyyy YAYAAAA
function up(){
    if(player_Y >= 0){
        player_Y = player_Y - block_image_height;
        canvas.remove(player_object);
        player_update()
    }
}
function down(){
    if(player_Y <= 660){
        player_Y = player_Y + block_image_height;
        canvas.remove(player_object);
        player_update()
    }
}
function right(){
    if(player_X <= 850){
        player_X = player_X + block_image_width;
        canvas.remove(player_object);
        player_update()
    }
}
function left(){
    if(player_X >= 0){
        player_X = player_X - block_image_width;
        canvas.remove(player_object);
        player_update()
    }
}