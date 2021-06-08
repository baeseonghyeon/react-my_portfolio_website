import React, { useEffect } from 'react';
import './Popup.scss';
import Draggable from 'react-draggable';
import useMediaQuery from '../../hook/useMediaQuery';

function Popup(props) {
  const [width] = useMediaQuery();

  // Popup Render Position Set
  useEffect(() => {
    if (props.position === false) {
      popupPosition();
    }
  });

  const popupPosition = () => {
    const popup = document.getElementById(`popup${props.id}`);
    popup.style.left = `${
      Math.random() * ((window.innerWidth - popup.offsetWidth) * 0.8) +
      window.innerWidth * 0.1
    }px`;
    popup.style.top = `${
      Math.random() * ((window.innerHeight - popup.offsetHeight) * 0.7) +
      window.innerHeight * 0.1
    }px`;
  };

  // Popup TopUp
  const onMouseEnterPopup = (id) => {
    document.getElementById(`popup${id}`).style.zIndex = 9;
  };

  const onMouseLeavePopup = (id) => {
    document.getElementById(`popup${id}`).style.zIndex = 5;
  };

  // Popup Close
  const onClickClose = (id) => {
    document.getElementById(`popup${id}`).style.opacity = 0;
    document.getElementById(`popup${id}`).style.zIndex = -1;

    setTimeout(function () {
      document.getElementById(`popup${id}`).style.position = 'fixed';
      document.getElementById(`popup${id}`).style.top = `${9999}px`;
      document.getElementById(`popup${id}`).style.left = `${9999}px`;
    }, 400);
  };

  return width > 769 ? (
    <Draggable
      axis="both"
      handle=".popup-line"
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      grid={[25, 25]}
      scale={1}
    >
      <div
        className={props.highlight ? 'popup-line highlight' : 'popup-line'}
        id={`popup${props.id}`}
        style={{
          width: `${props.width}px`,
          maxWidth: `${props.maxWidth}px`,
          top: `${props.top}px`,
          left: `${props.left}px`
        }}
        onMouseEnter={() => onMouseEnterPopup(props.id)}
        onTouchStart={() => onMouseEnterPopup(props.id)}
        onMouseLeave={() => onMouseLeavePopup(props.id)}
        onTouchEnd={() => onMouseLeavePopup(props.id)}
      >
        <div className="popup-title">
          {props.title}
          <span
            className="close-btn"
            onClick={() => onClickClose(props.id)}
            onTouchStart={() => onClickClose(props.id)}
          >
            ×
          </span>
        </div>
        <div
          className="popup-content"
          style={
            props.padding ? { padding: '12px 10px 15px' } : { padding: '' }
          }
        >
          {props.children}
        </div>
      </div>
    </Draggable>
  ) : (
    <div
      className={props.highlight ? 'popup-line highlight' : 'popup-line'}
      id={`popup${props.id}`}
      style={{
        width: `${props.width}px`,
        top: `${props.top}px`,
        left: `${props.left}px`
      }}
      onMouseEnter={() => onMouseEnterPopup(props.id)}
      onMouseLeave={() => onMouseLeavePopup(props.id)}
    >
      <div className="popup-title">
        {props.title}
        <span className="close-btn" onClick={() => onClickClose(props.id)}>
          ×
        </span>
      </div>
      <div
        className="popup-content"
        style={props.padding ? { padding: '12px 10px 15px' } : { padding: '' }}
      >
        {props.children}
      </div>
    </div>
  );
}

export default React.memo(Popup);
