import { Link } from 'react-router-dom'
import '../../styles/home.css'
import Banner from '../../components/Banner'
import banner from '../../assets/images/banner-home.png'
import Card from '../../components/Card'
import accomodations from '../../data.json'

export default function Home() {
  return (
    <>
      <Banner image={banner} title="Chez vous, partout et ailleurs" />
      <div className="card-container">
        {accomodations.map((apart, id) => (
          <div className="card-apart" key={id}>
            <Link className="link-card-apart" to={`/apartment/${apart.id}`}>
              <Card cover={apart.cover} title={apart.title} />
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
