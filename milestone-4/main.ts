// get refrences to the form and display area:

const form = document.getElementById("resume") as HTMLFormElement;
const resume = document.getElementById("display") as HTMLDivElement;

// Handle form submission:

form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // prevent page reload

    // Collect input values value
    const name = (document.getElementById("name") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const contact = (document.getElementById("phone") as HTMLInputElement).value
    const education = (document.getElementById("education") as HTMLInputElement).value
    const skills = (document.getElementById("skills") as HTMLInputElement).value
    const experience = (document.getElementById("experience") as HTMLInputElement).value

    // Generate resume dynamically

    const resumeHTML = `
 
    <h2> <b>Editable Resume </b></h2>
 
 <h3>Personal Information:</h3>
 
 <p><b>Name:</b><span contenteditable="true">${name}</span></p>
 <p><b>Email:</b><span contenteditable="true">${email}</span></p>
 <p><b>Contact:</b><span contenteditable="true">${contact}</span></p>
 
 <h3> Education:</h3>
 <p contenteditable="true">${education}</p>
 
 <h3>Experience:</h3>
 <p contenteditable="true">${experience}</p>
 
 <h3>Skills:</h3>
 <p contenteditable="true">${skills}</p>
 
 `;

 // display the generated resume:
 if(resume){
    resume.innerHTML=resumeHTML;
 }
 else{
    console.error("The resume display element is missing");
 }
})
