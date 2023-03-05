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
  return {
    ...file,
  };
}