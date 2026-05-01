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
const loginEmailElement = document.getElementById('loginEmail');
const loginPasswordElement = document.getElementById('loginPassword');
const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    const loginEmail = loginEmailElement.value;
    const loginPassword = loginPasswordElement.value;

    if(loginEmail === "user@gmail.com" && loginPassword === "123456") {
        window.location.href = "./index.html";
    } else {
        loginEmailElement.style.borderColor = 'red';
        loginPasswordElement.style.borderColor = 'red';
    }
    console.log(loginEmailElement.value, loginPasswordElement.value);
});

