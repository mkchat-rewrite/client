<script>
    export let props;
</script>

<div class="color-cell" style={"background: " + props.color}>
    {#if props.icon}
        <i class="fa-solid fa-circle-plus" style="color: red;"></i>
    {/if}
    {#if props.text}
        <span>{props.text}</span>
    {/if}
</div>
