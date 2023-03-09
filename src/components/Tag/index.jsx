import React from 'react'

export default function Tag({ tags }) {
  return (
    <div className="tag">
      {tags?.map((tag, index) => (
        <span className="tag" key={index}>
          {tag}
        </span>
      ))}
    </div>
  )
}
