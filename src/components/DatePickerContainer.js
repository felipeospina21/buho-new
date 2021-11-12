import React from "react"
import DatePicker, { registerLocale } from "react-datepicker"
import es from "date-fns/locale/es"
import addMonths from "date-fns/addMonths"
import getDay from "date-fns/getDay"

// import colombianHolidays from "colombian-holidays"
import { Heading, Input } from "@chakra-ui/react"
import "react-datepicker/dist/react-datepicker.css"

registerLocale("es", es)

const DatePickerContainer = ({
  bookingDate,
  setBookingDate,
  setBookingTime,
}) => {
  const setSelectedDate = date => {
    date.setHours(0, 0, 0)
    setBookingDate(date)
    setBookingTime()
  }

  const isWeekend = date => {
    const day = getDay(date)
    return day !== 2 && day !== 3 && day !== 4
  }

  // const colombianHolidaysObj = colombianHolidays()
  // const colombianHolidaysArr = colombianHolidaysObj.map(dateObj => {
  //   const dateArr = dateObj.celebrationDate.split("-")
  //   return {
  //     year: dateArr[0],
  //     month: dateArr[1],
  //     day: dateArr[2],
  //   }
  // })
  // // console.log(colombianHolidaysArr)

  return (
    <>
      <Heading as="h4" size="md" mt="0.5rem" mb="1rem">
        Seleccione la fecha
      </Heading>

      <Input
        as={DatePicker}
        bgColor="gray.50"
        textAlign="center"
        fontWeight="bold"
        // --
        dateFormat="dd/MM/yyyy"
        selected={bookingDate}
        onChange={date => setSelectedDate(date)}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 6)}
        locale="es"
        filterDate={isWeekend}
        // includeDates={[new Date(), colombianHolidaysArr[2]]}
        showDisabledMonthNavigation
      />
    </>
  )
}

export default DatePickerContainer
