// Redirigir a la pagina de inicio 
window.onload = () => {
    if(sessionStorage.user){
        user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)){
            location.replace('/');
        }
    }
}

const loader = document.querySelector('.loader');

// Seleccionar  inputs 
const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number') || null;
const tac = document.querySelector('#terms-and-cond') || null;
const notification = document.querySelector('#notification') || null;

submitBtn.addEventListener('click', () => {
    if(name != null){ // Pagina de ingreso
        if(name.value.length < 3){
            showAlert('El nombre debe tener 3 letras');
        } else if(!email.value.length){
            showAlert('Introduce tu Email');
        } else if(password.value.length < 8){
            showAlert('La contreseña debe tener 8 letras');
        } else if(!number.value.length){
            showAlert('Ingrese tu numero telefonico');
        } else if(!Number(number.value) || number.value.length < 10){
            showAlert('Numero inválido');
        } else if(!tac.checked){
            showAlert('debes aceptar nuestros terminos y condiciones');
        } else{
            // submit form
            loader.style.display = 'block';
            sendData('/signup.html', {
                name: name.value,
                email: email.value,
                password: password.value,
                number: number.value,
                tac: tac.checked,
                notification: notification.checked,
                seller: false
            })
        }
    } else{
        // login page
        if(!email.value.length || !password.value.length){
            showAlert('Llena las casillas');
        } else{
            loader.style.display = 'Bloquear';
            sendData('/login.html', {
                email: email.value,
                password: password.value,
            })
        }
    }
})