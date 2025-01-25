"use client";

import { useState, useEffect } from "react";
import { Activities } from "../_lib/definitions";

export default function Raya() {
  const [time, setTime] = useState(new Date());
  const [activities, setActivities] = useState(() => {
    // Check if local storage is available
    if (typeof localStorage === "undefined") {
      return [];
    } else {
      // Check if activities are available in local storage
      const savedActivities: string | null = localStorage.getItem("activities");
      return savedActivities ? JSON.parse(savedActivities) : [];
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleButton = (activity: string) => {
    const newActivity = {
      time: new Date().toLocaleTimeString("id-ID").replace(/\./g, ":"),
      activity,
    };
    const updatedActivities = [...activities, newActivity];
    setActivities(updatedActivities);
    localStorage.setItem("activities", JSON.stringify(updatedActivities));
  };

  return (
    <div className='container mx-auto mt-10'>
      <h1 className='text-center text-6xl font-bold'>Raya Anakku</h1>

      <p className='text-center text-6xl mt-8 font-bold'>
        {time.toLocaleTimeString("id-ID").replace(/\./g, ":")}
      </p>

      <div className='container flex justify-evenly w-3/4 mx-auto mt-10'>
        <button
          className='btn btn-primary btn-outline'
          onClick={() => handleButton("Bangun Tidur")}
        >
          Bangun Tidur
        </button>
        <button
          className='btn btn-secondary btn-outline'
          onClick={() => handleButton("Tidur")}
        >
          Tidur
        </button>
        <button
          className='btn btn-accent btn-outline'
          onClick={() => handleButton("Buat Susu")}
        >
          Buat Susu
        </button>
        <button
          className='btn btn-success btn-outline'
          onClick={() => handleButton("Sisa Susu")}
        >
          Sisa Susu
        </button>
        <button
          className='btn btn-warning btn-outline'
          onClick={() => handleButton("💩")}
        >
          💩
        </button>
        <button
          className='btn btn-outline'
          onClick={() => handleButton("Ganti Pampers")}
        >
          Ganti Pampers
        </button>
      </div>

      <div className='overflow-x-auto overflow-y-auto mt-8 max-h-96'>
        <table className='table table-zebra table-pin-rows'>
          <thead className=''>
            <tr className='uppercase text-xl text-info'>
              <th>No</th>
              <th>Waktu</th>
              <th>Kegiatan</th>
            </tr>
          </thead>
          <tbody>
            {activities
              .slice()
              .reverse()
              .map((activity: Activities, index: number) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{activity.time}</td>
                  <td>{activity.activity}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
