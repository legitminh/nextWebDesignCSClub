import Image from "next/image"
import Link from "next/link"
export default function NavBar(){
    return (<>  
        <div className=" w-full h-[3.5em] bg-yellow-400 flex items-center">
            <div className=" flex h-min ml-5 items-center">
                {/* Width and heigh does not matter */}
                <Link href="/">
                    <Image className="w-[2.5rem] h-[2.5rem]" alt={"lego logo"} src={"legoLogo.svg"} width={2} height={2}> 
                    </Image>
                </Link>
                <Link href={"about"}>
                    <div className=" ml-[3rem] text-black text-xs font-medium">
                        SHOP
                    </div>
                </Link>
                <div className=" ml-[3rem] text-black text-xs font-medium">
                    DISCOVER
                </div>
                <div className=" ml-[3rem] text-black text-xs font-medium">
                    HELP
                </div>
            </div>
            {/* <div className=" mr=[2rem]">
                <div className=" "></div>
                <Image  alt={"lego logo"} src={"legoLogo.svg"} width={2} height={2}>

                </Image>
            </div> */}

        </div>
    </>)
}