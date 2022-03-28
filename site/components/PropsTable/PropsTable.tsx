/* eslint-disable no-extra-boolean-cast */
/* eslint-disable sort-destructure-keys/sort-destructure-keys */
/* eslint-disable react/jsx-sort-props */
import { Code } from 'components/Code/Code';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'components/Popover/Popover';
import { vars } from 'css/vars.css';
import React from 'react';
import { regionWrapper, table, td, th } from './PropsTable.css';

type PropDef = {
  name: string;
  required?: boolean;
  default?: string | boolean;
  type: string;
  typeSimple: string;
  description?: string;
};

export function PropsTable({
  data,
  'aria-label': ariaLabel,
}: {
  'data': PropDef[];
  'aria-label'?: string;
}) {
  return (
    <div
      className={regionWrapper}
      role="region"
      aria-label={ariaLabel}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
    >
      <table className={table}>
        <thead>
          <tr>
            <th className={th}>Prop</th>
            <th className={th}>Type</th>
            <th className={th}>Default</th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            (
              {
                name,
                type,
                typeSimple,
                required,
                default: defaultValue,
                description,
              },
              i
            ) => (
              <tr key={`${name}-${i}`}>
                <td className={td}>
                  <Code>
                    {name}
                    {required ? '*' : null}
                  </Code>
                  {description && (
                    <Popover>
                      <PopoverTrigger style={{ marginLeft: vars.space[3] }}>
                        <InfoIcon />
                      </PopoverTrigger>
                      <PopoverContent>{description}</PopoverContent>
                    </Popover>
                  )}
                </td>
                <td className={td}>
                  <Code>{Boolean(typeSimple) ? typeSimple : type} </Code>
                  {Boolean(typeSimple) && (
                    <Popover>
                      <PopoverTrigger style={{ marginLeft: vars.space[3] }}>
                        <InfoIcon />
                      </PopoverTrigger>
                      <PopoverContent>
                        <Code style={{ whiteSpace: 'normal' }}>{type}</Code>
                      </PopoverContent>
                    </Popover>
                  )}
                </td>
                <td className={td}>
                  {Boolean(defaultValue) ? <Code>{defaultValue}</Code> : <>–</>}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

const InfoIcon = () => (
  <svg
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    style={{
      color: vars.colors.blue,
      verticalAlign: 'middle',
    }}
  >
    <path
      d="M8.991 0C13.926 0 18 4.072 18 9.004 18 13.937 13.935 18 9 18s-9-4.063-9-8.996C0 4.072 4.056 0 8.991 0zm.285 7.463H7.622c-.413 0-.74.31-.74.706 0 .43.327.723.74.723h.835v3.306h-.99a.724.724 0 00-.74.714c0 .422.327.724.74.724h3.48c.413 0 .74-.302.74-.724a.724.724 0 00-.74-.714h-.862V8.385c0-.56-.284-.922-.81-.922zm-.31-3.71c-.664 0-1.215.543-1.215 1.231 0 .663.551 1.223 1.215 1.223.68 0 1.223-.56 1.223-1.223 0-.688-.543-1.23-1.223-1.23z"
      fill="currentColor"
      fillRule="nonzero"
    />
  </svg>
);