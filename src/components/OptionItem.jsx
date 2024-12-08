import './OptionItem.css'

const OptionItem = ({option, type, onUpdateOption, isReadOnly = false}) =>{

    const {id, optionText } = option;

    const onChangeOptionText = (e) =>{
        if (isReadOnly) return;
        onUpdateOption(id, e.target.value);
    };

    return(
        <div className='OptionItem'>
            <div className='type_box'>
                {type === "radio"
                ? (<input type='radio' disabled/>)
                : (<input type='checkbox' disabled/>)}
            </div>
            <input type="text"
            placeholder='옵션명을 입력해주세요'
            value={optionText}
            onChange={onChangeOptionText}
            readOnly={isReadOnly}/>
        </div>
    );
}

export default OptionItem;