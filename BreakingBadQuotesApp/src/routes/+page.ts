import type { PageLoad } from './$types';
import { fetchQuote } from "$lib/stores/brba_store"

export const load = (async () => {
    fetchQuote();
    return {};
}) satisfies PageLoad;