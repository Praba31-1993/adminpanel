import React from 'react';
import CardHeaders from '../../commoncomponents/CardHeaders';
import LineChartScreen from '../../commoncomponents/LineChartScreen';
import ToDoList from '../../commoncomponents/ToDoList';
function Dashboard() {
    return (
        <div>
            <div className='row p-3 d-flex flex-wrap justify-content-between'>

                <CardHeaders title={"Shares"} price={"$70,000"} />

                <CardHeaders title={"Projects"} totalProjects={"150"} OnGoingProject={"75"} />

                <CardHeaders title={"Employees"} totalEmployees={"250"} />

            </div>
            {/* Second Row */}
            <div className='row d-flex flex-wrap mt-2'>
                <div>
                    <LineChartScreen />
                </div>
                <div >
                    <ToDoList />
                </div>
            </div>

        </div>
    );
}

export default Dashboard;