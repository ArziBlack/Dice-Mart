import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#002346] px-7 w-full">
      <div className="grid grid-cols-5 gap-5 text-white">
        <div className="flex flex-col">
          <h2 className="text-sm uppercase">About Us</h2>
          <div className="flex flex-col py-2">
            <span>Contact us</span>
            <span>About us</span>
            <span>Our Blog</span>
            <span>Careers</span>
            <span>Forum</span>
            <span>Terms & Condition</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-sm uppercase">BUYING ON BLACKDICE</h2>
          <div className="flex flex-col py-2">
            <span>Buyer Safety Center</span>
            <span>Faqs</span>
            <span>Delivery</span>
            <span>Black Dice Return Policy</span>
            <span>Digital Services</span>
            <span>Bulk Purchase</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-sm uppercase">PAYMENT</h2>
          <div className="flex flex-col py-2">
            <span>Crypto Payment</span>
            <span>Wallet</span>
            <span>Verve</span>
            <span>Mastercard</span>
            <span>Visa</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-sm uppercase">more info</h2>
          <div className="flex flex-col py-2">
            <span>Site Map</span>
            <span>Track my Order</span>
            <span>Privacy Policy</span>
            <span>Authentic Items Policy</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-sm uppercase">make money on blackdice</h2>
          <div className="flex flex-col py-2">
            <span>Become a black dice affiliate</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer