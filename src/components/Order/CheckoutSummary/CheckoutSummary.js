import React from 'react';
import Burguer from "../../Burguer/Burguer";
import Button from '../../UI/Button/Button';
import styles from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burguer ingredients={props.ingredients} />
            </div>
            <Button
                click={props.onCheckoutContinued}
                btnType="Success">CONTINUE</Button>
            <Button
                click={props.onCheckoutCancelled}
                btnType="Danger">CANCEL</Button>
        </div>
    )
}

export default CheckoutSummary;
