import "./card.css"
export default function Card({ title, img }) {
  return (
    <div className="card-container">
      <img src={img} />
      <h2 className="card-title">{title}</h2>
    </div>
  )
}
