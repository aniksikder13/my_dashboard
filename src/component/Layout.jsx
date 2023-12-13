import React,{Fragment} from 'react'
import Header from './nav/Header'
import Footer from './nav/Footer'

export default function Layout({children}) {
  return (
    <Fragment>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </Fragment>
  )
}