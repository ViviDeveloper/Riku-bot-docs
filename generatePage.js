const fetch = require('node-fetch');

const apiKey = 'mint_3ZZjpUTrpvrnd7hCfXjRikNQ'; // Nahraď svým API klíčem
const markdownContent = `
# Welcome
This is an example of documentation generated with Mintlify.
`;

async function generatePage() {
  const response = await fetch('https://api.mintlify.com/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      content: markdownContent,
      config: {
        theme: 'dark', // Nebo 'light', podle tvé preference
      }
    })
  });

  const data = await response.json();
  console.log('Generated page URL:', data.url); // URL vygenerované stránky
}

generatePage();
