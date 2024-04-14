import banner from '../assets/imagens/banner.svg'
import plant1 from '../assets/imagens/plant1.svg'
import plant2 from '../assets/imagens/plant2.svg'
import plant3 from '../assets/imagens/plant3.svg'
import { CardProduct } from '../components/cardProduct'

export function Home() {
    return (
        <>
            <img className="px-24" src={banner} alt="" />

            <section className="flex py-11 px-24 items-center justify-between">

                <div className="flex flex-col items-start w-64">
                    <h2 className="font-extrabold text-3xl mb-3">Best Selling Plants</h2>
                    <p className="text-gray-400 font-medium text-lg mb-6">Easiest way to healthy life by buying your favorite plants </p>
                    <button className="bg-[#C1DCDC] font-medium py-3 px-6 rounded-lg">See more</button>
                </div>

                <div className="flex">
                    <CardProduct 
                        ImageProd={plant1}
                        TitleProd="Natural Plants"
                        PriceProd="₱ 1,400.00"
                    />

                    <CardProduct 
                        ImageProd={plant2}
                        TitleProd="Artificial Plants"
                        PriceProd="₱ 900.00"
                    />

                    <CardProduct 
                        ImageProd={plant3}
                        TitleProd="Artificial Plants"
                        PriceProd="₱ 3,500.00"
                    />
                </div>

            </section>
        </>
    )
}