import React, { useState } from "react";

const Forms = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: ""
    });

    const [formError, setFormError] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        const errors = validate(formData);
        setFormError(errors);

        if (Object.keys(errors).length === 0) {
            setIsSubmitted(true);
        } else {
            setIsSubmitted(false);
        }
    };

    const validate = (data) => {
        const errors = {};
        if (data.firstname.trim() === "") {
            errors.firstname = "Please enter the firstname";
        }
        if (data.lastname.trim() === "") {
            errors.lastname = "Please enter the lastname";
        }
        if (data.email.trim() === "") {
            errors.email = "Please enter the email";
        }
        if (data.phoneNumber.trim() === "" || data.phoneNumber.trim().length < 10) {
            errors.phoneNumber = "Please enter a valid phone number";
        }
        return errors;
    };

    return (
        <>
            <div className="form-parent">
                <form onSubmit={formSubmit}>
                    <div>
                        {isSubmitted && <p id="success_msg">Registration Successful!</p>}
                    </div>
                    <label htmlFor="firstname">Enter first name</label>
                    <input
                        type="text"
                        name="firstname"
                        placeholder="first name"
                        onChange={handleInput}
                    />
                    {formError.firstname && <p>{formError.firstname}</p>}

                    <label htmlFor="lastname">Enter last name</label>
                    <input
                        type="text"
                        name="lastname"
                        placeholder="last name"
                        onChange={handleInput}
                    />
                    {formError.lastname && <p>{formError.lastname}</p>}

                    <label htmlFor="email">Enter email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange={handleInput}
                    />
                    {formError.email && <p>{formError.email}</p>}

                    <label htmlFor="phoneNumber">Enter phone number</label>
                    <input
                        type="number"
                        name="phoneNumber"
                        placeholder="phone number"
                        onChange={handleInput}
                    />
                    {formError.phoneNumber && <p>{formError.phoneNumber}</p>}

                    <input type="submit" id="register" value={"Register"} />
                </form>
            </div>
        </>
    );
};

export default Forms;
