let eye_wrapper = document.querySelector('.eye_wrapper');
let fa_eye = document.querySelector('.fa_eye');
let slash_eye = document.querySelector('.slash_eye');
let password = document.getElementById('password');
let result = document.getElementById('result');

eye_wrapper.addEventListener('click', function(){
    fa_eye.classList.toggle('d-none');
    slash_eye.classList.toggle('d-none');

    if(fa_eye.classList.contains('d-none')){
        password.setAttribute('type', 'text');
    } else {
        password.setAttribute('type', 'password');
    }
});

password.addEventListener('input', listener);

function listener(){
    let passwordValue = password.value;
    let passLen = passwordValue.length;

    result.classList.remove('weak', 'medium', 'strong');

    if(passLen < 8){
        result.innerHTML = "Password is weak";
        result.classList.add('weak');
    } else if(passLen >= 8 && passLen <= 10){
        result.innerHTML = "Password is medium";
        result.classList.add('medium');
    } else {
        result.innerHTML = "Password is strong";
        result.classList.add('strong');
    }
}
