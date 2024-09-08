// Elements ko select karna
const saveButton = document.getElementById('save-btn') as HTMLButtonElement;

// LocalStorage se data load karna agar pehle save hua ho
window.onload = () => {
    if (localStorage.getItem('name')) {
        (document.getElementById('name') as HTMLElement).innerText = localStorage.getItem('name')!;
    }
    if (localStorage.getItem('email')) {
        (document.getElementById('email') as HTMLElement).innerText = localStorage.getItem('email')!;
    }
    if (localStorage.getItem('phone')) {
        (document.getElementById('phone') as HTMLElement).innerText = localStorage.getItem('phone')!;
    }
    if (localStorage.getItem('education')) {
        (document.getElementById('education') as HTMLElement).innerHTML = localStorage.getItem('education')!;
    }
    if (localStorage.getItem('experience')) {
        (document.getElementById('experience') as HTMLElement).innerHTML = localStorage.getItem('experience')!;
    }
    if (localStorage.getItem('skills')) {
        (document.getElementById('skills') as HTMLElement).innerHTML = localStorage.getItem('skills')!;
    }
};

// Save button ka event listener
saveButton.addEventListener('click', () => {
    // Har section ki values ko localStorage mein save karna
    const name = (document.getElementById('name') as HTMLElement).innerText;
    const email = (document.getElementById('email') as HTMLElement).innerText;
    const phone = (document.getElementById('phone') as HTMLElement).innerText;
    const education = (document.getElementById('education') as HTMLElement).innerHTML;
    const experience = (document.getElementById('experience') as HTMLElement).innerHTML;
    const skills = (document.getElementById('skills') as HTMLElement).innerHTML;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('education', education);
    localStorage.setItem('experience', experience);
    localStorage.setItem('skills', skills);

    alert('Changes saved successfully!');
});
