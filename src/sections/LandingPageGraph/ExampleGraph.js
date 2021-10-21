import React from 'react'
import { Bar } from 'react-chartjs-2'

const rand = () => Math.round(Math.random() * 20 - 10)

const options = {
    plugins: {
        title: {
            display: true,
            text: 'Sales Report',
        },
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
}

const data = {

    labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    datasets: [
        {
            type: 'line',
            label: 'Dataset 1',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 2,
            fill: false,
            data: [rand(), rand(), rand(), rand(), rand(), rand()],
        },
        {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: 'rgb(54, 162, 235)',
            data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
            borderColor: 'white',
            borderWidth: 2,
        },
        {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: 'rgb(255, 99, 132)',
            data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
            borderColor: 'white',
            borderWidth: 2,
        },
    ],
}

const MultiType = () => {
    return (
        <div className="bg-white overflow-hidden rounded-lg shadow mt-5">
            <div className="px-4 py-5 sm:p-6">
                {data ? <Bar data={data} options={options} /> : null}

            </div>
        </div>
    )
}

export default MultiType
