import React from 'react';

export default function PageNotFound(props) {
  const { location } = props;

  return (
    <h3>
      The URL <code>{location.pathname}</code> was not found.
    </h3>
  );
}