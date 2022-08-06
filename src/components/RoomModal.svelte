<script>
    export let visible = false;
</script>

<div class="modal-parent" hidden={visible}>
    <div class="modal">
        🐧
        <button on:click={() => visible = !visible}>Close</button>
    </div>
</div>

<style>
    .modal-parent {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 999;
        background-color: rgb(0, 0, 0, 0.5);
        display: grid;
        place-content: center;
    }

    .modal-parent[hidden] {
        display: none;
    }

    .modal {
        background: #202024;
        width: 50vw;
        aspect-ratio: 16 / 9;
        border-radius: .5em;
        box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.3);
    }
</style>