import { useLoaderData } from "react-router-dom";
import BrandCard from "../BrandCard";
import ReallmeSlider from "./RealmeSlider";


const Realme = () => {
    const data=useLoaderData()
    console.log(data)
    return (
        <>
        <ReallmeSlider></ReallmeSlider>
        <h1 className="text-3xl font-bold lg:text-start text-center my-7">Total Products : {data.length}</h1>
        <div className="grid grid-cols-1 md:p-0 px-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            data.map(item=><BrandCard key={item._id} item={item}></BrandCard>)
        }
        </div>
        </>
    );
};

export default Realme;