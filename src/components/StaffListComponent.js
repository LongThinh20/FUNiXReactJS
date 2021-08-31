import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import image from "../img/developer-team.png";

export default function StaffList(props) {
  const { staffs } = props;

  return (
    <section>
      <div className="row">
        {staffs.map((staff) => {
          return (
            <div className="col-6 col-sm-6 col-md-4 col-lg-2 " key={staff.id}>
              <Link to={`/home/${staff.id}`}>
                <Card className="mt-4">
                  <CardImg src={image} alt={staff.name} />
                  <CardBody>
                    <CardTitle>{staff.name}</CardTitle>
                  </CardBody>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
