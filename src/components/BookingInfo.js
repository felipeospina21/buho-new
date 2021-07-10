import React from "react"
import { Container } from "@chakra-ui/react"
import BookingSummary from "./BookingSummary"
import BookingForm from "./BookingForm"

const BookingInfo = ({ bookingDate, bookingTime, bookingKiosk, bookings }) => {
  const bookingYear = bookingDate.getFullYear()
  const bookingMonth = bookingDate.getMonth() + 1
  const bookingDay = bookingDate.getDate()
  const stringDate = `${bookingDay}/${bookingMonth}/${bookingYear}`

  return (
    <Container>
      <BookingSummary
        bookingDate={stringDate}
        bookingTime={bookingTime}
        bookingKiosk={bookingKiosk}
      />

      <BookingForm
        bookingDate={bookingDate}
        bookingTime={bookingTime}
        bookingKiosk={bookingKiosk}
        bookings={bookings}
      />
    </Container>
  )
}

export default BookingInfo
