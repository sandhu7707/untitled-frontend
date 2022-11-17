import { useState } from "react"
import addButton from "../../assets/add-button.svg"
import editButton from "../../assets/edit-button.svg"
import confirmButton from "../../assets/confirm-button.svg"

export default function FormSection(props) {

    const { sectionKey, sectionName, textInputs, associatedInputs, sectionList,
        handleAdd, associations, initialValues, dateInputs, bigTextInputs } = props;

    const [state, setState] = useState(initialValues)
    const [isEditing, setIsEditing] = useState(false)

    const handleChange = (e) => {
        if (e.target.type == "text" || e.target.type == "date") {
            setState(
                {
                    ...state,
                    [e.target.name]: e.target.value
                });
        }
    }

    const addToAssociatedList = (e) => {

        const associationKey = `${e.target.name}Ids`
        const associatedList = [...state[associationKey]];
        const value = parseInt(e.target.value)

        if (associatedList.includes(value)) {
            associatedList.splice(
                associatedList.indexOf(value), 1);
        }
        else {
            associatedList.push(value);
        }

        setState(
            {
                ...state,
                [associationKey]: associatedList
            }
        )

        console.log(state)
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        handleAdd(state, sectionKey)
        setState(initialValues)
        setIsEditing(false)
    }

    const textInputElements = textInputs.map(textInput =>
        <div key={textInput.name}>
        <label>{textInput.label}</label>
        <input
            name={textInput.name}
            placeholder={textInput.placeholder}
            value={state[textInput.name]}
            type="text"
            onChange={handleChange}
        />
        </div>
    )

    const associatedInputElements = associatedInputs.map((associatedInput) => <div key={associatedInput.name} >
        <label>{associatedInput.label}</label>
            {associations[associatedInput.associationName] && associations[associatedInput.associationName].map(
                (associationItem) =>
                    <button
                        name={associatedInput.name}
                        type="button"
                        style={{
                            backgroundColor: state[`${associatedInput.name}Ids`].includes(associationItem.id) ? 'rgb(170, 84, 84)' : 'rgb(219, 157, 157)'
                        }}
                        value={associationItem.id}
                        key={associationItem.id}
                        onClick={addToAssociatedList}
                    >
                        {associatedInput.itemLabel(associationItem)}
                    </button>
            )}
    </div>
    )

    const dateInputElements = dateInputs && dateInputs.map((dateInput) => 
    <div key={dateInput.name}>
        <label>{dateInput.label}</label>
        <input
            type="date"
            name={dateInput.name}
            value={state[dateInput.name]}
            onChange={handleChange}
        />
    </div>)

    const textareaInputElements = bigTextInputs && bigTextInputs.map((bigTextInput) => 
    <div key={bigTextInput.name}  className="form-textarea-input">
        <label>{bigTextInput.label}</label>
        <textarea
            name={bigTextInput.name}
            rows={5}
            value={state[bigTextInput.name]}
            onChange={handleChange}
        />
    </div>)

    const editItem = (e) => {
        console.log(e.target.value)
        console.log(sectionList)
        const newState = sectionList.items.filter(item => item.id === parseInt(e.target.value))[0]
        setState(newState)
        setIsEditing(true)
    }

    const listElement = sectionList && sectionList.items && sectionList.items.map(i =>
        <div className="section-list-item" key={i.id}>
            {sectionList.itemLabel(i)}
            <input className="form-edit-button" value={i.id} type="image" src={editButton} onClick={editItem}/>
        </div>
    ) /*TODO: make this editable and deletable*/

    return (
        <div className="portfolio-form-section">
            <form className="section-form" onSubmit={handleSubmit}>
                <div className="form-inputs">
                    <div className="form-text-inputs">{textInputElements}</div>
                    <div className="form-date-inputs">{dateInputElements}</div>
                    <>{textareaInputElements}</>
                    <div className="form-suggested-inputs">
                        {associatedInputElements}
                    </div>
                    
                </div>
                <input
                    className="form-add-button"
                    name={`add-${sectionKey}`}
                    type="image"
                    src={ isEditing ? confirmButton : addButton}
                />
            </form>
            <section className="form-section-list">
                { listElement }
            </section>
        </div>
    )
}
