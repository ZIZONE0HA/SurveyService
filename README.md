# 🧾SurveyService


 [설문조사 서비스 개발](https://survey-service.vercel.app/)

<br>

### 시작하기
해당 프로젝트를 열고 다음과 같이 명령어를 실행해주세요.
```
npm i
```
```
npm run dev
```
<br><br>

## 프로젝트 개요


### 목적
- 설문조사 작성, 수정, 조회 및 관리를 간편하게 제공.
- 브라우저 기반의 설문 데이터 저장(localStorage 활용).
- React.js와 Vite를 활용한 모바일 웹 중심의 클라이언트 개발.

<br>

### 주요 기능
- 설문조사 리스트 조회
- 설문조사 상세 보기
- 설문조사 작성 및 질문/옵션 추가

<br>

### 개발환경 및 기술스택
-  React (v18.3.1) / React DOM (v18.3.1) / React Router DOM (v7.0.2)
-  Vite (v6.0.1)
-  ES Module (type: "module")
-  JavaScript / CSS / HTML
-  localStorage를 데이터 저장소로 활용

<br/><br/>
## 설계 및 데이터 구조

### 데이터 구조 설계
설문 데이터의 JSON 예시
```
{
    "id": "1",
    "title": "제주공항 승객불편사항 만족도 조사",
    "startDate": "2023.08.01",
    "endDate": "2023.08.31",
    "questions": [
      {
        "id": "1",
        "type": "radio",
        "questionText": "제주공항을 이용해 보신 적이 있습니까?",
        "required": true,
        "options": [
          {
            "id": "1",
            "optionText": "있다"
          },
          {
            "id": "2",
            "optionText": "없다"
          }
        ]
      },
      {
        "id": "2",
        "type": "checkbox",
        "questionText": "승객의 불편함을 해소하기 위해 필요한 것을 무엇이라고 생각하시나요? (중복 선택 가능)",
        "required": true,
        "options": [
          {
            "id": "1",
            "optionText": "화장실, 터미널, 입국 확충"
          },
          {
            "id": "2",
            "optionText": "안내 인력 추가 배치"
          },
          {
            "id": "3",
            "optionText": "각종 편의시설 및 상업시설 추가 배치"
          },
          {
            "id": "4",
            "optionText": "대중 교통 접근성 개선"
          },
          {
            "id": "5",
            "optionText": "실내 정원도 개선"
          }
        ]
      }
    ]
  }
```

### UI/UX 설계
- 설문조사 목록 페이지
  - 빈 상태
    - "등록된 설문조사가 없습니다." 메시지 표시.
  - 신규 버튼
    - 클릭 시, [설문조사 등록 페이지]로 이동
  - 설문조사 개수 표시
  - 설문 목록
    - index, 제목, 기간
    - 클릭 시, [해당 설문조사의 상세페이지]로 이동
<br/>
- 설문조사 등록 페이지
  - 제목 및 기간 입력 필드.
  - 질문 컴포넌트
    - 설문조사 질문
    - 타입
    - 옵션 컴포넌트
    - 필수항목 여부
    - 질문 삭제 버튼
  - 질문 타입(checkbox / radio )에 따른 옵션 컴퍼넌트 렌더링
  - 질문 추가 버튼과 옵션 추가 버튼
  - 등록하기 버튼
    - 클릭 시 새 설문조사 등록을 알리는 모달창이 뜨고, 새로운 설문조사 생성- 등록하기 버튼
  - 뒤로가기 버튼
    - 클릭 시 작성을 취소하겠냐는 문구와 모달창이 뜸
    - 아니오 클릭 시 현재 페이지 유지
    - 예 클릭시 이전페이지([설문조사 목록 페이지])로 이동
<br/>
- 설문조사 상세 페이지
  - 저장된 설문조사 데이터를 기반으로 제목, 기간, 각 질문 및 옵션 표시.
  - [설문조사 등록 페이지]에 해당되는 정보 읽기 모드로 불러옴
    -  질문추가, 질문 삭제, 옵션추가 버튼 렌더링 x




### 시작하기
해당 프로젝트를 열고 다음과 같이 명령어를 실행해주세요.
```
npm i
```
```
npm run dev
```

<br/><br/>


## 프로젝트 구조

### 폴더 구조

```
SurveyService
├─ public
├─ index.html
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  ├─ components
│  │  ├─ Button
│  │  │  ├─ Button.css
│  │  │  └─ Button.jsx
│  │  ├─ Form
│  │  │  ├─ Form.css
│  │  │  └─ Form.jsx
│  │  ├─ Header
│  │  │  ├─ Header.css
│  │  │  └─ Header.jsx
│  │  ├─ Modal
│  │  │  ├─ Modal.css
│  │  │  └─ Modal.jsx
│  │  ├─ OptionItem
│  │  │  ├─ OptionItem.css
│  │  │  └─ OptionItem.jsx
│  │  ├─ OptionList
│  │  │  ├─ OptionList.css
│  │  │  └─ OptionList.jsx
│  │  ├─ QuestionItem
│  │  │  ├─ QuestionItem.css
│  │  │  └─ QuestionItem.jsx
│  │  ├─ QuestionList
│  │  │  ├─ QuestionList.css
│  │  │  └─ QuestionList.jsx
│  │  ├─ SurveyInventory
│  │  │  ├─ SurveyInventory.css
│  │  │  └─ SurveyInventory.jsx
│  │  └─ SurveyItem
│  │     ├─ SurveyItem.css
│  │     └─ SurveyItem.jsx
│  ├─ index.css
│  ├─ main.jsx
│  ├─ mockdata.js
│  ├─ pages
│  │  ├─ NotFound.jsx
│  │  ├─ SurveyCreate.jsx
│  │  ├─ SurveyList.jsx
│  │  └─ SurveyView.jsx
│  └─ utils
│     ├─ formatDate.js
│     ├─ getTodayDate.js
│     └─ onDateInputChange.js
├─ .gitignore
├─ eslint.config.js
├─ package-lock.json
├─ package.json
├─ README.md
└─ vite.config.js
```



### 라이브러리
```
"devDependencies": {
    "@eslint/js": "^9.15.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.15.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.12.0",
    "vite": "^6.0.1"
  }
```
