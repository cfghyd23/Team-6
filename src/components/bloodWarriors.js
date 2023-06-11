import React from 'react'
import ContactUs from './contact'
import EmergRequests from './emergRequests'
import BloodBank from './bloodBank'

function bloodWarriors() {
  return (
    <div>
      <BloodBank/>
      <ContactUs/>
      <EmergRequests/>
    </div>
  )
}

export default bloodWarriors
