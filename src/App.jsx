import './App.css'
import { Routes, Route } from 'react-router-dom'
import SurveyView from './pages/SurveyView'
import SurveyList from './pages/SurveyList'
import SurveyCreate from './pages/SurveyCreate'
import NotFound from './pages/NotFound'
import { useReducer, useRef, createContext, useEffect, useState } from 'react'
import mockdata from './mockdata'

export const StateContext = createContext();
export const DispatchContext = createContext();

function reducer(state, action) {
  let nextState;

  switch(action.type){
    case 'INIT' : 
      return action.payload;
    //새 설문조사 등록
    case "CREATE_SURVEY" : {
      nextState = [action.payload, ...state];
      break;
    }
    default:
      return state;
  }

  //localStorage에 저장
  localStorage.setItem("survey", JSON.stringify(nextState));
  return nextState;

}

function App() {
  // 테스트 시, 아래(37,38) 코드 주석처리하시고, 이 코드를 주석해제하시면 mockdata를 통해 구현 화면 확인 가능합니다.
  // const [data, dispatch] = useReducer(reducer, mockdata); 
  // const surveyIdRef = useRef(mockdata.length+1);  //설문조사 id
  const [data, dispatch] = useReducer(reducer, []); 
  const surveyIdRef = useRef(1);  //설문조사 id

  // const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const storedData = localStorage.getItem("survey");
    if(!storedData){ //storedData 가 undefined / null일 시 종료
      return;
    }

    const parsedData = JSON.parse(storedData);
    if(!Array.isArray(parsedData)){
      // setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item) => {
      if(Number(item.id) > maxId){
        maxId = Number(item.id)
      }
    });

    surveyIdRef.current = maxId+1;

    dispatch({
      type:"INIT",
      payload: parsedData,
    });
    // setIsLoading(false);
  },[]);

  //새 설문조사 등록
  const onCreateSurvey = (newSurveyData) => {
    const newSurvey = {
      ...newSurveyData,
      id : surveyIdRef.current++, 
    };

    dispatch({
      type:"CREATE_SURVEY",
      payload: newSurvey,
    });
  }

  // if(isLoading){
  //   return <div>데이터 로딩중입니다...</div>
  // }

  return (
    <>
  <StateContext.Provider value={data}>
    <DispatchContext.Provider value={{onCreateSurvey}}>
    <Routes>
      <Route path='/' element={<SurveyList/>}></Route>
      <Route path='/survey-view/:id' element={<SurveyView/>}></Route>
      <Route path='/survey-create' element={<SurveyCreate/>}
      ></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </DispatchContext.Provider>
  </StateContext.Provider>
    </>
  )
}

export default App
