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
    id: 'ppt',
    name: 'PPT资源',
    tools: [
      { id: '1', name: '轻竹办公PPT', description: 'AI一键生成的简约PPT工具与丰富模板', url: '#' },
      { id: '2', name: 'GaiPPT', description: '基于AI的Web端PPT美化工具', url: '#' },
      { id: '3', name: 'PPTX.AI', description: '自动生成优雅幻灯片', url: '#' },
      { id: '4', name: 'Pi智能演示文档', description: '快速生成优雅美观的PPT和图文页面', url: '#' },
      { id: '5', name: 'AipptMaker', description: '免费创建专业PowerPoint演示文稿', url: '#' },
      { id: '6', name: 'Gamma PPT', description: '快速创建引人入胜的演示文稿', url: '#' },
    ],
  },
  {
    id: 'images',
    name: '免商图片',
    tools: [
      { id: '7', name: '包图网', description: '1000万套原创品质商用素材', url: '#' },
      { id: '8', name: 'Unsplash', description: '免费高质量摄影图片', url: '#' },
      { id: '9', name: 'Pexels', description: '免费商用图片和视频', url: '#' },
      { id: '10', name: 'Pixabay', description: '免费图片、视频和音乐', url: '#' },
      { id: '11', name: 'Burst', description: 'Shopify提供的免费图片库', url: '#' },
      { id: '12', name: 'Freepik', description: '免费矢量图、PSD、图标', url: '#' },
    ],
  },
  {
    id: 'video',
    name: '视频素材',
    tools: [
      { id: '13', name: 'Pexels Video', description: '免费高质量视频素材', url: '#' },
      { id: '14', name: 'Coverr', description: '免费视频背景素材', url: '#' },
      { id: '15', name: 'Mixkit', description: '免费视频、音乐和音效', url: '#' },
      { id: '16', name: 'Videvo', description: '免费和付费视频素材', url: '#' },
    ],
  },
  {
    id: 'music',
    name: '音乐素材',
    tools: [
      { id: '17', name: 'FreePD', description: '免费公共领域音乐', url: '#' },
      { id: '18', name: 'Incompetech', description: '免费音乐库', url: '#' },
      { id: '19', name: 'Bensound', description: '免费音乐和音效', url: '#' },
      { id: '20', name: 'Musopen', description: '免费古典音乐', url: '#' },
    ],
  },
  {
    id: 'fonts',
    name: '字体字库',
    tools: [
      { id: '21', name: 'Google Fonts', description: '免费开源字体库', url: '#' },
      { id: '22', name: '字由', description: '设计师必备字体工具', url: '#' },
      { id: '23', name: '求字体网', description: '字体识别和下载', url: '#' },
      { id: '24', name: '站酷字体', description: '免费商用中文字体', url: '#' },
    ],
  },
  {
    id: 'scripts',
    name: '剧本文案',
    tools: [
      { id: '25', name: '剧本网', description: '专业剧本创作平台', url: '#' },
      { id: '26', name: '编剧圈', description: '编剧交流和资源分享', url: '#' },
    ],
  },
  {
    id: 'movie',
    name: '影视资源',
    tools: [
      { id: '27', name: '豆瓣电影', description: '电影评分和评论', url: '#' },
      { id: '28', name: 'IMDb', description: '国际电影数据库', url: '#' },
    ],
  },
  {
    id: 'wallpaper',
    name: '摄影壁纸',
    tools: [
      { id: '29', name: 'Wallhaven', description: '高质量壁纸网站', url: '#' },
      { id: '30', name: 'Unsplash', description: '高清摄影壁纸', url: '#' },
    ],
  },
  {
    id: 'icons',
    name: 'logo图标',
    tools: [
      { id: '31', name: 'Flaticon', description: '免费矢量图标', url: '#' },
      { id: '32', name: 'Iconfont', description: '阿里巴巴矢量图标库', url: '#' },
      { id: '33', name: 'FontAwesome', description: '流行的图标字体', url: '#' },
      { id: '34', name: 'Heroicons', description: '免费SVG图标', url: '#' },
    ],
  },
  {
    id: 'illustration',
    name: '插画网站',
    tools: [
      { id: '35', name: 'unDraw', description: '免费开源插画', url: '#' },
      { id: '36', name: 'Blush', description: '可定制插画生成', url: '#' },
    ],
  },
  {
    id: 'netdisk',
    name: '网盘传输',
    tools: [
      { id: '37', name: '百度网盘', description: '国内主流网盘', url: '#' },
      { id: '38', name: '阿里云盘', description: '高速网盘服务', url: '#' },
      { id: '39', name: '夸克网盘', description: '阿里旗下网盘', url: '#' },
      { id: '40', name: 'WeTransfer', description: '大文件传输服务', url: '#' },
    ],
  },
];

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('ppt');

  const activeTools = categories.find((c) => c.id === activeCategory)?.tools || [];

  return (
    <section id="resources" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">资源素材</h2>
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
