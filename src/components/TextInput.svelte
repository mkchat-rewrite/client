<script lang="ts">
    export let value: string | null = null;
    export let name = "";
    export let placeholder = "";
    export let autocomplete: "on" | "off" = "on";
    export let maxlength = -1;
    export let required = false;

    let isFocus = !!value;

    const handleFocus = (event: FocusEvent) => {
        const element = event.target as HTMLInputElement;

        if (value) return;

        element.placeholder = isFocus ? placeholder : "";
        isFocus = !isFocus;
    };

    const onchange = (event: InputEventInit) => { // idk why typescript wants this to be InputEventInit, but recasting below fixes so whatever
        const element = (event as InputEvent).target as HTMLInputElement;
        value = element.value;
    };
</script>

<span>
    <span class="label" hidden={!isFocus}>{placeholder}</span>
    <input type="text" value={value} name={name} placeholder={placeholder} autocomplete={autocomplete} maxlength={maxlength} required={required} on:focus={handleFocus} on:blur={handleFocus} on:input={onchange} />
</span>

<style>
    span {
        position: relative;
    }

    input {
        width: 100%;
        margin-bottom: .5em;
    }

    .label {
        color: rgb(187, 189, 194);
        position: absolute;
        top: -1.5em;
        font-size: .9em;
    }
</style>