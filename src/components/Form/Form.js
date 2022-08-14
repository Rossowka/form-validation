import React from 'react';
import './styles.scss';

function Form() {

    return (
        <form>
            <h2>Registration Form</h2>
            <div>
                <label htmlFor='name'>Name</label>
                <input id='name' type='text' />
            </div>
            <div>
                <label htmlFor='email'>E-mail</label>
                <input id='email' type='text' />
            </div>
            <div>
                <label htmlFor='about'>About</label>
                <textarea id='about'></textarea>
            </div>
            <h4>Which most accurately describes you?</h4>
            <div>
                <div>
                    <input id='female' type='radio' />
                    <label htmlFor='female'>Female</label>
                </div>
                <div>
                    <input id='male' type='radio' />
                    <label htmlFor='male'>Male</label>
                </div>
                <div>
                    <input id='non-binary' type='radio' />
                    <label htmlFor='non-binary'>Non-binary</label>
                </div>
                <div>
                    <input id='transgender' type='radio' />
                    <label htmlFor='transgender'>Transgender</label>
                </div>
                <div>
                    <input id='intersex' type='radio' />
                    <label htmlFor='intersex'>Intersex</label>
                </div>
                <div>
                    <input id='unknown' type='radio' />
                    <label htmlFor='unknown'>I prefer not to say</label>
                </div>
            </div>
            <div>
                <input id='legal' type='checkbox' />
                <label htmlFor='legal'>I accept <a href='#'>Terms &amp; Conditions</a></label>
            </div>
            <div>
                <input type='submit' value='Send' />
            </div>
        </form>
    );
};

export default Form;