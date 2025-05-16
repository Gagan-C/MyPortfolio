'use client'
import React from "react";
import { sendMessage } from "./sendMessage";

function ContactMe() {
    
    const OK="OK";
    const ERROR="ERROR";
    const NA="NA";
    const [status, setStatus] = React.useState<string | null>(NA);
    const [error, setError] = React.useState<string | null>(null);

    async function handleSubmit(formData: FormData) {
        const result = await sendMessage(formData);
        if (result?.error) {
            setStatus(ERROR);
            setError(result.error);
        } else {
            setStatus(OK);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md p-8">
                <h1 className="text-2xl font-bold mb-6 text-center">Contact Me</h1>
                <form action={handleSubmit} className="space-y-4">
                    <label className="block">
                        <span className="block mb-1">Name</span>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
                        />
                    </label>
                    <label className="block">
                        <span className="block mb-1">Email</span>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
                        />
                    </label>
                    <label className="block">
                        <span className="block mb-1">Phone Number</span>
                        <input
                            type="tel"
                            name="phone"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
                        />
                    </label>
                    <label className="block">
                        <span className="block mb-1">Message</span>
                        <textarea
                            name="message"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
                            rows={4}
                        />
                    </label>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Send
                    </button>
                </form>
                {(status === "OK" || status === "ERROR") && (
                    <div className={`mt-4 px-4 py-2 rounded-md text-center ${status === "OK" ? "bg-green-100 text-green-800 border border-green-600" : "bg-red-100 text-red-800 border border-red-600"} flex items-center justify-between`}>
                        <span>
                            {status === "OK" ? "Thank you contacting me" : `Error: ${error}`}
                        </span>
                        <button
                            className="ml-4 text-xl font-bold hover:underline"
                            aria-label="Close"
                            onClick={() => {
                                setStatus("NA");
                                setError(null);
                            }}
                            type="button"
                        >
                            ×
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ContactMe;
