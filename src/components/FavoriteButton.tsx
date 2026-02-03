import { Heart } from 'lucide-react';
import { useFavorites } from '@/hooks/use-favorites';

type FavoriteButtonProps = {
  toolId: string;
};

export default function FavoriteButton({ toolId }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(toolId);

  return (
    <button
      type="button"
      className={`tool-card-favorite${active ? ' active' : ''}`}
      aria-pressed={active}
      aria-label={active ? '取消收藏' : '收藏'}
      title={active ? '取消收藏' : '收藏'}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleFavorite(toolId);
      }}
    >
      <Heart className="h-4 w-4" fill={active ? 'currentColor' : 'none'} />
    </button>
  );
}
