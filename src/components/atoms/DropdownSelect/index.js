import React from 'react';
import Form from 'react-bootstrap/Form';
import './styles.scss';

function DropdownSelect() {
  return (
    <Form.Select
      aria-label='Default select example'
      className='dropdown-select'
    >
      <option>2020</option>
      <option value='2019'>2019</option>
      <option value='2018'>2018</option>
      <option value='2017'>2017</option>
    </Form.Select>
  );
}

export default DropdownSelect;
