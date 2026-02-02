import { Link } from 'react-router-dom';
import { Bot, Star, Clock, ExternalLink, TrendingUp, Heart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  url: string;
  tags?: string[];
  views?: number;
  likes?: number;
}

// AI助手工具
const aiAssistants: Tool[] = [
  {
    id: 'tool_kimi',
    name: 'Kimi人工智能',
    description: '超强AI写作助手，一键总结20w字长文',
    icon: '🌙',
    url: 'https://kimi.moonshot.cn',
    tags: ['免费', '热门'],
    views: 125678,
    likes: 8934,
  },
  {
    id: 'tool_chatglm',
    name: '智谱清言',
    description: '中国版chatgpt，与GLM大模型进行对话',
    icon: '🧠',
    url: 'https://chatglm.cn',
    tags: ['国产', '免费'],
    views: 89234,
    likes: 6543,
  },
  {
    id: 'tool_doubao',
    name: '豆包',
    description: '抖音AI出品，一站式解决困惑难题',
    icon: '📦',
    url: 'https://www.doubao.com',
    tags: ['字节', '免费'],
    views: 156789,
    likes: 11234,
  },
  {
    id: 'tool_wenxin',
    name: '文心一言',
    description: '文心大模型3.5免费用',
    icon: '📖',
    url: 'https://yiyan.baidu.com',
    tags: ['百度', '免费'],
    views: 234567,
    likes: 15678,
  },
  {
    id: 'tool_deepseek',
    name: 'DeepSeek',
    description: '当红国产开源大模型',
    icon: '🔥',
    url: 'https://www.deepseek.com',
    tags: ['开源', '热门'],
    views: 234567,
    likes: 19876,
  },
  {
    id: 'tool_chatgpt',
    name: 'ChatGPT',
    description: 'OpenAI发布的聊天机器人',
    icon: '💬',
    url: 'https://chat.openai.com',
    tags: ['OpenAI', '国际'],
    views: 567890,
    likes: 45678,
  },
  {
    id: 'tool_claude',
    name: 'Claude',
    description: 'Anthropic开发的AI助手',
    icon: '🎯',
    url: 'https://claude.ai',
    tags: ['Anthropic', '国际'],
    views: 234567,
    likes: 19876,
  },
  {
    id: 'tool_gemini',
    name: 'Gemini',
    description: 'Google开发的AI大模型',
    icon: '💎',
    url: 'https://gemini.google.com',
    tags: ['Google', '多模态'],
    views: 345678,
    likes: 28765,
  },
];

// 热门工具
const hotTools: Tool[] = [
  {
    id: 'tool_openai',
    name: 'OpenAI',
    description: 'OpenAI官网，ChatGPT、GPT-4开发商',
    icon: '🔬',
    url: 'https://openai.com',
    tags: ['热门'],
    views: 345678,
    likes: 28765,
  },
  {
    id: 'tool_jimeng',
    name: '即梦AI',
    description: '剪映旗下文生图、文生视频应用',
    icon: '✨',
    url: 'https://jimeng.jianying.com',
    tags: ['字节', '热门'],
    views: 145678,
    likes: 12345,
  },
  {
    id: 'tool_keling',
    name: '可灵大模型',
    description: '快手自研视频生成大模型',
    icon: '🎬',
    url: 'https://kling.kuaishou.com',
    tags: ['快手', '热门'],
    views: 87654,
    likes: 7654,
  },
  {
    id: 'tool_liblib',
    name: 'LiblibAI',
    description: '国内领先的AI创意平台',
    icon: '🎨',
    url: 'https://www.liblib.art',
    tags: ['热门', '绘画'],
    views: 98765,
    likes: 8765,
  },
  {
    id: 'tool_trae',
    name: 'Trae',
    description: '字节跳动推出的免费AI编程工具',
    icon: '💻',
    url: 'https://www.trae.cn',
    tags: ['编程', '免费'],
    views: 98765,
    likes: 8765,
  },
  {
    id: 'tool_cursor',
    name: 'Cursor',
    description: 'AI编程和软件开发神器',
    icon: '⌨️',
    url: 'https://cursor.sh',
    tags: ['编程', '热门'],
    views: 145678,
    likes: 12345,
  },
];

// 大家喜欢
const favoriteTools: Tool[] = [
  {
    id: 'tool_aippt',
    name: 'AiPPT',
    description: '做PPT就用AiPPT，一键生成高质量PPT',
    icon: '📊',
    url: 'https://www.aippt.cn',
    tags: ['PPT', '办公'],
    views: 65432,
    likes: 5432,
  },
  {
    id: 'tool_tongyi_wanxiang',
    name: '通义万相',
    description: '阿里出品的AI绘画创作模型',
    icon: '🖼️',
    url: 'https://tongyi.aliyun.com/wanxiang',
    tags: ['阿里', '绘画'],
    views: 76543,
    likes: 5432,
  },
  {
    id: 'tool_removebg',
    name: 'Remove.bg',
    description: 'AI智能抠图，一键移除背景',
    icon: '✂️',
    url: 'https://www.remove.bg',
    tags: ['图片', '免费'],
    views: 187654,
    likes: 15678,
  },
  {
    id: 'tool_github_copilot',
    name: 'GitHub Copilot',
    description: 'GitHub和OpenAI联合开发的AI编程助手',
    icon: '🤖',
    url: 'https://github.com/features/copilot',
    tags: ['编程', 'GitHub'],
    views: 234567,
    likes: 19876,
  },
];

// 最新工具
const latestTools: Tool[] = [
  {
    id: 'tool_sora',
    name: 'Sora',
    description: 'OpenAI文字生成视频模型',
    icon: '🎥',
    url: 'https://openai.com/sora',
    tags: ['新', '视频'],
    views: 456789,
    likes: 38765,
  },
  {
    id: 'tool_zhiying',
    name: '智谱清影',
    description: '智谱AI视频生成工具',
    icon: '🎞️',
    url: 'https://chatglm.cn/video',
    tags: ['新', '视频'],
    views: 45678,
    likes: 3456,
  },
  {
    id: 'tool_windsurf',
    name: 'Windsurf',
    description: 'Codeium推出的AI编程工具',
    icon: '🌊',
    url: 'https://codeium.com/windsurf',
    tags: ['新', '编程'],
    views: 67890,
    likes: 5678,
  },
  {
    id: 'tool_runway',
    name: 'Runway',
    description: 'AI视频生成神器',
    icon: '🎬',
    url: 'https://runwayml.com',
    tags: ['视频', '国际'],
    views: 123456,
    likes: 10876,
  },
];

function ToolCard({ tool, index }: { tool: Tool; index: number }) {
  return (
    <div className="tool-card group animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
      <div className="flex items-start">
        <div className="text-3xl mr-3">{tool.icon}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Link 
              to={`/sites/${tool.id}`}
              className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors truncate"
            >
              {tool.name}
            </Link>
            {tool.tags?.map((tag) => (
              <span
                key={tag}
                className={`text-xs px-1.5 py-0.5 rounded ${
                  tag === '免费'
                    ? 'bg-green-100 text-green-600'
                    : tag === 'VIP'
                    ? 'bg-orange-100 text-orange-600'
                    : tag === '热门'
                    ? 'bg-red-100 text-red-600'
                    : tag === '新'
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-500 line-clamp-2">{tool.description}</p>
          {(tool.views || tool.likes) && (
            <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
              {tool.views && (
                <span className="flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {tool.views.toLocaleString()}
                </span>
              )}
              {tool.likes && (
                <span className="flex items-center">
                  <Heart className="h-3 w-3 mr-1" />
                  {tool.likes.toLocaleString()}
                </span>
              )}
            </div>
          )}
        </div>
        <a 
          href={tool.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-500 transition-colors ml-2"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default function AIAssistant() {
  return (
    <section id="recommended" className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="assistant" className="w-full">
          <TabsList className="mb-6 bg-white border flex-wrap h-auto">
            <TabsTrigger value="assistant" className="flex items-center gap-1">
              <Bot className="h-4 w-4" />
              AI助手
            </TabsTrigger>
            <TabsTrigger value="hot" className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              热门网址
            </TabsTrigger>
            <TabsTrigger value="favorite" className="flex items-center gap-1">
              <Heart className="h-4 w-4" />
              大家喜欢
            </TabsTrigger>
            <TabsTrigger value="latest" className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              最新网址
            </TabsTrigger>
          </TabsList>

          <TabsContent value="assistant" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {aiAssistants.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hot" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {hotTools.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="favorite" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {favoriteTools.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="latest" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {latestTools.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
