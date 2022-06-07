import { useEffect } from 'react';

/**
 * 페이지 랜더시 애니메이션 이펙트 추가
 * @param { node } ref - 페이지 상단 요소의 ref
 */
const useRenderEffect = (node) => {
  useEffect(() => {
    if (node.current) {
      node.current.style.opacity = 1;
      node.current.style.transform = 'initial'
    }
  }, [node]);
};

export default useRenderEffect;
