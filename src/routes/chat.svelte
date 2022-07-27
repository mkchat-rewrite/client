<script type="ts">
    import EmojiPicker from "../components/EmojiPicker.svelte";
    
    let showEmojiPopout: boolean = false;
    let inputEl: HTMLInputElement;
</script>

<main>
    <div class="nav-bar">
        
    </div>
    <div class="userlist">
        
    </div>
    <div class="message-list">
        <div class="message">
            <img class="avatar" src="https://mkchat.app/imgs/favicon.png" alt="avatar">
            <div class="meta" style="color: rgb(255, 255, 255);">
                <span class="author">SERVER</span>
                <span class="badge">system</span>
                <span class="timestamp">12:58 AM</span>
            </div>
            <div class="content">
                <p class="text">Welcome to room: main</p>
            </div>
        </div>
    </div>
    <div class="message-input">
        <div class="textbox">
            <EmojiPicker {inputEl} show={showEmojiPopout} />
            <input bind:this={inputEl} type="text" placeholder="Message"  maxlength="250" autocomplete="off" data-emojiable="true" data-emoji-input="unicode" autofocus />
            <div class="textbox-media">
                <span>
                    <label for="file-upload"><i class="fa-solid fa-paperclip"></i></label>
                    <input type="file" id="file-upload" accept=".gif,.jpg,.jpeg,.png" hidden>
                </span>
                <span class={showEmojiPopout ? "active" : ""} on:click={() => showEmojiPopout = !showEmojiPopout}>😊</span>
            </div>
        </div>
    </div>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: .15fr repeat(3, 1fr) .5fr;
        grid-template-rows: repeat(4, 1fr) .3fr;
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
    }

    .message-input {
        grid-area: 5 / 2 / 6 / 5;
        background-color: #202024;
        height: 70px;
        padding: .75em;
    }

    .textbox {
        background-color: #2d2d33;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: .5em;
        position: relative;
    }

    .textbox input[type=text] {
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
        transition: .15s filter ease-in-out, .15s opacity ease-in-out;
        filter: grayscale(1);
    }

    .textbox-media label {
        cursor: pointer;
    }

    .textbox-media > span:hover, span.active {
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

    .message .content .text {
        display: block;
        color: #ffffff;
    }

    .message .meta .badge {
        background: var(--accent);
        color: #f0f0f0;
        padding: 0.25rem 0.5rem;
        border: none;
        outline: none;
        border-radius: 0.2rem;
        font-size: .7rem;
        margin-left: 0.5rem;
    }

    .message .meta .timestamp {
        font-size: .7rem;
        color: #969696;
        margin-left: 0.5rem;
    }

    ::-webkit-scrollbar {
        display: none;
    }
</style>