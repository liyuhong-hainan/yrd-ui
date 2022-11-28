import React from "react";
import Menu from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

import { ComponentStory, ComponentMeta } from "@storybook/react";

const menuMeta: ComponentMeta<typeof Menu> = {
    title: '第六章：Menu',
    id: 'Menu',
    component: Menu,
    subcomponents: {
        'SubMenu': SubMenu,
        'Item': MenuItem
    }
}

export default menuMeta


const Template: ComponentStory<typeof Menu> = (args) => (
    <Menu defaultIndex='0' {...args} >
      <MenuItem>
        cool link
      </MenuItem>
      <MenuItem>
        cool link 2
      </MenuItem>
      <MenuItem disabled>
        disabled
      </MenuItem> 
      <SubMenu title="下拉选项">
        <MenuItem>
          下拉选项一
        </MenuItem>
        <MenuItem>
          下拉选项二
        </MenuItem>    
      </SubMenu>
    </Menu>
  )

  export const DeafaultMenu = Template.bind({})
  DeafaultMenu.storyName = '默认Menu'

  export const ClickMenu = Template.bind({})
  ClickMenu.args = {
    defaultIndex: '1',
    mode: 'vertical'
  }
  ClickMenu.storyName = '纵向Menu'
