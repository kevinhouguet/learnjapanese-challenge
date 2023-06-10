import './style.scss'

import book from '../../assets/book.png'
import headset from '../../assets/headset.png'
import loop from '../../assets/loop.png'

const PageElements = () => {
    return (
        <div className="page-elements">
            <article className='page-element'>
              <img src={book} alt="random" />
              <p><strong>Lorem ipsum dolor</strong> sit amet consectetur adipisicing elit. Harum dicta autem voluptates. Culpa laboriosam nam voluptatibus optio aspernatur voluptas minus, adipisci deserunt aperiam placeat. Nemo accusantium error nihil maxime delectus!</p>
            </article>
            <article className='page-element'>
              <img src={headset} alt="random" />
              <p><strong>Lorem ipsum dolor</strong> sit amet consectetur adipisicing elit. Harum dicta autem voluptates. Culpa laboriosam nam voluptatibus optio aspernatur voluptas minus, adipisci deserunt aperiam placeat. Nemo accusantium error nihil maxime delectus!</p>
            </article>
            <article className='page-element'>
              <img src={loop} alt="random" />
              <p><strong>Lorem ipsum dolor</strong> sit amet consectetur adipisicing elit. Harum dicta autem voluptates. Culpa laboriosam nam voluptatibus optio aspernatur voluptas minus, adipisci deserunt aperiam placeat. Nemo accusantium error nihil maxime delectus!</p>
            </article>
        </div>
    )
}

export default PageElements;