import React from 'react';
import { useForm } from "react-hook-form";
import './Shipping.css'
import useAuth from '../../Context/UseAuth'

const Shipping = () => {
    const { user } = useAuth()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => { console.log(data) };
    return (
        <div >
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />

                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone" defaultValue="" {...register("phone")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;