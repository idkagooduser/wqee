var catX=0;
var catY=0;
var cat='';

function preload(){
    cat=loadImage("cat.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    myvideo=createCapture(VIDEO);
    myvideo.size(300,300);
myvideo.hide();


poseNet=ml5.poseNet(myvideo,modelLoaded);

poseNet.on('pose',gotPoses);
}

function gotPoses(results){
   if(results.length>0){
    console.log(results);
    console.log("left eye X is",results[0].pose.leftEye.x);
    console.log("left eye Y is",results[0].pose.leftEye.y);
    console.log("right eye X is",results[0].pose.rightEye.x);
    console.log("right eye Y is",results[0].pose.rightEye.y);
    leftEyeX=results[0].pose.leftEye.x;
    leftEyeY=results[0].pose.leftEye.y;
    rightEyeX=results[0].pose.rightEye.x;
    rightEyeY=results[0].pose.rightEye.y;
    catX= (leftEyeX+leftEyeY)/2;
    catY= (leftEyeY-50);
   } 
}

function modelLoaded(){
    console.log("YOUHAVEBEENWARNEDTHEREISNOWHERETORUNYOUWILLPAYTHEPRICEIWILLTAKEYOURLIFE!");
}
function draw(){
 image(myvideo,0,0,300,300);  
 image(cat,catX-90,catY-90,200,300); 
}
function take_snapshot(){
 save('cat.png'); 
}

