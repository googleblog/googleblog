// When the document is ready
$(document).ready(function () {
    // Set an interval to check every 3 seconds if the footer-credit element is visible
    setInterval(function () {
        // If footer-credit is not visible
        if (!$('#footer-credit:visible').length) {
            // Redirect to a Facebook page
            window.location.href = 'https://facebook.com/dxmahm/';
        }
    }, 3000);
});

// When the window is fully loaded
window.onload = function () {
    // Get the footer-credit element
    var footerCredit = document.getElementById('footer-credit');
    // Set attributes for the footer-credit element
    footerCredit.setAttribute('href', 'https://facebook.com/dxmahm/');
    footerCredit.setAttribute('rel', 'dofollow');
    footerCredit.setAttribute('title', 'Sohel Mahmud');
    footerCredit.setAttribute('style', 'display: inline-block!important; font-size: inherit!important; color: #ffff66!important; visibility: visible!important; z-index: 99!important; opacity: 1!important; position: relative!important;');
    // Change the inner HTML content
    footerCredit.innerHTML = 'Sohel Mahmud';
};
