import React from 'react';
import ToDoList from './ToDoList';
import './Common.css'

function NetworkCard({ meeting }) {
    return (
        <div class="card w-100">
            <div class="card-body">
                <h5 class="card-title">{meeting ? "Board Meeting" : "Network"}</h5>

                {meeting &&
                    <div>
                        <p>April 08 at 10:30 AM</p>
                        <p>You have been invited to attend the Board Meeting</p>
                    </div>
                }

                {meeting ? "" : <ToDoList />}
            </div>
        </div>
    );
}

export default NetworkCard;