 document.addEventListener("DOMContentLoaded", () => {

 
 const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navlinks");
const menuIcon = document.getElementById("menu-icon");


console.log(hamburger);
console.log(navlinks);
hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("active");

    if (navLinks.classList.contains("active")){
        menuIcon.src = "./images/icon-close.svg";
    }else{
        menuIcon.src = "./images/icon-hamburger.svg";
    }
});
});






//main contact form
document.addEventListener("DOMContentLoaded", function (){


const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

// ADD THESE LINES HERE
console.log ("Form sumbitted");
console.log("Message:", message);

    // Full name validation
    const FullNameParts = fullname.split(" ");

    if(FullNameParts.length < 2) {
        alert("Please enter your full name (Name and Surname).");
        return;
    }

    //Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)){
        alert("Please enter a valid email address.");
        return;
    }

    //Phone validation
    const phonePattern = /^\d{11}$/;

    if (!phonePattern.test(phone)){
        alert("Phone number must contain exactly 11 digits.")
        return;
    }

        //Message validation (minimum 10 words)
        const wordCount = message.trim().split(/\s+/).length;
    
        
        console.log("Word count:", wordCount);

        if (wordCount < 5) {
            alert("Message must contain at least 5 words.");
            return;
        }


        document.getElementById("successMessage").textContent = 
        "Message sent successfully!";

        form.reset();
    });
});