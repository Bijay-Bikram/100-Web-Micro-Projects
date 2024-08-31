console.log("It is working");

let alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
let tbody = document.getElementById("tbody")


alphabet.forEach((letter, index) => {
    tbody.innerHTML += `<tr>
     <td scope="row">${index + 1}</td>
                <td>${letter}</td>
                <td>${letter.charCodeAt()}</td>
                
                <td>${letter.toLocaleLowerCase()}</td>
                <td>${letter.toLocaleLowerCase().charCodeAt()}</td>
    </tr>`
});


