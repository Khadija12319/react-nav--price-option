import { LineChart, Line, XAxis, YAxis } from 'recharts';
// import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, CartesianGrid, Tooltip, Legend } from 'recharts';

const mathMarksData=[
    {"student_id": 1, "name": "Alice", "math_marks": 85, "physics_marks": 78, "chemistry_marks": 92},
    {"student_id": 2, "name": "Bob", "math_marks": 78, "physics_marks": 82, "chemistry_marks": 75},
    {"student_id": 3, "name": "Charlie", "math_marks": 92, "physics_marks": 90, "chemistry_marks": 88},
    {"student_id": 4, "name": "David", "math_marks": 63, "physics_marks": 70, "chemistry_marks": 65},
    {"student_id": 5, "name": "Emma", "math_marks": 70, "physics_marks": 75, "chemistry_marks": 80},
    {"student_id": 6, "name": "Frank", "math_marks": 88, "physics_marks": 85, "chemistry_marks": 90},
    {"student_id": 7, "name": "Grace", "math_marks": 75, "physics_marks": 80, "chemistry_marks": 72},
    {"student_id": 8, "name": "Hannah", "math_marks": 82, "physics_marks": 88, "chemistry_marks": 85},
    {"student_id": 9, "name": "Isaac", "math_marks": 95, "physics_marks": 92, "chemistry_marks": 98},
    {"student_id": 10, "name": "Jack", "math_marks": 68, "physics_marks": 65, "chemistry_marks": 70}


]

const Charts = () => {
    return (
        <div className='flex gap-5'>
            <LineChart data={mathMarksData} width={800} height={550}>
                <Line type='monotone' stroke='#FFFF00' dataKey={"math_marks"}></Line>
                <Line type='monotone' stroke='#FF6733' dataKey={"physics_marks"}></Line>
                <Line type='monotone' stroke='#EC66FF' dataKey={"chemistry_marks"}></Line>
                <XAxis dataKey={"name"} stroke='white'></XAxis>
                <YAxis stroke='white'></YAxis>
            </LineChart>
        <BarChart width={800} height={550} data={mathMarksData}
          margin={{
            top: 10,
            right: 30  
          }}
        >
          <CartesianGrid strokeDasharray="9 4" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="math_marks" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="physics_marks" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
        </div>
    );
};

export default Charts;