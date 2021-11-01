import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './NewService.css'

const NewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://murmuring-eyrie-31936.herokuapp.com/services', data)

            .then(res => {
                if (res.data.insertedId);

                alert("insert successfully");
                reset();

            })
    };
    return (
        <div>
            <div className='services '>
                <h1 className=' text-primary'>Add Service</h1>
                <div className=' mt-5'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='' {...register("name", { required: true, maxLength: 20 })} placeholder='Name' /><br /><br />
                        <textarea className=' ' {...register("description", { maxLength: 500 })} placeholder='description' /><br /><br />

                        <input className='' type="number" {...register("price")} placeholder='price' /><br /> <br />
                        <input className='' {...register("img")} placeholder='img url' /><br /><br />
                        <input className='submited-btn px-3 py-2' type="submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default NewService;