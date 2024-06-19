const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signUpForm = document.getElementById('sign-up-form');
const signInForm = document.getElementById('sign-in-form');
let users = []; // Arreglo para almacenar los usuarios

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!name || !email || !password) {
        alert('Por favor, complete todos los campos');
        return;
    }

    // Verificar si la cuenta ya existe
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert('La cuenta ya existe. Por favor, inicie sesión.');
        container.classList.remove("right-panel-active"); // Cambiar al panel de inicio de sesión
        return;
    }

    const user = {
        name,
        email,
        password
    };

    users.push(user);
    alert('Cuenta registrada correctamente');
});

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email-login').value;
    const password = document.getElementById('password-login').value;

    if (!email || !password) {
        alert('Por favor, complete todos los campos');
        return;
    }

    const user = users.find(user => user.email === email);
    if (!user) {
        alert('Cuenta no existente');
        return;
    }

    if (user.password !== password) {
        alert('Contraseña incorrecta');
        return;
    }
window.location.href = '/index.html';
});
