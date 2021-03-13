import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Block from './Block';

const _data = [
  { source: "cris", selected: false },
  { source: "leo", selected: false },
  { source: "gar", selected: false },
  { source: "cas", selected: false },
  { source: "ang", selected: false },
  { source: "cam", selected: false }
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
    let count = data.filter(item => item.selected == true).length;
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
        <Block id={index + 1} open={item.selected} onClick={() => enabled && handleClick(item)} />
      </Grid>)
    )
  }

  return (
    <Grid container spacing={3} justify="center">
      {getCards()}
    </Grid>
  );
}