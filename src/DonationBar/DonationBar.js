import React from 'react';
import './DonationBar.css'

function DonationBar({donated}) {
  return (
    <div className="donation-bar">
      <div className="info">
        <article className="help">
          <h3 className="bar-title">Help Received</h3>
          <h4 className="bar-amount">$0</h4>
          <button className="apply-button">Apply for Help</button>
        </article>
        <article className="donations">
          <h3 className="bar-title">Total Donated</h3>
          <h4 className="bar-amount">{`$${donated.toFixed(2)}`}</h4>
          <button className="donate-button">Donate/ Roundup</button>
        </article>
      </div>
    </div>
  )
}

export default DonationBar;
