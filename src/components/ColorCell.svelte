<script>
    export let props;
</script>

<div style={"background: " + props.color}>
    {#if props.icon}
        <i class="fa-solid fa-circle-plus"></i>
    {/if}
    {#if props.text}
        <span>{props.text}</span>
    {/if}
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap");
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css");
	
    div {
        background: #4C566A;
        height: 8rem;
        width: 8rem;
        border-radius: .6rem;
        cursor: pointer;
        transition: .2s;
        position: relative;
        overflow: hidden;
        display: grid;
        place-content: center;
        text-align: center;
        gap: .5rem;
        color: #ffffff;
    }
	
    div:hover {
        box-shadow: 0 0 0 .2rem #ffffff;
    }
	
    div i {
        font-size: 2.5rem;
    }
</style>
