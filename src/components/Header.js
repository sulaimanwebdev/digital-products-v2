import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

    const [menuMobile, setmenuMobile] = React.useState('hidden')

    const onOpenMenu = () => {
        document.body.classList.add('overflow-hidden');
        document.body.classList.remove('overflow-auto');
        setmenuMobile('flex flex-col')
      };
      
      const onCloseMenu = () => {
        document.body.classList.add('overflow-auto');
        document.body.classList.remove('overflow-hidden');
        setmenuMobile('hidden')
      };

      let addScrollBar = () =>{
        document.body.classList.add('overflow-auto');
        document.body.classList.remove('overflow-hidden');
      }

  return (
    <>
    <div className={`menu-mobile ${menuMobile}`}>
          <div className="block w-full h-full relative">
              <div className="flex flex-none" style={{zIndex: "2"}}>
                  <Link to="/" onClick={addScrollBar} className="flex flex-row items-center">
                      <img src="/img/logo.png" alt="logo" className="logo" />
                      <span className="logo-title">Aktenplatz</span>
                  </Link>
              </div>
              <div onClick={onCloseMenu} className="menu-close-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 1.6L14.4 0L8 6.4L1.6 0L0 1.6L6.4 8L0 14.4L1.6 16L8 9.6L14.4 16L16 14.4L9.6 8L16 1.6Z"
                          fill="black" />
                  </svg>
              </div>
              <ul  className="main-mobile-menu" id="main-mobile-menu">
                  <li>
                     <Link to="/#funktionen"><button onClick={addScrollBar} >Funktionen</button></Link>
                  </li>
                  <li>
                      <a onClick={addScrollBar} data-scroll href="#Vorteile">Vorteile</a>
                  </li>
                  <li>
                      <a onClick={addScrollBar} data-scroll href="#Vertrauen">Vertrauen</a>
                  </li>
                  <li>
                      <Link onClick={addScrollBar} to="/preise">Preise</Link>
                  </li>
                  <li>
                      <Link onClick={addScrollBar} to="/steuerkanzleien">Steuerberater</Link>
                  </li>
                  <li>
                      <Link onClick={addScrollBar} to="/kieferorthopaedie">Kieferorthop??die</Link>
                  </li>
                  <li>
                      <Link onClick={addScrollBar} to="/revisionssicher">Revisionssicheres Archiv</Link>
                  </li>
                  <li>
                      <Link onClick={addScrollBar} to="/termin">Demo-Termin</Link>
                  </li>
              </ul>
              <a onClick={addScrollBar} href="https://app.Aktenplatz.de/register" target="_blank" rel="noreferrer" className="btn-primary">
                  Kostenlos testen
              </a>
          </div>
      </div>
          <header className="header">
              <div className="flex flex-none" style={{zIndex: "2"}}>
                  <Link onClick={addScrollBar} to="/" className="flex flex-row items-center">
                      <img src="/img/logo.png" alt="logo" className="logo" />
                      <span className="logo-title">Aktenplatz</span>
                  </Link>
              </div>
              <div className="flex flex-row flex-1 justify-end items-center sm:flex lg:flex xl:hidden">
                  <div onClick={onOpenMenu} className="menu-icon">
                      <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="-0.000976562" width="16" height="2" fill="#04060F" />
                          <rect x="-0.000976562" y="8" width="24" height="2" fill="#04060F" />
                          <rect x="7.99902" y="16" width="16" height="2" fill="#04060F" />
                      </svg>
                  </div>
              </div>
              <div className="hidden flex-row flex-1 justify-end items-center sm:hidden md:hidden xl:flex">
                  <ul className="main-menu">
                      <li>
                      <Link to="/#funktionen"><button onClick={addScrollBar} >Funktionen</button></Link>

                      </li>
                      <li>
                          <Link onClick={addScrollBar} to="/preise">Preise</Link>
                      </li>
                      <li className='z-50' style={{position: "relative", width: '150px'}}>
                          <details className="menu-details">
                              <summary>Zielgruppen</summary>
                              <ul>
                                  <li><Link onClick={addScrollBar} to="/steuerkanzleien">Steuerberater</Link></li>
                                  <li><Link onClick={addScrollBar} to="/kieferorthopaedie">Kieferorthop??die</Link></li>
                              </ul>
                          </details>
                      </li>
                      <li>
                         <Link onClick={addScrollBar} to="/revisionssicher">Revisionssicheres Archiv</Link>
                      </li>
                      <li>
                      <Link onClick={addScrollBar} to="/termin">Demo-Termin</Link>
                      </li>
                  </ul>
                  <a onClick={addScrollBar} href="https://app.Aktenplatz.de/register" target="_blank" rel="noreferrer" className="btn-primary">
                      Kostenlos testen
                  </a>
              </div>
          </header>
    </>
  )
}

export default Header