import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ExternalLink, Home, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';
import { categories, getToolsByCategory } from '@/data/toolsConfig';

export default function CategoryPage() {
  const { id } = useParams<{ id: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const itemsPerPage = 12;

  const category = categories.find(c => c.id === id);
  const tools = id ? getToolsByCategory(id) : [];
  const totalPages = Math.ceil(tools.length / itemsPerPage);
  const currentTools = tools.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // 获取所有一级分类用于侧边栏
  const mainCategories = categories.filter(c => !c.parentId).slice(0, 10);

  if (!category && id?.startsWith('cat_')) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-gray-900">分类不存在</h1>
            <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
              返回首页
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
            <span className="text-gray-900">{category?.name || '工具分类'}</span>
          </nav>

          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">{category?.name || '工具分类'}</h1>
            <p className="mt-2 text-gray-600">
              {category?.description || '浏览各类AI工具'}
              {tools.length > 0 && ` · 共 ${tools.length} 个工具`}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <div className="lg:w-56 flex-shrink-0">
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-medium text-gray-800 mb-4">工具分类</h3>
                <div className="space-y-1">
                  {mainCategories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/favorites/${cat.id}`}
                      className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                        cat.id === id
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">
                  共 {tools.length} 个工具
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-400'}`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-400'}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Tools Grid/List */}
              {currentTools.length > 0 ? (
                <>
                  <div className={viewMode === 'grid' 
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    : "space-y-3"
                  }>
                    {currentTools.map((tool, index) => (
                      <div
                        key={tool.id}
                        className={`tool-card group animate-fade-in ${viewMode === 'list' ? 'flex items-center' : ''}`}
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <div className={`flex-1 min-w-0 ${viewMode === 'list' ? 'flex items-center gap-4' : ''}`}>
                          <div className={viewMode === 'list' ? 'flex-1' : ''}>
                            <Link 
                              to={`/sites/${tool.id}`}
                              className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors mb-1 block"
                            >
                              {tool.name}
                            </Link>
                            <p className="text-xs text-gray-500 line-clamp-2">
                              {tool.description}
                            </p>
                            {viewMode === 'list' && (
                              <div className="flex items-center gap-2 mt-2">
                                {tool.tags.slice(0, 3).map(tag => (
                                  <span key={tag} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                        <a 
                          href={tool.officialUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-blue-500 transition-colors ml-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="mt-8 flex justify-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(p => p - 1)}
                      >
                        上一页
                      </Button>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </Button>
                      ))}
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(p => p + 1)}
                      >
                        下一页
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div className="bg-white rounded-lg shadow p-12 text-center">
                  <p className="text-gray-500">该分类下暂无工具</p>
                  <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
                    返回首页
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
