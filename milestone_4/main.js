var form = document.getElementById('resume');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeDetails = "\n    <h2><b>Editable Resume</b></h2>\n    <h3 class=\"section-header\">Personal Information:</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span><p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span><p>\n    <p><b>Phone Number:</b><span contenteditable=\"true\">").concat(phone, "</span><p>\n\n    <h3 class=\"section-header\">Education:</h3>\n    <p contenteditable=\"true\">").concat(education, "<p>\n\n    <h3 class=\"section-header\">Work Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "<p>\n \n    <h3 class=\"section-header\">Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "<p>\n  ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeDetails;
    }
    else {
        console.error("something wrong");
    }
});
