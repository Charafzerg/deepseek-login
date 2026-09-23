const pw = document.getElementById("password");
const toggle = document.getElementById("togglePw");

toggle.addEventListener("click", () => {
  pw.type = pw.type === "password" ? "text" : "password";
});