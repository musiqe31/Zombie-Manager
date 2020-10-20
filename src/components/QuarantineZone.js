import React from 'react'
import Location from './Location'
import hospital from '../images/hospital.png'
import warehouse from '../images/warehouse.png'
import school from '../images/school.jpg'
import './index.css'
import {hospitalzombies, schoolzombies, warehousezombies} from '../model/zombies'

const QuarantineZone = () => {
  return (
    <div className="layout container">
      <div className="row">
        <div className="col-lg-4">
          <Location
            image={hospital}
            name={"Hospital"}
            option1={"Warehouse"}
            option2={"School"}
            zombielist={hospitalzombies}
          />
        </div>
        <div className="col-lg-4">
          <Location
            image={warehouse}
            name={"Warehouse"}
            option1={"Hospital"}
            option2={"School"}
            zombielist={warehousezombies}
          />
        </div>
        <div className="col-lg-4">
          <Location
            image={school}
            name={"School"}
            option1={"Warehouse"}
            option2={"Hospital"}
            zombielist={schoolzombies}
          />
        </div>
      </div>
    </div>
  );
};

export default QuarantineZone
