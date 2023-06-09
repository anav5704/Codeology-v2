if (sessionStorage.getItem("dark")){
    document.documentElement.classList.add("dark");
}

if (sessionStorage.getItem("light")){
    document.documentElement.classList.remove("dark");
}

document.getElementById("mode").addEventListener("click", () => {    
    if (sessionStorage.getItem("dark")){
        document.documentElement.classList.toggle("dark");
        sessionStorage.setItem("light", true);
        sessionStorage.removeItem("dark");
        console.log("Light mode");
    }

    else {
        document.documentElement.classList.toggle("dark");
        sessionStorage.setItem("dark", "true");
        sessionStorage.removeItem("light");
        console.log("Dark mode");

    }
})



