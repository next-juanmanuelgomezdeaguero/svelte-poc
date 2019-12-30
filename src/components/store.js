import { writable, readable } from 'svelte/store';

export const apiKey = writable('42A36015-F941-4C58-817A-2E19E3663618');
export const host = readable('https://rest-sandbox.coinapi.io');
export const version = readable(1);