import React from "react";
import { Container, Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import SalaryList from "./SalaryListComponent";

export default function Salary(props) {
  const staffs = props.staffs;
  const salaryBasic = 3000000;

  const handleSortByIdIncrease = () => {
    staffs.sort((a, b) => b.id - a.id);
  };
  const handleSortByIdDecrease = () => {
    staffs.sort((a, b) => a.id - b.id);
  };
  const handleSortBySalaryIncrease = () => {
    staffs.sort((a, b) => {
      if (
        a.salaryScale * salaryBasic + 200000 * a.overTime >
        b.salaryScale * salaryBasic + 200000 * b.overTime
      ) {
        return -1;
      }
      return 0;
    });
  };
  const handleSortBySalaryDecrease = () => {
    staffs.sort((a, b) => {
      if (
        a.salaryScale * salaryBasic + 200000 * a.overTime <
        b.salaryScale * salaryBasic + 200000 * b.overTime
      ) {
        return -1;
      }
      return 0;
    });
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
          <div className="col-12 col-md-3">
            <h1>Bảng lương</h1>
          </div>
          <div className="col-12 col-md ">
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
        <SalaryList staffs={staffs} />
      </Container>
    </section>
  );
}
