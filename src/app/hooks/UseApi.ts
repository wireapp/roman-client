import { useState } from 'react';

import { Configuration, DefaultApi, RequestContext, ResponseContext } from '../generated';
import useUser from './UseUser';

export const apiBasePath = process.env.BASE_PATH ?? 'https://roman.integrations.zinfra.io';

/**
 * Hook that gives access to DefaultApi.
 */
export default function useApi(): DefaultApi {
  const [api, setApi] = useState<DefaultApi | null>(null);
  const [, , deleteUser] = useUser();

  if (api == null) {
    const defaultApi = new DefaultApi(
      new Configuration({
        basePath: apiBasePath,
        middleware: [{
          pre: async (context: RequestContext) => {
            // TODO this is fix for wrong swagger in the Roman
            context.init.credentials = 'include';
          },
          post: async (context: ResponseContext) => {
            // delete user if the response status from BE is unauthorized
            if (context.response.status === 401) {
              deleteUser();
            }
          }
        }]
      })
    );
    setApi(defaultApi);
    return defaultApi;
  } else {
    return api;
  }
}



