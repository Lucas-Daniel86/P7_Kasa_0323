import React from 'react'

export default function Tag({ tags }) {
  return (
    <div className="tags">
      {tags?.map((tag, index) => (
        <span className="tag" key={`${tags}-${Math.random()}`}>
          {tag}
        </span>
      ))}
    </div>
  )
}
