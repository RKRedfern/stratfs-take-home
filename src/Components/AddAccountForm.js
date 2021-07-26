import React, { useState } from 'react';

const AddAccountForm = (props) => {

    const defaultState = {creditorName: "", firstName: "", lastName: "", minPaymentPercentage: "", balance: ""}
    const [formInput, setFormInput] = useState(defaultState)

    const submitHandler = (e) => {
        e.preventDefault()
        props.addAccount(formInput)
        setFormInput(defaultState)
    }

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormInput({...formInput, [name]: value})
    }

    return(
        <>
            <form className="add-account-form" onSubmit={submitHandler}>
            <h3> Add Another Account </h3>
            <input type="text" name="creditorName" placeholder="Creditor Name" className="input-text" onChange={changeHandler}/>
            <br/>
            <input type="text" name="firstName" placeholder="First Name" className="input-text" onChange={changeHandler}/>
            <br/>
            <input type="text" name="firstName" placeholder="First Name" className="input-text" onChange={changeHandler}/>
            <br/>
            <input type="text" name="lastName" placeholder="Last Name" className="input-text" onChange={changeHandler}/>
            <br/>
            <input type="text" name="minPaymentPercentage" placeholder="%" className="input-text" onChange={changeHandler}/>
            <br/>
            <input type="text" name="balance" placeholder="Balance" className="input-text" onChange={changeHandler}/>
            <br/>
            <input type="submit" name="submit" value="Create Account" className="submit"/>
            </form>
        </>
    )
}

export default AddAccountForm;