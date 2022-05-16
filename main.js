X=0;
Y=0;

function preload(){
mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){
image(video, 0, 0, 300, 300);
image(mustache, X , Y , 60, 60);
}

function takeSnapshot(){
    save('Snap.png');
}

function modelLoaded(){
    console.log("model Loaded");
}

function gotPoses(results){
if (results.length > 0){
    console.log(results);
    
    X=results[0].pose.nose.x - 28;
    Y=results[0].pose.nose.y - 5;
    
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
}
}