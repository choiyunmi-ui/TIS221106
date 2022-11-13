/*

    ES2015의 template literal( 백틱, ` ) 에 대해서 알아본다.
    template literal 의 용도
    1. 다중 문자열 만들 때
    2. 변수 치환

*/
const name = '홍길동';
const age = 20;
const str = `
  abc ${name}
  def
`;
console.log(str);

const product = { name: '도서', price: '4200원' };
const message = `
  제품 ${product.name}의 가격은 ${product.price}입니다
`;
console.log(message);
