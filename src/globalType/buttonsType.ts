export interface ButtonProps {
    buttons: { id: number; name: string }[];
    handleClick: (genre: string) => void;
    selectedGenres: string[];
  }