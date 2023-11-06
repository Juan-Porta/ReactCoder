import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around p-4">
        <img src="/img/logo.png" alt="" style={{width: "160px", height: "100px"}}/>
        <div>
        <button className="btn btn-success mx-2">Hogar</button>
        <button className="btn btn-success mx-2">Prendas</button>
        <button className="btn btn-success mx-2">Contactos</button>
      </div>
      <CartWidget/>
    </nav>
  )
}