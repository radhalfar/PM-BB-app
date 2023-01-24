<script lang="ts">
	import type { TransitionConfig } from "svelte/transition";
    import {fade} from "svelte/transition";


    interface BorderFillParams {
        duration?: number;
        x?: number;
        y?: number;
        borderRadius? : number;
    }

	function borderFill(node: Element, { duration , x , y, borderRadius }: BorderFillParams): TransitionConfig {
		return {
			duration,
			css: t => {
                if(!x) {
                    x = 0;
                }

                if(!y) {
                    y = 0;
                }

                if(!borderRadius) {
                    borderRadius = 6;
                }

				return `
                    border-radius: ${borderRadius - (t * borderRadius)}px;
                    transform: translate(${x}px, ${y - (t * y)}px);
                    opacity: ${t * 1};
					`
			}
		};
	}

    
</script>

<div class="page"
    in:borderFill="{{duration: 300, y: 250, borderRadius: 150}}"
    out:fade="{{duration: 250, delay: 100}}" >
<slot/>
</div>

<style>
    .page {
		position: fixed;
        transform: translate(0px, 0px);
        border-radius: 0;
        display: block;
        overflow: scroll;
	}
</style>