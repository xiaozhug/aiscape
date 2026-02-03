import { useMemo, useState, useEffect } from 'react';
import { Search, Wrench, ChevronDown, ChevronRight, ExternalLink, Copy } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';
import { getToolsByCategory, searchTools } from '@/data/toolsConfig';
import { getCategoryAnchor, getGroupAnchor, getNavTree } from '@/data/navigationConfig';

export default function Tools() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryId, setActiveCategoryId] = useState<string>('');
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(() => new Set());
  const navTree = useMemo(() => getNavTree(), []);
  const categoryToGroup = useMemo(() => {
    const mapping = new Map<string, string>();
    navTree.forEach((group) => {
      group.categories.forEach((category) => {
        mapping.set(category.id, group.id);
      });
    });
    return mapping;
  }, [navTree]);
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const searchMatches = useMemo(() => {
    if (!normalizedQuery) return null;
    const results = searchTools(normalizedQuery);
    return new Set(results.map((tool) => tool.id));
  }, [normalizedQuery]);

  useEffect(() => {
    const categorySections = navTree.flatMap((group) =>
      group.categories.map((category) => ({
        id: category.id,
        anchor: getCategoryAnchor(category),
      }))
    );

    const targets = categorySections
      .map((category) => document.getElementById(category.anchor))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          const anchorId = visible[0].target.getAttribute('id');
          if (anchorId) {
            const categoryId = categorySections.find((item) => item.anchor === anchorId)?.id;
            if (categoryId) {
              setActiveCategoryId(categoryId);
            }
          }
        }
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: [0.2, 0.4, 0.6],
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [navTree]);

  const activeGroupId = activeCategoryId ? categoryToGroup.get(activeCategoryId) ?? '' : '';
  const hasSearchResults = searchMatches ? searchMatches.size > 0 : true;
  const allCollapsed = collapsedGroups.size === navTree.length && navTree.length > 0;

  const toggleGroup = (groupId: string) => {
    setCollapsedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(groupId)) {
        next.delete(groupId);
      } else {
        next.add(groupId);
      }
      return next;
    });
  };

  const toggleAllGroups = () => {
    setCollapsedGroups(() => {
      if (allCollapsed) return new Set();
      return new Set(navTree.map((group) => group.id));
    });
  };

  const handleCopy = async (url: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Ignore clipboard errors to keep UI clean.
    }
  };

  return (
    <div className="min-h-screen tech-page">
      <Header />
      
      <main className="py-10" id="top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8 tech-hero rounded-2xl p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 flex items-center">
                  <Wrench className="mr-2 h-6 w-6 text-blue-500" />
                  工具大全
                </h1>
                <p className="mt-2 text-sm text-slate-600">
                  简洁直观的分类导航，所有工具集中展示
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="tech-chip">全站整合</span>
                <span className="tech-chip">层级分类</span>
                <span className="tech-chip">快速检索</span>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-xl">
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索工具..."
                className="pl-4 pr-24 bg-white/90 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              <Button className="absolute right-0 top-0 h-full rounded-l-none bg-blue-600 hover:bg-blue-700">
                <Search className="h-4 w-4 mr-1" />
                搜索
              </Button>
            </div>
          </div>

          {!hasSearchResults && (
            <div className="mb-8 rounded-xl border border-dashed border-slate-200 bg-white/80 p-6 text-center text-sm text-slate-500">
              未找到相关工具，请尝试其他关键词。
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Category Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="tech-panel rounded-2xl p-4 sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-800">工具分类</h3>
                  <button
                    type="button"
                    onClick={toggleAllGroups}
                    className="text-xs text-slate-500 hover:text-blue-600"
                  >
                    {allCollapsed ? '展开全部' : '收起全部'}
                  </button>
                </div>
                <div className="space-y-4">
                  {navTree.map((group) => {
                    const isCollapsed = collapsedGroups.has(group.id);
                    return (
                      <div key={group.id} className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <a
                            href={`/#${getGroupAnchor(group)}`}
                            className={`block text-sm font-semibold hover:text-blue-600 ${
                              activeGroupId === group.id ? 'text-blue-600' : 'text-slate-800'
                            }`}
                          >
                            {group.label}
                          </a>
                          <button
                            type="button"
                            onClick={() => toggleGroup(group.id)}
                            className="rounded-md p-1 text-slate-500 hover:text-blue-600 hover:bg-blue-50/70"
                            aria-label={isCollapsed ? '展开分组' : '收起分组'}
                          >
                            {isCollapsed ? (
                              <ChevronRight className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                        {!isCollapsed && (
                          <div className="space-y-1 pl-3 border-l border-slate-200">
                            {group.categories.map((category) => (
                              <a
                                key={category.id}
                                href={`/#${getCategoryAnchor(category)}`}
                                className={`block text-sm tech-sidebar-link ${
                                  activeCategoryId === category.id ? 'is-active' : 'text-slate-600'
                                }`}
                              >
                                {category.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Tools Content */}
            <div className="flex-1 space-y-10">
              {navTree.map((group) => (
                <section
                  key={group.id}
                  id={getGroupAnchor(group)}
                  className="scroll-mt-24"
                >
                  <div className="tech-panel rounded-2xl p-6">
                    <div className="mb-6">
                      <h2 className="text-xl font-semibold text-slate-900 tech-section-title">
                        {group.label}
                      </h2>
                      {group.description && (
                        <p className="mt-1 text-sm text-slate-500">
                          {group.description}
                        </p>
                      )}
                    </div>

                    <div className="space-y-8">
                      {group.categories.map((category) => {
                        const tools = getToolsByCategory(category.id).filter((tool) =>
                          searchMatches ? searchMatches.has(tool.id) : true
                        );

                        if (!tools.length) {
                          return null;
                        }

                        return (
                          <div key={category.id} id={getCategoryAnchor(category)} className="scroll-mt-24">
                            <div className="flex items-baseline justify-between gap-4 mb-3">
                              <h3 className="text-lg font-semibold text-slate-800 tech-section-title">
                                {category.name}
                              </h3>
                              <span className="text-xs text-slate-400">
                                {tools.length} 个工具
                              </span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                              {tools.map((tool, index) => (
                                <a
                                  key={tool.id}
                                  href={tool.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="tool-card group animate-fade-in"
                                  style={{ animationDelay: `${index * 0.03}s` }}
                                >
                                  <div className="flex items-start gap-3">
                                    <span className="tool-card-icon">
                                      {tool.name.slice(0, 1)}
                                    </span>
                                    <div className="min-w-0 flex-1">
                                      <h4 className="font-medium text-slate-800 group-hover:text-blue-600 transition-colors mb-1">
                                        {tool.name}
                                      </h4>
                                      <p className="text-xs text-slate-500 line-clamp-2">
                                        {tool.description}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="tool-card-actions mt-3 flex items-center gap-2">
                                    <span className="text-xs text-slate-400">快捷操作</span>
                                    <button
                                      type="button"
                                      onClick={(event) => {
                                        event.preventDefault();
                                        event.stopPropagation();
                                        window.open(tool.officialUrl || tool.url, '_blank');
                                      }}
                                      className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs text-blue-600 hover:bg-blue-100"
                                    >
                                      <ExternalLink className="h-3 w-3" />
                                      访问
                                    </button>
                                    <button
                                      type="button"
                                      onClick={(event) => handleCopy(tool.officialUrl || tool.url, event)}
                                      className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600 hover:bg-slate-200"
                                    >
                                      <Copy className="h-3 w-3" />
                                      复制
                                    </button>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
