import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
const NewContact = () => {
  return (
    <div className="w-11/12 m-auto">
      <div className="px-10 py-5 border-[1px] border-red-800 xl:w-5/12 md:w-5/12 m-auto flex justify-around  rounded-md">
        <IoIosArrowBack className="text-3xl text-green-700" />
        <p className="text-2xl font-bold">Create new contact</p>
        <button className="text-green-700 text-xl">save</button>
      </div>
      <div className="bg-green-500  border-[1px] w-5/12 h-[250px] m-auto">
        <img
          className="w-[300px] h-[200px] rounded-full mx-24 my-6 "
          src="https://tse2.mm.bing.net/th?id=OIP.8CT1m_lpWOBWMCTaKthsdQHaHa&pid=Api&P=0&h=180"
          alt="log"
        />
      </div>
      <div className=" rounded-lg w-4/12 flex justify-around m-auto mt-[-20px] bg-slate-50 py-4 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="36"
          viewBox="0 0 25 30"
          fill="none"
        >
          <path
            d="M22.561 7.89311e-06H10.871C10.5505 -0.000765607 10.2331 0.0553187 9.9371 0.165015C9.64107 0.274711 9.3723 0.43584 9.14635 0.639076L0.714414 8.18182C0.487219 8.38395 0.307095 8.62437 0.184467 8.88919C0.0618398 9.154 -0.000855862 9.43794 8.82363e-06 9.72457V27.8182C0.000735076 28.3966 0.257936 28.9512 0.715185 29.3602C1.17243 29.7693 1.79239 29.9993 2.43903 30H22.561C23.2076 29.9993 23.8276 29.7693 24.2848 29.3602C24.7421 28.9512 24.9993 28.3966 25 27.8182V2.18183C24.9993 1.60337 24.7421 1.04879 24.2848 0.639765C23.8276 0.230736 23.2076 0.000657559 22.561 7.89311e-06ZM22.561 27.8182H2.43903V9.72457L10.871 2.18183H22.561V27.8182Z"
            fill="#5EF75A"
          />
          <path
            d="M9.14636 25.6364H20.122V12H9.14636V25.6364ZM11.5854 14.1818H17.6829V23.4545H11.5854V14.1818Z"
            fill="#5EF75A"
          />
        </svg>
        <p className="text-2xl">Saving to</p>
        <RiArrowDropDownLine className="text-4xl text-green-700" />
      </div>
      <div className="rounded-lg w-4/12 m-auto shadow-lg mt-2">
        <div className="flex justify-center items-center gap-[50px] pb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="24"
            viewBox="0 0 25 14"
            fill="none"
          >
            <path
              d="M24.4903 5.36999C22.9483 3.675 21.0901 2.32489 19.0293 1.40219C16.9685 0.479495 14.7484 0.00360107 12.5048 0.00360107C10.2611 0.00360107 8.04104 0.479495 5.98024 1.40219C3.91944 2.32489 2.06124 3.675 0.519232 5.36999C0.184918 5.74136 -0.000756645 6.23126 2.3176e-06 6.73999V12C2.3176e-06 12.5304 0.202611 13.0391 0.563257 13.4142C0.923904 13.7893 1.41304 14 1.92308 14H23.0769C23.5869 14 24.0761 13.7893 24.4367 13.4142C24.7973 13.0391 25 12.5304 25 12V6.73999C25.0033 6.23263 24.8212 5.7429 24.4903 5.36999ZM23.0769 12H1.92308V6.72999C3.28579 5.23767 4.92623 4.04932 6.74456 3.23728C8.5629 2.42523 10.5211 2.00646 12.5 2.00646C14.4789 2.00646 16.4371 2.42523 18.2554 3.23728C20.0737 4.04932 21.7142 5.23767 23.0769 6.72999V12Z"
              fill="#9DC180"
            />
          </svg>
          <div className="py-2">
            <input type="text" placeholder="Enter your first name" />
            <br />
            <input type="text" placeholder="Enter your last name" />
          </div>
          <RiArrowDropDownLine className="text-4xl text-green-700" />
        </div>
        <div className="flex justify-center items-center gap-[50px] pb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="30"
            viewBox="0 0 25 30"
            fill="none"
          >
            <path
              d="M10.3918 17.519C11.9242 19.4239 13.7784 20.8946 15.8241 21.8279L18.5917 19.1292C18.6737 19.06 18.771 19.0229 18.8706 19.0229C18.9703 19.0229 19.0675 19.06 19.1496 19.1292L24.2883 23.1862C24.4834 23.3299 24.6485 23.5272 24.7707 23.7626C24.8928 23.998 24.9687 24.2649 24.9922 24.5424C25.0157 24.8198 24.9862 25.1002 24.9061 25.3612C24.826 25.6223 24.6974 25.857 24.5306 26.0468L22.1227 28.9613C21.7779 29.3788 21.3541 29.6852 20.8891 29.8532C20.4241 30.0211 19.9324 30.0454 19.4579 29.9238C14.7246 28.7259 10.3618 25.9204 6.86809 21.8279C3.45194 17.6946 1.08798 12.4355 0.0629753 6.68836C-0.038282 6.11592 -0.0171482 5.52113 0.124329 4.96164C0.265805 4.40215 0.522828 3.89693 0.870486 3.49494L3.36643 0.5444C3.52088 0.349905 3.70924 0.200748 3.91741 0.108096C4.12557 0.0154446 4.34814 -0.0183 4.56845 0.00938902C4.78877 0.0370781 5.00112 0.125483 5.1896 0.267985C5.37808 0.410487 5.53781 0.603392 5.65683 0.832257L9.07774 7.04818C9.13674 7.14578 9.16859 7.26404 9.16859 7.38551C9.16859 7.50698 9.13674 7.62524 9.07774 7.72284L6.82405 11.0422C7.60629 13.4988 8.82501 15.7113 10.3918 17.519Z"
              fill="#9DC180"
            />
          </svg>
          <input type="number" placeholder="phone" />
          <RiArrowDropDownLine className="text-4xl text-green-700" />
        </div>
        <div className="flex justify-center items-center gap-[50px] pb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="30"
            viewBox="0 0 25 30"
            fill="none"
          >
            <path
              d="M21.25 0H3.75C2.75544 0 1.80161 0.592632 1.09835 1.64752C0.395088 2.70242 0 4.13316 0 5.625V24.375C0 25.8668 0.395088 27.2976 1.09835 28.3525C1.80161 29.4074 2.75544 30 3.75 30H21.25C22.2446 30 23.1984 29.4074 23.9017 28.3525C24.6049 27.2976 25 25.8668 25 24.375V5.625C25 4.13316 24.6049 2.70242 23.9017 1.64752C23.1984 0.592632 22.2446 0 21.25 0ZM20.4125 3.75L12.5 12.6562L4.5875 3.75H20.4125ZM21.25 26.25H3.75C3.41848 26.25 3.10054 26.0525 2.86612 25.7008C2.6317 25.3492 2.5 24.8723 2.5 24.375V6.09375L11.75 16.5C11.9664 16.7434 12.2295 16.875 12.5 16.875C12.7705 16.875 13.0336 16.7434 13.25 16.5L22.5 6.09375V24.375C22.5 24.8723 22.3683 25.3492 22.1339 25.7008C21.8995 26.0525 21.5815 26.25 21.25 26.25Z"
              fill="#9DC180"
            />
          </svg>
          <input type="email" placeholder="email" />
          <RiArrowDropDownLine className="text-4xl text-green-700" />
        </div>
      </div>
      <p className=" mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 border-[1px] border-red-900 rounded-lg w-4/12 m-auto text-center py-2 text-3xl text-white">
        More Details
      </p>
    </div>
  );
};

export default NewContact;
