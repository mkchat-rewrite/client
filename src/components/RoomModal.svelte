<script type="ts">
    let visible: boolean = false;
    export let ws: WebSocket;
    export let username: string | null;

    export function toggle() {
        visible = !visible;
    };

    const rooms = [
        { name: "Main", room: "main" },
        { name: "Main2", room: "main2" },
        { name: "Chill", room: "chill" },
        { name: "Roleplay", room: "rp" },
        { name: "Spam", room: "spam" },
        { name: "Serious", room: "serious" },
        { name: "LFG", room: "lfg" },
        { name: "DistrustFanClub", room: "distrust" },
        { name: "GayBobsterChannel", room: "bobster" }
    ];

    function switchRoom(ev: MouseEvent) {
        const el = ev.target as HTMLElement;
        window.location.replace(`${window.location.origin}${window.location.pathname}?username=${username}&room=${el.getAttribute("data-room")}`);
        // if (ws) ws.send(JSON.stringify({
        //     type: "join",
        //     data: {
        //         username,
        //         room: el.getAttribute("data-room")
        //     }
        // }));
    };
</script>

<div class="modal-parent" hidden={!visible}>
    <div class="modal">
        <div class="header">
            <h2>Switch Room</h2>
        </div>
        <div class="content">
            <input type="text" placeholder="ho" />
            {#each rooms as room}
                <span class="room-btn" on:click={switchRoom} data-room={room.room}>{room.name}</span>
            {/each}
        </div>
        <div class="footer">
            <button class="close" on:click={() => visible = false}>Close</button>
        </div>
    </div>
</div>

<style>
    .modal-parent {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 999;
        background-color: rgb(0, 0, 0, 0.5);
        display: grid;
        place-content: center;
    }

    .modal-parent[hidden] {
        display: none;
    }

    .modal {
        background: #202024;
        width: 30vw;
        min-width: 425px;
        aspect-ratio: 16 / 9;
        border-radius: .75em;
        box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.3);
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .header {
        height: 45px;
    }

    .content {
        height: calc(100% - 110px);
        padding: 0.5em;
        display: grid;
        gap: 0.5em;
        grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
        place-content: center;
        border-radius: 0.6em;
        overflow: scroll;
        overflow-x: hidden;
    }

    .footer {
        justify-content: flex-end;
        height: 65px;
    }

    .header, .footer {
        display: flex;
        align-items: center;
        padding: .75em;
    }

    .close {
        float: right;
        right: .5em;
    }

    .room-btn {
        background-color: #2f2f35;;
        padding: .75em;
        text-align: center;
        border-radius: .5em;
        cursor: pointer;
    }
</style>