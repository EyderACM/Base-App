export const anyBaseToDecimal = (value, dictionary, base) => {
  const values = value.split('');
  let convertedValue = 0;
  for(let i = 0; i < values.length; i++){
    convertedValue += dictionary[values[values.length - 1 - i]] * power(parseInt(base),i)
  }
  return convertedValue;
};

export const decimalToAnyBase = (value, dictionary, base) => {
  let newValue = "";
  const baseValue = parseInt(base);  

  do {
    let dictionaryValue;
    if(baseValue > 10){
      Object.keys(dictionary).forEach(base => {
        if(dictionary[base] === (value%baseValue)){
          dictionaryValue = base;
        };
      })
    }else {
      dictionaryValue = (value%baseValue).toString()
    }
    newValue = dictionaryValue + newValue;
    value = Math.floor(value/baseValue);
  } while (value >= baseValue);
  

  Object.keys(dictionary).forEach(base => {
    if(dictionary[base] === (value%baseValue)){
      newValue = base + newValue;
    };
  })

  return newValue;
}
export const power = (base, exponent) => {
  if(exponent === 0){
    return 1;
  } 
  return base * power(base, --exponent)
}