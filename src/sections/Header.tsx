import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Bot, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: '推荐工具', href: '#recommended' },
  { label: 'AI工具集', href: '#ai-tools' },
  {
    label: 'AI社区',
    href: '#ai-community',
    children: [
      { label: 'AI平台模型', href: '#' },
      { label: 'AI开源项目', href: '#' },
      { label: 'AI学习资源', href: '#' },
      { label: 'GPTs应用', href: '#' },
    ],
  },
  {
    label: '资源素材',
    href: '#resources',
    children: [
      { label: 'PPT资源', href: '#' },
      { label: '免商图片', href: '#' },
      { label: '视频素材', href: '#' },
      { label: '音乐素材', href: '#' },
    ],
  },
  {
    label: '创作工具',
    href: '#creative',
    children: [
      { label: '图片处理', href: '#' },
      { label: '视频剪辑', href: '#' },
      { label: '思维导图', href: '#' },
      { label: '排版编辑', href: '#' },
    ],
  },
  {
    label: '媒体运营',
    href: '#media',
    children: [
      { label: '知识付费', href: '#' },
      { label: '实时热榜', href: '#' },
      { label: '媒体平台', href: '#' },
      { label: '数据分析', href: '#' },
    ],
  },
  {
    label: '行业圈子',
    href: '#industry',
    children: [
      { label: 'AI服务商', href: '#' },
      { label: '独立开发', href: '#' },
      { label: '电商运营', href: '#' },
      { label: '教育学习', href: '#' },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">OpenI</span>
            <span className="text-sm text-gray-500 hidden sm:inline">AI时代</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center px-3 py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors">
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-40">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.label} asChild>
                        <a
                          href={child.href}
                          className="cursor-pointer"
                        >
                          {child.label}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <a
              href="https://chat.openi.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center text-sm text-blue-600 hover:text-blue-700"
            >
              <Bot className="mr-1 h-4 w-4" />
              OpenI AI助手入口
            </a>
            <Link to="/login">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <User className="mr-1 h-4 w-4" />
                登录
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-100">
            <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-base text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-gray-500 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <a
                  href="https://chat.openi.cn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 text-base text-blue-600"
                >
                  <Bot className="mr-2 h-5 w-5" />
                  OpenI AI助手入口
                </a>
                <Link
                  to="/login"
                  className="flex items-center px-3 py-2 text-base text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className="mr-2 h-5 w-5" />
                  登录
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
