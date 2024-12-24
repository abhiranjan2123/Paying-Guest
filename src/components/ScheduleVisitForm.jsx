import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ScheduleVisitForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_vxub7sm", "template_067sm2k", form.current, {
        publicKey: "vzRPGh9SgPBFFZzGH",
      })
      .then(
        () => {
          alert("Your visit successfully scheduled!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="flex max-w-4xl m-4 flex-1 flex-col justify-center px-14 py-10 lg:px-8 md:px-28 shadow-md bg-glassy rounded-3xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mb-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Book A Visit
          </h2>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form ref={form} onSubmit={sendEmail} className="space-y-2">
            <div>
              <label
                htmlFor="user_name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="user_name"
                  name="user_name"
                  type="text"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="user_email"
                  name="user_email"
                  type="user_email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="user_phone"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Phone number
              </label>
              <div className="mt-1">
                <input
                  id="user_phone"
                  name="user_phone"
                  type="number"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500  sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="booking_date"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Visit Date and Time
              </label>
              <div className="mt-2">
                <input
                  id="booking_date"
                  name="booking_date"
                  type="datetime-local"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500  sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="user_phone"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Message
              </label>
              <div className="mt-1">
                <input
                  id="message"
                  name="message"
                  type="text"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500  sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                value="Send"
                className="flex w-full justify-center rounded-md bg-secondary mt-10 px-3 py-1.5 text-sm/6 font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 "
              >
                Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ScheduleVisitForm;
