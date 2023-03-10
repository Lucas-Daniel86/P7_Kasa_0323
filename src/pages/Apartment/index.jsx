import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Carrousel from '../../components/Carrousel'
import Title from '../../components/Title'
import Tag from '../../components/Tag'
import Host from '../../components/Host'
import Rate from '../../components/Rate'
import Collapse from '../../components/Collapse'

export default function Apartment() {
  const { id } = useParams()
  const [apart, setApart] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    fetch('../apartments.json')
      .then((res) => res.json())
      .then((article) => {
        const data = article.find((item) => item.id === id)
        setApart(data)
        if (!data) navigate('/error')
      })
      .catch((error) => error)
  })

  const {
    title,
    location,
    pictures,
    rating,
    host,
    tags,
    description,
    equipments,
  } = apart

  return (
    <>
      <Carrousel pictures={pictures}></Carrousel>
      <div className="apart-div"></div>
      <div className="apart-title-tag">
        <Title title={title} location={location} />
        <Tag tag={tags} />
      </div>
      <div className="apart-rate-host">
        <Host host={host} />
        <Rate rating={rating} />
      </div>
      <div className="apart-collapse">
        <ul>
          <li>
            <Collapse title="Description" description={description} />
          </li>
          <li>
            <Collapse
              title="Équipements"
              description={equipments?.map((column, index) => (
                <div key={index}>{column}</div>
              ))}
            />
          </li>
        </ul>
      </div>
    </>
  )
}
