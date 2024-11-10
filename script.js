function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000); 

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeicon");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeIcon.textContent = "🌞"; 
    } else {
        themeIcon.textContent = "🌜";
    }
});

document.body.classList.add("light-theme");
