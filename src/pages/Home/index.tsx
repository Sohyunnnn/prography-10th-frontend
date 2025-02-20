import { generation } from "@constants/generation";
import Badge from "./components/Badge";
import FloatingButton from "./components/FloatingButton";
import LinkItem from "./components/LinkItem";
import Section from "./components/Section";

const Home = () => {
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
        <Section>
          <h2 className="display6 text-center">
            안녕하세요. 새로운 가치를 만들어가는 <br />
            IT커뮤니티, <span className="text-primary">Prograhy</span> 입니다.
          </h2>
        </Section>
        <Section>
          <p className="display4">
            드디어 Prography {generation.tenth}기 모집이 시작되었습니다.
          </p>
          <div className="my-15 flex w-full flex-wrap justify-center gap-4">
            {badgeList.map(({ type, label }) => (
              <Badge key={type} type={type} label={label} />
            ))}
          </div>
          <p className="display2">총 6개의 파트를 모집합니다.</p>
        </Section>
        <Section>
          <div className="flex flex-col gap-24">
            {listItems.map((item, index) => (
              <p key={index} className="display3-medium">
                ☑️ {item}
              </p>
            ))}
          </div>
        </Section>
        <Section>
          <h2 className="display6 text-primary mt-30">"프로답게, 재미있게"</h2>
          <p className="display1-medium mt-10">
            재미있는 작당을 함께 만들어갈 {generation.tenth}기에 합류하세요.
          </p>
          <p className="title1 mt-30 mb-8">
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
        </Section>
      </main>
      <FloatingButton />
    </>
  );
};

export default Home;
