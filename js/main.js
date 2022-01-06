let theInput = document.getElementById("the-input"),

    allButtons = document.querySelectorAll(".buttons button"),

    theResult = document.querySelector(".result > span");


$(document).ready(function() {
    $("input").focus();
})

allButtons.forEach(button => {

    button.addEventListener("click", (e) => {

        if (e.target.classList.contains("check-name")) {

            checkName();
        }
        if (e.target.classList.contains("add-name")) {

            addName();
            $("input").focus();
        }
        if (e.target.classList.contains("delete")) {

            deletekName();
        }
        if (e.target.classList.contains("show")) {

            showName();
        }
    })
});

function checkTheInput() {

        theResult.innerHTML = "You Must Enter Value";
    // else {

    //     theResult.innerHTML = theInput.value;
    // }
}


function checkName () {

    if (theInput.value !== "") {

        if (localStorage.getItem(theInput.value)) {

            theResult.innerHTML = `Found Local Storage Item Called <span>${theInput.value}</span>`;

        } else {

            theResult.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span>`;

        }
    }
    else {

        checkTheInput();
    }
   
}

function addName() {

    if (theInput.value !== "") {

        localStorage.setItem(theInput.value, "test");

            theResult.innerHTML = `The Name <span>${theInput.value}</span> Added`;

            theInput.value = "";
    
    }
    else {

        checkTheInput();
    }
}

function deletekName() {

    if (theInput.value !== "") {

        if (localStorage.getItem(theInput.value)) {

            localStorage.removeItem(theInput.value);

            theResult.innerHTML = `The Local Storage Item Called <span>${theInput.value}</span> Deleted`;

            theInput.value = "";

        } else {

            theResult.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span>`;

        }
    }
    else {

        checkTheInput();
    }
}

function showName() {

    if (localStorage.length) {

        console.log(`Found Elements ${localStorage.length}`);

        theResult.innerHTML = '';

        for (let [key, value] of Object.entries(localStorage)) {

            theResult.innerHTML += `<span class="keys">${key}</span>`;

        }
    }
    else {

        theResult.innerHTML = 'Storage Is Empty';
    }
}