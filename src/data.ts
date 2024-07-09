export type Book = {
  id: number;
  cover_image: string;
  description: string;
  title: string;
  author: string;
};

export interface BooksState {
    books:Book[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }