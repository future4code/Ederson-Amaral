~~~javascript
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let custoTotal;
  if(quantidade < 12){
    custoTotal = quantidade * 1.30
  }else{
    custoTotal = quantidade * 1
  }
  return custoTotal
}
~~~