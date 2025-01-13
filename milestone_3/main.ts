const form = document.getElementById('resume') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
form.addEventListener('submit', (event:Event)=>{
    event.preventDefault();

    const name = (document.getElementById('name')as HTMLInputElement).value
    const email = (document.getElementById('email')as HTMLInputElement).value
    const phone = (document.getElementById('phone')as HTMLInputElement).value
    const education = (document.getElementById('education')as HTMLInputElement).value
    const experience = (document.getElementById('experience')as HTMLInputElement).value
    const skills = (document.getElementById('skills')as HTMLInputElement).value

    const resumeDetails= `
    <h2><b>Resume</b></h2>
    <h3 class="section-header">Personal Information:</h3>
    <p><b>Name:</b>${name}<p>
    <p><b>Email:</b>${email}<p>
    <p><b>Phone Number:</b>${phone}<p>

    <h3 class="section-header">Education:</h3>
    <p>${education}<p>

    <h3 class="section-header">Work Experience</h3>
    <p>${experience}<p>
 
    <h3 class="section-header">Skills</h3>
    <p>${skills}<p>
  `;
  if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeDetails
  }else{
    console.error("something wrong");
  }

})