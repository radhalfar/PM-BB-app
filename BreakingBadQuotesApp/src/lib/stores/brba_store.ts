//https://api.breakingbadquotes.xyz/v1/quotes

import { writable } from "svelte/store";

export const quotes = writable([]);

const fetchQuote = async() => {
    const url : string = "https://api.breakingbadquotes.xyz/v1/quotes/5";
    const res = await fetch(url);
    const data = await res.json();

    quotes.set(data);
};

fetchQuote();