import React, { useState } from "react";
import axios from 'axios';
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Transition from "./components/Transition/transition";
import Button from "./components/Button/button";
import Input from "./components/Input/input";
function App() {
    var _a = useState(false), show = _a[0], setShow = _a[1];
    var handleFileChange = function (e) {
        var files = e.target.files;
        if (files) {
            var uploadedFile = files[0];
            var formData = new FormData();
            formData.append(uploadedFile.name, uploadedFile);
            axios.post("https://jsonplaceholder.typicode.com/posts", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function (resp) {
                console.log(resp);
            });
        }
    };
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement(Menu, { mode: "horizontal", defaultIndex: "0", onSelect: function (index) {
                    alert(index);
                }, defaultOpenSubMenus: ["2"] },
                React.createElement(MenuItem, null, "cool link"),
                React.createElement(MenuItem, { disabled: true }, "cool link 2"),
                React.createElement(SubMenu, { title: "dropdown" },
                    React.createElement(MenuItem, null, "cool link 1"),
                    React.createElement(MenuItem, null, "cool link 2"),
                    React.createElement(MenuItem, null, "cool link 3")),
                React.createElement(MenuItem, null, "cool link 3")),
            React.createElement(Button, { size: "lg", onClick: function () {
                    setShow(!show);
                } }, "Toggle"),
            React.createElement(Input, { placeholder: "small size", size: "sm" }),
            React.createElement(Transition, { in: show, timeout: 300, animation: "zoom-in-left" },
                React.createElement("div", null,
                    React.createElement("p", null, "hello, to do for React agin"),
                    React.createElement("p", null, "hello, to do for React agin"),
                    React.createElement("p", null, "hello, to do for React agin"),
                    React.createElement("p", null, "hello, to do for React agin"))),
            React.createElement(Transition, { in: show, timeout: 300, animation: "zoom-in-left", wrapper: true },
                React.createElement(Button, { btnType: "primary", size: "lg" }, "A Large Button"))),
        React.createElement("div", { style: { marginTop: '100px', marginLeft: '100px' } },
            React.createElement("input", { type: "file", name: "myFile", onChange: handleFileChange }))));
}
export default App;
