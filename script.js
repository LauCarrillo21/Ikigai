
function downloadTemplate () {
    let name = prompt ("Hi!🤗 What's your name?");
    let mail = prompt ("What's your e-mail?");

    let quote = document.querySelector(".quote");
    quote.innerHTML = " 🎇 Thanks " + name + " we'll send the Ikigai template to your e-mail! 👘";
}

let button = document.querySelector ("button");
button.addEventListener ("click", downloadTemplate);