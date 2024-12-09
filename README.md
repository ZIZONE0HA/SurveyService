# 🧾SurveyService


 [설문조사 서비스 개발](https://survey-service.vercel.app/)

<br>

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
- 설문 리스트 화면:
  - 빈 상태: "등록된 설문조사가 없습니다." 메시지 표시.
  - 우측 상단, 신규 버튼 : 클릭시 [설문조사 등록] 페이지로 이동
  - 설문 목록: index, 제목, 기간 
    
### 설문 상세 화면:
제목, 설명, 각 질문 및 옵션 표시.
'수정' 및 '삭제' 버튼 제공.

### 설문 작성 화면:
제목 및 설명 입력 필드.
질문 추가 버튼과 옵션 입력 필드.



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



## 구현 동작
