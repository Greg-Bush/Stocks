import {useQuery} from '@tanstack/react-query';
import {Market} from '../types/Market';

const QUERY_ADDRESS = 'https://api.poloniex.com/markets/ticker24h';

export default function useMarketsTicker24hQuery(
  refetchInterval: number | false,
) {
  return useQuery<Market[]>({
    queryFn: () => fetch(QUERY_ADDRESS).then(res => res.json()),
    refetchInterval,
  });
}
