noseX = 0;
noseY = 0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/Jn7N0FQ4/Clown-nose-large.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);

    fill('red');
    stroke('red');
    //circle(noseX, noseY, 20); (this is just to show what you would do just in case you can't use an image)
    image(clown_nose, noseX, noseY, 45, 45);
}

function take_snapshot(){
    save('my_clown_nose_pic.png');
}

function modelLoaded(){
    console.log('PoseNet has been initialized!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 15;
        noseY = results[0].pose.nose.y - 15;
        console.log("Nose x = " + noseX);
        console.log("Nose y = " + noseY);
    }
}