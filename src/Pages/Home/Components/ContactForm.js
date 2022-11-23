import React from 'react'

const ContactForm = () => {
  return (
    <div className="contactform-container">
        <div className="heading-container">
            <div className="background-container"></div>
            <div className='heading-content flex-col space-between'>
                <div className='heading flex-col'>
                    <h2>Masz pytania?</h2>
                    <h2 className='bold'>Skontaktuj się ze mną!</h2>
                </div>
                <div className='icons flex-row'>
                    <p>I</p>
                    <p>I</p>
                    <p>I</p>
                    <p>I</p>
                </div>
            </div>
        </div>
        <div className='form-container'>
            <form className='flex-col'>
                <div className='flex-col textinputs-container'>
                    <div className="flex-row space-between">
                        <div className='flex-col'>
                            <label for='Fname'>Imię:</label>
                            <input name='Fname' type='text'></input>
                        </div>
                        <div className='flex-col'>
                            <label for='mail'>Adres e-mail:</label>
                            <input name='mail' type='text'></input>
                        </div>
                    </div>
                    <div className="flex-row space-between">
                        <div className="flex-col">
                            <label for='phonenumber'>Numer telefonu:</label>
                            <input name='phonenumber' type='text'></input>
                        </div>
                        <div className='flex-col'>
                            <label for='topic'>Temat wiadomości:</label>
                            <input name='topic' type='text'></input>
                        </div>
                    </div>
                </div>
                <div>
                    <textarea></textarea>
                </div>
                <input type="submit"></input>
            </form>
        </div>
    </div>
  )
}

export default ContactForm