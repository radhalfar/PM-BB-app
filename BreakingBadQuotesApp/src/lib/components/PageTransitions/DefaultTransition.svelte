<script lang="ts">
    import { fly } from 'svelte/transition';
</script>

<div class="page"
    in:fly="{{ y: 250, duration: 250, delay: 100}}"
    out:fly="{{ y: 250, duration: 250, }}" 
>
<slot></slot>
</div>

<style>
    .page {
		position: fixed;
	}
</style>