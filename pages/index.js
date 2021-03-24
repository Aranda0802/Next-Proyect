import Layout from '../components/Layout'
import Link from 'next/link'
import { experiences, skills } from '../profile'

console.log(skills)

const Index = () => (
  <Layout>
    {/**Heaader card */}
    <header className='row'>
      <div className='col-md-12'>
        <div className='card card-body bg-dark text-light'>
          <div className='row'>
            <div className='col-md-4'>
              <img src='CV.jpg' alt='' className='img-fluid' />
            </div>
            <div className='col-md-8'>
              <h1>Facundo Aranda</h1>
              <h3>Full Stack Developer</h3>
              <p>
                Asesor Comercial, fuertemente dirigido a Ventas Presencial y
                Telefónica.
              </p>
              <Link href='/404'>
                <a>Sobre Mi</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/**Second section */}
    <div className='row'>
      <div className='col-md-4'>
        <div className='card bg-light'>
          <div className='card-body'>
            <h1>Skills</h1>
            {skills.map(({ skill, percentage }, i) => (
              <div className='py-3' key={i}>
                <h5>{skill}</h5>
                <div className='progress'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='col-md-8'>
        <div className='card bg-light'>
          <div className='card-body'>
            <h1>Experiencia</h1>

            <ul>
              {
                     experiences.map(({title,description,from,to},index)=> (
                          <li key={index}>
                            <h3>{title}</h3>
                            <h5>{from}-{to}</h5>
                            <p>{description}</p>
                          </li>
                     ))
              }                         
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Index
