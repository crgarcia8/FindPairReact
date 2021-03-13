import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Block from './Block';

const _data = [
  { color: "blue", source: "1", selected: false },
  { color: "yellow", source: "2", selected: false },
  { color: "blue", source: "3", selected: false },
  { color: "orange", source: "4", selected: false },
  { color: "yellow", source: "5", selected: false },
  { color: "orange", source: "6", selected: false }
];

export default function Container() {
  const [data, setData] = useState(_data);
  const [enabled, setEnabled] = useState(true);
  /**
   * Selection block
   * @param {object} item Selected Object 
   */
  const handleClick = (item) => {
    let index = data.findIndex(value => value.source === item.source);
    let change = [...data];
    change[index].selected = !change[index].selected;
    setData(change);
    verifySelected();
  }
  /**
   * Verify 
   */
  const verifySelected = () => {
    let count = data.filter(item => item.selected === true).length;
    if (count > 1) {
      setEnabled(false);
      setTimeout(() => {
        restartBlocks();
        setEnabled(true);
      }, 1000);
    }
  }
  /**
   * Restart the selection 
   */
  const restartBlocks = () => {
    let change = [...data];
    change.forEach(item => item.selected = false);
    setData(change);
  }
  /**
   * Method for return cards
   * @returns Cards in grid
   */
  const getCards = () => {
    return data.map((item, index) => (
      <Grid item xs={3}>
        <Block id={index + 1} color={item.color} open={item.selected} onClick={() => enabled && handleClick(item)} />
      </Grid>)
    )
  }
  return (
    <Grid container spacing={3} justify="center">
      {getCards()}
    </Grid>
  );
}