import React from 'react';
import ProjectImage from "../asserts/images/png/projects.png"
import EmployeeImage from "../asserts/images/png/employees.png"
import { FaCommentAlt, FaRegChartBar, FaShoppingBag, FaThList, FaBars, FaTh, FaUserAlt } from "react-icons/fa"
function CardHeaders({ title, price, totalProjects, totalEmployees, priceOfficeAssets, OnGoingProject }) {
    return (
        <>
            <div class="card  p-3 d-flex-column " style={{ width: '18em', borderRadius: '12px' }}>
                <div className='row p-2 d-flex justify-content-between'>
                    <h5 >
                        {title}
                    </h5>
                    <div >
                        <FaBars />
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

                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLgvkO55aou18s5mDRDeYkwVsfQwvi7hAjGqXPbA8Uvg&s"
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

{/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLgvkO55aou18s5mDRDeYkwVsfQwvi7hAjGqXPbA8Uvg&s" */ }
