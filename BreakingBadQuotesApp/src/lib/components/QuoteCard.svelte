<script lang="ts">
    import type {Quote} from "$lib/interfaces/Quote";
	import CharacterPicture from "./CharacterPicture.svelte";
    import {favourites} from "$lib/stores/brba_store";

    export let quote : Quote;

    let active : boolean;

    export async function toggleFavourite(event : any) {
        if(isFavourited(quote)) {
            favourites.remove(quote);
            active = false;
        }
        else  {
            favourites.add(quote);
            active = true;
        }

        event.stopImmediatePropagation();

        await favourites.save();
    }

    function isFavourited(q : Quote) : boolean {
        return $favourites.includes(q);
    }

    $: if(isFavourited(quote)) active = true;
    else active = false;
</script>

<div class="quote" on:dblclick={toggleFavourite}> 
    <CharacterPicture characterName={quote.author}/>
    <div class="text-part">
        <h1>{quote.quote}</h1>
        <h2>{quote.author}</h2>
    </div>

    <button class="favQuo" on:click={toggleFavourite}>
        <svg class="feather" class:active>
            <use href=icons/feather-sprite.svg#star/>
        </svg>
    </button>
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
        min-height: 40vh;
        width: 100%;
    }

    .quote {
        min-height: 60vh;
        height: 90vh;
        width: 100vw;
        max-width: calc(100vw);
        position: relative;
        padding: 1rem;
    }

    .favQuo {
        position: absolute;
        bottom: 0rem;
        left: 1rem;
        width: 4rem;
        height: 4rem;
        z-index: 20;
        border-radius: 50%;
        background-color: #016a32;
        text-decoration: none;
        outline:none;
        border: none;
    }

    .feather {
        width: 50%;
        height: 50%;
        margin: auto;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
        border: none;
    }

    .active {
        fill: #efe202;
    }
</style>