import React from 'react'

const Title = ({ title, location }) => {
  return (
    <>
      <h1 className="title-apart">{title}</h1>
      <h3 className="location">{location}</h3>
    </>
  )
}
