import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import './SurveyItem.css'

const SurveyItem = ({id, title, startDate, endDate}) =>{
    const nav = useNavigate();

    return(
        <div 
        className="SurveyItem" 
        onClick={()=>nav(`/survey-view/${id}`)}>
            <div className="num_section">
                <div className="num">
                    {id}
                </div>
            </div>
            <div className="info_section">
                <div className="title">
                    {title}
                </div>
                <div className="period">
                    기간: {startDate} ~ {endDate}
                </div>
            </div>
            <div className="button_section">
                <Button
                text={<span className="material-symbols-outlined">
                    arrow_forward_ios
                    </span>}
                type={"ICON"}/>
            </div>
        </div>
    );
}

export default SurveyItem;