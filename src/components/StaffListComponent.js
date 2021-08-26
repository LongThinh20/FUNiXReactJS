import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";

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
                  <CardImg src={staff.image} alt={staff.name} />
                  <CardBody>
                    <CardTitle>{staff.name}</CardTitle>
                    <CardText>{staff.description}</CardText>
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
