import React from 'react';
import './Block.scss';
import Paper from '@material-ui/core/Paper';

export default function Block(props) {
  const { open, onClick, id } = props;
  return (
    <Paper
      id={id}
      key={id}
      onClick={onClick}
      className={`block ${open && 'selected'}`}
      elevation={15} />
  );
}