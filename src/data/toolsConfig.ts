/**
 * 可配置的工具数据管理系统
 * 通过配置方式管理所有分类和工具，便于快速扩展
 */

// 分类配置接口
export interface CategoryConfig {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  parentId?: string; // 支持多级分类
  sortOrder: number;
}

// 工具详情接口
export interface ToolDetail {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  url: string;
  officialUrl: string;
  tags: string[];
  categoryIds: string[]; // 支持多分类
  views: number;
  likes: number;
  history?: string[];
  features?: string[];
  screenshots?: string[];
  relatedToolIds: string[];
  createdAt: string;
  updatedAt: string;
}

// 搜索标签配置
export interface SearchTag {
  id: string;
  label: string;
  type: 'internal' | 'external' | 'search';
  url?: string;
  icon?: string;
}

// ==================== 分类配置 ====================
export const categories: CategoryConfig[] = [
  // 一级分类 - AI工具集
  { id: 'cat_ai_writing', name: 'AI写作对话', slug: 'ai-writing', description: 'AI辅助写作、对话聊天工具', sortOrder: 1 },
  { id: 'cat_ai_painting', name: 'AI绘画生成', slug: 'ai-painting', description: 'AI绘画、图像生成工具', sortOrder: 2 },
  { id: 'cat_ai_video', name: 'AI视频生成', slug: 'ai-video', description: 'AI视频生成、编辑工具', sortOrder: 3 },
  { id: 'cat_ai_voice', name: 'AI语音工具', slug: 'ai-voice', description: 'AI语音合成、识别工具', sortOrder: 4 },
  { id: 'cat_ai_image', name: 'AI图片处理', slug: 'ai-image', description: 'AI图片编辑、处理工具', sortOrder: 5 },
  { id: 'cat_ai_search', name: 'AI搜索问答', slug: 'ai-search', description: 'AI搜索引擎、问答工具', sortOrder: 6 },
  { id: 'cat_ai_office', name: 'AI办公效率', slug: 'ai-office', description: 'AI办公、效率提升工具', sortOrder: 7 },
  { id: 'cat_ai_code', name: 'AI编程建站', slug: 'ai-code', description: 'AI编程、开发辅助工具', sortOrder: 8 },
  
  // 一级分类 - AI社区
  { id: 'cat_platform', name: 'AI平台模型', slug: 'platform', description: 'AI平台、大模型服务', sortOrder: 10 },
  { id: 'cat_opensource', name: 'AI开源项目', slug: 'opensource', description: '开源AI项目、工具', sortOrder: 11 },
  { id: 'cat_learning', name: 'AI学习资源', slug: 'learning', description: 'AI学习教程、资源', sortOrder: 12 },
  { id: 'cat_gpts', name: 'GPTs应用', slug: 'gpts', description: 'GPTs应用、插件', sortOrder: 13 },
  { id: 'cat_prompts', name: 'AI提示指令', slug: 'prompts', description: 'AI提示词、指令库', sortOrder: 14 },
  { id: 'cat_companies', name: 'AI科技公司', slug: 'companies', description: 'AI科技公司、厂商', sortOrder: 15 },
  
  // 一级分类 - 资源素材
  { id: 'cat_ppt', name: 'PPT资源', slug: 'ppt', description: 'PPT模板、工具', sortOrder: 20 },
  { id: 'cat_images', name: '免商图片', slug: 'images', description: '免费商用图片资源', sortOrder: 21 },
  { id: 'cat_video', name: '视频素材', slug: 'video', description: '视频素材资源', sortOrder: 22 },
  { id: 'cat_music', name: '音乐素材', slug: 'music', description: '音乐、音效素材', sortOrder: 23 },
  { id: 'cat_fonts', name: '字体字库', slug: 'fonts', description: '免费字体资源', sortOrder: 24 },
  { id: 'cat_icons', name: 'Logo图标', slug: 'icons', description: '图标、Logo资源', sortOrder: 25 },
  
  // 一级分类 - 创作工具
  { id: 'cat_image_edit', name: '图片处理', slug: 'image-edit', description: '图片编辑处理工具', sortOrder: 30 },
  { id: 'cat_video_edit', name: '视频剪辑', slug: 'video-edit', description: '视频剪辑工具', sortOrder: 31 },
  { id: 'cat_mindmap', name: '思维导图', slug: 'mindmap', description: '思维导图、流程图工具', sortOrder: 32 },
  { id: 'cat_layout', name: '排版编辑', slug: 'layout', description: '排版、编辑工具', sortOrder: 33 },
  { id: 'cat_convert', name: '格式转换', slug: 'convert', description: '文件格式转换工具', sortOrder: 34 },
  
  // 一级分类 - 媒体运营
  { id: 'cat_monetization', name: '知识付费', slug: 'monetization', description: '知识付费平台', sortOrder: 40 },
  { id: 'cat_trending', name: '实时热榜', slug: 'trending', description: '热榜、趋势数据', sortOrder: 41 },
  { id: 'cat_platforms', name: '媒体平台', slug: 'platforms', description: '内容媒体平台', sortOrder: 42 },
  { id: 'cat_analytics', name: '数据分析', slug: 'analytics', description: '数据分析工具', sortOrder: 43 },
  
  // 一级分类 - 行业圈子
  { id: 'cat_service', name: 'AI服务商', slug: 'service', description: 'AI服务提供商', sortOrder: 50 },
  { id: 'cat_indie', name: '独立开发', slug: 'indie', description: '独立开发者工具', sortOrder: 51 },
  { id: 'cat_ecommerce', name: '电商运营', slug: 'ecommerce', description: '电商运营工具', sortOrder: 52 },
  { id: 'cat_finance', name: '财经投资', slug: 'finance', description: '财经投资工具', sortOrder: 53 },
  { id: 'cat_education', name: '教育学习', slug: 'education', description: '教育学习工具', sortOrder: 54 },
];

// ==================== 工具详情数据 ====================
export const toolsData: Record<string, ToolDetail> = {
  // AI写作对话
  'tool_kimi': {
    id: 'tool_kimi',
    name: 'Kimi人工智能',
    description: '超强AI写作助手，一键总结20w字长文',
    longDescription: `Kimi是由月之暗面(Moonshot AI)推出的智能助手，基于自研的大语言模型打造。

核心功能：
- 超长文本处理：支持20万字长文输入，轻松处理论文、报告
- 智能总结：一键总结长文要点，提取关键信息
- 多轮对话：支持深度对话，理解上下文
- 文件阅读：支持PDF、Word、Excel等文件上传分析
- 联网搜索：实时获取最新信息

适用场景：
- 学术论文阅读与写作
- 商业报告分析
- 法律文件审查
- 技术文档理解`,
    url: 'https://kimi.moonshot.cn',
    officialUrl: 'https://kimi.moonshot.cn',
    tags: ['AI写作', '长文本', '国产', '免费'],
    categoryIds: ['cat_ai_writing'],
    views: 125678,
    likes: 8934,
    history: [
      '2023年 - Kimi智能助手发布',
      '2024年 - 支持200万字长文本',
      '2024年 - 推出Kimi浏览器插件',
    ],
    features: ['20万字长文本', '文件上传', '联网搜索', '多轮对话'],
    relatedToolIds: ['tool_chatglm', 'tool_doubao', 'tool_wenxin'],
    createdAt: '2023-10-01',
    updatedAt: '2024-12-01',
  },
  
  'tool_chatglm': {
    id: 'tool_chatglm',
    name: '智谱清言',
    description: '中国版chatgpt，与GLM大模型进行对话',
    longDescription: `智谱清言是由北京智谱华章科技有限公司推出的生成式AI助手，基于ChatGLM大模型开发。

智谱清言的特点：
- 支持多轮对话，理解上下文
- 可以生成各种类型的文本内容
- 支持代码编写和解释
- 提供AI绘画功能
- 支持文档分析和总结

核心能力：
- 文本生成：文章、诗歌、故事、代码
- 知识问答：涵盖各领域知识
- 逻辑推理：数学、编程、分析
- 创意写作：营销文案、创意内容`,
    url: 'https://chatglm.cn',
    officialUrl: 'https://chatglm.cn',
    tags: ['国产大模型', 'ChatGPT', 'AI助手', '免费'],
    categoryIds: ['cat_ai_writing', 'cat_platform'],
    views: 89234,
    likes: 6543,
    history: [
      '2023年 - ChatGLM发布',
      '2023年 - 智谱清言上线',
      '2024年 - 发布GLM-4',
    ],
    relatedToolIds: ['tool_kimi', 'tool_doubao', 'tool_wenxin'],
    createdAt: '2023-06-01',
    updatedAt: '2024-11-01',
  },
  
  'tool_doubao': {
    id: 'tool_doubao',
    name: '豆包',
    description: '抖音AI出品，一站式解决困惑难题',
    longDescription: `豆包是字节跳动推出的AI助手，基于豆包大模型开发，集成多种AI能力。

主要功能：
- AI对话：智能问答、聊天交流
- AI写作：文案、文章、代码生成
- AI编程：代码辅助、Bug修复
- AI绘画：文生图、图生图
- AI搜索：智能信息检索

特色亮点：
- 与抖音生态深度整合
- 支持多种使用场景
- 免费使用基础功能
- 跨平台支持`,
    url: 'https://www.doubao.com',
    officialUrl: 'https://www.doubao.com',
    tags: ['字节跳动', 'AI助手', '国产', '免费'],
    categoryIds: ['cat_ai_writing', 'cat_platform'],
    views: 156789,
    likes: 11234,
    history: [
      '2023年 - 豆包大模型发布',
      '2024年 - 豆包AI助手上线',
      '2024年 - 推出豆包编程助手',
    ],
    relatedToolIds: ['tool_kimi', 'tool_chatglm', 'tool_wenxin'],
    createdAt: '2023-08-01',
    updatedAt: '2024-12-01',
  },
  
  'tool_wenxin': {
    id: 'tool_wenxin',
    name: '文心一言',
    description: '文心大模型3.5免费用',
    longDescription: `文心一言是百度推出的知识增强大语言模型，基于文心大模型技术。

核心能力：
- 知识问答：涵盖百科、专业领域
- 文本创作：文章、诗歌、文案
- 逻辑推理：数学计算、逻辑分析
- 中文理解：深度理解中文语境

特色功能：
- 文心智能体：自定义AI助手
- 插件生态：丰富的功能扩展
- 多模态：支持图文理解
- 企业版：面向B端的专业服务`,
    url: 'https://yiyan.baidu.com',
    officialUrl: 'https://yiyan.baidu.com',
    tags: ['百度', '国产大模型', 'AI助手', '免费'],
    categoryIds: ['cat_ai_writing', 'cat_platform'],
    views: 234567,
    likes: 15678,
    history: [
      '2023年 - 文心一言发布',
      '2024年 - 文心4.0发布',
      '2024年 - 文心智能体平台上线',
    ],
    relatedToolIds: ['tool_kimi', 'tool_chatglm', 'tool_doubao'],
    createdAt: '2023-03-01',
    updatedAt: '2024-12-01',
  },
  
  // AI绘画
  'tool_liblib': {
    id: 'tool_liblib',
    name: 'LiblibAI',
    description: '国内领先的AI创意平台，海量模型免费下载',
    longDescription: `LiblibAI是国内领先的AI创意平台，以海量模型、低门槛操作与"创作-分享-商业化"生态著称。

平台特色：
- 10万+模型：海量AI绘画模型免费下载
- 在线生图：无需安装，浏览器直接使用
- 模型训练：支持自定义模型训练
- 创作者社区：与原创作者交流

功能亮点：
- 文生图：输入文字生成图片
- 图生图：基于参考图创作
- ControlNet：精准控制生成
- 高清放大：提升图片质量`,
    url: 'https://www.liblib.art',
    officialUrl: 'https://www.liblib.art',
    tags: ['AI绘画', '模型社区', '国产', '免费'],
    categoryIds: ['cat_ai_painting', 'cat_image_edit'],
    views: 98765,
    likes: 8765,
    history: [
      '2023年 - LiblibAI平台上线',
      '2024年 - 模型数量突破10万',
      '2024年 - 推出在线生图功能',
    ],
    relatedToolIds: ['tool_tongyi_wanxiang', 'tool_miaohua', 'tool_dreamina'],
    createdAt: '2023-05-01',
    updatedAt: '2024-11-01',
  },
  
  'tool_tongyi_wanxiang': {
    id: 'tool_tongyi_wanxiang',
    name: '通义万相',
    description: '阿里出品的AI绘画创作模型',
    longDescription: `通义万相是阿里云推出的AI绘画创作模型，基于通义大模型技术。

核心功能：
- 文生图：文字描述生成图片
- 虚拟模特：生成虚拟人物
- 涂鸦作画：手绘转精美图片
- 写真馆：生成专业写真
- 艺术字：创意文字生成

技术优势：
- 中文理解能力强
- 多种风格支持
- 高质量输出
- 与阿里云生态整合`,
    url: 'https://tongyi.aliyun.com/wanxiang',
    officialUrl: 'https://tongyi.aliyun.com/wanxiang',
    tags: ['阿里', 'AI绘画', '国产', '免费'],
    categoryIds: ['cat_ai_painting'],
    views: 76543,
    likes: 5432,
    history: [
      '2023年 - 通义万相发布',
      '2024年 - 功能持续升级',
    ],
    relatedToolIds: ['tool_liblib', 'tool_miaohua', 'tool_dreamina'],
    createdAt: '2023-07-01',
    updatedAt: '2024-10-01',
  },
  
  // AI视频
  'tool_jimeng': {
    id: 'tool_jimeng',
    name: '即梦AI',
    description: '剪映旗下文生图、文生视频应用',
    longDescription: `即梦AI是剪映旗下的人工智能创作平台，支持文生图、文生视频等功能。

主要功能：
- 文生图：输入文字生成图片
- 图生图：图片风格转换
- 文生视频：文字生成视频
- 视频编辑：AI辅助视频剪辑

特色亮点：
- 与剪映深度整合
- 抖音风格模板
- 简单易用
- 高质量输出`,
    url: 'https://jimeng.jianying.com',
    officialUrl: 'https://jimeng.jianying.com',
    tags: ['字节跳动', 'AI视频', '文生视频', '国产'],
    categoryIds: ['cat_ai_video', 'cat_video_edit'],
    views: 145678,
    likes: 12345,
    history: [
      '2023年 - Dreamina发布',
      '2024年 - 即梦AI品牌升级',
      '2024年 - 推出文生视频功能',
    ],
    relatedToolIds: ['tool_keling', 'tool_zhiying', 'tool_sora'],
    createdAt: '2023-09-01',
    updatedAt: '2024-12-01',
  },
  
  'tool_keling': {
    id: 'tool_keling',
    name: '可灵大模型',
    description: '快手自研视频生成大模型',
    longDescription: `可灵大模型是快手自研的视频生成大模型，提供文生视频、图生视频等功能。

核心能力：
- 文生视频：文字描述生成视频
- 图生视频：图片生成动态视频
- 视频续写：延续视频内容
- 视频编辑：AI辅助编辑

技术特点：
- 高质量视频生成
- 流畅的动态效果
- 多种风格支持
- 长视频生成能力`,
    url: 'https://kling.kuaishou.com',
    officialUrl: 'https://kling.kuaishou.com',
    tags: ['快手', 'AI视频', '国产', '大模型'],
    categoryIds: ['cat_ai_video'],
    views: 87654,
    likes: 7654,
    history: [
      '2024年 - 可灵大模型发布',
      '2024年 - 功能持续升级',
    ],
    relatedToolIds: ['tool_jimeng', 'tool_zhiying', 'tool_sora'],
    createdAt: '2024-06-01',
    updatedAt: '2024-12-01',
  },
  
  // 大模型平台
  'tool_openai': {
    id: 'tool_openai',
    name: 'OpenAI',
    description: 'OpenAI官网，ChatGPT、GPT-4、DALL·E开发商',
    longDescription: `OpenAI是美国的人工智能研究公司，核心宗旨在于"实现安全的通用人工智能(AGI)"。

主要产品：
- ChatGPT：智能对话机器人
- GPT-4：大型语言模型
- DALL·E 2/3：AI图像生成
- Whisper：语音识别模型
- Codex：代码生成模型

发展历程：
- 2015年 - OpenAI成立
- 2022年 - ChatGPT发布
- 2023年 - GPT-4发布
- 2024年 - Sora视频模型发布`,
    url: 'https://openai.com',
    officialUrl: 'https://openai.com',
    tags: ['OpenAI', 'ChatGPT', 'GPT-4', '国际'],
    categoryIds: ['cat_platform', 'cat_companies'],
    views: 345678,
    likes: 28765,
    history: [
      '2015年12月 - OpenAI成立',
      '2022年11月 - ChatGPT发布',
      '2023年3月 - GPT-4发布',
      '2024年2月 - Sora视频模型发布',
    ],
    relatedToolIds: ['tool_chatgpt', 'tool_claude', 'tool_gemini'],
    createdAt: '2015-12-01',
    updatedAt: '2024-12-01',
  },
  
  'tool_deepseek': {
    id: 'tool_deepseek',
    name: 'DeepSeek',
    description: '当红国产开源大模型，性能卓越',
    longDescription: `DeepSeek是由深度求索公司开发的大型语言模型，以其卓越的性能和开源特性在国内外AI社区引起广泛关注。

DeepSeek的特点：
- 开源可商用
- 性能媲美GPT-4
- 支持长文本理解
- 中文表现优秀
- 提供API服务

模型系列：
- DeepSeek-V2：通用大模型
- DeepSeek-R1：推理模型
- DeepSeek-Coder：代码模型`,
    url: 'https://www.deepseek.com',
    officialUrl: 'https://www.deepseek.com',
    tags: ['国产', '开源', '大模型', '免费'],
    categoryIds: ['cat_platform', 'cat_opensource'],
    views: 234567,
    likes: 19876,
    history: [
      '2023年 - DeepSeek发布',
      '2024年 - DeepSeek-V2发布',
      '2024年 - DeepSeek-R1发布',
    ],
    relatedToolIds: ['tool_chatglm', 'tool_doubao', 'tool_wenxin'],
    createdAt: '2023-07-01',
    updatedAt: '2024-12-01',
  },
  
  // PPT工具
  'tool_aippt': {
    id: 'tool_aippt',
    name: 'AiPPT',
    description: '做PPT就用AiPPT，一键生成高质量PPT',
    longDescription: `AiPPT是一款基于AI的PPT生成工具，可以快速创建专业的演示文稿。

核心功能：
- 一键生成：输入主题自动生成PPT
- 智能排版：自动优化页面布局
- 海量模板：丰富的模板选择
- 在线编辑：浏览器直接编辑

适用场景：
- 工作汇报
- 学术答辩
- 产品发布
- 培训课件`,
    url: 'https://www.aippt.cn',
    officialUrl: 'https://www.aippt.cn',
    tags: ['AI办公', 'PPT', '国产', '免费试用'],
    categoryIds: ['cat_ppt', 'cat_ai_office'],
    views: 65432,
    likes: 5432,
    history: [
      '2023年 - AiPPT上线',
      '2024年 - 功能持续升级',
    ],
    relatedToolIds: ['tool_biling_ppt', 'tool_chatppt', 'tool_gamma'],
    createdAt: '2023-04-01',
    updatedAt: '2024-11-01',
  },
  
  // 图片处理
  'tool_removebg': {
    id: 'tool_removebg',
    name: 'Remove.bg',
    description: 'AI智能抠图，一键移除背景',
    longDescription: `Remove.bg是一款AI智能抠图工具，可以快速移除图片背景。

核心功能：
- 一键抠图：自动识别主体
- 批量处理：支持多张图片
- 高清输出：保持图片质量
- API接口：支持集成

使用场景：
- 电商产品图
- 证件照处理
- 设计素材准备
- 社交媒体图片`,
    url: 'https://www.remove.bg',
    officialUrl: 'https://www.remove.bg',
    tags: ['AI图片', '抠图', '免费', '国际'],
    categoryIds: ['cat_image_edit', 'cat_ai_image'],
    views: 187654,
    likes: 15678,
    history: [
      '2018年 - Remove.bg上线',
      '2023年 - 功能持续升级',
    ],
    relatedToolIds: ['tool_photokit', 'tool_meitu_cutout', 'tool_koutu'],
    createdAt: '2018-01-01',
    updatedAt: '2024-10-01',
  },
  
  // 编程工具
  'tool_trae': {
    id: 'tool_trae',
    name: 'Trae',
    description: '字节跳动推出的免费AI编程工具',
    longDescription: `Trae是字节跳动推出的AI编程工具，基于豆包大模型开发。

核心功能：
- 代码补全：智能代码提示
- 代码解释：理解代码含义
- Bug修复：自动检测修复
- 代码生成：根据描述生成代码
- 单元测试：自动生成测试

支持语言：
- Python、JavaScript、Java
- Go、Rust、C++
- 更多语言持续添加

特色亮点：
- 免费使用
- 国产大模型
- 中文支持好
- 与IDE深度整合`,
    url: 'https://www.trae.cn',
    officialUrl: 'https://www.trae.cn',
    tags: ['字节跳动', 'AI编程', '国产', '免费'],
    categoryIds: ['cat_ai_code'],
    views: 98765,
    likes: 8765,
    history: [
      '2024年 - Trae发布',
      '2024年 - 功能持续升级',
    ],
    relatedToolIds: ['tool_cursor', 'tool_github_copilot', 'tool_codegeex'],
    createdAt: '2024-01-01',
    updatedAt: '2024-12-01',
  },
  
  'tool_cursor': {
    id: 'tool_cursor',
    name: 'Cursor',
    description: 'AI编程和软件开发神器',
    longDescription: `Cursor是基于VS Code开发的AI编程编辑器，集成了强大的AI编程能力。

核心功能：
- AI代码补全：智能代码提示
- 自然语言编程：用自然语言描述生成代码
- 代码解释：理解复杂代码
- 代码重构：智能重构建议
- 错误修复：自动检测修复Bug

AI模型支持：
- GPT-4
- Claude
- 自定义模型

特色亮点：
- 基于VS Code，熟悉的界面
- 强大的AI能力
- 支持多种编程语言
- 活跃的社区`,
    url: 'https://cursor.sh',
    officialUrl: 'https://cursor.sh',
    tags: ['AI编程', 'IDE', '国际', '付费'],
    categoryIds: ['cat_ai_code'],
    views: 145678,
    likes: 12345,
    history: [
      '2023年 - Cursor发布',
      '2024年 - 功能持续升级',
    ],
    relatedToolIds: ['tool_trae', 'tool_github_copilot', 'tool_windsurf'],
    createdAt: '2023-03-01',
    updatedAt: '2024-12-01',
  },
  
  // 更多工具...
  'tool_chatgpt': {
    id: 'tool_chatgpt',
    name: 'ChatGPT',
    description: 'OpenAI发布的聊天机器人',
    longDescription: `ChatGPT是OpenAI开发的对话式AI模型，基于GPT架构训练。

核心能力：
- 自然对话：流畅的多轮对话
- 文本生成：文章、故事、代码
- 知识问答：广泛的知识覆盖
- 逻辑推理：数学、编程、分析

版本：
- GPT-3.5：免费版
- GPT-4：付费版，更强能力
- GPT-4o：多模态版本`,
    url: 'https://chat.openai.com',
    officialUrl: 'https://chat.openai.com',
    tags: ['OpenAI', 'ChatGPT', '对话', '国际'],
    categoryIds: ['cat_ai_writing', 'cat_platform'],
    views: 567890,
    likes: 45678,
    history: [
      '2022年11月 - ChatGPT发布',
      '2023年 - GPT-4发布',
      '2024年 - GPT-4o发布',
    ],
    relatedToolIds: ['tool_openai', 'tool_claude', 'tool_gemini'],
    createdAt: '2022-11-01',
    updatedAt: '2024-12-01',
  },
  
  'tool_claude': {
    id: 'tool_claude',
    name: 'Claude',
    description: 'Anthropic开发的AI助手',
    longDescription: `Claude是Anthropic公司开发的AI助手，以安全性和可靠性著称。

核心特点：
- 长上下文：支持超长文本
- 安全性高：减少有害输出
- 推理能力强：逻辑清晰
- 多模态：支持图片理解

版本：
- Claude 3 Haiku：快速版
- Claude 3 Sonnet：平衡版
- Claude 3 Opus：最强版`,
    url: 'https://claude.ai',
    officialUrl: 'https://claude.ai',
    tags: ['Anthropic', 'AI助手', '国际', '付费'],
    categoryIds: ['cat_ai_writing', 'cat_platform'],
    views: 234567,
    likes: 19876,
    history: [
      '2023年 - Claude发布',
      '2024年 - Claude 3发布',
    ],
    relatedToolIds: ['tool_chatgpt', 'tool_gemini', 'tool_openai'],
    createdAt: '2023-03-01',
    updatedAt: '2024-11-01',
  },
  
  'tool_gemini': {
    id: 'tool_gemini',
    name: 'Gemini',
    description: 'Google开发的AI大模型',
    longDescription: `Gemini是Google DeepMind开发的AI大模型，支持多模态理解。

核心能力：
- 文本理解：强大的语言理解
- 图像理解：看懂图片内容
- 视频理解：分析视频
- 代码生成：编程辅助

版本：
- Gemini Nano：设备端
- Gemini Pro：标准版
- Gemini Ultra：最强版`,
    url: 'https://gemini.google.com',
    officialUrl: 'https://gemini.google.com',
    tags: ['Google', 'AI助手', '多模态', '国际'],
    categoryIds: ['cat_ai_writing', 'cat_platform'],
    views: 345678,
    likes: 28765,
    history: [
      '2023年 - Gemini发布',
      '2024年 - Gemini 1.5发布',
    ],
    relatedToolIds: ['tool_chatgpt', 'tool_claude', 'tool_openai'],
    createdAt: '2023-12-01',
    updatedAt: '2024-12-01',
  },
  
  'tool_dreamina': {
    id: 'tool_dreamina',
    name: 'Dreamina',
    description: '剪映AI创作产品，文字绘图、扩图',
    longDescription: `Dreamina是剪映推出的AI创作产品，支持文生图、图生图等功能。

核心功能：
- 文字绘图：输入文字生成图片
- 图片扩图：扩展图片边界
- 局部重绘：修改图片局部
- 图片灵感：获取创作灵感

特色：
- 与剪映生态整合
- 抖音风格模板
- 简单易用`,
    url: 'https://dreamina.jianying.com',
    officialUrl: 'https://dreamina.jianying.com',
    tags: ['字节跳动', 'AI绘画', '国产', '免费'],
    categoryIds: ['cat_ai_painting'],
    views: 76543,
    likes: 6543,
    history: [
      '2023年 - Dreamina发布',
      '2024年 - 功能升级',
    ],
    relatedToolIds: ['tool_liblib', 'tool_tongyi_wanxiang', 'tool_jimeng'],
    createdAt: '2023-08-01',
    updatedAt: '2024-10-01',
  },
  
  'tool_miaohua': {
    id: 'tool_miaohua',
    name: '秒画',
    description: '商汤科技AI绘画创作平台',
    longDescription: `秒画是商汤科技推出的AI绘画创作平台，基于70亿参数Artist作画大模型。

功能特点：
- 文生图：文字生成图片
- 图生图：图片风格转换
- 精准控制：ControlNet支持
- 风格模型：多种风格选择

优势：
- 商汤技术背书
- 中文理解好
- 生成速度快`,
    url: 'https://miaohua.sensetime.com',
    officialUrl: 'https://miaohua.sensetime.com',
    tags: ['商汤', 'AI绘画', '国产', '免费'],
    categoryIds: ['cat_ai_painting'],
    views: 54321,
    likes: 4321,
    history: [
      '2023年 - 秒画发布',
      '2024年 - 功能升级',
    ],
    relatedToolIds: ['tool_liblib', 'tool_tongyi_wanxiang', 'tool_dreamina'],
    createdAt: '2023-09-01',
    updatedAt: '2024-09-01',
  },
  
  'tool_sora': {
    id: 'tool_sora',
    name: 'Sora',
    description: 'OpenAI文字生成视频模型',
    longDescription: `Sora是OpenAI开发的文字生成视频模型，可以生成长达60秒的高质量视频。

核心能力：
- 文生视频：文字描述生成视频
- 长视频：最长60秒
- 高质量：细节丰富、连贯
- 复杂场景：多角色、复杂动作

技术特点：
- 世界模型理解
- 物理规律模拟
- 时空一致性`,
    url: 'https://openai.com/sora',
    officialUrl: 'https://openai.com/sora',
    tags: ['OpenAI', 'AI视频', '文生视频', '国际'],
    categoryIds: ['cat_ai_video'],
    views: 456789,
    likes: 38765,
    history: [
      '2024年2月 - Sora发布',
    ],
    relatedToolIds: ['tool_jimeng', 'tool_keling', 'tool_runway'],
    createdAt: '2024-02-01',
    updatedAt: '2024-12-01',
  },
  
  'tool_runway': {
    id: 'tool_runway',
    name: 'Runway',
    description: 'AI视频生成神器',
    longDescription: `Runway是领先的AI视频生成平台，提供多种AI创意工具。

核心功能：
- Gen-2：文字/图片生成视频
- 视频编辑：AI辅助编辑
- 绿幕抠像：AI抠像
- 图像生成：文生图

特色：
- 专业级输出
- 多种创意工具
- 活跃的创作社区`,
    url: 'https://runwayml.com',
    officialUrl: 'https://runwayml.com',
    tags: ['AI视频', '视频编辑', '国际', '付费'],
    categoryIds: ['cat_ai_video', 'cat_video_edit'],
    views: 123456,
    likes: 10876,
    history: [
      '2018年 - Runway成立',
      '2023年 - Gen-2发布',
      '2024年 - Gen-3发布',
    ],
    relatedToolIds: ['tool_sora', 'tool_jimeng', 'tool_keling'],
    createdAt: '2018-01-01',
    updatedAt: '2024-11-01',
  },
  
  'tool_zhiying': {
    id: 'tool_zhiying',
    name: '智谱清影',
    description: '智谱AI视频生成工具',
    longDescription: `智谱清影是智谱AI推出的视频生成工具，支持文生视频和图生视频。

功能特点：
- 快速生成：30秒生成6秒视频
- 文生视频：文字描述生成视频
- 图生视频：图片生成动态视频
- 国产技术：自主大模型

适用场景：
- 短视频创作
- 广告制作
- 内容营销`,
    url: 'https://chatglm.cn/video',
    officialUrl: 'https://chatglm.cn/video',
    tags: ['智谱AI', 'AI视频', '国产', '免费'],
    categoryIds: ['cat_ai_video'],
    views: 45678,
    likes: 3456,
    history: [
      '2024年 - 智谱清影发布',
    ],
    relatedToolIds: ['tool_jimeng', 'tool_keling', 'tool_sora'],
    createdAt: '2024-07-01',
    updatedAt: '2024-12-01',
  },
  
  'tool_github_copilot': {
    id: 'tool_github_copilot',
    name: 'GitHub Copilot',
    description: 'GitHub和OpenAI联合开发的AI编程助手',
    longDescription: `GitHub Copilot是基于OpenAI Codex模型的AI编程助手。

核心功能：
- 代码补全：整行、整块代码补全
- 函数生成：根据注释生成函数
- 测试生成：自动生成单元测试
- 多语言支持：支持数十种编程语言

集成环境：
- VS Code
- JetBrains IDE
- Visual Studio
- Neovim`,
    url: 'https://github.com/features/copilot',
    officialUrl: 'https://github.com/features/copilot',
    tags: ['GitHub', 'OpenAI', 'AI编程', '付费'],
    categoryIds: ['cat_ai_code'],
    views: 234567,
    likes: 19876,
    history: [
      '2021年 - Copilot发布',
      '2022年 - 正式上线',
      '2024年 - 持续升级',
    ],
    relatedToolIds: ['tool_cursor', 'tool_trae', 'tool_codegeex'],
    createdAt: '2021-06-01',
    updatedAt: '2024-12-01',
  },
  
  'tool_codegeex': {
    id: 'tool_codegeex',
    name: 'CodeGeeX',
    description: '开源的国产AI编程助手，清华出品',
    longDescription: `CodeGeeX是清华大学知识工程实验室开源的AI编程助手。

核心功能：
- 代码生成：根据描述生成代码
- 代码翻译：跨语言代码转换
- 代码注释：自动生成注释
- 代码解释：理解代码含义

特点：
- 完全开源
- 国产技术
- 中文支持好
- 免费使用`,
    url: 'https://codegeex.cn',
    officialUrl: 'https://codegeex.cn',
    tags: ['清华', '开源', 'AI编程', '国产', '免费'],
    categoryIds: ['cat_ai_code', 'cat_opensource'],
    views: 87654,
    likes: 7654,
    history: [
      '2022年 - CodeGeeX发布',
      '2023年 - CodeGeeX2发布',
      '2024年 - 持续升级',
    ],
    relatedToolIds: ['tool_trae', 'tool_github_copilot', 'tool_cursor'],
    createdAt: '2022-09-01',
    updatedAt: '2024-11-01',
  },
  
  'tool_windsurf': {
    id: 'tool_windsurf',
    name: 'Windsurf',
    description: 'Codeium推出的AI编程工具',
    longDescription: `Windsurf是Codeium公司推出的AI编程工具，具备实时协作功能。

核心特点：
- Flow协作：AI与开发者实时协作
- 上下文感知：深度理解代码库
- 多系统支持：支持各种操作系统
- 智能体能力：自主执行开发任务

技术优势：
- 先进的AI模型
- 实时响应
- 深度代码理解`,
    url: 'https://codeium.com/windsurf',
    officialUrl: 'https://codeium.com/windsurf',
    tags: ['Codeium', 'AI编程', '国际', '免费试用'],
    categoryIds: ['cat_ai_code'],
    views: 67890,
    likes: 5678,
    history: [
      '2024年 - Windsurf发布',
    ],
    relatedToolIds: ['tool_cursor', 'tool_trae', 'tool_github_copilot'],
    createdAt: '2024-03-01',
    updatedAt: '2024-12-01',
  },
  
  'tool_biling_ppt': {
    id: 'tool_biling_ppt',
    name: '笔灵AIPPT',
    description: '1分钟速成精美PPT',
    longDescription: `笔灵AIPPT是一款快速生成PPT的AI工具。

核心功能：
- 一键生成：输入主题生成PPT
- 智能排版：自动美化
- 模板丰富：多种风格
- 在线编辑：随时修改

适用场景：
- 工作汇报
- 学术答辩
- 商业演示`,
    url: 'https://ibiling.cn/ppt-zone',
    officialUrl: 'https://ibiling.cn/ppt-zone',
    tags: ['AI办公', 'PPT', '国产', '免费试用'],
    categoryIds: ['cat_ppt', 'cat_ai_office'],
    views: 45678,
    likes: 3456,
    history: [
      '2023年 - 笔灵AIPPT发布',
    ],
    relatedToolIds: ['tool_aippt', 'tool_chatppt', 'tool_gamma'],
    createdAt: '2023-08-01',
    updatedAt: '2024-10-01',
  },
  
  'tool_chatppt': {
    id: 'tool_chatppt',
    name: 'ChatPPT',
    description: '对话式PPT生成工具',
    longDescription: `ChatPPT是通过对话生成PPT的AI工具。

特点：
- 对话交互：自然语言指令
- 实时预览：即时查看效果
- 智能建议：AI优化建议
- 一键导出：多种格式`,
    url: 'https://chatppt.yoo-ai.com',
    officialUrl: 'https://chatppt.yoo-ai.com',
    tags: ['AI办公', 'PPT', '国产', '免费试用'],
    categoryIds: ['cat_ppt', 'cat_ai_office'],
    views: 34567,
    likes: 2345,
    history: [
      '2023年 - ChatPPT发布',
    ],
    relatedToolIds: ['tool_aippt', 'tool_biling_ppt', 'tool_gamma'],
    createdAt: '2023-09-01',
    updatedAt: '2024-09-01',
  },
  
  'tool_gamma': {
    id: 'tool_gamma',
    name: 'Gamma',
    description: '快速创建引人入胜的演示文稿',
    longDescription: `Gamma是一款AI驱动的演示文稿创作工具。

核心功能：
- AI生成：一键生成完整演示
- 智能布局：自动排版
- 交互元素：支持互动内容
- 实时协作：团队协作编辑

特色：
- 现代化的设计
- 流畅的动画
- 网页分享`,
    url: 'https://gamma.app',
    officialUrl: 'https://gamma.app',
    tags: ['AI办公', 'PPT', '国际', '免费试用'],
    categoryIds: ['cat_ppt', 'cat_ai_office'],
    views: 98765,
    likes: 8765,
    history: [
      '2022年 - Gamma发布',
      '2024年 - 功能升级',
    ],
    relatedToolIds: ['tool_aippt', 'tool_biling_ppt', 'tool_chatppt'],
    createdAt: '2022-01-01',
    updatedAt: '2024-11-01',
  },
  
  'tool_photokit': {
    id: 'tool_photokit',
    name: 'PhotoKit',
    description: '基于AI的在线图片编辑器',
    longDescription: `PhotoKit是一款AI驱动的在线图片编辑工具。

核心功能：
- AI抠图：一键移除背景
- 智能修复：去除瑕疵
- 色彩调整：AI优化色彩
- 滤镜效果：多种风格

特点：
- 在线使用，无需安装
- 免费基础功能
- 支持批量处理`,
    url: 'https://photokit.com',
    officialUrl: 'https://photokit.com',
    tags: ['AI图片', '图片编辑', '免费', '在线'],
    categoryIds: ['cat_image_edit', 'cat_ai_image'],
    views: 123456,
    likes: 10876,
    history: [
      '2020年 - PhotoKit上线',
      '2023年 - AI功能升级',
    ],
    relatedToolIds: ['tool_removebg', 'tool_meitu_cutout', 'tool_koutu'],
    createdAt: '2020-01-01',
    updatedAt: '2024-10-01',
  },
  
  'tool_meitu_cutout': {
    id: 'tool_meitu_cutout',
    name: '美图抠图',
    description: '美图秀秀AI智能抠图工具',
    longDescription: `美图抠图是美图秀秀推出的AI智能抠图工具。

功能特点：
- 一键抠图：自动识别主体
- 发丝级精度：精细边缘处理
- 批量处理：支持多张图片
- 背景替换：一键换背景

使用场景：
- 证件照制作
- 电商产品图
- 设计素材`,
    url: 'https://cutout.meitu.com',
    officialUrl: 'https://cutout.meitu.com',
    tags: ['美图', 'AI图片', '抠图', '国产', '免费'],
    categoryIds: ['cat_image_edit', 'cat_ai_image'],
    views: 156789,
    likes: 13567,
    history: [
      '2021年 - 美图抠图上线',
      '2024年 - 功能升级',
    ],
    relatedToolIds: ['tool_removebg', 'tool_photokit', 'tool_koutu'],
    createdAt: '2021-01-01',
    updatedAt: '2024-11-01',
  },
  
  'tool_koutu': {
    id: 'tool_koutu',
    name: '抠抠图',
    description: '免费在线批量抠图',
    longDescription: `抠抠图是一款免费在线AI抠图工具。

核心功能：
- 免费抠图：基础功能免费
- 批量处理：支持多张
- 在线使用：无需安装
- 高清输出：保持质量

特点：
- 完全免费
- 简单易用
- 快速处理`,
    url: 'https://www.koukoutu.com',
    officialUrl: 'https://www.koukoutu.com',
    tags: ['AI图片', '抠图', '免费', '国产'],
    categoryIds: ['cat_image_edit', 'cat_ai_image'],
    views: 87654,
    likes: 7654,
    history: [
      '2022年 - 抠抠图上线',
    ],
    relatedToolIds: ['tool_removebg', 'tool_photokit', 'tool_meitu_cutout'],
    createdAt: '2022-01-01',
    updatedAt: '2024-09-01',
  },
};

// ==================== 搜索标签配置 ====================
export const searchTags: SearchTag[] = [
  { id: 'internal', label: '站内', type: 'internal' },
  { id: 'ai_search', label: 'AI搜索', type: 'search' },
  { id: 'baidu', label: '百度', type: 'external', url: 'https://www.baidu.com/s?wd=' },
  { id: 'company', label: '查企业', type: 'external', url: 'https://www.tianyancha.com/search?key=' },
  { id: 'school', label: '查学校', type: 'external', url: 'https://www.baidu.com/s?wd=' },
  { id: 'express', label: '查快递', type: 'external', url: 'https://www.kuaidi100.com/?nu=' },
  { id: 'translate', label: '翻译', type: 'external', url: 'https://translate.google.com/?sl=auto&tl=zh-CN&text=' },
  { id: 'stock', label: '股票', type: 'external', url: 'https://quote.eastmoney.com/concept/search?keyword=' },
  { id: 'movie', label: '电影', type: 'external', url: 'https://movie.douban.com/subject_search?search_text=' },
];

// ==================== 快捷链接配置 ====================
export const quickLinks = [
  { label: 'ChatGPT', url: 'https://chat.openai.com' },
  { label: '论文写作神器', url: '/tools' },
  { label: '国产大模型', url: '/favorites/cat_platform' },
  { label: '在线工具', url: '/tools' },
  { label: '证件照', url: '/favorites/cat_image_edit' },
  { label: '二维码工具', url: '/favorites/4773' },
  { label: 'PDF工具', url: '/favorites/4971' },
  { label: '视频处理', url: '/favorites/4986' },
  { label: 'VIP视频', url: '#' },
];

// ==================== 热点新闻配置 ====================
export const hotNews = [
  { id: 1, title: '秘塔AI放大招！「边想边搜边做」，内置20+智能体，想法一键实现', url: '#' },
  { id: 2, title: '腾讯元宝，想要再造一个"微信"', url: '#' },
  { id: 3, title: '2025年钉钉甩出"王炸"！AI表格助理上线：一句话生成表格', url: '#' },
  { id: 4, title: 'Tunee – 国内首个对话式音乐创作 Agent，刚上线就好评如潮！', url: '#' },
  { id: 5, title: '最近，腾讯把智能体平台开源了！', url: '#' },
  { id: 6, title: '独家！小红书上线AI办公APP"hi"', url: '#' },
  { id: 7, title: '腾讯CodeBuddy，国内无限畅用最新大模型GPT5/Gemini 2.5 Pro', url: '#' },
  { id: 8, title: 'AI 浏览器大战开打：Gemini 一出手，DIA、Claude 都不香了？', url: '#' },
  { id: 9, title: '美团提出统一多模态模型OneCAT，一键搞定视觉问答/图像编辑', url: '#' },
  { id: 10, title: '即梦图片4.0上线4K直出，这就是AI人像的新巅峰', url: '#' },
  { id: 11, title: '建议收藏！Google+即梦+豆包三大官方AI绘图提示词手册', url: '#' },
  { id: 12, title: '阿里王牌Agent横扫SOTA，全栈开源力压OpenAI', url: '#' },
  { id: 13, title: 'Gemini 调整限速，公益站倒了一片', url: '#' },
  { id: 14, title: 'GPT-5和Gemini谁更强？——一个在读博士科研日常视角的分析', url: '#' },
  { id: 15, title: 'Bilibili发布IndexTTS2语音模型：情感与时长可控的语音合成', url: '#' },
];

// ==================== 辅助函数 ====================

// 获取分类下的所有工具
export function getToolsByCategory(categoryId: string): ToolDetail[] {
  return Object.values(toolsData).filter(tool => 
    tool.categoryIds.includes(categoryId)
  );
}

// 获取相关工具
export function getRelatedTools(toolId: string): ToolDetail[] {
  const tool = toolsData[toolId];
  if (!tool) return [];
  return tool.relatedToolIds
    .map(id => toolsData[id])
    .filter(Boolean);
}

// 搜索工具
export function searchTools(keyword: string): ToolDetail[] {
  const lowerKeyword = keyword.toLowerCase();
  return Object.values(toolsData).filter(tool =>
    tool.name.toLowerCase().includes(lowerKeyword) ||
    tool.description.toLowerCase().includes(lowerKeyword) ||
    tool.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))
  );
}

// 获取热门工具（按浏览量排序）
export function getHotTools(limit: number = 10): ToolDetail[] {
  return Object.values(toolsData)
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

// 获取最新工具（按创建时间排序）
export function getLatestTools(limit: number = 10): ToolDetail[] {
  return Object.values(toolsData)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
}

// 获取工具总数
export function getTotalToolsCount(): number {
  return Object.keys(toolsData).length;
}

// 获取分类总数
export function getTotalCategoriesCount(): number {
  return categories.length;
}
