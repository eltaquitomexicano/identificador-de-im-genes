Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality: 90
});
camera= document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'"/> ';
    })
}
     
console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/bLL77_MSk/model.json",modelLoaded);
function modelLoaded(){
    console.log("modelo cargado");
}
function check(){
    img=document.getElementById("captured_img");
    classifier.classify(img, got_results);

}
function got_results(error, results){
  if(error){
    console.error(error);
  } else{
    console.log(results);
    document.getElementById("result_objectName").innerHTML=results[0].label;
    document.getElementById("result_objectPrecission").innerHTML=results[0].confidence.toFixed(3);
  }
}