<script lang="ts">
    import type { PageData } from './$types';
    import PageDefaultTransition from '$lib/components/PageTransitions/DefaultTransition.svelte';
	import SwooshUpTransition from '$lib/components/PageTransitions/SwooshUpTransition.svelte';
    
    // export let data: PageData;
</script>

<SwooshUpTransition>
    <main>
        <h1>Favourites page!</h1>

    </main>
</SwooshUpTransition>

<style>
    main {
        background-color: rgb(194, 255, 208);
        padding: 1rem;
        color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        display: block;
    }
</style>