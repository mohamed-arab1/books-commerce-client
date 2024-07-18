export type Book = {
  genre: string[];
  _id: number;
  cover_image: string;
  description: string;
  title: string;
  author: string;
  price: string;
  rate: number;
  publication_year: string;
};

export interface CardProps {
  book: Book;
}

export interface BooksState {
  books: Book[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  selectedGenres: string[];
}

export interface BookDetailsState {
  bookDetails: Book;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
