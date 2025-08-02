import { useState } from "react";
import URLShortner, { DEPLOYMENT_URL } from "./URLShortner";
import type { ShortenURL } from "../interfaces/shortenURL";
import { postAPI } from "../api/APIFunctions";

function OpenShortURL () {

    const [errorMessage, setErrorMessage] = useState<string>("");

    const validateUrl = (sortURL: string) => {
        const saveURLPayload = sortURL;
        postAPI(`${DEPLOYMENT_URL}/getURLDetails`, saveURLPayload).then((response) => {
            if(response.ok) {
                response.json().then((data: ShortenURL) => {
                    console.log("data", data);
                    console.log("!data.isFound", !data.found);
                    console.log("!data.isValid", !data.valid);
                    if(!data.found) {
                        setErrorMessage("This URL does not exist. create new one above.");
                        return;
                    } else if (!data.valid) {
                        setErrorMessage("This URL has expired or is invalid. create new one.");
                        return;
                    } else {
                        const newWindow = window.open(`http://${(data.shortURL as any)?.fullURL}`, '_blank');
                        if (newWindow) {
                            newWindow.focus();
                        }
                        setErrorMessage("");
                    }
                });
            }
        });
    };

    return (
        <>
            <URLShortner 
                inputLabel="Open Short URL"
                buttonName="Open"
                errorMessage={errorMessage}
                shortURL=""
                onButtonClick={validateUrl}
                addShortURL={false}
            ></URLShortner>
        </>
    );
}

export default OpenShortURL;