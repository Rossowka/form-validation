import React, { useState, useRef } from 'react';
import styles from './Form.module.scss';

function Form() {
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        bio: '',
        gender: '',
    });

    const [acceptLegal, setAcceptLegal] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const nameErrorRef = useRef(null);
    const emailErrorRef = useRef(null);
    const bioErrorRef = useRef(null);
    const genderErrorRef = useRef(null);
    const legalErrorRef = useRef(null);
    const submitRef = useRef(null);

    const { name, email, bio, gender } = formValue;

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormValue({
            ...formValue,
            [name]: value
        });

        //initial validation
        if (value === '' ) {
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
        if (name) {
            nameErrorRef.current.placeholder = '';
            nameErrorRef.current.style.border = `2px solid ${styles.primaryColor}`;
        } else {
            nameErrorRef.current.placeholder = 'Field required';
            nameErrorRef.current.style.border = `2px solid ${styles.errorColor}`;
        };

        if (email) {
            emailErrorRef.current.placeholder = '';
            emailErrorRef.current.style.border = `2px solid ${styles.primaryColor}`;
        } else {
            emailErrorRef.current.placeholder = 'Field required';
            emailErrorRef.current.style.border = `2px solid ${styles.errorColor}`;
        };

        if (bio) {
            bioErrorRef.current.placeholder = '';
            bioErrorRef.current.style.border = `2px solid ${styles.primaryColor}`;
        } else {
            bioErrorRef.current.placeholder = 'Field required';
            bioErrorRef.current.style.border = `2px solid ${styles.errorColor}`;
        };

        if (gender === '') {
            genderErrorRef.current.textContent = 'Choice required';
        } else {
            genderErrorRef.current.textContent = '';
        };

        if (acceptLegal) {
            legalErrorRef.current.textContent = ''
        } else {
            legalErrorRef.current.textContent = 'Agreeing to T&C is required'
        }

        const formValuesFilled = Object.values(formValue).every(
            value => value
        );

        if (acceptLegal && formValuesFilled) {
            //send data
            console.log(formValue, acceptLegal);
            submitRef.current.textContent = 'Thank you for submitting your data!';
            //clear form
            setFormValue({
                name: '',
                email: '',
                bio: '',
                gender: ''
            });
            setAcceptLegal(false);
            setIsDisabled(true);
        };
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registration Form</h2>
            <div>
                <label htmlFor='name'>Name</label>
                <input 
                    id='name' 
                    type='text' 
                    name='name' 
                    value={name} 
                    onChange={handleChange} 
                    ref={nameErrorRef}
                />
            </div>
            <div>
                <label htmlFor='email'>E-mail</label>
                <input 
                    id='email' 
                    type='text' 
                    name='email' 
                    value={email} 
                    onChange={handleChange} 
                    ref={emailErrorRef}
                />
            </div>
            <div className={styles.bio}>
                <label htmlFor='bio'>About</label>
                <textarea 
                    id='bio' 
                    name='bio' 
                    maxLength={150} 
                    value={bio} 
                    onChange={handleChange}
                    ref={bioErrorRef}
                ></textarea>
                <label htmlFor='bio'>{formValue.bio.length}/150</label>
            </div>
            <div className={styles.genderChoices} onChange={handleChange}>
                <h4>Which most accurately describes you?</h4>
                <div>
                    <input 
                        id='female' 
                        type='radio' 
                        name='gender' 
                        value='female' 
                        checked={gender === 'female'} 
                    />
                    <label htmlFor='female'>Female</label>
                </div>
                <div>
                    <input 
                        id='male' 
                        type='radio' 
                        name='gender' 
                        value='male' 
                        checked={gender === 'male'}
                    />
                    <label htmlFor='male'>Male</label>
                </div>
                <div>
                    <input 
                        id='non-binary' 
                        type='radio' 
                        name='gender' 
                        value='non-binary' 
                        checked={gender === 'non-binary'}
                    />
                    <label htmlFor='non-binary'>Non-binary</label>
                </div>
                <div>
                    <input 
                        id='transgender' 
                        type='radio' 
                        name='gender' 
                        value='transgender' 
                        checked={gender === 'transgender'}
                    />
                    <label htmlFor='transgender'>Transgender</label>
                </div>
                <div>
                    <input 
                        id='intersex' 
                        type='radio' 
                        name='gender' 
                        value='intersex' 
                        checked={gender === 'intersex'}
                    />
                    <label htmlFor='intersex'>Intersex</label>
                </div>
                <div>
                    <input 
                        id='unknown' 
                        type='radio' 
                        name='gender' 
                        value='unknown' 
                        checked={gender === 'unknown'}
                    />
                    <label htmlFor='unknown'>I prefer not to say</label>
                </div>
                <p className={styles.error} ref={genderErrorRef}></p>
            </div>
            <div className={styles.legal}>
                <input id='legal' type='checkbox' checked={acceptLegal} onChange={(e) => setAcceptLegal(e.target.checked)} />
                <span className={styles.checkbox}></span>
                <label htmlFor='legal'>I accept <a href='#'>Terms &amp; Conditions</a></label>
                <p className={styles.error} ref={legalErrorRef}></p>
            </div>
            <div>
                <input type='submit' value='Submit' disabled={isDisabled} className={styles.btn} />
            </div>
            <p className={styles.submit} ref={submitRef}></p>
        </form>
    );
};

export default Form;