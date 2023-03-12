import React from 'react'
import banner from '../../assets/images/banner-about.png'
import Banner from '../../components/Banner'
import aboutData from '../../aboutData.json'
import Collapse from '../../components/Collapse'

export default function About() {
  return (
    <>
      <Banner image={banner} />
      <main className="about">
        {aboutData.map((collapse) => (
          <Collapse
            key={collapse.id}
            title={collapse.title}
            description={collapse.description}
          />
        ))}
      </main>
    </>
  )
}
