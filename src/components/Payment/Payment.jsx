import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Typewriter from "./Typewriter";

export default function Payment() {
  return (
    <>
      <Header />
      <Hero />
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <Typewriter />
        <div className="px-4 mx-auto sm:px-4 lg:px-8 max-w-[90rem]">
          <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
            <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
              <li className="flex items-center gap-2 bg-white p-2">
                <span className="size-6 rounded-full bg-lime-500 text-center text-[10px]/6 font-bold text-white">
                  {" "}
                  1{" "}
                </span>

                <span className=" sm:block"> stadium </span>
              </li>

              <li className="flex items-center gap-2 bg-white p-2">
                <span className="size-6 rounded-full bg-lime-500 text-center text-[10px]/6 font-bold text-white">
                  2
                </span>

                <span className=" sm:block"> product </span>
              </li>

              <li className="flex items-center gap-2 bg-white p-2">
                <span className="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold border-2 border-limegreen">
                  {" "}
                  3{" "}
                </span>

                <span className=" sm:block"> Payment </span>
              </li>
            </ol>
          </div>
        </div>

        <section className="bg-gray-950 py-8 px-4 mx-auto sm:px-4 lg:px-8 max-w-[90rem] mt-10 rounded-lg">
          <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            {/* <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
      <li className="after:border-1 flex items-center text-third-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-third-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
        <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
          <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Cart
        </span>
      </li>
      <li className="after:border-1 flex items-center text-third-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-third-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
        <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
          <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Checkout
        </span>
      </li>
      <li className="flex shrink-0 items-center">
        <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        Order summary
      </li>
    </ol> */}
            <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
              <div className="min-w-0 flex-1 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Payment Details
                  </h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="your_name"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        Your name{" "}
                      </label>
                      <input
                        type="text"
                        id="your_name"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-third-500 focus:ring-third-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-third-500 dark:focus:ring-third-500"
                        placeholder="Bonnie Green"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="your_email"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        Your email*{" "}
                      </label>
                      <input
                        type="email"
                        id="your_email"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-third-500 focus:ring-third-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-third-500 dark:focus:ring-third-500"
                        placeholder="name@flowbite.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone-input-3"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        Phone Number*{" "}
                      </label>
                      <div className="flex items-center">
                        <div className="relative w-full">
                          <input
                            type="text"
                            id="phone-input"
                            className="z-20 block w-full rounded-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-third-500 focus:ring-third-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-third-500"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="123-456-7890"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="vat_number"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        ID card{" "}
                      </label>
                      <input
                        type="text"
                        id="vat_number"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-third-500 focus:ring-third-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-third-500 dark:focus:ring-third-500"
                        placeholder="DE42313253"
                        required
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-third-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      >
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 12h14m-7 7V5"
                          />
                        </svg>
                        Upload Your Slip Here
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Payment
                  </h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="credit-card"
                            aria-describedby="credit-card-text"
                            type="radio"
                            name="payment-method"
                            defaultValue
                            className="h-4 w-4 border-gray-300 bg-white text-third-600 focus:ring-2 focus:ring-third-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-third-600"
                            defaultChecked
                          />
                        </div>
                        <div className="ms-4 text-sm">
                          <label
                            htmlFor="credit-card"
                            className="font-medium leading-none text-gray-900 dark:text-white"
                          >
                            {" "}
                            QR Code{" "}
                          </label>
                          <p
                            id="credit-card-text"
                            className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                          >
                            Pay with QR Code
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="paypal-2"
                            aria-describedby="paypal-text"
                            type="radio"
                            name="payment-method"
                            defaultValue
                            className="h-4 w-4 border-gray-300 bg-white text-third-600 focus:ring-2 focus:ring-third-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-third-600"
                          />
                        </div>
                        <div className="ms-4 text-sm">
                          <label
                            htmlFor="paypal-2"
                            className="font-medium leading-none text-gray-900 dark:text-white"
                          >
                            {" "}
                            Paypal account{" "}
                          </label>
                          <p
                            id="paypal-text"
                            className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                          >
                            Connect to your account
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


                
             

              <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                <div className="mx-auto max-w-3xl">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                    Order summary
                  </h2>
                  <div className="mt-6 space-y-4 border-b border-t border-gray-200 py-8 dark:border-gray-700 sm:mt-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Billing &amp; Information
                    </h4>
                    <dl>
                      <dt className="text-base font-medium text-gray-900 dark:text-white">
                        รายละเอียดการจอง
                      </dt>
                      <dd className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                        สนามคิดตี้ จำนวน 12 คน, เวลา 3 ชั่วโมง,
                        12.00.น - 15.00.น, Scott Street
                      </dd>
                    </dl>
                  </div>
                  
                  <div className="mt-6 sm:mt-8">
                    <div className="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
                      <table className="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                          <tr>
                            <td className="whitespace-nowrap py-4 md:w-[290px]">
                              <div className="flex items-center gap-4">
                                <a
                                  href="#"
                                  className="flex items-center aspect-square w-10 h-10 shrink-0"
                                >
                                  <img
                                    className="h-auto w-full max-h-full dark:hidden"
                                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                                    alt="imac image"
                                  />
                                  <img
                                    className="hidden h-auto w-full max-h-full dark:block"
                                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                                    alt="imac image"
                                  />
                                </a>
                                <a href="#" className="hover:underline">
                                 รองเท้า
                                </a>
                              </div>
                            </td>
                            <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                              x1
                            </td>
                            <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                              $1,499
                            </td>
                          </tr>
                           
                          <tr>
                            <td className="whitespace-nowrap py-4 md:w-[384px]">
                              <div className="flex items-center gap-4">
                                <a
                                  href="#"
                                  className="flex items-center aspect-square w-10 h-10 shrink-0"
                                >
                                  <img
                                    className="h-auto w-full max-h-full dark:hidden"
                                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg"
                                    alt="macbook image"
                                  />
                                  <img
                                    className="hidden h-auto w-full max-h-full dark:block"
                                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg"
                                    alt="macbook image"
                                  />
                                </a>
                                <a href="#" className="hover:underline">
                                 ถุงมือ
                                </a>
                              </div>
                            </td>
                            <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                              x1
                            </td>
                            <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                              $499
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 md:w-[384px]">
                              <div className="flex items-center gap-4">
                                <a
                                  href="#"
                                  className="flex items-center aspect-square w-10 h-10 shrink-0"
                                >
                                  <img
                                    className="h-auto w-full max-h-full dark:hidden"
                                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg"
                                    alt="watch image"
                                  />
                                  <img
                                    className="hidden h-auto w-full max-h-full dark:block"
                                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg"
                                    alt="watch image"
                                  />
                                </a>
                                <a href="#" className="hover:underline">
                                 กางเกง
                                </a>
                              </div>
                            </td>
                            <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                              x2
                            </td>
                            <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                              $799
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="flow-root">
                  <div className=" divide-y divide-gray-200">
                  <dl className="flex items-center justify-between gap-4 py-3 ">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-100">
                      </dt>

                    </dl>
                    <dl className="flex items-center justify-between gap-4 py-3 ">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Product
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        $800.00
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Staduim
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        $99
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-base font-bold  text-white">Total</dt>
                      <dd className="text-base font-bold text-white ">
                        $899.00
                      </dd>
                    </dl>
                  </div>
                </div>
                <div className="space-y-3">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-lg bg-limegreen px-5 py-2.5 text-sm font-medium text-black hover:bg-gray-700  hover:text-white"
                  >
                    Proceed to Payment
                  </button>
                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    One or more items in your cart require an account.{" "}
                    <a
                      href="#"
                      title
                      className="font-medium text-limegreen underline hover:no-underline"
                    >
                      Sign in or create an account now.
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </form>
        </section>
        <div className=" flex  justify-around mt-10">
          <a
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-900 hover:text-white"
            rel="prev"
            href="/"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
            </svg>{" "}
            &nbsp; Previous
          </a>
          <a
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-900 hover:text-white"
            rel="prev"
            href="/"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 576 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
            </svg>{" "}
            &nbsp; Home
          </a>
          <a
            className="relative inline-flex items-center cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-900 hover:text-white"
            rel="next"
            href="#"
          >
            Confirm &nbsp;{" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
