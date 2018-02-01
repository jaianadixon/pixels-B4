var userUpload;

function preload(){
    userUpload = loadImage("eminem.jpg");
}

function setup(){
    createCanvas(userUpload.width, userUpload.height);
}

function draw(){
    background(0);
    image(userUpload, 0, 0);
    loadPixels();
    
    for(var row = 0; row < height; row++){
        for(var col = 0; col < width; col++){
            var startingIndex = (col + row * width)*4;
            
            var r= pixels[startingIndex+0];
            var g =pixels[startingIndex+1];
            var b =pixels[startingIndex+2];
            var a =pixels[startingIndex+3];
            
           if(keyIsPressed){
               if(key=="1"){
                   grey_filter(startingIndex, g, a);
               }
                 if(key=="2"){
                    green_filter(startingIndex, g, a);
                }
                 if(key=="3"){
                    heart_filter(startingIndex, g, a, b, r);
           } 
                 if(key=="4"){
                    love_filter(startingIndex, r, g, b, a);
           }
                 if(key=="5"){
                    hate_filter(startingIndex, g, a, b, r);
           }
                 if(key=="6"){
                    jaiana_filter(startingIndex, r, g, b, a);
           }
                 if(key=="7"){
                    roses_filter(startingIndex, r, g, b, a);
           }
                 if(key=="8"){
                    black_filter(startingIndex, r, g, b, a);
           }
        }
    }
}
    
    updatePixels();
}

function grey_filter(startingIndex, g, a){
     pixels[startingIndex] = g; //red
     pixels[startingIndex + 1] = g; //green
     pixels[startingIndex + 2] = g; //blue
     pixels[startingIndex + 3] = a; //alpha
}

function green_filter(startingIndex, g, a){
     pixels[startingIndex] = 0; //red
     pixels[startingIndex + 1] = g; //green
     pixels[startingIndex + 2] = 0; //blue
     pixels[startingIndex + 3] = a; //alpha
}

function heart_filter(startingIndex,g, a, b, r){
     pixels[startingIndex]=r;
     pixels[startingIndex+1]=b;
     pixels[startingIndex+2]=g;
     pixels[startingIndex+3]=a;
}

function love_filter(startingIndex, r, g, b, a){
     pixels[startingIndex]=r/2;
     pixels[startingIndex+1]=g/2;
     pixels[startingIndex+2]=b/2;
     pixels[startingIndex+3]=a;
}

function hate_filter(startingIndex, r, g, b, a){
     pixels[startingIndex]=r*2;
     pixels[startingIndex+1]=g*2;
     pixels[startingIndex+2]=b*2;
     pixels[startingIndex+3]=a;
}

function jaiana_filter(startingIndex, r, g, b, a){
     pixels[startingIndex]=r-190;
     pixels[startingIndex+1]=g-190;
     pixels[startingIndex+2]=b;
     pixels[startingIndex+3]=a;
}

function roses_filter(startingIndex, r, g, b, a){
     pixels[startingIndex]=r-255;
     pixels[startingIndex+1]=g-200;
     pixels[startingIndex+2]=b-180;
     pixels[startingIndex+3]=a;
}

function black_filter(startingIndex, r, g, b, a){
     pixels[startingIndex]=r+255;
     pixels[startingIndex+1]=g+200;
     pixels[startingIndex+2]=b+180;
     pixels[startingIndex+3]=a-90;
}