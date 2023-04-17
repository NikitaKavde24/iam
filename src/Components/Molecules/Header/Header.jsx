import { FaBeer } from 'react-icons/fa';
const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between h-20 p-12 bg-iamblue">
      <div className='text-2xl text-iamwhite'>All Tickets</div>
      <div >
        <div className='text-iamwhite'>
          <FaBeer/>
          <div>Profile </div>
        </div>
      </div>
    </div>
  )
}

export default Header
