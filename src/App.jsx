import './App.css'
import { Routes, Route } from 'react-router-dom'
import SurveyView from './pages/SurveyView'
import SurveyList from './pages/SurveyList'
import SurveyCreate from './pages/SurveyCreate'
import NotFound from './pages/NotFound'
import { useReducer, useRef, createContext } from 'react'
import mockdata from './mockdata'

export const StateContext = createContext();
export const DispatchContext = createContext();

function reducer(state, action) {
  switch(action.type){
    //새 설문조사 등록
    case "CREATE_SURVEY" :
      return [action.payload, ...state];
    default:
      return state;
  }

}

function App() {
  const [data, dispatch] = useReducer(reducer, mockdata); //초기상태 : 샘플데이터
  const surveyIdRef = useRef(mockdata.length+1);  //설문조사 id

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
