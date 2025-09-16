import { cn } from "@/lib/utils";
import CodingTimeCards from "../bentoCards/CodingTimeCards";
import SocialCards from "../bentoCards/SocialCards";
import { BackgroundGradientAnimation } from "./GradientBg";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["Javascript", "Express", "ReactJS"];
  const rightLists = ["NextJS", "Typescript", "Angular"];

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "#050505",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                "absolute right-0 top-1/2 -translate-y-1/2 object-cover object-center rounded-tl-[25px] rounded-bl-[25px]"
              )}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-0 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-0 ">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-4">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-2 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#2b2535]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#2b2535]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-4">
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#2b2535]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-2 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#2b2535]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 1 && <SocialCards />}
          {id === 4 && <CodingTimeCards />}

          {id === 6 && (
            <div className="relative">
              <a href="mailto:nisarggandhi21@gmail.com">
                <MagicButton
                  title={"nisarggandhi21@gmail.com"}
                  otherClasses="!bg-[#060606]"
                />
              </a>
            </div>
          )}
        </div>

        {/* Add link for id === 5 */}
        {id === 5 && (
          <a
            href="https://taste-of-home.nisarg-gandhi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
          >
            {/* This makes the entire div clickable */}
          </a>
        )}

        {/* Add link for id === 4 */}
        {id === 4 && (
          <a
            href="https://wakatime.com/@nisarggandhi21"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
          >
            {/* This makes the entire div clickable */}
          </a>
        )}
      </div>
    </div>
  );
};
