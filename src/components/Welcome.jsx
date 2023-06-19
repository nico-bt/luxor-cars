import { Html } from "@react-three/drei"
import "./welcome.css"

function Welcome({ setWelcomePage }) {
  function clickHandler() {
    setWelcomePage(false)
  }
  return (
    <Html fullscreen>
      <div className="welcome-container">
        <h1>Luxor Cars</h1>
        <h2>Alquiler de autos deportivos</h2>
        <button className="welcome-btn" onClick={clickHandler}>
          Elegir modelo
        </button>
      </div>
    </Html>
  )
}

export default Welcome
