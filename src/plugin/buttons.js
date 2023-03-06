module.exports =  function buttons(theme) {
  return {
    '.btn': {
      fontWeight: theme('fontWeight.bold'),
      outline: theme('outline.none'),
      transitionTimingFunction: theme('transitionTimingFunction.linear'),
      transitionDuration: theme('transitionDuration.150'),
      transitionProperty: theme('transitionProperty.all'),
      '&:disabled': {
        opacity: theme('opacity.50')
      },
      '&:focus': {
        outline: theme('outline.none')
      },
      '&.normal': {
        backgroundColor: theme('colors.gray.500'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.gray.700'),
        },
        '&:active': {
          backgroundColor: theme('colors.gray.800'),
        },
        '&.only-text': {
          backgroundColor: theme('colors.transparent'),
          color: theme('colors.gray.500'),
          '&:hover': {
            backgroundColor: theme('colors.gray.100')
          }
        },
        '&.outlined': {
          backgroundColor: theme('colors.transparent'),
          borderWidth: theme('borderWidth.DEFAULT'),
          borderColor: theme('colors.gray.500'),
          color: theme('colors.gray.500'),
          '&:hover': {
            backgroundColor: theme('colors.gray.500'),
            color: theme('colors.white')
          }
        }
      },
      '&.secondary': {
        backgroundColor: theme('colors.indigo.500'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.indigo.700'),
        },
        '&:active': {
          backgroundColor: theme('colors.indigo.800'),
        },
        '&.only-text': {
          backgroundColor: theme('colors.transparent'),
          color: theme('colors.indigo.500'),
          '&:hover': {
            backgroundColor: theme('colors.gray.100')
          }
        },
        '&.outlined': {
          backgroundColor: theme('colors.transparent'),
          borderWidth: theme('borderWidth.DEFAULT'),
          borderColor: theme('colors.indigo.500'),
          color: theme('colors.indigo.500'),
          '&:hover': {
            backgroundColor: theme('colors.indigo.500'),
            color: theme('colors.white')
          }
        }
      },
      '&.success': {
        backgroundColor: theme('colors.green.500'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.green.700'),
        },
        '&:active': {
          backgroundColor: theme('colors.green.800'),
        },
        '&.only-text': {
          backgroundColor: theme('colors.transparent'),
          color: theme('colors.green.500'),
          '&:hover': {
            backgroundColor: theme('colors.gray.100')
          }
        },
        '&.outlined': {
          backgroundColor: theme('colors.transparent'),
          borderWidth: theme('borderWidth.DEFAULT'),
          borderColor: theme('colors.green.500'),
          color: theme('colors.green.500'),
          '&:hover': {
            backgroundColor: theme('colors.green.500'),
            color: theme('colors.white')
          }
        }
      },
      '&.primary': {
        backgroundColor: theme('colors.blue.500'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.blue.700'),
        },
        '&:active': {
          backgroundColor: theme('colors.blue.800'),
        },
        '&.only-text': {
          backgroundColor: theme('colors.transparent'),
          color: theme('colors.blue.500'),
          '&:hover': {
            backgroundColor: theme('colors.gray.100')
          }
        },
        '&.outlined': {
          backgroundColor: theme('colors.transparent'),
          borderWidth: theme('borderWidth.DEFAULT'),
          borderColor: theme('colors.blue.500'),
          color: theme('colors.blue.500'),
          '&:hover': {
            backgroundColor: theme('colors.blue.500'),
            color: theme('colors.white')
          }
        }
      },
      '&.warning': {
        backgroundColor: theme('colors.yellow.500'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.yellow.700'),
        },
        '&:active': {
          backgroundColor: theme('colors.yellow.800'),
        },
        '&.only-text': {
          backgroundColor: theme('colors.transparent'),
          color: theme('colors.yellow.500'),
          '&:hover': {
            backgroundColor: theme('colors.gray.100')
          }
        },
        '&.outlined': {
          backgroundColor: theme('colors.transparent'),
          borderWidth: theme('borderWidth.DEFAULT'),
          borderColor: theme('colors.yellow.500'),
          color: theme('colors.yellow.500'),
          '&:hover': {
            backgroundColor: theme('colors.yellow.500'),
            color: theme('colors.white')
          }
        }
      },
      '&.danger': {
        backgroundColor: theme('colors.red.500'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.red.700'),
        },
        '&:active': {
          backgroundColor: theme('colors.red.800'),
        },
        '&.only-text': {
          backgroundColor: theme('colors.transparent'),
          color: theme('colors.red.500'),
          '&:hover': {
            backgroundColor: theme('colors.gray.100')
          }
        },
        '&.outlined': {
          backgroundColor: theme('colors.transparent'),
          borderWidth: theme('borderWidth.DEFAULT'),
          borderColor: theme('colors.red.500'),
          color: theme('colors.red.500'),
          '&:hover': {
            backgroundColor: theme('colors.red.500'),
            color: theme('colors.white')
          }
        }
      },
      '&.purple': {
        backgroundColor: theme('colors.purple.500'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.purple.700'),
        },
        '&:active': {
          backgroundColor: theme('colors.purple.800'),
        },
        '&.only-text': {
          backgroundColor: theme('colors.transparent'),
          color: theme('colors.purple.500'),
          '&:hover': {
            backgroundColor: theme('colors.gray.100')
          }
        },
        '&.outlined': {
          backgroundColor: theme('colors.transparent'),
          borderWidth: theme('borderWidth.DEFAULT'),
          borderColor: theme('colors.purple.500'),
          color: theme('colors.purple.500'),
          '&:hover': {
            backgroundColor: theme('colors.purple.500'),
            color: theme('colors.white')
          }
        }
      },
      '&.pink': {
        backgroundColor: theme('colors.pink.500'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.pink.700'),
        },
        '&:active': {
          backgroundColor: theme('colors.pink.800'),
        },
        '&.only-text': {
          backgroundColor: theme('colors.transparent'),
          color: theme('colors.pink.500'),
          '&:hover': {
            backgroundColor: theme('colors.gray.100')
          }
        },
        '&.outlined': {
          backgroundColor: theme('colors.transparent'),
          borderWidth: theme('borderWidth.DEFAULT'),
          borderColor: theme('colors.pink.500'),
          color: theme('colors.pink.500'),
          '&:hover': {
            backgroundColor: theme('colors.pink.500'),
            color: theme('colors.white')
          }
        }
      },
      '&.dark': {
        backgroundColor: theme('colors.gray.800'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.gray.900'),
        },
        '&:active': {
          backgroundColor: theme('colors.black'),
        },
        '&.only-text': {
          backgroundColor: theme('colors.transparent'),
          color: theme('colors.gray.800'),
          '&:hover': {
            backgroundColor: theme('colors.gray.100')
          }
        },
        '&.outlined': {
          backgroundColor: theme('colors.transparent'),
          borderWidth: theme('borderWidth.DEFAULT'),
          borderColor: theme('colors.gray.800'),
          color: theme('colors.gray.800'),
          '&:hover': {
            backgroundColor: theme('colors.gray.800'),
            color: theme('colors.white')
          }
        }
      },
      '&.light': {
        backgroundColor: theme('colors.gray.200'),
        color: theme('colors.black'),
        '&:hover': {
          backgroundColor: theme('colors.gray.300'),
        },
        '&:active': {
          backgroundColor: theme('colors.gray.400'),
        },
        '&.only-text': {
          backgroundColor: theme('colors.transparent'),
          color: theme('colors.gray.200'),
          '&:hover': {
            backgroundColor: theme('colors.gray.100')
          }
        },
        '&.outlined': {
          backgroundColor: theme('colors.transparent'),
          borderWidth: theme('borderWidth.DEFAULT'),
          borderColor: theme('colors.gray.200'),
          color: theme('colors.gray.200'),
          '&:hover': {
            backgroundColor: theme('colors.gray.200'),
            color: theme('colors.black')
          }
        }
      },
      '&.small': {
        fontSize: theme('fontSize.xs'),
        padding: `${theme('padding.1')} ${theme('padding.4')}`,
        height: theme('height.8'),
        '&.icon': {
          paddingRight: theme('padding.1'),
          paddingLeft: theme('padding.1'),
          width: theme('width.8')
        }
      },
      '&.medium': {
        fontSize: theme('fontSize.sm'),
        padding: `${theme('padding.2')} ${theme('padding.6')}`,
        height: theme('height.10'),
        '&.icon': {
          paddingRight: theme('padding.2'),
          paddingLeft: theme('padding.2'),
          width: theme('width.10')
        }
      },
      '&.large': {
        fontSize: theme('fontSize.base'),
        padding: `${theme('padding.3')} ${theme('padding.8')}`,
        height: theme('height.12'),
        '&.icon': {
          paddingRight: theme('padding.3'),
          paddingLeft: theme('padding.3'),
          width: theme('width.12')
        }
      },
    },
  };
}
