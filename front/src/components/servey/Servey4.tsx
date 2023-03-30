import { useState } from 'react';
import tw from 'tailwind-styled-components';
import SelectCard from './SelectCard';

import photo1 from '../../assets/servey/2/STARBUCKS.png';
import photo2 from '../../assets/servey/2/A TWOSOME PLACE_W.png';
import photo3 from '../../assets/servey/2/CAFFE PASCUCCI.png';
import photo4 from '../../assets/servey/2/EDIYA.png';
import photo5 from '../../assets/servey/2/COFFEE.jpg';

type objtype = {
  title: string;
  img?: string;
};

const Servey4 = () => {
  const reason: objtype[] = [
    { title: '향' },
    { title: '산미' },
    { title: '단맛' },
    { title: '쓴맛' },
    { title: '목넘김' },
  ];

  return (
    <OutDiv>
      <CardTitle>위에서 선택한 이유가 무엇인가요?</CardTitle>
      <Card>
        {reason.map((data: objtype, idx) => {
          return <SelectCard key={idx} data={data} />;
        })}
      </Card>
    </OutDiv>
  );
};

export default Servey4;

const OutDiv = tw.div`w-full flex flex-col justify-center items-center`;
const CardTitle = tw.div`text-5xl font-bold flex justify-center my-10`;
const Card = tw.div`w-full flex justify-center items-center`;
