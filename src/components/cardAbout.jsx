export function CardAbout({ imgAbout, titleAbout, pAbout }) {
    return (
        <div className="text-center">
            <div className="flex justify-center items-center mb-6">
                <img src={imgAbout} alt={titleAbout} />
            </div>
            <h3 className="font-bold mb-3">{titleAbout}</h3>
            <p className="text-gray-400 font-normal text-base">{pAbout}</p>
        </div>
    );
}
