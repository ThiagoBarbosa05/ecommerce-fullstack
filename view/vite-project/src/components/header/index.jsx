import src from '../../assets/logo.png'
import InputSearch from '../input-search/index'
import Navigation from '../navigation/index'

export default function Header() {
  return (
    <header className='bg-white h-[5.3rem] flex items-center justify-center gap-5 border-b-[1px]'>
      <img src={src} className='w-[9.3rem] ml-[5rem]' />
      <InputSearch />
      <Navigation />
    </header>
  )
}