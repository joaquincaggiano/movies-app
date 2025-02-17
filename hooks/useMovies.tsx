import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.action";
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const popularQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "popular"],
    queryFn: ({ pageParam = 1 }) => popularMoviesAction({ page: pageParam }),
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: () => nowPlayingAction(),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const topRatedQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "topRated"],
    queryFn: ({ pageParam = 1 }) => {
      return topRatedMoviesAction({ page: pageParam });
    },
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  const upcomingQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "upcoming"],
    queryFn: ({ pageParam = 1 }) => upcomingMoviesAction({ page: pageParam }),
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  const isLoading =
    nowPlayingQuery.isLoading ||
    !nowPlayingQuery.data ||
    popularQuery.isLoading ||
    !popularQuery.data ||
    topRatedQuery.isLoading ||
    !topRatedQuery.data ||
    upcomingQuery.isLoading ||
    !upcomingQuery.data;

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
    isLoading,
  };
};
