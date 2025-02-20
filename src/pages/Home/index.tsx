import { generation } from "@constants/generation";
import Badge from "./components/Badge";
import FloatingButton from "./components/FloatingButton";
import LinkItem from "./components/LinkItem";
import Section from "./components/Section";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const { ref: sectionRef1, inView: inView1 } = useInView({ threshold: 0.5 });
  const { ref: sectionRef2, inView: inView2 } = useInView({ threshold: 0.5 });
  const { ref: sectionRef3, inView: inView3 } = useInView({ threshold: 0.5 });
  const { ref: sectionRef4, inView: inView4 } = useInView({ threshold: 0.5 });

  const badgeList: { type: "PO" | "DE" | "DEV"; label: string }[] = [
    { type: "PO", label: "Product Owner" },
    { type: "DE", label: "Designer" },
    { type: "DEV", label: "iOS" },
    { type: "DEV", label: "AOS" },
    { type: "DEV", label: "Frontend(React)" },
    { type: "DEV", label: "Backend(Spring)" },
  ];

  const listItems = [
    "새로운 가치를 만들어내는데 가슴이 두근거리신다면,",
    "열정적인 IT인들과 함께 사이드 프로젝트를 하고 싶으시다면,",
    "탁월한 동료들과 짜릿한 성취감을 느껴보고 싶으시다면,",
  ];

  return (
    <>
      <main>
        <Section
          ref={sectionRef1}
          className={` ${
            inView1
              ? "translate-y-0 opacity-100 transition-all duration-700 ease-in-out"
              : "translate-y-20 opacity-0 transition-all duration-700 ease-in-out"
          }`}
        >
          <h2 className="display6 text-center">
            안녕하세요. 새로운 가치를 만들어가는 <br />
            IT커뮤니티, <span className="text-primary">Prograhy</span> 입니다.
          </h2>
        </Section>
        <Section
          ref={sectionRef2}
          className={`${
            inView2
              ? "translate-y-0 opacity-100 transition-all duration-700 ease-in-out"
              : "translate-y-20 opacity-0 transition-all duration-700 ease-in-out"
          }`}
        >
          <p className="display4">
            드디어 Prography {generation.tenth}기 모집이 시작되었습니다.
          </p>
          <div className="my-15 flex w-full flex-wrap justify-center gap-4">
            {badgeList.map(({ type, label }, index) => (
              <Badge key={`${type}-${index}`} type={type} label={label} />
            ))}
          </div>
          <p className="display2">총 6개의 파트를 모집합니다.</p>
        </Section>
        <Section
          ref={sectionRef3}
          className={`flex flex-col items-center justify-center ${
            inView3
              ? "translate-y-0 opacity-100 transition-all duration-700 ease-in-out"
              : "translate-y-20 opacity-0 transition-all duration-700 ease-in-out"
          }`}
        >
          <div className="flex flex-col gap-24">
            {listItems.map((item, index) => (
              <p
                key={index}
                className={`display3-medium transition-all duration-700 ease-in-out ${
                  inView3
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                ☑️ {item}
              </p>
            ))}
          </div>
        </Section>

        <Section
          ref={sectionRef4}
          className={` ${
            inView4
              ? "translate-y-0 opacity-100 transition-all duration-700 ease-in-out"
              : "translate-y-20 opacity-0 transition-all duration-700 ease-in-out"
          }`}
        >
          <h2 className="display6 text-primary mt-30 flex">
            {"프로답게, 재미있게".split("").map((char, index) => (
              <span
                key={index}
                className={`inline-block translate-y-2 transition-all duration-500 ease-out ${
                  inView4
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {char}
              </span>
            ))}
          </h2>
          <div
            className={`transition-all duration-700 ease-in-out ${
              inView4 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "1500ms" }}
          >
            <p className="display1-medium mt-10">
              재미있는 작당을 함께 만들어갈 {generation.tenth}기에 합류하세요.
            </p>
            <p className="title1 mt-30 mb-8 text-center">
              📌 자세한 정보는 아래 페이지에 담아뒀으니, 지원 전 꼭 확인해주세요
              👇🏻
            </p>
            <div className="flex flex-col items-center gap-5">
              <LinkItem
                href={import.meta.env.VITE_GUIDE_PAGE}
                label="🗒️ 모집 안내 살펴보기"
              />
              <LinkItem
                href={import.meta.env.VITE_OFFICIAL_SITE}
                label="🏡 공식 홈페이지"
              />
              <LinkItem
                href={import.meta.env.VITE_INSTAGRAM}
                label="🔗 인스타그램"
              />
            </div>
          </div>
        </Section>
      </main>
      <FloatingButton />
    </>
  );
};

export default Home;
