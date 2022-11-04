import React from 'react'
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";
import Header from "../components/Header";

const PageNotFound = () => {
  return (
    <>
      <Header/>
    
      <div className="min-h-[calc(100vh-150px)] gap-12 container mx-auto flex items-center mt-10 mb-16 justify-center flex-col lg:space-x-10">
         <img src="/img/404.svg" className='w-[500px]' alt="404" />
         <Link to="/"> <a className='btn-primary'>Go Home</a></Link>
      </div>

      <Footer/>
    </>
  )
}

export default PageNotFound