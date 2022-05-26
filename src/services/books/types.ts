export type Book = {
  display_name: string;
  book_details: {
    title: string;
    description: string;
    author: string;
    price: string;
    publisher: string;
  }[];
  rank: number;
  amazon_product_link: string;
};

export type BooksResponse = {
  status: string;
  results: Book[];
  num_results: number;
};
