var body = document.getElementsByTagName('body')[0]
var ne = document.createElement('header')
ne.innerHTML = `
<div class="sin">
            <img src="logo.jpg" alt="logo" id="logo">
            <a href="./home.html"><h1>AGALMA GIOIELLI</h1></a>
        </div>
        <div class="menu" onclick="menu(this)">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
        <div class="des" id="menu">
            <a href="./chi_siamo.html" id="f"><nav>chi siamo</nav> </a>
            <a href="./il_laboratorio.html"><nav>il laboratorio</nav></a>
            <a href="./la_galleria.html"><nav>la galleria</nav></a>
            <a href="./la_scuola.html"><nav>la scuola</nav></a>
            <a href="./contattaci.html"><nav>contattaci</nav></a>
        </div>
        `
body.appendChild(ne)