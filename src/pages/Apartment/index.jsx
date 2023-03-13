import { useParams } from 'react-router-dom'
import Carrousel from '../../components/Carrousel'
import Title from '../../components/Title'
import Host from '../../components/Host'
import Rate from '../../components/Rate'
import Collapse from '../../components/Collapse'
import Error from '../../pages/Error'
import accomodations from '../../data.json'
import '../../styles/apartment.css'
import '../../styles/tag.css'

export default function Apartment() {
  const { id } = useParams()
  const getApartment = accomodations.find((apart) => {
    return apart.id === id
  })

  if (getApartment === undefined) {
    return <Error />
  }

  return (
    <>
      <Carrousel pictures={getApartment.pictures}></Carrousel>
      <div className="apart-div">
        <div className="apart-title-tag">
          <Title title={getApartment.title} location={getApartment.location} />
          <div className="tags">
            {getApartment.tags.map((tag) => (
              <div
                className="tagTxt"
                key={`${getApartment.tags}-${Math.random()}`}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="apart-rate-host">
          <Host host={getApartment.host} />
          <Rate rating={getApartment.rating} />
        </div>
      </div>
      <div className="apart-collapse">
        <ul>
          <li>
            <Collapse
              title="Description"
              description={getApartment.description}
            />
          </li>
          <li>
            <Collapse
              title="Équipements"
              description={getApartment.equipments?.map((item) => (
                <div key={Math.random()}>{item}</div>
              ))}
            />
          </li>
        </ul>
      </div>
    </>
  )
}
