import { useState } from "react";
import addButton  from "../../../assets/add-button.svg"

export default function FormSection({ sectionName, textInputs, associatedInputs, sectionList, handleAdd, associations, initialValues }) {

    const [state, setState] = useState( initialValues)

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

        const associatedList = [...state[e.target.name]];
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
                [e.target.name]: associatedList
            }
        )
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        handleAdd(state)
        setState(initialValues)
    }

    return (
        <div className="portfolio-form-section">
            <form className="section-form" onSubmit={handleSubmit}>
                <div className="form-inputs">
                    {textInputs.map( i => 
                        <input
                            key={i.name}
                            name={i.name}
                            placeholder={i.placeholder}
                            value={state[i.name]}
                            type="text"
                            onChange={handleChange}    
                        />
                    )}
                    <>
                    {associatedInputs.map((i) => <div key={i.name} className="form-suggested-inputs">
                            <label>{i.label}</label>
                            <div className="selections">
                                {associations[i.name] && associations[i.name].map(
                                    (associationItem) =>
                                        <button
                                            name={i.name}
                                            type="button"
                                            style={{
                                                backgroundColor: state[i.name].includes(associationItem.id) ? 'rgb(170, 84, 84)' : 'rgb(219, 157, 157)'
                                            }}
                                            value={associationItem.id}
                                            key={associationItem.id}
                                            onClick={addToAssociatedList}
                                        >
                                            {i.itemLabel(associationItem)}
                                        </button>
                                )}
                            </div>
                            </div>
                        )}
                    </>
                </div>
                <input
                    className="form-add-button"
                    name={`add-${sectionName.toLowerCase()}`}
                    type="image"
                    src={addButton}
                />
            </form>
            <section className="form-section-list">
                {sectionList && sectionList.items && sectionList.items.map(i => 
                    <div className="section-list-item" key={sectionList.itemKey(i)}>
                       {sectionList.itemLabel(i)}
                    </div>
                ) /*TODO: make this editable and deletable*/}
            </section>
        </div>
    )
}
