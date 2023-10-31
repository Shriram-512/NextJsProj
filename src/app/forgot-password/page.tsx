'use client';
import { sendPasswordResetEmail } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../firebase'
import { useRouter } from 'next/navigation'

export default function Forgotpassword() {

    const [email, setEmail] = useState('')
    const router = useRouter()

    const resetEmail = () => {
        sendPasswordResetEmail(auth, email)
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Forgot Password
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={() => resetEmail()}
                                disabled={!email}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Send Forgot password email
                            </button>
                        </div>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Click here?{' '}
                            <button onClick={() => router.push('signin')} className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
                                Sign in
                            </button>
                        </p>

                    </form>
                </div>
            </div>
        </>
    )
}