import { useState } from 'react';
import { ChevronRight, Flame } from 'lucide-react';
import { hotNews } from '@/data/toolsConfig';

const quickAccess = [
  { label: '专业导航', href: '/' },
  { label: 'OpenI AI助手', href: 'https://chat.openi.cn' },
  { label: '名站直达', href: '/' },
  { label: '在线工具', href: '/tools' },
  { label: '热点榜', href: '/hotnews' },
  { label: '联系站长', href: '#' },
];

export default function HotNews() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Hot News List */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <Flame className="mr-2 h-5 w-5 text-orange-500" />
                AIGC热点
              </h2>
              <a
                href="/hotnews"
                className="text-sm text-blue-600 hover:text-blue-700 flex items-center"
              >
                更多
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {hotNews.map((news, index) => (
                <a
                  key={news.id}
                  href={news.url}
                  className="flex items-start group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span
                    className={`hot-badge flex-shrink-0 mr-3 mt-0.5 ${
                      index < 3 ? 'top' : 'normal'
                    }`}
                  >
                    {news.id}
                  </span>
                  <span
                    className={`text-sm line-clamp-1 transition-colors ${
                      hoveredIndex === index
                        ? 'text-blue-600'
                        : 'text-gray-700'
                    }`}
                  >
                    {news.title}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Access */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-3">快捷入口</h3>
              <div className="space-y-2">
                {quickAccess.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-white rounded-md transition-all"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              
              {/* Stats */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-xs text-gray-500">收录工具</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">50+</div>
                    <div className="text-xs text-gray-500">工具分类</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
