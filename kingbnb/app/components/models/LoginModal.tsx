'use client';

import { signIn } from 'next-auth/react';
import useLoginModal from '@/app/Hooks/userLoginModal';
import {
    FieldValues,
    SubmitHandler,
    useForm,
} from 'react-hook-form';
import Models from "./Models";
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa6";
import toast from 'react-hot-toast';
import axios from 'axios';
import Heading from '../Heading';
import Inputs from '../inputs/Inputs';
import FooterButton from './FooterButton';

const LoginModal = () => {

    const [isLoading, setIsLoading] = useState(false);
    const loginModal = useLoginModal();



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

        signIn('credentials',{
            ...data,
            redirect:false,
        })
    }


    const bodyContent = (
        <div className="flex flex-col gap-2 -mt-4">
            <Heading title="Welcome Back👑"
                subtitle="Login to Your Account"
                center
            />
            {/* <input type="text" /> */}
            {/* <Inputs
            id="Name"
            label="Name"
            type="text"
            disabled={isLoading}
            register={register}
            required
            errors={errors}
        /> */}
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
            <hr className="" />
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
                <FooterButton
                    icon={FaFacebook}
                    onClick={() => { }}
                    lable={'FaceBook'}
                />
            </div>
            <div className="text-neutral-500 text-center mt-2 font-light">
                <div className="justify-center flex flex-row items-center gap-3">
                    <div>
                        Don't having an Account?
                    </div>
                    <div className="text-neutral-800 cursor-pointer hover:underline"
                        onClick={loginModal.onClose}>
                        SignUp
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <Models disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Log In"
            actionLabel="Login"
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default LoginModal