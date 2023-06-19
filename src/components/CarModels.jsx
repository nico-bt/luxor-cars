import { Murcielago } from "../models/murcielago/Scene"
import { FerrariRoma } from "../models/ferrari_roma/Scene"
import { FerrariEnzo } from "../models/ferrari_enzo_vr_ready/Scene"
import { BMW } from "../models/bmw_seria_8_vr_ready/Scene"
import { Bugatti } from "../models/bugatti_divo_vr_ready/Scene"
import { Suspense } from "react"

function CarModels({ carModel }) {
  return (
    <>
      {carModel === "murcielago" && (
        <Suspense fallback={null}>
          <Murcielago scale={0.026} position={[0, -0.4, 0]} rotation={[0, 0, 0]} />
        </Suspense>
      )}
      {carModel === "ferrari-roma" && (
        <Suspense fallback={null}>
          <FerrariRoma scale={1.2} position={[0, -0.6, 0]} rotation={[0, 0, 0]} />
        </Suspense>
      )}
      {carModel === "ferrari-enzo" && (
        <Suspense fallback={null}>
          <FerrariEnzo scale={1.2} position={[0, -0.6, 0]} rotation={[0, 0, 0]} />
        </Suspense>
      )}
      {carModel === "bmw" && (
        <Suspense fallback={null}>
          <BMW scale={1.2} position={[0, -0.6, 0]} rotation={[0, 0, 0]} />
        </Suspense>
      )}

      {carModel === "bugatti" && (
        <Suspense fallback={null}>
          <Bugatti scale={1.2} position={[0, -0.6, 0]} rotation={[0, 0, 0]} />
        </Suspense>
      )}
    </>
  )
}

export default CarModels
