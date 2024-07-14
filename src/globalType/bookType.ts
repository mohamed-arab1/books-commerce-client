export type Book = {
    genre: string;
    id: number;
    cover_image: string;
    description: string;
    title: string;
    author: string;
    price:string;
    rate:number
  };
  
   export interface CardProps {
    book: Book;
  }
  
  export interface BooksState {
      books:Book[];
      status: 'idle' | 'loading' | 'succeeded' | 'failed';
      error: string | null;
      selectedGenres: string[];
    }