'use client';

import axios from "axios";
import { AiFillGithub, AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import {
    FieldValues,
    SubmitHandler,
    useForm,
} from 'react-hook-form';

import useRegisterModal from "@/app/Hooks/useRegisterModal";
import Models from "./Models";
import Heading from "../Heading";
import Inputs from "../inputs/Inputs";

const RegisterModal = () => {

    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: {
        errors,
    } } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios.post('/api/register', data)
            .then(() => {
                registerModal.onClose();
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                setIsLoading(false);
            })
    }

    const password = (
        <div>
            
            
        </div>
    )
    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title="Welcome to KingHotel"
                subtitle="Create an account!"
                 />
            {/* <input type="text" /> */}
            <Inputs
                id="Name"
                label="Name"
                type="text"
                disabled={isLoading}
                register={register}
                required
                errors={errors}
            />
            <Inputs
                id="email"
                label="Email"
                type='email'
                disabled={isLoading}
                register={register}
                required
                errors={errors}
            />
            <Inputs
                id="password"
                label="Password"
                type={''}
                disabled={isLoading}
                register={register}
                required
                errors={errors}
            />
        </div>
    )
    return (
        <Models disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Register"
            actionLabel="Continue"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
        />
    )
}

export default RegisterModal