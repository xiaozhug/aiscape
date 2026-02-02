import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { quickLinks, searchTools } from '@/data/toolsConfig';
import { useNavigate } from 'react-router-dom';

// 搜索类型配置
const searchTypes = [
  { id: 'internal', label: '站内' },
  { id: 'common', label: '常用' },
  { id: 'search', label: '搜索' },
  { id: 'webmaster', label: '站长' },
  { id: 'community', label: '社区' },
  { id: 'life', label: '生活' },
  { id: 'netdisk', label: '网盘' },
];

// 各搜索类型的标签
const searchTypeTags: Record<string, { label: string; url?: string; searchUrl?: string }[]> = {
  internal: [
    { label: 'AI搜索' },
    { label: '查企业' },
    { label: '查学校' },
    { label: '查快递' },
    { label: '翻译' },
    { label: '股票' },
    { label: '电影' },
  ],
  common: [
    { label: '百度', searchUrl: 'https://www.baidu.com/s?wd=' },
    { label: '谷歌', searchUrl: 'https://www.google.com/search?q=' },
    { label: '必应', searchUrl: 'https://www.bing.com/search?q=' },
    { label: '知乎', searchUrl: 'https://www.zhihu.com/search?type=content&q=' },
    { label: 'GitHub', searchUrl: 'https://github.com/search?q=' },
    { label: 'StackOverflow', searchUrl: 'https://stackoverflow.com/search?q=' },
  ],
  search: [
    { label: '百度', searchUrl: 'https://www.baidu.com/s?wd=' },
    { label: '谷歌', searchUrl: 'https://www.google.com/search?q=' },
    { label: '必应', searchUrl: 'https://www.bing.com/search?q=' },
    { label: '搜狗', searchUrl: 'https://www.sogou.com/web?query=' },
    { label: '360搜索', searchUrl: 'https://www.so.com/s?q=' },
    { label: 'DuckDuckGo', searchUrl: 'https://duckduckgo.com/?q=' },
  ],
  webmaster: [
    { label: 'SEO查询', url: 'https://seo.chinaz.com' },
    { label: '站长工具', url: 'https://tool.chinaz.com' },
    { label: 'Whois查询', url: 'https://whois.chinaz.com' },
    { label: 'IP查询', url: 'https://ip.chinaz.com' },
    { label: '网站速度测试', url: 'https://www.17ce.com' },
    { label: '死链检测', url: 'https://tool.chinaz.com/links' },
  ],
  community: [
    { label: '知乎', searchUrl: 'https://www.zhihu.com/search?type=content&q=' },
    { label: 'V2EX', searchUrl: 'https://www.v2ex.com/?q=' },
    { label: '掘金', searchUrl: 'https://juejin.cn/search?query=' },
    { label: 'CSDN', searchUrl: 'https://so.csdn.net/so/search?q=' },
    { label: '简书', searchUrl: 'https://www.jianshu.com/search?q=' },
    { label: '豆瓣', searchUrl: 'https://www.douban.com/search?q=' },
  ],
  life: [
    { label: '天气', url: 'https://tianqi.baidu.com' },
    { label: '地图', url: 'https://map.baidu.com' },
    { label: '快递查询', url: 'https://www.kuaidi100.com' },
    { label: '汇率换算', url: 'https://www.baidu.com/s?wd=汇率' },
    { label: '万年历', url: 'https://wannianli.tianqi.com' },
    { label: '计算器', url: 'https://www.baidu.com/s?wd=计算器' },
  ],
  netdisk: [
    { label: '百度网盘', url: 'https://pan.baidu.com' },
    { label: '阿里云盘', url: 'https://www.aliyundrive.com' },
    { label: '夸克网盘', url: 'https://pan.quark.cn' },
    { label: '天翼云盘', url: 'https://cloud.189.cn' },
    { label: '115网盘', url: 'https://115.com' },
    { label: 'OneDrive', url: 'https://onedrive.live.com' },
  ],
};

export default function SearchSection() {
  const [activeType, setActiveType] = useState('internal');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<ReturnType<typeof searchTools>>([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    // 站内搜索
    if (activeType === 'internal') {
      const results = searchTools(searchQuery);
      setSearchResults(results);
      setShowResults(true);
    } else {
      // 外部搜索
      const tags = searchTypeTags[activeType];
      const firstTag = tags?.[0];
      if (firstTag?.searchUrl) {
        window.open(firstTag.searchUrl + encodeURIComponent(searchQuery), '_blank');
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleTagClick = (tag: { label: string; url?: string; searchUrl?: string }) => {
    if (tag.url) {
      window.open(tag.url, '_blank');
    } else if (tag.searchUrl && searchQuery) {
      window.open(tag.searchUrl + encodeURIComponent(searchQuery), '_blank');
    } else if (tag.label === 'AI搜索' && searchQuery) {
      // AI搜索 - 使用Kimi搜索
      window.open(`https://kimi.moonshot.cn/?q=${encodeURIComponent(searchQuery)}`, '_blank');
    }
  };

  const handleQuickLinkClick = (url: string) => {
    if (url.startsWith('http')) {
      window.open(url, '_blank');
    } else {
      navigate(url);
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Type Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {searchTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => {
                setActiveType(type.id);
                setShowResults(false);
              }}
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                activeType === type.id
                  ? 'bg-white text-blue-600'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value === '') {
                setShowResults(false);
              }
            }}
            onKeyDown={handleKeyDown}
            placeholder="搜索AI工具、资源..."
            className="w-full h-14 pl-6 pr-32 rounded-full bg-white shadow-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30"
          />
          <Button
            onClick={handleSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-6 rounded-full bg-blue-600 hover:bg-blue-700"
          >
            <Search className="h-5 w-5 mr-1" />
            搜索
          </Button>
        </div>

        {/* Search Results Dropdown */}
        {showResults && searchResults.length > 0 && (
          <div className="relative max-w-2xl mx-auto mt-2">
            <div className="absolute w-full bg-white rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-500 mb-2">搜索结果</h3>
                {searchResults.map((tool) => (
                  <div
                    key={tool.id}
                    className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                    onClick={() => navigate(`/sites/${tool.id}`)}
                  >
                    <div>
                      <h4 className="font-medium text-gray-800">{tool.name}</h4>
                      <p className="text-sm text-gray-500 line-clamp-1">{tool.description}</p>
                    </div>
                    <a
                      href={tool.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      访问
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Search Tags */}
        <div className="mt-8">
          <div className="flex flex-wrap justify-center gap-2">
            {searchTypeTags[activeType]?.map((tag) => (
              <button
                key={tag.label}
                onClick={() => handleTagClick(tag)}
                className="px-3 py-1.5 text-sm bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors"
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8">
          <div className="flex flex-wrap justify-center gap-2">
            {quickLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleQuickLinkClick(link.url)}
                className="px-3 py-1.5 text-sm bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
