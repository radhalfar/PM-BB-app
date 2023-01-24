//https://api.breakingbadquotes.xyz/v1/quotes

import { writable, type Writable } from "svelte/store";
import type { Quote } from "$lib/interfaces/Quote";

function fetchQuotes() {
	const {subscribe, set, update } = writable([]);
    const fetchData = async (count? : number) => {
        if(!count) {
            count = 1;
        }
    
        const url = "https://api.breakingbadquotes.xyz/v1/quotes/" + count;
        const res = await fetch(url);
        const data = await res.json();

        //sets data to store
        set(data);
    }

    fetchData();

	return {
		subscribe,
		refresh: (count? : number) => fetchData(count)
	};
}

export const quotes = fetchQuotes();

// export const quotes : Writable<Quote[]> = writable([] as Quote[]);

// export async function fetchQuote() {
//     const url : string = "https://api.breakingbadquotes.xyz/v1/quotes/5";
//     const res = await fetch(url);
//     const data : Quote[] = await res.json();

//     quotes.set(data);
// }