function logSuggestion() {
    fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "llama3.1:latest",
            prompt: `The following is a list of dishes you can make with the following ingredients: onion, carrots and cellery`,
            stream: false
        })
    })
        .then(response => response.json())
        .then(suggestionData => {
            console.log(suggestionData);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

//logSuggestion();