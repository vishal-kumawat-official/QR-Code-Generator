var wrapper = document.querySelector(".wrapper");
var generateButton = document.querySelector(".form button");
var qrInput = document.querySelector(".form input");
var qrImg = document.querySelector(".qr-code img");

function buttonPressed(){
    let qrValue = qrInput.value;
    if(!qrValue){
        alert("ERROR: Enter URl or Text!!");
        return;
    }

    generateButton.innerText = "Generating QR Code ..."

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

    qrImg.addEventListener("load" ,()=>{
        generateButton.innerText = "Generate QR Code"
        wrapper.classList.add("active");
    })
}

//button clicked
generateButton.addEventListener("click" , ()=>{
    buttonPressed();
});

//input when empty
qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
});

//Enter key pressed to submit
document.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        buttonPressed();
    }
});

// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example