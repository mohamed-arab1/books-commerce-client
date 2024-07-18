
import HeaderText from './HeaderText'
import MostPuppularCard from './MostPuppularCard'




const MostPopular = () => {
  return (
    <div className="font-poppins font-bold gap-y-[70px] flex flex-col my-[60px]">
        <HeaderText text='Most Popular Books'/>
       <MostPuppularCard/>
    </div>
  )
}

export default MostPopular