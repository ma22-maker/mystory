import React, { useEffect, useState } from "react";
import Navbar from "./Nav";
import Lenis from "lenis";
import { useRef } from "react";
import { useScroll, useTransform, motion,useInView } from "framer-motion";
import Zoom from "./Picture";
import designer from "../../public/designer.jpg";
import music from "../../public/music.jpg";
import pixel from "../../public/pixels.jpg";
import enchanted from "../../public/enchanted.jpg"
import chorus from "../../public/chorus.jpg"


const anim = {
  initial: { width: 0 },
  open: {
    width: "10vh",
    borderRadius: "10px",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

const animate = {
  initial: {right :'100%'},
  open: () => ({y:'0%', transition: {duration:1, delay:0.1*9} , ease:[0.33, 1, 0.68, 1]})
}

export default function Home() {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="relative h-[200vh]"  id="home-section">
      <Navbar />
      <Section1 dropOne={scrollYProgress} />
      <Section2 dropTwo={scrollYProgress} />
    </main>
  );
}

const Section1 = ({ dropOne }) => {
  const scale = useTransform(dropOne, [0, 1], [1, 0.8]);
  const rotate = useTransform(dropOne, [0, 1], [0, -5]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className="main sticky top-0 h-screen bg-[#ede8e4]  
        "
    >
      <div className=" relative body flex flex-col gap-4 pt-36 px-10 md:px-20">
        <div className="grid grid-col-12 grid-rows-2 gap-4">
          <div className="col-start-1 col-end-4   md:row-start-1  md:col-start-2  md:row-end-2  md:col-end-4">
            <div className="flex flex-row justify-center items-center gap-1">
              <svg
                width="7"
                height="8"
                viewBox="0 0 7 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="7" height="8" fill="black" />
              </svg>

              <p className="  font-montrealmed text-[10px]  ">
                Working at{" "}
                <a
                  href="https://www.bounteous.com/"
                  target="_blank"
                  className="underline underline-offset-2"
                >
                  Bounteous
                </a>
              </p>
            </div>
          </div>
          <div className="col-start-4 col-end-8  md:row-start-1 md:col-start-4  md:row-end-2  md:col-end-6">
            <div className="flex flex-row justify-center items-center gap-1">
              <svg
                width="7"
                height="8"
                viewBox="0 0 7 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="7" height="8" fill="black" />
              </svg>

              <p className="  font-montrealmed text-[10px]   ">
                Based in India
              </p>
            </div>
          </div>
          <div className=" md:row-start-1 md:col-start-6  md:row-end-2  md:col-end-12">
            <p className="flex flex-row items-center justify-center gap-2 ">
              <a
                className="  font-montrealmed text-xs hover:underline hover:underline-offset-2"
                href="https://github.com/ma22-maker"
                target="_blank"
              >
                Github <span className="font-extralight m-1"> |</span>
              </a>
              <a
                className=" font-montrealmed text-xs hover:underline hover:underline-offset-2"
                href="https://github.com/ma22-maker"
                target="_blank"
              >
                Linkedin
              </a>
            </p>
          </div>
        </div>
        <div className="relative grid grid-cols-12 grid-rows-2 mt-[10vh] md:mt-[20vh]  text-[1.6rem] md:text-[2.2rem]  lg:text-[3rem]  xl:text-[4.5rem] ">
          <span className="  font-eikothin font-semibold  tracking-wide  col-start-1 col-end-12  row-span-1  md:row-start-1  md:col-start-2  md:row-end-2  md:col-end-11">
            DEEPTHIMAI KANDULA
          </span>
          <span className="font-montrealmed text-[#1a1813] tracking-wider col-start-1 col-end-12  row-span-1 min-[446px]:absolute min-[446px]:bottom-[19%] min-[446px]:left-[36%] ">
            <div className="flex flex-row gap-2 justify-center items-center">
              <p>FRONTEND DEV</p>
              <svg
                className=" mt-3 md:mt-8"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="14" height="14" fill="#090909" />
              </svg>
            </div>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Section2 = ({ dropTwo }) => {
  const body = useRef(null);
  const isInView = useInView(body,{ once: true, margin: "-10%" });

  const [isActive, setIsActive] = useState(false);
  const scale = useTransform(dropTwo, [0, 1], [0.8, 1]);
  const rotate = useTransform(dropTwo, [0, 1], [5, 0]);
  const [isone, setIsone] = useState(false);
  const [istwo, setIstwo] = useState(false);
  const [isthree, setIsthree]= useState(false);
  const [isfour, setIsfour]= useState(false);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative h-screen bg-[#a54a4a] text-[2.5vw]"
    >
      <div className=" grid grid-cols-9 grid-rows-11">
        <div className="z-0 absolute bottom-[3%] left-[3%] w-5/12 h-full">
          <Zoom />
        </div>
        <div className="col-start-5 col-end-9 row-start-5 row-end-11 text-[#ede8e4]"
        ref={body}
        >
          <motion.div className="row-start-4 row-end-7 font-montrealmed"
          variants={animate} initial="initial" animate={isInView? "open":""}
          >
            <div className="flex flex-col gap-2">
              <div
                className="flex flex-row justify-center items-center gap-1"
                onMouseEnter={() => {
                  setIsActive(true);
                }}
                onMouseLeave={() => {
                  setIsActive(false);
                }}
              >
                <p> I'm a front-end dev and</p>
                <motion.div
                  variants={anim}
                  animate={isActive ? "open" : "closed"}
                  className="overflow-hidden flex w-0 justify-center"
                >
                  <img src={designer.src}></img>
                </motion.div>
                <p className="font-eikothin">designer</p>
              </div>

              <div
                className="flex flex-row justify-center items-center gap-1"
                onMouseEnter={() => {
                  setIsone(true);
                }}
                onMouseLeave={() => {
                  setIsone(false);
                }}
              >
                <p>
                  {" "}
                  who turns <span className="font-eikothin">music</span>{" "}
                </p>
                <motion.div
                  variants={anim}
                  animate={isone ? "open" : "closed"}
                  className="overflow-hidden flex w-0 justify-center"
                >
                  <img src={music.src}></img>
                </motion.div>
                <p> into code</p>
              </div>

              <div
                className="flex flex-row justify-center items-center gap-1"
                onMouseEnter={() => {
                  setIstwo(true);
                }}
                onMouseLeave={() => {
                  setIstwo(false);
                }}
              >
                <p>
                  {" "}
                  and <span className="font-eikothin">pixels</span>{" "}
                </p>
                <motion.div
                  variants={anim}
                  animate={istwo ? "open" : "closed"}
                  className="overflow-hidden flex w-0 justify-center"
                >
                  <img src={pixel.src}></img>
                </motion.div>
                <p>into perfection</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="row-start-8 row-end-11 font-montrealmed"
             variants={animate} initial="initial" animate={isInView? "open":""}>
            <div className="flex flex-col gap-2">
              <div
                className="flex flex-row justify-center items-center gap-1"
                onMouseEnter={() => {
                  setIsthree(true);
                }}
                onMouseLeave={() => {
                  setIsthree(false);
                }}
              >
                <p> Designing interfaces as</p>
                <motion.div
                  variants={anim}
                  animate={isthree ? "open" : "closed"}
                  className="overflow-hidden flex w-0 justify-center"
                >
                  <img src={enchanted.src}></img>
                </motion.div>
                <p className="font-eikothin">enchanting</p>
              </div>

              <div
                className="flex flex-row justify-center items-center gap-1"
                onMouseEnter={() => {
                  setIsfour(true);
                }}
                onMouseLeave={() => {
                  setIsfour(false);
                }}
              >
                <p> as your favorite </p>
                <motion.div
                  variants={anim}
                  animate={isfour ? "open" : "closed"}
                  className="overflow-hidden flex w-0 justify-center"
                >
                  <img src={chorus.src}></img>
                </motion.div>
                <p className="font-eikothin">song's chorus</p>
              </div>
                
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
