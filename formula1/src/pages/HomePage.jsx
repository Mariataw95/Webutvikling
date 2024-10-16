import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="mt-5 fw-bold text-center">Welcome to Formula 1</h1>
      <p className="fw-light text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam optio
        dolor id, ipsum pariatur porro officia fugit fuga molestias est natus
        possimus sint dolorem amet, quam sunt veritatis eaque doloremque!
      </p>
      <div className="row ">
        <div className="col-12 col-md-6 col-lg-4 ">
          <div className="card shadow mb-3 h-100 d-flex flex-column justify-content-between ">
            <div className="card-body ">
              <h4>Drivers</h4>
              <p className="fw-light">
                Meet all the racing stars from F1 here! Click to explore all our
                drivers and details about each one of them.
              </p>
              <Link to="/drivers" className="btn btn-outline-danger  mt-bottom">
                View drivers
              </Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow h-100 justify-content-between">
            <div className="card-body">
              <h4 className="card-title">Teams</h4>
              <p className="fw-light">
                Discover all the F1 teams! Click here to see what kind of cars
                each team uses and which drivers are on each team.
              </p>
              <Link to="/teams" className="btn btn-outline-danger ">
                View all teams
              </Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow h-100 justify-content-between">
            <div className="card-body">
              <h4 className="card-title">F1 Quiz</h4>
              <p className="fw-light">
                How well do you know the F1? Play this quiz and find out how big
                of fan you are. Test your knowledge of F1 by taking this quiz!
              </p>
              <Link to="/quiz" className="btn btn-outline-danger  ">
                Take quiz
              </Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4 d-flex flex-row">
          <div className="card shadow h-100 justify-content-between mt-3">
            <h4 class="card-header bg-danger text-white text-center">
              Do not miss
            </h4>

            <div className="card-body">
              <h2 className="card-title">Races - 2023 winners!</h2>
              <p className="fw-light">
                NEED TO KNOW! This years winners have been anounced and finally
                here. Read more.
              </p>
              <Link to="/races" className="btn btn-outline-danger">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
