import instagram from './assets/instagram.png'
import whatsapp from './assets/whatsapp.png'


export const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <p>Estudio Crea - Cordoba, Argentina</p>
        </div>
        <div>
            <a href="https://www.instagram.com/estudiocrea_/" target='_blank'><img src={instagram} alt='Logo Instagram'/></a>
            <a href="https://api.whatsapp.com/send?phone=3563404877" target='_blank'><img src={whatsapp} alt='Logo Whatsapp'/></a>
        </div>
    </div>
  )
}
