import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Block from './Block';

const _data = [
  { color: "blue", source: "1", selected: false, persist: false },
  { color: "yellow", source: "2", selected: false, persist: false },
  { color: "blue", source: "3", selected: false, persist: false },
  { color: "orange", source: "4", selected: false, persist: false },
  { color: "yellow", source: "5", selected: false, persist: false },
  { color: "orange", source: "6", selected: false, persist: false }
];

let jugada1 = "";
let jugada2 = "";
let identificador1 = "";
let identificador2 = "";

export default function Container() {
  const [data, setData] = useState(_data);
  const [enabled, setEnabled] = useState(true);
  // const [jugada1, setJugada1] = useState("");
  // const [jugada2, setJugada2] = useState("");
  // const [identificador1, setIdentificador1] = useState("");
  // const [identificador2, setIdentificador2] = useState("");

  /**
   * Selection block
   * @param {object} item Selected Object 
   */
  const handleClick = (e, item) => {
    jugada2 = e.target.id;
    identificador2 = item.color;
    if (jugada1 != "") {
      if (identificador1 == identificador2) {
        // if (jugada1 === jugada2 && identificador1 !== identificador2 && data[identificador1].selected != true && data[identificador2].selected != true) {
        changeBackground(e, item, jugada1, true);
        jugada1 = "";
        jugada2 = "";
        identificador1 = "";
        identificador2 = "";
      } else {
        changeBackground(e, item);
        jugada1 = "";
        jugada2 = "";
        identificador1 = "";
        identificador2 = "";
        setEnabled(false);
        setTimeout(() => {
          restartBlocks();
          setEnabled(true);
        }, 1000);
      }
    } else {
      changeBackground(e, item);
      jugada1 = e.target.id;
      identificador1 = identificador2;
    }
    // verifySelected();
  }

  const changeBackground = (e, item, jugada = null, success = false) => {
    let index = data.findIndex(value => value.source === item.source);
    let change = [...data];
    change[index].selected = !change[index].selected;
    if (success) {
      change[index].persist = true
      change[jugada].persist = true;
    }
    setData(change);
  }
  /**
   * Verify 
   */
  const verifySelected = () => {
    let items = data.filter(item => item.selected === true);
    if (items.length > 1) {
      if (items[0].color == items[1].color) {

      } else {
        setEnabled(false);
        setTimeout(() => {
          restartBlocks();
          setEnabled(true);
        }, 1000);
      }
    }
  }
  /**
   * Restart the selection 
   */
  const restartBlocks = () => {
    let change = [...data];
    change.forEach(item => {
      if (!item.persist) { item.selected = false }
    });
    setData(change);
  }
  /**
   * Method for return cards
   * @returns Cards in grid
   */
  const getCards = () => {
    return data.map((item, index) => (
      <Grid item xs={3} key={index}>
        <Block id={index} color={item.color} open={item.selected} onClick={(e) => enabled && handleClick(e, item)} />
      </Grid>)
    )
  }
  return (
    <Grid container spacing={3} justify="center">
      {getCards()}
    </Grid>
  );
}