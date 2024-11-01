// get refrences to the form and display area:
var form = document.getElementById("resume");
var resume = document.getElementById("display");
var link = document.getElementById("shareable");
var element = document.getElementById("shareable-link");
var button = document.getElementById("download");
// Handle form submission:
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values value
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    // Save the form DATA IN LOCAL STORAGE WITH USERNAME AS KEY
    var resumeData = {
        name: name,
        email: email,
        contact: contact,
        education: education,
        skills: skills,
        experience: experience
    };
    // save the data locally
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Generate resume dynamically
    var resumeHTML = "\n \n    <h2> <b>Editable Resume </b></h2>\n \n <h3>Personal Information:</h3>\n \n <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n <p><b>Contact:</b><span contenteditable=\"true\">").concat(contact, "</span></p>\n \n <h3> Education:</h3>\n <p contenteditable=\"true\">").concat(education, "</p>\n \n <h3>Experience:</h3>\n <p contenteditable=\"true\">").concat(experience, "</p>\n \n <h3>Skills:</h3>\n <p contenteditable=\"true\">").concat(skills, "</p>\n \n ");
    // display the generated resume:
    resume.innerHTML = resumeHTML;
    // generate a shareable link with username:
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // display the shareable link:
    link.style.display = "block";
    element.href = shareableURL;
    element.textContent = shareableURL;
});
// handle PDF Download
button.addEventListener("click", function () {
    window.print(); //this will open the print dialog and allow to save as PDF
});
// Prefill  the form based on the username in the URL
window.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get("username");
    if (username) {
        var saveData = localStorage.getItem(username);
        if (saveData) {
            var resumeData = JSON.parse(saveData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email(document.getElementById('contact')).value = resumeData.contact;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('skills').value = resumeData.skills;
            document.getElementById('experience').value = resumeData.experience;
        }
    }
});
