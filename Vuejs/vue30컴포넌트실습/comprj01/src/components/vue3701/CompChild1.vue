<style scoped>
.main {
  border: 1px solid black;
  background-color: yellow;
}
</style>

<template>
  <div class="main">
    {{ msg }}
    <child11 />
    {{ msg }}
  </div>
</template>

<script>
import CompChild11 from './CompChild11.vue';

export default {
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      msg: 'Child1',
    };
  },
  components: {
    /* 전역 컴포넌트인 경우는 등록하지 않는다. 전역 컴포넌트는 프로토타입 체인으로 찾을 수 있기 때문에 */
    /* 지역 컴포넌트나 파일 컴포넌트만 등록 한다. 예시) "태그명" : 컴포넌트명 */
    child11: CompChild11,
  },
};
</script>
