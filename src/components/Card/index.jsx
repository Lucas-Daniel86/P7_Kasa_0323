export default function Card({ cover, title }) {
  return (
    <article className="card-apart">
      <img src={cover} alt="location" />
      <div className="card-apart-layer">
        <p className="card-apart-title">{title}</p>
      </div>
    </article>
  )
}
