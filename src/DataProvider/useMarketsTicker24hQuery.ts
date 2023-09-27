import {useQuery} from '@tanstack/react-query';

const QUERY_ADDRESS = 'https://api.poloniex.com/markets/ticker24h';

export default function useMarketsTicker24hQuery() {
  return useQuery({
    queryFn: () => fetch(QUERY_ADDRESS).then(res => res.json()),
  });
}
