import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const MyRoute = function myRoute({ component: Component, isClosed, ...rest }) {
  const isLogged = true;

  if (isClosed && !isLogged) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: {
            prevPath: rest.location.pathname,
          },
        }}
      />
    );
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
};

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};

export default MyRoute;
