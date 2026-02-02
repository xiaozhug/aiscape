import { Link } from 'react-router-dom';
import { Bot, Mail, MapPin, Phone } from 'lucide-react';

const friendLinks = [
  'SoHoBlink人工智能网',
  'logo设计',
  'AI工具集',
  '字典网',
  'AI绘画',
  'AI工具箱',
  'AI导航',
  'AI时代',
  '工具网',
  'AI智能体',
  '美图设计室',
  '易翻译',
  '自平衡多级泵',
  '多级离心泵',
  '立式长轴泵',
  '自平衡多级离心泵',
  '522gg手游网',
  '蔚来全新ES8',
  '快快出海',
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-white">AIScape</span>
              <span className="text-sm text-gray-400">AI时代</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              专业的AI工具导航平台，汇聚全球优质AI工具和资源，助力您的工作和创作。
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://chat.openi.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-blue-400 hover:text-blue-300"
              >
                <Bot className="mr-1 h-4 w-4" />
                AI助手
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-white transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <a href="#recommended" className="text-sm hover:text-white transition-colors">
                  推荐工具
                </a>
              </li>
              <li>
                <a href="#ai-tools" className="text-sm hover:text-white transition-colors">
                  AI工具集
                </a>
              </li>
              <li>
                <a href="#resources" className="text-sm hover:text-white transition-colors">
                  资源素材
                </a>
              </li>
              <li>
                <Link to="/hotnews" className="text-sm hover:text-white transition-colors">
                  热点榜
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-sm hover:text-white transition-colors">
                  在线工具
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-medium mb-4">工具分类</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  AI写作对话
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  AI绘画生成
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  AI视频生成
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  AI语音工具
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  AI办公效率
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  AI编程建站
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-4">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mt-0.5 mr-2 text-gray-400" />
                <span className="text-sm">广州市</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gray-400" />
                <a href="mailto:contact@openi.cn" className="text-sm hover:text-white transition-colors">
                  contact@openi.cn
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gray-400" />
                <span className="text-sm">联系站长</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Friend Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-sm font-medium text-gray-400 mb-4">友情链接</h3>
          <div className="flex flex-wrap gap-3">
            {friendLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                {link}
              </a>
            ))}
            <a href="#" className="text-xs text-blue-400 hover:text-blue-300">
              更多链接
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500">
              Copyright © 2026{' '}
              <Link to="/" className="text-gray-400 hover:text-white">
                AIScape
              </Link>{' '}
              广州良知品牌管理有限公司 版权所有
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                粤ICP备19001258号
              </a>
              <a
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011502001135"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                粤公网安备 44011502001135号
              </a>
              <Link to="/sitemap" className="hover:text-gray-400">
                SiteMap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
