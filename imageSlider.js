
let defaultValue = 0;

function slideControl(a){
    defaultValue=defaultValue+a;
    imageSlider(defaultValue)
}
imageSlider(defaultValue)
function imageSlider(){
    let img = document.querySelectorAll(".imgBox");

    for(let crtIndex of img){
        crtIndex.style.display="none";
    }
    if(defaultValue == img.length){
        defaultValue = 0; 
    }
    else if(defaultValue <0){
        defaultValue = 9;
    }
    img[defaultValue].style.display="block";
    
}
