import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-slideGreen dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Kinh nghiệm
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Kinh doanh"
            company="Công ty cổ phần tập đoàn The Startup"
            time="2024 - Nay"
            address="Quản lý nhân sự - kinh doanh - đối ngoại"
            companyLink="https://www.thestartup.vn"
            work="THE STARTUP không chỉ là một công ty mà còn là bệ phóng cho những ước mơ lớn, 
            là ngôi nhà của những tâm hồn táo bạo và khát vọng mãnh liệt. Chúng tôi khao khát tạo 
            nên một tương lai nơi sáng tạo không có giới hạn, và nơi mỗi người đều có thể trở thành 
            người kiến tạo sự thay đổi mà họ mong muốn. Với các lĩnh vực kinh doanh: Thẩm mỹ, chăm sóc sức khỏe; Đào tạo nghề; Bán lẻ; Hỗ trợ Tài chính; Bất động sản; Dịch vụ tư vấn luật; Công nghệ Big data, Quảng cáo "
          />

          <Details
            position="Công chức"
            company="Thị trấn Ngọc Lặc - Tỉnh Thanh Hóa"
            time="2015 - 2024"
            address="Tài chính kế toán"
            companyLink="https://www.facebook.com/thitranngoclacthanhhoa"
            work="Xây dựng dự toán thu, chi ngân sách · Triển khai các biện pháp khai thác nguồn thu trên địa bàn · Thực hiện dự toán chi ngân sách · Báo cáo tài chính, Quyết toán ngân sách · Quản lý tài sản công · Quản lý các dự án đầu tư xây dựng · Quản lý quỹ công chuyên dùng · Kê khai quyết toán thuế, BHXH, chế độ lương, thưởng, phụ cấp."
          />
        </ul>
      </div>
      <div className="mt-40 flex items-center justify-between gap-3 grid-cols-2">
        <Link
          href="/projects/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
        >
          Xem dự án
        </Link>
        <Link
          href="/articles/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
        >
          Xem bài viết
        </Link>
      </div>
    </div>
  );
};

export default Experience;
