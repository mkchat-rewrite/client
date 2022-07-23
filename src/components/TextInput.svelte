<script lang="ts">
    export let placeholder = "";
    let isFocus = false;

    const handleFocus = (event: FocusEvent) => {
        const element = event.target as HTMLInputElement;

        element.placeholder = isFocus ? placeholder : "";
        isFocus = !isFocus;
    };
</script>

<span>
    <span class="label" hidden={!isFocus}>{placeholder}</span>
    <input type="text" placeholder={placeholder} on:focus={handleFocus} on:blur={handleFocus} />
</span>

<style>
    span {
        position: relative;
    }

    input {
        width: 100%;
    }

    .label {
        color: rgb(187, 189, 194);
        position: absolute;
        top: -1.5em;
        font-size: .9em;
    }
</style>