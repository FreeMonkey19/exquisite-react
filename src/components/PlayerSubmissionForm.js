import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = ({onSubmitCallBack, currentPlayerId}) => {
  // I did not do this project in the Waves as recommended. The instructions did not totally make sense to me. 
  // I got a solid 3 hours of tutoring while working on this project. React can get confusing - fast. 
  // I referenced this link often. 
  // https://codesandbox.io/s/serene-fire-no8p7?file=/src/components/SignupForm.js
  const [formFields, setFormFields ] = useState({
    the1: "The",
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    the2: 'the',
    adj2: '',
    noun2: ''
  });

  const inputs = {
    // This feels repetitive - need to DRY
    adj1: {
      // This regex allows alphabetic characters only. However, 
      // upon the actual 'submit', non-alphabetic characters pass through my program! :(
      validation: /[a-zA-Z]/,
    },
    noun1: {
      validation: /[a-zA-Z]/, 
    },
    adv: {
      validation: /[a-zA-Z]/,
    },
    verb: {
      validation: /[a-zA-Z]/,
    },
    adj2: {
      validation: /[a-zA-Z]/,
    },
    noun2: {
      validation: /[a-zA-Z]/,
    }
  };

  const onInputChange = (event) => {
    const newFormFields = {
      // using the spread operator to grab ALL the form fields
      ...formFields,
    };

    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };
  // https://codesandbox.io/s/serene-fire-no8p7?file=/src/components/SignupForm.js
  const validateField = fieldName => {
    return inputs[fieldName].validation.test(formFields[fieldName]);
  };

  const onFormSubmit = (e) => {
    // prevent default behavior which is to call external api (?)
    e.preventDefault();
    
    const formFieldsArray = Object.values(formFields);

    // check if form fields are NOT empty
    if (!formFieldsArray.includes('')) {

      onSubmitCallBack(formFields);

      setFormFields({
        the1: "The",
        adj1: '',
        noun1: '',
        adv: '',
        verb: '',
        the2: 'the',
        adj2: '',
        noun2: ''
      });
    }

  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{currentPlayerId}</h3>

      <form 
        className="PlayerSubmissionForm__form" 
        onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
        {/* There's a lot of repeition in the form. Not sure if that's just how forms work, 
        or if this can be refactored. If time were not an issue, I would look into this further.
        The example forms in lecture etc. seem to have this repeition as well.  */}
          The
          <input
            name="adj1"
            placeholder="adjective"
            type="text"
            // This is repetitive - need to DRY
            onChange={onInputChange}
            // This too is repetitive - need to DRY
            // This applies the (already provided) css for pink fields. Not sure why the 't' is 
            // after "PlayerSubmissionFormt". Why is that 't' there? I looked at the css to verify as the 
            // css was provided. 
            className={validateField("adj1") ? "" : "PlayerSubmissionFormt__input--invalid"}
            value={formFields.adj1}
            />
          <input
            name="noun1"
            placeholder="noun"
            type="text"
            onChange={onInputChange}
            className={validateField("noun1") ? "" : "PlayerSubmissionFormt__input--invalid"}
            value={formFields.noun1}
            />
          <input
            name="adv"
            placeholder="adverb"
            type="text"
            onChange={onInputChange}
            className={validateField("adv") ? "" : "PlayerSubmissionFormt__input--invalid"}
            value={formFields.adv}
            />
          <input
            name="verb"
            placeholder="verb"
            type="text" 
            onChange={onInputChange}
            className={validateField("verb") ? "" : "PlayerSubmissionFormt__input--invalid"}
            value={formFields.verb}
            />
          the
          <input
            name="adj2"
            placeholder="adjective"
            type="text"
            onChange={onInputChange}
            className={validateField("adj2") ? "" : "PlayerSubmissionFormt__input--invalid"}
            value={formFields.adj2}
            />
          <input
            name="noun2"
            placeholder="noun"
            type="text" 
            onChange={onInputChange}
            className={validateField("noun2") ? "" : "PlayerSubmissionFormt__input--invalid"}
            value={formFields.noun2}
            />
          .
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}



export default PlayerSubmissionForm;