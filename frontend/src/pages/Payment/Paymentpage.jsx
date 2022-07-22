import React from 'react'
import { Payment } from '../../components/Payment/Payment'
import styled from 'styled-components'
import { Showbuyed } from '../../components/Payment/Showbuyed'

const Paywrapper = styled.div`
width:90%;
margin:auto;
margin-top:50px;
font-size: 14px;
font-family:"Montserrat";
display: flex;
justify-content: space-between;

.secondcont{
  margin-left: 30px;

  .deliver{
    margin:15px 0px;

  }
}

.titletag{
  font-weight: bold;
  margin:10px;
}
.paymentsec{
  width:650px;
  height:420px;
  border:1px solid gray;

}

`
export const Paymentpage = () => {
  return (
    <>
    <Paywrapper>
      <div>
        <div className='titletag'>Choose your payment method</div>
        <div className='paymentsec'>
          <Payment/>
        </div>
      </div>
      <div className='secondcont'>
      <div className='deliver'>Delivering order to Naved Khan Madarse wali gali, Near Noori Masjid,Delapeer bareilly, Bareilly, Uttar Pradesh, 243122</div>
       <hr/>
       <div>
        <p className='font-bold my-3'>You are paying for these items</p>
        <Showbuyed/>
       </div>
      </div>
      </Paywrapper>
    </>
  )
}