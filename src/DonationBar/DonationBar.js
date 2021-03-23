import React from 'react';
import './DonationBar.css'

function DonationBar() {
  return (
    <div className="donation-bar">
      <div className="info">
        <article className="help">
          <h3>Help Received</h3>
          <h4>$0</h4>
          <button >Apply for Help</button>
        </article>
        <article className="donations">
          <h3>Total Donated</h3>
          <h4>$20</h4>
          <button>Donate/Enable Roundup</button>
        </article>
      </div>
    </div>
  )
}

export default DonationBar;