import { Tabs } from '../../components/Tabs'
import Button from "../../components/elements/Button"
import { useSelector } from 'react-redux'
import { cartProducts } from "../../stores/cart/cartSlice"
import { ReactComponent as ArrowRightSvg } from '../../assets/icons/arrow-right-long-svgrepo-com.svg'
import useTabSwitch from '../../hooks/useTabSwitch'
import { AddresForm } from '../../components/AddressForm'
import { ProductsSummary } from '../../components/ProductsSummary'
const Cart = () => {
    const cart = useSelector(cartProducts)
    const tabs = ['Summary', 'Delivery', 'Payment']
    const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Summary')
    if (!cart || cart.length === 0) {
        return (
            <div className='bg-white h-full text-black flex justify-center p-4'>
                <h1>Your Cart is empty</h1>
            </div>
        )
    }
    return (
        <div className='bg-white h-screen text-black mx-auto mt-2 border border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8'>
            <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} />
            <div className={`tabs ${currentTab !== 'Summary' ? 'hidden' : ''}`}>
                <ProductsSummary />
            </div>
            <div className={`tabs ${currentTab !== 'Delivery' ? 'hidden' : ''}`}>
                <AddresForm onTabSwitch={handleTabSwitch} />
            </div>
            <div className={`tabs ${currentTab !== 'Payment' ? 'hidden' : ''}`}>
                Payment form
            </div>
        </div>
    )
}
export default Cart