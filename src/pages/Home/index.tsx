import Badge from "./components/Badge";

const Home = () => {
  return (
    <main>
      <div className="flex h-full min-h-screen items-center justify-center">
        <h2 className="display6 text-center">
          안녕하세요. 새로운 가치를 만들어가는 <br />
          IT커뮤니티, <span className="text-primary">Prograhy</span>
          입니다.
        </h2>
      </div>
      <div className="flex h-full min-h-screen flex-col items-center justify-center">
        <p className="display4">드디어 Prography 10기 모집이 시작되었습니다.</p>
        <div className="my-15 flex w-full flex-wrap justify-center gap-4">
          <Badge type="PO" label="Product Owner" />
          <Badge type="DE" label="Designer" />
          <Badge type="DEV" label="iOS" />
          <Badge type="DEV" label="AOS" />
          <Badge type="DEV" label="Frontend(React)" />
          <Badge type="DEV" label=" Backend(Spring)" />
        </div>
        <p className="display2">총 6개의 파트를 모집합니다.</p>
      </div>
      <div className="flex h-full min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col gap-24">
          <p className="display3-medium">
            ☑️ 새로운 가치를 만들어내는데 가슴이 두근거리신다면,
          </p>
          <p className="display3-medium">
            ☑️ 열정적인 IT인들과 함께 사이드 프로젝트를 하고 싶으시다면,
          </p>
          <p className="display3-medium">
            ☑️ 탁월한 동료들과 짜릿한 성취감을 느껴보고 싶으시다면,
          </p>
        </div>
      </div>
      <div className="flex h-full min-h-screen flex-col items-center justify-center">
        <h2 className="display6 text-primary mt-50">"프로답게, 재미있게"</h2>
        <p className="display1-medium mt-10">
          재미있는 작당을 함께 만들어갈 10기에 합류하세요.
        </p>
        <p className="title1 mt-30 mb-8">
          📌 자세한 정보는 아래 페이지에 담아뒀으니, 지원 전 꼭 확인해주세요 👇🏻
        </p>
        <div className="flex flex-col items-center gap-5">
          <a className="body1">🗒️ 모집 안내 살펴보기</a>
          <a className="body1">🏡 공식 홈페이지</a>
          <a className="body1">🔗 인스타그램</a>
        </div>
      </div>
    </main>
  );
};

export default Home;
