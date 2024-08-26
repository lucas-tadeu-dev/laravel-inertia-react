import { Link } from "@inertiajs/react";

export default function Ecommerce({ shops }){

    console.log(shops);
    return(
        <>
            <h1 className="title">Ecommerce</h1>

            <div className="flex flex-wrap -mx-3">
            {shops.data.map(
                shop=>(
                    
                    <div className="w-full sm:w-1/2 px-3 mb-6">
                    <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                        <img className="w-full h-48 object-cover" src={shop.image} alt="Product image" />
                        <div className="p-4">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{shop.title}</h2>
                        <div className="text-lg font-bold text-green-600 mb-2">${shop.price}</div>
                        <p className="text-gray-600">{shop.description}</p>
                        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                            Buy
                        </button>
                        </div>
                    </div>
                    </div>

                )
            )}
            </div>

            <div className="py-12 px-4">
                {shops.links.map((link) => 
                    link.url ? (
                    <Link href={link.url} 
                        key={link.label} 
                        dangerouslySetInnerHTML={{ __html: link.label }} 
                        className={`p-1 mx-1 ${ link.active ? "text-blue-500 font-bold" : ""}`}
                    />
                )   :  ( 
                    <span                   
                        key={link.label} 
                        dangerouslySetInnerHTML={{ __html: link.label }} 
                        className="p-1 mx-1 text-slate-300"
                    ></span>
                )
                )}
           </div>
        </>
    )
}