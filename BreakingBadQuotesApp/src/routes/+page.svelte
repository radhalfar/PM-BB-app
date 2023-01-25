<script lang="ts">
	import SwooshUpTransition from "$lib/components/PageTransitions/SwooshUpTransition.svelte";
	import QuoteCard from "$lib/components/QuoteCard.svelte";
    import { quotes } from "$lib/stores/brba_store";
	import { fly } from "svelte/transition";

    let position = 0;
    let visible = true;
    let direction = 1;

    $: active = $quotes[position];

    function handleClick(event : MouseEvent) {
        let beforeChange = position;

        if(event.clientX > window.innerWidth / 2) {
            position += 1;
            direction = 1;
        }
        else {
            if(position != 0) {
                position -= 1;
                direction = -1; 
            }
        }

        if(position >= $quotes.length - 1) {
            quotes.update(10);
        }

        if(beforeChange != position) {
            visible = false;
        
            setTimeout(function() { visible = true }, 300);
        }     
    }
</script>

<SwooshUpTransition>
    <main on:click={handleClick} on:keypress={() => {}}>
        {#if $quotes.length == 0} 
            <div class="message">
                <p>Kde nic, tu nic.<br> Nejste připojeni k internetu.</p>
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
        background-color: bisque;
        width: 100vw;
        height: 100vh;
        background-image: url("/img/background_field.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }

    .card {
        margin: 0;
    }

    .message {
        margin: 50% auto;
        height: 25vh;
        background-color: aliceblue;
        border-radius: 2rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>

