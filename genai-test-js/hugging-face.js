async function queryFalcon() {
    const response = await fetch("https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": "Bearer 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",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "meta-llama/Llama-3.1-8B-Instruct",
            messages: [
                {
                    role: "user",
                    content: "How do i add a new element to a javascript array?"
                }
            ],
            max_tokens: 500,
            stream: false
        })
    });

    if (!response.ok) {
        console.log(111)
        throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();
    console.log(result)
    console.log(result.choices[0].message.content);
}

// Call the function
queryFalcon().catch(console.error);

