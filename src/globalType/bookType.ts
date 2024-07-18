export type Book = {

    genre: string;
    _id: string;
    cover_image: string;
    description: string;
    title: string;
    author: string;
    price:string;
    rate:number
    most_popular:boolean
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



