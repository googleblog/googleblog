//<![CDATA[
// JavaScript for copying code to clipboard
const copyButtons = document.querySelectorAll(".copy-button");

copyButtons.forEach((copyButton) => {
    copyButton.addEventListener("click", () => {
        const codeBlock = copyButton.previousElementSibling.querySelector("code");
        const textArea = document.createElement("textarea");
        textArea.value = codeBlock.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        
        // Change button text to "Copied" temporarily
        copyButton.textContent = "Copied";
        
        // Reset button text after 2 seconds
        setTimeout(() => {
            copyButton.textContent = "Copy";
        }, 2000);
    });
});
//]]>
