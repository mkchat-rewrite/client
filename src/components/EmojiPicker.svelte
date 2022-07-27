<script lang="ts">
    let emojiList: string[];
    export let inputEl: HTMLInputElement;
    let searchQuery: string;
    export let show: boolean = false;
    
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

    function insertEmoji(e: MouseEvent) {
        insertAtCaret(inputEl, (e.target as HTMLSpanElement).innerText);
    };
</script>

<div class="emoji-picker" hidden={!show}>
    <input bind:value={searchQuery} type="text" placeholder="Search" />
    <div class="emoji-grid">
        {#await loadEmoji(searchQuery)}
            <p>Loading Emoji...</p>
        {:then emojiList}
            {#if emojiList.length}
                {#each emojiList as emoji}
                    <span class="emoji" on:click={insertEmoji}>{codePointToEmoji(emoji)}</span>
                {/each}
            {:else}
                <p>No results...</p>
            {/if}
        {:catch}
            <p>Error: Unable to load emoji</p>
        {/await}
    </div>
</div>

<style>
    * {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    }

    .emoji-picker {
        background-color: #2d2d33;
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