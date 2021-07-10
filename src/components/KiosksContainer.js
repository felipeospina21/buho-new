import React, { useState, useEffect } from "react"
import Kiosk from "./Kiosk"
import { Grid, GridItem, Heading } from "@chakra-ui/react"

const KiosksContainer = ({
  setBookingKiosk,
  timeSelected,
  bookings,
  kioskosInfo,
}) => {
  const [kiosks, setKiosks] = useState([])
  const [bookedKiosks, setBookedKiosks] = useState([])

  useEffect(() => {
    getKioskInfo()
    getFilteredKiosks()
  }, [timeSelected])

  const getKioskInfo = () => setKiosks(kioskosInfo.allKioskos.edges)

  const getFilteredKiosks = () => {
    const newBookedKiosks = []
    const filteredBookingsByTime = bookings.filter(
      booking => booking.bookingInfo.bookingTime === timeSelected
    )
    filteredBookingsByTime.forEach(filteredBooking => {
      newBookedKiosks.push(filteredBooking.bookingInfo.bookingKiosk)
    })

    setBookedKiosks(newBookedKiosks)
  }

  const renderKiosks = kiosks.filter(
    kiosk => !bookedKiosks.includes(kiosk.node.id)
  )

  return (
    <Grid
      templateColumns={[
        "1fr",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
      ]}
    >
      {renderKiosks.length < 1 ? (
        <GridItem colSpan={[1, 2, 3, 4]}>
          <Heading as="h1" textAlign="center" my="2rem">
            No hay kioskos disponibles en este horario
          </Heading>
        </GridItem>
      ) : (
        renderKiosks.map(kiosk => {
          return (
            <Kiosk
              key={kiosk.node.id}
              kiosk={kiosk.node}
              setBookingKiosk={setBookingKiosk}
            />
          )
        })
      )}
    </Grid>
  )
}

export default KiosksContainer
