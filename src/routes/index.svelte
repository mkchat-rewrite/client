<script>
    import Motd from "../components/Motd.svelte";
    import TextInput from "../components/TextInput.svelte";
</script>

<main>
    <!-- <h1>MK Chat Beta</h1>

    <div class="card">
        <Counter />
    </div> -->

    <form action="https://mkchat.app/chat.html">
        <span>
            <h2>Welcome to MK Chat</h2>
            <Motd />
        </span>
        <TextInput name="name" placeholder="Nickname" autocomplete="off" maxlength={30} required />
        <TextInput value="main" name="room" placeholder="Room" autocomplete="off" required />
        <button>Join</button>
    </form>
    
    <!-- <p>
        Click <a href="https://mkchat.app" target="_blank">here</a> to return to the regular mkchat homepage.
    </p>

    <span>
        <a href="https://mkchat.app/moderation" target="_blank">Moderation Dashboard</a>
        -
        <a href="https://mkchat.app/chat.html?room=test&name=🧶" target="_blank">Test Room</a>
        -
        <a href="https://rail-proxy.mkchat.app/discord/stickers/781323628267962408.png" target="_blank">Railway Proxy Demo URL</a>
    </span> -->
</main>

<style>
    form {
        display: flex;
        flex-direction: column;
        background-color: rgb(32, 32, 36);
        min-width: 400px;
        width: 25rem;
        height: 20rem;
        padding: 0rem 1.75rem;
        border-radius: 8px;
        justify-content: space-evenly;
    }
</style>