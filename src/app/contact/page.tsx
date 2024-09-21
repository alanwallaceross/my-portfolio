"use client";

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
        {state.message && !state.errors && (
          <div className="text-green-600 mb-4">{state.message}</div>
        )}

        <form action={formAction} className="space-y-4">
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
              defaultValue=""
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
              aria-describedby="name-error"
            />
            <div id="name-error" aria-live="polite" aria-atomic="true">
              {state.errors?.name &&
                state.errors.name.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              defaultValue=""
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
              aria-describedby="email-error"
            />
            <div id="email-error" aria-live="polite" aria-atomic="true">
              {state.errors?.email &&
                state.errors.email.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
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
              aria-describedby="subject-error"
            />
            <div id="subject-error" aria-live="polite" aria-atomic="true">
              {state.errors?.subject &&
                state.errors.subject.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
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
              aria-describedby="message-error"
            ></textarea>
            <div id="message-error" aria-live="polite" aria-atomic="true">
              {state.errors?.message &&
                state.errors.message.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>

          {state.errors && (
            <div className="text-red-600 mb-4">
              {Object.entries(state.errors).map(([field, error]) =>
                error ? <p key={field}>{error}</p> : null
              )}
            </div>
          )}

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
