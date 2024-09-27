// document.getElementById("generateResume")?.addEventListener("click", () => {
//     const name = (document.getElementById("name") as HTMLInputElement).value;
//     const email = (document.getElementById("email") as HTMLInputElement).value;
//     const phone = (document.getElementById("phone") as HTMLInputElement).value;
//     const education = (document.getElementById("education") as HTMLTextAreaElement).value;
//     const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
//     const skill = (document.getElementById("skill") as HTMLTextAreaElement).value;
//     const resumeOutput = document.getElementById("resumeOutput")!;
//     resumeOutput.innerHTML = `
//         <h2>Resume</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Education:</strong></p>
//         <p>${education}</p>
//         <p><strong>Experience:</strong></p>
//         <p>${experience}</p>
//         <p><strong>skill:</strong></p>
//         <p>${skill}</p>
//     `;
// });
// Wait for the DOM to fully load
window.onload = function () {
    var generateButton = document.getElementById('generate-resume');
    generateButton.addEventListener('click', function () {
        // Get user input values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var experience = document.getElementById('experience').value;
        var education = document.getElementById('education').value;
        var skills = document.getElementById('skills').value;
        // Find the resume display section
        var resumeDiv = document.getElementById('resume');
        // Generate the resume content
        resumeDiv.innerHTML = "\n            <h2>".concat(name, "</h2>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
    });
};
