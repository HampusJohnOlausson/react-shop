import React from 'react'
import CardDetails from './CardDetails'
import Klarna from './Klarna'
import SwishDetails from './SwishDetails'

const PaymentDetails = () => {
    return (
        <div>
            <h2>Payment Details</h2>
            <div className="paymentOption-container">
                <CardDetails/>
                <SwishDetails/>
                <Klarna/>
            </div>
        </div>
    )
}

export default PaymentDetails
