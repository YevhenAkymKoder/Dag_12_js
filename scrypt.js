function themeSwitcher() {
    const body = document.body;
    // Check and change body bg
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
    }
}

function themeBox(element) {
    // Check and change button div bg
    if (element.classList.contains('lightMode')) {
        element.classList.remove('lightMode');
        element.classList.add('darkMode');
    } else {
        element.classList.remove('darkMode');
        element.classList.add('lightMode');
    }
}


const colorSwitch = document.querySelector("#color");
let darkMode = true;

function themeSwitch() {
    if (darkMode) {
        colorSwitch.classList.add("darkMode");
    } else {
        colorSwitch.classList.remove("darkMode");
    }
    darkMode = !darkMode;
}
