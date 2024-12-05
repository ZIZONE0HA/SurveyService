import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const SurveyView = () => {
    const params = useParams();
    const nav = useNavigate();

    return(
    <div>
            <Header 
            title={"설문조사 목록"} 
            leftChild={<Button text={'신규'} type={"NEW"} 
            onClick={()=>{nav(-1);}}/>}/>
    </div>);
};

export default SurveyView;
