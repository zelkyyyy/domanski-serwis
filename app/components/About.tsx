import React from 'react'

const About = () => {
    const descriptions = ['Wieloletnie doświadczenie: Ponad pół wieku praktyki w branży mechanicznej i elektronicznej.', 
        'Nowoczesne zaplecze: Dysponujemy profesjonalną halą napraw wyposażoną w zaawansowane narzędzia diagnostyczne.',
        'Mistrzowska wiedza: Nasz zespół to certyfikowani eksperci, w tym laureat I miejsca w konkursie Ekspert Samochodowy Roku 2015 (specjalizacja: automatyczne skrzynie biegów).',
        'Prestiżowe partnerstwa: Należymy do sieci Perfect Service oraz jesteśmy dumnym partnerem Motointegratora i Inter Cars.',
        'Najwyższa jakość: Posiadamy certyfikat Autoryzowanego Punktu Wymiany Oleju Castrol oraz liczne uprawnienia serwisowe (Bosch, urządzenia chłodnicze).'
    ]
  return (
    <div id="o-nas" className='relative flex flex-col items-center justify-center w-full min-h-[500px] my-24'>
        <h2 className='text-5xl font-bold mb-16 text-neutral-200 font-sans tracking-wide '>O nas</h2>
        <div className='w-full flex lg:flex-row flex-col items-center flex-nowrap justify-center gap-10 px-10'>
        <p className='text-lg text-neutral-300 text-left max-w-[60ch] h-fit border p-8 rounded-xl border-red-500/40'>
          Jesteśmy rodzinnym serwisem z Łukowa, który od <b>1956</b> roku łączy pasję do <b>motoryzacji</b> z najwyższymi standardami obsługi. Nasza historia to droga od warsztatu ślusarskiego Stanisława Domańskiego do nowoczesnego centrum mechatroniki pojazdowej.
        </p>
        <div className='text-lg text-neutral-300 text-center max-w-[60ch]'>
            <h3 className='text-2xl font-bold mb-4 text-neutral-200'>Dlaczego warto nam zaufać?</h3>
            <ul className='p-4 text-left'>
                {descriptions.map((desc, index) => (
                    <li key={index} className='mb-4 flex items-start gap-2'>
                        <span className='text-red-500 font-bold text-xl'>•</span>
                        <span>{desc}</span>
                    </li>
                ))}
            </ul>
        
        </div>
        </div>
        
    </div>
  )
}

export default About