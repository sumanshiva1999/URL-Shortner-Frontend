
export interface ShortenURL {
    shortURL: string;
    fullURL: string;
    createdAt: string;
    found: boolean;
    valid: boolean;
}

export interface ShortenerProps {
  inputLabel: string;
  buttonName: string;
  errorMessage: string;
  shortURL: string;
  addShortURL: boolean;
  onButtonClick: (sortURL: string) => void;
}