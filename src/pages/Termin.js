import React from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import {Helmet} from "react-helmet";

const Termin = () => {
  return (
    <>
    <Helmet>
    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
    </Helmet>

    <div className="h-screen flex flex-col body">
      <section className="header-container">
      
      <Header/>
          
      {/* <!-- START --> */}

<div className="banner-section-tax container mx-auto mt-10 mb-32">
    <div className="banner-col-tax col-1 xl:ml-[60px] 2xl:ml-[190px]">
        <div className="banner-col-1-content-tax">
            <h1 className="banner-title-tax">Jetzt Demo-Termin verabreden</h1>
            <p className="banner-description-tax">Haben Sie Probleme die richtigen Unterlagen stets vollständig vor
                sich
                zu haben? Führt ein Mitarbeiter Ausfall zu einem regelmäßigen Stillstand? Bleiben die
                gewünschten Vorteile der Digitalisierung bisher aus?</p>
            <br/>
            <b>Lassen Sie uns darüber sprechen.</b>
        </div>
    </div>
    <div className="banner-col col-2-tax  xl:mr-[60px] 2xl:mr-[190px] inline-block self-end w-full h-[300px]">
        {/* <!-- <img src="./img/tax-page-image.svg" alt="logo" className="tax-image"> --> */}
        {/* <!-- <embed src="https://www.youtube.com/embed/Y3Wv2AoGiv0" wmode="transparent" type="video/mp4" width="100%"
            height="300px" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen
            title="Keyboard Cat"> --> */}
        {/* <!-- Calendly Inline-Widget Beginn --> */}
        <div className="calendly-inline-widget min-w-[320px] w-[580px] h-[630px]"
            data-url="https://calendly.com/aktenplatz/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
             
             ></div>
        
        {/* <!-- Calendly Inline-Widget Ende --> */}
    </div>
</div>




{/* <!-- BLOG START --> */}

<div className="mx-auto sm:container  lg:max-w-[880px] px-[20px] mb-20">

    <div className='w-full h-[300px]'></div>



</div>

{/* <!-- END --> */}



      <Footer/>
      </section>

      </div>
    </>
  )
}

export default Termin