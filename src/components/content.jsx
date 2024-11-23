import Card from "./card";

const Content = () => {
    return (<>
        <div className=" max-w-[550px] sm:max-w-[700px] md:max-w-[800px]  h-fit bg-orange-100 rounded-2xl mx-auto flex flex-col gap-10 pt-10">
            {[1,2,3,4].map((item)=><Card key={item} id={item} />)}
        </div>
    </>)
}
export default Content;