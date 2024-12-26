import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import profilePic from "../../public/images/profile/Riley.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sơn Tùng XYZ</title>
        <meta
          name="description"
          content="Next Portfolio, A open-source portfolio theme built with Nextjs"
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-24 md:!pt-16 sm:!pt-28">
          <div className="flex w-full items-start justify-between md:flex-col pt-10 pb-24">
            <div className="w-1/2 lg:hidden md:flex flex self-center max-h-fit">
              {
                <Image
                  priority={true}
                  src={profilePic}
                  alt="image"
                  className="h-auto w-100"
                  height={340}
                  width={340}
                  sizes="33vw"
                />
              }
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Xin chào, Mình Là Sơn Tùng"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <div className="flex w-1/2 w-full items-center items-start lg:w-full  lg:!justify-center  sm:!justify-center  md:!text-center md:inline-block md:w-full">
                <h2 className="animate-text bg-gradient-to-r from-lightGreen via-lightGreen to-slideGreen bg-clip-text text-transparent font-semibold capitalize !text-5xl xl:!text-4xl lg:!text-4xl md:!text-5xl sm:!text-3xl">
                  Cuộc sống là hành trình những trải nghiệm hấp dẫn.
                </h2>
              </div>

              <p className="my-4 text-base font-medium md:text-sm sm:!text-sm">
              🌟 Trong cuộc đời này, không ai bước vào thế giới của ta một cách ngẫu nhiên, và không sự kiện nào xảy ra mà không ẩn chứa một ý nghĩa sâu xa. Mỗi con người ta gặp, mỗi câu chuyện ta trải qua – dù ngọt ngào hay đắng cay – đều là những mảnh ghép không thể thiếu, định hình nên con người ta hôm nay. Những cuộc gặp gỡ ấy, những khoảnh khắc ấy, chính là lời nhắc nhở tinh tế từ cuộc sống rằng mọi thứ đều diễn ra đúng thời điểm, đúng người, và vì một lý do nào đó.
              🌟Ghi lại, trân trọng những điều quý giá ấy không chỉ là lưu giữ kỷ niệm, mà còn là lòng biết ơn với chính hành trình này, đã mang đến cơ hội để ta học, để ta yêu, và để ta sống một cuộc đời trọn vẹn hơn từng ngày.🌟.
              </p>
              <div className="mt-2 flex items-center self-start gap-3 grid-cols-2 lg:self-center">
                <Link
                  href="/about/"
                  target={"_self"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                >
                  Xem thêm về mình
                </Link>
                <Link
                  href="/projects/"
                  target={"_self"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
                >
                  Những việc đang làm
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <div className="fixed right-8 bottom-8 inline-block md:hidden">
          <iframe
            className="iframe"
            title="Thời tiết theo mùa"
            width="280"
            height="120"
            src="https://thoitiet-beige.vercel.app/"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <HireMe />
      </article>
    </>
  );
}
