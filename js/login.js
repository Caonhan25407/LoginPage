// // 1. Chuyển đổi giữa 2 form
// const loginBox = document.getElementById('loginBox');
// const registerBox = document.getElementById('registerBox');

// const btnShowRegister = document.getElementById('btnShowRegister');
// const btnShowLogin = document.getElementById('btnShowLogin');

// btnShowRegister.addEventListener('click', () => {
//     loginBox.style.display = 'none';
//     registerBox.style.display = 'block'; 
// });

// btnShowLogin.addEventListener('click', () => {
//     registerBox.style.display = 'none';
//     loginBox.style.display = 'block';
// });

// 1. Chuyển giữa login và register(JQuery)
$('#btnShowRegister').click(function() {
    $('#loginBox').fadeOut(300, function() {
        $('#registerBox').fadeIn(300);
    });
});

$('#btnShowLogin').click(function() {
    $('#registerBox').fadeOut(300, function() {
        $('#loginBox').fadeIn(300);
    });
});

$('#btnShowLogOut').click(function() {
    window.location.href = "./login.html"; 
});

//2. Đăng nhập 
// const loginEmailElement = document.getElementById('loginEmail');
// const loginPasswordElement = document.getElementById('loginPassword');
// const btnLogin = document.getElementById('btnLogin');

// btnLogin.addEventListener('click', (e) => {
//     e.preventDefault();

//     const loginEmail = loginEmailElement.value;
//     const loginPassword = loginPasswordElement.value;

//     if(loginEmail === "user@gmail.com" && loginPassword === "123456") {
//         window.location.href = "./index.html";
//     } else {
//         loginEmailElement.style.borderColor = 'red';
//         loginPasswordElement.style.borderColor = 'red';
//     }
//     console.log(loginEmailElement.value, loginPasswordElement.value);
// });


// REGISTER
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', () => {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerMail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirm = document.getElementById('registerConfirmPassword').value;

    // validate
    let isValid = true;
    const errorName = document.getElementById('registerErrorNameForm');
    const errorEmail = document.getElementById('registerErrorEmailForm');
    const errorExists = document.getElementById('registerErrorEmail');

    errorName.innerText = "";
    errorEmail.innerText = "";
    errorExists.innerText = "";

    if (!name) {
        errorName.innerText = "Please enter your name!";
        isValid = false;
    }

    if (!email) {
        errorEmail.innerText = "Please enter your email!";
        isValid = false;
    }

    if (password !== confirm) {
        isValid = false;
    }

    if (!isValid) return;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    // check trùng email
    const exists = users.find(u => u.email === email);
    if (exists) {
        document.getElementById('registerErrorEmail').innerText = "Email exists";
        return;
    }

    // thêm user
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Đăng ký thành công!");

    // chuyển về login
    registerBox.style.display = 'none';
    loginBox.style.display = 'block';
});

// LOGIN
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (user) {
        // lưu trạng thái login
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert("Đăng nhập thành công!");
        window.location.href = "./index.html";
    } else {
        document.getElementById('loginEmail').style.borderColor = 'red';
        document.getElementById('loginPassword').style.borderColor = 'red';
        document.getElementById('errorPassword').innerText = "Incorrect email or password";

    }
});


