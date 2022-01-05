import { styled } from '../stitches.config';

export const SButton = styled('button', {
  backgroundColor: '$green500',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
});
