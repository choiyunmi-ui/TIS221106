"use strict";

/*
 (구조) 분해 할당에 대해서 알아본다.


*/
// 배열에 있는 요소를 개별 변수로 만들기. ES5
var points = [20, 30, 40];
var x1 = points[0];
var y1 = points[1];
var z1 = points[2];
console.log(x1, y1, z1); // 20, 30, 40

var x2 = points[0],
  y2 = points[1],
  z2 = points[2]; // const [x2, y2, z2] = [20, 30, 40];
console.log(x2, y2, z2); // 20, 30, 40

// 두번째  값 무시하기
var x3 = points[0],
  z3 = points[2]; // [20, 30, 40];
console.log(x3, z3); // 20 40

// 두번째, 세번째 값 무시하기
var x4 = points[0],
  w4 = points[3]; // [20, 30, 40];
console.log(x4, w4); // 20 undefined

/**
 * 객체 분해 할당 연산자 사용법을 실습한다.
 */
var car = {
  type: 't',
  color: 'S',
  model: 2021
};

// ES5 에서의 객체 분해 할당
var type1 = car.type;
var color1 = car.color;
var model1 = car.model;
console.log(type1, color1, model1); // t S 2021

// ES2015 에서의 객체 분해 할당. {} 사용해서
//                                                           = { type: 't', color: 'S', model: 2021 };
// const { type: type, color: color, model: model, gear: gear } = { type: 't', color: 'S', model: 2021 };
var _type$color$model = {
    type: 't',
    color: 'S',
    model: 2021
  },
  type = _type$color$model.type,
  color = _type$color$model.color,
  model = _type$color$model.model,
  gear = _type$color$model.gear;
console.log(type, color, model, gear); // t S 2021 undefined

var _type$color$model2 = {
    type: 't',
    color: 'S',
    model: 2021
  },
  type2 = _type$color$model2.type,
  color2 = _type$color$model2.color,
  model2 = _type$color$model2.model,
  gear2 = _type$color$model2.gear;
;
console.log(type2, color2, model2, gear2); // t S 2021 undefined