import { useState } from "react"
import addButton from "../../assets/add-button.svg"
import editButton from "../../assets/edit-button.svg"

export default function FormSection(props) {

    const { sectionKey, sectionName, textInputs, associatedInputs, sectionList,
        handleAdd, associations, initialValues } = props;

    const [state, setState] = useState(initialValues)

    const handleChange = (e) => {
        if (e.target.type == "text") {
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
    }

    const textInputElements = textInputs.map(textInput =>
        <input
            key={textInput.name}
            name={textInput.name}
            placeholder={textInput.placeholder}
            value={state[textInput.name]}
            type="text"
            onChange={handleChange}
        />
    )

    const associatedInputElements = associatedInputs.map((associatedInput) => <div key={associatedInput.name} className="form-suggested-inputs">
        <label>{associatedInput.label}</label>
        <div className="selections">
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
    </div>
    )

    const editItem = (e) => {

        const newState = sectionList.items.filter(item => item.title === e.target.value)[0]
        setState(newState)
    }

    const listElement = sectionList && sectionList.items && sectionList.items.map(i =>
        <div className="section-list-item" key={sectionList.itemKey(i)}>
            {sectionList.itemLabel(i)}
            <input className="form-edit-button" value={`${i.title}`} type="image" src={editButton} onClick={editItem}/>
        </div>
    ) /*TODO: make this editable and deletable*/

    return (
        <div className="portfolio-form-section">
            <form className="section-form" onSubmit={handleSubmit}>
                <div className="form-inputs">
                    {textInputElements}
                    <>
                        {associatedInputElements}
                    </>
                </div>
                <input
                    className="form-add-button"
                    name={`add-${sectionKey}`}
                    type="image"
                    src={addButton}
                />
            </form>
            <section className="form-section-list">
                { listElement }
            </section>
        </div>
    )
}
