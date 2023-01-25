<script lang="ts">
    export let characterName : string;

    let errorImage : boolean = false;

    function imageErrorHandle() {
        errorImage = true;
    }
</script>

{#if (errorImage == false)}
<img on:error={imageErrorHandle} src={"img/characters/" + characterName.toLowerCase().replaceAll(" ", "_") + ".png"} alt={characterName} />
{:else}
<img src="brba.jpg" alt="ErrorImage" style="filter: grayscale(100%)"/>
{/if}

<style>
    img {
        width: 100vw;
        object-fit: cover;
        position: absolute;
        top: 20vh;
        right: -1rem;
        z-index: 10;
    }
</style>