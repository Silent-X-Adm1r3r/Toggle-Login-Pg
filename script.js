const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});

// Form validation
function validateForm(form) {
    const email = form.querySelector('input[type="email"]');
    const password = form.querySelector('input[type="password"]');
    
    if (!email.value.trim() || !password.value.trim()) {
        alert("Fields cannot be empty!");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        alert("Enter a valid email!");
        return false;
    }

    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    if (!passwordPattern.test(password.value)) {
        alert("Password must be at least 6 characters, include a number and a special character!");
        return false;
    }

    return true;
}

// Attach validation to forms
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", (e) => {
        if (!validateForm(form)) {
            e.preventDefault(); // Prevent form submission if validation fails
        }
    });
});
