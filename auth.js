// Switch between login and signup
const toggleLink = document.getElementById("toggleSignup");
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

toggleLink.addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.style.display = signupForm.style.display === "none" ? "block" : "none";
  loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
});

// Signup logic
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("newUsername").value;
  const password = document.getElementById("newPassword").value;

  // Save user in localStorage
  localStorage.setItem(username, password);
  alert("Signup successful! You can now log in.");
  signupForm.style.display = "none";
  loginForm.style.display = "block";
});

// Login logic
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const storedPassword = localStorage.getItem(username);

  if (storedPassword && storedPassword === password) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "dashboard.html"; // redirect after login
  } else {
    alert("Invalid username or password.");
  }
});
