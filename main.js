
Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90 
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function capture_da_buiscets(data_uri){
    console.log("hello dar");
    document.getElementById("result").innerHTML='<img id="capture_da_buiscets" src="'+data_uri+'">';
}
console.log('ml5 version',ml5.version);
classy_fire=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/FAD3zHn59/model.json',modelloaded);

function modelloaded(){
console.log("modelloaded");
}

function check(){
    img=document.getElementById("capture_da_buiscets");
    classy_fire.classfy(img,got_result);

}

function got_result(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    document.getElementById("objectName").innerHTML=results[0].label;
    document.getElementById("objectAccuracy").innerHTML=results[0].confidence.ToFixed(3);
    }
}