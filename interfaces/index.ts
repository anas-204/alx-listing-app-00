// Core interfaces for Airbnb clone
export interface Listing {
  id: string;
  title: string;
  description: string;
  imageSrc: string[];
  price: number;
  location: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export interface Reservation {
  id: string;
  userId: string;
  listingId: string;
  dates: string[];
  totalPrice: number;
}
