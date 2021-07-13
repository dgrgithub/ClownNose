function preload() {
   clown_nose=loadImage("https://i.postimg.cc/WpKvSZ4k/clownnn-noseeeee.png");
}
  function setup() {
      canvas = createCanvas(300,300);
      canvas.center();
      
Video = createCapture(VIDEO)  ;
Video.size(300,300);
Video.hide();
poseNet = ml5.poseNet(Video,modelLoaded);
poseNet.on ('pose',gotPoses);
}

function modelLoaded() {
  console.log('Posenote Is Initialized');
}


function gotPoses (results)
{
  if(results.length > 0)
  {
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
      console.log("nose x = " +noseX);
      console.log("nose y = " +noseY);

  }
}
noseX=0;
noseY=0;

 function draw() {
     image(Video, 0 , 0 , 300 , 300);
     image(clown_nose, noseX-10, noseY-10, 30,30);
     
}
    
     function take_snapshot() {
          save('MyFilterImage.png');
            }



