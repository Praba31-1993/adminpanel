import React from 'react';
import "./Common.css"
import SharesImage from "../asserts/images/png/shares.png"
import ProjectImage from "../asserts/images/png/projects.png"
import EmployeeImage from "../asserts/images/png/employees.png"
import { FaCommentAlt, FaRegChartBar, FaShoppingBag, FaThList, FaBars, FaTh, FaUserAlt } from "react-icons/fa"
import PopOverMenu from './PopoverMenu';
function CardHeaders({ title, price, totalProjects, totalEmployees, backgroundColor,shareValues }) {
   
    return (
        <>
            <div class="card p-3 d-flex-column cardHeader" style={{  borderRadius: '12px',backgroundColor:backgroundColor, border:'1px solid blue' }}>
                <div className='row p-2 d-flex justify-content-between'>
                    <h5 >
                        {title}
                    </h5>
                    <div >
                        <PopOverMenu shareValues={(data)=>shareValues(data)}/>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    {title === "Employees" ?
                        <div>
                            <img src={EmployeeImage}
                                style={{ width: '100px', height: '100px' }}
                            />
                        </div> :
                        <div>
                            {title === "Projects" ?
                                <img src={ProjectImage}
                                    style={{ width: '100px', height: '100px' }}
                                />
                                :

                                <img src={SharesImage}
                                    style={{ width: '100px', height: '100px' }}
                                />
                            }
                        </div>}
                    <div className='d-flex-column ' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        {title === "Shares" ?
                            <div className='text-right mt-4' style={{ fontSize: '30px', fontWeight: 600 }}>
                                {price}
                            </div>
                            :
                            <div className='text-right mt-4' style={{ fontSize: '30px', fontWeight: 600 }}>
                                {title === "Employees" ? totalEmployees : totalProjects}
                            </div>
                        }
                        <div className='text-secondary' style={{ fontSize: '10px' }}>Last updated Today</div>
                    </div>
                </div>


            </div >

        </>
    );
}

export default CardHeaders;

