import { useState } from 'react'
import vectorRight from '../../assets/images/vector-right.svg'
import vectorLeft from '../../assets/images/vector-left.svg'

export default function Carrousel({ pictures }) {
  const [slide, setSlide] = useState(0)

  const previousSlide = () => {
    setSlide(slide === 0 ? pictures.length - 1 : slide - 1)
  }

  const nextSlide = () => {
    setSlide(slide === pictures.length - 1 ? 0 : slide + 1)
  }

  return (
    <div className="carrousel">
      {pictures?.length > 1 && (
        <img
          className="vector-left vector"
          src={vectorLeft}
          alt=""
          onclick={previousSlide}
        />
      )}
      {pictures?.map((picture, index) => {
        return (
          <img
            key={index}
            className={
              index === slide ? 'carrousel_img actif' : 'carrousel_img'
            }
            src={picture}
            alt=""
          />
        )
      })}
      {pictures?.length > 1 && (
        <img
          className="vector-right vector"
          src={vectorRight}
          alt=""
          onclick={nextSlide}
        />
      )}
    </div>
  )
}
