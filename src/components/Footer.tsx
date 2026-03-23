import { Divider, Link, Stack, Typography } from '@mui/material';
import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <Stack alignItems={'center'} bgcolor={'beige'} px={10} py={2} width={'100%'}>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        maxWidth={'lg'}
        p={2}
        width={'100%'}
      >
        <Stack direction="row" gap={12}>
          <Stack>
            <Typography variant="h6">Useful links</Typography>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Contact</Link>
          </Stack>
          <Stack>
            <Typography variant="h6">Rights</Typography>
            <Link>Pricing</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms of Service</Link>
          </Stack>
        </Stack>
        <Stack>
          <Typography variant="h6">Stay tuned for my new releases!</Typography>
          <Link>Site</Link>
          <Link>Linkedin</Link>
          <Link>X/Twitter</Link>
        </Stack>
      </Stack>
      <Divider sx={{ py: 1, width: '100%' }} />
      <Stack alignSelf={'start'} p={2}>
        <Typography>© {new Date().getFullYear()} Felipe Casalecchi. All Rights Reserved</Typography>
      </Stack>
    </Stack>
  );
};
