window.onload = function () {
    const generateButton = document.getElementById('generate-resume') as HTMLButtonElement;

    generateButton.addEventListener('click', function() {
        // Get user input values
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        // Find the resume display section
        const resumeDiv = document.getElementById('resume') as HTMLDivElement;

        // Generate the resume content
        resumeDiv.innerHTML = `
            <h2>${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;
    });
}
