import ContentCard from "../components/cards/ContentCard";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import PrimaryButton from "../components/buttons/PrimaryButton";
import CommentSection from "../components/comments/CommentSection";

const Comments = () => {
  return (
    <div className="mt-16 w-[68vw] h-[80vh]  flex flex-col space-y-10 justify-start pt-10 items-center     ">
      <section className="flex flex-col md:flex-row  justify-between   ">
        <div className=" w-[60%]">
          <CommentSection />
        </div>
        <div className="w-[40%] flex flex-col space-y-10 items-end  ">
          <ContentCard width="330px" height="140px">
            <h2 className="text-white text-base font-semibold ">
              Voting Status
            </h2>
            <div className="flex space-x-6 ">
              <div className="flex flex-col  items-center">
                <FaCheck
                  size="1.5rem"
                  className=" text-lime-400 active:text-lime-400"
                />
                <span className="text-white text-xs font-light ">Approved</span>
              </div>
              <div className="flex flex-col  items-center">
                <ImCross size="1.3rem" className="  text-[#799695] mb-1" />
                <span className="text-white text-xs font-light ">Failed</span>
              </div>
            </div>
          </ContentCard>

          <ContentCard width="330px" height="185px">
            <h2>Voting Status</h2>
            <div className="flex space-x-6">
              <PrimaryButton buttonText="For" width="100px" />
              <PrimaryButton buttonText="Against" width="100px" />
            </div>
            <div className="w-3/4 bg-amber-500 rounded-full h-2.5 ">
              <div
                className="bg-lime-400 h-2.5 rounded-full"
                style={{ width: "77%" }}
              ></div>
            </div>
            <div className="flex justify-between w-3/4">
              <span className="text-white text-xs font-normal">77%</span>
              <span className="text-white text-xs font-normal">33%</span>
            </div>
          </ContentCard>
        </div>
      </section>
    </div>
  );
};

export default Comments;
