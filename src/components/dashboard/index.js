import React, { useState } from 'react';
import CardHeaders from '../../commoncomponents/CardHeaders';
import LineChartScreen from '../../commoncomponents/LineChartScreen';
import PieChartScreen from '../../commoncomponents/PieChartScreen';
import ToDoList from '../../commoncomponents/ToDoList';
import { price, projectAndEmployees } from '../../commoncomponents/Datas';

function Dashboard() {
    const [sharesRevenueAssets, setSharesRevenueAssets] = useState('Shares')
    const [employeeClient, setEmployeeClient] = useState("Employees")

    // Callback function for SharesRevenueAsset
    const handleShareValues = (data) => {
        setSharesRevenueAssets(data)
    }

    // Callback function for EmployeeClient
    const handleEmployeeClientValues = (data) => {
        setEmployeeClient(data)
    }

    return (
        <div>
            <div className='row d-flex flex-wrap justify-content-between' style={{ gap: '1em', padding: '20px 20px 0 20px' }}>

                <CardHeaders title={sharesRevenueAssets} price={price} backgroundColor={"lightsteelblue"} shareValues={(data) => handleShareValues(data)} />

                <CardHeaders title={"Projects"} total={projectAndEmployees} OnGoingProject={"75"} backgroundColor={"lightgray"} />

                <CardHeaders title={employeeClient} total={projectAndEmployees} backgroundColor={"lightsteelblue"} handleEmployeeClientValues={(data) => handleEmployeeClientValues(data)} />

            </div>
            {/* Second Row */}
            <div className='row d-flex flex-wrap chart' style={{ gap: '1em', padding: '20px 7px 0 20px' }}>
                <div className='lineChart'>
                    <div class="card w-100" style={{ borderRadius: '12px' }}>
                        <div class="card-body ">
                            <LineChartScreen title={sharesRevenueAssets} />
                        </div>
                    </div>
                </div>
                <div className='pieChart' >
                    <div class="card w-100 " style={{ borderRadius: '12px' }}>
                        <div class="card-body">
                            <PieChartScreen title={sharesRevenueAssets} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Third Row */}
            <div className='row d-flex flex-wrap networkMeeting' style={{ gap: '1em', padding: '20px 7px 0 20px' }}>
                <div className='network'>
                    <div class="card w-100 " style={{ borderRadius: '12px' }}>
                        <div class="card-body">
                            <h5 class="card-title">Network</h5>
                            <ToDoList />
                        </div>
                    </div>
                </div>
                <div className='meetingNotification'>
                    <div class="card w-100 " style={{ borderRadius: '12px' }}>
                        <div class="card-body">
                            <h5 class="card-title">Board Meeting</h5>
                            <p style={{ fontSize: '14px' }}>April 08 at 10:30 AM.</p>
                            <p style={{ fontSize: '14px' }}>You have been invited to attend the Board Meeting.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;