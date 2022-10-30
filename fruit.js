img = "";
status = "";

function preload(){
    img = loadImage("classroom.jpg");
}



function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : object is detecting";
}

function modelLoaded(){
console.log("modelLoaded");
status = true;
objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("boad",45,75);
    noFill();
    stroke("#FF0000");
    rect(50,60,250,350);

    fill("#FF0000");
    text("desks",320,120);
    noFill();
    stroke("#FF0000");
    rect(300,90,150,320);
}