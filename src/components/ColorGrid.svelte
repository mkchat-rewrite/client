<script>
    import ColorCell from "./ColorCell.svelte";
    export let colors;
</script>

<div>
    {#each colors as color}
        <ColorCell props={{color}} />
    {/each}
    <ColorCell props={{icon: true, text: "Custom"}} />
</div>

<style>
    div {
        background: #2E3440;
        display: grid;
        gap: .75rem;
        grid-template-columns: repeat(4, auto);
        place-content: center;
        padding: .75rem;
        border-radius: .6rem;
    }
</style>
