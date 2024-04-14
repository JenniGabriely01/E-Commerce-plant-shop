export function CardProduct({ImageProd, TitleProd, PriceProd}){
    return(
        <div className="flex flex-col p-12">
            <img src={ImageProd} alt="card" />
            <h3 className="font-medium text-[#1E1E1E]">{TitleProd}</h3>
            <p className="text-gray-400 font-medium">{PriceProd}</p>
        </div>
    )
}