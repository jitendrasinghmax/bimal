import Bimal from '../assets/image 3.png'
const Card = () => {
    return (<>
        <div className="w-full h-[202px] bg-orange-200 flex flex-col sm:flex-row justify-evenly sm:justify-between items-center gap-2 mx-auto px-8 rounded-2xl">
            <img src={Bimal} className='max-w-[168px]'></img>
            <div className='flex flex-col gap-3 w-full'>
                <div className='text-[20] font-medium text-orange-950 text-[10px] sm:text-sm text-center sm:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div className='flex justify-evenly'>
                    <div className='text-[20] font-extrabold text-orange-950 sm:mt-auto'>Rs. 99</div>
                    <button className='p-2 bg-white rounded-md text-sm w-[93px] h-[36px] sm:w-[113px] sm:h-[56px] sm:text-lg sm:ml-auto'>Die Now</button>
                </div>
            </div>
        </div>
    </>)
}
export default Card;