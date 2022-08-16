import React from 'react';
import styles from './Form.module.scss';

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
            <div className={styles.bio}>
                <label htmlFor='bio'>About</label>
                <textarea id='bio'></textarea>
                <label htmlFor='bio'>0/150</label>
            </div>
            <div className={styles.genderChoices}>
            <h4>Which most accurately describes you?</h4>
                <div>
                    <input id='female' type='radio' name="select" />
                    <label htmlFor='female'>Female</label>
                </div>
                <div>
                    <input id='male' type='radio' name="select" />
                    <label htmlFor='male'>Male</label>
                </div>
                <div>
                    <input id='non-binary' type='radio' name="select" />
                    <label htmlFor='non-binary'>Non-binary</label>
                </div>
                <div>
                    <input id='transgender' type='radio' name="select" />
                    <label htmlFor='transgender'>Transgender</label>
                </div>
                <div>
                    <input id='intersex' type='radio' name="select" />
                    <label htmlFor='intersex'>Intersex</label>
                </div>
                <div>
                    <input id='unknown' type='radio' name="select" />
                    <label htmlFor='unknown'>I prefer not to say</label>
                </div>
            </div>
            <div className={styles.legal}>
                <input id='legal' type='checkbox' />
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