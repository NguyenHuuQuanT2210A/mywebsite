let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
password = id("password"),
form = id("form"),
errorMSg = classes("error"),
successIcon = classes("success-icon"),
failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(username, 0, "Username cannot be blank");
    engine(password, 1, "Password cannot be blank");
});

let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMSg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else {
        errorMSg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
};