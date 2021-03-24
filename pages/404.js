import Layout from '../components/Layout'
import Link from 'next/link'

const Custom404 = () => (

  <Layout>
     <div className="text-center">
           <h1>404</h1>
           <p> Esta pagina esta caida .Por favor retorna a  
                <Link  href="/">
                       <a> Home </a>
                </Link>           
           </p>
       </div>
  </Layout>

)

export default Custom404;