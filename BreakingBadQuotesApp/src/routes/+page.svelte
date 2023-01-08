<script>
    import PageDefaultTransition from "$lib/PageTransitions/DefaultTransition.svelte";
	import SwooshUpTransition from "$lib/PageTransitions/SwooshUpTransition.svelte";
    import { quotes } from "$lib/stores/brba_store";
</script>

<SwooshUpTransition>
    <main>
        {#each $quotes as quote}
        <div class="quote">
            <p>{quote.quote}</p>
            <p style="text-align: right; font-style: italic;">{quote.author}</p>
        </div>
        {/each}

    </main>
</SwooshUpTransition>

<style>
    main {
        padding: 1rem;
        background-color: bisque;
        color: black;
        width: 100vw;
        height: 100vh;
    }

    .quote {
        margin: 0 0 2rem 0;
    }
</style>

