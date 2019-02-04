var isBlue = false;
$(document).ready(openBlock(){
    $("#btn").onClick="openBlock()")}
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

