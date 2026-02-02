import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ExternalLink, Home, Eye, Heart, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';
import { toolsData, categories, getRelatedTools } from '@/data/toolsConfig';

export default function ToolDetail() {
  const { id } = useParams<{ id: string }>();
  const tool = id ? toolsData[id] : null;

  if (!tool) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-gray-900">工具不存在</h1>
            <p className="mt-2 text-gray-600">该工具可能已被删除或未收录</p>
            <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
              返回首页
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedTools = getRelatedTools(tool.id);
  const mainCategory = categories.find(c => c.id === tool.categoryIds[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-gray-500 mb-6">
            <Link to="/" className="flex items-center hover:text-blue-600">
              <Home className="h-4 w-4 mr-1" />
              首页
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            {mainCategory && (
              <>
                <Link to={`/favorites/${mainCategory.id}`} className="hover:text-blue-600">
                  {mainCategory.name}
                </Link>
                <ChevronRight className="h-4 w-4 mx-2" />
              </>
            )}
            <span className="text-gray-900">{tool.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Tool Header */}
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{tool.name}</h1>
                    <p className="mt-2 text-gray-600">{tool.description}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-4 flex items-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {tool.views.toLocaleString()} 浏览
                  </span>
                  <span className="flex items-center">
                    <Heart className="h-4 w-4 mr-1" />
                    {tool.likes.toLocaleString()} 喜欢
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(tool.createdAt).toLocaleDateString('zh-CN')} 收录
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <a href={tool.officialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      链接直达
                    </a>
                  </Button>
                  <Button variant="outline" size="lg">
                    <Heart className="h-4 w-4 mr-2" />
                    收藏
                  </Button>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">工具介绍</h2>
                <div className="prose prose-gray max-w-none">
                  {tool.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Features */}
              {tool.features && tool.features.length > 0 && (
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">核心功能</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {tool.features.map((feature, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* History */}
              {tool.history && tool.history.length > 0 && (
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">发展历程</h2>
                  <div className="relative">
                    <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200" />
                    <ul className="space-y-4">
                      {tool.history.map((item, index) => (
                        <li key={index} className="flex items-start relative pl-8">
                          <span className="absolute left-0 top-1.5 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Tag className="h-5 w-5 mr-2" />
                  所属分类
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tool.categoryIds.map((catId) => {
                    const cat = categories.find(c => c.id === catId);
                    return cat ? (
                      <Link
                        key={catId}
                        to={`/favorites/${catId}`}
                        className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 transition-colors"
                      >
                        {cat.name}
                      </Link>
                    ) : null;
                  })}
                </div>
              </div>

              {/* Related Tools */}
              {relatedTools.length > 0 && (
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">相关工具</h3>
                  <div className="space-y-3">
                    {relatedTools.map((relatedTool) => (
                      <Link
                        key={relatedTool.id}
                        to={`/sites/${relatedTool.id}`}
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                      >
                        <h4 className="font-medium text-gray-800 hover:text-blue-600">
                          {relatedTool.name}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                          {relatedTool.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Ad Banner */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
                <h3 className="font-semibold mb-2">AIScape AI助手</h3>
                <p className="text-sm opacity-90 mb-4">
                  提供免费的国产AI对话服务，支持多种大模型
                </p>
                <Button variant="secondary" size="sm" asChild>
                  <a href="https://chat.openi.cn" target="_blank" rel="noopener noreferrer">
                    立即体验
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
