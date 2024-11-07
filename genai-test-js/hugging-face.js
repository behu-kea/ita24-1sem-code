const API_KEY = "API_KEY_HERE"; // Replace with your actual API key

function logSuggestion() {
    fetch("https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": "Bearer APIKEY",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "meta-llama/Llama-3.1-8B-Instruct",
            messages: [
                {
                    role: "user",
                    content: "How do I add a new element to a JavaScript array?"
                }
            ],
            max_tokens: 500,
            stream: false
        })
    })
        .then(response => {
            if (!response.ok) {
                console.log(111);
                throw new Error(`Error: ${response.statusText}`);
            }
            return response.json();
        })
        .then(suggestionData => {
            console.log(suggestionData);
        })
        .catch(error => console.error(error));
}

//logSuggestion();
