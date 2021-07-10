import React from "react"
import { Box, Wrap, WrapItem, Heading } from "@chakra-ui/react"

const BookingSummary = ({ bookingDate, bookingTime, bookingKiosk }) => {
  return (
    <Box my="4rem" p="2rem" border="1px solid black">
      <Heading as="h3" size="lg" mb="1rem">
        Resumen De Reserva
      </Heading>
      <Wrap>
        <WrapItem>
          <Heading as="h4" size="md">
            Fecha:
          </Heading>
        </WrapItem>
        <WrapItem>
          <p>{bookingDate}</p>
        </WrapItem>
      </Wrap>

      <Wrap>
        <WrapItem>
          <Heading as="h4" size="md">
            Hora:
          </Heading>
        </WrapItem>
        <WrapItem>
          <p>{bookingTime}</p>
        </WrapItem>
      </Wrap>

      <Wrap>
        <WrapItem>
          <Heading as="h4" size="md">
            Kiosko #:
          </Heading>
        </WrapItem>
        <WrapItem>
          <p> {bookingKiosk}</p>
        </WrapItem>
      </Wrap>
    </Box>
  )
}

export default BookingSummary
