import React, { useState } from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";
import image from "../img/developer-team.png";
import { FadeTransform } from "react-animation-components";

export default function StaffList(props) {
  const { staffs, handleDeleteStaff, handleEditStaff } = props;

  return (
    <section>
      <div className="row">
        {staffs.map((staff) => {
          return (
            <div
              className="col-6 col-sm-6 col-md-4 col-lg-2 detail "
              key={staff.id}
            >
              <Link to={`/home/${staff.id}`}>
                <Card className="mt-4">
                  <CardImg src={image} alt={staff.name} />
                  <CardBody>
                    <CardTitle>{staff.name}</CardTitle>
                  </CardBody>
                </Card>
              </Link>
              <div className="card_edit">
                <div className="btn_edit ">
                  <Button
                    color="warning"
                    className="text-white"
                    onClick={() => handleEditStaff(staff)}
                  >
                    Sửa
                  </Button>
                </div>
                <div className="btn_delete ">
                  <Button
                    color="danger"
                    onClick={() => handleDeleteStaff(staff.id)}
                  >
                    Xóa
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
