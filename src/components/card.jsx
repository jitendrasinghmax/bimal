import Bimal from '../assets/image 3.png'
const Card = () => {
    return (<>
        <div className="w-fit h-fit bg-orange-200 flex flex-col sm:flex-row justify-evenly sm:justify-between  gap-2 mx-auto px-8 py-3 rounded-2xl">
            <img src={Bimal} className='max-w-[168px]'></img>
            <div className='flex flex-col gap-3 sm:gap-1 w-full'>
                <div className='font-extrabold text-orange-950'>Bimal<span  className='font-extrabold text-orange-400'> Elachi</span></div>
                <div className='text-[20] font-extrabold text-orange-950 sm:mt-auto'>Rs. 99</div>
                <div className='flex gap-x-6 xm:ml-3'>
                    <button className='p-2 bg-white rounded-md text-sm w-[93px] h-[36px] sm:w-[113px] sm:h-[56px] sm:text-lg '>Die Now</button>
                    <button className='p-2 bg-orange-500 text-white rounded-md text-sm w-[93px] h-[36px] sm:w-[113px] sm:h-[56px] sm:text-lg '>Die Later</button>
                </div>
            </div>
        </div>
    </>)
}
export default Card;