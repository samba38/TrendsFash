// Write your code here
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Payment from '../Payment'
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachItem => {
        total += eachItem.quantity * eachItem.price
      })

      return (
        <>
          <div className="summary-cart-container">
            <h1 className="summary-heading">
              Order Total: <span className="summary-span">{total}/-</span>
            </h1>
            <p className="summary-paragraph">{cartList.length} items in cart</p>
            <Popup
              trigger={<button className="summary-btn">CheckOut</button>}
              position="top left"
            >
              <Payment />
            </Popup>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
