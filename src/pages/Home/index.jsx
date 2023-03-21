import Banner from '../../components/Banner'
import banner from '../../assets/images/banner-home.png'
import Gallery from '../../components/Gallery'
import accomodations from '../../data.json'

export default function Home() {
  return (
    <>
      <Banner image={banner} title="Chez vous, partout et ailleurs" />
      <section className="gallery-container">
        {accomodations.map((apart) => (
          <Gallery key={apart.id} data={apart} />
        ))}
      </section>
    </>
  )
}
