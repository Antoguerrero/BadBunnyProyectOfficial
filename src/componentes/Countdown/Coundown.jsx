import React from 'react'
import { useEffect, useState } from 'react';
import './Countdown.css';
import madridImagen from '../../img/madridd.jpg';
import puertoImagen from '../../img/pr.png';
import espImagen from '../../img/espana.png';
import calaveraImagen from '../../img/calavera_verde_sin_fondo.png';
import fondoX from '../../img/fondox.png';
import Nadie from '../../img/fondoNadie.png';
import Fotos from '../../img/fondoD.png';
import Last from '../../img/fondoEUTDM.png';
import Verano from '../../img/Verano.PNG';

export default function Countdown({ targetDate }) {


  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const formatTime = (value) => String(value).padStart(2, '0');

  const [cont, setCont] = useState(1);

  const [xStyle, setxStyle] = useState({});
  const [mensaje, setMensaje] = useState('BAD BUNNY EN MADRID - 3 JUNIO');

  const cambiarStyle = () => {
    const nuevoCont = cont >= 6 ? 1 : cont + 1;
    setCont(nuevoCont);

    const { estilo, texto } = elegirEstilo(nuevoCont);
    setxStyle(estilo);
    setMensaje(texto);
  }

  function elegirEstilo(valor) {
    if (valor === 2) {
      return {
        estilo: {

          fontFamily: 'x100pre',
          textDecoration: 'none',
          background: 'linear-gradient(#ffff00,#ffa500,#ff0000)',
          textShadow: 'none',
          backgroundSize: 'cover',
          color: 'black',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
        texto: 'BAD BUNNY EN MADRID - 3 JUNIO'
      }

    } else if (valor === 3) {
      return {
        estilo: {
          color: '#00bff9',
          fontFamily: 'last',
          textShadow: '0px 0px 5px #9ccfd9'
        },
        texto: 'Bad Bunny En Madrid - 3 Junio'
      }
    } else if (valor === 4) {
      return {
        estilo: {
          color: 'rgb(253,180,45)',
          fontFamily: 'verano',
          
        },
        texto: 'Bad Bunny en Madrid - 3 Junio'
      }
    } else if (valor === 5) {
      return {
        estilo: {
          color: 'white',
          textShadow: 'none',
          fontFamily: 'nadieSabe'
        },
        texto: 'BAD BUNNY EN MADRID - 3 JUNIO'
      }
    } else if (valor === 6) {
      return {
        estilo: {
          color: 'rgb(245, 245, 210)',
          textDecoration: 'none',
          textShadow: 'none',
          fontFamily: 'fotos'
        },
        texto: 'Bad BuNNY eN mADRiD - 3 JUNiO'
      }
    }
    else {
      return {
        estilo: {
          fontFamily: 'yhlqmdlg'
        },
        texto: 'BAD BUNNY EN MADRID - 3 JUNIO'

      }

    }
  }


  useEffect(() => {
    if (xStyle?.fontFamily === 'x100pre') {

      document.body.style.backgroundImage = `url(${fondoX})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundAttachment = 'fixed';

    } else if (xStyle?.fontFamily === 'last') {

      document.body.style.backgroundImage = `url(${Last})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundAttachment = 'fixed';

    } else if (xStyle?.fontFamily === 'verano') {

      document.body.style.backgroundImage = `url(${Verano})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundPosition = 'top';
      document.body.style.backgroundAttachment = 'fixed';


    } else if (xStyle?.fontFamily === 'nadieSabe') {

      document.body.style.backgroundImage = `url(${Nadie})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundAttachment = 'fixed';

    } else if (xStyle?.fontFamily === 'fotos') {

      document.body.style.backgroundImage = `url(${Fotos})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundAttachment = 'fixed';

    } else {
      document.body.style.background = '#000'; // fondo por defecto
    }
  }, [xStyle]);


  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return <h2>ES EL DÍAAA!!</h2>;



  //RETUUUUUUUURRNNNNNNNNNNNNNN
  return (
    <div>
      <div className='container' >
        <h1 style={{
          ...xStyle,
          fontSize: xStyle.fontFamily === 'x100pre' ? '6rem' : xStyle.fontFamily === 'verano' ? '5rem' : xStyle.fontFamily === 'last' ? '6rem' : xStyle.fontFamily === 'nadieSabe' ? '6rem' : xStyle.fontFamily === 'yhlqmdlg' ? '4rem' : '4rem'
        }}>{mensaje}
        </h1>
      </div>
      <div className="countdown">
        <div className='imagenes'>
          <div className='madrid'>
            <img src={madridImagen} alt="madrid" />
          </div>
          <div className='madrid'>
            <img src={puertoImagen} alt="pr" />
          </div>
          <div className='madrid'>
            <img src={espImagen} alt="España" />
          </div>
        </div>
        <h2 className='tiempo' style={{
          ...xStyle,
          WebkitTextStroke: (xStyle.fontFamily === 'yhlqmdlg' || xStyle.fontFamily === 'verano') ? '2px red' : '0',
        }}>
          {timeLeft.days} : {formatTime(timeLeft.hours)} : {formatTime(timeLeft.minutes)} : {formatTime(timeLeft.seconds)}
        </h2>
        <br />
        <h2 className='dias' style={{
          ...xStyle,
          fontSize: xStyle.fontFamily === 'x100pre' ? '3rem' : xStyle.fontFamily === 'last' ? '3rem' : xStyle.fontFamily === 'nadieSabe' ? '3rem' : xStyle.fontFamily === 'yhlqmdlg' ? '2rem' : '2rem'
        }}>DIAS HORAS MINUTOS SEGUNDOS</h2>
        <br />
        <button onClick={cambiarStyle}>Cambiar de Album</button>
        <div className='imagenes2'>
          <div className='calavera'>
            {cont === 1 && <img src={calaveraImagen} alt="calavera" />} 
          </div>
        </div>
      </div>
    </div>
  );
}
