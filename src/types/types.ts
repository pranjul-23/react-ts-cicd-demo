export interface UserType {
  id: string;
  name: string;
}

export interface UserType {
  role: 'admin' | 'dev';
}

// Primitives & Unions (Only possible with 'type')
// type Status = 'idle' | 'loading' | 'success' | 'error';
// type ID = string | number;

// Tuples
// type KeyValuePair = [string, number];

// Discriminated Union
// type NetworkState =
//   { state: 'loading' } | { state: 'failed'; code: number } | { state: 'success'; data: string[] };

// Generic Functions & Constraints (extends)

// Constraint: T MUST have an 'id' property
// interface Identifiable {
//   id: string | number;
// }

// function findById<T extends Identifiable>(items: T[], id: string | number): T | undefined {
//   return items.find((item) => item.id === id);
// }

// The keyof Constraint

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: 'Alice', age: 30 };
getProperty(user, 'name'); // Type is string
// getProperty(user, 'salary'); // Compile error: Argument of type '"salary"' is not assignable to '"name" | "age"'

// Generic Interfaces and API Responses

// interface ApiResponse<TData> {
//   data: TData;
//   status: number;
//   message: string;
//   timestamp: number;
// }

// interface Product {
//   sku: string;
//   price: number;
// }

// type ProductResponse = ApiResponse<Product[]>;
