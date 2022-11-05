import { SpotlightAction } from '@mantine/spotlight/lib/types';
import { NextRouter } from 'next/router';


export const getSpotlightActions = (router: NextRouter) => {
  const actions: SpotlightAction[] = [
    {
      title: 'Home',
      group: 'Navigation',
      onTrigger: () => router.push('/'),
    },
    {
      title: 'About me',
      group: 'Navigation',
      onTrigger: () => router.push('/about'),
    },
    {
      title: 'Contacts',
      group: 'Navigation',
      onTrigger: () => router.push('/contacts'),
    },
    {
      title: 'Example post',
      description: 'Node.js',
      group: 'Posts',
      onTrigger: () => router.push('/posts/example-post'),
    },
    {
      title: 'Example post 2',
      description: 'React',
      group: 'Posts',
      onTrigger: () => router.push('/posts/example-post-2'),
    },
  ];
  return actions;
};