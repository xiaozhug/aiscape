import { useState } from 'react';
import { Search, Wrench, Languages, FileText, Image, Video, Brain, Code, Zap, Share2, Shuffle, Link2, Wifi } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';

interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
}

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  tools: Tool[];
}

const categories: Category[] = [
  {
    id: 'translate',
    name: '翻译',
    icon: <Languages className="h-5 w-5" />,
    tools: [
      { id: '1', name: '有道翻译', description: '即时免费的多语言全文翻译', url: '#' },
      { id: '2', name: '秘塔翻译', description: '专注于法律翻译的机器翻译系统', url: '#' },
      { id: '3', name: 'Bob翻译', description: '划词翻译、截图翻译和截图OCR', url: '#' },
      { id: '4', name: 'Google翻译', description: '支持100多种语言的免费翻译服务', url: '#' },
      { id: '5', name: 'DeepL翻译', description: '超级好用的人工智能语言辅助', url: '#' },
    ],
  },
  {
    id: 'online',
    name: '在线工具',
    icon: <Wrench className="h-5 w-5" />,
    tools: [
      { id: '6', name: 'AIScape AI中文版', description: 'AIScape AI助手，提供免费的国...', url: '#' },
      { id: '7', name: 'PDF24 Tools', description: '免费PDF工具集', url: '#' },
      { id: '8', name: '67工具网', description: '即用即走型在线工具', url: '#' },
      { id: '9', name: '千盒工具', description: '免费在线工具网站', url: '#' },
      { id: '10', name: '即时工具', description: '在线工具合集', url: '#' },
    ],
  },
  {
    id: 'query',
    name: '便民查询',
    icon: <Search className="h-5 w-5" />,
    tools: [
      { id: '11', name: '快递查询', description: '全国快递单号查询', url: '#' },
      { id: '12', name: '天气查询', description: '全国天气预报', url: '#' },
      { id: '13', name: 'IP查询', description: 'IP地址归属地查询', url: '#' },
      { id: '14', name: '汇率换算', description: '实时汇率转换', url: '#' },
    ],
  },
  {
    id: 'qrcode',
    name: '二维码工具',
    icon: <Share2 className="h-5 w-5" />,
    tools: [
      { id: '15', name: '批量生成静态二维码', description: '批量生成二维码在线', url: '#' },
      { id: '16', name: 'AI QR code generator', description: '生成可扫描的艺术AI二维码', url: '#' },
      { id: '17', name: '第九工场', description: '死磕艺术二维码', url: '#' },
      { id: '18', name: '在线美化二维码', description: '参数化二维码生成器', url: '#' },
    ],
  },
  {
    id: 'collaboration',
    name: '协作效率',
    icon: <Zap className="h-5 w-5" />,
    tools: [
      { id: '19', name: '腾讯文档', description: '可多人协作的在线文档', url: '#' },
      { id: '20', name: '石墨文档', description: '支持多人在线协作编辑', url: '#' },
      { id: '21', name: '飞书文档', description: '企业协同办公套件', url: '#' },
      { id: '22', name: 'Notion', description: '全能型协作工具', url: '#' },
    ],
  },
  {
    id: 'text',
    name: '文字编排',
    icon: <FileText className="h-5 w-5" />,
    tools: [
      { id: '23', name: '智能改写', description: 'AI智能算法文章改写', url: '#' },
      { id: '24', name: '微词云', description: '简单强大的文字云艺术生成器', url: '#' },
      { id: '25', name: '爱校对', description: '免费的文字、文本AI校对纠错', url: '#' },
      { id: '26', name: '原创度检测', description: '发现文章中相似和重复内容', url: '#' },
    ],
  },
  {
    id: 'image',
    name: '图片处理',
    icon: <Image className="h-5 w-5" />,
    tools: [
      { id: '27', name: 'AI改图神器', description: '万能图片在线编辑器', url: '#' },
      { id: '28', name: 'TinyPNG', description: '在线图片压缩', url: '#' },
      { id: '29', name: 'Squoosh', description: 'Chrome实验室的图片压缩工具', url: '#' },
      { id: '30', name: '改图鸭', description: '在线图片修改、裁剪、加水印', url: '#' },
    ],
  },
  {
    id: 'pdf',
    name: 'PDF工具',
    icon: <FileText className="h-5 w-5" />,
    tools: [
      { id: '31', name: 'PDF24 Tools', description: '免费PDF工具集', url: '#' },
      { id: '32', name: 'iLovePDF', description: 'PDF文件处理工具', url: '#' },
      { id: '33', name: 'Smallpdf', description: 'PDF转换和编辑', url: '#' },
      { id: '34', name: 'PDF2Go', description: '免费在线PDF转换器', url: '#' },
    ],
  },
  {
    id: 'video',
    name: '视频处理',
    icon: <Video className="h-5 w-5" />,
    tools: [
      { id: '35', name: '哔哩哔哩视频解析', description: 'B站高清视频解析下载', url: '#' },
      { id: '36', name: '小红书去水印', description: '小红书视频图片去水印', url: '#' },
    ],
  },
  {
    id: 'mindmap',
    name: '脑图流程图',
    icon: <Brain className="h-5 w-5" />,
    tools: [
      { id: '37', name: 'ProcessOn', description: '在线流程图和思维导图', url: '#' },
      { id: '38', name: 'XMind', description: '专业思维导图软件', url: '#' },
      { id: '39', name: '幕布', description: '大纲笔记和思维导图', url: '#' },
    ],
  },
  {
    id: 'dev',
    name: '开发辅助',
    icon: <Code className="h-5 w-5" />,
    tools: [
      { id: '40', name: 'GitHub', description: '代码托管平台', url: '#' },
      { id: '41', name: 'GitLab', description: 'DevOps平台', url: '#' },
      { id: '42', name: 'CodePen', description: '在线代码编辑器', url: '#' },
    ],
  },
  {
    id: 'other',
    name: '其它工具',
    icon: <Wrench className="h-5 w-5" />,
    tools: [
      { id: '43', name: '帮小忙', description: '腾讯QQ浏览器在线工具箱', url: '#' },
      { id: '44', name: '工具蛙', description: '实用的新媒体工具大全', url: '#' },
    ],
  },
  {
    id: 'transfer',
    name: '分享传输',
    icon: <Share2 className="h-5 w-5" />,
    tools: [
      { id: '45', name: 'WeTransfer', description: '大文件传输服务', url: '#' },
      { id: '46', name: '奶牛快传', description: '文件传输服务', url: '#' },
    ],
  },
  {
    id: 'convert',
    name: '格式转换',
    icon: <Shuffle className="h-5 w-5" />,
    tools: [
      { id: '47', name: 'CloudConvert', description: '在线文件转换器', url: '#' },
      { id: '48', name: 'Convertio', description: '文件转换工具', url: '#' },
    ],
  },
  {
    id: 'shorturl',
    name: '短链接生成',
    icon: <Link2 className="h-5 w-5" />,
    tools: [
      { id: '49', name: '新浪短网址', description: '短链接生成服务', url: '#' },
      { id: '50', name: '百度短网址', description: '短链接生成', url: '#' },
    ],
  },
  {
    id: 'network',
    name: '网络工具',
    icon: <Wifi className="h-5 w-5" />,
    tools: [
      { id: '51', name: 'Speedtest', description: '网速测试', url: '#' },
      { id: '52', name: 'IP138', description: 'IP查询和归属地', url: '#' },
    ],
  },
];

export default function Tools() {
  const [activeCategory, setActiveCategory] = useState('translate');
  const [searchQuery, setSearchQuery] = useState('');

  const activeTools = categories.find((c) => c.id === activeCategory)?.tools || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center">
              <Wrench className="mr-2 h-6 w-6 text-blue-500" />
              在线工具
            </h1>
            <p className="mt-2 text-gray-600">实用的在线工具集合，提升工作效率</p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-xl">
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索工具..."
                className="pl-4 pr-24"
              />
              <Button className="absolute right-0 top-0 h-full rounded-l-none">
                <Search className="h-4 w-4 mr-1" />
                搜索
              </Button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Category Sidebar */}
            <div className="lg:w-56 flex-shrink-0">
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-medium text-gray-800 mb-4">工具分类</h3>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                        activeCategory === category.id
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools Grid */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  {categories.find((c) => c.id === activeCategory)?.name}
                </h2>
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
                      <h3 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors mb-1">
                        {tool.name}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {tool.description}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
