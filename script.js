const btn = document.getElementById("theme-btn");

btn.addEventListener("click",function() {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        btn.textContent = "Modo claro";
    }else {
        btn.textContent = "Modo oscuro";
    }
});