import React from 'react';
import CardHeaders from '../../commoncomponents/CardHeaders';
import LineChartScreen from '../../commoncomponents/LineChartScreen';
import PieChartScreen from '../../commoncomponents/PieChartScreen';
import NetworkCard from '../../commoncomponents/NetworkCards';

function Dashboard() {
    return (
        <div>
            <div className='row p-3 d-flex flex-wrap justify-content-between' style={{gap:'1em'}}>

                <CardHeaders title={"Shares"} price={"$70,000"} backgroundColor={"lightsteelblue"}/>

                <CardHeaders title={"Projects"} totalProjects={"150"} OnGoingProject={"75"} backgroundColor={"lightgray"}/>

                <CardHeaders title={"Employees"} totalEmployees={"250"} backgroundColor={"lightsteelblue"}/>

            </div>
            {/* Second Row */}
            <div className='row d-flex flex-wrap' style={{gap:'1.5em'}}>
                <div className=' lineChart'>
                    <div class="card w-100">
                        <div class="card-body ">
                            <LineChartScreen/>
                        </div>
                    </div>
                </div>
                <div className='pieChart'>
                    <div class="card w-100">
                        <div class="card-body">
                            <PieChartScreen/>
                        </div>
                    </div>
                </div>
            </div>
            {/* Third Row */}
            <div className='row mt-3'>
                <div className='col-md-8'>
                    <NetworkCard />
                </div>
                <div className='col-md-4'>
                    <NetworkCard meeting={true}/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;