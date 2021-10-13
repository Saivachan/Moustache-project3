noseX=0;
noseY=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/W1HznMc1/istockphoto-1133779957-170667a-removebg-preview.png')
    }

function setup(){
canvas=createCanvas(300,300);
canvas.center(); 
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotPoses)
}

function modelloaded(){
console.log('posenet is initialized')}
function draw(){
image(video, 0,0,300,300);
image(clown_nose,noseX-15,noseY+10,30,30)
}

function take_snapshot(){
    save("photo.png");
}
function gotPoses(results){
if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("nose x="+results[0].pose.nose.x)
console.log("nose y="+results[0].pose.nose.y)
}
}
