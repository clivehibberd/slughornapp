import React from 'react';
export default function EnumList(props) {
    const {enumMap} = props;
  return (
    <section>
      {enumMap.map((value, idx) => {
        return <div val={value} key={idx}></div>  
      })}
    </section>
  )  
}