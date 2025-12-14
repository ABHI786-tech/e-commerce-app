// simple login function (fresher-friendly)
function loginNow() {
  let username = document.getElementById("userName").value;
  let password = document.getElementById("pass").value;
  let messageBox = document.getElementById("messages");

  // basic validation
  if (!username || !password) {
    messageBox.innerText = "Please fill all fields";
    return;
  }

  // dummy login (for learning)
  fetch('https://dummyjson.com/auth/login', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then(async res => {
    let data = await res.json();
    
    if (data.accessToken) {
      localStorage.setItem("accessToken", data.accessToken);
      alert("Login Successful!");
      window.location.href = "../index.html";
    } else {
      messageBox.innerText = data.message || "Login failed";
    }
  })
  .catch(err => {
    console.log(err, "Login error");
    messageBox.innerText = "Something went wrong. Try again!";
  });
}

// show/hide password
function togglePassword() {
  let passField = document.getElementById("pass");
  passField.type = passField.type === "password" ? "text" : "password";
}
