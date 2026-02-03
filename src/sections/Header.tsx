import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Bot, User } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { getCategoryAnchor, getGroupAnchor, getNavTree } from '@/data/navigationConfig';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const MAX_CHILDREN_PER_COL = 6;
const MAX_COLS = 3;

function chunkChildren(children: { label: string; href: string }[]) {
  const chunks: { label: string; href: string }[][] = [];
  for (let i = 0; i < children.length; i += MAX_CHILDREN_PER_COL) {
    chunks.push(children.slice(i, i + MAX_CHILDREN_PER_COL));
  }
  return chunks.slice(0, MAX_COLS);
}

function getGridColsClass(columns: number) {
  if (columns <= 1) return 'grid-cols-1';
  if (columns === 2) return 'grid-cols-2';
  return 'grid-cols-3';
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = useMemo<NavItem[]>(() => {
    const tree = getNavTree();
    const items = tree.map((group) => ({
      label: group.label,
      href: `/#${getGroupAnchor(group)}`,
      children: group.categories.map((category) => ({
        label: category.name,
        href: `/#${getCategoryAnchor(category)}`,
      })),
    }));

    return [
      { label: '全部工具', href: '/#top' },
      ...items,
    ];
  }, []);

  const navColumns = useMemo(() => {
    return navItems.map((item) => {
      if (!item.children?.length) {
        return { ...item, columns: [] as { label: string; href: string }[][] };
      }
      return { ...item, columns: chunkChildren(item.children) };
    });
  }, [navItems]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur shadow-sm tech-header relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-slate-900">
              AI<span className="text-blue-600">Scape</span>
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">AI时代</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="flex-wrap justify-start">
                {navColumns.map((item) =>
                  item.children?.length ? (
                    <NavigationMenuItem key={item.label}>
                      <NavigationMenuTrigger className="text-slate-700 hover:text-blue-600 data-[state=open]:text-blue-600 data-[state=open]:bg-blue-50/60 rounded-full px-3 py-2">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="p-4 rounded-xl border border-slate-200/70 bg-white/95 shadow-xl backdrop-blur">
                        <div
                          className={`grid gap-3 ${getGridColsClass(
                            Math.max(1, item.columns.length)
                          )} min-w-[240px]`}
                        >
                          {item.columns.map((column, index) => (
                            <div key={`${item.label}-col-${index}`} className="space-y-1">
                              {column.map((child) => (
                                <NavigationMenuLink
                                  key={child.label}
                                  href={child.href}
                                  className="block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-blue-50/70 hover:text-blue-700"
                                >
                                  {child.label}
                                </NavigationMenuLink>
                              ))}
                            </div>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.label}>
                      <NavigationMenuLink
                        href={item.href}
                        className="px-3 py-2 text-sm text-slate-700 hover:text-blue-600 hover:bg-slate-100/70 rounded-full"
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
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
              AI助手
            </a>
            <Link to="/login">
              <Button variant="outline" size="sm" className="hidden sm:flex border-slate-200 text-slate-700 hover:bg-slate-100">
                <User className="mr-1 h-4 w-4" />
                登录
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} direction="left">
          <DrawerContent className="bg-white/95 p-0 backdrop-blur">
            <DrawerHeader className="flex items-center justify-between border-b border-slate-200/70">
              <DrawerTitle className="text-base font-semibold text-slate-900">
                菜单
              </DrawerTitle>
              <DrawerClose asChild>
                <button
                  className="rounded-md p-2 text-gray-600 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </DrawerClose>
            </DrawerHeader>
            <div className="max-h-[80vh] overflow-y-auto px-4 pb-6">
              <Accordion type="multiple" className="w-full">
                {navItems.map((item) =>
                  item.children?.length ? (
                    <AccordionItem key={item.label} value={item.label}>
                      <AccordionTrigger className="text-base text-slate-800">
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className="space-y-1">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block rounded-md px-2 py-2 text-sm text-slate-600 hover:bg-blue-50/70 hover:text-blue-700"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ) : (
                    <div key={item.label} className="border-b border-slate-200/70">
                      <a
                        href={item.href}
                        className="block py-4 text-base text-slate-800"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    </div>
                  )
                )}
              </Accordion>
              <div className="mt-4 border-t border-slate-200/70 pt-4">
                <a
                  href="https://chat.openi.cn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-md px-2 py-2 text-blue-600 hover:bg-blue-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Bot className="mr-2 h-5 w-5" />
                  AI助手
                </a>
                <Link
                  to="/login"
                  className="mt-2 flex items-center rounded-md px-2 py-2 text-slate-700 hover:bg-slate-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className="mr-2 h-5 w-5" />
                  登录
                </Link>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
     </header>
   );
 }
