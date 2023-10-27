'use client';

import { Button } from '@/components/ui/button';
import { Logo } from './logo';

export const Footer = () => {
  return (
    <div className='flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]'>
      <Logo />

      <div className='md:ml-auto w-full flex justify-between md:justify-end items-center text-muted-foreground gap-x-2'>
        <Button
          variant='ghost'
          size='sm'>
          Privacy Policy
        </Button>
        <Button
          variant='ghost'
          size='sm'>
          Term & Conditions
        </Button>
      </div>
    </div>
  );
};
