import { CSSProperties } from 'react';

import { createTheme } from '@mui/material/styles';

// Disable eslint as @mui does not follow same linting convention for interface suffixes.

/* eslint-disable */
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; // adds the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: false; // removes the `mobile` breakpoint
    tablet: false;
    laptop: false;
    desktop: false;
  }

  interface TypographyVariants {
    bodyBig: CSSProperties;
    bodyLarge: CSSProperties;
    bodyLargePopup: CSSProperties;
    bodyMedium: CSSProperties;
    bodyMediumPopup: CSSProperties;
    bodySmall: CSSProperties;
    bodySmallPopup: CSSProperties;
    bodySmallSB: CSSProperties;
    bodyTiny: CSSProperties;
    fourteen: CSSProperties;
    adornment: CSSProperties;
    cellSmall: CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    bodyBig?: CSSProperties;
    bodyLarge?: CSSProperties;
    bodyLargePopup?: CSSProperties;
    bodyMedium?: CSSProperties;
    bodyMediumPopup?: CSSProperties;
    bodySmall?: CSSProperties;
    bodySmallPopup?: CSSProperties;
    bodySmallSB?: CSSProperties;
    bodyTiny?: CSSProperties;
    fourteen?: CSSProperties;
    adornment?: CSSProperties;
    cellSmall?: CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    bodyBig: true;
    bodyLarge: true;
    bodyLargePopup: true;
    bodyMedium: true;
    bodyMediumPopup: true;
    bodySmall: true;
    bodySmallPopup: true;
    bodySmallSB: true;
    bodyTiny: true;
    fourteen: true;
    adornment: true;
    cellSmall: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    select: true;
    success: true;
    warning: true;
    action: true;
    link: true;
    buy: true;
    sell: true;
  }

  interface ButtonPropsSizeOverrides {
    small: true;
    tableSmall: true;
  }
}
/* eslint-enable */

const MuiButtonSharedStyle = {
  minWidth: '140px',
  transition: 'ease-in 125ms',
  borderRadius: '8px',
  padding: '10px 20px 8px',
  fontSize: '14px',
  fontWeight: 700,
};

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 968,
      lg: 1280,
      xl: 1650,
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    fontSize: 14,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          display: 'flex',
          justifyContent: 'center',
          height: '172px',
          border: 'none',
          boxShadow: 'none',
          backgroundColor: 'transparent',
          color: 'var(--d8x-color-text-main)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 400,
          whiteSpace: 'nowrap',
          border: 0,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'var(--d8x-color-text-main)',
          marginLeft: '48px',
          ':first-of-type': {
            marginLeft: '0',
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: '0 24px',
        },
        content: {
          margin: '32px 0',
          '&.Mui-expanded': {
            margin: '32px 0',
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '0 24px',
          margin: '32px 0',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          color: 'var(--d8x-color-action)',
          lineHeight: '1',
          padding: '7px 8px',
          whiteSpace: 'nowrap',
          borderColor: 'var(--d8x-color-action)',
          '&:hover': {
            borderColor: 'var(--d8x-color-action)',
            backgroundColor: 'var(--d8x-color-background-items-selected)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            ...MuiButtonSharedStyle,
            backgroundColor: 'var(--d8x-button-primary-background)',
            border: '1px solid var(--d8x-button-primary-border-color)',
            color: 'var(--d8x-button-primary-color)',
            fontSize: '14px',
            ':hover': {
              backgroundColor: 'var(--d8x-button-primary-background-hover)',
              color: 'var(--d8x-button-primary-color-hover)',
              borderColor: 'var(--d8x-button-primary-border-color-hover)',
            },
            ':disabled': {
              backgroundColor: 'var(--d8x-button-primary-background-disabled)',
              color: 'var(--d8x-button-primary-color-disabled)',
              borderColor: 'var(--d8x-button-primary-border-color-disabled)',
            },
          },
        },
        {
          props: { variant: 'secondary' },
          style: {
            ...MuiButtonSharedStyle,
            backgroundColor: 'var(--d8x-button-secondary-background)',
            border: '1px solid var(--d8x-button-secondary-border-color)',
            color: 'var(--d8x-button-secondary-color)',
            fontSize: '14px',
            ':hover': {
              backgroundColor: 'var(--d8x-button-secondary-background-hover)',
              borderColor: 'var(--d8x-button-secondary-border-color-hover)',
              color: 'var(--d8x-button-secondary-color-hover)',
            },
            ':disabled': {
              backgroundColor: 'var(--d8x-button-secondary-background-disabled)',
              borderColor: 'var(--d8x-button-secondary-border-color-disabled)',
              color: 'var(--d8x-button-secondary-color-disabled)',
            },
          },
        },
        {
          props: { variant: 'select' },
          style: {
            ...MuiButtonSharedStyle,
            backgroundColor: 'var(--d8x-button-select-background)',
            border: '1px solid var(--d8x-button-select-border-color)',
            color: 'var(--d8x-button-select-color)',
            fontSize: '12px',
            ':hover': {
              backgroundColor: 'var(--d8x-button-select-background-hover)',
              color: 'var(--d8x-button-select-color-hover)',
              borderColor: 'var(--d8x-button-select-border-color-hover)',
            },
            ':disabled': {
              backgroundColor: 'var(--d8x-button-select-background-disabled)',
              color: 'var(--d8x-button-select-color-disabled)',
              borderColor: 'var(--d8x-button-select-border-color-disabled)',
            },
          },
        },
        {
          props: { variant: 'success' },
          style: {
            ...MuiButtonSharedStyle,
            backgroundColor: 'var(--d8x-color-action)',
            border: 0,
            color: 'var(--d8x-color-text-secondary)',
            ':hover': {
              backgroundColor: 'var(--d8x-color-background-items-selected)',
            },
          },
        },
        {
          props: { variant: 'warning' },
          style: {
            ...MuiButtonSharedStyle,
            backgroundColor: 'var(--d8x-color-warning-main)',
            border: '1px solid var(--d8x-color-warning-secondary)',
            color: 'var(--d8x-color-text-warning)',
            ':hover': {
              backgroundColor: 'var(--d8x-color-warning-secondary)',
            },
          },
        },
        {
          props: { variant: 'action' },
          style: {
            ...MuiButtonSharedStyle,
            borderRadius: '8px',
            backgroundColor: 'rgba(var(--d8x-color-action-rgb), 0.1)',
            border: 0,
            color: 'var(--d8x-color-action)',
            ':hover': {
              backgroundColor: 'rgba(var(--d8x-color-action-rgb), 0.2)',
            },
          },
        },
        {
          props: { variant: 'buy' },
          style: {
            ...MuiButtonSharedStyle,
            backgroundColor: 'var(--d8x-color-background-buy)',
            color: 'var(--d8x-color-text-secondary)',
            fontWeight: '600',
            ':hover': {
              backgroundColor: 'var(--d8x-color-background-buy-hover)',
              color: 'var(--d8x-color-text-secondary)',
            },
            ':disabled': {
              backgroundColor: 'var(--d8x-color-background-buy-disabled)',
              color: 'var(--d8x-color-text-secondary)',
            },
          },
        },
        {
          props: { variant: 'sell' },
          style: {
            ...MuiButtonSharedStyle,
            backgroundColor: 'var(--d8x-color-background-sell)',
            color: 'var(--d8x-color-text-secondary)',
            fontWeight: '600',
            ':hover': {
              backgroundColor: 'var(--d8x-color-background-sell-hover)',
              color: 'var(--d8x-color-text-secondary)',
            },
            ':disabled': {
              backgroundColor: 'var(--d8x-color-background-sell-disabled)',
              color: 'var(--d8x-color-text-secondary)',
            },
          },
        },
        {
          props: { variant: 'link' },
          style: {
            ...MuiButtonSharedStyle,
            padding: '9px 8px 7px',
            fontWeight: 'normal',
            minWidth: '71px',
            maxHeight: '36px',
            border: 0,
            borderRadius: '8px',
            backgroundColor: 'transparent',
            color: 'var(--d8x-color-text-main)',
            ':hover': {
              backgroundColor: 'var(--d8x-button-primary-background)',
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            transition: 'ease-in 125ms',
            borderRadius: '8px',
            padding: '7px 8px',
            fontSize: '12px',
            backgroundColor: 'var(--d8x-button-outlined-background)',
            border: '1px solid var(--d8x-button-outlined-border-color)',
            color: 'var(--d8x-button-outlined-color)',
            '&:hover': {
              backgroundColor: 'var(--d8x-button-outlined-background-hover)',
              borderColor: 'var(--d8x-button-outlined-border-color-hover)',
              color: 'var(--d8x-button-outlined-color-hover)',
            },
            ':disabled': {
              backgroundColor: 'var(--d8x-button-outlined-background-disabled)',
              borderColor: 'var(--d8x-button-outlined-border-color-disabled)',
              color: 'var(--d8x-button-outlined-color-disabled)',
              opacity: '0.3',
            },
          },
        },
        {
          props: { size: 'small' },
          style: {
            ...MuiButtonSharedStyle,
            padding: '9px 40px 7px',
            fontSize: '14px',
            fontWeight: 'normal',
            minWidth: '50px',
          },
        },
        {
          props: { size: 'tableSmall' },
          style: {
            ...MuiButtonSharedStyle,
            padding: '2px 8px 0',
            fontSize: '12px',
            fontWeight: 'normal',
            minWidth: '50px',
            maxHeight: '20px',
          },
        },
      ],
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: '0 0 0 8px',
          color: 'var(--d8x-color-action-icon)',

          '.MuiSvgIcon-root': {
            width: '15px',
          },

          '&.Mui-checked': {
            color: 'var(--d8x-color-action-icon)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          border: 'none',
          justifyContent: 'space-between',
          width: '180px',
          ':hover': {
            backgroundColor: 'rgba(var(--d8x-color-action-rgb), 0.2)',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--d8x-color-border)',
            },
          },
          ':focus-within': {
            backgroundColor: 'rgba(var(--d8x-color-action-rgb), 0.2)',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--d8x-color-border)',
              borderWidth: '1px',
            },
          },
          '&.Mui-disabled': {
            borderColor: 'var(--d8x-color-border)',
            borderWidth: '0',
            borderStyle: 'solid',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--d8x-color-border)',
              borderWidth: '1px',
              opacity: '0.3',
            },
          },
        },
        input: {
          padding: '9px 10px 7px',
          width: 'auto',
          flex: 1,
          lineHeight: '1.5',
          border: 'none',
          fontSize: '12px',
          fontWeight: '500',
          color: 'var(--d8x-color-text-main)',
          '::placeholder': {
            paddingTop: '1px',
          },
          '&.Mui-disabled': {
            color: 'var(--d8x-color-text-main)',
            WebkitTextFillColor: 'var(--d8x-color-text-main)',
            '::placeholder': {
              color: 'var(--d8x-color-text-main)',
            },
          },
        },
        notchedOutline: {
          borderColor: 'var(--d8x-color-input-border)',
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          minWidth: '30px',
          color: 'var(--d8x-color-text-label-one)',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          backgroundColor: 'transparent',
          lineHeight: '1.5',
          minWidth: '180px',
          ':hover': {
            backgroundColor: 'transparent',
          },
          ':focus': {
            backgroundColor: 'transparent',
          },
          ':active': {
            backgroundColor: 'transparent',
          },
          ':before': {
            border: 'none !important',
          },
          ':after': {
            border: 'none !important',
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        input: {
          fontWeight: '500',
          lineHeight: '1.5',
          color: 'var(--d8x-color-text-main)',
          padding: '4px 4px 2px 4px !important',
          width: 'auto',
          border: 'none',
          fontSize: '16px',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: '12px',
          lineHeight: '16px',
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          padding: '14px 0 !important',
        },
        thumb: {
          color: 'var(--d8x-color-action)',
        },
        track: {
          color: 'var(--d8x-color-action)',
        },
        rail: {
          color: 'var(--d8x-color-action)',
        },
        markLabel: {
          fontSize: '12px',
          lineHeight: '16px',
          color: 'var(--d8x-color-text-label-one)',
          top: '36px !important',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          color: 'var(--d8x-color-text-main)',
          boxShadow: 'none',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--d8x-color-background-card-content)',
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          color: 'var(--d8x-color-text-main)',
        },
        selectIcon: {
          color: 'var(--d8x-color-text-main)',
          top: 0,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          color: 'var(--d8x-modal-text-color)',
          backgroundColor: 'var(--d8x-modal-background-color)',
          border: '1px solid var(--d8x-block-border-color)',
          borderRadius: '16px',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '16px',
          lineHeight: '20px',
          fontWeight: '500',
          textAlign: 'left',
          padding: '16px 16px 12px 16px',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px 32px 48px 32px',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '16px',
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        colorPrimary: {
          color: 'var(--d8x-color-action)',
        },
      },
    },
  },
});

// Define MuiContainer responsive styles

if (theme.components?.MuiContainer?.styleOverrides?.root) {
  theme.components.MuiContainer.styleOverrides.root = {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '16px !important',
      paddingRight: '16px !important',
    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: '32px !important',
      paddingRight: '32px !important',
      maxWidth: '100%',
    },
  };
}

// The following typography configs are taken from Figma styleguide
// The sm breakpoint handles mobile screen sizes

theme.typography.h1 = {
  fontSize: 120,
  fontWeight: 600,
  lineHeight: '145px',
  [theme.breakpoints.down('sm')]: {
    fontSize: 34,
    lineHeight: '41px',
  },
};

theme.typography.h2 = {
  fontSize: 90,
  fontWeight: 600,
  lineHeight: '109px',
  [theme.breakpoints.down('sm')]: {
    fontSize: 28,
    lineHeight: '34px',
  },
};

theme.typography.h3 = {
  fontSize: 48,
  fontWeight: 600,
  lineHeight: '58px',
  [theme.breakpoints.down('sm')]: {
    fontSize: 22,
    lineHeight: '27px',
  },
};

theme.typography.h4 = {
  fontSize: 32,
  fontWeight: 600,
  lineHeight: '38px',
  [theme.breakpoints.down('sm')]: {
    fontSize: 20,
    lineHeight: '24px',
  },
};

theme.typography.h5 = {
  fontSize: 24,
  fontWeight: 600,
  lineHeight: '30px',
  [theme.breakpoints.down('sm')]: {
    fontSize: 18,
    lineHeight: '24px',
  },
};

theme.typography.bodyBig = {
  fontSize: 24,
  fontWeight: 400,
  lineHeight: '77px',
  [theme.breakpoints.down('sm')]: {
    fontSize: 24,
    lineHeight: '31px',
  },
};

theme.typography.bodyLarge = {
  fontSize: 20,
  fontWeight: 400,
  lineHeight: '24px',
  [theme.breakpoints.down('sm')]: {
    fontSize: 20,
    lineHeight: '24px',
  },
};

theme.typography.bodyLargePopup = {
  fontSize: 18,
  fontWeight: 400,
  lineHeight: '24px',
  [theme.breakpoints.down('sm')]: {
    fontSize: 12,
    lineHeight: '16px',
  },
};

theme.typography.bodyMedium = {
  fontSize: 16,
  fontWeight: 400,
  lineHeight: '24px',
  [theme.breakpoints.down('sm')]: {
    fontSize: 12,
    lineHeight: '20px',
  },
};

theme.typography.bodySmall = {
  fontSize: 12,
  fontWeight: 400,
  lineHeight: '20px',
};

theme.typography.bodySmallPopup = {
  fontSize: 12,
  fontWeight: 400,
  lineHeight: '20px',
  [theme.breakpoints.down('sm')]: {
    fontSize: 10,
    lineHeight: '12px',
  },
};

theme.typography.bodySmallSB = {
  fontSize: 12,
  fontWeight: 600,
  lineHeight: '20px',
  [theme.breakpoints.down('sm')]: {
    fontSize: 10,
    lineHeight: '12px',
  },
};

theme.typography.bodyTiny = {
  fontSize: 12,
  fontWeight: 400,
  lineHeight: '16px',
};

theme.typography.fourteen = {
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '20px',
};

theme.typography.adornment = {
  fontSize: 12,
  fontWeight: 400,
  lineHeight: '16px',
};

theme.typography.cellSmall = {
  fontSize: 10,
  fontWeight: 400,
  lineHeight: '16px',
  [theme.breakpoints.down('sm')]: {
    fontSize: 12,
    lineHeight: '16px',
  },
};
