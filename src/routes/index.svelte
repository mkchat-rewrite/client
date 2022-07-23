<script>
    import Counter from "../components/Counter.svelte";
    import TextInput from "../components/TextInput.svelte";
</script>

<main>
    <!-- <h1>MK Chat Beta</h1>

    <div class="card">
        <Counter />
    </div> -->

    <div class="form">
        <span>
            <h2>Welcome to MK Chat</h2>
            <h6 id="motd">Room rp is more active</h6>
        </span>
        <TextInput placeholder="Nickname" />
        <TextInput placeholder="Room" />
        <button>Join</button>
    </div>
    
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