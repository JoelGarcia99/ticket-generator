import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import useCustomForm from '../hooks/formHook';
import { defineTicket } from '../redux/actions/action.ticket';

export const FormComponent = () => {

    const ticketState = useSelector(state => state.ticket)

    const [entries, handleChange, _] = useCustomForm({
        title: ticketState.title,
        content: ticketState.description,
        checkbox: ticketState.showNumbers,
        start: ticketState.offset,
        number: ticketState.quantity,
        numbercol: ticketState.columns
    });

    const dispatch = useDispatch();
    const navigator = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();

        dispatch(defineTicket({
            title: entries.title,
            description: entries.content,
            showNumbers: entries.checkbox,
            columns: entries.numbercol,
            quantity: entries.number,
            offset: entries.start,
        }));

        return navigator('/tickets');
    }

    return (
        <div className='ticketform'>
            <form onSubmit={handleSubmit}>
                <div className='maindiv'>
                    <label>Title</label>
                    <input 
                        value={entries.title}
                        type="text" 
                        placeholder='Title' 
                        id="title" 
                        name="title"
                        onChange={handleChange}
                        required={true} 
                    />
                </div>
                <div className='maindiv'>
                    <label>Content (markdown)</label>
                    <textarea 
                        placeholder="Body"
                        id="content"
                        name="content"
                        value={entries.content}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Include numbers&nbsp;</label>
                    <input
                        type="checkbox"
                        name="checkbox"
                        checked={entries.checkbox}
                        onChange={(e)=>{
                            handleChange({
                                target: {
                                    name: 'checkbox',
                                    value: e.target.checked
                                }
                            })
                        }}
                    />
                </div>
                <div className='maindiv'>
                    <label>Start number</label>
                    <input 
                        type="number"
                        min={1} step={1}
                        placeholder={1} 
                        id="start"
                        name="start"
                        value={entries.start}
                        onChange={handleChange}
                    />
                </div>
                <div className='maindiv'>
                    <label>Number of tickets</label>
                    <input 
                        type="number" 
                        min={1} step={1} 
                        placeholder={1} 
                        id="number"
                        name="number"
                        value={entries.number}
                        onChange={handleChange}
                    />
                </div>
                <div className='maindiv'>
                    <label>Tickets per column</label>
                    <input 
                        type="numbercol" 
                        min={1} step={1} 
                        placeholder={1} 
                        id="numbercol"
                        name="numbercol"
                        value={entries.numbercol}
                        onChange={handleChange}
                    />
                </div>
                <input 
                    type="submit" 
                    value="Generate" 
                />
            </form>
        </div>
    );
}