import { Canvas } from "@react-three/fiber"
import "./App.css"
import { Environment, OrbitControls } from "@react-three/drei"
import { useState } from "react"
import ModelSelectorContainer from "./components/ModelSelectorContainer"

import CarModels from "./components/CarModels"
import Welcome from "./components/Welcome"

function App() {
  const [welcomePage, setWelcomePage] = useState(true)
  const [carModel, setCarModel] = useState("murcielago")

  return (
    <>
      <Canvas style={{ height: "100vh", width: "100%" }}>
        <Environment preset="warehouse" />
        <OrbitControls
          minPolarAngle={Math.PI / 8}
          maxPolarAngle={Math.PI - Math.PI / 1.8}
          autoRotate
        />

        {welcomePage ? (
          <Welcome setWelcomePage={setWelcomePage} />
        ) : (
          <>
            <ModelSelectorContainer setCarModel={setCarModel} carModel={carModel} />
            <CarModels carModel={carModel} />
          </>
        )}
      </Canvas>
    </>
  )
}

export default App
