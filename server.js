const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// 数据
const profileData = {
  name: '张三',
  title: '全栈开发者',
  bio: '热爱技术与设计，专注于创造优秀的用户体验',
  projects: [
    {
      id: 1,
      title: '电商平台',
      description: '基于 React + Node.js 的全栈电商解决方案',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '/images/project1.jpg'
    },
    {
      id: 2,
      title: '数据可视化系统',
      description: '企业级数据分析与可视化平台',
      tech: ['Vue.js', 'D3.js', 'Python'],
      image: '/images/project2.jpg'
    },
    {
      id: 3,
      title: '社交应用',
      description: '移动端优先的社交分享平台',
      tech: ['React Native', 'Firebase', 'Redux'],
      image: '/images/project3.jpg'
    }
  ],
  contact: {
    email: 'contact@example.com',
    phone: '+86 138 0000 0000',
    wechat: 'my_wechat_id',
    github: 'github.com/example'
  }
};

// API 路由
app.get('/api/profile', (req, res) => {
  res.json(profileData);
});

// 首页路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
