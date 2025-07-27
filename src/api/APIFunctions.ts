import type { ShortenURL } from "../interfaces/shortenURL";

export const postAPI = (url: string, body: ShortenURL | string) => {
    // url = "http://localhost:8080/save";
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: typeof body ==  'string' ? body: JSON.stringify(body),
    });
}