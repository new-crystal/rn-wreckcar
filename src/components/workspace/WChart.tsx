'use client'
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    name: "naver1",
    uv: 1,
    cv: 5,
    amt: 5,
  
  },
  {
    name: "유튜브2",
    uv: 5,
    cv: 5,
    amt: 10,
 
  },
  {
    name: "daum3",
    uv: 30,
    cv: 10,
    amt: 10,
   
  },
  {
    name: "daum4",
    uv: 30,
    cv: 10,
    amt: 10,
   
  },
  {
    name: "daum5",
    uv: 30,
    cv: 10,
    amt: 10,
   
  },
  {
    name: "디스콰이엇6",
      uv: 30,
    cv: 10,
    amt: 10,
   
  },
  {
    name: "구글7",
    
      uv: 20,
    cv: 16,
    amt: 5,

   
  },
  {
    name: "구글8",
    
      uv: 20,
    cv: 16,
    amt: 5,

   
  },
  {
    name: "구글9",
    
      uv: 20,
    cv: 16,
    amt: 5,

   
  },
  {
    name: "구글10",
    
      uv: 20,
    cv: 16,
    amt: 5,

   
  },

];

export default function WChart() {
    return (
        <>
            
    <AreaChart
      width={1200}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="cv"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="amt"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
    </>
  );
}


