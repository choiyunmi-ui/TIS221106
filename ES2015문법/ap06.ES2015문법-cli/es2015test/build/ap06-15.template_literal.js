"use strict";

/*

    ES2015의 template literal( 백틱, ` ) 에 대해서 알아본다.
    template literal 의 용도
    1. 다중 문자열 만들 때
    2. 변수 치환

*/
var name = '홍길동';
var age = 20;
var str = "\n  abc ".concat(name, "\n  def\n  kfa\n");
console.log(str);