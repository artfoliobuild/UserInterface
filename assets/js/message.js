

// grab contact form
const form = document.querySelector(".contact-form");
console.log(form);

// grab button from form
const button = form.querySelector("button");
console.log(button);
button.addEventListener("click", e => {

    // prevent default button behavior
    e.preventDefault();

    if (form.querySelector(".name").value.length > 0 
        && form.querySelector(".email").value.length > 0 
        && form.querySelector("textarea").value.length >0) 
        {
             // set options for date time stamp
            let options = {month: "short", year: "numeric", day: "numeric"};

            // construct POST payload
            let payload = {
                // grab data from form
                "fullname" : form.querySelector(".name").value,
                "email" : form.querySelector(".email").value,
                "timestamp":  new Date().toLocaleDateString("en-US", options),
                "message" : form.querySelector("textarea").value
            }

            // open xmlhttprequest to api and send data
            const url = "https://lit-depths-68153.herokuapp.com/messages";
            const xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            var data = JSON.stringify(payload);
            xhr.send(data);

            // clear input fields
            form.querySelector(".name").value = '';
            form.querySelector(".email").value = '';
            form.querySelector("textarea").value = '';

            // change button colors and text to thank user
            button.style.backgroundColor = 'Green';
            button.style.color = 'white';
            button.textContent = 'Thanks!';

            // reset button color and text after 2 seconds
            setTimeout(() => {
                button.style.backgroundColor = 'white';
                button.style.color = 'black';
                button.textContent = 'SUBMIT';
            }, 2000);
    }
    
       
    

    

    
});