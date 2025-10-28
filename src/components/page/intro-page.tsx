import LogoLoop from "@/components/logo-loop";
import SplitText from "@/components/split-text";

import CountDay from "../count-day";

import Img01 from "../../assets/logo/logo-andong.svg";
import Img02 from "../../assets/logo/logo-busan.svg";
import Img03 from "../../assets/logo/logo-cheongju.svg";
import Img04 from "../../assets/logo/logo-chuncheon.svg";
import Img05 from "../../assets/logo/logo-daegu.svg";
import Img06 from "../../assets/logo/logo-daejeon.svg";
import Img07 from "../../assets/logo/logo-gwangju.svg";
import Img08 from "../../assets/logo/logo-incheon.svg";
import Img09 from "../../assets/logo/logo-jeju.svg";
import Img10 from "../../assets/logo/logo-jeonju.svg";
import Img11 from "../../assets/logo/logo-masan.svg";
import Img12 from "../../assets/logo/logo-militury.svg";
import Img13 from "../../assets/logo/logo-suwon.svg";
import Img14 from "../../assets/logo/logo-uijeongbu.svg";
import Img15 from "../../assets/logo/logo-wonju.svg";

export default function IntroPage() {
  const techLogos = [
    {
      node: <img src={Img01} className="h-10 cursor-pointer" alt="안동교구" />,
      title: "안동교구",
      href: "",
    },
    {
      node: <img src={Img02} className="h-10 cursor-pointer" alt="부산교구" />,
      title: "부산교구",
      href: "",
    },
    {
      node: <img src={Img03} className="h-10 cursor-pointer" alt="청주교구" />,
      title: "청주교구",
      href: "",
    },
    {
      node: <img src={Img04} className="h-10 cursor-pointer" alt="전주교구" />,
      title: "전주교구",
      href: "",
    },
    {
      node: <img src={Img05} className="h-10 cursor-pointer" alt="대구교구" />,
      title: "대구교구",
      href: "",
    },
    {
      node: <img src={Img06} className="h-10 cursor-pointer" alt="대전교구" />,
      title: "대전교구",
      href: "",
    },
    {
      node: <img src={Img07} className="h-10 cursor-pointer" alt="광주교구" />,
      title: "광주교구",
      href: "",
    },
    {
      node: <img src={Img08} className="h-10 cursor-pointer" alt="인천교구" />,
      title: "인천교구",
      href: "",
    },
    {
      node: <img src={Img09} className="h-10 cursor-pointer" alt="제주교구" />,
      title: "제주교구",
      href: "",
    },
    {
      node: <img src={Img10} className="h-10 cursor-pointer" alt="전주교구" />,
      title: "전주교구",
      href: "",
    },
    {
      node: <img src={Img11} className="h-10 cursor-pointer" alt="마산교구" />,
      title: "마산교구",
      href: "",
    },
    {
      node: <img src={Img12} className="h-10 cursor-pointer" alt="군종교구" />,
      title: "군종교구",
      href: "",
    },
    {
      node: <img src={Img13} className="h-10 cursor-pointer" alt="수원교구" />,
      title: "수원교구",
      href: "",
    },
    {
      node: (
        <img src={Img14} className="h-10 cursor-pointer" alt="의정부교구" />
      ),
      title: "의정부교구",
      href: "",
    },
    {
      node: <img src={Img15} className="h-10 cursor-pointer" alt="원주교구" />,
      title: "원주교구",
      href: "",
    },
  ];

  return (
    <>
      <div
        style={{ height: "100px", position: "relative", overflow: "hidden" }}
        className="flex items-center"
      >
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
      <div className="flex justify-center items-center w-full h-[calc(100dvh-200px)] flex-col gap-y-2">
        <SplitText
          text="WYD 2027 SEOUL DID 페이지에 오신걸 환영합니다."
          className="heading01b text-center font-black"
          delay={100}
          duration={1}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <SplitText
          text="DAY OF THE EVENT"
          className="heading01b text-center font-black"
          delay={100}
          duration={1}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <CountDay />
      </div>
      <div
        style={{ height: "100px", position: "relative", overflow: "hidden" }}
        className="flex items-center"
      >
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="right"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </>
  );
}
