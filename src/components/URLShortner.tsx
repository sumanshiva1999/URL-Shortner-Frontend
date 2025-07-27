import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { useRef } from "react";
import type { ShortenerProps } from "../interfaces/shortenURL";
import { useNavigate } from "react-router-dom";


function URLShortner(props: ShortenerProps) {

    const {inputLabel, buttonName, errorMessage, shortURL, addShortURL, onButtonClick} = props;

    const url = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    return (
        <div className="flex gap-x-3">

                <div className="flex flex-col w-full max-w-sm gap-3">
                    <InputLabel htmlFor="url-input" className="text-left">{inputLabel || "URL To Shorten"}</InputLabel>
                    <Input
                        id="url-input"
                        placeholder="Enter URL to Shorten"
                        inputRef={url}
                        sx={{
                            border: "2px solid #1976d2",
                            borderRadius: "8px",
                            padding: "4px",
                        }}
                    />
                    <Button variant="contained" onClick={() => onButtonClick(url.current?.value || "")} >{buttonName || "Submit"}</Button>

                    <div className="text-center">

                        {shortURL && <span> {shortURL} </span> }
                        <br />
                        {errorMessage && <span className="text-red-500">{errorMessage}</span>}
                        <span 
                        className="underline text-blue-500 cursor-pointer"
                        onClick={() => addShortURL? navigate("/open-short-url") : navigate("/add-short-url")}
                        > {addShortURL? "Open Short URL": "Add New Short URL"}</span>
                    </div>
                </div>
            </div>
    );

    // return (
    //     <>
    //     {/* <div className="flex flex-col"> */}

    //         <div className="flex gap-x-3">

    //             <div className="flex flex-col w-full max-w-sm gap-3">
    //                 <InputLabel htmlFor="url-input" className="text-left">URL To Shorten</InputLabel>
    //                 <Input
    //                     id="url-input"
    //                     placeholder="Enter URL to Shorten"
    //                     inputRef={originalURL}
    //                     sx={{
    //                         border: "2px solid #1976d2",
    //                         borderRadius: "8px",
    //                         padding: "4px",
    //                     }}
    //                 />
    //                 <Button variant="contained" onClick={createOrUpdateShortURL} >Submit</Button>
    //             </div>
    //             {/* <div className="flex flex-col w-full max-w-sm gap-3">
    //                 <InputLabel htmlFor="open-short-url-input" className="text-left">Open Short URL</InputLabel>
    //                 <Input
    //                     id="open-short-url-input"
    //                     placeholder="Enter short URL to open"
    //                     inputRef={shortenURL}
    //                     sx={{
    //                         border: "2px solid #1976d2",
    //                         borderRadius: "8px",
    //                         padding: "4px",
    //                     }}
    //                 />
    //                 <Button variant="contained" onClick={() => validateUrl(shortenURL?.current?.value || "")} >Open</Button>
    //             </div> */}

    //             <div className="text-center">
    //                 {sortenedUrl &&
    //                     <span
    //                         className="underline text-blue-500 cursor-pointer"
    //                         onClick={() => validateUrl(sortenedUrl)}> {sortenedUrl}
    //                     </span>
    //                 }
    //                 <br />
    //                 {error && <span className="text-red-500">{error}</span>}
    //             </div>
    //         </div>
    //     {/* </div> */}
    //     </>
    // );
};

export default URLShortner;
