import React from "react"
import { Avatar, Text } from "@chakra-ui/react"

const AvatarItem = ({ name, src }) => {
  return (
    <>
      <Avatar
        size="xl"
        name={name}
        src={src}
        m="1rem 2rem"
        bg="brand.green"
        loading="lazy"
      />
      <Text maxW="800px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        reiciendis molestiae aut aspernatur accusantium optio odio maiores
        voluptatem. Id rerum facilis corporis expedita, esse debitis officiis ad
        similique voluptatibus omnis? Aspernatur eligendi magnam eveniet
        voluptatibus nobis ipsum iste blanditiis ipsa veritatis? Facere laborum
        similique dolore consequuntur nobis dolor quidem nam fugiat voluptate
        quia, provident sequi saepe? Nulla quos maiores amet. Et esse fuga vel.
      </Text>
    </>
  )
}

export default AvatarItem
