//https://api.breakingbadquotes.xyz/v1/quotes

import { writable, type Writable } from "svelte/store";
import type { Quote } from "$lib/interfaces/Quote";
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

function fetchQuotes() {
	const {subscribe, set, update } = writable([] as Quote[]);
    const fetchData = async (updateData : boolean, count? : number) => {
        if(!count) {
            count = 1;
        }
    
        const url = "https://api.breakingbadquotes.xyz/v1/quotes/" + count;
        const res = await fetch(url);
        const data : Quote[] = await res.json();

        //sets data to store
        if(updateData) {
            update(old => [...old, ...data]);
        }
        else {
            set(data);
        }
    }

    fetchData(false);

	return {
		subscribe,
		refresh: (count? : number) => fetchData(false, count),
        update: (count? : number) => fetchData(true, count)
	};
}

export const quotes = fetchQuotes();

function loadFavourites() {
    const {subscribe, set, update } = writable([] as Quote[]);

    const loadData = async() => {
        try {
            const contents = await Filesystem.readFile({
                path: "FavQuotes.json",
                directory: Directory.Data,
                encoding: Encoding.UTF8,
              });

            set(JSON.parse(contents.data));

        } catch(e) {
            console.error('Unable to read file', e);
            set([] as Quote[]);
            return false;
        }

        return true;
    }

    const saveData = async() => {
        let fileContent : string = "";

        //gets actual data
        const unsubscribe = subscribe(value => {
            fileContent = JSON.stringify(value);
        });

        try {
            const result = await Filesystem.writeFile({
                path: "FavQuotes.json",
                data: fileContent,
                directory: Directory.Data,
                encoding: Encoding.UTF8
            });
        } catch (e) {
            console.error('Unable to save file', e);
            unsubscribe();
            return false;
        }
        
        unsubscribe();
        return true;
    }

    loadData();

    return {
        subscribe,
        add : (quote : Quote) => update(old => [...old, quote]),
        remove : (quote : Quote) => update(old => {
            const index : number =  old.indexOf(quote, 0);
            if(index > -1)
                old.splice(index, 1);

            return old;
        }),
        load : () => loadData(),
        save : () => saveData()
    }
}

export const favourites = loadFavourites();