// import React, { createContext, useState, useContext, ReactNode } from "react";
// import { ApiResponse, Booking } from "../bookings/domain/booking";
// import { createBooking } from "../bookings/actions/create-booking";
// import { getBooking } from "../bookings/actions/get-booking";
// import { ViewType } from "../components/navbar";
// // import { updateBooking } from "../bookings/actions/update-booking";
// // import { deleteBooking } from "../bookings/actions/delete-booking";

// interface BookingContextType {
//   bookings: Booking[];
//   isLoading: boolean;
//   error: string | null;
//   fetchBookings: (
//     diaryId: number,
//     startDate: string,
//     endDate: string
//   ) => Promise<void>;
//   addBooking: (newBooking: Booking) => Promise<void>;
//   editBooking: (updatedBooking: Booking) => Promise<void>;
//   removeBooking: (bookingId: number) => Promise<void>;
// }

// const BookingContext = createContext<BookingContextType | undefined>(undefined);

// export const BookingProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [bookings, setBookings] = useState<Booking[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//   const [view, setView] = useState<ViewType>(ViewType.Month);

//   const fetchBookings = async (
//     diaryId: number,
//     startDate: string,
//     endDate: string
//   ) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response: ApiResponse = await getBooking(
//         diaryId,
//         startDate,
//         endDate,
//         view
//       );
//       setBookings(response.data);
//     } catch (error: any) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const addBooking = async (newBooking: Booking) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       await createBooking(newBooking);
//       setBookings([...bookings, newBooking]);
//     } catch (error: any) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const editBooking = async (updatedBooking: Booking) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       await updateBooking(updatedBooking);
//       setBookings(
//         bookings.map((booking) =>
//           booking.id === updatedBooking.id ? updatedBooking : booking
//         )
//       );
//     } catch (error: any) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const removeBooking = async (bookingId: number) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       await deleteBooking(bookingId);
//       setBookings(bookings.filter((booking) => booking.id !== bookingId));
//     } catch (error: any) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <BookingContext.Provider
//       value={{
//         bookings,
//         isLoading,
//         error,
//         fetchBookings,
//         addBooking,
//         editBooking,
//         removeBooking,
//         setView,
//         view,
//       }}
//     >
//       {children}
//     </BookingContext.Provider>
//   );
// };

export const useBooking = () => {
  //   const context = useContext(BookingContext);
  //   if (!context) {
  //     throw new Error("useBooking must be used within a BookingProvider");
  //   }
  return "";
};
