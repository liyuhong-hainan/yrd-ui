import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '../src/styles/index.scss';
library.add(fas)
import { themes } from '@storybook/theming';

export const parameters = {
  docs: {
    theme: themes.light,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: 'docs',
  options: {
    storySort: {
      order: ['首页', '按钮 Button', '提示 Alert', '菜单 Menu', '标签页 Tabs', '图标 Icon', '输入框 Input', '自动补全 AutoComplete', '选择器 Select', '上传 Upload', '表单 Form'], 
    },
  }
}