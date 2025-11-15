// Cargar usuarios desde localStorage o usar los predeterminados
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [
    { user: 'luis', password: '123', nombre: 'Luis Pérez', email: '' },
    { user: 'maria', password: '321', nombre: 'María García', email: '' }
];

function inicioSesion() {
    if (event) event.preventDefault();
    let usu = document.getElementById('usu').value;
    let pass = document.getElementById('pass').value;

    let verifica = !!usuarios.find(e => e.user == usu && e.password == pass);

    if (verifica) {
        alert("Usuario correcto...!!");
        // Guardar usuario actual en sessionStorage
        let usuarioActual = usuarios.find(e => e.user == usu && e.password == pass);
        sessionStorage.setItem('usuarioActual', JSON.stringify(usuarioActual));
        window.location.href = "index.html";
    }
    else {
        alert("Usuario o Password incorrectos...!!!");
    }
}

function registrarUsuario() {
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let newUser = document.getElementById('newUser').value;
    let newPassword = document.getElementById('newPassword').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    // Validaciones
    if (fullName.length < 2) {
        alert("El nombre debe tener al menos 2 caracteres");
        return;
    }

    if (newUser.length < 3) {
        alert("El usuario debe tener al menos 3 caracteres");
        return;
    }

    // Verificar si el usuario ya existe
    if (usuarios.find(u => u.user === newUser)) {
        alert("Este nombre de usuario ya está en uso");
        return;
    }

    if (newPassword.length < 3) {
        alert("La contraseña debe tener al menos 3 caracteres");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }

    // Crear nuevo usuario
    let nuevoUsuario = {
        user: newUser,
        password: newPassword,
        nombre: fullName,
        email: email
    };
    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert("Usuario registrado exitosamente");

    document.getElementById('registerForm').reset();

    document.querySelector('.content-login').classList.remove('active');
}