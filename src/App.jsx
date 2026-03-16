

import { Suspense } from 'react'
import './App.css'
import Navbar from './component/NavBar/NavBar'
import PricingOptions from './component/PricingOptions/PricingOptions'

const pricingPromise = fetch('pricingData.json').then(res=>res.json())
console.log(pricingPromise)

function App() {

  return (
    <>
    <header>
       <Navbar></Navbar>
    </header>

    <main>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <PricingOptions pricingPromise = {pricingPromise}></PricingOptions>
      </Suspense>
    </main>
     

    

    </>
  )
}

export default App
