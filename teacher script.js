function validated() {
    var username = document.forms["form"]["username"].value;
    var password = document.forms["form"]["password"].value;

    var username_error = document.getElementById("username_error");
    var password_error = document.getElementById("password_error");

    username_error.style.display = "none";
    password_error.style.display = "none";

    if (username == "") {
        username_error.style.display = "block";
        return false;
    }
    if (password == "") {
        password_error.style.display = "block";
        return false;
    }
    sessionStorage.setItem("username",username);
    
    window.location.href="teacherlogin.html"
    return false;
}
document.querySelector("form").onsubmit = validated;
