
interface  BackgroundActionProps
{
    action:string;
    descriçao:string

}


export function BackgroundAction (props:BackgroundActionProps)
{
    return(
        <>
            <footer className="h-96 w-[100%] bg-gradient-blue adsolute top-100  ">
               <p className="text-center pt-10 pb-2 font-black text-white text-4xl ">{props.action}</p>
                <p className="text-center  text-white"> {props.descriçao}</p>
            </footer>
        </>
    )
}