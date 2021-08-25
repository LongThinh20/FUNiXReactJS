import React, { useState } from "react";
import { Container, Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import SalaryList from "./SalaryListComponent";

export default function Salary(props) {
  const staffs = props.staffs;
  const [staffsLst, setStaffLst] = useState([...staffs]);

  const salaryBasic = 3000000;

  const handleSortByIdIncrease = () => {
    setStaffLst(staffsLst.sort((a, b) => b.id - a.id));
  };
  const handleSortByIdDecrease = () => {
    setStaffLst(staffsLst.sort((a, b) => a.id - b.id));
  };
  const handleSortBySalaryIncrease = () => {
    setStaffLst(
      staffsLst.sort((a, b) => {
        if (
          a.salaryScale * salaryBasic + 200000 * a.overTime >
          b.salaryScale * salaryBasic + 200000 * b.overTime
        ) {
          return -1;
        }
        return 0;
      })
    );
  };
  const handleSortBySalaryDecrease = () => {
    setStaffLst(
      staffsLst.sort((a, b) => {
        if (
          a.salaryScale * salaryBasic + 200000 * a.overTime <
          b.salaryScale * salaryBasic + 200000 * b.overTime
        ) {
          return -1;
        }
        return 0;
      })
    );
  };

  return (
    <section id="salary">
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>Bảng lương</BreadcrumbItem>
        </Breadcrumb>

        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-3">
            <h1>Bảng lương</h1>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-9 ">
            <span className="text_gray font-weight-bold">Sắp xếp theo </span>
            <Button
              outline
              className="m-1 "
              color="info"
              onClick={() => handleSortByIdIncrease()}
            >
              Mã nhân viên giảm dần
            </Button>
            <Button
              outline
              className="m-1"
              color="info"
              onClick={() => handleSortByIdDecrease()}
            >
              Mã nhân viên tăng dần
            </Button>
            <Button
              outline
              className="m-1"
              color="info"
              onClick={() => handleSortBySalaryIncrease()}
            >
              Lương giảm dần
            </Button>
            <Button
              outline
              className="m-1"
              color="info"
              onClick={() => handleSortBySalaryDecrease()}
            >
              Lương tăng dần
            </Button>
          </div>
        </div>
        <SalaryList staffs={staffsLst} salaryBasic={salaryBasic} />
      </Container>
    </section>
  );
}
