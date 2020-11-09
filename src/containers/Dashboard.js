import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { fetchCars } from '../redux/actions/carActions';

const Dashboard = ({ fetchCars, userReducer, carReducer }) => {
  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  return (
    <div>
      {userReducer.user.token ? (
        <Container className="dashboard_cover">
          <h1 className="welcome">
            Welcome,
            {userReducer.user.user.username}
          </h1>
          <h2 className="welcome">Latest Models</h2>
          <GridList cols={2} spacing={10} cellHeight={300}>
            {carReducer.cars.map((car) => (
              <GridListTile key={car.id}>
                <img src={car.img_url} alt="car pic" />
                <GridListTileBar
                  title={car.name}
                  subtitle={<span>by: Lhoussaine</span>}
                  actionIcon={
                    <IconButton aria-label="info about Lhoussiane">
                      <Link to={`/car/${car.id}`}>
                        <ArrowForwardIosIcon />
                      </Link>
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </Container>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

Dashboard.propTypes = {
  carReducer: PropTypes.shape({
    cars: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  userReducer: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  }).isRequired,
  fetchCars: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  carReducer: state.carReducer,
});

const mapDispatchToProps = {
  fetchCars,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
