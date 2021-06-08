import React, { useEffect, useState }  from 'react';
import { animateScroll as scroll } from 'react-scroll'
import "./TopBtn.scss";

function TopBtn() {
  const [opacityValue, setOpacity] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const TopPositon = window.scrollY;
      if (TopPositon > 150) {
        setOpacity(1);
      } else {
        setOpacity(0);
      }
    });
  });

  const onClickGoTop = () => {
    scroll.scrollToTop();
  };

	return (
		<span
			className='go-top-btn'
			style={{ opacity: opacityValue }}
			onClick={()=>onClickGoTop()}
		>
		↑
		</span>
	)
};

export default React.memo(TopBtn);