<script lang="ts" context="module">
    import { page } from "$app/stores";
</script>

<script lang="ts">
    import { onMount } from "svelte";

    export let title: string;
    export let description: string;

    const colors = [
        "slateblue",
        "skyblue",
        "darkseagreen",
        "indigo",
        "lightsteelblue",
        "tomato",
        "mediumaquamarine",
        "olivedrab",
        "palevioletred",
        "plum",
        "yellowgreen",
        "tan",
        "teal"
    ];

    onMount(() => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const hueBg = !!Math.round(Math.random());

        if (hueBg) {
            document.body.style.backgroundColor = color;
        } else {
            document.body.style.color = color;
        };
    });
</script>
  
<main>
    <h1>{$page.status}</h1>
    <pre>{$page.error.message}</pre>
</main>

<style>
    main {
        place-items: center;
        justify-content: center; /* needed for some mobile devices */
        flex-direction: column;
    }
</style>