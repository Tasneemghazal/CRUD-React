import React from 'react'

export default function Input(props) {
   const {id,title,type,name,handelData,customClass,error}=props;
  return (
    <div className="mb-3">
    <label htmlFor={id} className="form-label">{title}</label>
    <input type={type} name={name} className={`form-control ${customClass}`} id={id} onChange={handelData}/>
    {error[name] && <span className='text-danger'>{error[name]}</span>}
  </div>
  )
}
