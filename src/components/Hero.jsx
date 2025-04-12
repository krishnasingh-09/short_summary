import {logo} from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-
    center flex-col">
        <nav className="flex justify-between
        items-center w-full mb-10 pt-3">
            <img src={logo} alt="sumz_logo"
            className="w-28 object-contain"/>

           
        </nav>
        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden'/>
            <span className='orange_gradient'>IIT Patna's Gpt</span>
        </h1>
        <h2 className='my-10 mx-10 font-inter justify-center'>
            Simplify your reading with IIT Patna's GPT, a article summarizer
            that transforms lengthy articles into
            clear and concise summaries
        </h2>
        </header>
  )
}

export default Hero;

