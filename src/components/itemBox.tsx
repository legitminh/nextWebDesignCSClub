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
    price:number,
    status:string | null
}){
    
    return (
        // Flex none to not flex(stretch)
        <div className=" w-[24rem] h-fit mx-[2rem] flex-none">
            <div className=" relative w-full h-[24rem] border-neutral-200 border overflow-clip">
                {/* Icon on top, no collide image */}
                <div className=" relative h-0"> 
                    <div className=" absolute left-[1rem] top-[0.35rem] w-[2rem] h-[2rem]">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" alt="empty" class="WishlistButtonstyles__StyledWishlistIcon-sc-1iowmvt-1 biMOpX"><rect fill="#F8F8F8" width="40" height="40" rx="20"></rect>
                            <path d="M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#F8F8F8"></path>{/* Inner heart, make this same color with bg to make unclicked heart */}
                            <path d="M26.84 20.417L20 27.204l-6.84-6.787A3.67 3.67 0 0 1 12 17.739C12 15.677 13.71 14 15.815 14a3.82 3.82 0 0 1 2.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0 1 24.186 14C26.289 14 28 15.677 28 17.739a3.673 3.673 0 0 1-1.16 2.678M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#006DB7"></path></svg> 
                    </div>
                </div>
                <Image width={500} height={500} src={props.imgLink} alt="Pretty lego set image"></Image>
                {/* Status BOX */}
                { (props.status!=null)?(
                <div className=" absolute bottom-0">
                    <div className=" bg-yellow-400 w-[3rem] h-[1.5rem] ml-[0.5rem] mb-[0.5rem] justify-center items-center flex">
                        <div className=" text-xs">
                        {props.status}
                        </div>
                    </div>
                </div>):
                (<div></div>)
                }  
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
            <div className="h-[4rem] rounded-md bg-orange-500 justify-center items-center flex">
                <div className=" font-semibold">
                Add to Bag
                </div>
            </div>
        </div>
    );
}