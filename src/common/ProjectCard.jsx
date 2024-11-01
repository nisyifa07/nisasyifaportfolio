<<<<<<< HEAD
import React from 'react'

export default function ProjectCard({src, link, h3, p}) {
  return (
    <a href={link} target='_blank'><img src={src} alt={`${h3} logo`} className="hover" />
        <h3>{h3}</h3>
        <p>{p}</p></a>
  )
}
=======
import React from 'react'

export default function ProjectCard({src, link, h3, p}) {
  return (
    <a href={link} target='_blank'><img src={src} alt={`${h3} logo`} className="hover" />
        <h3>{h3}</h3>
        <p>{p}</p></a>
  )
}
>>>>>>> 67ff116ac0dd547a970971dabd59ad2a8a45f33b
