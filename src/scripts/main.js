if (sessionStorage.getItem("dark") || window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add("dark");
    document.getElementById("dark").style.display = "block"
}

else {
    document.documentElement.classList.remove("dark");
    document.getElementById("light").style.display = "block"
}

document.getElementById("mode").addEventListener("click", () => {    
    if (sessionStorage.getItem("dark")){
        lighten()
        localStorage.theme = 'light'
    }
    else {
        darken()
    }
})

function darken() {
    document.documentElement.classList.toggle("dark");
    sessionStorage.setItem("dark", "true");
    sessionStorage.removeItem("light");
    console.log("Dark mode");
    document.getElementById("dark").style.display = "block"
    document.getElementById("light").style.display = ""
}

function lighten() {
    document.documentElement.classList.toggle("dark");
    sessionStorage.setItem("light", true);
    sessionStorage.removeItem("dark");
    console.log("Light mode");
    document.getElementById("light").style.display = "block"
    document.getElementById("dark").style.display = ""
}



