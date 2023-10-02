import {AbstractItem} from './AbstractItem';
import rnTextSize from 'react-native-text-size';

export default async function getColumnSizes(
  rows: AbstractItem[],
  columnKeys: string[],
) {
  // TODO: optimize
  function getLongestValuesForEachColumn() {
    return rows.reduce(
      (longestRow, currentRow) => {
        columnKeys.forEach(columnKey => {
          const left = longestRow[columnKey].toString(),
            right = currentRow[columnKey].toString();
          const max = left.length >= right.length ? left : right;
          longestRow[columnKey] = max;
        });
        return longestRow;
      },
      {...rows[0]},
    );
  }

  const longestRow = getLongestValuesForEachColumn();
  return await Promise.all(
    columnKeys.map(async columnKey => {
      const size = await rnTextSize.measure({
        text: longestRow[columnKey] as string,
      });
      return size.width;
    }),
  );
}