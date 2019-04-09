import React, { Component, Fragment } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

class WeeklyItemsProgressBar extends Component {
  render() {
    const plans = 30;
    const achievements = 50;
    const challenges = 25;
    let weeklyStatus = "🤔";

    weeklyStatus = status => {
      if (achievements > challenges) {
        return "😁";
      } else if (challenges > achievements) {
        return "😱";
      } else {
        return "🤔";
      }
    };

    return (
      <Fragment>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                    All Weekly Items
                  </div>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div
                        className="h5 mb-0 mr-3 "
                        style={{ fontWeight: "bold-text-gray-800" }}>
                        {weeklyStatus}
                      </div>
                    </div>
                    <div className="col">
                      <ProgressBar
                        animated
                        striped
                        variant="primary"
                        now={plans}
                        key={3}
                        label={`#${plans}`}
                      />
                      <ProgressBar
                        animated
                        striped
                        variant="success"
                        now={achievements}
                        key={1}
                        label={`#${achievements}`}
                      />
                      <ProgressBar
                        animated
                        variant="warning"
                        now={challenges}
                        key={2}
                        label={`#${challenges}`}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default WeeklyItemsProgressBar;
