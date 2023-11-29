
const CuponSection = () => {
    return (
        <div id="cupon" className="bg-[url('https://i.ibb.co/n3XGdHN/backgorund1.jpg')] bg-opacity-40 mt-12 h-[300px] w-full flex-col gap-4 flex items-center justify-center">
            <div className="text-center bg-blue-900 px-24 p-6 rounded-xl bg-opacity-20">
            <h2 className="text-xl font-semibold text-black">Let Start with the Promo</h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">To Get <span className="text-white">20% Off</span></h1>
            <div className="flex mt-6 ">
            <input defaultValue={"RT096G"} type="text" readOnly className="w-full felx-1 rounded-l-xl text-xl md:text-2xl font-bold outline-none min-w-[200px] text-center p-2 md:p-6 h-20" />
            <button  className=" inline-block min-w-[100px] lg:min-w-[130px] bg-blue-600 text-base lg:text-xl px-4 font-bold text-white rounded-r-xl flex-1">Get Start</button>
            </div>
            </div>
        </div>
    );
};

export default CuponSection;