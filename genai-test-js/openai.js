const OPENAI_API_KEY = 'API_KEY_HERE'; // Replace with your actual API key

function logSuggestion() {
    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [{
                role: 'user',
                content: 'Please respond with 10 dishes with tomatoes'
            }]
        })
    })
        .then(response => response.json())
        .then(suggestionData => console.log(suggestionData))
}

//logSuggestion();