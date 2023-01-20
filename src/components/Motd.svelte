<script>
    const fetchMotd = async () => {
        const res = await fetch("https://old-water-9407.fly.dev/api/motd");
        return await res.text();
    };
</script>

{#await fetchMotd()}
	<h6>Fetching motd...</h6>
{:then motd}
	<h6>{motd}</h6>
{:catch}
    <h6>Failed to fetch MOTD</h6>
{/await}

<style>
    h6 {
        padding: .5em;
    }
</style>
