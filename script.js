const menuBtn = document.getElementById("menu-btn");
const menuPanel = document.getElementById("menu-panel");
const themeBtn = document.getElementById("theme-btn");

//clicl "menu": mostrar/ocultar panel de menu.
menuBtn.addEventListener("click",function(){
    menuPanel.classList.toggle("hidden");
});

//click en boton de modo oscuro: cambiar el tema del sitio.
themeBtn.addEventListener("click",function(){
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.textContent = "Modo claro";

    }else {
        themeBtn.textContent = "Modo oscuro";
    }
});

//click fuera de menu: ocultar panel de menu automaticamente.
document.addEventListener("click", function (event) {
    if (!event.target.closest(".menu")) {
        menuPanel.classList.add("hidden");
    }
});