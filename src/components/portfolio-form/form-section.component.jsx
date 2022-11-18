import { useState } from "react"
import addButton from "../../assets/add-button.svg"
import editButton from "../../assets/edit-button.svg"
import confirmButton from "../../assets/confirm-button.svg"

export default function FormSection(props) {

    const { sectionKey, sectionName, sectionList,
        handleAdd, inputs } = props;

    const { textInputs, associatedInputs, dateInputs,
         bigTextInputs, conditionalInputs } = inputs;

    const initialValues = {}

    for (let inputGroup in inputs) {
        inputs[inputGroup].forEach(input => {
            if (inputGroup === "associatedInputs") {
                initialValues[`${input.name}Ids`] = []
            }
            else {
                initialValues[input.name] = ""
            }
        })
    }

    const [formState, setFormState] = useState(initialValues)
    const [isEditing, setIsEditing] = useState(false)

    const handleChange = (e) => {
        console.log(e)
            setFormState(
                {
                    ...formState,
                    [e.target.name]: e.target.value
                });
    }

    const addToAssociatedList = (e) => {

        const associationKey = `${e.target.name}Ids`
        const associatedList = [...formState[associationKey]];
        const value = parseInt(e.target.value)

        if (associatedList.includes(value)) {
            associatedList.splice(
                associatedList.indexOf(value), 1);
        }
        else {
            associatedList.push(value);
        }

        setFormState(
            {
                ...formState,
                [associationKey]: associatedList
            }
        )
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        handleAdd(formState, sectionKey)
        setFormState(initialValues)
        setIsEditing(false)
    }

    const textInputElements = textInputs.map(textInput =>
        <div key={textInput.name}>
            <label>{textInput.label}</label>
            <input
                name={textInput.name}
                placeholder={textInput.placeholder}
                value={formState[textInput.name]}
                type="text"
                onChange={handleChange}
            />
        </div>
    )

    const associatedInputElements = associatedInputs && associatedInputs.map((associatedInput) => 
    <div key={associatedInput.name}>
        <label>{associatedInput.label}</label>
        {associatedInput.items && associatedInput.items.map(
            (associationItem) =>
                <button
                    name={associatedInput.name}
                    type="button"
                    style={{
                        backgroundColor: formState[`${associatedInput.name}Ids`].includes(associationItem.id) ? 'rgb(170, 84, 84)' : 'rgb(219, 157, 157)'
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

    console.log(formState)
    const conditionalInputElements = conditionalInputs && conditionalInputs.map((conditionalInput) => 
        <div key={conditionalInput.name} className="conditional-input-options">
            <label>{conditionalInput.label}</label>
            {conditionalInput.categories.map((op) => 
                <div key={op.name}><label><input type="radio" value={op.value} name={conditionalInput.name} onChange={handleChange} />{op.label}</label></div>
            )}
            {
                conditionalInput.categories.map((option) => {
                    
                    const isHidden = !formState[conditionalInput.name] ||
                    (formState[conditionalInput.name] && formState[conditionalInput.name] !== option.value);
                    
                    return (
                        <div hidden={isHidden} key={option.name}>
                            {conditionalInput.label}!!!!!!!!
                        </div>
                    )
                }
                )
            }
        </div>
    )

    const dateInputElements = dateInputs && dateInputs.map((dateInput) =>
        <div key={dateInput.name}>
            <label>{dateInput.label}</label>
            <input
                type="date"
                name={dateInput.name}
                value={formState[dateInput.name]}
                onChange={handleChange}
            />
        </div>)

    const textareaInputElements = bigTextInputs && bigTextInputs.map((bigTextInput) =>
        <div key={bigTextInput.name}>
            <label>{bigTextInput.label}</label>
            <textarea
                name={bigTextInput.name}
                rows={5}
                value={formState[bigTextInput.name]}
                onChange={handleChange}
                placeholder={bigTextInput.placeholder}
            />
        </div>)

    const editItem = (e) => {
        
        const newFormState = sectionList.items.filter(item => item.id === parseInt(e.target.value))[0]
        setFormState(newFormState)
        setIsEditing(true)
    }

    const listElement = sectionList && sectionList.items && sectionList.items.map(i =>

        <div className="section-list-item" key={i.id}>
            {sectionList.itemLabel(i)}
            <input className="form-edit-button" value={i.id} type="image" src={editButton} onClick={editItem} alt="edit" />
        </div>
    ) /*TODO: make this editable and deletable*/

    return (
        <div className="portfolio-form-section">
            <form className="section-form" onSubmit={handleSubmit}>
                <div className="form-inputs">
                    <div className="form-text-inputs">{textInputElements}</div>
                    <div className="form-date-inputs">{dateInputElements}</div>
                    <div className="form-conditional-inputs">{conditionalInputElements}</div>
                    <div className="form-textarea-input">{textareaInputElements}</div>
                    <div className="form-suggested-inputs">{associatedInputElements}</div>
                </div>
                <input
                    className="form-add-button"
                    name={`add-${sectionKey}`}
                    type="image"
                    src={isEditing ? confirmButton : addButton}
                    alt={isEditing ? "confirm" : "add"}
                />
            </form>
            <section className="form-section-list">
                {listElement}
            </section>
        </div>
    )
}
