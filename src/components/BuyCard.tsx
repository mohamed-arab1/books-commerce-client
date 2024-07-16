import { useState } from "react";
import { BiCart, BiHeart, BiMinus, BiPlus } from "react-icons/bi";

const maxPurchase = 5;

export default function BuyCard() {
  const [quantity, setQuantity] = useState(1);
  return (
    <section className="w-full text-[#333] flex justify-center mb-24">
      <div className=" sm:w-2/3 w-full mx-2  py-5  flex justify-center  border rounded-sm bg-[#FFFCFC]">
        <div className="max-w-96 w-4/5 space-y-2">
          <div className="w-full">
            <label className="font-bold text-lg text" htmlFor="quantity">
              Quantity
            </label>
            <div className="relative">
              <button
                className="absolute left-2 top-1/2 p-1 -translate-y-1/2 hover:bg-slate-200 rounded-md bg-white "
                onClick={setQuantity.bind(null, (q) => (q > 1 ? q - 1 : q))}
              >
                <BiMinus className="text-red-700" />
              </button>
              <button
                className="absolute right-2 top-1/2  p-1 hover:bg-slate-200 rounded-md -translate-y-1/2  bg-white "
                onClick={setQuantity.bind(null, (q) => (q < 5 ? q + 1 : q))}
              >
                <BiPlus className="text-green-700" />
              </button>
              <input
                name="quantity"
                type="number"
                inputMode="numeric"
                className="w-full p-2 border border-stone-800 rounded-md outline-none font-bold text-center"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                min={1}
                max={maxPurchase}
              />
            </div>
            <p className="text-xs font-extralight mt-1 text-gray-500">
              Maximum purchase {maxPurchase}
            </p>
          </div>
          <div>
            <button className="bg-primary text-white py-2 w-full rounded-md mt-5 bg-[#212449] hover:bg-[#121429]  border-bgfooter border  transition-all font-bold ">
              Buy Now
            </button>
            <div className="flex gap-4 flex-wrap gap-y-0">
              <button
                className="bg-primary text-bgfooter py-2 w-full 
              border rounded-md mt-5 bg-transparent border-bgfooter hover:bg-[#212449] hover:text-white
              transition-all items-center justify-center gap-2 flex"
              >
                <BiCart className="inline-block text-xl" />
                Add to Cart
              </button>

              <button
                className="bg-primary text-bgfooter py-2 w-full
              border-bgfooter border rounded-md mt-5 bg-transparent
              hover:bg-[#212449] hover:text-white
              transition-all items-center justify-center gap-2 flex"
              >
                <BiHeart className="inline-block text-xl" />
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
