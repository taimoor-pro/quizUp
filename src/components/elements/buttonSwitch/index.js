import { useState } from "react";
import Nav from "react-bootstrap/Nav";

function ButtonSwitch(props) {
  const { button } = props;
  const [activeKey, setActiveKey] = useState("viewDicom");

  const handleButtonClick = (eventKey) => {
    setActiveKey(eventKey);
  };

  return (
    <Nav variant="pills">
      {button?.map((btn, index) => {
        return (
          <Nav.Item key={index}>
            <Nav.Link
              href="#"
              //   className={buttonClass}
              eventKey={btn.eventKey}
              style={{
                backgroundColor:
                  btn.eventKey === activeKey ? btn.backgroundColor : "",
                color: btn.textColor,
                marginLeft: btn.marginLeft,
                marginTop: btn.marginTop,
                fontSize: btn.fontSize,
                padding: btn.padding,
                borderRadius: btn.borderRadius,
                fontWeight: btn.fontWeight,
              }}
              onClick={(e) => {
                btn.onClick(btn.eventKey);
                handleButtonClick(btn.eventKey);
              }}
            >
              {btn.title}
            </Nav.Link>
          </Nav.Item>
        );
      })}

      {/* <Nav.Item>
        <Nav.Link href="#">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled">Disabled</Nav.Link>
      </Nav.Item> */}
    </Nav>
  );
}

export default ButtonSwitch;
