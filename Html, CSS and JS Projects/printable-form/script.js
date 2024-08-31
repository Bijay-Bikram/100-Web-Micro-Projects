// JS to Print Form

// Note: This code works 
// But it is worse to use javascript to print the form.

const printBtn = document.getElementById("printBtn");

function printForm() {
    // printBtn.style.display = "none";
    print();
    // setTimeout(() => {
    //     printBtn.style.display = "block";
    // }, 100);
}

printBtn.addEventListener("click", printForm)


