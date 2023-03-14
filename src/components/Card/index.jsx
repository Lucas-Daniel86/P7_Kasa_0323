import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/card.css'

export default function Card({ data }) {
  const { id, title, cover } = data
  return (
    <article>
      <Link to={`/apartment/${id}`} className="link-card-apart">
        <img src={cover} alt={title} className="card-img" />
        <div className="card-div"></div>
        <h2>{title}</h2>
      </Link>
    </article>
  )
}
