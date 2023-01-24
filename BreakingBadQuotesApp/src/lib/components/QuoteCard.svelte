<script lang="ts">
    import type {Quote} from "$lib/interfaces/Quote";
	import CharacterPicture from "./CharacterPicture.svelte";

    export let quote : Quote;
</script>

<div class="quote">
    <div class="text-part">
        <h1>{quote.quote}</h1>
        <h2>{quote.author}</h2>
    </div>
    <CharacterPicture characterName={quote.author}/>
    <!-- <ButtonsForQuote/> -->
</div>

<style>
    h1 {
        color: black;
        font-size: 1.3rem;
        margin: 0 0 2rem 0;
        text-align: justify;
    }

    h2 {
        text-align: left;
        font-style: italic;
        color: black;
        font-size: 1.2rem;
    }

    .text-part {
        background-color: #f3f3f3;
        margin: 0.5rem 0 2rem 0;
        padding: 1.5rem;
        border-radius: 1rem;
        min-height: 40%;
        height: 85%;
        width: 100%;
    }

    .quote {
        min-height: 80vh;
        height: 80vh;
    }
</style>