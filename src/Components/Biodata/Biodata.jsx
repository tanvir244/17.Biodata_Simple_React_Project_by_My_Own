import React from 'react';
import './Biodata.css'

const Biodata = (props) => {
    const {name, salary, author, description} = props.user;
    return (
        <div className='biodata'>
            <div className='image'>
                <img src={author.jpg} alt="" />
            </div>
            <div className='content'>
                <h2>{name}</h2>
                <p>{description}</p>
                <h3>Salary: {salary} $</h3>
                <button 
                onClick={() => props.handleAddRequest(props.user)}
                className='btn'
                >Friend Request</button> 
            </div>
        </div>
    );
};

export default Biodata;