import React from 'react';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
function CardHeaders({ title, price, totalProjects,totalEmployees }) {
    return (
        <>
            <div class="card p-3" style={{ height: '150px' }}>
                <div class="d-flex justify-content-between mb-1">
                    <h5>{title}</h5>
                    {title === "Employees" ? <h5>{totalEmployees}</h5>
                        :
                        <h5>{title === "Share" ? price : totalProjects}</h5>}
                </div>
                {title === "Share" || title === "Employees" ? <div className='m-0'>
                    <h5 class="card-title text-center" style={{ position: 'relative', top: '2em', left: '0.2em' }}>60%</h5>
                    <PanoramaFishEyeIcon style={{ width: '10em', height: '4em', color: 'green', position: 'relative', bottom: '35px' }} />

                </div>
                    :
                    <div class='d-flex'>
                        <div>
                            <h5 class="card-title text-center" style={{ position: 'relative', top: '2em', left: '0.2em' }}>80</h5>
                            <PanoramaFishEyeIcon style={{ width: '10em', height: '4em', color: 'green', position: 'relative', bottom: '35px' }} />
                        </div>
                        <div>
                            <h5 class="card-title text-center" style={{ position: 'relative', top: '2em', left: '0.2em' }}>70</h5>
                            <PanoramaFishEyeIcon style={{ width: '10em', height: '4em', color: 'red', position: 'relative', bottom: '35px' }} />
                        </div>
                    </div>
                }
            </div>

        </>
    );
}

export default CardHeaders;