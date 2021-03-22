import React from 'react';
import './Block.scss';
import Paper from '@material-ui/core/Paper';


export default function Block(props) {
  const { open, onClick, id, color } = props;
  return (
    <Paper
      id={id}
      key={id}
      onClick={onClick}
      className={`block`}
      style={{ backgroundColor: open ? color : 'white' }}
      elevation={15} />
  );
}
