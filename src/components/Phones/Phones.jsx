import axios from "axios";
import { useEffect, useState } from "react";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phonesData = data.data.data;
            const phonesWithFakeData = phonesData.map(phone => {
                const obj = {
                    name : phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            setPhones(phonesWithFakeData);
        })
    },[]);
    return (
        <div className="container mx-auto">
            <h2 className="text-4xl"> length is: {phones.length}</h2>
            <BarChart width={1200} height={600} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey={"name"}></XAxis>
          <YAxis></YAxis>
        </BarChart>
        </div>
    );
};

export default Phones;