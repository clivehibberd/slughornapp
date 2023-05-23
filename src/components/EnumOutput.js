import React from 'react';
export default function EnumList({props}) {
    const {enumMap} = props;
  return (
    <React.Fragment>
      {props.keys.map((value, idx) => {
        return <div val={value} key={idx}></div>  
      })}
    </React.Fragment>
  )  
}