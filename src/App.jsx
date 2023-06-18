import React from "react";
import Liza from './assets/Liza.jpeg'
import ProgressBar from "./progressBar/progressBar.jsx";
import Reviews from "./reviews/swiper.jsx";

import insta from './assets/instagram.svg'
import vk from './assets/vk.svg'
import whatsapp from './assets/whatsapp.svg'
import ListWithDropdown from "./services/services.jsx";
function App() {

  //style={{fontFamily: 'Noto Serif'}}

  return (
    <div className='w-full min-h-screen h-full flex flex-col items-center bg-orange-50'>
      <header className='flex flex-col justify-center items-center mt-12 mb-6 mx-8' style={{fontFamily: 'Rubik Mono One'}}>
        <ProgressBar />
        <h1 className='font-bold text-3xl'>Ваш персональный репетитор по русскому языку и литературе</h1>
        <img className='w-2/3 rounded-full sm:w-1/3 md:1/4 lg:1/6 mt-3' src={Liza} alt='Elizaveta'/>
        <a className='font-bold text-xl' style={{fontFamily: 'Ubuntu Mono'}}>@anelizavet</a>
      </header>
      <div className='flex flex-col items-center justify-center mx-3 text-xl gap-4' style={{fontFamily: 'Noto Serif'}}>
        <p className='rounded-lg p-5 border border-amber-200 text-justify'>
          Пример текста в рамке. Окно в разработке. Пример текста в рамке. Окно в разработке. Пример текста в рамке. Окно в разработке.
          Пример текста в рамке. Окно в разработке. Пример текста в рамке. Окно в разработке. Пример текста в рамке. Окно в разработке.
          Пример текста в рамке. Окно в разработке. Пример текста в рамке. Окно в разработке. Пример текста в рамке. Окно в разработке.
        </p>
        <p>
          Пример текста без рамки. Окно в разработке. Пример текста без рамки. Окно в разработке.Пример текста без рамки. Окно в разработке.
          Пример текста без рамки. Окно в разработке. Пример текста без рамки. Окно в разработке.Пример текста без рамки. Окно в разработке.
          Пример текста без рамки. Окно в разработке. Пример текста без рамки. Окно в разработке.Пример текста без рамки. Окно в разработке.
        </p>
      </div>

      <h2 className='text-3xl mt-6' style={{fontFamily: 'Noto Serif'}}>Оказываемые услуги</h2>

      <div className='w-full items-center p-2 m-2 justify-center'>
        <ListWithDropdown />
      </div>

      <div className='w-full sm:w-1/3 md:w-1/2 items-center p-2 m-2'>
        <Reviews />
      </div>

      <div className='flex flex-row gap-2'>
        <a href='https://instagram.com/anelizavet?igshid=MzRlODBiNWFlZA=='>
          <img src={insta} alt='instagram'/>
        </a>
        <a href='https://vk.com/public219673604'>
          <img src={vk} alt='VK'/>
        </a>
        <a href='https://api.whatsapp.com/send?phone=79058122049'>
          <img src={whatsapp} alt='WhatsApp'/>
        </a>
      </div>
    </div>
  )
}

export default App
