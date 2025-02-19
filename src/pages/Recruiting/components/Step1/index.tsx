import RequiredLabel from "../RequiredLabel";
import Label from "../RequiredLabel";

const Step1 = () => {
  return (
    <div>
      <p>개인정보 수집동의</p>
      <p>프로그라피 10기 지원을 위한 개인정보 수집에 대한 동의가 필요합니다</p>
      <p>
        수집 목적: Prography 10기 리쿠르팅 과정 및 결과 안내
        <br />
        수집 항목: 이름, 이메일, 핸드폰번호, 학교 정보 및 직장 정보
        <br />
        보유 및 이용 기간: 리쿠르팅 과정 종료일(3월 7일) 이후 파기
        <br />
      </p>
      <div className="flex flex-col gap-2">
        <RequiredLabel>개인정보 수집 동의 여부를 체크해주세요.</RequiredLabel>
        <div className="flex items-center gap-2">
          <input
            id="privacyConsent-yes"
            type="radio"
            name="privacyConsent"
            className="border p-2"
            value="yes"
          />
          <label htmlFor="privacyConsent-yes">
            개인정보 수집 여부에 동의합니다
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input
            id="privacyConsent-no"
            type="radio"
            name="privacyConsent"
            className="border p-2"
            value="no"
          />
          <label htmlFor="privacyConsent-no">
            개인정보 수집 여부에 동의하지 않습니다
          </label>
        </div>
      </div>
    </div>
  );
};

export default Step1;
