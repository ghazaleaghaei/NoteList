import React, { useState } from 'react'

function NoteHeader({notes,sortBy,onSort}) {
   
  return (
    <div className='row w-90'>
        <h3 className='col-8'>my notes({notes.length})</h3>
        <select className="form-select form-select-sm  h-25 col-4 mt-2" value={sortBy} onChange={onSort} aria-label=".form-select-sm example">
        <option  value="latest">sort based on latest notes</option>
        <option value="earliest">sort based on earliest notes</option>
        <option value="completed">sort based on completed notes</option>
        </select>

    </div>
  )
}

export default NoteHeader