<script lang="ts">
    export let value: string | null = null;
    export let name = "";
    export let placeholder = "";
    export let autocomplete: "on" | "off" = "on";
    export let maxlength = -1;
    export let required = false;

    let isFocus = false;

    const handleFocus = (event: FocusEvent) => {
        const element = event.target as HTMLInputElement;

        element.placeholder = isFocus ? placeholder : "";
        isFocus = !isFocus;
    };
</script>

<span>
    <span class="label" hidden={!isFocus}>{placeholder}</span>
    <input type="text" value={value} name={name} placeholder={placeholder} autocomplete={autocomplete} maxlength={maxlength} required={required} on:focus={handleFocus} on:blur={handleFocus} />
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