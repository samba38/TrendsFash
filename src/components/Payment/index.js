import {useContext, useState} from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

const paymentOptions = [
  {
    id: 'CARD',
    displayText: 'card',
    isDisable: true,
  },
  {
    id: 'NET BANKING',
    displayText: 'Net Banking',
    isDisable: true,
  },
  {
    id: 'UPI',
    displayText: 'UPI',
    isDisable: true,
  },
  {
    id: 'WALLET',
    displayText: 'Wallet',
    isDisable: true,
  },
  {
    id: 'CASH ON DELIVERY',
    displayText: 'Cash On Delivery',
    isDisable: false,
  },
]

const Payment = () => {
  const {cartList} = useContext(CartContext)
  const [paymentMethod, setPaymentMthod] = useState('')
  const [isOrderPlaced, setOrderPlaced] = useState(false)
  const updatePayment = event => {
    const {id} = event.target
    setPaymentMthod(id)
  }
  const onplaceOrder = () => setOrderPlaced(true)
  let total = 0
  cartList.forEach(eachItem => {
    total += eachItem.quantity * eachItem.price
  })
  const renderPaymentMethodInput = () => (
    <ul>
      {paymentOptions.map(eachMethod => (
        <li className="input-list-container">
          <input
            type="radio"
            id={eachMethod.id}
            name="method"
            value={eachMethod.displayText}
            disabled={eachMethod.isDisable}
            onChange={updatePayment}
            className="input-radio"
          />
          <label htmlFor={eachMethod.id} className="label-input">
            {eachMethod.displayText}
          </label>
        </li>
      ))}
    </ul>
  )

  return (
    <div>
      {isOrderPlaced ? (
        <div>
          <h1 className="payment-details-head">
            Your order has been placed successfully
          </h1>
        </div>
      ) : (
        <>
          <div className="payment-container">
            <h1 className="payment-details-head">Payments Details</h1>
            <p className="payment-method-par">Payment Method</p>
            {renderPaymentMethodInput()}
            <div>
              <p className="payment-order-par">Order Details</p>
              <p className="payment-par">Quantity : {cartList.length}</p>
              <p className="payment-par">Total Price : RS {total}</p>
              <button
                type="button"
                onClick={onplaceOrder}
                disabled={paymentMethod === ''}
                className="btn-payment"
              >
                Conform Order
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Payment
