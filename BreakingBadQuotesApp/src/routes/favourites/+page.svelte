<script lang="ts">
	import SwooshUpTransition from '$lib/components/PageTransitions/SwooshUpTransition.svelte';
    import { favourites } from "$lib/stores/brba_store";
	import QuoteCard from '$lib/components/QuoteCard.svelte';
    import { fly } from "svelte/transition";

    let position = 0;
    let visible = true;
    let direction = 1;

    $: active = $favourites[position];

    function handleClick(event : MouseEvent) {
        let beforeChange = position;

        if(event.clientX > window.innerWidth / 2) {
            if(position < $favourites.length - 1) {
                position += 1;
                direction = 1;
            }
        }
        else {
            if(position != 0) {
                position -= 1;
                direction = -1; 
            }
        }

        if(beforeChange != position) {
            visible = false;
        
            setTimeout(function() { visible = true }, 300);
        }        
    }
</script>

<SwooshUpTransition>
    <main on:click={handleClick} on:keypress={() => {}}>
        {#if $favourites.length == 0} 
            <div class="message">
                <p>Kde nic, tu nic.<br> Nemáte žádné oblíbené hlášky.<br> Přidáte je pomocí výběru z náhodných.</p>
            </div>            
        {/if}

        {#if active && visible}
            <div class="card" in:fly="{{ x: direction * 250, duration: 250, delay: 100}}"
            out:fly="{{ x: direction * -250, duration: 250, }}">
                <QuoteCard quote={active}/>
            </div>
        {/if}
    </main>
</SwooshUpTransition>

<style>
    main {
        background-color: rgb(194, 255, 208);
        width: 100vw;
        height: 100vh;
        background-image: url("/img/background_lab.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }

    .message {
        margin: auto auto;
        height: 25vh;
        background-color: aliceblue;
        border-radius: 2rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        top: calc(50% - (14vh));
    }

    .message > p {
        color: black;
        text-align: center;
    }

    div {
        margin: 0;
        padding: 0;
        border: 0;
        width: 100vw;
    }
</style>