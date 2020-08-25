import React from 'react'
import { ContactWrapper, HoursWrapper } from '../elements'
import { Table } from '../components'

export const ContactForm = () => {
  return (
    <div>
    <h3 style={{textAlign:'center', marginTop:'6rem'}}>Envoyez nous un message</h3>
    <ContactWrapper>
    <form method="post" action="https://formspree.io/xwkragwv">
      <label>
        <input type="text" name="name" id="name" placeholder="nom." />
      </label>
      <label>
        <input type="email" name="email" id="email" placeholder="email." />
      </label>
      <label>
        <input type="text" name="téléphone" id="subject" placeholder="téléphone." />
      </label>
      <label>
        <textarea name="message" id="message" rows="5" placeholder="message." />
      </label>
      <button type="submit" id="button"><p>envoyer.</p></button>
    </form>
    </ContactWrapper>
    <h3 style={{textAlign:'center', marginTop:'6rem'}}>Horaires d'ouverture</h3>
    <HoursWrapper>
      <div className='left'>
        <p>Lundi</p>
        <p>Mardi</p>
        <p>Mercredi</p>
        <p>Jeudi</p>
        <p>Vendredi</p>
        <p>Samedi</p>
        <p>Dimanche</p>
      </div>
      <div className='right'>
        <p>9:00 - 18:30</p>
        <p>9:00 - 18:30</p>
        <p>9:00 - 18:30</p>
        <p>9:00 - 18:30</p>
        <p>9:00 - 18:00</p>
        <p>14:00 - 17:00</p>
        <p>Fermé(e)</p>
      </div>
    </HoursWrapper>
    <p style={{textAlign:'center', marginTop:'3rem'}}> Pour plus d’informations, n’hésitez pas à nous contacter pas téléphone au :</p>
    <p style={{textAlign:'center', color:'black', marginTop:'2rem', marginBottom:'6rem'}}>+33 (0) 6 66 51 85 65</p>
    </div>
    )
}
