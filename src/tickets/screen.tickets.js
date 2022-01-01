import React from 'react';
import ReactMarkdown from 'react-markdown'
import { useSelector } from 'react-redux';

export const TicketsScreen = ()=>{

    const ticket = useSelector(state => state.ticket);

    const rows = Math.ceil(Number(ticket.quantity) / Number(ticket.columns))
    const perRow = Array(rows).fill().map((_, index) => index);
    const perColumn = Array(Number(ticket.columns)).fill().map((_, index) => index);

    let ticketNumber = ticket.offset;
    
    return (
        <table className='tickets'>
        <tbody>
            {
                perRow.map((rowID)=>{
                    return (
                            <tr>
                                {
                                    perColumn.map((colID)=>(
                                        <td
                                            key={rowID.toString() + colID.toString()}
                                            className='ticket'
                                        >
                                            <h3><span>{ticket.title}</span><span>#{ticketNumber++}</span></h3>
                                            <br />
                                            <ReactMarkdown>{ticket.description}</ReactMarkdown>
                                        </td>
                                    ))
                                }
                            </tr>
                    )
                })
            }
        </tbody>
        </table>
    )

};