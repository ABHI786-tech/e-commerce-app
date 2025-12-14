// Getting token from localStorage
// Token is saved when user logs in
let token = localStorage.getItem("accessToken");

// Just checking if token exists
if (!token) {
  alert("Please login first");
  window.location.href = "login.html";
}

// Fetching logged-in user profile
fetch("https://dummyjson.com/auth/me", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(async (res) => {
    let profileData = await res.json();

    // Parent container
    let profileParent = document.getElementById("profile_cart");

    // Creating profile UI (simple and readable)
    profileParent.innerHTML = `
      <img src="${profileData.image}" class="profile-img" alt="profile image">

      <p><b>Username:</b> ${profileData.username}</p>
      <p><b>First Name:</b> ${profileData.firstName}</p>
      <p><b>Last Name:</b> ${profileData.lastName}</p>
      <p><b>Email:</b> ${profileData.email}</p>
      <p><b>Phone:</b> ${profileData.phone}</p>
      <p><b>Address:</b> ${profileData.address.address}</p>
    `;
  })
  .catch((err) => {
    console.log("Profile fetch error:", err);
  });
