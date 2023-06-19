import { Html } from "@react-three/drei"
import "./modelSelector.css"
import Card from "./Card"

import ferrariRomaImg from "../assets/ferrari_roma.png"
import ferrariEnzoImg from "../assets/ferrari_enzo.png"
import murcielagoImg from "../assets/murcielago.png"
import bmwImg from "../assets/bmw.png"
import bugattiImg from "../assets/bugatti.png"
import zoom from "../assets/zoom.svg"
import orbit from "../assets/orbit.svg"
import { useState } from "react"
import AlquilerForm from "./AlquilerForm"

const models = [
  { id: 0, name: "murcielago", img: murcielagoImg, title: "Lamborghini Murcielago" },
  { id: 1, name: "ferrari-roma", img: ferrariRomaImg, title: "Ferrari Roma" },
  { id: 2, name: "ferrari-enzo", img: ferrariEnzoImg, title: "Ferrari Enzo" },
  { id: 3, name: "bmw", img: bmwImg, title: "BMW serie 8" },
  { id: 4, name: "bugatti", img: bugattiImg, title: "Bugatti Divo" },
]

// Dentro del canvas los componentes de react no reconocen onClick event
// Sí los elementos html dentro del Htlm component que viene de drei
// Por eso envuelvo las cards con divs, para tomar el onClick
function ModelSelectorContainer({ carModel, setCarModel }) {
  const [showForm, setShowForm] = useState(false)

  return (
    <Html fullscreen>
      <div className="modelSelector-container">
        {models.map((car) => {
          return (
            <div
              key={car.id}
              onClick={() => setCarModel(car.name)}
              className={carModel === car.name ? "selected" : ""}
            >
              <Card title={car.title} img={car.img} />
            </div>
          )
        })}
      </div>

      <div className="footer">
        <div>
          <img src={orbit} alt="orbit" width={24} />
          <h5>Orbit</h5>
          <p>Click + arrastrar</p>
        </div>
        <div>
          <img src={zoom} alt="scroll" width={24} />
          <h5>Zoom</h5>
          <p>Scroll</p>
        </div>
        <button className="alquilar-btn" onClick={() => setShowForm(true)}>
          Alquilar
        </button>
      </div>

      {showForm && (
        <AlquilerForm
          carSelected={models.find((model) => model.name === carModel)}
          setShowForm={setShowForm}
        />
      )}
    </Html>
  )
}

export default ModelSelectorContainer
