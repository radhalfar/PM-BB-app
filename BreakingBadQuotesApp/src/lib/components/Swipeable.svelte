<!-- <script lang="ts">
    let currentIndex = 0;
    let items: any[] = new Array(); // array of items to navigate through

    let startX = 0;
    let endX = 0;
    let swipeThreshold = 50;

    function handleSwipe(event: {dir: 'left' | 'right'}) {
        if (event.dir === 'left') {
            currentIndex = (currentIndex + 1) % items.length;
        } else if (event.dir === 'right') {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
        }
    }
    
    function handleTouchStart(event: TouchEvent) {
        startX = event.touches[0].clientX;
    }

    function handleTouchEnd(event: TouchEvent) {
        endX = event.changedTouches[0].clientX;
        let swipeDistance = endX - startX;
        if (swipeDistance > swipeThreshold) {
            handleSwipe({dir:'right'});
        } else if (swipeDistance < -swipeThreshold) {
            handleSwipe({dir:'left'});
        }
    }
</script>

<div on:touchstart={handleTouchStart} on:touchend={handleTouchEnd}>
    <slot name="item" let:item={items[currentIndex]} />
</div> -->