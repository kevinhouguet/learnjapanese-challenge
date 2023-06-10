import './style.scss'
import bg from '../../assets/bg.jpg'

const Hero = () => {
  return (
    <div className="hero">
      <img src={bg} alt="background-image" className='background-image'/>
      <h1 className="hero__title">
        Learn Japanese
      </h1>
      <p className="hero__description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ipsum repudiandae reprehenderit. Voluptas ipsum, eligendi odio ea id inventore impedit consectetur culpa enim, repellat nisi ad expedita obcaecati modi placeat.
      </p>
      <div className='hero__btn'>
        <a href="#" role='button' className='btn-primary'>Get Started</a>
      </div>
    </div>
  )
}

export default Hero;