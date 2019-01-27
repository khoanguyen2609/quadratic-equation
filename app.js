function equation (form) {
  var delta,x1,x2;
  var a =  parseInt(form.aValue.value);
  var b =  parseInt(form.bValue.value);
  var c =  parseInt(form.cValue.value);
  delta = b*b-4*a*c;
  if (delta>0) {
    x1 = (-b - Math.sqrt(delta))/(2*a);
    x2 = (-b + Math.sqrt(delta)) /(2*a);
    form.x1Value.value = x1.toFixed(3);
    form.x2Value.value = x2.toFixed(3);
  } else if (delta<0 ) {
    alert("no solution");
  } else {
    x1=-b/(2*a) ;
    form.x1Value.value = x1.toFixed(3);
    x2=-b/(2*a) ;
    form.x2Value.value = x2.toFixed(3);
  }
}

function deleteAll (form) {
  form.aValue.value="";
  form.bValue.value="";
  form.cValue.value="";
  form.x1Value.value="";
  form.x2Value.value="";
}
