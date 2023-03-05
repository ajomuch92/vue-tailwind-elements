module.exports = function (theme) {
  const file = {
    'input.file-control': {
      display: 'block',
      fontWeight: theme('fontWeight.normal'),
      color: theme('colors.gray.700'),
      backgroundColor: theme('colors.white'),
      backgroundClip: 'padding-box',
      borderWidth: theme('borderWidth.DEFAULT'),
      borderStyle: 'solid',
      borderColor: theme('colors.gray.300'),
      borderRadius: theme('borderRadius.DEFAULT'),
      transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),
      transitionDuration: theme('transitionDuration.150'),
      transitionProperty: theme('transitionProperty.DEFAULT'),
      margin: theme('margin.0'),
      '&:focus': {
        color: theme('colors.gray.700'),
        backgroundColor: theme('colors.white'),
        borderColor: theme('colors.blue.600'),
        outline: theme('outline.none'),
      },
      '&.small': {
        padding: `${theme('padding.1')} ${theme('padding.2')}`,
        fontSize: theme('fontSize.sm'),
      },
      '&.medium': {
        padding: `${theme('padding[1.5]')} ${theme('padding.3')}`,
        fontSize: theme('fontSize.base'),
      },
      '&.large': {
        padding: `${theme('padding[1.5]')} ${theme('padding.2')}`,
        fontSize: theme('fontSize.xl'),
      },
    }
  };
  const select = {
    'select.form-select': {
      minWidth: '150px',
      appearance: 'none',
      display: 'block',
      fontWeight: theme('fontWeight.normal'),
      color: theme('colors.gray.700'),
      backgroundColor: theme('colors.white'),
      backgroundClip: 'padding-box',
      backgroundRepeat: 'no-repeat',
      borderWidth: theme('borderWidth.DEFAULT'),
      borderStyle: 'solid',
      borderColor: theme('colors.gray.300'),
      borderRadius: theme('borderRadius.DEFAULT'),
      transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),
      transitionDuration: theme('transitionDuration.150'),
      transitionProperty: theme('transitionProperty.DEFAULT'),
      margin: theme('margin.0'),
      '&:focus': {
        color: theme('colors.gray.700'),
        backgroundColor: theme('colors.white'),
        borderColor: theme('colors.blue.600'),
        outline: theme('outline.none'),
      },
      '&.small': {
        padding: `${theme('padding.1')} ${theme('padding.2')}`,
        fontSize: theme('fontSize.sm'),
      },
      '&.medium': {
        padding: `${theme('padding[1.5]')} ${theme('padding.3')}`,
        fontSize: theme('fontSize.base'),
      },
      '&.large': {
        padding: `${theme('padding.2')} ${theme('padding.4')}`,
        fontSize: theme('fontSize.xl'),
      },
    }
  };
  const range = {
    'input.form-range': {
      appearance: 'none',
      display: 'block',
      width: theme('width.full'),
      height: theme('height.6'),
      padding: theme('padding.0'),
      backgroundColor: theme('colors.transparent'),
      '&:focus': {
        boxShadow: theme('boxShadow.none'),
        outline: theme('outline.none'),
      },
    }
  };
  const check = {
    'input[type="checkbox"].form-check-input': {
      appearance: 'none',
      width: theme('width.9'),
      marginLeft: theme('marging[-10]'),
      borderRadius: theme('borderRadius.full'),
      float: 'left',
      height: theme('height.5'),
      verticalAlign: 'top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundColor: theme('colors.gray.300'),
      cursor: theme('cursor.pointer'),
      boxShadow: theme('boxShadow.sm'),
      '&:focus': {
        outline: theme('outline.none'),
      },
    }
  };
  const radio = {
    'input[type="radio"].form-check-input': {
      appearance: 'none',
      borderRadius: theme('borderRadius.full'),
      width: theme('width.4'),
      height: theme('height.4'),
      borderWidth: theme('borderWidth.DEFAULT'),
      borderStyle: 'solid',
      borderColor: theme('colors.gray.300'),
      borderRadius: theme('borderRadius.full'),
      backgroundColor: theme('colors.white'),
      transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),
      transitionDuration: theme('transitionDuration.200'),
      transitionProperty: theme('transitionProperty.DEFAULT'),
      marginTop: theme('margin.1'),
      verticalAlign: 'top',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      float: 'left',
      marginRight: theme('margin.2'),
      cursor: theme('cursor.pointer'),
      '&:checked': {
        backgroundColor: theme('colors.blue.500'),
        outline: theme('outline.none'),
      },
    }
  };
  const textarea = {
    'textarea.form-control': {
      display: 'block',
      width: theme('width.full'),
      padding: `${theme('padding[1.5]')} ${theme('padding.3')}`,
      fontSize: theme('fontSize.base'),
      fontWeight: theme('fontWeight.normal'),
      color: theme('colors.gray.700'),
      backgroundColor: theme('colors.white'),
      backgroundClip: 'padding-box',
      borderWidth: theme('borderWidth.DEFAULT'),
      borderStyle: 'solid',
      borderColor: theme('colors.gray.300'),
      borderRadius: theme('borderRadius.DEFAULT'),
      transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),
      transitionDuration: theme('transitionDuration.150'),
      transitionProperty: theme('transitionProperty.DEFAULT'),
      margin: theme('margin.0'),
      '&:focus': {
        color: theme('colors.gray.700'),
        backgroundColor: theme('colors.white'),
        borderColor: theme('colors.blue.600'),
        outline: theme('outline.none'),
      },
    }
  };
  return {
    ...file,
    ...select,
    ...range,
    ...check,
    ...radio,
    ...textarea
  };
}