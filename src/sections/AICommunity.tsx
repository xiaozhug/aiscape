import { useState } from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';

interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
}

interface Category {
  id: string;
  name: string;
  tools: Tool[];
}

const categories: Category[] = [
  {
    id: 'platform',
    name: 'AI平台模型',
    tools: [
      { id: '1', name: 'ModelScope', description: '国内首个中文AI模型开源社区', url: '#' },
      { id: '2', name: 'MoonShot AI', description: '月之暗面，专注大模型技术', url: '#' },
      { id: '3', name: 'OpenRouter', description: '提供对多种AI模型的访问', url: '#' },
      { id: '4', name: '通义仁心', description: '专业的疾病知识查询、报告解读', url: '#' },
      { id: '5', name: 'OpenAI', description: 'ChatGPT智能聊天机器人', url: '#' },
      { id: '6', name: 'Kore.ai', description: 'AI优化的虚拟助手', url: '#' },
    ],
  },
  {
    id: 'opensource',
    name: 'AI开源项目',
    tools: [
      { id: '7', name: 'DeepSeek', description: '当红国产开源大模型', url: '#' },
      { id: '8', name: 'Mistral AI', description: 'Mistral 7B高效语言模型', url: '#' },
      { id: '9', name: 'Together AI', description: '提供开源生成式人工智能模型', url: '#' },
      { id: '10', name: 'RWKV', description: '开源AI助手项目', url: '#' },
      { id: '11', name: 'OpenMOSS', description: '开源音视频生成模型', url: '#' },
      { id: '12', name: 'Genspark', description: 'AI Workspace工作自动化', url: '#' },
    ],
  },
  {
    id: 'learning',
    name: 'AI学习资源',
    tools: [
      { id: '13', name: '即创AI', description: 'AI赋能的创作工具', url: '#' },
      { id: '14', name: '阿里云百炼', description: '一站式大模型开发平台', url: '#' },
      { id: '15', name: 'GPT智库', description: '智能对话、文生图、图生图', url: '#' },
      { id: '16', name: 'IMYAI智能助手', description: '一站式AI服务', url: '#' },
      { id: '17', name: 'ChatHi', description: '集成多家大模型的智能聊天助手', url: '#' },
      { id: '18', name: '聚好用AI', description: '一站式AI创意平台', url: '#' },
    ],
  },
  {
    id: 'gpts',
    name: 'GPTs应用',
    tools: [
      { id: '19', name: '小地瓜', description: '多模态AI技术，内容创作、社交', url: '#' },
      { id: '20', name: '千影QianYing', description: '有声游戏生成大模型', url: '#' },
      { id: '21', name: 'MotionGen', description: '通过文本指令生成复杂3D动作', url: '#' },
      { id: '22', name: '淘宝星辰', description: '赋能电商和生活服务的大模型', url: '#' },
    ],
  },
  {
    id: 'prompts',
    name: 'AI提示指令',
    tools: [
      { id: '23', name: 'PromptArt', description: 'AI绘画素材和灵感库', url: '#' },
      { id: '24', name: 'Stariu', description: 'midjourney绘画提示词生成', url: '#' },
      { id: '25', name: 'Stockimg AI', description: '团队AI图像生成', url: '#' },
    ],
  },
  {
    id: 'companies',
    name: 'AI科技公司',
    tools: [
      { id: '26', name: '第四范式', description: '中国领先的决策类AI公司', url: '#' },
      { id: '27', name: '晨羽智云', description: '高效可靠的AIGC算力租赁服务', url: '#' },
      { id: '28', name: '链企AI', description: '多维度商业查询服务', url: '#' },
      { id: '29', name: '水母智能', description: '可商用的全方位智能设计交付平台', url: '#' },
      { id: '30', name: '无问芯穹', description: 'AGI算力解决方案', url: '#' },
      { id: '31', name: '元象XVERSE', description: '专注于AI与3D技术的服务公司', url: '#' },
    ],
  },
];

export default function AICommunity() {
  const [activeCategory, setActiveCategory] = useState('platform');

  const activeTools = categories.find((c) => c.id === activeCategory)?.tools || [];

  return (
    <section id="ai-community" className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">AI社区</h2>
          <a
            href="#"
            className="text-sm text-blue-600 hover:text-blue-700 flex items-center"
          >
            more+
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Category Sidebar */}
          <div className="lg:w-48 flex-shrink-0">
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`category-tag whitespace-nowrap text-left px-4 py-2 ${
                    activeCategory === category.id ? 'active' : ''
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tools Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeTools.map((tool, index) => (
                <a
                  key={tool.id}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tool-card group animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors mb-1">
                        {tool.name}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {tool.description}
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all flex-shrink-0 ml-2" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
