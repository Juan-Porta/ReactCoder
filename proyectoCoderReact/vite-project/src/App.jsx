import { ContainerBox } from "./components/ContainerBox/ContainerBox"
import { NavBar } from "./components/NavBar/NavBar"

export const App = () => {
  return (
    <>
    <NavBar />
    <ContainerBox greeting={"Bienvenidos a nuestra tienda online"} />
    </>
  )
}
