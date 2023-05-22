import React, { useState, useEffect } from "react";
import Header from "../components/Header";

async function query(data: any) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/Inhaexpress/DialoGPT-medium-paimon",
        {
            headers: {
                Authorization: "Bearer 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",
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}

const MyComponent = () => {
    const [chatLog, setChatLog] = useState<any>([]);
    const [inputText, setInputText] = useState<string>("");

    useEffect(() => {
        async function fetchData() {
            const response = await query({
                inputs: {
                    past_user_inputs: [],
                    generated_responses: [],
                    text: "",
                },
            });
            setChatLog([
                ...chatLog,
                {
                    isUser: false,
                    text: response.generated_text,
                },
            ]);
        }
        fetchData();
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleInputSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setChatLog([
            ...chatLog,
            {
                isUser: true,
                text: inputText,
            },
        ]);
        setInputText("");

        const response = await query({
            inputs: {
                past_user_inputs: [...chatLog.filter((log: { isUser: any; }) => log.isUser).map((log: { text: any; }) => log.text)],
                generated_responses: [...chatLog.filter((log: { isUser: any; }) => !log.isUser).map((log: { text: any; }) => log.text)],
                text: inputText,
            },
        });

        setChatLog([
            ...chatLog,
            {
                isUser: false,
                text: response.generated_text,
            },
        ]);
    };

    return (
        <div>
            <Header/>
            <div style={{ height: "500px", overflowY: "scroll" }}>
                {chatLog.map((log: any, index: number) => (
                    <div key={index} style={{ textAlign: log.isUser ? "right" : "left" }}>
                        <span style={{ fontWeight: log.isUser ? "bold" : "normal" }}>{log.isUser ? "User: " : "Bot: "}</span>
                        {log.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleInputSubmit}>
                <input type="text" value={inputText} onChange={handleInputChange} />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default MyComponent;
