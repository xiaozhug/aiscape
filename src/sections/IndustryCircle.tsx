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
    id: 'service',
    name: 'AI服务商',
    tools: [
      { id: '1', name: '通义法睿', description: '阿里云提供的智能法律助手', url: '#' },
      { id: '2', name: '法小飞', description: '集成多种自然语言处理技术的中文法律智能助手', url: '#' },
      { id: '3', name: '百姓AI', description: '基于大语言模型的消费级和企业级服务', url: '#' },
      { id: '4', name: '语聚AI', description: '简云推出的AI+连接器', url: '#' },
      { id: '5', name: 'OneThingAI', description: '一站式云服务解决方案', url: '#' },
      { id: '6', name: 'EZapi', description: '全球主流大模型API中转服务', url: '#' },
    ],
  },
  {
    id: 'indie',
    name: '独立开发',
    tools: [
      { id: '7', name: '硅语AI', description: 'AI数字人及视频翻译技术', url: '#' },
      { id: '8', name: 'MetaLaw', description: '专注于法律领域的AI搜索引擎', url: '#' },
      { id: '9', name: '海瑞智法', description: '基于大模型的律师对话协作工具', url: '#' },
      { id: '10', name: '庖丁解文', description: '专为信息密集行业打造的AI助手', url: '#' },
      { id: '11', name: 'Vali鞋履AI', description: '通过大数据与AI快速生成专业鞋款设计', url: '#' },
      { id: '12', name: '原创猫', description: '人人可参与的原创创作经济社区', url: '#' },
    ],
  },
  {
    id: 'ecommerce',
    name: '电商运营',
    tools: [
      { id: '13', name: '第四范式', description: '中国领先的决策类AI公司', url: '#' },
      { id: '14', name: 'Together AI', description: '提供开源生成式人工智能模型', url: '#' },
      { id: '15', name: '晨羽智云', description: '高效可靠的AIGC算力租赁服务', url: '#' },
      { id: '16', name: '链企AI', description: '多维度商业查询服务', url: '#' },
      { id: '17', name: '水母智能', description: '可商用的全方位智能设计交付平台', url: '#' },
      { id: '18', name: '知料AI', description: '多功能智能助手，支持写作、翻译、健康', url: '#' },
    ],
  },
  {
    id: 'finance',
    name: '财经投资',
    tools: [
      { id: '19', name: '筑绘通AlphaDraw', description: '智能设计平台，工程绘图效率提升十倍', url: '#' },
      { id: '20', name: '无问芯穹', description: 'AGI算力解决方案', url: '#' },
      { id: '21', name: '智能答人', description: '基于AI大语言模型的AI客服机器人', url: '#' },
      { id: '22', name: '小桔AI', description: '利用人工智能提供多种实用功能', url: '#' },
    ],
  },
  {
    id: 'education',
    name: '教育学习',
    tools: [
      { id: '23', name: '具像AI', description: '简单高效的AI室内设计工具', url: '#' },
      { id: '24', name: '元象XVERSE', description: '专注于AI与3D技术的服务公司', url: '#' },
      { id: '25', name: 'Aidge', description: '国际电商AI云服务', url: '#' },
      { id: '26', name: '美图AI视觉', description: '更懂美的AI视觉解决方案', url: '#' },
    ],
  },
  {
    id: 'jobs',
    name: '招聘求职',
    tools: [
      { id: '27', name: 'Boss直聘', description: '直接沟通BOSS的招聘平台', url: '#' },
      { id: '28', name: '拉勾网', description: '互联网招聘平台', url: '#' },
      { id: '29', name: '猎聘', description: '中高端人才招聘', url: '#' },
      { id: '30', name: '智联招聘', description: '综合招聘平台', url: '#' },
    ],
  },
  {
    id: 'startup',
    name: '创业营销',
    tools: [
      { id: '31', name: '创业邦', description: '创业资讯和服务平台', url: '#' },
      { id: '32', name: 'IT桔子', description: '新经济创投数据平台', url: '#' },
      { id: '33', name: '铅笔道', description: '创业媒体报道', url: '#' },
      { id: '34', name: '36氪', description: '科技创业媒体', url: '#' },
    ],
  },
  {
    id: 'life',
    name: '生活创意',
    tools: [
      { id: '35', name: '下厨房', description: '美食菜谱分享社区', url: '#' },
      { id: '36', name: 'Keep', description: '运动健身平台', url: '#' },
      { id: '37', name: '豆瓣', description: '书影音评分社区', url: '#' },
      { id: '38', name: '什么值得买', description: '消费决策平台', url: '#' },
    ],
  },
];

export default function IndustryCircle() {
  const [activeCategory, setActiveCategory] = useState('service');

  const activeTools = categories.find((c) => c.id === activeCategory)?.tools || [];

  return (
    <section id="industry" className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">行业圈子</h2>
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
