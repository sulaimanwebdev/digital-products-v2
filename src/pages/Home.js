import Footer from "../components/Footer";
import Header from "../components/Header";
import Slider1 from "../components/Slider1";
import Slider2 from "../components/Slider2";
import {Helmet} from "react-helmet";

function Home() {
    return (
     <>
      <Helmet>
       <title>Digitale Akten ganz einfach organisieren und verwalten</title>
      </Helmet>

      <div className="h-screen flex flex-col body">
      <section className="header-container">
      <Header/>
         
          <div className="banner-section container mx-auto mt-10">
              <div className="banner-col col-1 transform lg:-translate-y-[80px]">
                  <div className="banner-col-1-content">
                      <h1 className="banner-title">Aktenplatz organisiert Ihre Akten</h1>
                      <p className="banner-description">Für kleine und mittlere Büros schaffen wir eine übersichtliche
                          Verfolgung für Ihrer Akten. Ihre etablierten Prozesse aus der analogen Welt werden in die
                          digitale Welt übernommen!</p>
                      <a href="https://app.Aktenplatz.de/register" target="_blank" rel="noreferrer" className="btn-primary">Kostenlos
                          loslegen</a>
                      <p></p>
                      <br/>
                      <p className="banner-description">Ohne Kreditkarte sofort starten.</p>
                      <div className="app-logos">
                          <a href='https://apps.apple.com/us/app/aktenplatz/id1620033655?itsct=apps_box_badge&amp;itscg=30200'
                              target=" _blank"><img alt='Download on the App Store' src='/img/apple_appstore.png'
                                style={{maxHeight: '50px', marginTop: '0px'}} /></a>
                          <a href='https://play.google.com/store/apps/details?id=com.aktenplatz.aktenplatz&gl=DE&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
                              target="_blank" rel="noreferrer"><img alt='Jetzt bei Google Play' src='/img/google-play-badge.png'
                              style={{maxHeight: '50px', marginTop: '0px'}} /></a>
                      </div>
  
                  </div>
              </div>
              <div className="banner-col col-2 relative max-h-[500px]">
                  <a href="https://www.youtube.com/watch?v=ce5Fe6UtQl0" target="_blank" rel="noreferrer">
                      <img src="/img/home.svg" alt="banner-logo"
                          className="banner-logo max-h-[512px] transform lg:translate-y-[0px]" />
                  </a>
  
                  {/* <!-- <div
                      className="w-[90%] sm:w-[400px] gap-5 single-widget  px-4 h-[138px] absolute -bottom-10 right-1/2 transform md:translate-x-0 translate-x-1/2 md:right-0 bg-white rounded-[24px] flex items-center justify-start">
                      <div className="flex items-center justify-center flex-col ">
                          <img src="/img//image1.svg" alt="profile"
                              className="transform -translate-y-10 w-[250px] sm:w-[300px]">
                          <div
                              className="text-[16px] text-center leading-tight font-bold text-orange transform -translate-y-7">
                              Julia Masche</div>
                      </div>
                      <p className="text-[15px] opacity-80">“Mit Aktenplatz managen wir unsere Bauprojekte und legen
                          Unterlagen und Kontakte zentral ab.“
                      </p>
                  </div>
  
                  --> */}
  
  
                  <div
                      className="w-[90%] sm:w-[400px] hide-widget gap-5 single-widget  px-4 h-[138px] absolute -bottom-10 right-1/2 transform md:translate-x-0 translate-x-1/2 md:right-0 bg-white rounded-[24px] flex items-center justify-start">
                      <div className="flex items-center justify-center flex-col ">
                          <img src="/img//ladewig_round.png" alt="profile"
                              className="transform -translate-y-10 w-[350px] sm:w-[360px]" />
                          <div
                              className="text-[16px] text-center leading-tight font-bold text-orange transform -translate-y-7">
                              Bettina Ladewig</div>
                      </div>
                      <p className="text-[15px] opacity-80">“Mit Aktenplatz verpassen wir keine wichtige Fristen unserer
                          Mandanten mehr. Wir behalten Überblick über
                          Wiedervorlagen und vereinbarte Termine“
  
                      </p>
                  </div>
  
  
  
  
  
                  <div
                      className="w-[90%] sm:w-[400px] hide-widget gap-5 single-widget  px-4 h-[138px] absolute -bottom-10 right-1/2 transform md:translate-x-0 translate-x-1/2 md:right-0 bg-white rounded-[24px] flex items-center justify-start">
                      <div className="flex items-center justify-center flex-col ">
                          <img src="/img//wenzel_round.png" alt="profile"
                              className="transform -translate-y-10 w-[270px] sm:w-[350px]"/>
                          <div
                              className="text-[16px] text-center leading-tight font-bold text-orange transform -translate-y-7">
                              Dr. Wenzel</div>
                      </div>
                      <p className="text-[15px] opacity-80">“Mit Aktenplatz wissen meine Backoffice-Mitarbeiter und ich, um
                          welche Akten (Patienten) wir uns dringend kümmern müssen.“
  
                      </p>
                  </div>
  
  
  
  
              </div>
          </div>
      </section>
      <main className="main container mx-auto pt-10 flex-1">
          <section className="sections section-logos">
             <Slider1/>
          </section>
  
          <section className="sections section-features">
              <div className="heading-container">
                  <h4 className="heading-title" id="Funktionen"></h4>
                  {/* <!-- <h3 className="heading-section-title">Aktenplatz in vier Schritten</h3> --> */}
              </div>
              <div className="features">
                  <div className="feature">
                      <div className="feature-content">
                          <h4 className="feature-title">Akten digital ablegen:<br/> Sparen Sie sich Zeit und Nerven</h4>
                          <div className="feature-image sm:flex md:flex lg:flex xl:hidden 2xl:hidden">
                              <img src="/img/animations/animation_FileMove.gif"
                                  style={{width: '450px', maxHeight: '400px', borderRadius: '30px'}} alt=""/>
                          </div>
                          <p className="feature-description">
                              Akten zu verwalten und sachgerecht zu organisieren ist ein lästiges Unterfangen, welches
                              allerdings an jedem bürogestützten Arbeitsplatz anfällt. Auf Aktenplatz erhalten Sie eine
                              visuelle Darstellung Ihres Arbeitsalltags. Hier können Sie alle Ihre Akten virtuell ablegen
                              und auf diese zurückgreifen, wann immer Sie möchten. Ihr virtueller Aktenplatz auf unserer
                              Website lässt sich vollständig an Ihren individuellen Arbeitsprozess anpassen. Sie können
                              die Ablagen benennen und die digitalen Akten nach jedem Arbeitsschritt verschieben.
                          </p>
                          {/* <!-- <!-- <a href="#" className="btn-primary">Lern mehr</a> --> */}
                      </div>
                      <div className="feature-image hidden xl:flex 2xl:flex">
                          <img src=" /img/animations/animation_FileMove.gif"
                              style={{width: '450px', maxHeight: '400px', borderRadius: '30px'}} alt=""/>
                      </div>
                  </div>
                  <div className="feature">
                      <div className="feature-image hidden xl:flex 2xl:flex">
                          <img src="/img/animations/animation_Attach.gif"
                              style={{width: '640px', maxHeight: '400px', borderRadius: '30px'}} alt=""/>
                      </div>
                      <div className="feature-content">
                          <h4 className="feature-title">Alle Inhalte Ihrer digitalen Akten auf einen Blick</h4>
                          <div className="feature-image sm:flex md:flex lg:flex xl:hidden 2xl:hidden">
                              <img src="/img/animations/animation_Attach.gif"
                                  style={{width: '450px', maxHeight: '400px', borderRadius: '30px'}} alt=""/>
                          </div>
                          <p className="feature-description">Belassen Sie es bei Ihren digitalen Akten nicht bei Namen und
                              Ablageorten. Ihre virtuelle Akte ist der zentrale Zugang zu all Ihren Informationen. Egal ob
                              Verknüpfungen oder Dateien. Ziehen Sie einfach jede Information auf Ihre digitale Akte und
                              schon ist sie abgespeichert. So müssen Sie nie wieder unübersichtliche Postfächer oder
                              Tabellen oder Papierakten durchsuchen.</p>
                          {/* <!-- <a href="#" className="btn-primary">Lern mehr</a> --> */}
                      </div>
                  </div>
                  <div className="feature">
                      <div className="feature-content">
                          <h4 className="feature-title">Verknüpfen Sie digitale Akten mit Analogen</h4>
                          <div className="feature-image sm:flex md:flex lg:flex xl:hidden 2xl:hidden">
                              <img src="/img/animations/animation_Print.gif"
                                style={{maxHeight: '400px', borderRadius: '30px'}} alt=""/>
                          </div>
                          <p className="feature-description">Sie wollen auf Ihre Papierakten nicht verzichten aber die
                              Vorteile der digitalen Akte auf Aktenplatz nutzen? Kein Problem! Mit einem Klick erstellen
                              Sie den Aktensticker in der Form eines QR-Codes. Nun können den Aktensticker mit Ihrem
                              QR-Code Scanner oder Handy scannen und die digitale Akte erscheint sofort auf Ihrem
                              gewünschten elektronischen Gerät.</p>
                          {/* <!-- <a href="#" className="btn-primary">Lern mehr</a> --> */}
                      </div>
                      <div className="feature-image hidden xl:flex 2xl:flex">
                          <img src="/img/animations/animation_Print.gif"
                             style={{width: '450px', maxHeight: '400px', borderRadius: '30px'}} alt=""/>
                      </div>
                  </div>
                  <div className="feature">
                      <div className="feature-image hidden xl:flex 2xl:flex">
                          <img src="/img/animations/animation_Team.gif" style={{maxHeight: '400px', borderRadius: '30px'}}
                              alt=""/>
                      </div>
                      <div className="feature-content">
                          <h4 className="feature-title">Koordinieren Sie ihr Team
                          </h4>
                          <div className="feature-image sm:flex md:flex lg:flex xl:hidden 2xl:hidden">
                              <img src="/img/animations/animation_Team.gif"
                                  style={{width: '450px', maxHeight: '400px', borderRadius: '30px'}} alt=""/>
                          </div>
                          <p className="feature-description">Laden Sie Ihre Kollegen zu den Projekten ein. Weisen Sie sich die
                              digitalen Akten untereinander zu. Hinterlegen Sie wichtige Hinweise untereinander direkt in
                              den digitalen Akten. Von überall und wann immer Sie wollen können Sie für Ihre Kollegen
                              wichtige Informationen und Materialen direkt über die digitalen Akten zugänglich machen.</p>
                          {/* <!-- <a href="#" className="btn-primary">Lern mehr</a> --> */}
                      </div>
                  </div>
              </div>
          </section>
  
          <section className="sections section-focus">
              <div className="heading-container">
                  <h4 className="heading-title" id="Vorteile">Ihre Vorteile</h4>
                  <h3 className="heading-section-title">Funktionsübersicht</h3>
              </div>
              <div className="focuses lg:border-b border-gray">
                  <div className="focus">
                      <div className="focus-image">
                          <img src="/img/iconfokus-5.png" width="72px" alt=""/>
                      </div>
                      <h4 className="focus-title">Datenschutz und Sicherheit</h4>
                      <p className="focus-description">
                          Genießen Sie volle Transparenz und die Gewissheit, dass Sie jederzeit nachvollziehen können,
                          wo etwas gespeichert wird. Auf Wunsch auch auf Ihrem lokalen Server.
                      </p>
                  </div>
                  <div className="focus">
                      <div className="focus-image">
                          <img src="/img/WritingDesk.png" width="72px" alt=""/>
                      </div>
                      <h4 className="focus-title">Virtueller Schreibtisch</h4>
                      <p className="focus-description">
                          Lassen Sie weiter Ihre Akten von Schreibtisch zu Schreibtisch wandern. Nur jetzt wissen Sie auch
                          in der digitalen Welt, bei wem sich welche Akte gerade befindet.
                      </p>
                  </div>
                  <div className="focus">
                      <div className="focus-image">
                          <img src="/img/Notification.png" width="72px" alt=""/>
                      </div>
                      <h4 className="focus-title">Erinnerungen</h4>
                      <p className="focus-description">
                          Unser System informiert Sie über Akten zur Wiedervorlage. Verpassen Sie keine Fristen mehr und
                          nehmen Sie die Initiative wieder in die Hand.
                      </p>
                  </div>
              </div>
              <div className="focuses">
                  <div className="focus">
                      <div className="focus-image">
                          <img src="/img/iconfokus-6.png" width="72px" alt=""/>
                      </div>
                      <h4 className="focus-title">Integration</h4>
                      <p className="focus-description">
                          Wir binden Ihre bestehenden digitalen System direkt ein. Egal ob Steuerberatungssoftware,
                          Ablagesysteme bis hin zu Praxisverwaltungssystemen.
                      </p>
                  </div>
                  <div className="focus">
                      <div className="focus-image">
                          <img src="/img/Team.png" width="72px" alt=""/>
                      </div>
                      <h4 className="focus-title">Teamarbeit</h4>
                      <p className="focus-description">
                          Schreiben Sie Kommentare, legen Sie Dokumente zentral ab. So, dass Sie, Ihre Mitarbeiter und
                          Ihre Kunden alle Informationen zu der Akte auf einen Blick bereit haben.
                      </p>
                  </div>
                  <div className="focus">
                      <div className="focus-image">
                          <img src="/img/iconfokus-2.png" width="72px" alt=""/>
                      </div>
                      <h4 className="focus-title">Smartphone/Tablet</h4>
                      <p className="focus-description">
                          Damit Ihnen wirklich nichts durch die Finger rutscht, bieten wir unsere Aktenverwaltung auch auf
                          Ihrem Mobiltelefon und Tablet an.
                      </p>
                  </div>
  
              </div>
          </section>
          <div style={{textAlign: 'center'}}>
              <a href="./Preise.html" className="btn-primary">
                  Alle Funktionen
              </a>
          </div>
  
          <section className=" sections section-reviews">
              <div className="heading-container">
                  <h4 className="heading-title" id="Vertrauen">Vertrauensvoll und Sicher</h4>
                  <h3 className="heading-section-title">Unsere Versicherungen und Partner</h3>
              </div>
              <div className="mySwiper-review">
                  <Slider2/>
              </div>
          </section>
      </main>
      
      <div className="footer-banner">
          <div className="container mx-auto">
              <section className="sections section-quote">
                  <div className="quote-col quote-col-1">
                      <div className="quote-col-content">
                          <h4 className="heading-title">Jetzt starten</h4>
                          <h2 className="quote-title">Alle Akten im Griff mit Aktenplatz</h2>
                          <p className="quote-description">Testen Sie Aktenplatz 14 Tage kostenlos.<br/> Keine Kreditkarte
                              erforderlich.</p>
                          <a href="https://app.aktenplatz.de/register" target="_blank" rel="noreferrer" className="btn-primary">Kostenlos
                              loslegen</a>
                      </div>
                  </div>
                  <div className="quote-col quote-col-2">
                      <div className="client-feedback">
                          <div className="client-image-container">
                              <div className="client-image-outer-wrapper">
                                  <img className="client-quote-icon" src="/img/Quote.png" alt=""/>
                                  <div className="client-image-wrapper">
                                      <img className="client-image" src="/img/sascha.png" alt=""/>
                                  </div>
                              </div>
                              </div>
                              <img className="client-dot" src="/img/Dot.png" alt=""/>
                              <div className="client-content">
                                  <p className="client-message">Mein Ziel ist es Software zu bauen die Menschen bei Ihrer
                                      täglichen Arbeit unterstützt und nicht frustriert.
                                  </p>
                                  <div className="client-details">
                                      <h4 className="client-name">Sascha Ladewig</h4>
                                      <span className="client-position">Mitgründer</span>
                                  </div>
                              </div>
                          </div>
                  </div>
              </section>
          </div>
      </div>
      <Footer/>
      </div>
     </>
    );
  }
  
  export default Home;
  