'use client';

import axios from "axios";
import { AiFillGithub, AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
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
import toast from "react-hot-toast";
import FooterButton from "./FooterButton";
// import Button from "../Button";

const RegisterModal = () => {

    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);
    // const [showPassword, setShowPassword] = useState(false);

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
                toast.error('Something went wrong.');
            }).finally(() => {
                setIsLoading(false);
            })
    }

    // const password = (
    //     <div>            
    //     </div>
    // )

    const bodyContent = (
        <div className="flex flex-col gap-2 -mt-4">
            <Heading title="Welcome to KingHotel"
                subtitle="Create an account!"
                center
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
                type='password'
                disabled={isLoading}
                register={register}
                required
                errors={errors}
            />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col justify-center items-center gap-4 mt-2">
            <hr className=""/>
            <div className="flex items-center justify-center w-full gap-6">
                <FooterButton
                    icon={FcGoogle}
                    onClick={() => { }}
                    lable="Google"
                />
                <FooterButton
                    icon={FaGithub}
                    onClick={() => { }}
                    lable="GitHub"
                />
            </div>
            <div className="text-neutral-500 text-center mt-2 font-light">
                <div className="justify-center flex flex-row items-center gap-3">
                    <div>
                        Already have an account?
                    </div>
                    <div className="text-neutral-800 cursor-pointer hover:underline"
                    onClick={registerModal.onClose}>
                        LogIn
                    </div>
                </div>
            </div>
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
            footer={footerContent}
        />
    )
}

export default RegisterModal