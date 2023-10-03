import {useQuery} from '@tanstack/react-query';

const QUERY_ADDRESS = 'https://api.poloniex.com/markets/ticker24h';

type Market = {
  symbol: string;
  open: string;
  low: string;
  high: string;
  close: string;
  quantity: string;
  amount: string;
  tradeCount: number;
  startTime: number;
  closeTime: number;
  displayName: string;
  dailyChange: string;
  bid: string;
  bidQuantity: string;
  ask: string;
  askQuantity: string;
  ts: number;
  markPrice: string;
};

export default function useMarketsTicker24hQuery(
  refetchInterval: number | false,
) {
  return useQuery<Market[]>({
    queryFn: () => fetch(QUERY_ADDRESS).then(res => res.json()),
    refetchInterval,
  });
}
