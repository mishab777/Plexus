import React from 'react'
import { Banner } from './Banner'
import { Brands } from './Brands'
import { Mobiles } from './Mobiles'
import { Computers } from './Computer'
import { Laptops } from './Laptops'
import { Fridges } from './Fridge'
import { Enter } from './Entertainment'
import { Footer } from '../Footer/Footer'

export const Home = () => {
  return (
    <>
    <div>
        <Banner/>
        <Brands/>
        <Mobiles/>
        <Laptops/>
        <Computers/>
        <Fridges/>
        <Enter/>
        <Footer/>

    </div>
    </>
  )
}
