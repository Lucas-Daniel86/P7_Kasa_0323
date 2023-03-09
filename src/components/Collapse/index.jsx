import { useState } from 'react'
import vectorBas from '../assets/vector-bas.svg'

export default function Collapse({ title, description }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="collapse" id={`collapse-${title}`}>
      <div className="collapse-div">
        <div className="collapse-title">{title}</div>
        <span
          className={`collapse-vectorBas ${open}`}
          onClick={() => setOpen(!open)}
        >
          <img src={vectorBas} alt="Icône flèche" />
        </span>
      </div>
      {open && <div className="collapse-description">{description}</div>}
    </div>
  )
}
