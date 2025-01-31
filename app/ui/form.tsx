"use client";

import { createActivity } from "../lib/actions";
import { useState } from "react";

const menus = [
  { title: "Tidur", type: "primary" },
  { title: "Bangun", type: "secondary" },
  { title: "Buat Susu", type: "accent" },
  { title: "Sisa Susu", type: "danger" },
  { title: "Pup", type: "warning" },
  { title: "Ganti Pampers", type: "primary" },
];

export default function Form() {
  const [category, setCategory] = useState("");

  const handleClick = (btn: string) => {
    setCategory("");

    const ok = confirm(`Kamu yakin dengan pilihan kamu?`);
    if (!ok) return;
    setCategory(btn.toUpperCase().replace(/ /g, "_"));
  };

  return (
    <div className='flex flex-col justify-between p-4'>
      <form action={createActivity}>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered w-full max-w-xs hidden'
          name='category'
          defaultValue={category}
        />
        <div className='grid grid-cols-3 gap-2'>
          {menus.map((btn, idx) => {
            return (
              <button
                key={idx}
                type='submit'
                className={`btn btn-outline btn-${btn.type}`}
                onClick={() => handleClick(btn.title)}
              >
                {btn.title}
              </button>
            );
          })}
        </div>
      </form>
    </div>
  );
}
