import './SurveyInventory.css'
import SurveyItem from './SurveyItem';

const SurveyInventory = ({data}) =>{
    
    return(
        <div className="SurveyInventory">
            <div className="counter" >
                전체 항목 수: {data.length}개
            </div>
            <div className="survey_wrapper">
                {data.length > 0
                ? (data.map((item)=><SurveyItem key={item.id} {...item}/>))
                : (
                    <div className='empty_message'>
                        등록된 설문조사가 <br/> 없습니다.
                    </div>
                )}
            </div>
        </div>
    );
}

export default SurveyInventory;