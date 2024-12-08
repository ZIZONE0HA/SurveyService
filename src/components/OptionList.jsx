import './optionList.css'
import OptionItem from './OptionItem';
import Button from './Button';

const OptionList = ({options, setOptions, optionIdRef, isReadOnly = false}) =>{
    
    //옵션 추가
    const onAddOption = () =>{
        if (isReadOnly) return;
        setOptions((prev)=>[
            ...prev,
            {
                id:optionIdRef.current++,
                optionText:"",
            }
        ]);
    }

    //옵션 업데이트
    const onUpdateOption = (id, newText) =>{
        if (isReadOnly) return;
        setOptions((prev)=>
            prev.map((option)=>
            option.id === id
            ? {...option, optioniText:newText}
            : option
            )
        );
    }

    
    return(
        <div className='OptionList'>
            <div className='option_wrapper'>
            {options.map((option)=>(
                <OptionItem key={option.id}
                option={option}
                onUpdateOption={onUpdateOption}
                isReadOnly={isReadOnly}/>
            ))}
            </div>
            {!isReadOnly && (
                <Button
                    text={"옵션추가"}
                    type={"OPTION"}
                    onClick={onAddOption}/>
            )}
        </div>
    );
}

export default OptionList;