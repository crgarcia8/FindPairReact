import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Block from './Block';
import { _data } from '../Constants';
import Swal from 'sweetalert2';

export default function Container() {
  const [data, setData] = useState(_data);
  const [enabled, setEnabled] = useState(true);
  const [time, setTime] = useState(0);
  const [jugada1, setJugada1] = useState("");
  const [jugada2, setJugada2] = useState("");
  const [identificador1, setIdentificador1] = useState("");
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    if (winner) {
      showAlert();
    }
  }, [winner]);

  /**
   * Selection block
   * @param {object} item Selected Object 
   */
  const handleClick = (e, item) => {
    if (jugada2 == e.target.id) return;
    setTime(time + 1);
    setJugada2(e.target.id)
    if (jugada1 != "") {
      if (identificador1 == item.color) {
        changeBackground(e, item, jugada1, true);
        verifyWin();
      } else {
        changeBackground(e, item);
        setEnabled(false);
        setTimeout(() => {
          restartBlocks();
          setEnabled(true);
        }, 1000);
      }
      setJugada1("");
      setJugada2("");
      setIdentificador1("");
    } else {
      changeBackground(e, item);
      setJugada1(e.target.id);
      setIdentificador1(item.color);
    }
  }
  const verifyWin = () => {
    const win = data.every(item => item.persist);
    setTimeout(() => {
      win && setWinner(true);
    }, 500);
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
      <Grid item xs={2} key={index}>
        <Block id={index} color={item.color} open={item.selected} onClick={(e) => enabled && handleClick(e, item)} />
      </Grid>)
    )
  }
  const showAlert = () => {
    Swal.fire({
      title: 'GANASTE!',
      text: '¿Quieres volver a intentarlo?',
      icon: 'success',
      confirmButtonText: 'Reiniciar'
    }).then((result) => {
      if (result.isConfirmed) {
        const items = [...data];
        items.forEach((item) => {
          item.persist = false;
          item.selected = false;
        });
        setData(items);
        setTime(0);
        setJugada1("");
        setJugada2("");
        setIdentificador1("");
        setWinner(false);
      }
    });
  }
  return (
    <>
      <Grid container spacing={3} justify="flex-end">
        <h1>Intentos: {time}</h1>
      </Grid>
      <Grid container spacing={3} justify="center">
        {getCards()}
      </Grid>
    </>
  );
}