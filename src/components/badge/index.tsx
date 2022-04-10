import React from 'react';
import StarIcon from '@site/static/svg/starIcon';
import SuccessIcon from '@site/static/svg/successIcon';
import DangerIcon from '@site/static/svg/dangerIcon';
import WarningIcon from '@site/static/svg/warningIcon';

const BadgeBasic = () => {
  return (
    <div>
      <span className='inline-block rounded-min text-white bg-primary px-2 py-1 text-xs font-bold mr-3'>
        Primary
      </span>
      <span className='inline-block rounded-min text-white bg-secondary px-2 py-1 text-xs font-bold mr-3'>
        Secondary
      </span>
      <span className='inline-block rounded-min text-white bg-success px-2 py-1 text-xs font-bold mr-3'>
        Success
      </span>
      <span className='inline-block rounded-min text-white bg-danger px-2 py-1 text-xs font-bold mr-3'>
        Danger
      </span>
      <span className='inline-block rounded-min text-white bg-warning px-2 py-1 text-xs font-bold mr-3'>
        Warning
      </span>
      <span className='inline-block rounded-min text-white bg-info px-2 py-1 text-xs font-bold mr-3'>
        Info
      </span>
      <span className='inline-block rounded-min text-gray-500 bg-light px-2 py-1 text-xs font-bold mr-3'>
        Light
      </span>
      <span className='inline-block rounded-min text-white bg-dark px-2 py-1 text-xs font-bold mr-3'>
        Dark
      </span>
    </div>
  );
};
const BadgeRounded = () => {
  return (
    <div>
      <span className='inline-block rounded-md text-white bg-primary px-2 py-1 text-xs font-bold mr-3'>
        Primary
      </span>
      <span className='inline-block rounded-md text-white bg-secondary px-2 py-1 text-xs font-bold mr-3'>
        Secondary
      </span>
      <span className='inline-block rounded-md text-white bg-success px-2 py-1 text-xs font-bold mr-3'>
        Success
      </span>
      <span className='inline-block rounded-md text-white bg-danger px-2 py-1 text-xs font-bold mr-3'>
        Danger
      </span>
      <span className='inline-block rounded-md text-white bg-warning px-2 py-1 text-xs font-bold mr-3'>
        Warning
      </span>
      <span className='inline-block rounded-md text-white bg-info px-2 py-1 text-xs font-bold mr-3'>
        Info
      </span>
      <span className='inline-block rounded-md text-gray-500 bg-light px-2 py-1 text-xs font-bold mr-3'>
        Light
      </span>
      <span className='inline-block rounded-md text-white bg-dark px-2 py-1 text-xs font-bold mr-3'>
        Dark
      </span>
    </div>
  );
};

const BadgePill = () => {
  return (
    <div>
      <span className='inline-block rounded-3xl text-white bg-primary px-2 py-1 text-xs font-bold mr-3'>
        Primary
      </span>
      <span className='inline-block rounded-3xl text-white bg-secondary px-2 py-1 text-xs font-bold mr-3'>
        Secondary
      </span>
      <span className='inline-block rounded-3xl text-white bg-success px-2 py-1 text-xs font-bold mr-3'>
        Success
      </span>
      <span className='inline-block rounded-3xl text-white bg-danger px-2 py-1 text-xs font-bold mr-3'>
        Danger
      </span>
      <span className='inline-block rounded-3xl text-white bg-warning px-2 py-1 text-xs font-bold mr-3'>
        Warning
      </span>
      <span className='inline-block rounded-3xl text-white bg-info px-2 py-1 text-xs font-bold mr-3'>
        Info
      </span>
      <span className='inline-block rounded-3xl text-gray-500 bg-light px-2 py-1 text-xs font-bold mr-3'>
        Light
      </span>
      <span className='inline-block rounded-3xl text-white bg-dark px-2 py-1 text-xs font-bold mr-3'>
        Dark
      </span>
    </div>
  );
};

const BadgeLink = () => {
  return (
    <div>
      <a
        href='#'
        className='inline-block rounded-md text-white hover:text-white hover:no-underline bg-primary px-2 py-1 text-xs font-bold mr-3'
      >
        Primary
      </a>
      <a
        href='#'
        className='inline-block rounded-md text-white hover:text-white hover:no-underline bg-secondary px-2 py-1 text-xs font-bold mr-3'
      >
        Secondary
      </a>
      <a
        href='#'
        className='inline-block rounded-md text-white hover:text-white hover:no-underline bg-success px-2 py-1 text-xs font-bold mr-3'
      >
        Success
      </a>
      <a
        href='#'
        className='inline-block rounded-md text-white hover:text-white hover:no-underline bg-danger px-2 py-1 text-xs font-bold mr-3'
      >
        Danger
      </a>
      <a
        href='#'
        className='inline-block rounded-md text-white hover:text-white hover:no-underline bg-warning px-2 py-1 text-xs font-bold mr-3'
      >
        Warning
      </a>
      <a
        href='#'
        className='inline-block rounded-md text-white hover:text-white hover:no-underline bg-info px-2 py-1 text-xs font-bold mr-3'
      >
        Info
      </a>
      <a
        href='#'
        className='inline-block rounded-md text-gray-500 hover:text-gray-500 hover:no-underline bg-light px-2 py-1 text-xs font-bold mr-3'
      >
        Light
      </a>
      <a
        href='#'
        className='inline-block rounded-md text-white hover:text-white hover:no-underline bg-dark px-2 py-1 text-xs font-bold mr-3'
      >
        Dark
      </a>
    </div>
  );
};

const BadgeIcon = () => {
  return (
    <div className='flex gap-0'>
      <span className='flex items-center w-fit rounded-md text-white bg-primary px-2 py-1 text-xs font-bold mr-3'>
        <span className='mr-1'>
          <StarIcon />
        </span>{' '}
        Primary
      </span>
      <span className='flex items-center w-fit rounded-md text-white bg-success px-2 py-1 text-xs font-bold mr-3'>
        <span className='mr-1'>
          <SuccessIcon />
        </span>{' '}
        Success
      </span>
      <span className='flex items-center w-fit rounded-md text-white bg-danger px-2 py-1 text-xs font-bold mr-3'>
        <span className='mr-1'>
          <DangerIcon />
        </span>{' '}
        Danger
      </span>
      <span className='flex items-center w-fit rounded-md text-white bg-warning px-2 py-1 text-xs font-bold mr-3'>
        <span className='mr-1'>
          <WarningIcon />
        </span>{' '}
        Warning
      </span>
    </div>
  );
};

export { BadgeBasic, BadgeRounded, BadgePill, BadgeLink, BadgeIcon };
