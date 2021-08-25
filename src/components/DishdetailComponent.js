import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish(dish) {
  if (dish) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg src={dish.dish.image} alt={dish.dish.name} />
          <CardBody>
            <CardTitle>{dish.dish.name}</CardTitle>
            <CardText>{dish.dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else return <div></div>;
}

function RenderComments(comments) {
  if (comments) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardBody>
            <h2>Comments</h2>
            {comments.comments.map((item) => (
              <>
                <CardText key={item.id}>{item.comment}</CardText>
                <CardText>
                  -- {item.author},{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit"
                  }).format(new Date(Date.parse(item.date)))}{" "}
                </CardText>
              </>
            ))}
          </CardBody>
        </Card>
      </div>
    );
  } else return <div></div>;
}

const Dishdetail = (props) => {
  const dish = props.comments;
  console.log(dish);

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.comments} />
        </div>
      </div>
    </div>
  );
};

export default Dishdetail;
