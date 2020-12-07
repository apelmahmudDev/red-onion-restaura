import React from 'react';
import { useForm } from 'react-hook-form';

const CustomerForm = () => {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => console.log(data);
	return (
        <>
            <h4>Edit Delivery details</h4>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input name="name" ref={register({ required: true })} placeholder="Your name" className="form-control"/>
                    {errors.name && <span className="text-danger">Your name is required</span>}
                </div>
                <div className="form-group">
                    <input name="email" ref={register({ required: true })} placeholder="Your email" className="form-control"/>
                    {errors.email && <span className="text-danger">Your email is required</span>}
                </div>
                <div className="form-group">
                    <input name="phone" ref={register({ required: true })} placeholder="Your phone number" className="form-control"/>
                    {errors.phone && <span className="text-danger">Your number is required</span>}
                </div>
                <div className="form-group">
                    <textarea rows="3" name="address_details" ref={register({ required: true })} placeholder="Your address details" className="form-control"/>
                    {errors.address && <span className="text-danger">Address details is required</span>}
                </div>
                <button type="submit" className="btn btn-danger" style={{width:'100%'}}>Save & Continue</button>
            </form>
        </>
	);
};

export default CustomerForm;
