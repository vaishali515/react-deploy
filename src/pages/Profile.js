import React from 'react'
import Navbar from '../components/Navbar/navbar.js'
import Banner from '../components/Banner/banner.js'
import Info from '../IInfo.json';
const Profile = () => {
  return (
    <>
    <Navbar />
    <Banner {...Info}/>
    </>
  )
}

export default Profile