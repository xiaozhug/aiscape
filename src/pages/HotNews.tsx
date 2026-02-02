import { useState } from 'react';
import { Flame, TrendingUp, MessageCircle, Code, Newspaper } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';

interface NewsItem {
  id: number;
  title: string;
  url: string;
  heat?: string;
}

const aigcNews: NewsItem[] = [
  { id: 1, title: '秘塔AI放大招！「边想边搜边做」，内置20+智能体，想法一键实现', url: '#' },
  { id: 2, title: '腾讯元宝，想要再造一个"微信"', url: '#' },
  { id: 3, title: '2025年9月23日钉钉甩出"王炸"！AI表格助理上线：一句话生成表格，企业效率狂飙', url: '#' },
  { id: 4, title: 'Tunee – 国内首个对话式音乐创作 Agent，刚上线就好评如潮！', url: '#' },
  { id: 5, title: '最近，腾讯把智能体平台开源了！', url: '#' },
  { id: 6, title: '独家！小红书上线AI办公APP"hi"', url: '#' },
  { id: 7, title: '腾讯CodeBuddy，国内无限畅用最新大模型GPT5/Gemini 2.5 Pro/Claude Code', url: '#' },
  { id: 8, title: 'AI 浏览器大战开打：Gemini 一出手，DIA、Claude 都不香了？', url: '#' },
  { id: 9, title: '美团提出统一多模态模型OneCAT，一键搞定视觉问答/图像编辑/文生图任务，性能表现SOTA。', url: '#' },
  { id: 10, title: '即梦图片4.0上线4K直出，这就是AI人像的新巅峰。', url: '#' },
  { id: 11, title: '建议收藏！Google+即梦+豆包三大官方AI绘图提示词手册，终于有人整理全了！', url: '#' },
  { id: 12, title: '阿里王牌Agent横扫SOTA，全栈开源力压OpenAI！博士级难题一键搞定', url: '#' },
  { id: 13, title: 'Gemini 调整限速，公益站倒了一片', url: '#' },
  { id: 14, title: 'GPT-5和Gemini谁更强？——一个在读博士科研日常视角的分析', url: '#' },
  { id: 15, title: 'Bilibili发布IndexTTS2语音模型：情感与时长可控的语音合成技术突破！', url: '#' },
];

const tech36News: NewsItem[] = [
  { id: 1, title: '县城贵妇的「美丽刑具」，终于被抛弃了', heat: '361.21热度', url: '#' },
  { id: 2, title: '张一鸣该跟豆包算账了', heat: '331.18热度', url: '#' },
  { id: 3, title: '8点1氪丨西贝获新融资；永辉已申请多枚胖小辉商标；全球最大钻石生产商宣布降价', heat: '242.78热度', url: '#' },
  { id: 4, title: '带货1亿，李亚鹏真反转了吗？', heat: '134.37热度', url: '#' },
  { id: 5, title: 'DeepSeek-R2要来了？', heat: '131.52热度', url: '#' },
  { id: 6, title: '马斯克的底裤要被扒光了，超级爆料一个多小时，xAI工程师被火速解雇', heat: '130.21热度', url: '#' },
  { id: 7, title: '请对"最惨商业教父"保持尊重', heat: '103.64热度', url: '#' },
  { id: 8, title: 'Node.js之父官宣：人类手写代码时代真的结束了', heat: '96.10热度', url: '#' },
  { id: 9, title: '泡泡玛特反击「空头」', heat: '81.70热度', url: '#' },
  { id: 10, title: '新荣记张勇对暴风雨中的贾国龙伸出援手', heat: '78.23热度', url: '#' },
];

const zhihuNews: NewsItem[] = [
  { id: 1, title: '有网友发文称把速效救心丸当「抗累神器」，过度疲劳来一颗便可缓解不适，这药能随便吃吗？是否会有副作用？', heat: '485万热度', url: '#' },
  { id: 2, title: '韦东奕正式获聘北大长聘副教授，打破了哪些常规？在「非升即走」压力下，「长聘」意味着什么？', heat: '481万热度', url: '#' },
  { id: 3, title: '如何看待字节跳动期权大涨，去字节跳动工作是否成为当代年轻人最优解？', heat: '366万热度', url: '#' },
  { id: 4, title: '71岁成龙自曝患ADHD，询问网友怎样才能集中精力，你有哪些好的方法？', heat: '258万热度', url: '#' },
  { id: 5, title: '长期「碎片化睡眠」会导致大脑加速衰老，该如何改善睡眠状况？', heat: '90万热度', url: '#' },
  { id: 6, title: '中国有没有可能通过压低工业生产成本，将一次性火箭的成本压到接近美国的可复用火箭？', heat: '87万热度', url: '#' },
  { id: 7, title: '如何评价《崩坏：星穹铁道》即兴巡演PV：「一口气看完！铁墓之战后，官方没有说出的真相！」？', heat: '85万热度', url: '#' },
  { id: 8, title: '父母到子女家过年、进城过年的「反向春运」火了，这一趋势反映了怎样的社会变迁？', heat: '79万热度', url: '#' },
  { id: 9, title: '为什么大多数人吃饺子不蘸白醋？', heat: '77万热度', url: '#' },
  { id: 10, title: '如果给游戏中的角色加入勇气值，玩家操作的角色还能不能一往无前？', heat: '75万热度', url: '#' },
];

const itNews: NewsItem[] = [
  { id: 1, title: '华为公布鸿蒙智能追焦功能支持情况，Mate 80/Pura 80/nova 15等系列在列', url: '#' },
  { id: 2, title: '韦东奕正式获聘北京大学数学科学学院长聘副教授', url: '#' },
  { id: 3, title: '甩掉"宝骏"前缀：上汽通用五菱确立"华境汽车"独立品牌地位', url: '#' },
  { id: 4, title: '全国铁路明起超8000列动车可选"静音车厢"', url: '#' },
  { id: 5, title: '人民币现金收付新规今日施行，明确"不得拒收现金"红线', url: '#' },
  { id: 6, title: '史上最卖座好莱坞动画电影，《疯狂动物城2》连续3个月获全国票房冠军', url: '#' },
  { id: 7, title: '叩响终章：《速度与激情11》定档2028年3月17日北美上映', url: '#' },
  { id: 8, title: '曝三星、SK海力士和美光严控存储芯片订单', url: '#' },
  { id: 9, title: '一文彻底看懂6G', url: '#' },
  { id: 10, title: 'eSIM物联网技术专委会成立', url: '#' },
];

function NewsList({ items }: { items: NewsItem[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <a
          key={item.id}
          href={item.url}
          className="flex items-start group py-2"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <span
            className={`hot-badge flex-shrink-0 mr-3 ${
              index < 3 ? 'top' : 'normal'
            }`}
          >
            {item.id}
          </span>
          <div className="flex-1 min-w-0">
            <span
              className={`text-sm line-clamp-1 transition-colors ${
                hoveredIndex === index ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              {item.title}
            </span>
          </div>
          {item.heat && (
            <span className="text-xs text-gray-400 ml-2 flex-shrink-0">
              {item.heat}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}

export default function HotNews() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center">
              <Flame className="mr-2 h-6 w-6 text-orange-500" />
              今日热榜
            </h1>
            <p className="mt-2 text-gray-600">汇聚全网热门资讯，实时掌握AI动态</p>
          </div>

          <Tabs defaultValue="aigc" className="w-full">
            <TabsList className="mb-6 bg-white border w-full justify-start overflow-x-auto">
              <TabsTrigger value="aigc" className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                AIGC热点
              </TabsTrigger>
              <TabsTrigger value="36kr" className="flex items-center gap-1">
                <Newspaper className="h-4 w-4" />
                36氪
              </TabsTrigger>
              <TabsTrigger value="zhihu" className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4" />
                知乎热榜
              </TabsTrigger>
              <TabsTrigger value="it" className="flex items-center gap-1">
                <Code className="h-4 w-4" />
                IT资讯
              </TabsTrigger>
            </TabsList>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <TabsContent value="aigc" className="mt-0 lg:col-span-2">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-blue-500" />
                    AIGC热点
                  </h2>
                  <NewsList items={aigcNews} />
                </div>
              </TabsContent>

              <TabsContent value="36kr" className="mt-0">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Newspaper className="mr-2 h-5 w-5 text-blue-500" />
                    36氪 24h热榜
                  </h2>
                  <NewsList items={tech36News} />
                </div>
              </TabsContent>

              <TabsContent value="zhihu" className="mt-0">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <MessageCircle className="mr-2 h-5 w-5 text-blue-500" />
                    知乎热榜
                  </h2>
                  <NewsList items={zhihuNews} />
                </div>
              </TabsContent>

              <TabsContent value="it" className="mt-0 lg:col-span-2">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Code className="mr-2 h-5 w-5 text-blue-500" />
                    IT资讯热榜
                  </h2>
                  <NewsList items={itNews} />
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
}
