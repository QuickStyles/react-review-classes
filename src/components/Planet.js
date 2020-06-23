import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

const API_KEY = 'Z6plXG3c5hGeh3GE1s6ktJIkcMKf3pT14ikcPrrr';
const BASE_URL = 'https://epic.gsfc.nasa.gov/api/natural';
const BASE_IMAGE_URL = 'https://epic.gsfc.nasa.gov/archive/natural';


export default function Planet() {
  const [image, setImage] = useState('');
  const [time, setTime] = useState(45);

  useEffect(() => {
    fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=b4f7bb3c774de0196aac20c0f8db571a')
      .then(res => res.json())
      .then(d => console.log(d));
    const interval = setInterval(
      () => setTime(time => time + 1),
      1000
    );

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let { month, day, year } = DateTime.local().minus({days: time});
    if (month.toString().length === 1) {
      month = `0${month}`
    }
    if (day.toString().length === 1) {
      day = `0${day}`
    }
    fetch(`${BASE_URL}/date/${year}-${month}-${day}?api_key=${API_KEY}`)
      .then(res => {
        return res.json();
      })
      .then(payload => {
        console.log(payload)
        const imageName = payload[0] ? payload[0].image : false;
        if (imageName) {
          setImage(`${BASE_IMAGE_URL}/${year}/${month}/${day}/png/${imageName}.png`)
        }
      })
  }, [])

  return(
    <div>
      <img width='100%' src={image} alt='earth'/>
    </div>
  )
}