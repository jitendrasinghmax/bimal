import { useRecoilState, useSetRecoilState } from 'recoil';
import Bimal from '../assets/image 3.png'
import { cardAtomFamily, cartAtom, dieNowAtom } from '../store/atom';
import { useNavigate } from 'react-router-dom';
const Card = ({id}) => {
    const navigate=useNavigate();
    const [item,setItem]=useRecoilState(cardAtomFamily(id))
    const setDieLater=useSetRecoilState(cartAtom);
    const setDieNow=useSetRecoilState(dieNowAtom);
    const dieLater=()=>setDieLater(prev=>(prev.every((item)=>item!=id))?[...prev,{id,quantity:1}]:[...prev]);
    const dieNow=()=>navigate('/mycart');
    return (<>
        <div className="w-fit h-fit bg-orange-200 flex flex-col sm:flex-row justify-evenly sm:justify-between  gap-2 mx-auto px-8 py-3 rounded-2xl">
            <img src={Bimal} className='max-w-[168px]'></img>
            <div className='flex flex-col gap-3 sm:gap-1 w-full'>
                <div className='font-extrabold text-orange-950'>Bimal<span  className='font-extrabold text-orange-400'> Elachi</span></div>
                <div className='text-[20] font-extrabold text-orange-950 sm:mt-auto'>Rs. 99</div>
                <div className='flex gap-1 sm:gap-x-6 xm:ml-3'>
                    <button onClick={dieLater} className='p-2 bg-orange-500 text-white rounded-md text-sm w-[93px] h-[36px] sm:w-[113px] sm:h-[56px] sm:text-lg '>Die Later</button>
                    <button onClick={dieNow} className='p-2 bg-white rounded-md text-sm w-[93px] h-[36px] sm:w-[113px] sm:h-[56px] sm:text-lg '>Die Now</button>
                    <div className='flex justify-center items-center gap-x-2 p-x-1 text-sm bg-orange-500 text-white font-extrabold rounded-lg '>
                        <button onClick={()=>setItem((c)=>c+1)} className='p-2 '>+</button>
                        <div className=' border-white border-solid'>{item}</div>
                        <button onClick={()=>setItem((c)=>c>1?c-1:c)} className='p-2'>-</button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Card;