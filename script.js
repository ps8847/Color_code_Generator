const colors = document.querySelectorAll('.color-box h2');
// console.log(colors);

function generateColors() {
    colors.forEach((color) => {

        // 16 means hexcodes
        let hexCode = "#" + Math.random().toString(16).substring(2, 8);
        // console.log(hexCode);
        color.style.backgroundColor = hexCode;
        color.innerHTML = hexCode;
    })
}

function copy(id) {

    var toBeCopied = $(`#${id}`).next().text();
    navigator.clipboard.writeText(toBeCopied)

    copied(id);
}

function copied(id) {
    $(`#${id}`).fadeOut("fast");
    $(`#${id}`).fadeIn("fast");
}

generateColors();