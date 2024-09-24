import { Box, Stack, Typography } from '@mui/material';
import { IPost } from 'src/interfaces/post/post';
import { formatDistanceToNowStrict } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { muiResponsiveValues } from 'src/utils';
import { CustomCard } from './styles';

type Props = {
  post: IPost;
};

export function Post({ post }: Readonly<Props>) {
  const { author, title, description, createdAt } = post;

  const publishedDateRealiteToNow = formatDistanceToNowStrict(createdAt, {
    locale: ptBR as Pick<any, any>,
    addSuffix: true,
  });

  return (
    <Box minWidth={muiResponsiveValues('80%', '30rem')} height="auto">
      <CustomCard>
        <Stack gap={1}>
          <Stack direction="row" justifyContent="space-between" gap={3}>
            <Box>
              <Typography variant="body1">{author}</Typography>
            </Box>
            <Box textAlign="end">{publishedDateRealiteToNow}</Box>
          </Stack>
          <Box>
            <Typography variant="h6">{title}</Typography>
          </Box>
          <Typography variant="button" fontWeight={700}>
            {description}
          </Typography>
        </Stack>
      </CustomCard>
    </Box>
  );
}
