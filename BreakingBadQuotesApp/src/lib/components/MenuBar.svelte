<script lang="ts">
	import { each } from "svelte/internal";

    export const items : MenuItem[] = [
        {
            id : "settings",
            href : "/settings",
            linkText : "Nastavení",
            iconSrc : "icons/feather-sprite.svg#settings"
        },
        {
            id : "home",
            href : "/",
            linkText : "Domovská stránka",
            iconSrc : "icons/feather-sprite.svg#home"
        },        
        {
            id : "favourites",
            href : "/favourites",
            linkText : "Oblíbené",
            iconSrc : "icons/feather-sprite.svg#star"
        }
    ];

    interface MenuItem {
        id : string;
        href : string;
        linkText : string;
        iconSrc : string;
    }
</script>

<nav>
    <ul>
        {#each items as item, i}
        <li>
            <a href={item.href} id={item.id}>
                <!-- <img src={item.iconSrc} alt={item.linkText} /> -->
                <svg class="feather">
                    <use href={item.iconSrc}/>
                </svg>
                <span>{item.linkText}</span>
            </a>
        </li>
        {/each}
    </ul>
</nav>

<style>
    nav {
        position: fixed;
        background-color: var(--bg-primary);
        transition: width 600ms ease;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
    }

    li {
        width: 100%;
    }

    a {
        display: flex;
        align-items: center;
        height: 3.2rem;
        color: #ececec;
        text-decoration: none;
        filter: grayscale(100%) opacity(0.7);
        transition: var(--transition-speed);
    }

    a:hover {
        filter: grayscale(0%) opacity(1);
        background: var(--bg-secondary);
        color: #FFFFFF;
    }

    span {
        display: none;
        margin-left: 1rem;
        font-family: "Raleway Bold";
    }

    a > svg {
        width: 2rem;
        min-width: 2rem;
    }

    .feather {
        width: 24px;
        height: 24px;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
    }

    /* Small screens */
    @media only screen and (max-width: 800px) {
        nav {
            bottom: 0;
            width: 100vw;
            height: 3.2rem;
        }

        ul {
            flex-direction: row;
        }

        a {
            justify-content: center;
        }
    }

    /* Large screens */
    @media only screen and (min-width: 801px) {
        ul {
            top: 0;
            width: 5rem;
            height: 100vh;
        }

        nav:hover {
            width: 16rem;
        }

        nav:hover span {
            display: inline;
        }
    }
</style>
