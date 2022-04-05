<script>
		export let colors;
</script>

<div id="color-grid">
		{#each colors as color}
				<span class="color-cell" style={"background: " + color}></span>
		{/each}
		<div class="color-cell color-cell-add">
				<i class="fa-solid fa-circle-plus"></i>
				<span>Custom</span>
		</div>
</div>

<style>
		@import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap");
		@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css");
	
		#color-grid {
    background: #2E3440;
    display: grid;
    gap: .75rem;
    grid-template-columns: repeat(4, auto);
    place-content: center;
    padding: .75rem;
    border-radius: .6rem;
		}

		.color-cell {
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
		}

		.color-cell:hover {
				box-shadow: 0 0 0 .2rem #ffffff;
		}

		.color-cell-add {
				display: grid;
				place-content: center;
				text-align: center;
				gap: .5rem;
				color: #ffffff;
		}

		.color-cell-add i {
				font-size: 2.5rem;
		}
</style>
