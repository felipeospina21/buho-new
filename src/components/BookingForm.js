import React from "react"
import firebase from "gatsby-plugin-firebase"
import { Formik, Field, Form } from "formik"
import { FiPhone } from "react-icons/fi"
import { BsPerson } from "react-icons/bs"

import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  FormErrorMessage,
  FormHelperText,
  useToast,
} from "@chakra-ui/react"

const BookingForm = ({ bookingDate, bookingTime, bookingKiosk, bookings }) => {
  const toast = useToast()

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNumber: "",
      }}
      onSubmit={async (values, actions) => {
        await new Promise(r => {
          const times = []
          const { firstName, lastName, phoneNumber } = values
          bookings.forEach(time => {
            times.push(
              `${time.bookingInfo.bookingTime}${time.bookingInfo.bookingKiosk}`
            )
          })

          if (!times.includes(`${bookingTime}${bookingKiosk}`)) {
            firebase
              .firestore()
              .collection("bookings")
              .doc()
              .set({
                bookingInfo: {
                  bookingDate,
                  bookingTime,
                  bookingKiosk,
                  firstName,
                  lastName,
                  phoneNumber,
                },
              })
              .then(function () {
                console.log("Document successfully written!")
                toast({
                  title: "Reserva Exitosa",
                  description: "Hemos reservado tu kiosko.",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                })
              })
              .catch(function (error) {
                console.error("Error writing document: ", error)
                toast({
                  title: "Error al grabar",
                  description: error,
                  status: "error",
                  duration: 3000,
                  isClosable: true,
                })
              })
            // actions.setSubmitting(false)
          } else {
            console.log("El horario escogido ya se encuentra reservado")
            toast({
              title: "Kiosko no disponible",
              description: "El kiosko seleccionado no se encuentra disponible",
              status: "error",
              duration: 3000,
              isClosable: true,
            })
          }
          actions.setSubmitting(false)
        })
      }}
    >
      {props => (
        <Form>
          <Field name="firstName">
            {({ field, form }) => (
              <FormControl isRequired>
                <FormLabel htmlFor="first-name">Nombre</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={BsPerson} color="gray.300" />}
                  />
                  <Input
                    {...field}
                    id="first-name"
                    pattern="[a-zA-Z ]*$"
                    placeholder="Ingrese su nombre"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </InputGroup>
              </FormControl>
            )}
          </Field>

          <Field name="lastName">
            {({ field, form }) => (
              <FormControl isRequired>
                <FormLabel htmlFor="last-name">Apellidos</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={BsPerson} color="gray.300" />}
                  />
                  <Input
                    {...field}
                    id="last-name"
                    pattern="[a-zA-Z ]*$"
                    placeholder="Ingrese sus apellidos"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </InputGroup>
              </FormControl>
            )}
          </Field>

          <Field name="phoneNumber" type="tel">
            {({ field, form }) => (
              <FormControl isRequired>
                <FormLabel htmlFor="phone">Celular</FormLabel>
                <FormHelperText>
                  * Sin indicativo país, ni caracteres especiales
                </FormHelperText>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={FiPhone} color="gray.300" />}
                  />
                  <Input
                    {...field}
                    id="phone"
                    type="tel"
                    pattern="[0-9]{10}"
                    placeholder="Ingrese su celular"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </InputGroup>
              </FormControl>
            )}
          </Field>

          <Center my={10}>
            <Button
              type="submit"
              loadingText="Enviando"
              isLoading={props.isSubmitting}
            >
              Confirmar Reserva
            </Button>
          </Center>
        </Form>
      )}
    </Formik>
  )
}

export default BookingForm
