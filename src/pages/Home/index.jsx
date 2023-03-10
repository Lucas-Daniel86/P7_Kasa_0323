import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'
import Card from '../../components/Card'

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('../apartments.json')
      .then((res) => res.json())
      .then((apartData) => setData(apartData))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <Banner />
      <div className="card-container">
        {data.map((apart, id) => (
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
