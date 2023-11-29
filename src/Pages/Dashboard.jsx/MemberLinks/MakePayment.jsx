import { useForm } from "react-hook-form";

const MakePayment = () => {
    const {
        register,
        handleSubmit,
      } = useForm();
      const onSubmit = async (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        console.log(name, email, password);
      }
    return (
        <div className="px-12 flex flex-col items-center justify-center min-h-screen">
          <form
            className="flex flex-col items-center p-12 px-16 shadow-xl w-[320px] md:w-[450px] lg:w-[520px] mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="my-12 mt-4 text-blue-600 text-3xl font-medium">
              Make Payment
            </h2>
            
            {/* input 1 */}
            <div className="w-full mt-4">
              <label className="font-bold mb-2 inline-block" htmlFor="email">
                Email<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border w-full p-2 outline-gray-400"
                {...register("email")}
                placeholder="Email "
                readOnly
              />
              
            </div>
            {/* input 2  */}
            <div className="w-full mt-4">
              <label className="font-bold mb-2 inline-block" htmlFor="block-name">
                Bock name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="block-name"
                name="block-name"
                className="border w-full p-2 outline-gray-400"
                {...register("block_name")}
                placeholder="Enter block name "
                readOnly
              />
              
            </div>
            {/* input 3  */}
            <div className="w-full mt-4">
              <label className="font-bold mb-2 inline-block" htmlFor="floor-no">
                Floor no <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="floor-no"
                name="floor-no"
                className="border w-full p-2 outline-gray-400"
                {...register("floor_no")}
                placeholder="Enter floor no "
                readOnly
              />
              
            </div>
            {/* input 4  */}
            <div className="w-full mt-4">
              <label className="font-bold mb-2 inline-block" htmlFor="apartment-no">
                Apartment name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="apartment-no"
                name="apartment-no"
                className="border w-full p-2 outline-gray-400"
                {...register("apartment_no")}
                placeholder="Enter apartment no "
                readOnly
              />
              
            </div>
            {/* input 5  */}
            <div className="w-full mt-4">
              <label className="font-bold mb-2 inline-block" htmlFor="rent">
                Rent<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="rent"
                name="rent"
                className="border w-full p-2 outline-gray-400"
                {...register("rent")}
                placeholder="Enter rent "
                readOnly
              />
              
            </div>
            {/* input 6 */}
            <div className="w-full mt-4">
              <label className="font-bold mb-2 inline-block" htmlFor="month">
                Month<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="month"
                name="month"
                className="border w-full p-2 outline-gray-400"
                {...register("month")}
                placeholder="Enter month "
                readOnly
              />
              
            </div>

            <input
              type="submit"
              value={"Sign Up"}
              className="btn bg-blue-600 text-white font-bold w-full mt-4 rounded-none"
            />
          </form>
        </div>
    );
};

export default MakePayment;