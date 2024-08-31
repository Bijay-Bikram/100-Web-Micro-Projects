const wrapper = document.querySelector(".wrapper"),
    form = document.querySelector("form"),
    fileInp = form.querySelector("input"),
    infoText = form.querySelector("p"),
    closeBtn = document.querySelector(".close"),
    copyBtn = document.querySelector(".copy");


function fetchRequest(formData, file) {  // 2
    infoText.innerText = "Scanning QR Code...";
    fetch("http://api.qrserver.com/v1/read-qr-code/", {
        method: 'POST',
        body: formData
    }).then(res => res.json()).then(result => {
        result = result[0].symbol[0].data;
        infoText.innerText = result ? "Upload QR Code to Scan" : "Couldn't read QR Code";
        if (!result) return; //After return code won't be executed
        wrapper.querySelector("textarea").innerText = result;
        form.querySelector("img").src = URL.createObjectURL(file);
        wrapper.classList.add("active");
        console.log(file);
        console.log(URL.createObjectURL(file));

    }).catch(() => {
        infoText.innerText = "Couldn't read QR Code";
    })
}

fileInp.addEventListener('change', (e) => {  // 1
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append('file', file);
    fetchRequest(formData, file);
});

copyBtn.addEventListener('click', () => {
    let text = document.querySelector("textarea").textContent;
    navigator.clipboard.writeText(text);
});

closeBtn.addEventListener('click', () => wrapper.classList.remove("active"));

//Clicking file input on form click
form.addEventListener('click', () => fileInp.click());


