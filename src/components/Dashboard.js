import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCars } from '../redux/actions/carActions';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Container from '@material-ui/core/Container';

const Dashboard = ({ fetchCars, userReducer, carReducer }) => {
  useEffect(() => {
    fetchCars();
  }, [fetchCars]);
  // return (
  //   <div>
  //     {userReducer.user.token ? (
  //       <div>
  //         <h1>Welcome, {userReducer.user.user.username}</h1>
  //         {carReducer.cars.map((car) => (
  //           <div key={car.id}>
  //             <Link to={`/car/${car.id}`}>{car.name}</Link>
  //             <br />
  //             <br />
  //             <img src={car.img_url} alt="car pic" />
  //           </div>
  //         ))}
  //       </div>
  //     ) : (
  //       <Redirect to="/" />
  //     )}
  //   </div>
  // );

  return (
    <div>
      {userReducer.user.token ? (
        <Container>
          <h1>Welcome, {userReducer.user.user.username}</h1>
          <GridList cols={2} spacing={10} cellHeight={300}>
            {carReducer.cars.map((car) => (
              <GridListTile key={car.id}>
                <img src={car.img_url} alt="car pic" />
                <GridListTileBar
                  title="Lhoussaine"
                  subtitle={<span>by: 'Lhoussaine'</span>}
                  actionIcon={
                    <IconButton aria-label={`info about Lhoussiane`}>
                      <Link to={`/car/${car.id}`}>
                        <InfoIcon />
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

const mapStateToProps = (state) => {
  return {
    carReducer: state.carReducer,
  };
};

const mapDispatchToProps = {
  fetchCars,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
