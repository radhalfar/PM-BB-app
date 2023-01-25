<script lang="ts">
    import type { LayoutData } from './$types';
    import MenuBar from '$lib/components/MenuBar.svelte';
    
    // export let data: LayoutData;
    export const prerender = true;
    export const trailingSlash = 'always';

</script>

<slot />
<MenuBar />

