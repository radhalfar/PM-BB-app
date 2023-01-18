<script lang="ts">
	import SwooshUpTransition from '$lib/components/PageTransitions/SwooshUpTransition.svelte';
    import type { PageData } from './$types';
    

    export let data: PageData;

</script>

<SwooshUpTransition>

<main>
    <h1>Settings page!</h1>

</main>


</SwooshUpTransition>


<style>
    main {
        min-height: 100vh;
        min-width: 100vw;
        background-image: url("brba.jpg");
        background-position: 78% 0 ;
        background-size: auto 100vh;
        padding: 1rem;
        filter: grayscale(100%);
    }

    
</style>