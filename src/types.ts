export type Product = {
  id: number;
  image: string | null;
  name: string;
  price: number;
  description?: string; // Optional description for each product
};

export type CoffeeSize = 'S' | 'M' | 'L'; // Sizes for coffee

export type CartItem = {
  id: string;
  product: Product;
  product_id: number;
  size: CoffeeSize; // Using CoffeeSize instead of PizzaSize
  quantity: number;
};

export const OrderStatusList: OrderStatus[] = [
  'New',
  'In Progress', // Updated for coffee-related orders
  'Ready for Pickup',
  'Completed',
];

export type OrderStatus = 'New' | 'In Progress' | 'Ready for Pickup' | 'Completed'; // Status updates for coffee orders

export type Order = {
  id: number;
  created_at: string;
  total: number;
  user_id: string;
  status: OrderStatus;
  order_items?: OrderItem[]; // List of items in the order
};

export type OrderItem = {
  id: number;
  product_id: number;
  product: Product; // Changed to reflect Product type
  order_id: number;
  size: CoffeeSize; // Using CoffeeSize for coffee orders
  quantity: number;
};

// New Category Type
export type CategoryType = {
  id: number;            // Unique identifier for the category
  image: string | null; // Image URL for the category
};

export type Profile = {
  id: string;
  group: string; // For roles, e.g., admin, customer
};
