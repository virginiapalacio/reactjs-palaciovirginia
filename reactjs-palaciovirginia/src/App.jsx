import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import CartWidget from "./components/CartWidget"

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje={"ENVIOS GRATIS / A PARTIR DE $30.000"} />
    </>
  )
}

export default App