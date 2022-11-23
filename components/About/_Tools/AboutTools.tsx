import { Badge } from '@mantine/core';
import { useRouter } from 'next/router';

import { data } from './AboutTools.data';
import { en, ru } from './AboutTools.locale';


const cssPrefix = 'aboutTools';

const AboutTools = () => {
  const router = useRouter();
  const currentLocale = router.locale === 'en' ? en : ru;

  return (
    <div className={cssPrefix}>
      <h2 className={`${cssPrefix}__title`}>{currentLocale.title}</h2>
      {data.map((item: string) => (
        <Badge className={`${cssPrefix}__badge`} key={item}>
          {item}
        </Badge>
      ))}
    </div>
  );
};

export default AboutTools;