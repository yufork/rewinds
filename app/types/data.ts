import type { getEnv } from '~/utils';

/**
 * Used inside of LoaderFunction and ActionFunction
 * Used along with useLoaderData() and useActionData()
 */

export type LoaderDataSession = {
  user: any;
  theme: any;
  error: any;
  ENV: ReturnType<typeof getEnv>;
};

export type LoaderDataAbout = {
  mainStacks: StackItem[];
  referenceStacks: StackItem[];
  features: string[];
};

/**
 * Used inside the LoaderData and ActionData types
 */

export type StackItem = {
  name: string;
  url: string;
  description?: string;
  subItems?: {
    name: string;
    url?: string;
    description?: string;
  }[];
};

export type ComponentItem = {
  name: string;
};

export type UtilityItem = {
  name: string;
};

export type ExternalLinkItem = {
  name: string;
  url: string;
  isEnabled?: boolean;
};
