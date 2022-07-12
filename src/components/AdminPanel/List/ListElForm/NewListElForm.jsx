import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ListElForm.css';
import { GlobalCtx } from '../../../../App';

const NewListElForm = ({ inputs, sendingFunc, linkTo }) => {
    const navigate = useNavigate();
    const { user } = React.useContext(GlobalCtx);

    const handleSubmit = e => {
        let values = {};
        inputs.forEach(el => {
            values = { ...values, [el.name]: e.target.elements[el.name].value };
        })
        sendingFunc(values, user.accessToken);
        e.preventDefault();
        navigate(linkTo);
    }

  return (
    <div className='NewListElForm ListElForm'>
        {inputs[0] && (
            <form onSubmit={handleSubmit}>
                {inputs.map((el, i) => (
                    <p key={i}>
                        <label htmlFor={el.id}>{el.label}</label>
                        <input type={el.type} name={el.name} id={el.id} placeholder={el.placeholder} required={true} />
                    </p>
                ))}
                <div>
                    <button onClick={() => navigate(linkTo)} type='button'>Anuluj</button>
                    <button type='submit'>Zatwierdź</button>
                </div>
            </form>
        )}
    </div>
  )
}

export default NewListElForm;