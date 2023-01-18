<script lang="ts">
    import type {Quote} from "$lib/interfaces/Quote";

    export let quote : Quote;
</script>

<div class="quote">
    <h1>{quote.quote}</h1>
    <h2>{quote.author}</h2>
</div>
<img src="brba.jpg" alt="postava"/>


<style>
    h1 {
        color: black;
        font-size: 1.4rem;
        margin: 0 0 2rem 0;
    }

    h2 {
        text-align: left;
        font-style: italic;
        color: black;
        font-size: 1.2rem;
    }

    .quote {
        background-color: #f3f3f3;
        margin: 0.5rem 0 2rem 0;
        padding: 2rem 1rem 1rem 1rem;
        border-radius: 1rem;
        min-height: 40%;
        width: 100%;
    }
</style>