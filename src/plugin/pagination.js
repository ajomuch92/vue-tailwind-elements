module.exports = function (theme) {
  return {
    'a.page-link': {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: theme('borderRadius.DEFAULT'),
      borderWidth: theme('borderWidth.0'),
      backgroundColor: theme('colors.transparent'),
      outline: theme('outline.none'),
      transitionDuration: theme('transitionDuration.300'),
      transitionProperty: theme('transitionProperty.all'),
      userSelect: 'none',
      cursor: theme('cursor.pointer'),
      '.prev': {
        color: theme('colors.gray.800'),
        '&:hover': {
          color: theme('colors.gray.900'),
          backgroundColor: theme('colors.gray.200'),
        },
        '&:focus': {
          boxShadow: theme('boxShadow.none')
        }
      },
      '.next': {
        color: theme('colors.gray.800'),
        '&:hover': {
          color: theme('colors.gray.900'),
          backgroundColor: theme('colors.gray.200'),
        },
        '&:focus': {
          boxShadow: theme('boxShadow.none')
        }
      },
      '&:focus': {
        boxShadow: theme('boxShadow.none')
      },
      '&.active': {
        color: theme('colors.white'),
        backgroundColor: theme('colors.blue.500'),
      },
      '&.inactive': {
        color: theme('colors.gray.800'),
        '&:hover': {
          // color: theme('colors.gray.800'),
          backgroundColor: theme('colors.gray.200'),
        }
      },
      '&.small': {
        fontSize: theme('fontSize.sm'),
        width: theme('width.8'),
        height: theme('height.8')
      },
      '&.medium': {
        fontSize: theme('fontSize.base'),
        width: theme('width.10'),
        height: theme('height.10')
      },
      '&.large': {
        fontSize: theme('fontSize.xl'),
        width: theme('width.14'),
        height: theme('height.14')
      },
    }
  };
}