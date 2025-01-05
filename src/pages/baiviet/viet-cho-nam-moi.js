import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { GithubIcon } from "@/components/Icons";
import { DevIcon } from "@/components/Icons";

import proj1 from "/public/images/projects/viet-cho-nam-moi.jpeg";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.sontung.xyz/baiviet/viet-cho-nam-moi"
        ></link>
        <title>
          Năm Mới | Cố gắng để trở thành phiên bản tuyệt vời nhất của chính mình trong năm 2025
        </title>
        <meta
          name="description"
          content="Cố gắng để trở thành phiên bản tuyệt vời nhất của chính mình trong năm 2025."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Clay - Gatsby Theme"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">
              Cố gắng để trở thành phiên bản tuyệt vời nhất của chính mình trong năm 2025
              </h2>
              <h3 className="mb-4 text-lg font-bold  text-lightGreen dark:text-primaryDark">
                Mục tiêu | Kế hoạch | Hành động | Niềm tin
              </h3>
              <div classNname="w-full border-2 border-solid border-light bg-light"></div>
              <p className="">
              Đây là tuần yêu thích nhất trong năm của mình. Mọi thứ đều chậm lại, Nhiệt độ 
              là 22 độ C và nắng rất nhẹ mỗi ngày ở nơi của mình vào thời điểm này trong năm. 
              Mình dành phần lớn thời gian trong ngày ở bên với vườn cây và có nhiều thời gian 
              thư giãn chỉ để ở bên gia đình.
              </p>
              <p className="">
              Mình đã dành nhiều thời gian trong ngày để suy ngẫm về năm trước và lập kế hoạch 
              cho năm tới. Mình thực sự đã hết lòng với kế hoạch năm trước và dành nhiều ngày để 
              suy nghĩ và viết về năm sắp tới. Luôn cố gắng để trở thành phiên bản tốt nhất của 
              mình sau mỗi năm.
              </p>
              <h4 className="mt-4 text-lg font-800 capitalize text-dark/75 dark:text-light/75">
              Bắt đầu hành trình này bằng những câu hỏi :
              </h4>
              <p className="my-4">
              1. Mình muốn bản thân trở nên như thế nào vào cuối năm 2025? <br></br>
              2. Thói quen nào đang kéo mình xuống, và mình sẽ thay đổi thế nào? <br></br>
              3. Mình cần học gì để tiến gần hơn đến mục tiêu của mình? <br></br>
              4. Thời gian của mình đang được dùng vào đâu, và điều đó có xứng đáng không? <br></br>
              5. Mình đã thực sự chăm sóc sức khỏe của bản thân chưa? <br></br>
              6. Ai là người có thể cùng mình bước trên hành trình này? <br></br>
              7. Mình có đang sống đúng với những giá trị mình tin tưởng? <br></br>
              8. Khi khó khăn đến, mình sẽ làm gì để không bỏ cuộc? <br></br>
              9. Điều gì sẽ khiến mình tự hào khi nhìn lại năm 2025? <br></br>
              10. Hôm nay mình có thể làm gì, dù chỉ là một việc nhỏ, để tiến gần hơn đến con người mình muốn trở thành?
              </p>
              <p className="my-4">
              Không cần phải chờ đợi một thời điểm, bắt đầu ngay từ hôm nay vì phiên bản tuyệt vời nhất 
              luôn nằm trong tầm tay, chỉ cần luôn tin tưởng và hành động. <br></br>
              Năm mới là cơ hội mới. Cố gắng để trở thành phiên bản tuyệt vời nhất của chính mình trong năm 2025✨
              </p>              
              <div className="mt-2 flex items-center grid-cols-8 gap-4 sm:gap-8">
                <Link
                  className="rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold
             sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base"
                  aria-label="Visit Theme Demo"
                  href="https://www.facebook.com/photo/?fbid=9963311393685020&set=a.101404736542451"
                  target={"_blank"}
                >
                  Đọc thêm
                </Link>
                <Link
                  href="https://www.facebook.com/photo/?fbid=9963311393685020&set=a.101404736542451"
                  target={"_blank"}
                  className="w-10"
                  aria-label="github link"
                >
                  <GithubIcon />
                </Link>
                <Link
                  href="https://www.facebook.com/photo/?fbid=9963311393685020&set=a.101404736542451"
                  target={"_blank"}
                  className="w-10"
                  aria-label="github link"
                >
                  <DevIcon />
                </Link>
              </div>
            </div>
            <div
              className="relative col-span-4 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            "
            >
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={proj1}
                alt="Clay Gatsby Theme"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
