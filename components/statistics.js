import React from 'react';
// import "../components/assets/css/statistics.css";
import { Doughnut, Bar } from 'react-chartjs-2';

export default function Statistics({darkMode}) {
    let color =[
        '#5D9DC0',
        '#40A160',
        '#C53F46'
    ]
   
    let dataProvide =  {
        labels: [
            '30: Perfect',
            '20: Normal',
            '10: Bad'
        ],
        datasets: [{
        data: [30, 20, 10],
        backgroundColor:color,
        hoverBackgroundColor: color,
        borderColor: 'grey'
        }],
    };

    const dataBar = {
        labels: ['1', '2', '2', '4', '5', '6', '7','8','9','10'],
        datasets: [
          {
            label: 'Ratings',
            backgroundColor: '#004a9f',
            borderColor: '#004a9f',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(99, 164, 255,0.5)',
            hoverBorderColor: 'rgba(99, 164, 255,1)',
            data: [30, 1, 2, 2, 1, 2, 13,38,87,942],
            
          }
        ],
      };

      const option =  {
        // aspectRatio: 0,
        scales: {
        xAxes: [{
            gridLines: {
                display:false
            },
            ticks: {
                fontColor: "white",
                stepSize: 1,
                beginAtZero: true,
                fontSize: 13
            },
            barPercentage: 0.4,
            categoryPercentage: 0.6,
            barPercentage: 1.0
        }],
        yAxes: [{
            gridLines: {
                display: false
            },
            ticks: {
                fontColor: "#252e39",
                stepSize: 1,
                beginAtZero: true
            }
        }],
    },
    legend: {
            fontColor: "white",
                fontSize: 14,
                labels:{
                    fontColor:'white',
                    fontSize: 15
                }
        },
}


    const optionForDoughNut = {
            legend: {
               position: 'right',
               labels: {
                fontColor: "grey",
            }
            }
         
    }


    
    

    return (
        <div className="padding">
            <section className={darkMode? "chart-1":"chart"}>
                <Bar style={darkMode? {backgroundColor:'#252E39'}:''} height='30%' width='60%' data={dataBar} options={option} />
            </section>
            <section className={darkMode? "chart-1":"chart"}>
                <Doughnut  style={darkMode? {backgroundColor:'#252E39'}:''} height='40%' width='80%' className="margin-top"  data = {dataProvide} options={optionForDoughNut} />
            </section>
        </div>
    )
}
