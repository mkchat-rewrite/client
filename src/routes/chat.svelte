<script type="ts">
    import { page } from "$app/stores";
    import EmojiPicker from "../components/EmojiPicker.svelte";
    import * as tata from "tata-js";

    const params = $page.url.searchParams;

    const SERVER_URL = "localhost:3000";
    const ws = new WebSocket(`ws://${SERVER_URL}`);
    let userList: string[] = [];
    let messageList: any[] = [];

    ws.onopen = () => {
        ws.send(
            JSON.stringify({
                type: "join",
                data: {
                    room: params.get("room"),
                    username: params.get("username")
                }
            })
        );
    };

    ws.onmessage = ({ data }) => {
        const message = JSON.parse(data);
        switch (message.type) {
            case "connect":
                tata.success("Joined", `You have successfully joined room ${params.get("room")}!`);
                setInterval(() => ws.send(JSON.stringify({ type: "ping" })), 5000);
                break;
            case "message":
                messageList.push(message);
                break;
            case "updateusers":
                // const userlist = document.getElementById("userlist");
                // userlist.innerText = "";

                // for (const user of message.users) {
                //     const el = document.createElement("div");
                //     userlist.appendChild(el);
                //     el.classList.add("user");
                //     el.innerText = user;
                // };
                userList = message.users;
                console.log(userList);
                break;
            default:
                break;
        };
        console.log(message);
    };

    ws.onclose = e => {
        if (e.reason) {
            // disconnect(e.reason, false);
        } else {
            // disconnect(null, true);
        };
    };

    function disconnect(reason: string | null, rejoin: boolean) {
        tata.error(`Disconnected!`, reason ? `With reason: ${reason}` : "You will automatically reload in 5 seconds.");
        setTimeout(() => {
            if (rejoin) return window.location.reload();

            window.location.replace("/");
        }, 5000);
    };

    function handleUpload() {
        const fileList = this.files;
        console.log(fileList[0]);
    };

    let showEmojiPopout: boolean = false;
    let inputEl: HTMLInputElement;

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
        return `https://avatars.dicebear.com/api/croodles-neutral/sfosdfsdfdsfsdfm-seed.svg?b=${getColor(key).replace("#", "%23")}`;
    };

    function sendMessage() {
        console.log("this");
    };
</script>

<main>
    <div class="nav-bar">
    </div>
    <div class="userlist">
        {#if userList.length}
            {#each userList as user}
                <div class="user">
                    <img class="avatar" src={getAvatar(user)} alt="avatar" />
                    <span>Distrust</span>
                </div>
            {/each}
        {/if}
    </div>
    <div class="message-list">
        <!-- {#if messageList.length}
            {#each messageList as message}
                <div class="message">
                    <img class="avatar" src={""} alt="avatar" />
                    <div class="meta">
                        <span class="author">Distrust</span>
                        <span class="badge">
                            <i class="fa-solid fa-shield"></i>
                            <span>Moderator</span>
                        </span>
                        <span class="timestamp">12:58 AM</span>
                    </div>
                    <div class="content">
                        <p class="text">some text <span class="mention">@test</span> more text <span class="mention">#test</span></p>
                        <img src="https://rail-proxy.mkchat.app/discord/stickers/781291131828699156" alt="discord-sticker" class="sticker">
                    </div>
                </div>
            {/each}
        {/if} -->
        <!-- <div class="message">
            <img class="avatar"  src="https://mkchat.app/imgs/favicon.png" alt="avatar" />
            <div class="meta" style="color: rgb(255, 255, 255);">
                <span class="author">SERVER</span>
                <span class="badge">
                    <i class="fa-solid fa-shield"></i>
                    <span>System</span>
                </span>
                <span class="timestamp">12:58 AM</span>
            </div>
            <div class="content">
                <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam maiores modi omnis optio, sint nostrum libero dolore non tempora. Blanditiis provident accusantium consequuntur tempora, possimus iure obcaecati voluptas tempore? Labore corrupti doloribus omnis, autem nihil distinctio molestias magnam quas tenetur voluptatibus veritatis architecto ex laboriosam, at quibusdam vero, alias ipsam quod cupiditate laborum fuga. Ea, perferendis facere officia magnam nam debitis commodi distinctio temporibus expedita quas quo delectus obcaecati voluptates, odit corporis illo sunt repellendus vitae quaerat cumque. Molestias, voluptatum! Necessitatibus eaque error sint! Rem earum vitae ea inventore quisquam corporis dolores distinctio qui labore error? Dicta, numquam esse commodi distinctio nobis delectus ipsam quis aspernatur! Sed libero, atque sequi, accusamus corrupti esse ipsam obcaecati praesentium necessitatibus facilis deserunt quo suscipit, minima nam et? Error illum facilis ipsa, amet necessitatibus alias accusantium voluptates hic inventore, corporis magnam, soluta distinctio libero vitae! A deserunt suscipit delectus quia repudiandae quam totam provident officiis alias beatae inventore incidunt eligendi vel nemo sapiente, debitis quibusdam id nisi asperiores corrupti. Aliquam unde ipsa magnam harum qui id mollitia explicabo, quasi, quo odio blanditiis quis quibusdam laborum assumenda et provident asperiores nisi repellat deserunt nostrum voluptatum quod ex ratione voluptates. Saepe consectetur id veritatis mollitia.</p>
            </div>
        </div> -->
        <!-- <div class="message">
            <img class="avatar" src={""} alt="avatar" />
            <div class="meta">
                <span class="author">Distrust</span>
                <span class="badge">
                    <i class="fa-solid fa-shield"></i>
                    <span>Moderator</span>
                </span>
                <span class="timestamp">12:58 AM</span>
            </div>
            <div class="content">
                <p class="text">some text <span class="mention">@test</span> more text <span class="mention">#test</span></p>
                <img src="https://rail-proxy.mkchat.app/discord/stickers/781291131828699156" alt="discord-sticker" class="sticker">
            </div>
        </div> -->
    </div>
    <div class="message-input">
        <div class="textbox">
            <EmojiPicker {inputEl} show={showEmojiPopout} />
            <input bind:this={inputEl} type="text" placeholder="Message" maxlength="250" autocomplete="off" data-emojiable="true" data-emoji-input="unicode" autofocus />
            <div class="textbox-media">
                <span>
                    <label for="file-upload"><i class="fa-solid fa-paperclip" /></label>
                    <input on:change={handleUpload} type="file" id="file-upload" accept=".gif,.jpg,.jpeg,.png" hidden />
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
        font-family: "AvenirRoman", sans-serif;
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
</style>
