import { LandingPage, LandingPageProps } from './LandingPage';
import { useQuery } from '@tanstack/react-query';
import _ from 'lodash';
import Papa from 'papaparse';
import {
  DynamicHeaderContents,
  DynamicHeaderContentsProps,
} from './DynamicHeaderContents';

/** スプレットシートからコンテンツを取得する */
const fetchData = async () => {
  const sheetId = '1Zz3RbfH51ppbKgKL1LvXg6W5wzCB78PpqoWK0trHdr0';
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv`;

  const csvText = await fetch(url).then((res) => res.text());

  const csv = Papa.parse(csvText, { header: false });
  return csv.data as string[][];
};

export const DynamicContents = () => {
  const { data, isLoading } = useQuery<string[][]>({
    queryKey: ['initData'],
    queryFn: fetchData,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  if (isLoading || !data) return <p>Loading...</p>;

  //スプレットシートの内容をObjectに格納
  type spreadSheetDataType = LandingPageProps & DynamicHeaderContentsProps;
  const lpProps = data
    .map((v) => v)
    .reduce<spreadSheetDataType>((prev, [path, value]) => {
      _.set(prev, path, value);
      return prev;
    }, {} as spreadSheetDataType);

  return (
    <>
      {/* Header */}
      <DynamicHeaderContents {...lpProps} />
      {/* コンテンツ */}
      <LandingPage {...lpProps} />
    </>
  );
};
