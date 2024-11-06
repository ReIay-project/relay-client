import { Route } from '../enum';
import { ServerPageModel } from '../model/ServerPageModel.ts';

export const serverPages: ServerPageModel[] = [
  {
    name: 'Text channel 1',
    type: 'text',
    route: {
      name: Route.serverPage,
      params: {
        pageId: '1'
      }
    }
  },
  {
    name: 'Text channel 2',
    type: 'text',
    route: {
      name: Route.serverPage,
      params: {
        pageId: '2'
      }
    }
  },
  {
    name: 'Voice channel',
    type: 'voice',
    route: {
      name: Route.serverPage,
      params: {
        pageId: '3'
      }
    }
  }
];