import { SpotlightAction } from '@mantine/spotlight/lib/types';
import { NextRouter } from 'next/router';


export const getSpotlightActions = (router: NextRouter) => {
  const actions: SpotlightAction[] = [
    {
      title: 'Post title',
      description: 'Tags: javascript, nodejs, react',
      onTrigger: () => router.push('/'),
    },
    {
      title: 'Dashboard',
      description: 'Get full information about current system status',
      onTrigger: () => router.push('/'),
    },
    {
      title: 'Documentation',
      description: 'Visit documentation to lean more about all features',
      onTrigger: () => router.push('/'),
    },
  ];
  return actions;
};