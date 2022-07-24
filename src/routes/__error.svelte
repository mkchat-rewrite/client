<script lang="ts" context="module">
    export const load = (data: Record<string, any>) => {
        return {
            props: {
                title: data.status,
                description: data.error?.message
            }
        };
    };
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
    <h1>{title}</h1>
    <pre>{description}</pre>
</main>

<style>
    main {
        place-items: center;
        justify-content: center; /* needed for some mobile devices */
        flex-direction: column;
    }
</style>