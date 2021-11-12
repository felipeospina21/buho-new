import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import firebase from "gatsby-plugin-firebase"
import SEO from "../components/seo"
import KiosksContainer from "../components/KiosksContainer"
import Schedules from "../components/Schedules"
import DatePickerContainer from "../components/DatePickerContainer"
import BookingInfo from "../components/BookingInfo"
import { Heading, Center } from "@chakra-ui/react"

const ReservasPage = ({ data }) => {
  const year = new Date().getFullYear()
  const month = new Date().getMonth()
  const day = new Date().getDate()
  const [bookingDate, setBookingDate] = useState(new Date(year, month, day))
  const [bookingTime, setBookingTime] = useState()
  const [bookings, setBookings] = useState([])
  const [bookingKiosk, setBookingKiosk] = useState()

  useEffect( () => {
     firebase
      .firestore()
      .collection("bookings")
      .onSnapshot(querySnapshot => {
        const docs = []
        querySnapshot.forEach(doc => {
          docs.push({ ...doc.data(), id: doc.id })
        })

        const filteredDocs = docs.filter(
          doc =>
            doc.bookingInfo.bookingDate.seconds * 1000 === bookingDate.getTime()
        )
        setBookings(filteredDocs)
      })
  }, [bookingTime, bookingDate])

  return (
    <>
      <SEO title="Home" />
      <Center my="3rem">
        <Heading as="h1" size="2xl">
          Reservas Búho
        </Heading>
      </Center>

      <Center
        flexDir="column"
        bg="brand.green"
        maxW="1300px"
        mx="auto"
        p={8}
        color="black"
      >
        <DatePickerContainer
          bookingDate={bookingDate}
          setBookingDate={setBookingDate}
          setBookingTime={setBookingTime}
        />

        <Schedules setBookingTime={setBookingTime} />
      </Center>

      <KiosksContainer
        setBookingKiosk={setBookingKiosk}
        timeSelected={bookingTime}
        bookings={bookings}
        setBookings={setBookings}
        kioskosInfo={data}
      />

      <BookingInfo
        bookingDate={bookingDate}
        bookingTime={bookingTime}
        bookingKiosk={bookingKiosk}
        bookings={bookings}
      />
    </>
  )
}

export const query = graphql`
  query kioskosQuery {
    allKioskos {
      edges {
        node {
          capacity
          id
        }
      }
    }
  }
`

export default ReservasPage
