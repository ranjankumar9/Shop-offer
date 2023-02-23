import React from "react";

const checkout = () => {
  return (
    <div>
      <p>Delivery Address</p>
      <form>
        <div>
          <lebel>Pincode</lebel>
          <input type="text" placeholder="6 digit pincode" required />
        </div>
        <div>
          <lebel>Name</lebel>
          <input type="text" placeholder="Full Name" required />
        </div>
        <div>
          <lebel>Address</lebel>
          <input type="text" placeholder="Flat/House No. Colony/Street No." />
        </div>
        <div>
          <lebel>Locality/Landmark</lebel>
          <input type="text" placeholder="Eg. Nearest" />
        </div>
        <div>
          <lebel>City</lebel>
          <input type="text" placeholder="city" />
        </div>
        <div>
          <lebel>State</lebel>
          <input type="text" placeholder="state" />
        </div>
        <div>
          <lebel>Mobile Number</lebel>
          <input type="text" placeholder="mobile no."/>
        </div>
        <div>
            <lebel>Address Type</lebel>
            <input type="radio" />
            <lebel>Home/Personal</lebel>
            <input type="radio" />
            <lebel>office/Commercial</lebel>
        </div>
        <button>SAVE AND CONTINUE</button>
      </form>
    </div>
  );
};

export default checkout;
