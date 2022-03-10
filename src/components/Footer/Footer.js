import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="inner">
        <div className="aside-left">
          <ul className="wrap">
            <li className="provision">
              <a href="/">이용약관</a>
            </li>
            <li className="policy">
              <a href="/">정보처리방침</a>
            </li>
            <li className="partner">
              <a href="/">파트너 문의</a>
            </li>
          </ul>
          <ul className="company-infolist">
            <li className="company-info">
              <span className="bold">담화컴퍼니 주식회사</span>
              <span>대표 : 박 별</span>
              <span>정보보호 책임자 : 임정찬</span>
            </li>

            <li className="company-info">
              <span>
                서울특별시 서초구 강남대로 527,10층(브랜드칸타워,차담화)
              </span>
              <span>사업자등록번호 : 620-81-58299</span>
              <span className="bold">사업자확인</span>
            </li>

            <li className="company-info">
              <span>통신판매 신고번호: 2021-서울서초-2084</span>
              <span>대표전화: 070-5014-1282</span>
              <span>info@chadamhwa.com</span>
            </li>

            <li className="company-info">
              <span className="bold">
                차담화는 통신판매중개자로서 통신판매 당사자가 아니며, 판매자가
                등록한 상품정보 및 거래에 대해 차담화는 책임을 지지 않습니다.
              </span>
            </li>

            <li className="company-info">
              <span>
                고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서
                가입한 NICE구매안전 (에스크로)서비스를 이용하실 수 있습니다.
              </span>
              <span className="bold">서비스가입사실 확인</span>
            </li>
          </ul>
        </div>
        <div className="aside-right">
          <ul className="info">
            <span>고객센터: 070-5014-1282</span>
            <li>평일 10:00 - 18:00, 주말 휴무</li>
          </ul>
          <div className="sns">
            <a href="/">
              <img src="images/instagram_logo.png" alt="instagram_logo" />
            </a>
            <a href="/">
              <img src="images/youtube_logo.png" alt="youtube_logo" />
            </a>
            <a href="/">
              <img src="images/kakao_logo.png" alt="kakao_logo" />
            </a>
            <a href="/">
              <img src="images/facebook_logo.png" alt="facebook_logo" />
            </a>
            <a href="/">
              <img src="images/naver_logo.png" alt="naver_logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
