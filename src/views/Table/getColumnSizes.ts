import {AbstractItem} from './AbstractItem';

export default function getColumnSizes(
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
  return columnKeys.map(columnKey => {
    // TODO: npm i react-native-text-size
    const size = (longestRow[columnKey] as string).length;
    return size * 7;
  });
}
