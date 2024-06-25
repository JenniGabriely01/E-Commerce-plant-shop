import banner from '../assets/imagens/banner.svg'
import plant1 from '../assets/imagens/plant1.svg'
import plant2 from '../assets/imagens/plant2.svg'
import plant3 from '../assets/imagens/plant3.svg'
import about1 from '../assets/imagens/about1.png'
import about2 from '../assets/imagens/about2.png'
import about3 from '../assets/imagens/about3.png'
import categoriePlant1 from '../assets/imagens/categories-plant1.png'
import categoriePlant2 from '../assets/imagens/categories-plant2.png'
import categoriePlant3 from '../assets/imagens/categories-plant3.png'
import { CardAbout } from '../components/cardAbout'
import { CardProduct } from '../components/cardProduct'
import carrossel1 from '../assets/imagens/carrosel1.png';
import carrossel2 from '../assets/imagens/carrosel2.png';
import carrossel3 from '../assets/imagens/carrosel3.png';
import Carrosel from '../components/carrosel'

export function Home() {

    let slides = [
        carrossel1, carrossel2, carrossel3
    ];

    return (
        <>
            <main className="max-w-screen-2xl m-auto">
                <img className="px-24 w-full" src={banner} alt="" />

                <section className="flex py-11 px-24 items-center justify-between">

                    <div className="flex flex-col items-start w-64">
                        <h2 className="font-extrabold text-3xl mb-3">Best Selling Plants</h2>
                        <p className="text-gray-400 font-normal text-lg mb-6">Easiest way to healthy life by buying your favorite plants </p>
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
                    <p className="text-center mb-12 text-gray-400 font-normal text-lg" >Order now and appreciate the beauty of nature</p>

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

                <section className="py-11">
                    <h2 className="text-center font-extrabold text-3xl mb-3">Categories</h2>
                    <p className="text-center mb-12 text-gray-400 text-lg font-normal">Find what you are looking for</p>
                    <div className="bg-[#C1DCDC] p-16">
                        <div className="flex justify-between">

                            <div className="text-center">
                                <CardProduct
                                    ImageProd={categoriePlant1}
                                    TitleProd="Natural Plants"
                                />
                            </div>

                            <div className="text-center">
                                <CardProduct
                                    ImageProd={categoriePlant2}
                                    TitleProd="Plant Accessories"
                                />

                                <p className="text-gray-700 text-xl font-semibold mb-3">Horem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
                                <button className="bg-white py-2 px-4 rounded-lg font-bold">Explore</button>
                            </div>

                            <div className="text-center">
                                <CardProduct
                                    ImageProd={categoriePlant3}
                                    TitleProd="Artificial Plants"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-11 px-24">
                    <h2 className="text-3xl font-black mb-12">What customers say about <br /> GREEMIND?</h2>

                    <div className="w-[60%]">
                        <Carrosel slides={slides} />
                    </div>
                </section>
            </main>

        </>
    )
}