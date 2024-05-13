import { profile1, replyIcon, tierbg1 } from "../../assets";
import { FaRegComment } from "react-icons/fa";
import SecondaryButton from "../buttons/SecondaryButton";

const CommentSection = () => {
  return (
    <section className="flex flex-col ">
      <div className="flex space-x-4 ">
        <img
          src={profile1}
          alt="profile-img-1"
          className="rounded-full self-start"
        />
        <div className="flex flex-col space-y-2">
          <h1 className=" text-lime-400 text-3xl font-semibold">
            Here is a subject you may vote
          </h1>
          <div className="flex  text-white text-[11px] font-light">
            <span>Autor: Filipe Leonor </span> l <span> 24 June 2023</span>
          </div>
          <p className="text-white text-[14px] font-normal ">
            Lorem ipsum dolor sit amet consectetur. Elit amet imperdiet erat
            elementum justo a eu. Ullamcorper proin velit nunc mauris ridiculus
            placerat. Ac nibh adipiscing sollicitudin urna nullam. Diam nunc
            viverra netus tortor pretium porta fermentum. Elit sagittis lacus
            ultricies hac. Sit pulvinar bibendum platea sem laoreet pellentesque
            convallis vel nisl. Et placerat in in ut volutpat est. In amet
            accumsan venenatis arcu elementum dis. Sapien mollis praesent
            eleifend vitae sit id iaculis amet. Bibendum massa enim mauris elit
            donec in sit tempus. Libero adipiscing a at volutpat et enim non
            sagittis nam. Mattis scelerisque non velit malesuada aenean ut.
          </p>

          <div className="text-white text-sm font-medium flex space-x-2 items-center">
            <FaRegComment size="1rem" />
            <span>24 comments</span>
          </div>

          <hr className="my-10" />

          <ol className="relative border-s border-zinc-300/30   top-3 left-4">
            <li className="mb-10 ms-10 ">
              <span className="absolute flex items-center justify-center w-10 h-10  rounded-full -start-5  ">
                <img src={tierbg1} alt="" className="rounded-full" />
              </span>
              <h3 className="text-lime-400 text-base font-semibold font-['Space Grotesk']">
                User183787
              </h3>
              <time className="text-white text-[11px] font-light">
                2 days ago
              </time>
              <p className="text-white text-[15px] font-normal mt-3 ">
                Lorem ipsum dolor sit amet consectetur. Elit amet imperdiet erat
                elementum justo a eu. Ullamcorper proin velit nunc mauris
                ridiculus placerat. Ac nibh adipiscing sollicitudin urna nullam.
                Diam nunc viverra netus tortor pretium porta fermentum.
              </p>
              <div className=" flex justify-end  ">
                <button className="flex space-x-2 items-center">
                  <span>
                    <img src={replyIcon} alt="reply" />
                  </span>
                  <span> Reply Comment</span>
                </button>
              </div>
            </li>
          </ol>
          <span className="flex items-center  justify-center">
            <SecondaryButton buttonText="Show more" width="211.11px" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
