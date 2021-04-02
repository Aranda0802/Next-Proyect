import Navbar from './Navbar'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import NProgress from 'nprogress'
import classnames from 'classnames'


const Layout = ({children, footer = true, dark= false, title}) => {
 
  const router = useRouter();

            useEffect(() => {
                  const handleRouteChange = url => {
                    console.log(url);
                    NProgress.start();
                  }
                  router.events.on('routeChangeStart', handleRouteChange)   
                  
                  router.events.on('routeChangeComplete', () => NProgress.done()); 
                  
                  return () => {
                    router.events.off('routeChangeStart', handleRouteChange)
                  }                  
            }, [])            
            return (
                      <div className={classnames({'bg-dark': dark, 'bg-light': ! dark })}>
                        <Navbar/>
                        <main className="container py-4">
                              {title && (
                                <h1 className={classnames('text-center', {'text-light': dark})}>{title}
                                </h1>
                              )}
                               {children}
                        </main>                        
                        {
                           footer && (
                             <footer className="bg-dark text-light text-center">
                                    <div className="container p-4">
                                      <h1>&copy; Aranda Nahuel Porfolio</h1>
                                      <p>2000 - {new Date().getFullYear()}</p>
                                      <p>All rights Reserve</p>
                                    </div>
                              </footer>                            
                           )
                        }
                      </div>
                    )
            }

export default Layout;