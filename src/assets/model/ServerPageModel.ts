import { Route } from '../enum';

export interface ServerPageModel {
  name: string,
  type: string,

  route: {
    name: Route.serverPage,
    params: {
      pageId: string
    }
  },
}