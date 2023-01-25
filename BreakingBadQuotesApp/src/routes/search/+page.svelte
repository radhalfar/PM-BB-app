<script lang="ts">
	import SwooshUpTransition from '$lib/components/PageTransitions/SwooshUpTransition.svelte';
	import type { Quote } from '$lib/interfaces/Quote';
    import {favourites} from "$lib/stores/brba_store";
	import { createSearchStore, searchHandler } from '$lib/stores/search_store';
	import { onDestroy } from 'svelte';



	const searchProducts: Quote[] = $favourites.map((product: Quote) => ({
		...product,
		searchTerms: `${product.quote} ${product.author}`
	}));

	const searchStore = createSearchStore(searchProducts);

	const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

	onDestroy(() => {
		unsubscribe();
	});
</script>

<SwooshUpTransition enableScrolling={true}>

<main>
    {#each $searchStore.filtered as fav}
    <div class="quote">
        <h1>{fav.quote}</h1>
        <h2>{fav.author}</h2>
    </div>
    {/each}
</main>
<input type="text" bind:value={$searchStore.search} />


</SwooshUpTransition>


<style>
    main {
        min-height: 100vh;
        min-width: 100vw;
        background-image: url("/img/brba.jpg");
        background-color: darkgrey;
        background-position: 78% 0 ;
        background-size: auto 100vh;
        background-repeat: no-repeat;
        padding: 1rem;
        filter: grayscale(100%);
        overflow: scroll;
    }

    .quote {
        background-color: #f3f3f3dd;
        margin: 0.5rem 0 1rem 0;
        padding: 1.5rem;
        border-radius: 1rem;
        width: 100%;
        color: black;
    }

    h1 {
        color: black;
        font-size: 1rem;
        margin: 0 0 1rem 0;
        text-align: justify;
    }

    h2 {
        text-align: right;
        font-style: italic;
        color: black;
        font-size: 0.9rem;
    }

    input {
        position: sticky;
        bottom: 3.5rem;
        right: 0;
        width: 100%;
        height: 3rem;
        background-color: white;
        padding: 0 0.5rem 0 0.5rem;
        color: #000;
        border-radius: 1rem;
    }
</style>