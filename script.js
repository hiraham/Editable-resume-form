// Elements ko select karna
var saveButton = document.getElementById('save-btn');
// LocalStorage se data load karna agar pehle save hua ho
window.onload = function () {
    if (localStorage.getItem('name')) {
        document.getElementById('name').innerText = localStorage.getItem('name');
    }
    if (localStorage.getItem('email')) {
        document.getElementById('email').innerText = localStorage.getItem('email');
    }
    if (localStorage.getItem('phone')) {
        document.getElementById('phone').innerText = localStorage.getItem('phone');
    }
    if (localStorage.getItem('education')) {
        document.getElementById('education').innerHTML = localStorage.getItem('education');
    }
    if (localStorage.getItem('experience')) {
        document.getElementById('experience').innerHTML = localStorage.getItem('experience');
    }
    if (localStorage.getItem('skills')) {
        document.getElementById('skills').innerHTML = localStorage.getItem('skills');
    }
};
// Save button ka event listener
saveButton.addEventListener('click', function () {
    // Har section ki values ko localStorage mein save karna
    var name = document.getElementById('name').innerText;
    var email = document.getElementById('email').innerText;
    var phone = document.getElementById('phone').innerText;
    var education = document.getElementById('education').innerHTML;
    var experience = document.getElementById('experience').innerHTML;
    var skills = document.getElementById('skills').innerHTML;
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('education', education);
    localStorage.setItem('experience', experience);
    localStorage.setItem('skills', skills);
    alert('Changes saved successfully!');
});
