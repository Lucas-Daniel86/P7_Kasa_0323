import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/gallery.css'

export default function Gallery({ data }) {
  const { id, title, cover } = data
  return (
    <article>
      <Link to={`/apartment/${id}`} className="gallery">
        <img src={cover} alt={title} className="gallery-img" />
        <div className="gallery-div"></div>
        <h2>{title}</h2>
      </Link>
    </article>
  )
}
