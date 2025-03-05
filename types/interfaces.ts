export interface Property {
  _id?: string;
  owner: string;
  name: string;
  type: string;
  description?: string;
  location: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };
  beds: number;
  baths: number;
  square_feet?: number;
  amenities?: string[];
  options?: {
    weekly?: {
      price: number;
    };
    monthly?: {
      price: number;
    };
    nightly?: {
      price: number;
    };
  };
  seller_info: {
    name: string;
    email: string;
    phone: string;
  };
  images?: string[];
  is_featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  _id?: string;
  email: string;
  image?: string;
  bookmarks?: string[] | Property[];
  createdAt?: string;
  updatedAt?: string;
}

export interface Message {
  _id?: string;
  sender: string | User;
  recipient: string | User;
  name: string;
  email: string;
  phone?: string;
  property: string | Property;
  message: string;
  read: boolean;
  createdAt: string;
  updatedAt: string;
}
