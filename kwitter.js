function addUser() {

  userName = document.getElementById("user_name").value;

  localStorage.setItem("userNameKey"), userName

  window.location = "kwitter_room.html"
}