<script lang="ts">
    let emojiList: string[];
    let input: HTMLInputElement;
    let searchQuery: string;
    let showEmojiPopup: boolean = false;
    
    async function loadEmoji(query?: string) {
        if (!emojiList) {
            const res = await fetch("https://raw.githubusercontent.com/joypixels/emoji-assets/master/emoji.json");
            const data = await res.json();
            emojiList = Object.values(data);
        };

        const filteredList = query ? emojiList.filter((e: any) => e.shortname.replaceAll(":", "").replaceAll("_", " ").includes(query)) : emojiList;

        return filteredList.map((e: any) => e.code_points.fully_qualified);
    };

    function insertAtCaret(el: HTMLInputElement, value: string) {
        const startPos = el.selectionStart;

        if (startPos || startPos === 0) {
            const endPos = el.selectionEnd || 0;
            el.value = el.value.substring(0, startPos) + value + el.value.substring(endPos, el.value.length);
            el.selectionStart = startPos + value.length;
            el.selectionEnd = startPos + value.length;
            el.focus();
        } else {
            el.value += value;
        };
    };

    const codePointToEmoji = (codePoint: string) => String.fromCodePoint(...codePoint.split("-").map(x => parseInt(x, 16)));

    function test(e: MouseEvent) {
        insertAtCaret(input, (e.target as HTMLSpanElement).innerText);
    };
</script>

<div class="example-wrapper">
    <div class="emoji-picker" hidden={!showEmojiPopup}>
        <input bind:value={searchQuery} type="text" placeholder="Search" />
        <div class="emoji-grid">
            {#await loadEmoji(searchQuery)}
                <p>Loading Emoji...</p>
            {:then emojiList}
                {#each emojiList as emoji}
                    <span class="emoji" on:click={test}>{codePointToEmoji(emoji)}</span>
                {/each}
            {:catch}
                <p>Error: Unable to load emoji</p>
            {/await}
        </div>
    </div>
    
    <div class="input-wrapper">
        <input class="example-input" bind:this={input} type="text" placeholder="Message">
        <!-- <i class="fa-solid fa-face-smile" on:click={() => showEmojiPopup = !showEmojiPopup}></i> -->
        <span class={showEmojiPopup ? "active" : ""} on:click={() => showEmojiPopup = !showEmojiPopup}>😊</span>
    </div>
</div>

<style>
    .example-wrapper {
        position: relative;
    }

    .example-input {
        width: 95vw;
    }

    .input-wrapper {
        position: relative;
    }

    .input-wrapper span {
        position: absolute;
        top: 50%;
        right: .25em;
        transform: translateY(-50%);
        font-size: 1.6em;
        cursor: pointer;
        opacity: 0.5;
        transition: .15s filter ease-in-out, .15s opacity ease-in-out;
        filter: grayscale(1);
    }

    .input-wrapper > span:hover, span.active {
        opacity: 1;
        filter: grayscale(0);
    }

    * {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    }

    .emoji-picker {
        background-color: rgb(32, 32, 36);
        padding: .75em;
        display: flex;
        flex-direction: column;
        gap: .5em;
        border-radius: .5em;
        height: 350px;
        width: 400px;
        position: absolute;
        right: 0;
        bottom: calc(100% + .5em);
        box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.3);
    }

    .emoji-picker[hidden] {
        display: none;
    }

    .emoji-grid {
        display: grid;
        grid-template-columns: repeat(9, auto);
        overflow-y: scroll;
        scrollbar-width: none; /* Firefox */
        justify-content: center;
    }

    .emoji-grid::-webkit-scrollbar {
        display: none;
    }

    .emoji-grid span {
        cursor: pointer;
        font-size: 1.75em;
        height: 1.5em;
        width: 1.5em;
        display: grid;
        place-items: center;
        border-radius: .25em;
    }

    .emoji-grid span:hover {
        background-color: rgba(255, 255, 255, 0.3);
    }
</style>