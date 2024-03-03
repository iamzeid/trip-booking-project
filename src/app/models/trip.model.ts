export interface Trip {
  id: number;
  destination: string;
  startDate: string;
  endDate: string;
  price: number;
  remainingSeats: number;
  likedBy: number[];
  bookedBy: number[];
  priceFormatted?: string; // Optional property to store the formatted price
}