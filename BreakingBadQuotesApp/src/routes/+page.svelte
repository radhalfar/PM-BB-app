<script lang="ts">
	import SwooshUpTransition from "$lib/components/PageTransitions/SwooshUpTransition.svelte";
	import QuoteCard from "$lib/components/QuoteCard.svelte";
    import { quotes } from "$lib/stores/brba_store";

    let before = null;
    $: active = $quotes.at(0);
    $: after = $quotes.at(1);

    function buttonClick() {
        quotes.refresh(1);
    }
</script>

<SwooshUpTransition>
    <main on:click={buttonClick} on:keypress={buttonClick}>
        <!-- <button on:click={buttonClick}>New Quotes</button> -->
        <!-- {#each $quotes as quote}
            <QuoteCard quote={quote}/>
        {/each} -->
        {#if active}
            <QuoteCard quote={active}/>
        {/if}
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

