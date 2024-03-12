import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Addbook from "./Addbook";
import Borrowed from "./Borrowed";
import Returned from "./Returned";

function Booktab() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title={<b style={{color:'#FF4B91'}}>Available Books</b>}></Tab>
      <Tab eventKey="profile" title={<b style={{color:'#FF4B91'}}>On lend</b>}>
        <Borrowed />
      </Tab>
      <Tab eventKey="Addbook" title={<b style={{color:'#FF4B91'}}>To lend</b>}>
        <Addbook />
      </Tab>
      <Tab eventKey="return" title={<b style={{color:'#FF4B91'}}>Returned</b>}>
      
        <Returned />
      </Tab>
    </Tabs>
  );
}

export default Booktab;
