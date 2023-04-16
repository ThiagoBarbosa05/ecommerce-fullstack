import rating from '../../assets/rating.svg'
import {Link} from 'react-router-dom'

export default function Card({data}) {
  return (
    <Link to={`/products/${data.id}`} className="w-[90%] mx-auto border-[1px] max-w-[18.43rem] border-[#DEE2E7] rounded-md shadow-sm bg-white">
    <div className="flex justify-center border-b-[1px] border-[#DEE2E7]">
      <img className="w-[100%] py-[.93rem] px-[2rem]" src={data.img} />
    </div>
    <div className="pt-[1.06rem] px-[1.25rem]">
      <p className="font-semibold text-lg">${data.price}</p>
      <img className="w-[6.8rem] py-[.56rem]" src={rating} />
      <p className="pb-[1.12rem] text-[#606060]">{data.name}</p>
    </div>
  </Link>
  )
}