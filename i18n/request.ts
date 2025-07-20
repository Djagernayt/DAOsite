import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => ({
  locale: locale ?? 'en',
  messages: (
    await import(`./translations/${locale}/common.json`)
  ).default
}));

// export default getRequestConfig(async ({locale}) => ({
//   messages: (await import(`./messages/${locale}/common.json`)).default
// }))
