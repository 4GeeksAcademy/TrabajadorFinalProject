// StripeContainer.js
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_24Lhn6ZoZOMsI8BSSvUXqA9q00E6REv8IJ"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = ({ formData, total, onSuccess }) => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm formData={formData} total={total} onSuccess={onSuccess} />
    </Elements>
  )
}

export default StripeContainer;
