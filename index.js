var wrapper = document.querySelector(".wrapper");
var generateButton = document.querySelector(".form button");
var qrInput = document.querySelector(".form input");
var qrImg = document.querySelector(".qr-code img");

generateButton.addEventListener("click" , ()=>{
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
});

qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
});

// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example