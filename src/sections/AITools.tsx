import { useState } from 'react';
import { Link } from 'react-router-dom';
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
    id: 'writing',
    name: 'AI写作对话',
    tools: [
      { id: '1', name: 'Kimi人工智能', description: '超强AI写作助手，一键总结20w字长文', url: '#' },
      { id: '2', name: 'Newswriter.Ai', description: '利用人工智能快速生成新闻标题、摘要', url: '#' },
      { id: '3', name: '言笔AI写作', description: '快速生成高质量论文、PPT、公文', url: '#' },
      { id: '4', name: '笔墨公文', description: '专注于公文写作的AIGC创作平台', url: '#' },
      { id: '5', name: '笔灵AI小说', description: '爆款小说拆解、大纲生成', url: '#' },
      { id: '6', name: 'Perplexity AI', description: '为复杂问题提供精准答案的搜索引擎', url: '#' },
    ],
  },
  {
    id: 'painting',
    name: 'AI绘画生成',
    tools: [
      { id: '7', name: '海鲸AI', description: '多功能AI工具，支持写作、绘画、学术', url: '#' },
      { id: '8', name: '墨狐AI', description: '为网文小说创作者提效的智能工具', url: '#' },
      { id: '9', name: 'LiblibAI', description: '原创AI模型分享社区，10万+模型免费下载', url: '#' },
      { id: '10', name: 'Vega AI', description: '在线训练应用AI创作平台', url: '#' },
      { id: '11', name: 'Dreamina', description: 'AI创作产品，文字绘图、扩图', url: '#' },
      { id: '12', name: '通义万相', description: '不断进化的AI绘画创作模型', url: '#' },
    ],
  },
  {
    id: 'video',
    name: 'AI视频生成',
    tools: [
      { id: '13', name: '即梦AI', description: '剪映旗下文生图、文生视频应用', url: '#' },
      { id: '14', name: '可灵大模型', description: '快手自研视频生成大模型', url: '#' },
      { id: '15', name: 'VIMI大模型', description: '通过单张照片生成精准人物视频', url: '#' },
      { id: '16', name: 'PixelDance', description: '字节跳动研发的视频生成模型', url: '#' },
      { id: '17', name: 'HeyGen数字人', description: '最强的AI数字人工具', url: '#' },
      { id: '18', name: '生成时代', description: 'AIGC多模态API平台', url: '#' },
    ],
  },
  {
    id: 'voice',
    name: 'AI语音工具',
    tools: [
      { id: '19', name: 'Luvvoice', description: '免费的文本转语音工具', url: '#' },
      { id: '20', name: '讯飞写作', description: '基于科大讯飞星火大模型的AI智能写作助手', url: '#' },
      { id: '21', name: 'IndexTTS2', description: 'Bilibili发布的情感与时长可控语音合成模型', url: '#' },
      { id: '22', name: 'MiniMax', description: '先进的中文语言模型', url: '#' },
    ],
  },
  {
    id: 'image',
    name: 'AI图片处理',
    tools: [
      { id: '23', name: 'AI无损图片放大', description: '提升图像质量，无需牺牲清晰度', url: '#' },
      { id: '24', name: '鸭力巨大', description: '免费在线图片/视频压缩工具', url: '#' },
      { id: '25', name: 'photokit', description: '在线图片编辑，一键抠图、改图', url: '#' },
      { id: '26', name: 'ARC人像修复', description: '腾讯ARC实验室的在线AI人像修复、抠图', url: '#' },
      { id: '27', name: '皮卡智能', description: '集图片&视频处理的在线网站', url: '#' },
      { id: '28', name: 'TinyPNG', description: '在线图片压缩', url: '#' },
    ],
  },
  {
    id: 'search',
    name: 'AI搜索问答',
    tools: [
      { id: '29', name: '秘塔AI', description: '边想边搜边做，内置20+智能体', url: '#' },
      { id: '30', name: 'Perplexity AI', description: '为复杂问题提供精准答案', url: '#' },
      { id: '31', name: 'Flowith', description: '基于节点式创作的AI生产力工具', url: '#' },
      { id: '32', name: '海螺AI', description: '高速响应的智能助理', url: '#' },
    ],
  },
  {
    id: 'office',
    name: 'AI办公效率',
    tools: [
      { id: '33', name: '轻竹办公PPT', description: 'AI一键生成的简约PPT工具', url: '#' },
      { id: '34', name: 'Gamma PPT', description: '快速创建引人入胜的演示文稿', url: '#' },
      { id: '35', name: 'AiPPT', description: '做PPT就用AiPPT，一键生成高质量PPT', url: '#' },
      { id: '36', name: '飞书多维表格', description: '表格形态的AI工作流搭建工具', url: '#' },
      { id: '37', name: '办公小浣熊', description: '让你和Excel对话，一键分析表格数据', url: '#' },
      { id: '38', name: '通义效率', description: '阿里出品的AI办公效率工具', url: '#' },
    ],
  },
  {
    id: 'code',
    name: 'AI编程建站',
    tools: [
      { id: '39', name: 'Trae', description: '字节跳动推出的免费AI编程工具', url: '#' },
      { id: '40', name: '豆包MarsCode', description: '字节跳动旗下的免费AI编程工具', url: '#' },
      { id: '41', name: '腾讯CodeBuddy', description: '国内无限畅用最新大模型', url: '#' },
      { id: '42', name: '扣子Coze', description: '让你快速搭建并发布专属AI机器人', url: '#' },
    ],
  },
];

export default function AITools() {
  const [activeCategory, setActiveCategory] = useState('writing');

  const activeTools = categories.find((c) => c.id === activeCategory)?.tools || [];

  return (
    <section id="ai-tools" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">AI工具集</h2>
          <Link
            to="/favorites/55207"
            className="text-sm text-blue-600 hover:text-blue-700 flex items-center"
          >
            more+
            <ChevronRight className="h-4 w-4" />
          </Link>
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
                <div
                  key={tool.id}
                  className="tool-card group animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <Link 
                        to={`/sites/${tool.id}`}
                        className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors mb-1 block"
                      >
                        {tool.name}
                      </Link>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {tool.description}
                      </p>
                    </div>
                    <a 
                      href={tool.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-500 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
