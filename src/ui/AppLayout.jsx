import React from 'react'
import Header from './Header'
import CartOverview from '../features/cart/CartOverview'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader'

const AppLayout = () => {
    const navigation = useNavigation()
    // console.log(navigation);
    const isLoading = navigation.state === "loading"
    return (
        <div div className='grid h-screen grid-rows-[auto_1fr_auto] font-poppins '>
            {isLoading && <Loader />}
            <Header />
            {/* <div className=' overflow-scroll'>

            </div> */}
            <main className=' w-full xl:px-[70px] md:px-[50px] sm:px-[30px] mx-auto  flex flex-col py-10'>
                <Outlet />
            </main>

            <CartOverview />
        </div>
    )
}

export default AppLayout