// get refrences to the form and display area:

const form = document.getElementById("resume") as HTMLFormElement;
const resume = document.getElementById("display") as HTMLDivElement;
const link=document.getElementById("shareable")as HTMLDivElement;
const element=document.getElementById("shareable-link") as HTMLAnchorElement;
const button=document.getElementById("download") as HTMLButtonElement ;

// Handle form submission:

form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // prevent page reload

    // Collect input values value
    const username=(document.getElementById("username") as HTMLInputElement).value;
    const name = (document.getElementById("name") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const contact = (document.getElementById("phone") as HTMLInputElement).value
    const education = (document.getElementById("education") as HTMLTextAreaElement).value
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value

    // Save the form DATA IN LOCAL STORAGE WITH USERNAME AS KEY
    const resumeData={
      name,
      email,
      contact,
      education,
      skills,
      experience
    };
    // save the data locally
    localStorage.setItem(username,JSON.stringify(resumeData))

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
 resume.innerHTML=resumeHTML;

 // generate a shareable link with username:
 const shareableURL=
 `${window.location.origin}?username=${encodeURIComponent(username)}`;

 // display the shareable link:
 link.style.display="block";
 element.href=shareableURL;
 element.textContent=shareableURL;
})
// handle PDF Download
button.addEventListener("click",()=>{
   window.print();//this will open the print dialog and allow to save as PDF
})
// Prefill  the form based on the username in the URL
window.addEventListener("DOMContentLoaded",()=>{
   const urlParams=new URLSearchParams(window.location.search)
   const username=urlParams.get("username");

   if(username){
      const saveData=localStorage.getItem(username);
      if(saveData){
         const resumeData=JSON.parse(saveData);
         (document.getElementById('username')as HTMLInputElement).value=username;
         (document.getElementById('name')as HTMLInputElement).value=resumeData.name;
         (document.getElementById('email')as HTMLInputElement).value=resumeData.email
         (document.getElementById('contact')as HTMLInputElement).value=resumeData.contact;
         (document.getElementById('education')as HTMLInputElement).value=resumeData.education;
         (document.getElementById('skills')as HTMLInputElement).value=resumeData.skills;
         (document.getElementById('experience')as HTMLInputElement).value=resumeData.experience;
      }
   }
})
