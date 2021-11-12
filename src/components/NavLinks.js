import React from "react"
import NavLink from "./NavLink"

const NavLinks = ({ onClose }) => {
  return (
    <>
      <NavLink url="/" text="Inicio" onClose={onClose} />
      <NavLink url="/conocenos" text="Conócenos" onClose={onClose} />
      <NavLink url="/mirador" text="Mirador Búho" onClose={onClose} />
      <NavLink url="/reservas" text="Reservas" onClose={onClose} />
    </>
  )
}

export default NavLinks
