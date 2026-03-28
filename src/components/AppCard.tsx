import { Box, Button, Typography } from '@mui/material';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import type { AppMetadata } from '../data/apps';

interface AppCardProps {
  app: AppMetadata;
}

export const AppCard: FC<AppCardProps> = ({ app }) => {
  const { t } = useTranslation();

  return (
    <Box
      component="a"
      href="https://apps.apple.com/" // Redirecionamento fake para AppStore (substituir depois pelo real se app tiver link)
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2, // Espaçamento proporção AppStore
        p: 2,
        borderRadius: 4,
        textDecoration: 'none',
        bgcolor: 'transparent',
        border: '1px solid transparent',
        transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        cursor: 'pointer',
        width: '100%',
        maxWidth: 480,
        margin: '0 auto',
        '&:hover': {
          border: '1px solid rgba(255, 255, 255, 0.15)',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
        },
      }}
    >
      {/* Ícone AppStore (64x64 na maioria das views de lista) */}
      <Box
        component="img"
        alt={`${app.name} icon`}
        src={app.screenshot} // Logo do App
        sx={{
          width: 64,
          height: 64,
          flexShrink: 0,
          borderRadius: '22.5%', // Squircle Apple
          objectFit: 'cover',
          background: '#ffffff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
        }}
      />

      {/* Título e Subtítulo Alinhados à Esquerda */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', pr: 1, minWidth: 0 }}>
        <Typography
          color="text.primary"
          sx={{
            fontWeight: 600,
            fontSize: '1rem',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            mb: 0.5,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {t(`apps.${app.slug}.name`, app.name)}
        </Typography>
        <Typography
          color="text.secondary"
          sx={{
            fontSize: '0.8125rem', // ~13px padrão secundário
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {t(`apps.${app.slug}.tagline`, app.tagline)}
        </Typography>
      </Box>

      {/* Botão de Download */}
      <Button
        component="span" // Evita tag aninhada (pois o Box é uma tag <a>)
        variant="contained"
        sx={{
          flexShrink: 0,
          borderRadius: 50, // Formato "Pílula" App Store
          textTransform: 'uppercase',
          fontWeight: 800,
          fontSize: '0.8rem',
          py: 0.5,
          px: 2,
          minWidth: 70,
          backgroundColor: 'rgba(255,255,255,0.1)',
          color: 'primary.main',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.2)',
            boxShadow: 'none',
          }
        }}
      >
        {t('appCard.download', 'Obter')}
      </Button>
    </Box>
  );
};
