import React, { useState } from "react"
import { Box, HStack, VStack } from "@chakra-ui/react"
import AvatarItem from "./AvatarItem"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const AvatarGrid = () => {
  const breakpoints = useBreakpoint()
  const [avatarInfo] = useState([
    { name: "Segun Adebayo", src: "https://bit.ly/sage-adebayo" },
    { name: "Kent Dodds", src: "https://bit.ly/kent-c-dodds" },
  ])

  return (
    <Box maxW="1100px" m="1rem auto">
      {avatarInfo.map(avatar => {
        const { name, src } = avatar
        return breakpoints.md ? (
          <VStack m="2rem 0">
            <AvatarItem key={name} name={name} src={src} />
          </VStack>
        ) : (
          <HStack m="4rem">
            <AvatarItem key={name} name={name} src={src} />
          </HStack>
        )
      })}
    </Box>
  )
}

export default AvatarGrid
