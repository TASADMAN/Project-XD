import React, { useState, useEffect, useRef } from "react";
import Hero from "../Ecommerce/Hero";
import Header from "./Header";
import Footer from "./Footer";

export default function Calendar() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const calendarRef = useRef(null);
  const currentMonthRef = useRef(null);
  const modalRef = useRef(null);
  const modalDateRef = useRef(null);

  useEffect(() => {
    generateCalendar(currentYear, currentMonth);
  }, [currentYear, currentMonth]);

  function generateCalendar(year, month) {
    const calendarElement = calendarRef.current;
    const currentMonthElement = currentMonthRef.current;

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    calendarElement.innerHTML = "";

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    currentMonthElement.innerText = `${monthNames[month]} ${year}`;

    const firstDayOfWeek = firstDayOfMonth.getDay();
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    daysOfWeek.forEach((day) => {
      const dayElement = document.createElement("div");
      dayElement.className = "text-center font-semibold ";
      dayElement.innerText = day;
      calendarElement.appendChild(dayElement);
    });

    for (let i = 0; i < firstDayOfWeek; i++) {
      const emptyDayElement = document.createElement("div");
      calendarElement.appendChild(emptyDayElement);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayElement = document.createElement("button");
      dayElement.className =
        "text-center font-semibold lg:p-6  p-4 hover:bg-limegreen hover:text-white border cursor-pointer rounded-lg";
      dayElement.innerText = day;

      const currentDate = new Date();
      if (
        year === currentDate.getFullYear() &&
        month === currentDate.getMonth() &&
        day === currentDate.getDate()
      ) {
        dayElement.classList.add("bg-gray-900", "text-white");
      }

      dayElement.addEventListener("click", () => {
        const selectedDate = new Date(year, month, day);
        const options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        const formattedDate = selectedDate.toLocaleDateString(
          undefined,
          options
        );
        showModal(formattedDate);
      });

      calendarElement.appendChild(dayElement);
    }
  }

  function showModal(selectedDate) {
    const modal = modalRef.current;
    const modalDateElement = modalDateRef.current;
    modalDateElement.innerText = selectedDate;
    modal.classList.remove("hidden");
  }

  function hideModal() {
    const modal = modalRef.current;
    modal.classList.add("hidden");
  }

  return (
    <>
      <Header />
      <Hero />
      <section className=" bg-white sm:py-16  ">
        <div className=" mx-auto  lg:px-8 max-w-[90rem]">
          <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
            <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
              <li className="flex items-center gap-2 bg-white p-2">
                <span className="size-6 rounded-full bg-lime-500 text-center text-[10px]/6 font-bold text-white">
                  {" "}
                  1{" "}
                </span>

                <span className=" sm:block"> stadium </span>
              </li>

              <li className="flex items-center gap-2 bg-white p-2 ">
                <span className="size-6 rounded-full  bg-gray-100  text-center text-[10px]/6 font-bold text-gray-500  border-2 border-limegreen">
                  {" "}
                  2{" "}
                </span>

                <span className=" sm:block"> product </span>
              </li>

              <li className="flex items-center gap-2 bg-white p-2">
                <span className="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold">
                  {" "}
                  3{" "}
                </span>

                <span className=" sm:block"> Payment </span>
              </li>
            </ol>
          </div>
          <div className="bg-white flex items-center justify-center m-auto mb-4 mt-4">
            <div className="lg:w-full md:w-full sm:w-full mx-auto lg:p-4  p-1">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-gray-900">
                  <button
                    className="text-white"
                    onClick={() => {
                      setCurrentMonth(currentMonth - 1);
                      if (currentMonth < 0) {
                        setCurrentMonth(11);
                        setCurrentYear(currentYear - 1);
                      }
                    }}
                  >
                    Previous
                  </button>
                  <h2 className="text-white" ref={currentMonthRef}></h2>
                  <button
                    className="text-white"
                    onClick={() => {
                      setCurrentMonth(currentMonth + 1);
                      if (currentMonth > 11) {
                        setCurrentMonth(0);
                        setCurrentYear(currentYear + 1);
                      }
                    }}
                  >
                    Next
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1 p-4 " ref={calendarRef}>
                  {/* Calendar Days Go Here */}
                </div>

                <div
                  ref={modalRef}
                  className="modal  flex hidden fixed inset-0 items-center justify-center z-50"
                >
                  <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
                  <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                    <div className="modal-content py-3 text-center px-11">
                      <div className="flex justify-between items-center pb-3">
                        <p className="text-2xl font-bold">Selected Your Time</p>
                        <button
                          className="modal-close px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring"
                          onClick={hideModal}
                        >
                          ✕
                        </button>
                      </div>
                      <div
                        className="text-xl font-semibold  text-center"
                        ref={modalDateRef}
                      ></div>
                      <div className=" modal-content py-5 text-center px-6 border-gray-900 flex sm:flex-row flex-col justify-between ">
                        <div className="sm:ms-7 sm:ps-5  border-gray-800 w-full sm:max-w-[15rem] mt-5 sm:mt-0">
                          {/* <h3 className=" text-white text-base font-medium mb-3 text-center">
                            Wednesday 30 June 2024
                          </h3> */}
                          <button
                            type="button"
                            data-collapse-toggle="timetable"
                            className=" inline-flex items-center w-full py-2 px-5 me-2 justify-center text-sm font-medium  focus:outline-none  rounded-lg border border-gray-200 bg-gray-800 text-white dark:border-gray-600 dark:hover:text-whitehover:bg-gray-700"
                          >
                            <svg
                              className="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 320 512"
                              fill="white"

                            >
                              <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm32 128.1L144 304l32 0 0-127.9c-.7 0-1.5-.1-2.3-.1l-27.5 0c-.8 0-1.5 0-2.3 .1zM144 352l0 136c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-264.4L52.9 299.8c-6.5 11.5-21.2 15.6-32.7 9.1s-15.6-21.2-9.1-32.7L69.7 172.7c15.6-27.6 44.9-44.7 76.6-44.7l27.5 0c31.7 0 61 17.1 76.6 44.7l58.5 103.5c6.5 11.5 2.5 26.2-9.1 32.7s-26.2 2.5-32.7-9.1L224 223.6 224 488c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-136-32 0z" />
                            </svg>
                            <span className="me-3 ms-2 text-white">15</span>
                             คน
                          </button>
                          <label className="sr-only">Pick a time</label>
                          <ul
                            id="timetable"
                            className="grid w-full grid-cols-2 gap-2 mt-5"
                          >
                            <li>
                              <input
                                type="radio"
                                id="10-am"
                                value=""
                                className="hidden peer"
                                name="timetable"
                              />
                              <label
                                htmlFor="10-am"
                                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center  border rounded-lg cursor-pointer text-white  hover:text-black hover:bg-limegreen bg-gray-900  "
                              >
                                10:00 AM
                              </label>
                            </li>
                            <li>
                              <input
                                type="radio"
                                id="10-30-am"
                                value=""
                                className="hidden peer"
                                name="timetable"
                              />
                              <label
                                htmlFor="10-30-am"
                                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center  border rounded-lg cursor-pointer text-white  hover:text-black hover:bg-limegreen bg-gray-900  "
                              >
                                10:30 AM
                              </label>
                            </li>
                            <li>
                              <input
                                type="radio"
                                id="11-am"
                                value=""
                                className="hidden peer"
                                name="timetable"
                              />
                              <label
                                htmlFor="11-am"
                                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center  border rounded-lg cursor-pointer text-white  hover:text-black hover:bg-limegreen bg-gray-900  "
                              >
                                11:00 AM
                              </label>
                            </li>
                            <li>
                              <input
                                type="radio"
                                id="11-30-am"
                                value=""
                                className="hidden peer"
                                name="timetable"
                              />
                              <label
                                htmlFor="11-30-am"
                                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center  border rounded-lg cursor-pointer text-white  hover:text-black hover:bg-limegreen bg-gray-900  "
                              >
                                11:30 AM
                              </label>
                            </li>
                            <li>
                              <input
                                type="radio"
                                id="12-am"
                                value=""
                                className="hidden peer"
                                name="timetable"
                                defaultChecked
                              />
                              <label
                                htmlFor="12-am"
                                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center  border rounded-lg cursor-pointer text-white  hover:text-black hover:bg-limegreen bg-gray-900  "
                              >
                                12:00 AM
                              </label>
                            </li>
                            <li>
                              <input
                                type="radio"
                                id="12-30-pm"
                                value=""
                                className="hidden peer"
                                name="timetable"
                              />
                              <label
                                htmlFor="12-30-pm"
                                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center  border rounded-lg cursor-pointer text-white  hover:text-black hover:bg-limegreen bg-gray-900  "
                              >
                                12:30 PM
                              </label>
                            </li>
                            <li>
                              <input
                                type="radio"
                                id="1-pm"
                                value=""
                                className="hidden peer"
                                name="timetable"
                              />
                              <label
                                htmlFor="1-pm"
                                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center  border rounded-lg cursor-pointer text-white  hover:text-black hover:bg-limegreen bg-gray-900  "
                              >
                                01:00 PM
                              </label>
                            </li>
                            <li>
                              <input
                                type="radio"
                                id="1-30-pm"
                                value=""
                                className="hidden peer"
                                name="timetable"
                              />
                              <label
                                htmlFor="1-30-pm"
                                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center  border rounded-lg cursor-pointer text-white  hover:text-black hover:bg-limegreen bg-gray-900  "
                              >
                                01:30 PM
                              </label>
                            </li>
                            <li>
                              <input
                                type="radio"
                                id="2-pm"
                                value=""
                                className="hidden peer"
                                name="timetable"
                              />
                              <label
                                htmlFor="2-pm"
                                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center  border rounded-lg cursor-pointer text-white  hover:text-black hover:bg-limegreen bg-gray-900  "
                              >
                                02:00 PM
                              </label>
                            </li>
                            <li>
                              <input
                                type="radio"
                                id="2-30-pm"
                                value=""
                                className="hidden peer"
                                name="timetable"
                              />
                              <label
                                htmlFor="2-30-pm"
                                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center  border rounded-lg cursor-pointer text-white  hover:text-black hover:bg-limegreen bg-gray-900  "
                              >
                                02:30 PM
                              </label>
                            </li>
                            <li>
                              <input
                                type="radio"
                                id="3-pm"
                                value=""
                                className="hidden peer"
                                name="timetable"
                              />
                              <label
                                htmlFor="3-pm"
                                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center  border rounded-lg cursor-pointer text-white  hover:text-black hover:bg-limegreen bg-gray-900  "
                              >
                                03:00 PM
                              </label>
                            </li>
                            <li>
                              <input
                                type="radio"
                                id="3-30-pm"
                                value=""
                                className="hidden peer"
                                name="timetable"
                              />
                              <label
                                htmlFor="3-30-pm"
                                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center  border rounded-lg cursor-pointer text-white  hover:text-black hover:bg-limegreen bg-gray-900  "
                              >
                                03:30 PM
                              </label>
                            </li>
                          </ul>
                          <div className="grid grid-cols-2 gap-2 ">
                            <button
                              type="button"
                              className=" font-medium rounded-lg text-sm px-5 py-2.5 mt-5 bg-limegreen hover:bg-limegreen hover:text-white"
                            >
                              Save
                            </button>
                            <button
                              type="button"
                              data-modal-hide="timepicker-modal"
                              className="font-medium rounded-lg text-sm px-5 py-2.5 mt-5 bg-gray-500 hover:bg-gray-400 hover:text-white"
                            >
                              Discard
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex  justify-around mb-10">
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
              Continue &nbsp;{" "}
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
        </div>
      </section>

      <Footer />
    </>
  );
}
