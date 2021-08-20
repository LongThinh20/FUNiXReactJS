import React, { Component } from "react";
import { Card, CardTitle, CardImg, CardBody, CardText } from "reactstrap";

export default class Dishdetail extends Component {
  renderComment(dish) {
    if (dish) {
      return (
        <>
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardBody>
                <h2>Comments</h2>
                {dish.comments.map((item) => (
                  <>
                    <CardText>{item.comment}</CardText>
                    <CardText>
                      -- {item.author},{" "}
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit"
                      }).format(new Date(Date.parse(item.date)))}{" "}
                    </CardText>
                    <CardText></CardText>
                  </>
                ))}
              </CardBody>
            </Card>
          </div>
        </>
      );
    } else return <div></div>;
  }
  render() {
    const dish = this.props.dish;
    return (
      <div className="container">
        <div className="row">{this.renderComment(dish)}</div>
      </div>
    );
  }
}
