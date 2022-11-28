import React, { useState } from "react";
import axios from 'axios';
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Transition from "./components/Transition/transition";
import Button from "./components/Button/button";
import Input from "./components/Input/input";
function App() {
  const [show, setShow] = useState(false);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files 
    if(files){
      const uploadedFile = files[0]
      const formData = new FormData()
      formData.append(uploadedFile.name, uploadedFile)
      axios.post("https://jsonplaceholder.typicode.com/posts", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(resp => {
        console.log(resp)
      })
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <Menu
          mode="horizontal"
          defaultIndex="0"
          onSelect={(index) => {
            alert(index);
          }}
          defaultOpenSubMenus={["2"]}
        >
          <MenuItem>cool link</MenuItem>
          <MenuItem disabled>cool link 2</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>cool link 1</MenuItem>
            <MenuItem>cool link 2</MenuItem>
            <MenuItem>cool link 3</MenuItem>
          </SubMenu>
          <MenuItem>cool link 3</MenuItem>
        </Menu>
        <Button
          size="lg"
          onClick={() => {
            setShow(!show);
          }}
        >
          Toggle
        </Button>
        <Input 
         placeholder="small size"
         size="sm"
        />
        <Transition in={show} timeout={300} animation="zoom-in-left">
          <div>
            <p>hello, to do for React agin</p>
            <p>hello, to do for React agin</p>
            <p>hello, to do for React agin</p>
            <p>hello, to do for React agin</p>
          </div>
        </Transition>
        <Transition in={show} timeout={300} animation="zoom-in-left" wrapper >
          <Button btnType="primary" size="lg">A Large Button</Button>
        </Transition>
      </header>
      <div style={{marginTop: '100px', marginLeft: '100px'}}>
          <input type="file" name="myFile" onChange={handleFileChange} />
      </div>
    </div>
  );
}

export default App;
