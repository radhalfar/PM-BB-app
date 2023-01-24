//https://api.breakingbadquotes.xyz/v1/quotes

import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { Quote } from "$lib/interfaces/Quote";

export const quotes : Writable<Quote[]> = writable([] as Quote[]);

export async function fetchQuote() {
    const url : string = "https://api.breakingbadquotes.xyz/v1/quotes/5";
    const res = await fetch(url);
    const data : Quote[] = await res.json();

    quotes.set(data);
}