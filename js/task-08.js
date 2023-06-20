const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    if (email.value === "" || password.value === "") {
        return alert("Всі поля повинні бути заповнені");
    } else {
        const data = {
            email: email.value,
            password: password.value,
        };
        console.log(data);
    }

    loginForm.reset();
}
