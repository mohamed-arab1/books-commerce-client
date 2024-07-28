export type Book = {
  _id: string;
  genre: string[];
  cover_image: string;
  description: string;
  title: string;
  author: string;
  price: string;
  rate?: number;
  publication_year: number;
  most_popular?: boolean;
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
