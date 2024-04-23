import banner from '../assets/imagens/banner.svg'
import plant1 from '../assets/imagens/plant1.svg'
import plant2 from '../assets/imagens/plant2.svg'
import plant3 from '../assets/imagens/plant3.svg'
import about1 from '../assets/imagens/about1.png'
import about2 from '../assets/imagens/about2.png'
import about3 from '../assets/imagens/about3.png'
import { CardAbout } from '../components/cardAbout'
import { CardProduct } from '../components/cardProduct'

export function Home() {
    return (
        <>
            <img className="px-24 w-full" src={banner} alt="" />

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

            <section className="py-11 px-24">
                <h2 className="text-center font-extrabold text-3xl mb-3">About us</h2>
                <p className="text-center mb-12 text-gray-400 font-medium text-lg" >Order now and appreciate the beauty of nature</p>

                <div className="flex justify-center">
                    <CardAbout
                        imgAbout={about1}
                        titleAbout="Large Assortment"
                        pAbout="we offer many different types of products with fewer variations in each category."
                    />

                    <CardAbout
                        imgAbout={about2}
                        titleAbout="Fast & Free Shipping"
                        pAbout="4-day or less delivery time, free shipping and an expedited delivery option."
                    />

                    <CardAbout
                        imgAbout={about3}
                        titleAbout="24/7 Support"
                        pAbout="answers to any business related inquiry 24/7 and in real-time."
                    />
                </div>
            </section>

        </>
    )
}