import Card from "./card";

const Content = () => {
    return (<>
        <div className="max-w-[550px] sm:max-w-[600px] md:max-w-[900px] h-fit bg-orange-100 rounded-2xl mx-auto px-8 flex flex-col gap-10 pt-10">
            <Card/>
            <Card/>
            <Card/>
        </div>
    </>)
}
export default Content;