Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("results").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';

    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/W-3cNu051/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
} // A function to run when we get any errors and the results 
function gotResult(error, results) { // Display error in the console 
    if (error) { console.error(error); } 
    else { // The results are in an array ordered by confidence. 
        console.log(results); document.getElementById("result_object_name").innerHTML = results[0].label;
         document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3); } }
