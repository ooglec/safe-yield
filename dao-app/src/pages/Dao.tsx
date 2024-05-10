import { arrowRight } from "../assets";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaRegComment } from "react-icons/fa";
import PrimaryButton from "../components/buttons/PrimaryButton";

const voteItems = [
  {
    subjectTitle: "Here is a subject you may vote",
    subjectDescription: null,
  },
  {
    subjectTitle: "Here is another subject you may vote",
    subjectDescription: null,
  },
  {
    subjectTitle:
      "Here is another subject you may vote but how it looks with dropdown",
    subjectDescription:
      "Here is a simple and short text that explain the subject. Here is a simple and short text that explain the subject. Here is a simple and short text that explain the subject. Here is a simple and short text that explain the subject. Here is a simple and short text that explain the subject.",
  },
];

const Dao = () => {
  return (
    <section className="mt-16 w-[75vw] h-[80vh]  flex flex-col space-y-10 justify-start pt-10 items-center">
      <div className="  w-[65vw] flex flex-col   space-y-2  ">
        <div className="border-b  border-zinc-300/50  font-medium text-end pr-[3.5rem] p-2 ">
          Status
        </div>
        <ul className="">
          {voteItems.map((item, index) => {
            return (
              <li
                key={index}
                className="flex h-auto w-full justify-between items-center border-zinc-300/50  border-b py-4"
              >
                <div className="flex flex-col ">
                  <div className="flex">
                    <span>
                      <img src={arrowRight} alt="rightarrow" />
                    </span>
                    <span className="text-white text-[15px] font-light ">
                      {item.subjectTitle} <br />
                    </span>
                  </div>
                  {item.subjectDescription && (
                    <div className=" pl-6 flex my-2 flex-col space-y-2">
                      <p className="text-slate-400 text-light ">
                        Here is a simple and short text that explain the
                        subject. Here is a simple and short text that explain
                        the subject. Here is a simple and short text that
                        explain the subject. Here is a simple and short text
                        that explain the subject. Here is a simple and short
                        text that explain the subject.
                      </p>
                      <PrimaryButton buttonText="Read More" width="120px" />
                    </div>
                  )}
                </div>

                <div className="flex  space-x-6 self-start">
                  <button>
                    <FaCheck
                      size="1.5rem"
                      className=" text-lime-400 active:text-lime-400"
                    />
                  </button>
                  <button>
                    <ImCross size="1.2rem" className="  text-amber-500" />
                  </button>
                  <button className="flex space-x-2 text-slate-500">
                    <FaRegComment size="1.5rem" />
                    <span>12</span>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Dao;
