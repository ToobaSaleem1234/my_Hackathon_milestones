// get refrences to the form and display area:
var form = document.getElementById("resume");
var resume = document.getElementById("display");
// Handle form submission:
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values value
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    // Generate resume dynamically
    var resumeHTML = "\n \n    <h2> <b> Resume </b></h2>\n \n <h3>Personal Information:</h3>\n \n <p><b>Name:</b>".concat(name, "</p>\n <p><b>Email:</b>").concat(email, "</p>\n <p><b>Contact:</b>").concat(contact, "</p>\n \n <h3> Education:</h3>\n <p>").concat(education, "</p>\n \n <h3>Experience:</h3>\n <p>").concat(experience, "</p>\n \n <h3>Skills:</h3>\n <p>").concat(skills, "</p>\n \n ");
    // display the generated resume:
    if (resume) {
        resume.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing");
    }
});
