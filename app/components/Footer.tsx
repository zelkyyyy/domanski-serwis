import { FaLocationDot } from 'react-icons/fa6'
// import { services } from '@/data/services'

export default function Footer() {
    return (
        <footer id="kontakt" className="bg-zinc-950 text-neutral-300 p-18 w-full flex flex-col md:flex-row justify-around items-top gap-12 ">
            <div>
                <h3 className={`text-2xl font-bold mb-2 md:mb-4 text-neutral-100`}>Godziny otwarcia</h3>
                <p className="flex justify-between"><span className="mr-8">Poniedziałek - Piątek:</span> 8:00 - 16:00</p>
                <p className="flex justify-between"><span>Sobota:</span> 9:00 - 14:00</p>
                <p className="flex justify-between"><span>Niedziela:</span> Zamknięte</p>
            </div>
            <div>
                <h3 className={`text-2xl font-bold mb-2 md:mb-4 text-neutral-100`}>Kontakt</h3>
                <p className="flex justify-between">Mieczysław: <a href="tel:+48123456789" className="text-red-500 hover:underline">+48 123 456 789</a></p>
                <p className="flex justify-between">Robert: <a href="tel:+48123456789" className="text-red-500 hover:underline">+48 123 456 789</a></p>
                <p className="flex justify-between">Rafał: <a href="tel:+48123456789" className="text-red-500 hover:underline">+48 123 456 789</a></p>
                <a href="https://maps.app.goo.gl/BZLzjFTBMpkseLKw8" target="_blank" rel="noopener noreferrer" className={` text-neutral-300 font-sans  flex items-center gap-2 mt-6`}> <FaLocationDot className='text-red-500 p-1' />21-400 Łuków, ul.&nbsp;Radzyńska&nbsp;4</a>
                
            </div>
            <div>
                <h3 className={`text-2xl font-bold mb-2 md:mb-4 text-neutral-100`}>Usługi</h3>
                <ul className="list-disc list-inside ">
                    {/* {services.map((service, index) => (
                        <li key={index} className="mb-1">{service}</li>
                    ))} */}
                </ul>
            </div>
        </footer>
    )
} 