import React from 'react';
import SharesImage from "../asserts/images/png/shares.png"
import ProjectImage from "../asserts/images/png/projects.png"
import EmployeeImage from "../asserts/images/png/employees.png"
import RevenueImage from "../asserts/images/png/revenue.png"
import AssertImage from "../asserts/images/png/assets.png"
import ClientImage from "../asserts/images/png/client.png"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PopOverMenu from './PopoverMenu';
import "./Common.css"

function CardHeaders({ title, price, total, backgroundColor, shareValues, handleEmployeeClientValues }) {
    return (
        <>
            <div class="card p-3 d-flex-column cardHeader" style={{ borderRadius: '12px', backgroundColor: backgroundColor, border: '1px solid blue' }}>
                <div className='row p-2 d-flex justify-content-between'>
                    <h5 >
                        {title}
                    </h5>
                    {title === "Projects" ? "" :
                        <div >

                            <PopOverMenu title={title} shareValues={(data) => shareValues(data)} handleEmployeeClientValues={(data) => handleEmployeeClientValues(data)}

                            />
                        </div>}
                </div>
                <div className='d-flex justify-content-between'>
                    {title === "Employees" || title === "Clients" ?
                        <div>
                            <img src={title === "Employees" ? EmployeeImage : title === "Clients" && ClientImage}
                                style={{ width: '100px', height: '100px' }}
                            />
                        </div> :
                        <div>
                            {title === "Projects" ?
                                <img src={ProjectImage}
                                    style={{ width: '100px', height: '100px' }}
                                />
                                :

                                <img src={title === "Shares" ? SharesImage : title === "Revenues" ? RevenueImage : title === "Assets" && AssertImage}
                                    style={{ width: '100px', height: '100px' }}
                                />
                            }
                        </div>}
                    <div className='d-flex-column ' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        {title === "Shares" || title === "Revenues" || title === "Assets" ?
                            <div className='text-right mt-4' style={{ fontSize: '30px', fontWeight: 600 }}>
                                <CurrencyRupeeIcon />
                                {title === "Shares" ? price?.share?.value : title === "Revenues" ? price?.revenue?.value : title === "Assets" && price?.asset?.value}
                            </div>
                            :
                            <div className='text-right mt-4' style={{ fontSize: '30px', fontWeight: 600 }}>
                                {title === "Employees" ? total?.employee?.totalEmployeesCount : title === "Projects" ? total?.project?.totalProjectsCount : title === "Clients" && total?.client?.totalClientsCount}
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

