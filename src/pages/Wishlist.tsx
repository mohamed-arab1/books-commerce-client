import React from 'react'
import Card from '../elements/Card'
import { useSelector } from 'react-redux'



const Wishlist = () => {

  const { wishlistsItems } = useSelector((state) => state?.wishlists);

  console.log(wishlistsItems)


  return (
      <>

          <div className='h-screen dark:bg-gray-800'>
              <div className='container mx-auto px-2 py-3'>
                  <h1 className='text-4xl text-center py-5  dark:text-gray-200'>My Wishlists</h1>
                  <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-center'>
                      {
                          wishlistsItems?.map((book) => {
                              return <Card key={book?._id} book={book} />
                          })
                      }
                  </div>
              </div>

          </div>


      </>
  )
}

export default Wishlist