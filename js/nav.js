const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Buscar Productos">
                    <button class="search-btn">Buscar</button>
                </div>
                <a>
                    <img src="img/user.png" id="user-img" alt="">
                    <div class="login-logout-popup hide">
                        <p class="account-info">Iniciar sesíon como, name</p>
                        <button class="btn" id="user-btn">Cerrar sesíon</button>
                    </div>
                </a>
                <a href="/cart"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="/index.html" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">Mujer</a></li>
            <li class="link-item"><a href="#" class="link">Hombres</a></li>
            <li class="link-item"><a href="#" class="link">altletas</a></li>
            <li class="link-item"><a href="#" class="link">Accesorios</a></li>
        </ul>
    `;
}

createNav();

// nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        // El usuario inicio sesion 
        popuptext.innerHTML = `Iniciar sesíon como, ${user.name}`;
        actionBtn.innerHTML = 'Cerrar sesión';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    } else{
        // Usuario desconectado
        popuptext.innerHTML = 'Iniciar sesíon para realizar pedido';
        actionBtn.innerHTML = 'Iniciar sesíon';
        actionBtn.addEventListener('click', () => {
            location.href = '../login.html';
        })
    }
}