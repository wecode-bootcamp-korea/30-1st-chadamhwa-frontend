# 차담화 Cha.Dam.Hwa

'차담화'는 술담화(온라인 전통주판매, 구독서비스)를 모티브로 '전통차를 판매하는 웹 사이트'로 기획하여 진행한 프로젝트입니다. 메인 페이지에 각 테마별로 추천하는 차의 종류들을 추천해주고, 전통차를 구매하는 페이지(product list page)에 들어가면 고객이 원하는 니즈를 충족할 수 있도록 중복 필터링으로 검색 가능하게 만들었으며, 각각의 전통차를 클릭하면 상세페이지로 이동하여 고객이 원하는 수량과 가격을 선택 가능 하게 해주고, 구매까지 가능하게 하나의 플로우를 구현할 수 있는 로직에 집중하여 프로젝트를 진행하였습니다.

## 개발 기간 및 인원

### 개발 기간
- 2022.02.28 ~ 2022.03.11

### 개발 인원 (6명)

- FE
  - 박별 : 공통 컴포넌트 Nav/Footer, 회원가입 페이지(유효성 검사), 로그인 페이지(유효성 검사), 메인 페이지(이중 map으로 상품 소개 & 상단 자동 슬라이드), 이벤트 페이지, 장바구니(cart) 페이지
  - 박철진 : product 리스트 페이지 (중복 필터링)
  - 신윤지 : product 상세 페이지 (상품 수량 및 가격)

- BE
  - 박영서
  - 안성준
  - 임정찬

# Target site
### 사이트 소개
- <a href="https://www.sooldamhwa.com/">술담화</a>

### 사이트 선정 이유
- 깔끔하고 심플한 UI
- 다양한 카테고리 및 필터링 기능
- 구독서비스 기능

# 📝 적용 기술 및 구현 기능

![차담화](https://user-images.githubusercontent.com/93993101/166433474-beb9da0d-656f-4e63-99e7-cfa8c311cfa6.gif)

### 적용 기술

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)

### 구현 기능

- Nav & Footer
  - Nav : 스크롤바 이동시 함께 움직이게 구현, 로그인 버튼 클릭시, useNavigate() 훅을 이용하여 'login page'로 이동하도록 구현 
  - Footer : 타겟 사이트 술담화의 footer와 동일하게 구현

- Join(회원가입) 페이지
  - id와 pw의 조건을 만족하면, 회원가입 버튼 활성화 기능구현   
  - 조건 만족 못 할시, alert 창 발동 기능구현
 
- Login(로그인) 페이지
  - id와 pw 틀리게 기입하면, alert 창 발동 기능구현
  - id("@"포함)와 pw("5자이상")조건 만족시, 로그인 버튼 활성화 기능구현
  
- Main 페이지
  - 페이지 상단에 이벤트 배너 자동 슬라이드 기능구현
  - 각각의 테마 소개 (테마 종류에 따라 전통차 다르게 추천) : 이중 map 사용해서 구현
  - path parameter로 상품 id를 백엔드에 전달하여 메인 페이지에 필요한 데이터를 받아와 보여줌
  - cart 버튼 클릭시, useNavigate() 훅을 이용하여 해당 cart 페이지로 이동

- Product List 페이지
  - 중복 필터링 기능으로 조건에 따른 전통차 표시 구현
  - path parameter로 상품 id를 백엔드에 전달하여 상품 리스트 페이지에 필요한 데이터를 받아와 보여줌
  - path parameter로 상품클릭시, 해당 상품 상세 페이지로 넘어가게 기능구현


- product Detail 페이지
  - 수량에 따른 총 가격 보여주는 기능 구현
  - map을 사용한 각각의 상품에 별점을 표시 구현
  
  
- Event 페이지
  - 진행중인 이벤트 배너들을 보여줌
