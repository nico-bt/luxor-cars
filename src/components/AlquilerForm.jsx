import Card from "./Card"
import "./alquilerForm.css"
import closeBtn from "../assets/close.svg"
import { useState } from "react"

function AlquilerForm({ carSelected, setShowForm }) {
  const [emptyInputs, setEmptyInputs] = useState(false)
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nombre || !email || !tel) {
      setEmptyInputs(true)
      return
    }
    setShowForm(false)
  }

  return (
    <div className="alquilar-form-container">
      <form className="alquilar-form">
        <div className="close-btn">
          <img src={closeBtn} alt="close button" onClick={() => setShowForm(false)} />
        </div>
        <div className="form-group" style={{ color: "white", justifySelf: "center" }}>
          <Card title={carSelected.title} img={carSelected.img} />
        </div>

        {emptyInputs && <div className="error">Por favor ingrese todos los datos</div>}

        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            autoFocus
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="tel">Teléfono:</label>
          <input
            type="tel"
            id="tel"
            name="email"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </div>

        <div>Uno de nuestros operadores se contactará contigo</div>

        <input type="submit" value="Alquilar" onClick={handleSubmit} />
      </form>
    </div>
  )
}

export default AlquilerForm
