import { useState } from "react";
import URLShortner, { DEPLOYMENT_URL } from "./URLShortner";
import { postAPI } from "../api/APIFunctions";
import type { ShortenURL } from "../interfaces/shortenURL";

function AddShortURL() {

    const [errorMessage, setErrorMessage] = useState<string>("");
    const [shortURL, setShortURL] = useState<string>("");

    const createOrUpdateShortURL = (fullURL: string) => {
        const saveURLPayload = {} as ShortenURL;
        saveURLPayload.fullURL = fullURL;
        postAPI(`${DEPLOYMENT_URL}/save`, saveURLPayload).then((response) => {
            if(response.ok) {
                response.json().then((data: ShortenURL) => {
                    setShortURL(data.shortURL);
                    setErrorMessage("");
                });
            }
        });
    };


    return (
        <URLShortner
            inputLabel="Enter URL to Shorten"
            buttonName="Shorten URL"
            errorMessage={errorMessage}
            shortURL={shortURL}
            addShortURL={true}
            onButtonClick={createOrUpdateShortURL}
        />
    );
}

export default AddShortURL;