"use client"; // Required for Client Components that use hooks

import { useActionState } from "react";
import { handleContactForm, State } from "../lib/actions";

export default function Contact() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(handleContactForm, initialState);

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center py-12">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg w-full max-w-lg p-8">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-6">
          Contact Me
        </h1>

        {/* Display validation errors */}
        {state.errors && (
          <div className="text-red-600 mb-4">
            {Object.entries(state.errors).map(([field, error]) =>
              error ? (
                <p key={field}>
                  {field}: {error}
                </p>
              ) : null
            )}
          </div>
        )}

        {/* Display success message */}
        {state.message && !state.errors && (
          <div className="text-green-600 mb-4">{state.message}</div>
        )}

        {/* Use native form submission and set action to formAction */}
        <form action={formAction} className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Subject Field */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
