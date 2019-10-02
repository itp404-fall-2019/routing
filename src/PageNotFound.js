import React from 'react';

export default function PageNotFound(props) { 
  return (
    <h3>
      The URL {props.location.pathname} was not found.
    </h3>
  );
}