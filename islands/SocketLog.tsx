import { useState } from "preact/hooks";

const server = new WebSocket("ws://localhost:8080/ws");

export default function SocketLog() {
    const [ messages, setMessages ] = useState([]);

    return (
        <h1>Socket</h1>
    );
}