const mockdata = [
  {
    "id": "2",
    "title": "설문조사 제목 예시",
    "startDate": "2023.09.01",
    "endDate": "2023.09.30",
    "questions": [
      {
        "id": "1",
        "type": "radio",
        "questionText": "이번 설문조사에 참여하게 된 계기는 무엇인가요?",
        "required": true,
        "options": [
          {
            "id": "1",
            "optionText": "웹사이트를 통해서"
          },
          {
            "id": "2",
            "optionText": "친구의 추천"
          },
          {
            "id": "3",
            "optionText": "기타"
          }
        ]
      },
      {
        "id": "2",
        "type": "checkbox",
        "questionText": "관심 있는 항목을 모두 선택해주세요.",
        "required": false,
        "options": [
          {
            "id": "1",
            "optionText": "여행"
          },
          {
            "id": "2",
            "optionText": "음식"
          },
          {
            "id": "3",
            "optionText": "쇼핑"
          },
          {
            "id": "4",
            "optionText": "문화"
          }
        ]
      }
    ]
  },
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
  },
]

export default mockdata;