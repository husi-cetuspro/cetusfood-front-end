import React from 'react';
import './project.css';
import './Footer copy.css';
import Order from './Order.jsx';
const OrderPanel = () => {
     const handleClick2 = () => {
     document.querySelector(".submit").classList.add('sign-up-mode');
  }
    const handleClick1 = () => {
    console.log('adma jest najlepszy')
    document.querySelector(".submit").classList.remove("sign-up-mode");
  }
  return (
    <div className='OrderPanel'>
      <div class="header">
        <div><img src="CetusikKurier.png" alt="" />
          Cetus<span onClick={handleClick2}>Food</span> 
        </div>
        <div>
          <form action="">
            <fieldset>
              <input type="text" placeholder="Wyszukaj restauracje" />
            </fieldset>
          </form>
        </div>
        <div>
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </div>
      </div>
      <div class="mein">
        <form action="">
          <fieldset>
                  <Order/>
                  <Order/>
                  <Order/>
                  <Order/>
                  <Order/>
                  <Order/>
                  <Order/>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default OrderPanel;