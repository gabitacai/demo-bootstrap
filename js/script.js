document.getElementById("header").innerHTML = `
 <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #c14242;">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <img src="img/favicon-navidad.png" width="60" height="60" alt="Logo esfera navideña"> Tienda
                    Navideña
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item"><a class="nav-link" href="index.html">Inicio</a></li>
                        <li class="nav-item"><a class="nav-link" href="index.html#productos">Productos</a></li>
                        <li class="nav-item"><a class="nav-link" href="form.html">Contacto</a></li>
                        <li class="nav-item">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="dark-mode-toggle">
                                <label class="form-check-label" for="dark-mode-toggle">Modo oscuro</label>
                            </div>
                        </li>
                    </ul>
                    <form class="d-flex ms-3" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
                        <button class="boton-buscar" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>

`

document.getElementById("footerId").innerHTML = `
<div class="container">
            <div class="footer-content">
                <span>&copy; Gabriela Foresti | 2024</span>

                <div class="social-icons">
                    <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-tiktok"></i></a>
                </div>
                <span> <a class="nav-link" href="gforesti@gmail.com">Contactate conmigo</a></span>
            </div>
        </div>
`