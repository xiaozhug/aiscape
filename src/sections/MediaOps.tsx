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
    id: 'monetization',
    name: '知识付费',
    tools: [
      { id: '1', name: '原力推创作平台', description: '连接创作者与粉丝的内容付费平台', url: '#' },
      { id: '2', name: '千聊', description: '一站式知识变现工具', url: '#' },
      { id: '3', name: 'Ko-Fi', description: '帮助创作者从粉丝那里获得支持', url: '#' },
      { id: '4', name: 'Buy Me a Coffee', description: '为创作者提供收款服务', url: '#' },
      { id: '5', name: '爱赞助', description: '付费内容订阅模式平台', url: '#' },
      { id: '6', name: '知识星球', description: '帮助内容创作者与粉丝建立联系', url: '#' },
    ],
  },
  {
    id: 'trending',
    name: '实时热榜',
    tools: [
      { id: '7', name: '微博热搜', description: '微博实时热门话题', url: '#' },
      { id: '8', name: '知乎热榜', description: '知乎实时热门问题', url: '#' },
      { id: '9', name: '百度热搜', description: '百度搜索热门关键词', url: '#' },
      { id: '10', name: '36氪热榜', description: '科技创业资讯热榜', url: '#' },
    ],
  },
  {
    id: 'platforms',
    name: '媒体平台',
    tools: [
      { id: '11', name: '微信公众号', description: '微信内容创作平台', url: '#' },
      { id: '12', name: '知乎', description: '问答社区平台', url: '#' },
      { id: '13', name: '今日头条', description: '资讯内容平台', url: '#' },
      { id: '14', name: '百家号', description: '百度内容创作平台', url: '#' },
      { id: '15', name: '小红书', description: '生活方式分享平台', url: '#' },
      { id: '16', name: 'B站', description: '视频创作和分享平台', url: '#' },
    ],
  },
  {
    id: 'influencer',
    name: '红人营销',
    tools: [
      { id: '17', name: '新榜', description: '新媒体数据平台', url: '#' },
      { id: '18', name: '飞瓜数据', description: '短视频数据分析', url: '#' },
      { id: '19', name: '蝉妈妈', description: '直播电商数据分析', url: '#' },
      { id: '20', name: '千瓜数据', description: '小红书数据分析', url: '#' },
    ],
  },
  {
    id: 'analytics',
    name: '数据分析',
    tools: [
      { id: '21', name: '百度统计', description: '网站流量分析工具', url: '#' },
      { id: '22', name: 'Google Analytics', description: '谷歌网站分析', url: '#' },
      { id: '23', name: '神策数据', description: '用户行为分析平台', url: '#' },
      { id: '24', name: 'GrowingIO', description: '增长数据分析', url: '#' },
    ],
  },
  {
    id: 'monetize',
    name: '流量变现',
    tools: [
      { id: '25', name: 'Google AdSense', description: '谷歌广告联盟', url: '#' },
      { id: '26', name: '百度联盟', description: '百度广告联盟', url: '#' },
      { id: '27', name: '穿山甲', description: '字节跳动广告平台', url: '#' },
    ],
  },
  {
    id: 'growth',
    name: '裂变增长',
    tools: [
      { id: '28', name: '星耀任务宝', description: '微信裂变增长工具', url: '#' },
      { id: '29', name: '乙店', description: '社群裂变工具', url: '#' },
      { id: '30', name: '媒想到', description: '增长裂变平台', url: '#' },
    ],
  },
  {
    id: 'news',
    name: '媒体资讯',
    tools: [
      { id: '31', name: '36氪', description: '科技创业媒体', url: '#' },
      { id: '32', name: '虎嗅', description: '商业资讯平台', url: '#' },
      { id: '33', name: '品玩', description: '科技创新内容', url: '#' },
      { id: '34', name: '量子位', description: 'AI资讯媒体', url: '#' },
    ],
  },
];

export default function MediaOps() {
  const [activeCategory, setActiveCategory] = useState('monetization');

  const activeTools = categories.find((c) => c.id === activeCategory)?.tools || [];

  return (
    <section id="media" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">媒体运营</h2>
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
