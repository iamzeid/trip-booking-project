export interface Booking {
  id: number;
  userId: number;
  tripId: number;
  destination: string;
  startDate: string;
  endDate: string;
  price: number;
  bookedBy: number[];
}
