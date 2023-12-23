const reference = {
    header_logo: document.getElementById("top_header_logo")
}

/**
 * ==================== Header Adapt ====================
 *
 * Changes the structure of the header area whenever the screen width gets smaller or wider.
 *
 * */
function updateLogo() {
    if (window.innerWidth < 840)
        reference.header_logo.src = "resources/images/logomark-transparent.svg";
    else
        reference.header_logo.src = "resources/images/secondary-logotype-transparent.svg";
}
window.addEventListener("resize", updateLogo);




/**
 * ==================== On Load Action ====================
 *
 * Sets the default behavior of the page by calling start-up functions.
 * The start-up functions are compiled in the onLoadAction().
 *
 * */
function onLoadAction() {
    updateLogo();
}

document.onload(onLoadAction);
