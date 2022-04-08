<script>
    let elementClass;
    export { elementClass as class };
</script>

<button class={elementClass}>
    <slot />
</button>

<style>
    button {
        border: none;
        outline: none;
        padding: .5rem 1rem;
        border-radius: 100rem;
        cursor: pointer;
        font-size: 1.05rem;
        transition: .2s;
        background-color: rgb(0, 0, 0, 0);
        color: rgb(255, 255, 255);
        transition: .2s;
    }

    button:not(.primary):hover, .active {
        background-color: rgb(255, 33, 66, 0.2);
        color: rgb(255, 33, 66);
    }

    .primary {
        background-color: rgb(255, 33, 66);
        color: #ffffff;
    }

    .primary:hover {
        background-color: rgb(212, 25, 53);
    }
</style>