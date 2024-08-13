import { twMerge } from 'tailwind-merge';

import type { ClassValue } from 'clsx';
import clsx from 'clsx';

export const cn = (...classes: ClassValue[]) => {
  return twMerge(clsx(classes.filter(Boolean)));
};
