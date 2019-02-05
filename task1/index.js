 var Block = document.getElementById("block");
 var isBlue = false;
 var toggleButton = document.getElementById("btn");
function openBlock() {
    if (isBlue === false) {
        Block.style.background = "blue";
        isBlue = true;
        toggleButton.value = "Close";
    } else {
        Block.style.background = "";
        isBlue = false;
        toggleButton.value = "Open";
    }
}

