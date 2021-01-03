import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Popup.scss";
import Draggable from 'react-draggable';

// Screen Size Set
function useMediaQuery() {
    const [screenSize, setScreenSize] = useState([0, 0]);
    
    useLayoutEffect(() => {
      function updateScreenSize() {
        setScreenSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateScreenSize);
      updateScreenSize();
      return () => window.removeEventListener("resize", updateScreenSize);
    }, []);
    
    return screenSize;
  }

function Popup(props) {

    const [width] = useMediaQuery();

    useEffect(() => {
        if (props.position === false) {
            popupPosition()
        }
        // dragElement(document.getElementById("popup"+props.id));
	});

    const popupPosition = () => {
        let popup = document.getElementById("popup"+props.id)
        popup.style.left =
            Math.random() * (((window.innerWidth - popup.offsetWidth) * 0.8)) + (window.innerWidth * 0.1) + "px"
        popup.style.top =
            Math.random() * (((window.innerHeight- popup.offsetHeight) * 0.7)) + (window.innerHeight * 0.1) + "px"
    }


	// POPUP SET
	// function dragElement(elmnt) { 
	// 	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0; 
	// 	elmnt.onmousedown = dragMouseDown; 
	// 	function dragMouseDown(e) { 
	// 		e = e || window.event; 
	// 		e.preventDefault(); 
	// 		pos3 = e.clientX; 
	// 		pos4 = e.clientY; 
	// 		document.onmouseup = closeDragElement; 
	// 		document.onmousemove = elementDrag; 
	// 	} 
	// 	function elementDrag(e) { 
	// 		e = e || window.event; 
	// 		e.preventDefault(); 
	// 		pos1 = pos3 - e.clientX; 
	// 		pos2 = pos4 - e.clientY; 
	// 		pos3 = e.clientX; 
	// 		pos4 = e.clientY; 
	// 		elmnt.style.top = (elmnt.offsetTop - pos2 * 6) + "px"; 
    //         elmnt.style.left = (elmnt.offsetLeft - pos1 * 6) + "px"; 
	// 	} 
	// 	function closeDragElement() { 
	// 		document.onmouseup = null; 
    //         document.onmousemove = null; 
	// 	} 
    // }
    
    const onMouseEnterPopup = (id) => {
        document.getElementById("popup" + id).style.zIndex = 9;
    }

    const onMouseLeavePopup = (id) => {
        document.getElementById("popup" + id).style.zIndex = 5;
    }

    const onClickClose = (id) => {

        console.log('popup'+id);

		document.getElementById("popup" + id).style.opacity = 0
        document.getElementById("popup" + id).style.zIndex = -1
        
        setTimeout(function () {
            document.getElementById("popup" + id).style.position = "fixed"
            document.getElementById("popup" + id).style.top = 9999 + "px"
            document.getElementById("popup" + id).style.left = 9999 + "px"
        },300);
    } 
    
    return width > 769 ? (
        <Draggable
            axis="both"
            handle=".popup-line"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            grid={[25, 25]}
            scale={1}
        >
            <div 
                className={ props.highlight ? "popup-line highlight" : "popup-line" }           
                id={"popup" + props.id}
                style={{width: props.width + 'px', maxWidth: props.maxWidth + 'px', top: props.top + 'px', left: props.left + 'px'}}
                onMouseEnter={()=>onMouseEnterPopup(props.id)}
                onMouseLeave={()=>onMouseLeavePopup(props.id)}
            >
                <div className="popup-title">
                    {props.title}
                    <span 
                        className="close-btn" 
                        onClick={()=>onClickClose(props.id)}
                    >
                    ×
                    </span>
                </div> 
                <div 
                    className="popup-content" 
                    style={ props.padding ? {padding: '14px 10px 15px'} : {padding: ''} }
                >
                    {props.children}
                </div> 
            </div>
        </Draggable>
    ) : (
        <div 
            className={ props.highlight ? "popup-line highlight" : "popup-line" }           
            id={"popup" + props.id}
            style={{width: props.width + 'px', top: props.top + 'px', left: props.left + 'px'}}
            onMouseEnter={()=>onMouseEnterPopup(props.id)}
            onMouseLeave={()=>onMouseLeavePopup(props.id)}
        >
            <div className="popup-title">
                {props.title}
                <span 
                    className="close-btn" 
                    onClick={()=>onClickClose(props.id)}
                >
                ×
                </span>
            </div> 
            <div 
                className="popup-content" 
                style={ props.padding ? {padding: '14px 10px 15px'} : {padding: ''} }
            >
                {props.children}
            </div> 
        </div>
    );
}

export default React.memo(Popup);
