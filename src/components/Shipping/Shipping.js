import React from 'react';
import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data =>{
        console.log(data)
    } 

    const {user} = useAuth(); 
    return (
        <div className="shipping-form">
            <div >
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} {...register("name")} />

                    <br />
                    <input placeholder="city" {...register("city")} />

                    <br />
                    <input placeholder="address" {...register("address", { required: true })} />
                    <br />
                    {errors.address && <span>This field is required</span>}
                        <br />
                    <input placeholder="phone" {...register("phone", { required: true })} />
                    <br />
                    {errors.phone && <span>This field is required</span>}

                    <br />
                    <input defaultValue={user.email} deplaceholder="email"{...register("email", { required: true })} />
                    <br />
                    {errors.email && <span>This field is required</span>}
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>

    );
};

export default Shipping;