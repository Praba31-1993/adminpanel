import React, {useState} from 'react';
import CardHeaders from '../../commoncomponents/CardHeaders';
import LineChartScreen from '../../commoncomponents/LineChartScreen';
import PieChartScreen from '../../commoncomponents/PieChartScreen';
import NetworkCard from '../../commoncomponents/NetworkCards';
import ToDoList from '../../commoncomponents/ToDoList';

function Dashboard() {
    const [showRevenue, setShowRevenue] = useState(false)
    const [showAssets, setShowAssets] = useState(false)
    const [showShares, setShowShares] = useState(true)
    const [title, setTitle] = useState('Shares')

    const handleShareValues = (data)=>{
        console.log("data12",data);
        setTitle(data)
        if(data==="Assets"){
            setShowAssets(true)
        }
    }
    
    return (
        <div>
            <div className='row d-flex flex-wrap justify-content-between' style={{ gap: '1em', padding: '20px 20px 0 20px' }}>

                <CardHeaders title={title} price={"$70,000"} backgroundColor={"lightsteelblue"} shareValues={(data)=>handleShareValues(data)}/>

                <CardHeaders title={"Projects"} totalProjects={"150"} OnGoingProject={"75"} backgroundColor={"lightgray"} />

                <CardHeaders title={"Employees"} totalEmployees={"250"} backgroundColor={"lightsteelblue"} />

            </div>
            {/* Second Row */}
            <div className='row d-flex flex-wrap chart' style={{ gap: '1em', padding: '20px 7px 0 20px' }}>
                <div className='lineChart'>
                    <div class="card w-100" style={{ borderRadius: '12px' }}>
                        <div class="card-body ">
                            <LineChartScreen title={title}/>
                        </div>
                    </div>
                </div>
                <div className='pieChart' >
                    <div class="card w-100 " style={{ borderRadius: '12px' }}>
                        <div class="card-body">
                            <PieChartScreen title={title}/>
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

                            <p>April 08 at 10:30 AM</p>
                            <p>You have been invited to attend the Board Meeting</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;