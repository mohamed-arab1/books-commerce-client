import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar';
import { addToWishList, clearWishlists, removeWishlist } from '../rtk/wishSlice';



const Wishlist = () => {

  const { wishlistsItems} = useSelector((state) => state?.wishlists);
  const dispatch = useDispatch();


  console.log(wishlistsItems)


  return (
      <>
    <Navbar/>
        <div className='h-screen'>
        <h1 className='text-4xl text-center py-5 text-red-600'>My Wishlists</h1>
          <div  className="flex justify-end">
                <button   className="text-[#F4F7FA] bg-[#FF0000] mb-[10px] p-[10px] rounded "  onClick={() => dispatch(clearWishlists())}>Clear Chart</button>
            </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-16 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
               
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {wishlistsItems.map((book) => (
              <tbody key={book.id}>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                    <img
                      src={book.cover_image
                      }
                      className="w-16 md:w-32 max-w-full max-h-full"
                      alt="Apple Watch"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {book.title}
                  </td>

                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {book.price}
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      onClick={() => dispatch(removeWishlist(book))}
                    >
                      Remove
                    </a>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
    </div>


      </>
  )
}

export default Wishlist