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
    }
</style>