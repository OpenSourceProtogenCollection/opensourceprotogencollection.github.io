let darkMode = localStorage.getItem('darkMode'); 
const darkModeToggle = document.querySelector('#themeswitch');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode'); 

    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {  
        disableDarkMode(); 
    }

    if (darkModeToggle.style.transform == "rotate(180deg)") {
        darkModeToggle.style.transform = "rotate(0deg)";
        
    } else {
        darkModeToggle.style.transform = "rotate(180deg)";
    }
});

$(document).ready(function() {
    document.body.style.transition = "all 300ms";
});
