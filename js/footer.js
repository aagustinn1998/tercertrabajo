const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Hombre</li>
                <li><a href="#" class="footer-link">Zapatillas</a></li>
                <li><a href="#" class="footer-link">Zapatillas</a></li>
                <li><a href="#" class="footer-link">Zapatillas</a></li>
                <li><a href="#" class="footer-link">Zapatillas</a></li>
                <li><a href="#" class="footer-link">Zapatillas</a></li>
                <li><a href="#" class="footer-link">Zapatillas</a></li>
                <li><a href="#" class="footer-link">Zapatillas</a></li>
                <li><a href="#" class="footer-link">Zapatillas</a></li>
                <li><a href="#" class="footer-link">Zapatillas</a></li>
                <li><a href="#" class="footer-link">Zapatillas</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Mujer</li>
                <li><a href="#" class="footer-link">Remeras</a></li>
                <li><a href="#" class="footer-link">Calsasrts</a></li>
                <li><a href="#" class="footer-link">Zapatillas </a></li>
                <li><a href="#" class="footer-link">Short</a></li>
                <li><a href="#" class="footer-link">Accesoriosrs</a></li>
                <li><a href="#" class="footer-link">Tendencias</a></li>
                <li><a href="#" class="footer-link">Remeras</a></li>
                <li><a href="#" class="footer-link">Remeras</a></li>
                <li><a href="#" class="footer-link">Remeras</a></li>
                <li><a href="#" class="footer-link">Remeras</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">Acerca de la empresa</p>
    <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat tempore ad suscipit, eos eius quisquam sed optio nisi quaerat fugiat ratione et vero maxime praesentium, architecto minima reiciendis iste quo deserunt assumenda alias ducimus. Ullam odit maxime id voluptates rerum tenetur corporis laboriosam! Cum error ipsum laborum tempore in rerum necessitatibus nostrum nobis modi! Debitis adipisci illum nemo aperiam sed, et accusamus ut officiis. Laborum illo exercitationem quo culpa reprehenderit excepturi distinctio tempore cupiditate praesentium nisi ut iusto, assumenda perferendis facilis voluptas autem fuga sunt ab debitis voluptatum harum eum. Asperiores, natus! Est deserunt incidunt quasi placeat omnis, itaque harum?</p>
    <p class="info">Email de soporte  - help@most.com</p>
    <p class="info">Telefono - +54 341 355 3546</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">Terminos y condiciones</a>
            <a href="#" class="social-link">Politica de privacidad</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">MOST - alcanza tu maximo nivel</p>
    `;
}

createFooter();