import { useState, useEffect } from 'react';

interface Book {
  id: string;
  title: string;
  inStock: boolean;
}

interface APIResponse<T> {
  data?: T;
  errors?: Array<{ message: string }>;
}

async function getBookList<TData, TVariables = Record<string, unknown>>(
  query: string,
  variables?: TVariables
): Promise<TData> {
  const response = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  const result: APIResponse<TData> = await response.json();
  // Crucial GraphQL rule: HTTP status can be 200 even when GraphQL returns errors!
  if (result.errors && result.errors.length > 0) {
    throw new Error(result.errors[0].message);
  }

  return result.data as TData;
}

const GET_BOOK_LIST = `
  query GetBooks {
    books {
      id
      title
      inStock
    }
  }
`;

export const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getBookList<{ books: Book[] }>(GET_BOOK_LIST)
      .then((data) => setBooks(data.books))
      .catch((err: Error) => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} — {book.inStock ? 'In Stock' : 'Out of Stock'}
          </li>
        ))}
      </ul>
    </>
  );
};
