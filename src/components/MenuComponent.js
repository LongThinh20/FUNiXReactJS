import React, { Component } from "react";
import dateFormat from "dateformat";

import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStaff: null
    };
  }

  onStaffSelect(staff) {
    this.setState({ selectedStaff: staff });
  }

  renderStaff(staff) {
    if (staff != null)
      return (
        <Card>
          <CardBody>
            <CardTitle tag="h5">Họ và tên: {staff.name}</CardTitle>
            <CardText>
              Ngày sinh: {dateFormat(staff.doB, "dd/MM/yyyy")}
            </CardText>
            <CardText>
              Ngày vào công ty: {dateFormat(staff.startDate, "dd/MM/yyyy")}
            </CardText>
            <CardText>Phòng ban: {staff.department.name}</CardText>
            <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
            <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
          </CardBody>
        </Card>
      );
    else return <div>Bấm vào tên nhân viên để xem thông tin</div>;
  }

  render() {
    const menu = this.props.staffs.map((staff) => {
      return (
        <div className="col-12 col-md-5 m-1" key={staff.id}>
          <Card onClick={() => this.onStaffSelect(staff)}>
            <CardTitle>{staff.name}</CardTitle>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderStaff(this.state.selectedStaff)}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
