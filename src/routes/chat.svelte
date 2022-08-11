<script type="ts">
    import { page } from "$app/stores";
    import { afterUpdate } from "svelte";
    import EmojiPicker from "../components/EmojiPicker.svelte";
    import RoomModal from "../components/RoomModal.svelte";
    import "@lottiefiles/lottie-player";
    import * as tata from "tata-js";

    const params = $page.url.searchParams;
    const username = params.get("username");
    const room = params.get("room");

    const ws = new WebSocket("wss://server.mkchat.app");
    // const ws = new WebSocket("ws://localhost:3000");
    let userList: string[] = [];
    let messageList: any[] = [];
    let sendDisabled: boolean = false;
    let roomModal: RoomModal;
    let showEmojiPopout: boolean = false;
    let inputEl: HTMLInputElement;
    let fileInput: HTMLInputElement;
    let messages: HTMLDivElement;

	afterUpdate(() => {
		autoScroll();
    });

    ws.onopen = () => {
        ws.send(
            JSON.stringify({
                type: "join",
                data: { username, room }
            })
        );
    };

    ws.onmessage = ({ data }) => {
        const message = JSON.parse(data);
        // console.log(message);
        switch (message.type) {
            case "connect":
                tata.success("Joined", `You have successfully joined room ${room}!`);
                setInterval(() => ws.send(JSON.stringify({ type: "ping" })), 5000);
                break;
            case "message":
                messageList = [...messageList, message];
                break;
            case "updateusers":
                userList = message.users;
                break;
            default:
                break;
        };
    };

    ws.onclose = e => {
        if (e.reason) {
            disconnect(e.reason, false);
        } else {
            disconnect(null, true);
        };
    };

    function disconnect(reason: string | null, rejoin: boolean) {
        tata.error(`Disconnected!`, reason ? `With reason: ${reason}` : "You will automatically reload in 5 seconds.");
        setTimeout(() => {
            if (rejoin) return window.location.reload();

            window.location.replace("/");
        }, 5000);
    };

    function getColor(key: string) {
        let hash = key.length;
        for (let i = 0; i < key.length; i++) {
            hash = key.charCodeAt(i) + (hash << 5) - hash;
        };

        const res = Math.abs(hash % 255);

        const color = ["FF", "99", res.toString(16)].map(c => c.padStart(2, c)).sort(() => 0.5 - res / 255).join("");
        return "#" + color;
    };

    function getAvatar(key: string) {
        return `https://rail-proxy.mkchat.app/dicebear/avatars/${key}.svg?b=${getColor(key).replace("#", "%23")}`;
    };

    function sendMessage(ev: KeyboardEvent) {
        if (ev.keyCode !== 13 || sendDisabled) return;

        const el = ev.target as HTMLInputElement;
        const file = fileInput.files[0];

        if (!file && !el.value) return;

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                ws.send(JSON.stringify({
                    type: "message",
                    text: el.value,
                    file: reader.result as string
                }));

                fileInput.value = "";
                el.value = ""; // gotta put this here or value will become blank before read finishes
            };
            reader.readAsBinaryString(file);
        } else {
            ws.send(JSON.stringify({
                type: "message",
                text: el.value
            }));

            el.value = ""; // same as above clearly
        };

        sendDisabled = true;
        setTimeout(() => sendDisabled = false, 3000);
    };

    function autoScroll() {
        const mediaOffset = messages?.lastElementChild?.lastElementChild?.lastElementChild?.lastElementChild?.classList.contains("attachment") ? 250 : 0;
        const lastMessageHeight = messages?.lastElementChild?.clientHeight || 0;
        
        console.log(messages.scrollTop + messages.clientHeight + lastMessageHeight + mediaOffset, messages.scrollHeight);

        if (messages.scrollTop + messages.clientHeight + lastMessageHeight + mediaOffset >= messages.scrollHeight) {
            messages.scroll({ top: messages.scrollHeight, behavior: "smooth" });
        };
    };

    function validateAttachment(ev: Event) {
        const el = ev.target as HTMLInputElement;
        
        if (el.files[0].size > 52_428_800) {
            tata.error("File too big", "The file you tried to upload is too big. Max size is 50MB.");
            el.value = "";
        };
    };

    function openSettings() {
        tata.info("Settings", "Coming soon!");
    };
</script>

<main>
    <RoomModal bind:this={roomModal} ws={ws} username={username} />
    <div class="nav-bar">
        <span class="nav-btn" on:click={() => window.location.href = "/"}>
            <i class="fa-solid fa-house"></i>
        </span>
        <span class="nav-btn" on:click={roomModal.toggle}>
            <i class="fa-solid fa-users"></i>
        </span>
        <span class="nav-btn" on:click={() => window.open(`/vc#${room}`)}>
            <i class="fa-solid fa-video"></i>
        </span>
        <span class="nav-btn" on:click={openSettings}>
            <i class="fa-solid fa-gear"></i>
        </span>
    </div>
    <div class="userlist">
        {#if userList.length}
            {#each userList as user}
                <div class="user">
                    <img class="avatar" src={getAvatar(user)} alt="avatar" />
                    <span>{user}</span>
                </div>
            {/each}
        {/if}
    </div>
    <div class="message-list" bind:this={messages}>
        {#if messageList.length > 0}
            {#each messageList as message}
                <div class="message">
                    <img class="avatar" src={message.avatar} alt="avatar" />
                    <div class="meta">
                        <span style={`color: ${message.color}`} class="author">{message.author}</span>
                        <span class="badge" hidden={!message.badge}>
                            <span>{@html message.badge}</span>
                        </span>
                        <span class="timestamp">{new Date(message.date).toLocaleTimeString("en-US", { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }).replace(/:[0-9]{2} /g, " ")}</span>
                    </div>
                    <div class="content">
                        <p class="text">{@html message.text}</p>
                        {#if message.sticker}
                            {#if message.sticker.type === 1}
                                <img src={message.sticker.url} alt="discord-sticker" class="sticker">
                            {:else}
                                <lottie-player class="sticker" src={message.sticker.url} background="transparent" speed="1" autoplay loop></lottie-player>
                            {/if}
                        {/if}
                    </div>
                </div>
            {/each}
        {/if}
    </div>
    <div class="message-input">
        <div class="textbox">
            <EmojiPicker {inputEl} show={showEmojiPopout} />
            <input bind:this={inputEl} type="text" placeholder="Message" maxlength="250" autocomplete="off" data-emojiable="true" data-emoji-input="unicode" on:keypress={sendMessage} autofocus />
            <div class="textbox-media">
                <span>
                    <label for="file-upload"><i class="fa-solid fa-paperclip" /></label>
                    <input bind:this={fileInput} on:change={validateAttachment} type="file" id="file-upload" accept=".gif,.jpg,.jpeg,.png,.apng,.mp4,.mov,.wmv,.ebm,.mkv,.m4v,.webm" hidden />
                </span>
                <span class={showEmojiPopout ? "active" : ""} on:click={() => (showEmojiPopout = !showEmojiPopout)}>😊</span>
            </div>
        </div>
    </div>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: 0.15fr repeat(3, 1fr) 0.5fr;
        grid-template-rows: repeat(4, 1fr) 0.3fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        background-image: none;
    }

    .nav-bar {
        grid-area: 1 / 1 / 6 / 2;
        background-color: #18181b;
        width: 80px;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: .5em;
        padding: .5em;
    }

    .nav-bar .nav-btn {
        width: 60px;
        height: 60px;
        display: grid;
        place-content: center;
        text-align: center;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.5em;
    }

    .nav-bar .nav-btn:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    .nav-bar .nav-btn:last-of-type {
        position: absolute;
        bottom: .3em;
    }

    .userlist {
        grid-area: 1 / 5 / 6 / 6;
        background-color: #18181b;
        width: 265px;
        display: flex;
        flex-direction: column;
        padding: 0.75em;
        gap: 0.5em;
        overflow: scroll;
        overflow-x: hidden;
    }

    .userlist .user {
        color: #ffffff;
        border-radius: 0.25em;
        height: 3em;
        text-align: left;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.5em;
        cursor: pointer;
    }

    .userlist .user:hover {
        background-color: rgba(255, 255, 255, 0.03)
    }

    .userlist .user .avatar {
        width: 2.25em;
        height: 2.25em;
        float: left;
        margin-right: 0.5rem;
        border-radius: 100%;
    }

    .message-input {
        grid-area: 5 / 2 / 6 / 5;
        background-color: #202024;
        height: 70px;
        padding: 0.75em;
    }

    .textbox {
        background-color: #2d2d33;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 0.5em;
        position: relative;
    }

    .textbox input[type="text"] {
        width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;
    }

    .textbox-media {
        background-color: transparent;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.5em;
        gap: 0.5em;
    }

    .textbox-media span {
        font-size: 1.6em;
        cursor: pointer;
        opacity: 0.5;
        transition: 0.15s filter ease-in-out, 0.15s opacity ease-in-out;
        filter: grayscale(1);
    }

    .textbox-media label {
        cursor: pointer;
    }

    .textbox-media > span:hover,
    span.active {
        opacity: 1;
        filter: grayscale(0);
    }

    #file-upload {
        display: none;
    }

    .message-list {
        grid-area: 1 / 2 / 5 / 5;
        height: 100%;
        overflow: scroll;
        overflow-x: hidden;
        padding: 0.75rem;
        display: grid;
        grid-template-rows: repeat(8, 1fr);
        grid-gap: 1rem;
        background-color: #202024;
    }

    .message {
        padding: 0.5rem;
        word-break: break-all;
        font-family: "AvenirRoman", sans-serif, NotoColorEmoji;
    }

    .message:hover {
        background: rgba(0, 0, 0, 0.15);
    }

    .message .avatar {
        width: 3rem;
        height: 3rem;
        float: left;
        margin-right: 0.5rem;
        border-radius: 100%;
    }

    .message .meta {
        font-size: 1.1rem;
        margin-bottom: 0.3rem;
    }

    .message .meta .author {
        vertical-align: middle;
    }

    .message .meta .badge {
        background: var(--accent);
        color: #f0f0f0;
        padding: 0.25rem 0.5rem;
        border: none;
        outline: none;
        border-radius: 0.2rem;
        font-size: 0.7rem;
    }

    .message .meta .timestamp {
        font-size: 0.7rem;
        color: #969696;
    }

    .message .content .text {
        display: block;
        color: #cfcfcf;
    }

    .message .content .mention {
        background: rgba(111, 94, 234, 0.3);
        padding: .01rem .2rem;
        border-radius: .2rem;
        cursor: pointer;
        transition: .15s;
    }

    .message .content .mention:hover {
        background: rgba(111, 94, 234, 0.6);
        text-decoration: underline;
    }

    .message .content .sticker {
        width: 9rem;
        height: 9rem;
        border-radius: 1rem;
        transition: .2s;
        cursor: pointer;
        margin-top: .5rem;
    }

    .message .content .sticker:hover {
        background: rgba(255, 255, 255, .05);
    }

    ::-webkit-scrollbar {
        display: none;
    }

    *[hidden] {
        display: none;
    }

    /* mobile */
    @media (max-width: 40rem) {
        main {
            grid-template-columns: unset;
        }

        .nav-bar, .userlist {
            display: none;
        }

        .message-list, .message-input {
            width: 100vw;
        }
    }
</style>
