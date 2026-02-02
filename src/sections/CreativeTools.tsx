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
    id: 'image',
    name: '图片处理',
    tools: [
      { id: '1', name: 'AI无损图片放大', description: '提升图像质量，无需牺牲清晰度', url: '#' },
      { id: '2', name: 'LiblibAI·哩布哩布AI', description: '原创AI模型分享社区，10万+模型免费下载', url: '#' },
      { id: '3', name: 'Vega AI', description: '在线训练应用AI创作平台', url: '#' },
      { id: '4', name: 'Dreamina', description: 'AI创作产品，文字绘图、扩图、局部重绘', url: '#' },
      { id: '5', name: '鸭力巨大', description: '免费在线图片/视频压缩工具', url: '#' },
      { id: '6', name: '包图网', description: '1000万套原创品质商用素材', url: '#' },
    ],
  },
  {
    id: 'video',
    name: '视频剪辑',
    tools: [
      { id: '7', name: '剪映', description: '抖音官方视频剪辑工具', url: '#' },
      { id: '8', name: 'CapCut', description: '剪映国际版', url: '#' },
      { id: '9', name: '必剪', description: 'B站官方剪辑工具', url: '#' },
      { id: '10', name: '快影', description: '快手官方视频剪辑', url: '#' },
    ],
  },
  {
    id: 'mindmap',
    name: '思维导图',
    tools: [
      { id: '11', name: 'XMind', description: '专业思维导图软件', url: '#' },
      { id: '12', name: 'ProcessOn', description: '在线流程图和思维导图', url: '#' },
      { id: '13', name: '幕布', description: '大纲笔记和思维导图', url: '#' },
      { id: '14', name: 'GitMind', description: '免费在线思维导图', url: '#' },
    ],
  },
  {
    id: 'editor',
    name: '排版编辑',
    tools: [
      { id: '15', name: '秀米', description: '公众号图文排版工具', url: '#' },
      { id: '16', name: '135编辑器', description: '微信公众号文章排版', url: '#' },
      { id: '17', name: 'Markdown Nice', description: 'Markdown排版工具', url: '#' },
      { id: '18', name: '墨刀', description: '原型设计和协作工具', url: '#' },
    ],
  },
  {
    id: 'convert',
    name: '格式转换',
    tools: [
      { id: '19', name: 'PDF24 Tools', description: '免费PDF工具集', url: '#' },
      { id: '20', name: 'iLovePDF', description: 'PDF文件处理工具', url: '#' },
      { id: '21', name: 'Smallpdf', description: 'PDF转换和编辑', url: '#' },
      { id: '22', name: 'CloudConvert', description: '在线文件转换器', url: '#' },
    ],
  },
  {
    id: 'subtitle',
    name: '字幕配音',
    tools: [
      { id: '23', name: '剪映字幕', description: '自动识别视频字幕', url: '#' },
      { id: '24', name: '网易见外', description: '视频翻译和字幕生成', url: '#' },
      { id: '25', name: '讯飞听见', description: '语音转文字服务', url: '#' },
    ],
  },
  {
    id: 'live',
    name: '直播录屏',
    tools: [
      { id: '26', name: 'OBS Studio', description: '免费开源录屏直播软件', url: '#' },
      { id: '27', name: 'Bandicam', description: '高清录屏软件', url: '#' },
      { id: '28', name: 'ScreenFlow', description: 'Mac平台录屏工具', url: '#' },
    ],
  },
  {
    id: 'color',
    name: '调色配色',
    tools: [
      { id: '29', name: 'Adobe Color', description: '在线配色工具', url: '#' },
      { id: '30', name: 'Coolors', description: '快速配色方案生成', url: '#' },
      { id: '31', name: 'Color Hunt', description: '精选配色方案', url: '#' },
      { id: '32', name: '中国色', description: '中国传统颜色配色', url: '#' },
    ],
  },
];

export default function CreativeTools() {
  const [activeCategory, setActiveCategory] = useState('image');

  const activeTools = categories.find((c) => c.id === activeCategory)?.tools || [];

  return (
    <section id="creative" className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">创作工具</h2>
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
