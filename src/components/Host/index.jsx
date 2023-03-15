import React from 'react'
import '../../styles/host.css'

export default function Host({ host }) {
  return (
    <div className="host">
      <p className="host-name">{host?.name}</p>
      <img className="host-img" alt="" src={host?.picture} />
    </div>
  )
}
