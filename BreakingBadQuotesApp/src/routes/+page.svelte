<script>
    import PageDefaultTransition from "$lib/components/PageTransitions/DefaultTransition.svelte";
	import SwooshUpTransition from "$lib/components/PageTransitions/SwooshUpTransition.svelte";
	import QuoteCard from "$lib/components/QuoteCard.svelte";
	import Swipeable from "$lib/components/Swipeable.svelte";
    import { quotes, fetchQuote } from "$lib/stores/brba_store";
</script>

<SwooshUpTransition>
    <main>
        <QuoteCard quote={$quotes[0]} />
        <!--         
        {#each $quotes as q}
                <QuoteCard quote={q} />
        {/each} -->

    </main>
</SwooshUpTransition>

<style>
    main {
        padding: 1rem;
        background-color: bisque;
        width: 100vw;
        height: 100vh;
    }
</style>

