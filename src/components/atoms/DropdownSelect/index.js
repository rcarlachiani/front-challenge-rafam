import React from 'react';
import Form from 'react-bootstrap/Form';
import './styles.scss';

function DropdownSelect() {
  return (
    <Form.Select
      aria-label='Default select example'
      className='dropdown-select'
    >
      <option>2024</option>
      <option value='2023'>2023</option>
      <option value='2022'>2022</option>
      <option value='2021'>2021</option>
    </Form.Select>
  );
}

export default DropdownSelect;
