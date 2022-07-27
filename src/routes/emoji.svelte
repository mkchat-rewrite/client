<script>
    import EmojiPicker from "../components/EmojiPicker.svelte";
    import { username, room } from "../shared/store";

    username.set("Guest");

    console.log($username, $room);
</script>

<main>
    <EmojiPicker />
</main>

<style>
    main {
        place-items: center;
        justify-content: center; /* needed for some mobile devices */
    }
</style>