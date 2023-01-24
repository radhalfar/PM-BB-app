<script>
	import SwooshUpTransition from "$lib/components/PageTransitions/SwooshUpTransition.svelte";
	import QuoteCard from "$lib/components/QuoteCard.svelte";
    import { quotes } from "$lib/stores/brba_store";

    function buttonClick() {
        quotes.refresh(1);
    }
</script>

<SwooshUpTransition>
    <main on:click={buttonClick} on:keypress={buttonClick}>
        <!-- <button on:click={buttonClick}>New Quotes</button> -->
        {#each $quotes as quote}
            <QuoteCard quote={quote}/>
        {/each}
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

