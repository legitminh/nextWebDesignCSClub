import Image from "next/image"
function renderStars(rating: number) {
    let stars: JSX.Element[] = [];
    for (var i = 0; i < Math.floor(rating); i++) {
        stars.push(
        <div className=" w-[1rem] h-[1rem] overflow-scroll"><Image src="/fullStar.svg" alt="star" width={512} height={512} key={i} />
        </div>);
    }
    if (rating-Math.floor(rating)>=0.5){
        stars.push(
            <div className=" w-[1rem] h-[1rem] overflow-scroll"><Image src="/halfStar.svg" alt="star" width={512} height={512} key={i} />
            </div>);
    }
    for (var i = 0; i < 5-Math.ceil(rating); i++) {
        stars.push(
        <div className=" w-[1rem] h-[1rem] overflow-scroll"><Image src="/nullStar.svg" alt="star" width={512} height={512} key={i} />
        </div>);
    }
    return stars;
}
export default function ItemBox(props:{
    imgLink:string,
    name:string,
    rating:number,
    price:number
}){
    
    return (
        // Flex none to not flex(stretch)
        <div className=" w-[24rem] h-[32rem] mx-[2rem] flex-none">
            <div className=" w-full h-[24rem] border-neutral-200 border overflow-clip">
                    {/* Icon on top, no collide image */}
                <div className=" relative h-0"> 
                    <div className=" absolute left-[1rem] top-[0.35rem]">
                        ()
                    </div>
                </div>
                <Image width={500} height={500} src={props.imgLink} alt="Pretty lego set image"></Image>
                <div className=" relative"> 
                    <div className=" absolute bottom-0">
                        New
                    </div>
                </div>
            </div>
            <div>
                <div className="mt-[0.5rem]">
                {props.name}
                </div>
                <div className="mt-[0.5rem] flex">
                {renderStars(props.rating)}
                </div>
                <div className="mt-[0.25rem]">
                    <strong>${props.price}</strong>
                </div>
                
            </div>
            <div className="h-max rounded-sm bg-orange-500">
                <center className=" h-max">
                Add to Bag
                </center>
            </div>
        </div>
    );
}