import { useState } from 'react';
import tw from 'tailwind-styled-components';
import SelectCard from './SelectCard';

type objtype = {
  title: string;
  img?: string;
};

const Servey2 = () => {
  const qweqw: objtype[] = [
    { title: '10대' },
    { title: '20대' },
    { title: '30대' },
    { title: '40대' },
    { title: '50대' },
  ];

  return (
    <OutDiv>
      <CardTitle>연령대</CardTitle>
      <Card>
        {qweqw.map((data: objtype, idx) => {
          return <SelectCard key={idx} data={data} />;
        })}
      </Card>
    </OutDiv>
  );
};

export default Servey2;

const OutDiv = tw.div`w-full flex flex-col justify-center items-center`;
const CardTitle = tw.div`text-5xl font-bold flex justify-center my-10`;
const Card = tw.div`w-full flex justify-center items-center`;
