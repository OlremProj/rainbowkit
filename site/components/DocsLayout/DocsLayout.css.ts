/* eslint-disable sort-keys-fix/sort-keys-fix */
import { style } from '@vanilla-extract/css';
import { link } from 'components/Link/Link.css';
import { responsiveStyle } from 'css/responsiveStyle';
import { vars } from 'css/vars.css';

export const master = style([
  {
    paddingLeft: vars.space[6],
    paddingRight: vars.space[6],
  },
  responsiveStyle({
    lg: {
      bottom: 0,
      left: 'calc(50% - 512px)',
      paddingRight: 0,
      position: 'fixed',
      top: 120,
      width: 250,
    },
  }),
]);

export const detail = style([
  {
    paddingBottom: 80,

    paddingTop: 60,
  },
  responsiveStyle({
    lg: {
      paddingLeft: 250,
    },
  }),
]);

export const pagination = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: vars.space[11],
  paddingTop: vars.space[8],
  borderTop: `1px solid ${vars.colors.separator}`,
});

export const paginationItem = style([
  link,
  {
    display: 'inline-flex',
    alignItems: 'center',
    gap: vars.space[3],
  },
]);