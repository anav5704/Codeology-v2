if (sessionStorage.getItem("dark")){
    document.documentElement.classList.add("dark");
    document.getElementById("dark").style.display = "block"

}

if (sessionStorage.getItem("light")){
    document.documentElement.classList.remove("dark");
    document.getElementById("light").style.display = "block"
}

document.getElementById("mode").addEventListener("click", () => {    
    if (sessionStorage.getItem("dark")){
        document.documentElement.classList.toggle("dark");
        sessionStorage.setItem("light", true);
        sessionStorage.removeItem("dark");
        console.log("Light mode");
        document.getElementById("light").style.display = "block"
        document.getElementById("dark").style.display = "none"


    }

    else {
        document.documentElement.classList.toggle("dark");
        sessionStorage.setItem("dark", "true");
        sessionStorage.removeItem("light");
        console.log("Dark mode");
        document.getElementById("light").style.display = "none"
        document.getElementById("dark").style.display = "block"
    }
})



