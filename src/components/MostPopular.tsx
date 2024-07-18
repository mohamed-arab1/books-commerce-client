import Cards from './Cards'
import HeaderText from './HeaderText'




const MostPopular = () => {
  return (
    <div className="font-poppins font-bold gap-y-[70px] flex flex-col my-[60px]">
        <HeaderText text='Most Popular Books'/>
        <Cards/>
    </div>
  )
}

export default MostPopular