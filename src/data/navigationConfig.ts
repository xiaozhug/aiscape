import { categories } from './toolsConfig';
import type { CategoryConfig } from './toolsConfig';

export interface NavGroup {
  id: string;
  label: string;
  description?: string;
  categoryIds: string[];
}

export interface NavCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface NavTreeItem extends NavGroup {
  categories: NavCategory[];
}

export const navGroups: NavGroup[] = [
  {
    id: 'ai-tools',
    label: 'AI工具集',
    description: 'AI创作与效率工具集合',
    categoryIds: [
      'cat_ai_writing',
      'cat_ai_painting',
      'cat_ai_video',
      'cat_ai_voice',
      'cat_ai_image',
      'cat_ai_search',
      'cat_ai_office',
      'cat_ai_code',
    ],
  },
  {
    id: 'ai-community',
    label: 'AI社区',
    description: '模型平台、开源与学习资源',
    categoryIds: [
      'cat_platform',
      'cat_opensource',
      'cat_learning',
      'cat_gpts',
      'cat_prompts',
      'cat_companies',
    ],
  },
  {
    id: 'resources',
    label: '资源素材',
    description: '图片、视频、音乐等素材',
    categoryIds: [
      'cat_ppt',
      'cat_images',
      'cat_video',
      'cat_music',
      'cat_fonts',
      'cat_icons',
    ],
  },
  {
    id: 'creative-tools',
    label: '创作工具',
    description: '图片、视频、思维导图与排版',
    categoryIds: [
      'cat_image_edit',
      'cat_video_edit',
      'cat_mindmap',
      'cat_layout',
      'cat_convert',
    ],
  },
  {
    id: 'media-ops',
    label: '媒体运营',
    description: '内容运营与数据工具',
    categoryIds: [
      'cat_monetization',
      'cat_trending',
      'cat_platforms',
      'cat_analytics',
    ],
  },
  {
    id: 'industry-circle',
    label: '行业圈子',
    description: '行业应用与垂直场景工具',
    categoryIds: [
      'cat_service',
      'cat_indie',
      'cat_ecommerce',
      'cat_finance',
      'cat_education',
    ],
  },
];

export function getGroupAnchor(group: NavGroup): string {
  return `group-${group.id}`;
}

export function getCategoryAnchor(category: NavCategory): string {
  return `cat-${category.slug}`;
}

export function getNavTree(): NavTreeItem[] {
  return navGroups.map((group) => {
    const groupCategories = group.categoryIds
      .map((id) => categories.find((category) => category.id === id))
      .filter((category): category is CategoryConfig => Boolean(category))
      .map((category) => ({
        id: category.id,
        name: category.name,
        slug: category.slug,
        description: category.description,
      }));

    return {
      ...group,
      categories: groupCategories,
    };
  });
}
