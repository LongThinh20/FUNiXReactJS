import React from "react";
import { useParams } from "react-router-dom";

export default function StaffByDepartment(props) {
  const param = useParams();
  console.log(param);
  return <div></div>;
}
