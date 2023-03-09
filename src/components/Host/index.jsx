import React from 'react'

export default function Host({ host }) {
  return (
    <div className="host">
      <p className="host-name">{host?.name}</p>
      <img className="host-img" alt="" src={host?.picture} />
    </div>
  )
}
