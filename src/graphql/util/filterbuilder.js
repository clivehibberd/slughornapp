

/**
 * Given a Map, create the filter/query criteria
 * Result should conform to the pattern below
 * filter: {
        <lowercase (KEY)>: { eq: <VALUE> }
        and: 
        {agegroup: { eq: FORTIES }
        } 
      }
      !! Filter fields MUST Be of type Enum

 * @param map 
 * @returns 
 */
export function AndEnumFilterGenerator(map){
    let result="filter: {}";
    if (map.size===0){
        return result;
    }
    result = "filter: {"; 
    map.forEach((value, key) => {
        var s="";               
        s = s.concat(key.toLowerCase().concat(":")); // Have age:
        s = s.concat("{ eq:",value,"}");
        result = result.concat(s);
        result = result.concat(",");       
    });
    result =result.concat("}");
    return result;
}