import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import SurveyView from './pages/SurveyView'
import SurveyList from './pages/SurveyList'
import SurveyForm from './pages/SurveyForm'
import NotFound from './pages/NotFound'
import Button from './components/Button'
import Header from './components/Header'

function App() {

  const nav = useNavigate();

  return (
    <>
    <Routes>
      <Route path='/' element={<SurveyList/>}></Route>
      <Route path='/survey-view/:id' element={<SurveyView/>}></Route>
      <Route path='/survey-form' element={<SurveyForm/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </>
  )
}

export default App
