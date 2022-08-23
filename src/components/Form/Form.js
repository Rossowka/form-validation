import React, { useState } from 'react';
import styles from './Form.module.scss';

function Form() {
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        bio: '',
        gender: '',
    });

    const [acceptLegal, setAcceptLegal] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormValue({
            ...formValue,
            [name]: value
        });

        //initial validation
        const letterCount = value.length;
        if (letterCount === 0 ) {
            e.target.placeholder = 'Field required';
            e.target.style.border = `2px solid ${styles.errorColor}`;
        } else {
            e.target.placeholder = '';
            e.target.style.border = `2px solid ${styles.primaryColor}`;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //validation
        
        //send data
        console.log(formValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registration Form</h2>
            <div>
                <label htmlFor='name'>Name</label>
                <input id='name' type='text' name='name' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='email'>E-mail</label>
                <input id='email' type='text' name='email' onChange={handleChange} />
            </div>
            <div className={styles.bio}>
                <label htmlFor='bio'>About</label>
                <textarea id='bio' name='bio' onChange={handleChange}></textarea>
                <label htmlFor='bio'>0/150</label>
            </div>
            <div className={styles.genderChoices} onChange={handleChange}>
            <h4>Which most accurately describes you?</h4>
                <div>
                    <input id='female' type='radio' name="gender" value='female' />
                    <label htmlFor='female'>Female</label>
                </div>
                <div>
                    <input id='male' type='radio' name="gender" value='male' />
                    <label htmlFor='male'>Male</label>
                </div>
                <div>
                    <input id='non-binary' type='radio' name="gender" value='non-binary' />
                    <label htmlFor='non-binary'>Non-binary</label>
                </div>
                <div>
                    <input id='transgender' type='radio' name="gender" value='transgender' />
                    <label htmlFor='transgender'>Transgender</label>
                </div>
                <div>
                    <input id='intersex' type='radio' name="gender" value='intersex' />
                    <label htmlFor='intersex'>Intersex</label>
                </div>
                <div>
                    <input id='unknown' type='radio' name="gender" value='unknown' />
                    <label htmlFor='unknown'>I prefer not to say</label>
                </div>
            </div>
            <div className={styles.legal}>
                <input id='legal' type='checkbox' onChange={(e) => setAcceptLegal(e.target.checked)} />
                <span className={styles.checkbox}></span>
                <label htmlFor='legal'>I accept <a href='#'>Terms &amp; Conditions</a></label>
            </div>
            <div>
                <input type='submit' value='Submit' className={styles.btn} />
            </div>
        </form>
    );
};

export default Form;