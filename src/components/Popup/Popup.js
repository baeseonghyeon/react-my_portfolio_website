import React, { useEffect } from "react";

import "./Popup.scss";

function Popup(props) {

    useEffect(() => {
        if (props.position === false) {
            popupPosition()
        }
        dragElement(document.getElementById("popup"+props.id));
	});

    const popupPosition = () => {
        let popup = document.getElementById("popup"+props.id)
        popup.style.left =
            Math.random() * (((window.innerWidth - popup.offsetWidth) * 0.9)) + "px"
        popup.style.top =
            Math.random() * (((window.innerHeight- popup.offsetHeight) * 0.7)) + "px"
    }

	// POPUP SET
	function dragElement(elmnt) { 
		var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0; 
		elmnt.onmousedown = dragMouseDown; 
		function dragMouseDown(e) { 
			e = e || window.event; 
			e.preventDefault(); 
			pos3 = e.clientX; 
			pos4 = e.clientY; 
			document.onmouseup = closeDragElement; 
			document.onmousemove = elementDrag; 
		} 
		function elementDrag(e) { 
			e = e || window.event; 
			e.preventDefault(); 
			pos1 = pos3 - e.clientX; 
			pos2 = pos4 - e.clientY; 
			pos3 = e.clientX; 
			pos4 = e.clientY; 
			elmnt.style.top = (elmnt.offsetTop - pos2 * 6) + "px"; 
            elmnt.style.left = (elmnt.offsetLeft - pos1 * 6) + "px"; 
		} 
		function closeDragElement() { 
			document.onmouseup = null; 
            document.onmousemove = null; 
		} 
    }
    
    const onClickClose = (id) => {
		document.getElementById("popup" + id).style.opacity = 0
        document.getElementById("popup" + id).style.zIndex = -1
        
        setTimeout(function () {
            document.getElementById("popup" + id).style.position = "fixed"
            document.getElementById("popup" + id).style.top = 9999 + "px"
            document.getElementById("popup" + id).style.left = 9999 + "px"
        },200);
       
    } 
    
    return (
        <div 
            className={ props.highlight ? "popup-line highlight" : "popup-line" }           
            id={"popup" + props.id}
            style={{width: props.width + 'px', top: props.top + 'vh', left: props.left + 'vw'}}
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
    )
}

export default React.memo(Popup);
