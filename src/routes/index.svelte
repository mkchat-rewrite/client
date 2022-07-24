<script>
    import Motd from "../components/Motd.svelte";
    import TextInput from "../components/TextInput.svelte";
</script>

<head>
    <title>MKChat | A zero hassle site to chat with friends!</title>
</head>

<main>
    <form action="https://mkchat.app/chat.html">
        <span>
            <h2>Welcome to MK Chat</h2>
            <Motd />
        </span>
        <TextInput name="name" placeholder="Nickname" autocomplete="off" spellcheck={false} maxlength={30} required />
        <TextInput value="main" name="room" placeholder="Room" autocomplete="off" spellcheck={false} required />
        <button>Join</button>
    </form>
    <span class="external-links">
        <a href="https://discord.gg/GbWngkTSZg" target="_blank"><i class="fa-brands fa-discord"></i></a>
        <a href="https://mkchat.app/about.html" target="_blank"><i class="fa-solid fa-circle-info"></i></a>
    </span>
</main>

<style>
    form {
        display: flex;
        flex-direction: column;
        background-color: rgb(32, 32, 36);
        min-width: 400px;
        width: 25rem;
        height: 20.5rem;
        padding: 0rem 1.75rem;
        border-radius: 8px;
        justify-content: space-evenly;
        box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    }

    .external-links {
        position: absolute;
        bottom: .5em;
        right: .5em;
        display: flex;
        gap: .75em;
    }

    .external-links i {
        transition: background-color .15s;
        cursor: pointer;
        font-size: 1.5rem;
        color: rgb(158, 158, 158);
    }

    .external-links i:hover {
        color: var(--accent);
    }
</style>