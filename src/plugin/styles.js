const styles = {
  ":root": {
      "--bs-blue": "#0d6efd",
      "--bs-indigo": "#6610f2",
      "--bs-purple": "#6f42c1",
      "--bs-pink": "#d63384",
      "--bs-red": "#dc3545",
      "--bs-orange": "#fd7e14",
      "--bs-yellow": "#ffc107",
      "--bs-green": "#198754",
      "--bs-teal": "#20c997",
      "--bs-cyan": "#0dcaf0",
      "--bs-white": "#fff",
      "--bs-gray": "#6c757d",
      "--bs-gray-dark": "#343a40",
      "--bs-gray-100": "#f8f9fa",
      "--bs-gray-200": "#e9ecef",
      "--bs-gray-300": "#dee2e6",
      "--bs-gray-400": "#ced4da",
      "--bs-gray-500": "#adb5bd",
      "--bs-gray-600": "#6c757d",
      "--bs-gray-700": "#495057",
      "--bs-gray-800": "#343a40",
      "--bs-gray-900": "#212529",
      "--bs-primary": "#0d6efd",
      "--bs-secondary": "#6c757d",
      "--bs-success": "#198754",
      "--bs-info": "#0dcaf0",
      "--bs-warning": "#ffc107",
      "--bs-danger": "#dc3545",
      "--bs-light": "#f8f9fa",
      "--bs-dark": "#212529",
      "--bs-primary-rgb": "13, 110, 253",
      "--bs-secondary-rgb": "108, 117, 125",
      "--bs-success-rgb": "25, 135, 84",
      "--bs-info-rgb": "13, 202, 240",
      "--bs-warning-rgb": "255, 193, 7",
      "--bs-danger-rgb": "220, 53, 69",
      "--bs-light-rgb": "248, 249, 250",
      "--bs-dark-rgb": "33, 37, 41",
      "--bs-white-rgb": "255, 255, 255",
      "--bs-black-rgb": "0, 0, 0",
      "--bs-body-color-rgb": "33, 37, 41",
      "--bs-body-bg-rgb": "255, 255, 255",
      "--bs-font-sans-serif": "system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
      "--bs-font-monospace": "SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
      "--bs-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))",
      "--bs-body-font-family": "var(--bs-font-sans-serif)",
      "--bs-body-font-size": "1rem",
      "--bs-body-font-weight": "400",
      "--bs-body-line-height": "1.5",
      "--bs-body-color": "#212529",
      "--bs-body-bg": "#fff"
  },
  ".form-control[type=file]": {
      "overflow": "hidden"
  },
  ".form-control[type=file]:not(:disabled):not([readonly])": {
      "cursor": "pointer"
  },
  ".form-control:focus": {
      "box-shadow": "0 0 0 1px rgb(37, 99, 235)"
  },
  ".form-control::file-selector-button": {
      "padding": "0.375rem 0.75rem",
      "margin": "-0.375rem -0.75rem",
      "margin-inline-end": "0.75rem",
      "color": "#212529",
      "background-color": "#e9ecef",
      "pointer-events": "none",
      "border-color": "inherit",
      "border-style": "solid",
      "border-width": "0",
      "border-inline-end-width": "1px",
      "border-radius": "0",
      "-webkit-transition": "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
      "transition": "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out"
  },
  ".form-control:hover:not(:disabled):not([readonly])::file-selector-button": {
      "background-color": "#dde0e3"
  },
  ".form-control::-webkit-file-upload-button": {
      "padding": "0.375rem 0.75rem",
      "margin": "-0.375rem -0.75rem",
      "margin-inline-end": "0.75rem",
      "color": "rgb(55, 65, 81)",
      "background-color": "rgb(243, 244, 246)",
      "pointer-events": "none",
      "border-color": "inherit",
      "border-style": "solid",
      "border-width": "0",
      "border-inline-end-width": "1px",
      "border-radius": "0",
      "-webkit-transition": "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
      "transition": "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out"
  },
  ".form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button": {
      "background-color": "#dde0e3"
  },
  ".form-select": {
      "-moz-padding-start": "calc(0.75rem - 3px)",
      "background-image": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\")",
      "background-position": "right 0.75rem center",
      "background-size": "16px 12px"
  },
  ".form-select:focus": {
      "box-shadow": "0 0 0 1px rgb(37, 99, 235)"
  },
  ".form-select[multiple]": {
      "padding-right": "0.75rem",
      "background-image": "none"
  },
  ".form-select[size]:not([size=\"1\"])": {
      "padding-right": "0.75rem",
      "background-image": "none"
  },
  ".form-select:disabled": {
      "background-color": "#e9ecef"
  },
  ".form-select:-moz-focusring": {
      "color": "transparent",
      "-webkit-text-shadow": "0 0 0 #212529",
      "text-shadow": "0 0 0 #212529"
  },
  ".form-check-input:checked": {
      "background-color": "#0d6efd",
      "border-color": "#0d6efd"
  },
  ".form-check-input:checked[type=checkbox]": {
      "background-image": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e\")"
  },
  ".form-check-input:checked[type=radio]": {
      "background-image": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")"
  },
  ".form-check-input[type=checkbox]:indeterminate": {
      "background-color": "#0d6efd",
      "border-color": "#0d6efd",
      "background-image": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\")"
  },
  ".form-check-input:disabled": {
      "pointer-events": "none",
      "filter": "none",
      "opacity": "0.5"
  },
  ".form-switch": {
      "padding-left": "2.5em"
  },
  ".form-switch .form-check-input": {
      "margin-top": "0.1rem",
      "background-image": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
      "background-position": "left center",
      "-webkit-transition": "background-position 0.15s ease-in-out",
      "transition": "background-position 0.15s ease-in-out"
  },
  ".form-switch .form-check-input:focus": {
      "background-image": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")"
  },
  ".form-switch .form-check-input:checked": {
      "background-position": "right center",
      "background-image": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")"
  },
  ".form-check-inline": {
      "display": "inline-block",
      "margin-right": "1rem"
  },
  ".btn-check": {
      "position": "absolute",
      "clip": "rect(0, 0, 0, 0)",
      "pointer-events": "none"
  },
  ".btn-check[disabled] + .btn": {
      "pointer-events": "none",
      "filter": "none",
      "opacity": "0.65"
  },
  ".btn-check:disabled + .btn": {
      "pointer-events": "none",
      "filter": "none",
      "opacity": "0.65"
  },
  ".form-range:focus::-webkit-slider-thumb": {
      "box-shadow": "none"
  },
  ".form-range:focus::-moz-range-thumb": {
      "box-shadow": "none"
  },
  ".form-range::-moz-focus-outer": {
      "border": "0"
  },
  ".form-range::-webkit-slider-thumb": {
      "width": "1rem",
      "height": "1rem",
      "margin-top": "-0.25rem",
      "background-color": "#0d6efd",
      "border": "0",
      "border-radius": "1rem",
      "-webkit-transition": "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
      "transition": "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
      "-webkit-appearance": "none",
      "-moz-appearance": "none",
      "appearance": "none"
  },
  ".form-range::-webkit-slider-thumb:active": {
      "background-color": "#b6d4fe"
  },
  ".form-range::-webkit-slider-runnable-track": {
      "width": "100%",
      "height": "0.5rem",
      "color": "transparent",
      "cursor": "pointer",
      "background-color": "#dee2e6",
      "border-color": "transparent",
      "border-radius": "1rem"
  },
  ".form-range::-moz-range-thumb": {
      "width": "1rem",
      "height": "1rem",
      "background-color": "#0d6efd",
      "border": "0",
      "border-radius": "1rem",
      "-webkit-transition": "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
      "transition": "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
      "-webkit-appearance": "none",
      "-moz-appearance": "none",
      "appearance": "none"
  },
  ".form-range::-moz-range-thumb:active": {
      "background-color": "#b6d4fe"
  },
  ".form-range::-moz-range-track": {
      "width": "100%",
      "height": "0.5rem",
      "color": "transparent",
      "cursor": "pointer",
      "background-color": "#dee2e6",
      "border-color": "transparent",
      "border-radius": "1rem"
  },
  ".form-range:disabled": {
      "pointer-events": "none"
  },
  ".form-range:disabled::-webkit-slider-thumb": {
      "background-color": "#adb5bd"
  },
  ".form-range:disabled::-moz-range-thumb": {
      "background-color": "#adb5bd"
  },
  ".form-floating": {
      "position": "relative"
  },
  ".form-floating > .form-control": {
      "height": "calc(3.5rem + 2px)",
      "line-height": "1.25",
      "padding": "1rem 0.75rem"
  },
  ".form-floating > .form-select": {
      "height": "calc(3.5rem + 2px)",
      "line-height": "1.25"
  },
  ".form-floating > label": {
      "position": "absolute",
      "top": "0",
      "left": "0",
      "height": "100%",
      "padding": "1rem 0.75rem",
      "pointer-events": "none",
      "border": "1px solid transparent",
      "-webkit-transform-origin": "0 0",
      "-ms-transform-origin": "0 0",
      "transform-origin": "0 0",
      "-webkit-transition": "opacity 0.1s ease-in-out, transform 0.1s ease-in-out",
      "transition": "opacity 0.1s ease-in-out, transform 0.1s ease-in-out"
  },
  ".form-floating > .form-control::-webkit-input-placeholder": {
      "color": "transparent"
  },
  ".form-floating > .form-control::-moz-placeholder": {
      "color": "transparent"
  },
  ".form-floating > .form-control:-ms-input-placeholder": {
      "color": "transparent"
  },
  ".form-floating > .form-control::placeholder": {
      "color": "transparent"
  },
  ".form-floating > .form-control:focus": {
      "padding-top": "1.625rem",
      "padding-bottom": "0.625rem"
  },
  ".form-floating > .form-control:not(:placeholder-shown)": {
      "padding-top": "1.625rem",
      "padding-bottom": "0.625rem"
  },
  ".form-floating > .form-control:-webkit-autofill": {
      "padding-top": "1.625rem",
      "padding-bottom": "0.625rem"
  },
  ".form-floating > .form-control:focus ~ label": {
      "opacity": "0.65",
      "-webkit-transform": "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
      "-ms-transform": "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
      "transform": "scale(0.85) translateY(-0.5rem) translateX(0.15rem)"
  },
  ".form-floating > .form-control:not(:placeholder-shown) ~ label": {
      "opacity": "0.65",
      "-webkit-transform": "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
      "-ms-transform": "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
      "transform": "scale(0.85) translateY(-0.5rem) translateX(0.15rem)"
  },
  ".form-floating > .form-select ~ label": {
      "opacity": "0.65",
      "-webkit-transform": "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
      "-ms-transform": "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
      "transform": "scale(0.85) translateY(-0.5rem) translateX(0.15rem)"
  },
  ".input-group > .form-control": {
      "width": "1%"
  },
  ".input-group > .form-select": {
      "width": "1%"
  },
  ".input-group > .form-control:focus": {
      "z-index": "3"
  },
  ".input-group > .form-select:focus": {
      "z-index": "3"
  },
  ".input-group .btn": {
      "position": "relative",
      "z-index": "2"
  },
  ".input-group .btn:focus": {
      "z-index": "3"
  },
  ".input-group-lg > .form-select": {
      "padding-right": "3rem"
  },
  ".input-group-sm > .form-select": {
      "padding-right": "3rem"
  },
  ".input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu)": {
      "border-top-right-radius": "0",
      "border-bottom-right-radius": "0"
  },
  ".input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3)": {
      "border-top-right-radius": "0",
      "border-bottom-right-radius": "0"
  },
  ".input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu)": {
      "border-top-right-radius": "0",
      "border-bottom-right-radius": "0"
  },
  ".input-group.has-validation > .dropdown-toggle:nth-last-child(n+4)": {
      "border-top-right-radius": "0",
      "border-bottom-right-radius": "0"
  },
  ".input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback)": {
      "margin-left": "-1px",
      "border-top-left-radius": "0",
      "border-bottom-left-radius": "0"
  },
  ".valid-feedback": {
      "display": "none",
      "width": "100%",
      "margin-top": "0.25rem",
      "font-size": "0.875em",
      "color": "#198754"
  },
  ".valid-tooltip": {
      "position": "absolute",
      "top": "100%",
      "z-index": "5",
      "display": "none",
      "max-width": "100%",
      "padding": "0.25rem 0.5rem",
      "margin-top": "0.1rem",
      "font-size": "0.875rem",
      "color": "#fff",
      "background-color": "rgba(25, 135, 84, 0.9)",
      "border-radius": "0.25rem"
  },
  ".was-validated :valid ~ .valid-feedback": {
      "display": "block"
  },
  ".was-validated :valid ~ .valid-tooltip": {
      "display": "block"
  },
  ".is-valid ~ .valid-feedback": {
      "display": "block"
  },
  ".is-valid ~ .valid-tooltip": {
      "display": "block"
  },
  ".was-validated .form-control:valid": {
      "border-color": "#198754",
      "padding-right": "calc(1.5em + 0.75rem)",
      "background-image": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\")",
      "background-repeat": "no-repeat",
      "background-position": "right calc(0.375em + 0.1875rem) center",
      "background-size": "calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)"
  },
  ".form-control.is-valid": {
      "border-color": "#198754",
      "padding-right": "calc(1.5em + 0.75rem)",
      "background-image": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\")",
      "background-repeat": "no-repeat",
      "background-position": "right calc(0.375em + 0.1875rem) center",
      "background-size": "calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)"
  },
  ".was-validated .form-control:valid:focus": {
      "border-color": "#198754",
      "box-shadow": "0 0 0 0.25rem rgba(25, 135, 84, 0.25)"
  },
  ".form-control.is-valid:focus": {
      "border-color": "#198754",
      "box-shadow": "0 0 0 0.25rem rgba(25, 135, 84, 0.25)"
  },
  ".was-validated textarea.form-control:valid": {
      "padding-right": "calc(1.5em + 0.75rem)",
      "background-position": "top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)"
  },
  "textarea.form-control.is-valid": {
      "padding-right": "calc(1.5em + 0.75rem)",
      "background-position": "top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)"
  },
  ".was-validated .form-select:valid": {
      "border-color": "#198754"
  },
  ".form-select.is-valid": {
      "border-color": "#198754"
  },
  ".was-validated .form-select:valid:not([multiple]):not([size])": {
      "padding-right": "4.125rem",
      "background-image": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\")",
      "background-position": "right 0.75rem center, center right 2.25rem",
      "background-size": "16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)"
  },
  ".was-validated .form-select:valid:not([multiple])[size=\"1\"]": {
      "padding-right": "4.125rem",
      "background-image": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\")",
      "background-position": "right 0.75rem center, center right 2.25rem",
      "background-size": "16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)"
  },
  ".form-select.is-valid:not([multiple]):not([size])": {
      "padding-right": "4.125rem",
      "background-image": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\")",
      "background-position": "right 0.75rem center, center right 2.25rem",
      "background-size": "16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)"
  },
  ".form-select.is-valid:not([multiple])[size=\"1\"]": {
      "padding-right": "4.125rem",
      "background-image": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\")",
      "background-position": "right 0.75rem center, center right 2.25rem",
      "background-size": "16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)"
  },
  ".was-validated .form-select:valid:focus": {
      "border-color": "#198754",
      "box-shadow": "0 0 0 0.25rem rgba(25, 135, 84, 0.25)"
  },
  ".form-select.is-valid:focus": {
      "border-color": "#198754",
      "box-shadow": "0 0 0 0.25rem rgba(25, 135, 84, 0.25)"
  },
  ".was-validated .form-check-input:valid": {
      "border-color": "#198754"
  },
  ".form-check-input.is-valid": {
      "border-color": "#198754"
  },
  ".was-validated .form-check-input:valid:checked": {
      "background-color": "#198754"
  },
  ".form-check-input.is-valid:checked": {
      "background-color": "#198754"
  },
  ".was-validated .form-check-input:valid:focus": {
      "box-shadow": "0 0 0 0.25rem rgba(25, 135, 84, 0.25)"
  },
  ".form-check-input.is-valid:focus": {
      "box-shadow": "0 0 0 0.25rem rgba(25, 135, 84, 0.25)"
  },
  ".was-validated .form-check-input:valid ~ .form-check-label": {
      "color": "#198754"
  },
  ".form-check-input.is-valid ~ .form-check-label": {
      "color": "#198754"
  },
  ".form-check-inline .form-check-input ~ .valid-feedback": {
      "margin-left": "0.5em"
  },
  ".was-validated .input-group .form-control:valid": {
      "z-index": "1"
  },
  ".input-group .form-control.is-valid": {
      "z-index": "1"
  },
  ".was-validated .input-group .form-select:valid": {
      "z-index": "1"
  },
  ".input-group .form-select.is-valid": {
      "z-index": "1"
  },
  ".was-validated .input-group .form-control:valid:focus": {
      "z-index": "3"
  },
  ".input-group .form-control.is-valid:focus": {
      "z-index": "3"
  },
  ".was-validated .input-group .form-select:valid:focus": {
      "z-index": "3"
  },
  ".input-group .form-select.is-valid:focus": {
      "z-index": "3"
  },
  ".invalid-feedback": {
      "display": "none",
      "width": "100%",
      "margin-top": "0.25rem",
      "font-size": "0.875em",
      "color": "#dc3545"
  },
  ".invalid-tooltip": {
      "position": "absolute",
      "top": "100%",
      "z-index": "5",
      "display": "none",
      "max-width": "100%",
      "padding": "0.25rem 0.5rem",
      "margin-top": "0.1rem",
      "font-size": "0.875rem",
      "color": "#fff",
      "background-color": "rgba(220, 53, 69, 0.9)",
      "border-radius": "0.25rem"
  },
  ".was-validated :invalid ~ .invalid-feedback": {
      "display": "block"
  },
  ".was-validated :invalid ~ .invalid-tooltip": {
      "display": "block"
  },
  ".is-invalid ~ .invalid-feedback": {
      "display": "block"
  },
  ".is-invalid ~ .invalid-tooltip": {
      "display": "block"
  },
  ".was-validated .form-control:invalid": {
      "border-color": "#dc3545",
      "padding-right": "calc(1.5em + 0.75rem)",
      "background-image": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")",
      "background-repeat": "no-repeat",
      "background-position": "right calc(0.375em + 0.1875rem) center",
      "background-size": "calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)"
  },
  ".form-control.is-invalid": {
      "border-color": "#dc3545",
      "padding-right": "calc(1.5em + 0.75rem)",
      "background-image": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")",
      "background-repeat": "no-repeat",
      "background-position": "right calc(0.375em + 0.1875rem) center",
      "background-size": "calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)"
  },
  ".was-validated .form-control:invalid:focus": {
      "border-color": "#dc3545",
      "box-shadow": "0 0 0 0.25rem rgba(220, 53, 69, 0.25)"
  },
  ".form-control.is-invalid:focus": {
      "border-color": "#dc3545",
      "box-shadow": "0 0 0 0.25rem rgba(220, 53, 69, 0.25)"
  },
  ".was-validated textarea.form-control:invalid": {
      "padding-right": "calc(1.5em + 0.75rem)",
      "background-position": "top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)"
  },
  "textarea.form-control.is-invalid": {
      "padding-right": "calc(1.5em + 0.75rem)",
      "background-position": "top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)"
  },
  ".was-validated .form-select:invalid": {
      "border-color": "#dc3545"
  },
  ".form-select.is-invalid": {
      "border-color": "#dc3545"
  },
  ".was-validated .form-select:invalid:not([multiple]):not([size])": {
      "padding-right": "4.125rem",
      "background-image": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")",
      "background-position": "right 0.75rem center, center right 2.25rem",
      "background-size": "16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)"
  },
  ".was-validated .form-select:invalid:not([multiple])[size=\"1\"]": {
      "padding-right": "4.125rem",
      "background-image": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")",
      "background-position": "right 0.75rem center, center right 2.25rem",
      "background-size": "16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)"
  },
  ".form-select.is-invalid:not([multiple]):not([size])": {
      "padding-right": "4.125rem",
      "background-image": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")",
      "background-position": "right 0.75rem center, center right 2.25rem",
      "background-size": "16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)"
  },
  ".form-select.is-invalid:not([multiple])[size=\"1\"]": {
      "padding-right": "4.125rem",
      "background-image": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")",
      "background-position": "right 0.75rem center, center right 2.25rem",
      "background-size": "16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)"
  },
  ".was-validated .form-select:invalid:focus": {
      "border-color": "#dc3545",
      "box-shadow": "0 0 0 0.25rem rgba(220, 53, 69, 0.25)"
  },
  ".form-select.is-invalid:focus": {
      "border-color": "#dc3545",
      "box-shadow": "0 0 0 0.25rem rgba(220, 53, 69, 0.25)"
  },
  ".was-validated .form-check-input:invalid": {
      "border-color": "#dc3545"
  },
  ".form-check-input.is-invalid": {
      "border-color": "#dc3545"
  },
  ".was-validated .form-check-input:invalid:checked": {
      "background-color": "#dc3545"
  },
  ".form-check-input.is-invalid:checked": {
      "background-color": "#dc3545"
  },
  ".was-validated .form-check-input:invalid:focus": {
      "box-shadow": "0 0 0 0.25rem rgba(220, 53, 69, 0.25)"
  },
  ".form-check-input.is-invalid:focus": {
      "box-shadow": "0 0 0 0.25rem rgba(220, 53, 69, 0.25)"
  },
  ".was-validated .form-check-input:invalid ~ .form-check-label": {
      "color": "#dc3545"
  },
  ".form-check-input.is-invalid ~ .form-check-label": {
      "color": "#dc3545"
  },
  ".form-check-inline .form-check-input ~ .invalid-feedback": {
      "margin-left": "0.5em"
  },
  ".was-validated .input-group .form-control:invalid": {
      "z-index": "2"
  },
  ".input-group .form-control.is-invalid": {
      "z-index": "2"
  },
  ".was-validated .input-group .form-select:invalid": {
      "z-index": "2"
  },
  ".input-group .form-select.is-invalid": {
      "z-index": "2"
  },
  ".was-validated .input-group .form-control:invalid:focus": {
      "z-index": "3"
  },
  ".input-group .form-control.is-invalid:focus": {
      "z-index": "3"
  },
  ".was-validated .input-group .form-select:invalid:focus": {
      "z-index": "3"
  },
  ".input-group .form-select.is-invalid:focus": {
      "z-index": "3"
  },
  ".btn-check:focus + .btn": {
      "outline": "0",
      "box-shadow": "none"
  },
  ".btn:focus": {
      "outline": "0",
      "box-shadow": "none"
  },
  ".btn-check:checked + .btn": {
      "box-shadow": "none"
  },
  ".btn-check:active + .btn": {
      "box-shadow": "none"
  },
  ".btn:active": {
      "box-shadow": "none"
  },
  ".btn.active": {
      "box-shadow": "none"
  },
  ".btn-check:checked + .btn:focus": {
      "box-shadow": "none"
  },
  ".btn-check:active + .btn:focus": {
      "box-shadow": "none"
  },
  ".btn:active:focus": {
      "box-shadow": "none"
  },
  ".btn.active:focus": {
      "box-shadow": "none"
  },
  ".fade": {
      "-webkit-transition": "opacity 0.15s linear",
      "transition": "opacity 0.15s linear"
  },
  ".fade:not(.show)": {
      "opacity": "0"
  },
  ".collapse:not(.show)": {
      "display": "none"
  },
  ".collapsing": {
      "height": "0",
      "overflow": "hidden",
      "-webkit-transition": "height 0.35s ease",
      "transition": "height 0.35s ease"
  },
  ".collapsing.collapse-horizontal": {
      "width": "0",
      "height": "auto",
      "-webkit-transition": "width 0.35s ease",
      "transition": "width 0.35s ease"
  },
  ".dropdown-menu": {
      "z-index": "1000"
  },
  ".dropdown-item.active": {
      "color": "rgb(31, 41, 55)",
      "-webkit-text-decoration": "none",
      "text-decoration": "none",
      "background-color": "#0d6efd"
  },
  ".dropdown-item:active": {
      "color": "rgb(31, 41, 55)",
      "-webkit-text-decoration": "none",
      "text-decoration": "none",
      "background-color": "#0d6efd"
  },
  ".dropdown-item:disabled": {
      "color": "#adb5bd",
      "pointer-events": "none",
      "background-color": "transparent"
  },
  ".dropdown-menu.show": {
      "display": "block"
  },
  ".dropdown-menu-dark .dropdown-item.active": {
      "color": "#fff",
      "background-color": "#0d6efd"
  },
  ".dropdown-menu-dark .dropdown-item:active": {
      "color": "#fff",
      "background-color": "#0d6efd"
  },
  ".dropdown-menu-dark .dropdown-item.disabled": {
      "color": "#adb5bd"
  },
  ".dropdown-menu-dark .dropdown-item:disabled": {
      "color": "#adb5bd"
  },
  ".nav-tabs .nav-link": {
      "color": "rgb(75, 85, 99)"
  },
  ".nav-tabs .nav-link:hover": {
      "isolation": "isolate"
  },
  ".nav-tabs .nav-link:focus": {
      "isolation": "isolate"
  },
  ".nav-tabs .nav-link.disabled": {
      "color": "rgb(156, 163, 175)",
      "background-color": "transparent",
      "border-color": "transparent"
  },
  ".nav-tabs .nav-link.active": {
      "color": "rgb(37, 99, 235)",
      "border-color": "rgb(37, 99, 235)"
  },
  ".nav-tabs .nav-item.show .nav-link": {
      "color": "rgb(37, 99, 235)",
      "border-color": "rgb(37, 99, 235)"
  },
  ".nav-tabs .dropdown-menu": {
      "margin-top": "-1px",
      "border-top-left-radius": "0",
      "border-top-right-radius": "0"
  },
  ".nav-pills .nav-link": {
      "background": "rgb(243, 244, 246)",
      "color": "rgb(75, 85, 99)",
      "box-shadow": "none"
  },
  ".nav-pills .nav-link.active": {
      "background": "rgb(37, 99, 235)",
      "color": "#fff",
      "box-shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
  },
  ".nav-pills .show > .nav-link": {
      "background": "rgb(37, 99, 235)",
      "color": "#fff",
      "box-shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
  },
  ".nav-pills .disabled": {
      "color": "rgb(156, 163, 175)",
      "background-color": "rgba(243, 244, 246, 0.5)"
  },
  ".nav-pills.menu-sidebar .nav-link": {
      "background-color": "transparent",
      "box-shadow": "none",
      "padding": "0 5px",
      "border-radius": "0"
  },
  ".nav-pills.menu-sidebar .nav-link.active": {
      "color": "#1266f1",
      "font-weight": "600",
      "border-left": "0.125rem solid #1266f1"
  },
  ".nav-justified > .nav-link": {
      "-webkit-flex-basis": "0",
      "-ms-flex-basis": "0",
      "flex-basis": "0"
  },
  ".nav-justified .nav-item": {
      "-webkit-flex-basis": "0",
      "-ms-flex-basis": "0",
      "flex-basis": "0"
  },
  ".tab-content > .tab-pane": {
      "display": "none"
  },
  ".tab-content > .active": {
      "display": "block"
  },
  ".navbar-text": {
      "padding-top": "0.5rem",
      "padding-bottom": "0.5rem"
  },
  ".navbar-collapse": {
      "-webkit-flex-basis": "100%",
      "-ms-flex-basis": "100%",
      "flex-basis": "100%"
  },
  ".navbar-nav-scroll": {
      "max-height": "var(--bs-scroll-height, 75vh)",
      "overflow-y": "auto"
  },
  ".navbar-expand": {
      "-webkit-flex-wrap": "nowrap",
      "-ms-flex-wrap": "nowrap",
      "flex-wrap": "nowrap",
      "-webkit-box-pack": "start",
      "-webkit-justify-content": "flex-start",
      "-ms-flex-pack": "start",
      "justify-content": "flex-start"
  },
  ".navbar-expand .navbar-nav": {
      "-webkit-flex-direction": "row",
      "-ms-flex-direction": "row",
      "flex-direction": "row"
  },
  ".navbar-expand .navbar-nav .dropdown-menu": {
      "position": "absolute"
  },
  ".navbar-expand .navbar-nav .nav-link": {
      "padding-right": "0.5rem",
      "padding-left": "0.5rem"
  },
  ".navbar-expand .navbar-nav-scroll": {
      "overflow": "visible"
  },
  ".navbar-expand .navbar-collapse": {
      "display": "flex !important",
      "-webkit-flex-basis": "auto",
      "-ms-flex-basis": "auto",
      "flex-basis": "auto"
  },
  ".navbar-expand .navbar-toggler": {
      "display": "none"
  },
  ".navbar-expand .offcanvas-header": {
      "display": "none"
  },
  ".navbar-expand .offcanvas": {
      "position": "inherit",
      "bottom": "0",
      "z-index": "1000",
      "-webkit-flex-grow": "1",
      "-ms-flex-grow": "1",
      "flex-grow": "1",
      "visibility": "visible !important",
      "background-color": "transparent",
      "border-right": "0",
      "border-left": "0",
      "-webkit-transition": "none",
      "transition": "none",
      "-webkit-transform": "none",
      "-ms-transform": "none",
      "transform": "none"
  },
  ".navbar-expand .offcanvas-top": {
      "height": "auto",
      "border-top": "0",
      "border-bottom": "0"
  },
  ".navbar-expand .offcanvas-bottom": {
      "height": "auto",
      "border-top": "0",
      "border-bottom": "0"
  },
  ".navbar-expand .offcanvas-body": {
      "display": "flex",
      "-webkit-flex-grow": "0",
      "-ms-flex-grow": "0",
      "flex-grow": "0",
      "padding": "0",
      "overflow-y": "visible"
  },
  ".navbar-light .navbar-nav .nav-link.disabled": {
      "color": "rgba(0, 0, 0, 0.3)"
  },
  ".navbar-light .navbar-nav .show > .nav-link": {
      "color": "rgba(0, 0, 0, 0.9)"
  },
  ".navbar-light .navbar-nav .nav-link.active": {
      "color": "rgba(0, 0, 0, 0.9)"
  },
  ".navbar-light .navbar-text": {
      "color": "rgba(0, 0, 0, 0.55)"
  },
  ".navbar-light .navbar-text a": {
      "color": "rgba(0, 0, 0, 0.9)"
  },
  ".navbar-light .navbar-text a:hover": {
      "color": "rgba(0, 0, 0, 0.9)"
  },
  ".navbar-light .navbar-text a:focus": {
      "color": "rgba(0, 0, 0, 0.9)"
  },
  ".navbar-dark .navbar-nav .nav-link.disabled": {
      "color": "rgba(255, 255, 255, 0.25)"
  },
  ".navbar-dark .navbar-nav .show > .nav-link": {
      "color": "#fff"
  },
  ".navbar-dark .navbar-nav .nav-link.active": {
      "color": "#fff"
  },
  ".navbar-dark .navbar-text": {
      "color": "rgba(255, 255, 255, 0.55)"
  },
  ".navbar-dark .navbar-text a": {
      "color": "#fff"
  },
  ".navbar-dark .navbar-text a:hover": {
      "color": "#fff"
  },
  ".navbar-dark .navbar-text a:focus": {
      "color": "#fff"
  },
  ".accordion-button": {
      "overflow-anchor": "none"
  },
  ".accordion-button:not(.collapsed)": {
      "color": "#2563eb",
      "background-color": "#fff",
      "box-shadow": "inset 0 -1px 0 rgb(229, 231, 235)"
  },
  ".accordion-button:not(.collapsed)::after": {
      "background-image": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%232563eb'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")",
      "-webkit-transform": "rotate(-180deg)",
      "-ms-transform": "rotate(-180deg)",
      "transform": "rotate(-180deg)"
  },
  ".accordion-button::after": {
      "-webkit-flex-shrink": "0",
      "-ms-flex-shrink": "0",
      "flex-shrink": "0",
      "width": "1.25rem",
      "height": "1.25rem",
      "margin-left": "auto",
      "content": "\"\"",
      "background-image": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")",
      "background-repeat": "no-repeat",
      "background-size": "1.25rem",
      "-webkit-transition": "transform 0.2s ease-in-out",
      "transition": "transform 0.2s ease-in-out"
  },
  ".accordion-button:hover": {
      "z-index": "2"
  },
  ".accordion-button:focus": {
      "z-index": "3"
  },
  ".accordion-item:first-of-type": {
      "border-top-left-radius": "0.5rem",
      "border-top-right-radius": "0.5rem"
  },
  ".accordion-item:first-of-type .accordion-button": {
      "border-top-left-radius": "calc(0.5rem - 1px)",
      "border-top-right-radius": "calc(0.5rem - 1px)"
  },
  ".accordion-item:not(:first-of-type)": {
      "border-top": "0"
  },
  ".accordion-item:last-of-type": {
      "border-bottom-right-radius": "0.5rem",
      "border-bottom-left-radius": "0.5rem"
  },
  ".accordion-item:last-of-type .accordion-button.collapsed": {
      "border-bottom-right-radius": "calc(0.5rem - 1px)",
      "border-bottom-left-radius": "calc(0.5rem - 1px)"
  },
  ".accordion-item:last-of-type .accordion-collapse": {
      "border-bottom-right-radius": "0.5rem",
      "border-bottom-left-radius": "0.5rem"
  },
  ".btn-close": {
      "background": "transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e\") center/1em auto no-repeat"
  },
  ".btn-close:focus": {
      "opacity": "1"
  },
  ".btn-close:disabled": {
      "pointer-events": "none",
      "-webkit-user-select": "none",
      "-moz-user-select": "none",
      "-ms-user-select": "none",
      "user-select": "none",
      "opacity": "0.25"
  },
  ".btn-close.disabled": {
      "pointer-events": "none",
      "-webkit-user-select": "none",
      "-moz-user-select": "none",
      "-ms-user-select": "none",
      "user-select": "none",
      "opacity": "0.25"
  },
  ".btn-close-white": {
      "filter": "invert(1) grayscale(100%) brightness(200%)"
  },
  ".modal": {
      "z-index": "1055"
  },
  ".modal-dialog": {
      "margin": "0.5rem"
  },
  ".modal.fade .modal-dialog": {
      "-webkit-transition": "transform 0.3s ease-out",
      "transition": "transform 0.3s ease-out",
      "-webkit-transform": "translate(0, -50px)",
      "-ms-transform": "translate(0, -50px)",
      "transform": "translate(0, -50px)"
  },
  ".modal.show .modal-dialog": {
      "-webkit-transform": "none",
      "-ms-transform": "none",
      "transform": "none"
  },
  ".modal.modal-static .modal-dialog": {
      "-webkit-transform": "scale(1.02)",
      "-ms-transform": "scale(1.02)",
      "transform": "scale(1.02)"
  },
  ".modal-dialog-scrollable": {
      "height": "calc(100% - 1rem)"
  },
  ".modal-dialog-scrollable .modal-content": {
      "max-height": "100%",
      "overflow": "hidden"
  },
  ".modal-dialog-scrollable .modal-body": {
      "overflow-y": "auto"
  },
  ".modal-dialog-centered": {
      "display": "flex",
      "-webkit-align-items": "center",
      "-webkit-box-align": "center",
      "-ms-flex-align": "center",
      "align-items": "center",
      "min-height": "calc(100% - 1rem)"
  },
  ".modal-backdrop": {
      "position": "fixed",
      "top": "0",
      "left": "0",
      "z-index": "1050",
      "width": "100vw",
      "height": "100vh",
      "background-color": "#000"
  },
  ".modal-backdrop.fade": {
      "opacity": "0"
  },
  ".modal-backdrop.show": {
      "opacity": "0.5"
  },
  ".modal-header .btn-close": {
      "padding": "0.5rem 0.5rem",
      "margin": "-0.5rem -0.5rem -0.5rem auto"
  },
  ".modal-body": {
      "-webkit-flex": "1 1 auto",
      "-ms-flex": "1 1 auto",
      "flex": "1 1 auto"
  },
  ".modal-fullscreen": {
      "width": "100vw",
      "max-width": "none",
      "height": "100%",
      "margin": "0"
  },
  ".modal-fullscreen .modal-content": {
      "height": "100%",
      "border": "0",
      "border-radius": "0"
  },
  ".modal-fullscreen .modal-header": {
      "border-radius": "0"
  },
  ".modal-fullscreen .modal-body": {
      "overflow-y": "auto"
  },
  ".modal-fullscreen .modal-footer": {
      "border-radius": "0"
  },
  ".tooltip": {
      "position": "absolute",
      "z-index": "1080",
      "display": "block",
      "margin": "0",
      "font-family": "var(--bs-font-sans-serif)",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "1.5",
      "-webkit-text-align": "start",
      "text-align": "start",
      "-webkit-text-decoration": "none",
      "text-decoration": "none",
      "-webkit-text-shadow": "none",
      "text-shadow": "none",
      "-webkit-text-transform": "none",
      "text-transform": "none",
      "letter-spacing": "normal",
      "word-break": "normal",
      "word-spacing": "normal",
      "white-space": "normal",
      "line-break": "auto",
      "font-size": "0.875rem",
      "word-wrap": "break-word",
      "opacity": "0"
  },
  ".tooltip.show": {
      "opacity": "1"
  },
  ".bs-tooltip-top": {
      "padding": "0.4rem 0"
  },
  ".bs-tooltip-auto[data-popper-placement^=top]": {
      "padding": "0.4rem 0"
  },
  ".bs-tooltip-top .tooltip-arrow": {
      "bottom": "0"
  },
  ".bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow": {
      "bottom": "0"
  },
  ".bs-tooltip-top .tooltip-arrow::before": {
      "top": "-1px",
      "border-width": "0.4rem 0.4rem 0",
      "border-top-color": "#000"
  },
  ".bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before": {
      "top": "-1px",
      "border-width": "0.4rem 0.4rem 0",
      "border-top-color": "#000"
  },
  ".bs-tooltip-end": {
      "padding": "0 0.4rem"
  },
  ".bs-tooltip-auto[data-popper-placement^=right]": {
      "padding": "0 0.4rem"
  },
  ".bs-tooltip-end .tooltip-arrow": {
      "left": "0",
      "width": "0.4rem",
      "height": "0.8rem"
  },
  ".bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow": {
      "left": "0",
      "width": "0.4rem",
      "height": "0.8rem"
  },
  ".bs-tooltip-end .tooltip-arrow::before": {
      "right": "-1px",
      "border-width": "0.4rem 0.4rem 0.4rem 0",
      "border-right-color": "#000"
  },
  ".bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before": {
      "right": "-1px",
      "border-width": "0.4rem 0.4rem 0.4rem 0",
      "border-right-color": "#000"
  },
  ".bs-tooltip-bottom": {
      "padding": "0.4rem 0"
  },
  ".bs-tooltip-auto[data-popper-placement^=bottom]": {
      "padding": "0.4rem 0"
  },
  ".bs-tooltip-bottom .tooltip-arrow": {
      "top": "0"
  },
  ".bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow": {
      "top": "0"
  },
  ".bs-tooltip-bottom .tooltip-arrow::before": {
      "bottom": "-1px",
      "border-width": "0 0.4rem 0.4rem",
      "border-bottom-color": "#000"
  },
  ".bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before": {
      "bottom": "-1px",
      "border-width": "0 0.4rem 0.4rem",
      "border-bottom-color": "#000"
  },
  ".bs-tooltip-start": {
      "padding": "0 0.4rem"
  },
  ".bs-tooltip-auto[data-popper-placement^=left]": {
      "padding": "0 0.4rem"
  },
  ".bs-tooltip-start .tooltip-arrow": {
      "right": "0",
      "width": "0.4rem",
      "height": "0.8rem"
  },
  ".bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow": {
      "right": "0",
      "width": "0.4rem",
      "height": "0.8rem"
  },
  ".bs-tooltip-start .tooltip-arrow::before": {
      "left": "-1px",
      "border-width": "0.4rem 0 0.4rem 0.4rem",
      "border-left-color": "#000"
  },
  ".bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before": {
      "left": "-1px",
      "border-width": "0.4rem 0 0.4rem 0.4rem",
      "border-left-color": "#000"
  },
  ".tooltip-inner": {
      "max-width": "200px",
      "font-size": "14px",
      "padding": "6px 16px",
      "color": "#fff",
      "-webkit-text-align": "center",
      "text-align": "center",
      "background-color": "#6d6d6d",
      "border-radius": "0.25rem"
  },
  ".popover": {
      "position": "absolute",
      "top": "0",
      "left": "0",
      "z-index": "1070",
      "display": "block",
      "max-width": "276px",
      "font-family": "var(--bs-font-sans-serif)",
      "font-style": "normal",
      "font-weight": "400",
      "line-height": "1.5",
      "-webkit-text-align": "start",
      "text-align": "start",
      "-webkit-text-decoration": "none",
      "text-decoration": "none",
      "-webkit-text-shadow": "none",
      "text-shadow": "none",
      "-webkit-text-transform": "none",
      "text-transform": "none",
      "letter-spacing": "normal",
      "word-break": "normal",
      "word-spacing": "normal",
      "white-space": "normal",
      "line-break": "auto",
      "font-size": "0.875rem",
      "word-wrap": "break-word",
      "background-color": "#fff",
      "background-clip": "padding-box",
      "border": "0",
      "border-radius": "0.5rem",
      "box-shadow": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
  },
  ".bs-popover-top > .popover-arrow": {
      "bottom": "calc(-0.5rem - 1px)"
  },
  ".bs-popover-auto[data-popper-placement^=top] > .popover-arrow": {
      "bottom": "calc(-0.5rem - 1px)"
  },
  ".bs-popover-top > .popover-arrow::before": {
      "bottom": "0",
      "border-width": "0.5rem 0.5rem 0",
      "border-top-color": "rgba(0, 0, 0, 0.25)"
  },
  ".bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before": {
      "bottom": "0",
      "border-width": "0.5rem 0.5rem 0",
      "border-top-color": "rgba(0, 0, 0, 0.25)"
  },
  ".bs-popover-top > .popover-arrow::after": {
      "bottom": "1px",
      "border-width": "0.5rem 0.5rem 0",
      "border-top-color": "#fff"
  },
  ".bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after": {
      "bottom": "1px",
      "border-width": "0.5rem 0.5rem 0",
      "border-top-color": "#fff"
  },
  ".bs-popover-end > .popover-arrow": {
      "left": "calc(-0.5rem - 1px)",
      "width": "0.5rem",
      "height": "1rem"
  },
  ".bs-popover-auto[data-popper-placement^=right] > .popover-arrow": {
      "left": "calc(-0.5rem - 1px)",
      "width": "0.5rem",
      "height": "1rem"
  },
  ".bs-popover-end > .popover-arrow::before": {
      "left": "0",
      "border-width": "0.5rem 0.5rem 0.5rem 0",
      "border-right-color": "rgba(0, 0, 0, 0.25)"
  },
  ".bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before": {
      "left": "0",
      "border-width": "0.5rem 0.5rem 0.5rem 0",
      "border-right-color": "rgba(0, 0, 0, 0.25)"
  },
  ".bs-popover-end > .popover-arrow::after": {
      "left": "1px",
      "border-width": "0.5rem 0.5rem 0.5rem 0",
      "border-right-color": "#fff"
  },
  ".bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after": {
      "left": "1px",
      "border-width": "0.5rem 0.5rem 0.5rem 0",
      "border-right-color": "#fff"
  },
  ".bs-popover-bottom > .popover-arrow": {
      "top": "calc(-0.5rem - 1px)"
  },
  ".bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow": {
      "top": "calc(-0.5rem - 1px)"
  },
  ".bs-popover-bottom > .popover-arrow::before": {
      "top": "0",
      "border-width": "0 0.5rem 0.5rem 0.5rem",
      "border-bottom-color": "rgba(0, 0, 0, 0.25)"
  },
  ".bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before": {
      "top": "0",
      "border-width": "0 0.5rem 0.5rem 0.5rem",
      "border-bottom-color": "rgba(0, 0, 0, 0.25)"
  },
  ".bs-popover-bottom > .popover-arrow::after": {
      "top": "1px",
      "border-width": "0 0.5rem 0.5rem 0.5rem",
      "border-bottom-color": "#fff"
  },
  ".bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after": {
      "top": "1px",
      "border-width": "0 0.5rem 0.5rem 0.5rem",
      "border-bottom-color": "#fff"
  },
  ".bs-popover-bottom .popover-header::before": {
      "position": "absolute",
      "top": "0",
      "left": "50%",
      "display": "block",
      "width": "1rem",
      "margin-left": "-0.5rem",
      "content": "\"\"",
      "border-bottom": "1px solid #f0f0f0"
  },
  ".bs-popover-auto[data-popper-placement^=bottom] .popover-header::before": {
      "position": "absolute",
      "top": "0",
      "left": "50%",
      "display": "block",
      "width": "1rem",
      "margin-left": "-0.5rem",
      "content": "\"\"",
      "border-bottom": "1px solid #f0f0f0"
  },
  ".bs-popover-start > .popover-arrow": {
      "right": "calc(-0.5rem - 1px)",
      "width": "0.5rem",
      "height": "1rem"
  },
  ".bs-popover-auto[data-popper-placement^=left] > .popover-arrow": {
      "right": "calc(-0.5rem - 1px)",
      "width": "0.5rem",
      "height": "1rem"
  },
  ".bs-popover-start > .popover-arrow::before": {
      "right": "0",
      "border-width": "0.5rem 0 0.5rem 0.5rem",
      "border-left-color": "rgba(0, 0, 0, 0.25)"
  },
  ".bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before": {
      "right": "0",
      "border-width": "0.5rem 0 0.5rem 0.5rem",
      "border-left-color": "rgba(0, 0, 0, 0.25)"
  },
  ".bs-popover-start > .popover-arrow::after": {
      "right": "1px",
      "border-width": "0.5rem 0 0.5rem 0.5rem",
      "border-left-color": "#fff"
  },
  ".bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after": {
      "right": "1px",
      "border-width": "0.5rem 0 0.5rem 0.5rem",
      "border-left-color": "#fff"
  },
  ".popover-header": {
      "padding": "0.5rem 1rem",
      "margin-bottom": "0",
      "font-size": "1rem",
      "background-color": "#fff",
      "border-bottom": "1px solid rgba(0, 0, 0, 0.2)",
      "border-top-left-radius": "0.5rem",
      "border-top-right-radius": "0.5rem",
      "font-weight": "500"
  },
  ".popover-header:empty": {
      "display": "none"
  },
  ".popover-body": {
      "padding": "1rem 1rem",
      "color": "#212529"
  },
  ".carousel.pointer-event": {
      "touch-action": "pan-y"
  },
  ".carousel-inner::after": {
      "display": "block",
      "clear": "both",
      "content": "\"\""
  },
  ".carousel-item": {
      "display": "none",
      "margin-right": "-100%",
      "backface-visibility": "hidden",
      "-webkit-transition": "transform 0.6s ease-in-out",
      "transition": "transform 0.6s ease-in-out"
  },
  ".carousel-item.active": {
      "display": "block"
  },
  ".carousel-item-next": {
      "display": "block"
  },
  ".carousel-item-prev": {
      "display": "block"
  },
  ".carousel-item-next:not(.carousel-item-start)": {
      "-webkit-transform": "translateX(100%)",
      "-ms-transform": "translateX(100%)",
      "transform": "translateX(100%)"
  },
  ".active.carousel-item-end": {
      "-webkit-transform": "translateX(100%)",
      "-ms-transform": "translateX(100%)",
      "transform": "translateX(100%)"
  },
  ".carousel-item-prev:not(.carousel-item-end)": {
      "-webkit-transform": "translateX(-100%)",
      "-ms-transform": "translateX(-100%)",
      "transform": "translateX(-100%)"
  },
  ".active.carousel-item-start": {
      "-webkit-transform": "translateX(-100%)",
      "-ms-transform": "translateX(-100%)",
      "transform": "translateX(-100%)"
  },
  ".carousel-fade .carousel-item": {
      "opacity": "0",
      "-webkit-transition-property": "opacity",
      "transition-property": "opacity",
      "-webkit-transform": "none",
      "-ms-transform": "none",
      "transform": "none"
  },
  ".carousel-fade .carousel-item.active": {
      "z-index": "1",
      "opacity": "1"
  },
  ".carousel-fade .carousel-item-next.carousel-item-start": {
      "z-index": "1",
      "opacity": "1"
  },
  ".carousel-fade .carousel-item-prev.carousel-item-end": {
      "z-index": "1",
      "opacity": "1"
  },
  ".carousel-fade .active.carousel-item-start": {
      "z-index": "0",
      "opacity": "0",
      "-webkit-transition": "opacity 0s 0.6s",
      "transition": "opacity 0s 0.6s"
  },
  ".carousel-fade .active.carousel-item-end": {
      "z-index": "0",
      "opacity": "0",
      "-webkit-transition": "opacity 0s 0.6s",
      "transition": "opacity 0s 0.6s"
  },
  ".carousel-control-prev": {
      "z-index": "1",
      "width": "15%",
      "color": "#fff",
      "background": "none",
      "opacity": "0.5",
      "-webkit-transition": "opacity 0.15s ease",
      "transition": "opacity 0.15s ease"
  },
  ".carousel-control-next": {
      "z-index": "1",
      "width": "15%",
      "color": "#fff",
      "background": "none",
      "opacity": "0.5",
      "-webkit-transition": "opacity 0.15s ease",
      "transition": "opacity 0.15s ease"
  },
  ".carousel-control-prev:hover": {
      "color": "#fff",
      "opacity": "0.9"
  },
  ".carousel-control-prev:focus": {
      "color": "#fff",
      "opacity": "0.9"
  },
  ".carousel-control-next:hover": {
      "color": "#fff",
      "opacity": "0.9"
  },
  ".carousel-control-next:focus": {
      "color": "#fff",
      "opacity": "0.9"
  },
  ".carousel-control-prev-icon": {
      "width": "2rem",
      "height": "2rem",
      "background-position": "50%",
      "background-size": "100% 100%",
      "background-image": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\")"
  },
  ".carousel-control-next-icon": {
      "width": "2rem",
      "height": "2rem",
      "background-position": "50%",
      "background-size": "100% 100%",
      "background-image": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")"
  },
  ".carousel-indicators": {
      "z-index": "2",
      "margin-right": "15%",
      "margin-left": "15%",
      "list-style": "none"
  },
  ".carousel-indicators [data-bs-target]": {
      "box-sizing": "content-box",
      "-webkit-flex": "0 1 auto",
      "-ms-flex": "0 1 auto",
      "flex": "0 1 auto",
      "width": "30px",
      "height": "3px",
      "padding": "0",
      "margin-right": "3px",
      "margin-left": "3px",
      "-webkit-text-indent": "-999px",
      "text-indent": "-999px",
      "cursor": "pointer",
      "background-color": "#fff",
      "background-clip": "padding-box",
      "border": "0",
      "border-top": "10px solid transparent",
      "border-bottom": "10px solid transparent",
      "opacity": "0.5",
      "-webkit-transition": "opacity 0.6s ease",
      "transition": "opacity 0.6s ease"
  },
  ".carousel-indicators .active": {
      "opacity": "1"
  },
  ".carousel-caption": {
      "right": "15%",
      "bottom": "1.25rem",
      "left": "15%",
      "padding-top": "1.25rem",
      "padding-bottom": "1.25rem",
      "color": "#fff"
  },
  ".carousel-dark .carousel-control-prev-icon": {
      "filter": "invert(1) grayscale(100)"
  },
  ".carousel-dark .carousel-control-next-icon": {
      "filter": "invert(1) grayscale(100)"
  },
  ".carousel-dark .carousel-indicators [data-bs-target]": {
      "background-color": "#000"
  },
  ".carousel-dark .carousel-caption": {
      "color": "#000"
  },
  ".spinner-border": {
      "vertical-align": "-0.125em",
      "border": "0.25em solid currentColor",
      "border-right-color": "transparent"
  },
  ".spinner-grow": {
      "vertical-align": "-0.125em",
      "-webkit-animation": "0.75s linear infinite _spinner-grow",
      "animation": "0.75s linear infinite _spinner-grow"
  },
  ".offcanvas": {
      "z-index": "1045"
  },
  ".offcanvas-backdrop": {
      "position": "fixed",
      "top": "0",
      "left": "0",
      "z-index": "1040",
      "width": "100vw",
      "height": "100vh",
      "background-color": "#000"
  },
  ".offcanvas-backdrop.fade": {
      "opacity": "0"
  },
  ".offcanvas-backdrop.show": {
      "opacity": "0.5"
  },
  ".offcanvas-start": {
      "-webkit-transform": "translateX(-100%)",
      "-ms-transform": "translateX(-100%)",
      "transform": "translateX(-100%)"
  },
  ".offcanvas-end": {
      "-webkit-transform": "translateX(100%)",
      "-ms-transform": "translateX(100%)",
      "transform": "translateX(100%)"
  },
  ".offcanvas-top": {
      "-webkit-transform": "translateY(-100%)",
      "-ms-transform": "translateY(-100%)",
      "transform": "translateY(-100%)"
  },
  ".offcanvas-bottom": {
      "-webkit-transform": "translateY(100%)",
      "-ms-transform": "translateY(100%)",
      "transform": "translateY(100%)"
  },
  ".offcanvas.show": {
      "-webkit-transform": "none",
      "-ms-transform": "none",
      "transform": "none"
  },
  ".clearfix::after": {
      "display": "block",
      "clear": "both",
      "content": "\"\""
  },
  ".link-primary": {
      "color": "#0d6efd"
  },
  ".link-primary:hover": {
      "color": "#0a58ca"
  },
  ".link-primary:focus": {
      "color": "#0a58ca"
  },
  ".link-secondary": {
      "color": "#6c757d"
  },
  ".link-secondary:hover": {
      "color": "#565e64"
  },
  ".link-secondary:focus": {
      "color": "#565e64"
  },
  ".link-success": {
      "color": "#198754"
  },
  ".link-success:hover": {
      "color": "#146c43"
  },
  ".link-success:focus": {
      "color": "#146c43"
  },
  ".link-info": {
      "color": "#0dcaf0"
  },
  ".link-info:hover": {
      "color": "#3dd5f3"
  },
  ".link-info:focus": {
      "color": "#3dd5f3"
  },
  ".link-warning": {
      "color": "#ffc107"
  },
  ".link-warning:hover": {
      "color": "#ffcd39"
  },
  ".link-warning:focus": {
      "color": "#ffcd39"
  },
  ".link-danger": {
      "color": "#dc3545"
  },
  ".link-danger:hover": {
      "color": "#b02a37"
  },
  ".link-danger:focus": {
      "color": "#b02a37"
  },
  ".link-light": {
      "color": "#f8f9fa"
  },
  ".link-light:hover": {
      "color": "#f9fafb"
  },
  ".link-light:focus": {
      "color": "#f9fafb"
  },
  ".link-dark": {
      "color": "#212529"
  },
  ".link-dark:hover": {
      "color": "#1a1e21"
  },
  ".link-dark:focus": {
      "color": "#1a1e21"
  },
  ".ratio": {
      "position": "relative",
      "width": "100%"
  },
  ".ratio::before": {
      "display": "block",
      "padding-top": "var(--bs-aspect-ratio)",
      "content": "\"\""
  },
  ".ratio > *": {
      "position": "absolute",
      "top": "0",
      "left": "0",
      "width": "100%",
      "height": "100%"
  },
  ".ratio-1x1": {
      "--bs-aspect-ratio": "100%"
  },
  ".ratio-4x3": {
      "--bs-aspect-ratio": "75%"
  },
  ".ratio-16x9": {
      "--bs-aspect-ratio": "56.25%"
  },
  ".ratio-21x9": {
      "--bs-aspect-ratio": "42.8571428571%"
  },
  ".fixed-top": {
      "position": "fixed",
      "top": "0",
      "right": "0",
      "left": "0",
      "z-index": "1030"
  },
  ".fixed-bottom": {
      "position": "fixed",
      "right": "0",
      "bottom": "0",
      "left": "0",
      "z-index": "1030"
  },
  ".sticky-top": {
      "position": "sticky",
      "top": "0",
      "z-index": "1020"
  },
  ".hstack": {
      "display": "flex",
      "-webkit-flex-direction": "row",
      "-ms-flex-direction": "row",
      "flex-direction": "row",
      "-webkit-align-items": "center",
      "-webkit-box-align": "center",
      "-ms-flex-align": "center",
      "align-items": "center",
      "-ms-flex-item-align": "stretch",
      "align-self": "stretch"
  },
  ".vstack": {
      "display": "flex",
      "-webkit-flex": "1 1 auto",
      "-ms-flex": "1 1 auto",
      "flex": "1 1 auto",
      "-webkit-flex-direction": "column",
      "-ms-flex-direction": "column",
      "flex-direction": "column",
      "-ms-flex-item-align": "stretch",
      "align-self": "stretch"
  },
  ".visually-hidden": {
      "position": "absolute !important",
      "width": "1px !important",
      "height": "1px !important",
      "padding": "0 !important",
      "margin": "-1px !important",
      "overflow": "hidden !important",
      "clip": "rect(0, 0, 0, 0) !important",
      "white-space": "nowrap !important",
      "border": "0 !important"
  },
  ".visually-hidden-focusable:not(:focus):not(:focus-within)": {
      "position": "absolute !important",
      "width": "1px !important",
      "height": "1px !important",
      "padding": "0 !important",
      "margin": "-1px !important",
      "overflow": "hidden !important",
      "clip": "rect(0, 0, 0, 0) !important",
      "white-space": "nowrap !important",
      "border": "0 !important"
  },
  ".stretched-link::after": {
      "position": "absolute",
      "top": "0",
      "right": "0",
      "bottom": "0",
      "left": "0",
      "z-index": "1",
      "content": "\"\""
  },
  ".text-truncate": {
      "overflow": "hidden",
      "-webkit-text-overflow": "ellipsis",
      "text-overflow": "ellipsis",
      "white-space": "nowrap"
  },
  ".vr": {
      "display": "inline-block",
      "-ms-flex-item-align": "stretch",
      "align-self": "stretch",
      "width": "1px",
      "min-height": "1em",
      "background-color": "currentColor",
      "opacity": "0.25"
  },
  ".animation": {
      "-webkit-animation-duration": "1s",
      "animation-duration": "1s",
      "-webkit-animation-fill-mode": "both",
      "animation-fill-mode": "both",
      "padding": "auto"
  },
  ".fade-in": {
      "-webkit-animation-name": "_fade-in",
      "animation-name": "_fade-in"
  },
  ".fade-out": {
      "-webkit-animation-name": "_fade-out",
      "animation-name": "_fade-out"
  },
  ".animation.infinite": {
      "-webkit-animation-iteration-count": "infinite",
      "animation-iteration-count": "infinite"
  },
  ".animation.delay-1s": {
      "-webkit-animation-delay": "1s",
      "animation-delay": "1s"
  },
  ".animation.delay-2s": {
      "-webkit-animation-delay": "2s",
      "animation-delay": "2s"
  },
  ".animation.delay-3s": {
      "-webkit-animation-delay": "3s",
      "animation-delay": "3s"
  },
  ".animation.delay-4s": {
      "-webkit-animation-delay": "4s",
      "animation-delay": "4s"
  },
  ".animation.delay-5s": {
      "-webkit-animation-delay": "5s",
      "animation-delay": "5s"
  },
  ".animation.fast": {
      "-webkit-animation-duration": "800ms",
      "animation-duration": "800ms"
  },
  ".animation.faster": {
      "-webkit-animation-duration": "500ms",
      "animation-duration": "500ms"
  },
  ".animation.slow": {
      "-webkit-animation-duration": "2s",
      "animation-duration": "2s"
  },
  ".animation.slower": {
      "-webkit-animation-duration": "3s",
      "animation-duration": "3s"
  },
  ".fade-in-down": {
      "-webkit-animation-name": "_fade-in-down",
      "animation-name": "_fade-in-down"
  },
  ".fade-in-left": {
      "-webkit-animation-name": "_fade-in-left",
      "animation-name": "_fade-in-left"
  },
  ".fade-in-right": {
      "-webkit-animation-name": "_fade-in-right",
      "animation-name": "_fade-in-right"
  },
  ".fade-in-up": {
      "-webkit-animation-name": "_fade-in-up",
      "animation-name": "_fade-in-up"
  },
  ".fade-out-down": {
      "-webkit-animation-name": "_fade-out-down",
      "animation-name": "_fade-out-down"
  },
  ".fade-out-left": {
      "-webkit-animation-name": "_fade-out-left",
      "animation-name": "_fade-out-left"
  },
  ".fade-out-right": {
      "-webkit-animation-name": "_fade-out-right",
      "animation-name": "_fade-out-right"
  },
  ".fade-out-up": {
      "-webkit-animation-name": "_fade-out-up",
      "animation-name": "_fade-out-up"
  },
  ".slide-in-down": {
      "-webkit-animation-name": "_slide-in-down",
      "animation-name": "_slide-in-down"
  },
  ".slide-in-left": {
      "-webkit-animation-name": "_slide-in-left",
      "animation-name": "_slide-in-left"
  },
  ".slide-in-right": {
      "-webkit-animation-name": "_slide-in-right",
      "animation-name": "_slide-in-right"
  },
  ".slide-in-up": {
      "-webkit-animation-name": "_slide-in-up",
      "animation-name": "_slide-in-up"
  },
  ".slide-out-down": {
      "-webkit-animation-name": "_slide-out-down",
      "animation-name": "_slide-out-down"
  },
  ".slide-out-left": {
      "-webkit-animation-name": "_slide-out-left",
      "animation-name": "_slide-out-left"
  },
  ".slide-out-right": {
      "-webkit-animation-name": "_slide-out-right",
      "animation-name": "_slide-out-right"
  },
  ".slide-out-up": {
      "-webkit-animation-name": "_slide-out-up",
      "animation-name": "_slide-out-up"
  },
  ".slide-down": {
      "-webkit-animation-name": "_slide-down",
      "animation-name": "_slide-down"
  },
  ".slide-left": {
      "-webkit-animation-name": "_slide-left",
      "animation-name": "_slide-left"
  },
  ".slide-right": {
      "-webkit-animation-name": "_slide-right",
      "animation-name": "_slide-right"
  },
  ".slide-up": {
      "-webkit-animation-name": "_slide-up",
      "animation-name": "_slide-up"
  },
  ".zoom-in": {
      "-webkit-animation-name": "_zoom-in",
      "animation-name": "_zoom-in"
  },
  ".zoom-out": {
      "-webkit-animation-name": "_zoom-out",
      "animation-name": "_zoom-out"
  },
  ".tada": {
      "-webkit-animation-name": "_tada",
      "animation-name": "_tada"
  },
  ".pulse": {
      "-webkit-animation-name": "_pulse",
      "animation-name": "_pulse"
  },
  ".ripple-surface": {
      "position": "relative",
      "overflow": "hidden",
      "display": "inline-block",
      "vertical-align": "bottom"
  },
  ".ripple-surface-unbound": {
      "overflow": "visible"
  },
  ".ripple-wave": {
      "background-image": "radial-gradient(circle, rgba(0, 0, 0, 0.2) 0, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.5) 60%, transparent 70%)",
      "border-radius": "50%",
      "opacity": "0.5",
      "pointer-events": "none",
      "position": "absolute",
      "touch-action": "none",
      "-webkit-transform": "scale(0)",
      "-ms-transform": "scale(0)",
      "transform": "scale(0)",
      "-webkit-transition-property": "transform, opacity",
      "transition-property": "transform, opacity",
      "-webkit-transition-timing-function": "cubic-bezier(0, 0, 0.15, 1), cubic-bezier(0, 0, 0.15, 1)",
      "transition-timing-function": "cubic-bezier(0, 0, 0.15, 1), cubic-bezier(0, 0, 0.15, 1)",
      "z-index": "999"
  },
  ".ripple-wave.active": {
      "-webkit-transform": "scale(1)",
      "-ms-transform": "scale(1)",
      "transform": "scale(1)",
      "opacity": "0"
  },
  ".btn .ripple-wave": {
      "background-image": "radial-gradient(circle, hsla(0deg, 0%, 100%, 0.2) 0, hsla(0deg, 0%, 100%, 0.3) 40%, hsla(0deg, 0%, 100%, 0.4) 50%, hsla(0deg, 0%, 100%, 0.5) 60%, hsla(0deg, 0%, 100%, 0) 70%)"
  },
  ".ripple-surface-primary .ripple-wave": {
      "background-image": "radial-gradient(circle, rgba(18, 102, 241, 0.2) 0, rgba(18, 102, 241, 0.3) 40%, rgba(18, 102, 241, 0.4) 50%, rgba(18, 102, 241, 0.5) 60%, rgba(18, 102, 241, 0) 70%)"
  },
  ".ripple-surface-secondary .ripple-wave": {
      "background-image": "radial-gradient(circle, rgba(178, 60, 253, 0.2) 0, rgba(178, 60, 253, 0.3) 40%, rgba(178, 60, 253, 0.4) 50%, rgba(178, 60, 253, 0.5) 60%, rgba(178, 60, 253, 0) 70%)"
  },
  ".ripple-surface-success .ripple-wave": {
      "background-image": "radial-gradient(circle, rgba(0, 183, 74, 0.2) 0, rgba(0, 183, 74, 0.3) 40%, rgba(0, 183, 74, 0.4) 50%, rgba(0, 183, 74, 0.5) 60%, rgba(0, 183, 74, 0) 70%)"
  },
  ".ripple-surface-info .ripple-wave": {
      "background-image": "radial-gradient(circle, rgba(57, 192, 237, 0.2) 0, rgba(57, 192, 237, 0.3) 40%, rgba(57, 192, 237, 0.4) 50%, rgba(57, 192, 237, 0.5) 60%, rgba(57, 192, 237, 0) 70%)"
  },
  ".ripple-surface-warning .ripple-wave": {
      "background-image": "radial-gradient(circle, rgba(255, 169, 0, 0.2) 0, rgba(255, 169, 0, 0.3) 40%, rgba(255, 169, 0, 0.4) 50%, rgba(255, 169, 0, 0.5) 60%, rgba(255, 169, 0, 0) 70%)"
  },
  ".ripple-surface-danger .ripple-wave": {
      "background-image": "radial-gradient(circle, rgba(249, 49, 84, 0.2) 0, rgba(249, 49, 84, 0.3) 40%, rgba(249, 49, 84, 0.4) 50%, rgba(249, 49, 84, 0.5) 60%, rgba(249, 49, 84, 0) 70%)"
  },
  ".ripple-surface-light .ripple-wave": {
      "background-image": "radial-gradient(circle, hsla(0deg, 0%, 98.4%, 0.2) 0, hsla(0deg, 0%, 98.4%, 0.3) 40%, hsla(0deg, 0%, 98.4%, 0.4) 50%, hsla(0deg, 0%, 98.4%, 0.5) 60%, hsla(0deg, 0%, 98.4%, 0) 70%)"
  },
  ".ripple-surface-dark .ripple-wave": {
      "background-image": "radial-gradient(circle, rgba(38, 38, 38, 0.2) 0, rgba(38, 38, 38, 0.3) 40%, rgba(38, 38, 38, 0.4) 50%, rgba(38, 38, 38, 0.5) 60%, rgba(38, 38, 38, 0) 70%)"
  },
  ".ripple-surface-white .ripple-wave": {
      "background-image": "radial-gradient(circle, hsla(0deg, 0%, 100%, 0.2) 0, hsla(0deg, 0%, 100%, 0.3) 40%, hsla(0deg, 0%, 100%, 0.4) 50%, hsla(0deg, 0%, 100%, 0.5) 60%, hsla(0deg, 0%, 100%, 0) 70%)"
  },
  ".ripple-surface-black .ripple-wave": {
      "background-image": "radial-gradient(circle, rgba(0, 0, 0, 0.2) 0, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.5) 60%, transparent 70%)"
  },
  ".datepicker-toggle-button": {
      "position": "absolute",
      "outline": "none",
      "border": "none",
      "background-color": "transparent",
      "right": "10px",
      "top": "50%",
      "-webkit-transform": "translate(-50%, -50%)",
      "-ms-transform": "translate(-50%, -50%)",
      "transform": "translate(-50%, -50%)"
  },
  ".datepicker-toggle-button:focus": {
      "color": "#2979ff"
  },
  ".datepicker-toggle-button:hover": {
      "color": "#2979ff"
  },
  ".datepicker-backdrop": {
      "width": "100%",
      "height": "100%",
      "position": "fixed",
      "top": "0",
      "right": "0",
      "bottom": "0",
      "left": "0",
      "background-color": "rgba(0, 0, 0, 0.4)",
      "z-index": "1065"
  },
  ".datepicker-dropdown-container": {
      "width": "328px",
      "height": "380px",
      "background-color": "#fff",
      "border-radius": "0.5rem",
      "box-shadow": "0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      "z-index": "1066"
  },
  ".datepicker-modal-container": {
      "display": "flex",
      "-webkit-flex-direction": "column",
      "-ms-flex-direction": "column",
      "flex-direction": "column",
      "position": "fixed",
      "top": "50%",
      "left": "50%",
      "-webkit-transform": "translate(-50%, -50%)",
      "-ms-transform": "translate(-50%, -50%)",
      "transform": "translate(-50%, -50%)",
      "width": "328px",
      "height": "512px",
      "background-color": "#fff",
      "border-radius": "0.6rem 0.6rem 0.5rem 0.5rem",
      "box-shadow": "0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      "z-index": "1066"
  },
  ".datepicker-header": {
      "height": "120px",
      "padding-right": "24px",
      "padding-left": "24px",
      "background-color": "#2979ff",
      "display": "flex",
      "-webkit-flex-direction": "column",
      "-ms-flex-direction": "column",
      "flex-direction": "column",
      "border-radius": "0.5rem 0.5rem 0 0"
  },
  ".datepicker-title": {
      "height": "32px",
      "display": "flex",
      "-webkit-flex-direction": "column",
      "-ms-flex-direction": "column",
      "flex-direction": "column",
      "-webkit-box-pack": "end",
      "-webkit-justify-content": "flex-end",
      "-ms-flex-pack": "end",
      "justify-content": "flex-end"
  },
  ".datepicker-title-text": {
      "font-size": "10px",
      "font-weight": "400",
      "-webkit-text-transform": "uppercase",
      "text-transform": "uppercase",
      "letter-spacing": "1.7px",
      "color": "#fff"
  },
  ".datepicker-date": {
      "height": "72px",
      "display": "flex",
      "-webkit-flex-direction": "column",
      "-ms-flex-direction": "column",
      "flex-direction": "column",
      "-webkit-box-pack": "end",
      "-webkit-justify-content": "flex-end",
      "-ms-flex-pack": "end",
      "justify-content": "flex-end"
  },
  ".datepicker-date-text": {
      "font-size": "34px",
      "font-weight": "400",
      "color": "#fff"
  },
  ".datepicker-main": {
      "position": "relative",
      "height": "100%"
  },
  ".datepicker-date-controls": {
      "padding": "10px 12px 0 12px",
      "display": "flex",
      "-webkit-box-pack": "space-between",
      "-webkit-justify-content": "space-between",
      "-ms-flex-pack": "space-between",
      "justify-content": "space-between",
      "color": "rgba(0, 0, 0, 0.64)"
  },
  ".datepicker-arrow": {
      "display": "inline-block",
      "width": "0",
      "height": "0",
      "border-left": "5px solid transparent",
      "border-right": "5px solid transparent",
      "border-top-width": "5px",
      "border-top-style": "solid",
      "margin": "0 0 0 5px",
      "vertical-align": "middle"
  },
  ".datepicker-arrow-up": {
      "display": "inline-block",
      "width": "0",
      "height": "0",
      "border-left": "5px solid transparent",
      "border-right": "5px solid transparent",
      "border-top-width": "5px",
      "border-top-style": "solid",
      "margin": "0 0 0 5px",
      "vertical-align": "middle",
      "-webkit-transform": "rotate(180deg)",
      "-ms-transform": "rotate(180deg)",
      "transform": "rotate(180deg)"
  },
  ".datepicker-view-change-button": {
      "padding": "10px",
      "color": "#666",
      "font-weight": "500",
      "font-size": "0.9rem",
      "border-radius": "10px",
      "box-shadow": "none",
      "background-color": "transparent",
      "margin": "0",
      "border": "none"
  },
  ".datepicker-view-change-button:hover": {
      "background-color": "#eee"
  },
  ".datepicker-view-change-button:focus": {
      "background-color": "#eee"
  },
  ".datepicker-view-change-button:after": {
      "content": "\"\"",
      "display": "inline-block",
      "width": "0",
      "height": "0",
      "border-left": "5px solid transparent",
      "border-right": "5px solid transparent",
      "border-top-width": "5px",
      "border-top-style": "solid",
      "margin": "0 0 0 5px",
      "vertical-align": "middle"
  },
  ".datepicker-arrow-controls": {
      "margin-top": "10px"
  },
  ".datepicker-previous-button": {
      "position": "relative",
      "padding": "0",
      "width": "40px",
      "height": "40px",
      "line-height": "40px",
      "border": "none",
      "outline": "none",
      "margin": "0",
      "color": "rgba(0, 0, 0, 0.64)",
      "background-color": "transparent",
      "margin-right": "24px"
  },
  ".datepicker-previous-button:hover": {
      "background-color": "#eee",
      "border-radius": "50%"
  },
  ".datepicker-previous-button:focus": {
      "background-color": "#eee",
      "border-radius": "50%"
  },
  ".datepicker-previous-button::after": {
      "top": "0",
      "left": "0",
      "right": "0",
      "bottom": "0",
      "position": "absolute",
      "content": "\"\"",
      "margin": "15.5px",
      "border": "0 solid currentColor",
      "border-top-width": "2px",
      "border-left-width": "2px",
      "-webkit-transform": "translateX(2px) rotate(-45deg)",
      "-ms-transform": "translateX(2px) rotate(-45deg)",
      "transform": "translateX(2px) rotate(-45deg)"
  },
  ".datepicker-next-button": {
      "position": "relative",
      "padding": "0",
      "width": "40px",
      "height": "40px",
      "line-height": "40px",
      "border": "none",
      "outline": "none",
      "margin": "0",
      "color": "rgba(0, 0, 0, 0.64)",
      "background-color": "transparent"
  },
  ".datepicker-next-button:hover": {
      "background-color": "#eee",
      "border-radius": "50%"
  },
  ".datepicker-next-button:focus": {
      "background-color": "#eee",
      "border-radius": "50%"
  },
  ".datepicker-next-button::after": {
      "top": "0",
      "left": "0",
      "right": "0",
      "bottom": "0",
      "position": "absolute",
      "content": "\"\"",
      "margin": "15.5px",
      "border": "0 solid currentColor",
      "border-top-width": "2px",
      "border-right-width": "2px",
      "-webkit-transform": "translateX(-2px) rotate(45deg)",
      "-ms-transform": "translateX(-2px) rotate(45deg)",
      "transform": "translateX(-2px) rotate(45deg)"
  },
  ".datepicker-view": {
      "padding-left": "12px",
      "padding-right": "12px",
      "outline": "none"
  },
  ".datepicker-table": {
      "margin-right": "auto",
      "margin-left": "auto",
      "width": "304px"
  },
  ".datepicker-day-heading": {
      "width": "40px",
      "height": "40px",
      "-webkit-text-align": "center",
      "text-align": "center",
      "font-size": "12px",
      "font-weight": "400"
  },
  ".datepicker-cell": {
      "-webkit-text-align": "center",
      "text-align": "center"
  },
  ".datepicker-cell.disabled": {
      "color": "#ccc",
      "cursor": "default",
      "pointer-events": "none"
  },
  ".datepicker-cell.disabled:hover": {
      "cursor": "default"
  },
  ".datepicker-cell:hover": {
      "cursor": "pointer"
  },
  ".datepicker-cell:not(.disabled):not(.selected):hover .datepicker-cell-content": {
      "background-color": "#d3d3d3"
  },
  ".datepicker-cell.selected .datepicker-cell-content": {
      "background-color": "#2979ff",
      "color": "#fff"
  },
  ".datepicker-cell:not(.selected).focused .datepicker-cell-content": {
      "background-color": "#eee"
  },
  ".datepicker-cell.focused .datepicker-cell-content.selected": {
      "background-color": "#2979ff"
  },
  ".datepicker-cell.current .datepicker-cell-content": {
      "border": "1px solid #000"
  },
  ".datepicker-small-cell": {
      "width": "40px",
      "height": "40px"
  },
  ".datepicker-small-cell-content": {
      "width": "36px",
      "height": "36px",
      "line-height": "36px",
      "border-radius": "50%",
      "font-size": "13px"
  },
  ".datepicker-large-cell": {
      "width": "76px",
      "height": "42px"
  },
  ".datepicker-large-cell-content": {
      "width": "72px",
      "height": "40px",
      "line-height": "40px",
      "padding": "1px 2px",
      "border-radius": "999px"
  },
  ".datepicker-yearview-content": {
      "padding-left": "12px",
      "padding-right": "12px"
  },
  ".datepicker-footer": {
      "height": "56px",
      "display": "flex",
      "position": "absolute",
      "width": "100%",
      "bottom": "0",
      "-webkit-box-pack": "end",
      "-webkit-justify-content": "flex-end",
      "-ms-flex-pack": "end",
      "justify-content": "flex-end",
      "-webkit-align-items": "center",
      "-webkit-box-align": "center",
      "-ms-flex-align": "center",
      "align-items": "center",
      "padding-left": "12px",
      "padding-right": "12px"
  },
  ".datepicker-footer-btn": {
      "background-color": "#fff",
      "color": "#2979ff",
      "border": "none",
      "cursor": "pointer",
      "padding": "0 10px",
      "-webkit-text-transform": "uppercase",
      "text-transform": "uppercase",
      "font-size": "0.8rem",
      "font-weight": "500",
      "height": "40px",
      "line-height": "40px",
      "letter-spacing": "0.1rem",
      "border-radius": "10px",
      "margin-bottom": "10px"
  },
  ".datepicker-footer-btn:hover": {
      "background-color": "#eee"
  },
  ".datepicker-footer-btn:focus": {
      "background-color": "#eee"
  },
  ".datepicker-clear-btn": {
      "margin-right": "auto"
  },
  ".timepicker-wrapper": {
      "touch-action": "none",
      "z-index": "1065",
      "opacity": "0",
      "right": "0",
      "bottom": "0",
      "top": "0",
      "left": "0",
      "background-color": "rgba(0, 0, 0, 0.4)"
  },
  ".timepicker-wrapper-inline": {
      "border-radius": "0.5rem"
  },
  ".timepicker-elements": {
      "min-width": "310px",
      "min-height": "325px",
      "background": "#fff",
      "border-top-right-radius": "0.6rem",
      "border-top-left-radius": "0.6rem"
  },
  ".timepicker-elements-inline": {
      "min-height": "auto"
  },
  ".timepicker-head": {
      "background-color": "#2979ff",
      "height": "100px",
      "border-top-right-radius": "0.5rem",
      "border-top-left-radius": "0.5rem",
      "padding": "10px 24px 10px 50px"
  },
  ".timepicker-head-inline": {
      "padding": "0",
      "border-bottom-right-radius": "0.5rem",
      "border-bottom-left-radius": "0.5rem"
  },
  ".timepicker-button": {
      "font-size": "0.8rem",
      "min-width": "64px",
      "box-sizing": "border-box",
      "font-weight": "500",
      "line-height": "40px",
      "border-radius": "10px",
      "letter-spacing": "0.1rem",
      "-webkit-text-transform": "uppercase",
      "text-transform": "uppercase",
      "color": "#2979ff",
      "border": "none",
      "background-color": "transparent",
      "-webkit-transition": "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      "transition": "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      "outline": "none",
      "padding": "0 10px",
      "height": "40px",
      "margin-bottom": "10px"
  },
  ".timepicker-button:hover": {
      "background-color": "rgba(0, 0, 0, 0.08)"
  },
  ".timepicker-button:focus": {
      "outline": "none",
      "background-color": "rgba(0, 0, 0, 0.08)"
  },
  ".timepicker-submit-inline": {
      "border-radius": "100%",
      "height": "48px",
      "min-width": "48px",
      "display": "inline-block",
      "margin-left": "30px",
      "color": "#fff"
  },
  ".timepicker-current": {
      "font-size": "3.75rem",
      "font-weight": "300",
      "line-height": "1.2",
      "letter-spacing": "-0.00833em",
      "color": "#fff",
      "opacity": "0.54",
      "border": "none",
      "background": "transparent",
      "padding": "0"
  },
  ".timepicker-current.active": {
      "opacity": "1"
  },
  ".timepicker-current-wrapper": {
      "direction": "ltr"
  },
  ".timepicker-mode-wrapper": {
      "margin-left": "20px",
      "font-size": "18px",
      "color": "rgba(255, 255, 255, 0.54)"
  },
  ".timepicker-mode-wrapper.active": {
      "opacity": "1"
  },
  ".timepicker-clock-wrapper": {
      "min-width": "310px",
      "max-width": "325px",
      "min-height": "305px",
      "overflow-x": "hidden",
      "height": "100%"
  },
  ".timepicker-clock": {
      "position": "relative",
      "border-radius": "100%",
      "width": "260px",
      "height": "260px",
      "cursor": "default",
      "margin": "0 auto",
      "background-color": "rgba(0, 0, 0, 0.07)"
  },
  ".timepicker-clock-inner": {
      "position": "absolute",
      "top": "50%",
      "left": "50%",
      "-webkit-transform": "translate(-50%, -50%)",
      "-ms-transform": "translate(-50%, -50%)",
      "transform": "translate(-50%, -50%)",
      "width": "160px",
      "height": "160px",
      "border-radius": "100%"
  },
  ".timepicker-time-tips-minutes": {
      "position": "absolute",
      "border-radius": "100%",
      "width": "32px",
      "height": "32px",
      "-webkit-text-align": "center",
      "text-align": "center",
      "cursor": "pointer",
      "font-size": "1.1rem",
      "background-color": "transparent",
      "display": "flex",
      "-webkit-box-pack": "center",
      "-webkit-justify-content": "center",
      "-ms-flex-pack": "center",
      "justify-content": "center",
      "-webkit-align-items": "center",
      "-webkit-box-align": "center",
      "-ms-flex-align": "center",
      "align-items": "center",
      "font-weight": "300"
  },
  ".timepicker-time-tips-inner": {
      "position": "absolute",
      "border-radius": "100%",
      "width": "32px",
      "height": "32px",
      "-webkit-text-align": "center",
      "text-align": "center",
      "cursor": "pointer",
      "font-size": "1.1rem",
      "background-color": "transparent",
      "display": "flex",
      "-webkit-box-pack": "center",
      "-webkit-justify-content": "center",
      "-ms-flex-pack": "center",
      "justify-content": "center",
      "-webkit-align-items": "center",
      "-webkit-box-align": "center",
      "-ms-flex-align": "center",
      "align-items": "center",
      "font-weight": "300"
  },
  ".timepicker-time-tips-hours": {
      "position": "absolute",
      "border-radius": "100%",
      "width": "32px",
      "height": "32px",
      "-webkit-text-align": "center",
      "text-align": "center",
      "cursor": "pointer",
      "font-size": "1.1rem",
      "background-color": "transparent",
      "display": "flex",
      "-webkit-box-pack": "center",
      "-webkit-justify-content": "center",
      "-ms-flex-pack": "center",
      "justify-content": "center",
      "-webkit-align-items": "center",
      "-webkit-box-align": "center",
      "-ms-flex-align": "center",
      "align-items": "center",
      "font-weight": "300"
  },
  ".timepicker-time-tips-minutes.active": {
      "color": "#fff",
      "background-color": "#2979ff",
      "font-weight": "400"
  },
  ".timepicker-time-tips-inner.active": {
      "color": "#fff",
      "background-color": "#2979ff",
      "font-weight": "400"
  },
  ".timepicker-time-tips-hours.active": {
      "color": "#fff",
      "background-color": "#2979ff",
      "font-weight": "400"
  },
  ".timepicker-time-tips-minutes:focus": {
      "outline": "none"
  },
  ".timepicker-time-tips-inner:focus": {
      "outline": "none"
  },
  ".timepicker-time-tips-hours:focus": {
      "outline": "none"
  },
  ".timepicker-time-tips-minutes.disabled": {
      "color": "#b3afaf",
      "pointer-events": "none",
      "background-color": "transparent"
  },
  ".timepicker-time-tips-inner.disabled": {
      "color": "#b3afaf",
      "pointer-events": "none",
      "background-color": "transparent"
  },
  ".timepicker-time-tips-hours.disabled": {
      "color": "#b3afaf",
      "pointer-events": "none",
      "background-color": "transparent"
  },
  ".timepicker-time-tips-minutes::selection": {
      "background-color": "transparent"
  },
  ".timepicker-time-tips-inner::selection": {
      "background-color": "transparent"
  },
  ".timepicker-time-tips-hours::selection": {
      "background-color": "transparent"
  },
  ".timepicker-dot": {
      "font-weight": "300",
      "line-height": "1.2",
      "letter-spacing": "-0.00833em",
      "color": "#fff",
      "font-size": "3.75rem",
      "opacity": "0.54",
      "border": "none",
      "background": "transparent",
      "padding": "0"
  },
  ".timepicker-current-inline": {
      "font-size": "2.5rem"
  },
  ".timepicker-item": {
      "position": "absolute",
      "border-radius": "100%",
      "width": "20px",
      "height": "20px",
      "-webkit-text-align": "center",
      "text-align": "center",
      "padding": "10px",
      "-webkit-user-select": "none",
      "-moz-user-select": "none",
      "-ms-user-select": "none",
      "user-select": "none",
      "cursor": "default",
      "font-size": "1.1em",
      "z-index": "3"
  },
  ".timepicker-middle-dot": {
      "top": "50%",
      "left": "50%",
      "width": "6px",
      "height": "6px",
      "-webkit-transform": "translate(-50%, -50%)",
      "-ms-transform": "translate(-50%, -50%)",
      "transform": "translate(-50%, -50%)",
      "border-radius": "50%",
      "background-color": "#2979ff"
  },
  ".timepicker-hand-pointer": {
      "background-color": "#2979ff",
      "bottom": "50%",
      "height": "40%",
      "left": "calc(50% - 1px)",
      "-webkit-transform-origin": "center bottom 0",
      "-ms-transform-origin": "center bottom 0",
      "transform-origin": "center bottom 0",
      "width": "2px"
  },
  ".timepicker-transform": {
      "-webkit-transition": "transform 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, height 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      "transition": "transform 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, height 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
  },
  ".timepicker-time-tips": {
      "position": "absolute",
      "border-radius": "100%",
      "width": "32px",
      "height": "32px",
      "-webkit-text-align": "center",
      "text-align": "center",
      "cursor": "pointer",
      "font-size": "1.1rem"
  },
  ".timepicker-time-tips.active": {
      "color": "#fff"
  },
  ".timepicker-circle": {
      "top": "-21px",
      "left": "-15px",
      "width": "4px",
      "border": "14px solid #2979ff",
      "height": "4px",
      "box-sizing": "content-box",
      "border-radius": "100%"
  },
  ".timepicker-hour-mode": {
      "padding": "0",
      "background-color": "transparent",
      "border": "none",
      "color": "#fff",
      "opacity": "0.54",
      "cursor": "pointer"
  },
  ".timepicker-hour": {
      "cursor": "pointer"
  },
  ".timepicker-minute": {
      "cursor": "pointer"
  },
  ".timepicker-hour-mode:hover": {
      "background-color": "rgba(0, 0, 0, 0.15)",
      "outline": "none"
  },
  ".timepicker-hour-mode:focus": {
      "background-color": "rgba(0, 0, 0, 0.15)",
      "outline": "none"
  },
  ".timepicker-hour:hover": {
      "background-color": "rgba(0, 0, 0, 0.15)",
      "outline": "none"
  },
  ".timepicker-hour:focus": {
      "background-color": "rgba(0, 0, 0, 0.15)",
      "outline": "none"
  },
  ".timepicker-minute:hover": {
      "background-color": "rgba(0, 0, 0, 0.15)",
      "outline": "none"
  },
  ".timepicker-minute:focus": {
      "background-color": "rgba(0, 0, 0, 0.15)",
      "outline": "none"
  },
  ".timepicker-hour-mode.active": {
      "color": "#fff",
      "opacity": "1"
  },
  ".timepicker-hour.active": {
      "color": "#fff",
      "opacity": "1"
  },
  ".timepicker-minute.active": {
      "color": "#fff",
      "opacity": "1"
  },
  ".timepicker-hour-mode-current-inline": {
      "font-size": "2.5rem"
  },
  ".timepicker-hour-current-inline": {
      "font-size": "2.5rem"
  },
  ".timepicker-minute-current-inline": {
      "font-size": "2.5rem"
  },
  ".timepicker-footer": {
      "border-bottom-left-radius": "0.5rem",
      "border-bottom-right-radius": "0.5rem",
      "display": "flex",
      "-webkit-box-pack": "space-between",
      "-webkit-justify-content": "space-between",
      "-ms-flex-pack": "space-between",
      "justify-content": "space-between",
      "-webkit-align-items": "center",
      "-webkit-box-align": "center",
      "-ms-flex-align": "center",
      "align-items": "center",
      "width": "100%",
      "height": "56px",
      "padding-left": "12px",
      "padding-right": "12px",
      "background-color": "#fff"
  },
  ".timepicker-container": {
      "max-height": "calc(100% - 64px)",
      "overflow-y": "auto",
      "box-shadow": "0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
  },
  ".timepicker-icon-up": {
      "opacity": "0",
      "-webkit-transition": "0.2s ease all",
      "transition": "0.2s ease all",
      "cursor": "pointer",
      "-webkit-transform": "translate(-50%, -50%)",
      "-ms-transform": "translate(-50%, -50%)",
      "transform": "translate(-50%, -50%)",
      "left": "50%",
      "width": "30px",
      "height": "30px",
      "display": "flex",
      "-webkit-box-pack": "center",
      "-webkit-justify-content": "center",
      "-ms-flex-pack": "center",
      "justify-content": "center",
      "-webkit-align-items": "center",
      "-webkit-box-align": "center",
      "-ms-flex-align": "center",
      "align-items": "center",
      "top": "-35px"
  },
  ".timepicker-icon-down": {
      "opacity": "0",
      "-webkit-transition": "0.2s ease all",
      "transition": "0.2s ease all",
      "cursor": "pointer",
      "-webkit-transform": "translate(-50%, -50%)",
      "-ms-transform": "translate(-50%, -50%)",
      "transform": "translate(-50%, -50%)",
      "left": "50%",
      "width": "30px",
      "height": "30px",
      "display": "flex",
      "-webkit-box-pack": "center",
      "-webkit-justify-content": "center",
      "-ms-flex-pack": "center",
      "justify-content": "center",
      "-webkit-align-items": "center",
      "-webkit-box-align": "center",
      "-ms-flex-align": "center",
      "align-items": "center",
      "bottom": "-47px"
  },
  ".timepicker-icon-up.active": {
      "opacity": "1"
  },
  ".timepicker-icon-up:hover": {
      "opacity": "1"
  },
  ".timepicker-icon-down.active": {
      "opacity": "1"
  },
  ".timepicker-icon-down:hover": {
      "opacity": "1"
  },
  ".timepicker-inline-hour-icons button": {
      "opacity": "1 !important",
      "cursor": "default"
  },
  ".timepicker-inline-minutes-icons button": {
      "opacity": "1 !important",
      "cursor": "default"
  },
  ".timepicker-inline-hour-icons button:hover": {
      "background-color": "unset !important"
  },
  ".timepicker-inline-minutes-icons button:hover": {
      "background-color": "unset !important"
  },
  ".timepicker-clock-animation": {
      "-webkit-animation": "_show-up-clock 350ms linear",
      "animation": "_show-up-clock 350ms linear"
  },
  ".timepicker-icon-btn": {
      "width": "30px",
      "height": "30px"
  },
  ".timepicker-toggle-button": {
      "position": "absolute",
      "outline": "none",
      "border": "none",
      "background-color": "transparent",
      "right": "10px",
      "top": "50%",
      "-webkit-transform": "translate(-50%, -50%)",
      "-ms-transform": "translate(-50%, -50%)",
      "transform": "translate(-50%, -50%)",
      "-webkit-transition": "all 0.3s ease",
      "transition": "all 0.3s ease",
      "cursor": "pointer"
  },
  ".timepicker-toggle-button:hover": {
      "color": "#2979ff"
  },
  ".timepicker-toggle-button:focus": {
      "color": "#2979ff"
  },
  ".timepicker-input:focus + .timepicker-toggle-button": {
      "color": "#2979ff"
  },
  ".timepicker-input:focus + .timepicker-toggle-button i": {
      "color": "#2979ff"
  },
  ".timepicker a.timepicker-toggle-button": {
      "right": "1px"
  },
  ".timepicker-toggle-button.timepicker-icon": {
      "right": "1px"
  },
  ".justify-content-evenly": {
      "-webkit-box-pack": "space-evenly",
      "-webkit-justify-content": "space-evenly",
      "-ms-flex-pack": "space-evenly",
      "justify-content": "space-evenly"
  },
  ".timepicker-modal": {
      "z-index": "1065",
      "position": "fixed",
      "top": "0",
      "left": "0",
      "width": "100%",
      "height": "100%"
  },
  ".timepicker-modal .fade.show": {
      "opacity": "1"
  },
  ".stepper": {
      "position": "relative",
      "padding": "0",
      "margin": "0",
      "width": "100%",
      "list-style": "none",
      "overflow": "hidden",
      "-webkit-transition": "height 0.2s ease-in-out",
      "transition": "height 0.2s ease-in-out"
  },
  ".stepper:not(.stepper-vertical)": {
      "display": "flex",
      "-webkit-box-pack": "space-between",
      "-webkit-justify-content": "space-between",
      "-ms-flex-pack": "space-between",
      "justify-content": "space-between"
  },
  ".stepper:not(.stepper-vertical) .stepper-content": {
      "position": "absolute",
      "width": "100%",
      "padding": "1rem"
  },
  ".stepper:not(.stepper-vertical) .stepper-step": {
      "-webkit-flex": "auto",
      "-ms-flex": "auto",
      "flex": "auto",
      "height": "4.5rem"
  },
  ".stepper:not(.stepper-vertical) .stepper-step:first-child .stepper-head": {
      "padding-left": "1.5rem"
  },
  ".stepper:not(.stepper-vertical) .stepper-step:last-child .stepper-head": {
      "padding-right": "1.5rem"
  },
  ".stepper:not(.stepper-vertical) .stepper-step:not(:first-child) .stepper-head:before": {
      "-webkit-flex": "1",
      "-ms-flex": "1",
      "flex": "1",
      "height": "1px",
      "width": "100%",
      "margin-right": "0.5rem",
      "content": "\"\"",
      "background-color": "rgba(0, 0, 0, 0.1)"
  },
  ".stepper:not(.stepper-vertical) .stepper-step:not(:last-child) .stepper-head:after": {
      "-webkit-flex": "1",
      "-ms-flex": "1",
      "flex": "1",
      "height": "1px",
      "width": "100%",
      "margin-left": "0.5rem",
      "content": "\"\"",
      "background-color": "rgba(0, 0, 0, 0.1)"
  },
  ".stepper:not(.stepper-vertical) .stepper-head-icon": {
      "margin": "1.5rem 0.5rem 1.5rem 0"
  },
  ".stepper-vertical .stepper-step": {
      "height": "fit-content",
      "position": "relative"
  },
  ".stepper-vertical .stepper-step:not(:last-child):after": {
      "position": "absolute",
      "left": "2.25rem",
      "height": "calc(100% - 2.45rem)",
      "top": "3rem",
      "width": "1px",
      "margin-top": "0.5rem",
      "content": "\"\"",
      "background-color": "rgba(0, 0, 0, 0.1)"
  },
  ".stepper-vertical .stepper-content": {
      "overflow": "hidden",
      "padding": "1rem 1.5rem 1.5rem 3.75rem",
      "-webkit-transition": "height 0.3s ease-in-out, margin-top 0.3s ease-in-out, margin-bottom 0.3s ease-in-out, padding-top 0.3s ease-in-out, padding-bottom 0.3s ease-in-out",
      "transition": "height 0.3s ease-in-out, margin-top 0.3s ease-in-out, margin-bottom 0.3s ease-in-out, padding-top 0.3s ease-in-out, padding-bottom 0.3s ease-in-out"
  },
  ".stepper-vertical .stepper-content-hide": {
      "margin-top": "0 !important",
      "margin-bottom": "0 !important",
      "padding-top": "0 !important",
      "padding-bottom": "0 !important",
      "height": "0 !important"
  },
  ".stepper-vertical .stepper-head": {
      "padding": "1.5rem"
  },
  ".stepper-vertical .stepper-head-icon": {
      "margin-right": "0.75rem"
  },
  ".stepper-vertical .stepper-head-text:after": {
      "position": "absolute"
  },
  ".stepper.stepper-mobile": {
      "-webkit-box-pack": "center",
      "-webkit-justify-content": "center",
      "-ms-flex-pack": "center",
      "justify-content": "center",
      "-webkit-align-items": "flex-end",
      "-webkit-box-align": "flex-end",
      "-ms-flex-align": "flex-end",
      "align-items": "flex-end"
  },
  ".stepper.stepper-mobile.stepper-progress-bar .stepper-head-icon": {
      "display": "none"
  },
  ".stepper.stepper-mobile .stepper-step": {
      "-webkit-flex": "unset",
      "-ms-flex": "unset",
      "flex": "unset",
      "height": "fit-content",
      "margin": "1rem 0 1rem 0"
  },
  ".stepper.stepper-mobile .stepper-step:not(:last-child) .stepper-head:after": {
      "margin-left": "0"
  },
  ".stepper.stepper-mobile .stepper-step:not(:first-child) .stepper-head:before": {
      "margin-right": "0"
  },
  ".stepper.stepper-mobile .stepper-step:not(:last-child):not(:first-child) .stepper-head": {
      "padding-left": "0.25rem",
      "padding-right": "0.25rem"
  },
  ".stepper.stepper-mobile .stepper-head-icon": {
      "font-size": "0",
      "margin": "0",
      "height": "0.5rem",
      "width": "0.5rem",
      "z-index": "1"
  },
  ".stepper.stepper-mobile .stepper-head-text": {
      "display": "none"
  },
  ".stepper.stepper-mobile .stepper-content": {
      "top": "2.56rem"
  },
  ".stepper-form": {
      "display": "inherit",
      "-webkit-box-pack": "inherit",
      "-webkit-justify-content": "inherit",
      "-ms-flex-pack": "inherit",
      "justify-content": "inherit",
      "width": "inherit",
      "position": "inherit"
  },
  ".stepper-content": {
      "left": "0"
  },
  ".stepper-head": {
      "display": "flex",
      "-webkit-align-items": "center",
      "-webkit-box-align": "center",
      "-ms-flex-align": "center",
      "align-items": "center",
      "-webkit-text-decoration": "none",
      "text-decoration": "none",
      "color": "unset",
      "line-height": "1.3",
      "cursor": "pointer"
  },
  ".stepper-head:hover": {
      "background-color": "#dbdbdb"
  },
  ".stepper-head:focus": {
      "outline": "none"
  },
  ".stepper-head-text:after": {
      "display": "flex",
      "font-size": "0.8rem",
      "content": "attr(data-content)"
  },
  ".stepper-head-icon": {
      "display": "flex",
      "-webkit-box-pack": "center",
      "-webkit-justify-content": "center",
      "-ms-flex-pack": "center",
      "justify-content": "center",
      "-webkit-align-items": "center",
      "-webkit-box-align": "center",
      "-ms-flex-align": "center",
      "align-items": "center",
      "color": "white",
      "background-color": "gray",
      "border-radius": "100%",
      "font-size": "0.875rem",
      "width": "1.5rem",
      "height": "1.5rem"
  },
  ".stepper-completed .stepper-head-icon": {
      "background-color": "#198754"
  },
  ".stepper-active .stepper-head-text": {
      "font-weight": "500"
  },
  ".stepper-active .stepper-content": {
      "display": "block"
  },
  ".stepper-active .stepper-head-icon": {
      "background-color": "#0d6efd"
  },
  ".stepper-invalid .stepper-head-icon": {
      "background-color": "#dc3545"
  },
  ".stepper-disabled .stepper-head": {
      "color": "#858585",
      "cursor": "default"
  },
  ".stepper-disabled .stepper-head-icon": {
      "background-color": "#858585"
  },
  ".stepper-mobile-head": {
      "position": "absolute",
      "-ms-flex-item-align": "normal",
      "align-self": "normal",
      "height": "fit-content",
      "width": "100%",
      "padding": "0.5rem 1rem 0.5rem 1rem"
  },
  ".stepper-mobile-footer": {
      "position": "absolute",
      "display": "flex",
      "-webkit-box-pack": "space-between",
      "-webkit-justify-content": "space-between",
      "-ms-flex-pack": "space-between",
      "justify-content": "space-between",
      "-webkit-align-items": "center",
      "-webkit-box-align": "center",
      "-ms-flex-align": "center",
      "align-items": "center",
      "width": "100%",
      "height": "2.5rem"
  },
  ".stepper-back-btn": {
      "display": "block",
      "left": "0"
  },
  ".stepper-back-btn .btn-link": {
      "color": "unset"
  },
  ".stepper-back-btn i": {
      "margin-right": "0.5rem"
  },
  ".stepper-next-btn": {
      "display": "block",
      "right": "0"
  },
  ".stepper-next-btn .btn-link": {
      "color": "unset"
  },
  ".stepper-next-btn i": {
      "margin-left": "0.5rem"
  },
  ".stepper-mobile-progress-bar": {
      "height": "0.3rem",
      "width": "0"
  },
  ".stepper-mobile-progress": {
      "height": "0.3rem",
      "-webkit-flex-grow": "100",
      "-ms-flex-grow": "100",
      "flex-grow": "100",
      "background-color": "#dee2e6"
  },
  ".stepper-horizontal": {
      "overflow-x": "hidden"
  },
  ".collapse": {
      "visibility": "visible !important"
  },
  "@media (prefers-reduced-motion: reduce)": {
      ".form-control::file-selector-button": {
          "-webkit-transition": "none",
          "transition": "none"
      },
      ".form-control::-webkit-file-upload-button": {
          "-webkit-transition": "none",
          "transition": "none"
      },
      ".form-switch .form-check-input": {
          "-webkit-transition": "none",
          "transition": "none"
      },
      ".form-range::-webkit-slider-thumb": {
          "-webkit-transition": "none",
          "transition": "none"
      },
      ".form-range::-moz-range-thumb": {
          "-webkit-transition": "none",
          "transition": "none"
      },
      ".form-floating > label": {
          "-webkit-transition": "none",
          "transition": "none"
      },
      ".fade": {
          "-webkit-transition": "none",
          "transition": "none"
      },
      ".collapsing": {
          "-webkit-transition": "none",
          "transition": "none"
      },
      ".collapsing.collapse-horizontal": {
          "-webkit-transition": "none",
          "transition": "none"
      },
      ".accordion-button::after": {
          "-webkit-transition": "none",
          "transition": "none"
      },
      ".modal.fade .modal-dialog": {
          "-webkit-transition": "none",
          "transition": "none"
      },
      ".carousel-item": {
          "-webkit-transition": "none",
          "transition": "none"
      },
      ".carousel-fade .active.carousel-item-start": {
          "-webkit-transition": "none",
          "transition": "none"
      },
      ".carousel-fade .active.carousel-item-end": {
          "-webkit-transition": "none",
          "transition": "none"
      },
      ".carousel-control-prev": {
          "-webkit-transition": "none",
          "transition": "none"
      },
      ".carousel-control-next": {
          "-webkit-transition": "none",
          "transition": "none"
      },
      ".carousel-indicators [data-bs-target]": {
          "-webkit-transition": "none",
          "transition": "none"
      },
      ".spinner-border": {
          "-webkit-animation-duration": "1.5s",
          "animation-duration": "1.5s"
      },
      ".spinner-grow": {
          "-webkit-animation-duration": "1.5s",
          "animation-duration": "1.5s"
      }
  },
  "@media (min-width: 576px)": {
      ".navbar-expand-sm": {
          "-webkit-flex-wrap": "nowrap",
          "-ms-flex-wrap": "nowrap",
          "flex-wrap": "nowrap",
          "-webkit-box-pack": "start",
          "-webkit-justify-content": "flex-start",
          "-ms-flex-pack": "start",
          "justify-content": "flex-start"
      },
      ".navbar-expand-sm .navbar-nav": {
          "-webkit-flex-direction": "row",
          "-ms-flex-direction": "row",
          "flex-direction": "row"
      },
      ".navbar-expand-sm .navbar-nav .dropdown-menu": {
          "position": "absolute"
      },
      ".navbar-expand-sm .navbar-nav .nav-link": {
          "padding-right": "0.5rem",
          "padding-left": "0.5rem"
      },
      ".navbar-expand-sm .navbar-nav-scroll": {
          "overflow": "visible"
      },
      ".navbar-expand-sm .navbar-collapse": {
          "display": "flex !important",
          "-webkit-flex-basis": "auto",
          "-ms-flex-basis": "auto",
          "flex-basis": "auto"
      },
      ".navbar-expand-sm .navbar-toggler": {
          "display": "none"
      },
      ".navbar-expand-sm .offcanvas-header": {
          "display": "none"
      },
      ".navbar-expand-sm .offcanvas": {
          "position": "inherit",
          "bottom": "0",
          "z-index": "1000",
          "-webkit-flex-grow": "1",
          "-ms-flex-grow": "1",
          "flex-grow": "1",
          "visibility": "visible !important",
          "background-color": "transparent",
          "border-right": "0",
          "border-left": "0",
          "-webkit-transition": "none",
          "transition": "none",
          "-webkit-transform": "none",
          "-ms-transform": "none",
          "transform": "none"
      },
      ".navbar-expand-sm .offcanvas-top": {
          "height": "auto",
          "border-top": "0",
          "border-bottom": "0"
      },
      ".navbar-expand-sm .offcanvas-bottom": {
          "height": "auto",
          "border-top": "0",
          "border-bottom": "0"
      },
      ".navbar-expand-sm .offcanvas-body": {
          "display": "flex",
          "-webkit-flex-grow": "0",
          "-ms-flex-grow": "0",
          "flex-grow": "0",
          "padding": "0",
          "overflow-y": "visible"
      },
      ".modal-dialog": {
          "max-width": "500px",
          "margin": "1.75rem auto"
      },
      ".modal-dialog-scrollable": {
          "height": "calc(100% - 3.5rem)"
      },
      ".modal-dialog-centered": {
          "min-height": "calc(100% - 3.5rem)"
      },
      ".modal-sm": {
          "max-width": "300px"
      },
      ".sticky-sm-top": {
          "position": "sticky",
          "top": "0",
          "z-index": "1020"
      }
  },
  "@media (min-width: 768px)": {
      ".navbar-expand-md": {
          "-webkit-flex-wrap": "nowrap",
          "-ms-flex-wrap": "nowrap",
          "flex-wrap": "nowrap",
          "-webkit-box-pack": "start",
          "-webkit-justify-content": "flex-start",
          "-ms-flex-pack": "start",
          "justify-content": "flex-start"
      },
      ".navbar-expand-md .navbar-nav": {
          "-webkit-flex-direction": "row",
          "-ms-flex-direction": "row",
          "flex-direction": "row"
      },
      ".navbar-expand-md .navbar-nav .dropdown-menu": {
          "position": "absolute"
      },
      ".navbar-expand-md .navbar-nav .nav-link": {
          "padding-right": "0.5rem",
          "padding-left": "0.5rem"
      },
      ".navbar-expand-md .navbar-nav-scroll": {
          "overflow": "visible"
      },
      ".navbar-expand-md .navbar-collapse": {
          "display": "flex !important",
          "-webkit-flex-basis": "auto",
          "-ms-flex-basis": "auto",
          "flex-basis": "auto"
      },
      ".navbar-expand-md .navbar-toggler": {
          "display": "none"
      },
      ".navbar-expand-md .offcanvas-header": {
          "display": "none"
      },
      ".navbar-expand-md .offcanvas": {
          "position": "inherit",
          "bottom": "0",
          "z-index": "1000",
          "-webkit-flex-grow": "1",
          "-ms-flex-grow": "1",
          "flex-grow": "1",
          "visibility": "visible !important",
          "background-color": "transparent",
          "border-right": "0",
          "border-left": "0",
          "-webkit-transition": "none",
          "transition": "none",
          "-webkit-transform": "none",
          "-ms-transform": "none",
          "transform": "none"
      },
      ".navbar-expand-md .offcanvas-top": {
          "height": "auto",
          "border-top": "0",
          "border-bottom": "0"
      },
      ".navbar-expand-md .offcanvas-bottom": {
          "height": "auto",
          "border-top": "0",
          "border-bottom": "0"
      },
      ".navbar-expand-md .offcanvas-body": {
          "display": "flex",
          "-webkit-flex-grow": "0",
          "-ms-flex-grow": "0",
          "flex-grow": "0",
          "padding": "0",
          "overflow-y": "visible"
      },
      ".sticky-md-top": {
          "position": "sticky",
          "top": "0",
          "z-index": "1020"
      }
  },
  "@media (min-width: 992px)": {
      ".navbar-expand-lg": {
          "-webkit-flex-wrap": "nowrap",
          "-ms-flex-wrap": "nowrap",
          "flex-wrap": "nowrap",
          "-webkit-box-pack": "start",
          "-webkit-justify-content": "flex-start",
          "-ms-flex-pack": "start",
          "justify-content": "flex-start"
      },
      ".navbar-expand-lg .navbar-nav": {
          "-webkit-flex-direction": "row",
          "-ms-flex-direction": "row",
          "flex-direction": "row"
      },
      ".navbar-expand-lg .navbar-nav .dropdown-menu": {
          "position": "absolute"
      },
      ".navbar-expand-lg .navbar-nav .nav-link": {
          "padding-right": "0.5rem",
          "padding-left": "0.5rem"
      },
      ".navbar-expand-lg .navbar-nav-scroll": {
          "overflow": "visible"
      },
      ".navbar-expand-lg .navbar-collapse": {
          "display": "flex !important",
          "-webkit-flex-basis": "auto",
          "-ms-flex-basis": "auto",
          "flex-basis": "auto"
      },
      ".navbar-expand-lg .navbar-toggler": {
          "display": "none"
      },
      ".navbar-expand-lg .offcanvas-header": {
          "display": "none"
      },
      ".navbar-expand-lg .offcanvas": {
          "position": "inherit",
          "bottom": "0",
          "z-index": "1000",
          "-webkit-flex-grow": "1",
          "-ms-flex-grow": "1",
          "flex-grow": "1",
          "visibility": "visible !important",
          "background-color": "transparent",
          "border-right": "0",
          "border-left": "0",
          "-webkit-transition": "none",
          "transition": "none",
          "-webkit-transform": "none",
          "-ms-transform": "none",
          "transform": "none"
      },
      ".navbar-expand-lg .offcanvas-top": {
          "height": "auto",
          "border-top": "0",
          "border-bottom": "0"
      },
      ".navbar-expand-lg .offcanvas-bottom": {
          "height": "auto",
          "border-top": "0",
          "border-bottom": "0"
      },
      ".navbar-expand-lg .offcanvas-body": {
          "display": "flex",
          "-webkit-flex-grow": "0",
          "-ms-flex-grow": "0",
          "flex-grow": "0",
          "padding": "0",
          "overflow-y": "visible"
      },
      ".modal-lg": {
          "max-width": "800px"
      },
      ".modal-xl": {
          "max-width": "800px"
      },
      ".sticky-lg-top": {
          "position": "sticky",
          "top": "0",
          "z-index": "1020"
      }
  },
  "@media (min-width: 1200px)": {
      ".navbar-expand-xl": {
          "-webkit-flex-wrap": "nowrap",
          "-ms-flex-wrap": "nowrap",
          "flex-wrap": "nowrap",
          "-webkit-box-pack": "start",
          "-webkit-justify-content": "flex-start",
          "-ms-flex-pack": "start",
          "justify-content": "flex-start"
      },
      ".navbar-expand-xl .navbar-nav": {
          "-webkit-flex-direction": "row",
          "-ms-flex-direction": "row",
          "flex-direction": "row"
      },
      ".navbar-expand-xl .navbar-nav .dropdown-menu": {
          "position": "absolute"
      },
      ".navbar-expand-xl .navbar-nav .nav-link": {
          "padding-right": "0.5rem",
          "padding-left": "0.5rem"
      },
      ".navbar-expand-xl .navbar-nav-scroll": {
          "overflow": "visible"
      },
      ".navbar-expand-xl .navbar-collapse": {
          "display": "flex !important",
          "-webkit-flex-basis": "auto",
          "-ms-flex-basis": "auto",
          "flex-basis": "auto"
      },
      ".navbar-expand-xl .navbar-toggler": {
          "display": "none"
      },
      ".navbar-expand-xl .offcanvas-header": {
          "display": "none"
      },
      ".navbar-expand-xl .offcanvas": {
          "position": "inherit",
          "bottom": "0",
          "z-index": "1000",
          "-webkit-flex-grow": "1",
          "-ms-flex-grow": "1",
          "flex-grow": "1",
          "visibility": "visible !important",
          "background-color": "transparent",
          "border-right": "0",
          "border-left": "0",
          "-webkit-transition": "none",
          "transition": "none",
          "-webkit-transform": "none",
          "-ms-transform": "none",
          "transform": "none"
      },
      ".navbar-expand-xl .offcanvas-top": {
          "height": "auto",
          "border-top": "0",
          "border-bottom": "0"
      },
      ".navbar-expand-xl .offcanvas-bottom": {
          "height": "auto",
          "border-top": "0",
          "border-bottom": "0"
      },
      ".navbar-expand-xl .offcanvas-body": {
          "display": "flex",
          "-webkit-flex-grow": "0",
          "-ms-flex-grow": "0",
          "flex-grow": "0",
          "padding": "0",
          "overflow-y": "visible"
      },
      ".modal-xl": {
          "max-width": "1140px"
      },
      ".sticky-xl-top": {
          "position": "sticky",
          "top": "0",
          "z-index": "1020"
      }
  },
  "@media (min-width: 1400px)": {
      ".navbar-expand-xxl": {
          "-webkit-flex-wrap": "nowrap",
          "-ms-flex-wrap": "nowrap",
          "flex-wrap": "nowrap",
          "-webkit-box-pack": "start",
          "-webkit-justify-content": "flex-start",
          "-ms-flex-pack": "start",
          "justify-content": "flex-start"
      },
      ".navbar-expand-xxl .navbar-nav": {
          "-webkit-flex-direction": "row",
          "-ms-flex-direction": "row",
          "flex-direction": "row"
      },
      ".navbar-expand-xxl .navbar-nav .dropdown-menu": {
          "position": "absolute"
      },
      ".navbar-expand-xxl .navbar-nav .nav-link": {
          "padding-right": "0.5rem",
          "padding-left": "0.5rem"
      },
      ".navbar-expand-xxl .navbar-nav-scroll": {
          "overflow": "visible"
      },
      ".navbar-expand-xxl .navbar-collapse": {
          "display": "flex !important",
          "-webkit-flex-basis": "auto",
          "-ms-flex-basis": "auto",
          "flex-basis": "auto"
      },
      ".navbar-expand-xxl .navbar-toggler": {
          "display": "none"
      },
      ".navbar-expand-xxl .offcanvas-header": {
          "display": "none"
      },
      ".navbar-expand-xxl .offcanvas": {
          "position": "inherit",
          "bottom": "0",
          "z-index": "1000",
          "-webkit-flex-grow": "1",
          "-ms-flex-grow": "1",
          "flex-grow": "1",
          "visibility": "visible !important",
          "background-color": "transparent",
          "border-right": "0",
          "border-left": "0",
          "-webkit-transition": "none",
          "transition": "none",
          "-webkit-transform": "none",
          "-ms-transform": "none",
          "transform": "none"
      },
      ".navbar-expand-xxl .offcanvas-top": {
          "height": "auto",
          "border-top": "0",
          "border-bottom": "0"
      },
      ".navbar-expand-xxl .offcanvas-bottom": {
          "height": "auto",
          "border-top": "0",
          "border-bottom": "0"
      },
      ".navbar-expand-xxl .offcanvas-body": {
          "display": "flex",
          "-webkit-flex-grow": "0",
          "-ms-flex-grow": "0",
          "flex-grow": "0",
          "padding": "0",
          "overflow-y": "visible"
      },
      ".sticky-xxl-top": {
          "position": "sticky",
          "top": "0",
          "z-index": "1020"
      }
  },
  "@media (max-width: 575.98px)": {
      ".modal-fullscreen-sm-down": {
          "width": "100vw",
          "max-width": "none",
          "height": "100%",
          "margin": "0"
      },
      ".modal-fullscreen-sm-down .modal-content": {
          "height": "100%",
          "border": "0",
          "border-radius": "0"
      },
      ".modal-fullscreen-sm-down .modal-header": {
          "border-radius": "0"
      },
      ".modal-fullscreen-sm-down .modal-body": {
          "overflow-y": "auto"
      },
      ".modal-fullscreen-sm-down .modal-footer": {
          "border-radius": "0"
      }
  },
  "@media (max-width: 767.98px)": {
      ".modal-fullscreen-md-down": {
          "width": "100vw",
          "max-width": "none",
          "height": "100%",
          "margin": "0"
      },
      ".modal-fullscreen-md-down .modal-content": {
          "height": "100%",
          "border": "0",
          "border-radius": "0"
      },
      ".modal-fullscreen-md-down .modal-header": {
          "border-radius": "0"
      },
      ".modal-fullscreen-md-down .modal-body": {
          "overflow-y": "auto"
      },
      ".modal-fullscreen-md-down .modal-footer": {
          "border-radius": "0"
      }
  },
  "@media (max-width: 991.98px)": {
      ".modal-fullscreen-lg-down": {
          "width": "100vw",
          "max-width": "none",
          "height": "100%",
          "margin": "0"
      },
      ".modal-fullscreen-lg-down .modal-content": {
          "height": "100%",
          "border": "0",
          "border-radius": "0"
      },
      ".modal-fullscreen-lg-down .modal-header": {
          "border-radius": "0"
      },
      ".modal-fullscreen-lg-down .modal-body": {
          "overflow-y": "auto"
      },
      ".modal-fullscreen-lg-down .modal-footer": {
          "border-radius": "0"
      }
  },
  "@media (max-width: 1199.98px)": {
      ".modal-fullscreen-xl-down": {
          "width": "100vw",
          "max-width": "none",
          "height": "100%",
          "margin": "0"
      },
      ".modal-fullscreen-xl-down .modal-content": {
          "height": "100%",
          "border": "0",
          "border-radius": "0"
      },
      ".modal-fullscreen-xl-down .modal-header": {
          "border-radius": "0"
      },
      ".modal-fullscreen-xl-down .modal-body": {
          "overflow-y": "auto"
      },
      ".modal-fullscreen-xl-down .modal-footer": {
          "border-radius": "0"
      }
  },
  "@media (max-width: 1399.98px)": {
      ".modal-fullscreen-xxl-down": {
          "width": "100vw",
          "max-width": "none",
          "height": "100%",
          "margin": "0"
      },
      ".modal-fullscreen-xxl-down .modal-content": {
          "height": "100%",
          "border": "0",
          "border-radius": "0"
      },
      ".modal-fullscreen-xxl-down .modal-header": {
          "border-radius": "0"
      },
      ".modal-fullscreen-xxl-down .modal-body": {
          "overflow-y": "auto"
      },
      ".modal-fullscreen-xxl-down .modal-footer": {
          "border-radius": "0"
      }
  },
  "@media (prefers-reduced-motion)": {
      ".animation": {
          "-webkit-transition": "none !important",
          "transition": "none !important",
          "-webkit-animation": "unset !important",
          "animation": "unset !important"
      }
  },
  "@media screen and (min-width: 320px) and (max-width: 820px) and (orientation: landscape)": {
      ".datepicker-modal-container .datepicker-header": {
          "height": "100%"
      },
      ".datepicker-modal-container .datepicker-date": {
          "margin-top": "100px"
      },
      ".datepicker-modal-container .datepicker-day-cell": {
          "width": "32x",
          "height": "32x"
      },
      ".datepicker-modal-container": {
          "-webkit-flex-direction": "row",
          "-ms-flex-direction": "row",
          "flex-direction": "row",
          "width": "475px",
          "height": "360px"
      },
      ".datepicker-modal-container.datepicker-day-cell": {
          "width": "36px",
          "height": "36px"
      }
  },
  "@media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape)": {
      ".timepicker-elements": {
          "-webkit-flex-direction": "row !important",
          "-ms-flex-direction": "row !important",
          "flex-direction": "row !important",
          "border-bottom-left-radius": "0.5rem",
          "min-width": "auto",
          "min-height": "auto",
          "overflow-y": "auto"
      },
      ".timepicker-head": {
          "border-top-right-radius": "0",
          "border-bottom-left-radius": "0",
          "padding": "10px",
          "padding-right": "10px !important",
          "height": "auto",
          "min-height": "305px"
      },
      ".timepicker-head-content": {
          "-webkit-flex-direction": "column",
          "-ms-flex-direction": "column",
          "flex-direction": "column"
      },
      ".timepicker-mode-wrapper": {
          "-webkit-box-pack": "space-around !important",
          "-webkit-justify-content": "space-around !important",
          "-ms-flex-pack": "space-around !important",
          "justify-content": "space-around !important",
          "-webkit-flex-direction": "row !important",
          "-ms-flex-direction": "row !important",
          "flex-direction": "row !important"
      },
      ".timepicker-current": {
          "font-size": "3rem",
          "font-weight": "400"
      },
      ".timepicker-dot": {
          "font-size": "3rem",
          "font-weight": "400"
      }
  },
  "@media (max-width: 576px)": {
      ".stepper-horizontal": {
          "overflow-x": "auto"
      }
  },
  "@keyframes _spinner-grow": {
      "0%": {
          "-webkit-transform": "scale(0)",
          "-ms-transform": "scale(0)",
          "transform": "scale(0)"
      },
      "50%": {
          "opacity": "1",
          "-webkit-transform": "none",
          "-ms-transform": "none",
          "transform": "none"
      }
  },
  "@keyframes _fade-in": {
      "from": {
          "opacity": "0"
      },
      "to": {
          "opacity": "1"
      }
  },
  "@keyframes _fade-out": {
      "from": {
          "opacity": "1"
      },
      "to": {
          "opacity": "0"
      }
  },
  "@keyframes _fade-in-down": {
      "from": {
          "opacity": "0",
          "-webkit-transform": "translate3d(0, -100%, 0)",
          "-ms-transform": "translate3d(0, -100%, 0)",
          "transform": "translate3d(0, -100%, 0)"
      },
      "to": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, 0, 0)",
          "-ms-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
      }
  },
  "@keyframes _fade-in-left": {
      "from": {
          "opacity": "0",
          "-webkit-transform": "translate3d(-100%, 0, 0)",
          "-ms-transform": "translate3d(-100%, 0, 0)",
          "transform": "translate3d(-100%, 0, 0)"
      },
      "to": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, 0, 0)",
          "-ms-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
      }
  },
  "@keyframes _fade-in-right": {
      "from": {
          "opacity": "0",
          "-webkit-transform": "translate3d(100%, 0, 0)",
          "-ms-transform": "translate3d(100%, 0, 0)",
          "transform": "translate3d(100%, 0, 0)"
      },
      "to": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, 0, 0)",
          "-ms-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
      }
  },
  "@keyframes _fade-in-up": {
      "from": {
          "opacity": "0",
          "-webkit-transform": "translate3d(0, 100%, 0)",
          "-ms-transform": "translate3d(0, 100%, 0)",
          "transform": "translate3d(0, 100%, 0)"
      },
      "to": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, 0, 0)",
          "-ms-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
      }
  },
  "@keyframes _fade-out-down": {
      "from": {
          "opacity": "1"
      },
      "to": {
          "opacity": "0",
          "-webkit-transform": "translate3d(0, 100%, 0)",
          "-ms-transform": "translate3d(0, 100%, 0)",
          "transform": "translate3d(0, 100%, 0)"
      }
  },
  "@keyframes _fade-out-left": {
      "from": {
          "opacity": "1"
      },
      "to": {
          "opacity": "0",
          "-webkit-transform": "translate3d(-100%, 0, 0)",
          "-ms-transform": "translate3d(-100%, 0, 0)",
          "transform": "translate3d(-100%, 0, 0)"
      }
  },
  "@keyframes _fade-out-right": {
      "from": {
          "opacity": "1"
      },
      "to": {
          "opacity": "0",
          "-webkit-transform": "translate3d(100%, 0, 0)",
          "-ms-transform": "translate3d(100%, 0, 0)",
          "transform": "translate3d(100%, 0, 0)"
      }
  },
  "@keyframes _fade-out-up": {
      "from": {
          "opacity": "1"
      },
      "to": {
          "opacity": "0",
          "-webkit-transform": "translate3d(0, -100%, 0)",
          "-ms-transform": "translate3d(0, -100%, 0)",
          "transform": "translate3d(0, -100%, 0)"
      }
  },
  "@keyframes _slide-in-down": {
      "from": {
          "visibility": "visible",
          "-webkit-transform": "translate3d(0, -100%, 0)",
          "-ms-transform": "translate3d(0, -100%, 0)",
          "transform": "translate3d(0, -100%, 0)"
      },
      "to": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "-ms-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
      }
  },
  "@keyframes _slide-in-left": {
      "from": {
          "visibility": "visible",
          "-webkit-transform": "translate3d(-100%, 0, 0)",
          "-ms-transform": "translate3d(-100%, 0, 0)",
          "transform": "translate3d(-100%, 0, 0)"
      },
      "to": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "-ms-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
      }
  },
  "@keyframes _slide-in-right": {
      "from": {
          "visibility": "visible",
          "-webkit-transform": "translate3d(100%, 0, 0)",
          "-ms-transform": "translate3d(100%, 0, 0)",
          "transform": "translate3d(100%, 0, 0)"
      },
      "to": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "-ms-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
      }
  },
  "@keyframes _slide-in-up": {
      "from": {
          "visibility": "visible",
          "-webkit-transform": "translate3d(0, 100%, 0)",
          "-ms-transform": "translate3d(0, 100%, 0)",
          "transform": "translate3d(0, 100%, 0)"
      },
      "to": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "-ms-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
      }
  },
  "@keyframes _slide-out-down": {
      "from": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "-ms-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
      },
      "to": {
          "visibility": "hidden",
          "-webkit-transform": "translate3d(0, 100%, 0)",
          "-ms-transform": "translate3d(0, 100%, 0)",
          "transform": "translate3d(0, 100%, 0)"
      }
  },
  "@keyframes _slide-out-left": {
      "from": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "-ms-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
      },
      "to": {
          "visibility": "hidden",
          "-webkit-transform": "translate3d(-100%, 0, 0)",
          "-ms-transform": "translate3d(-100%, 0, 0)",
          "transform": "translate3d(-100%, 0, 0)"
      }
  },
  "@keyframes _slide-out-right": {
      "from": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "-ms-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
      },
      "to": {
          "visibility": "hidden",
          "-webkit-transform": "translate3d(100%, 0, 0)",
          "-ms-transform": "translate3d(100%, 0, 0)",
          "transform": "translate3d(100%, 0, 0)"
      }
  },
  "@keyframes _slide-out-up": {
      "from": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "-ms-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
      },
      "to": {
          "visibility": "hidden",
          "-webkit-transform": "translate3d(0, -100%, 0)",
          "-ms-transform": "translate3d(0, -100%, 0)",
          "transform": "translate3d(0, -100%, 0)"
      }
  },
  "@keyframes _slide-down": {
      "from": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "-ms-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
      },
      "to": {
          "-webkit-transform": "translate3d(0, 100%, 0)",
          "-ms-transform": "translate3d(0, 100%, 0)",
          "transform": "translate3d(0, 100%, 0)"
      }
  },
  "@keyframes _slide-left": {
      "from": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "-ms-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
      },
      "to": {
          "-webkit-transform": "translate3d(-100%, 0, 0)",
          "-ms-transform": "translate3d(-100%, 0, 0)",
          "transform": "translate3d(-100%, 0, 0)"
      }
  },
  "@keyframes _slide-right": {
      "from": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "-ms-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
      },
      "to": {
          "-webkit-transform": "translate3d(100%, 0, 0)",
          "-ms-transform": "translate3d(100%, 0, 0)",
          "transform": "translate3d(100%, 0, 0)"
      }
  },
  "@keyframes _slide-up": {
      "from": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "-ms-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
      },
      "to": {
          "-webkit-transform": "translate3d(0, -100%, 0)",
          "-ms-transform": "translate3d(0, -100%, 0)",
          "transform": "translate3d(0, -100%, 0)"
      }
  },
  "@keyframes _zoom-in": {
      "from": {
          "opacity": "0",
          "-webkit-transform": "scale3d(0.3, 0.3, 0.3)",
          "-ms-transform": "scale3d(0.3, 0.3, 0.3)",
          "transform": "scale3d(0.3, 0.3, 0.3)"
      },
      "50%": {
          "opacity": "1"
      }
  },
  "@keyframes _zoom-out": {
      "from": {
          "opacity": "1"
      },
      "50%": {
          "opacity": "0",
          "-webkit-transform": "scale3d(0.3, 0.3, 0.3)",
          "-ms-transform": "scale3d(0.3, 0.3, 0.3)",
          "transform": "scale3d(0.3, 0.3, 0.3)"
      },
      "to": {
          "opacity": "0"
      }
  },
  "@keyframes _tada": {
      "from": {
          "-webkit-transform": "scale3d(1, 1, 1)",
          "-ms-transform": "scale3d(1, 1, 1)",
          "transform": "scale3d(1, 1, 1)"
      },
      "10%": {
          "-webkit-transform": "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
          "-ms-transform": "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
          "transform": "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"
      },
      "20%": {
          "-webkit-transform": "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
          "-ms-transform": "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
          "transform": "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"
      },
      "30%": {
          "-webkit-transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          "-ms-transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          "transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"
      },
      "50%": {
          "-webkit-transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          "-ms-transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          "transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"
      },
      "70%": {
          "-webkit-transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          "-ms-transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          "transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"
      },
      "90%": {
          "-webkit-transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          "-ms-transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          "transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"
      },
      "40%": {
          "-webkit-transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
          "-ms-transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
          "transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"
      },
      "60%": {
          "-webkit-transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
          "-ms-transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
          "transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"
      },
      "80%": {
          "-webkit-transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
          "-ms-transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
          "transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"
      },
      "to": {
          "-webkit-transform": "scale3d(1, 1, 1)",
          "-ms-transform": "scale3d(1, 1, 1)",
          "transform": "scale3d(1, 1, 1)"
      }
  },
  "@keyframes _pulse": {
      "from": {
          "-webkit-transform": "scale3d(1, 1, 1)",
          "-ms-transform": "scale3d(1, 1, 1)",
          "transform": "scale3d(1, 1, 1)"
      },
      "50%": {
          "-webkit-transform": "scale3d(1.05, 1.05, 1.05)",
          "-ms-transform": "scale3d(1.05, 1.05, 1.05)",
          "transform": "scale3d(1.05, 1.05, 1.05)"
      },
      "to": {
          "-webkit-transform": "scale3d(1, 1, 1)",
          "-ms-transform": "scale3d(1, 1, 1)",
          "transform": "scale3d(1, 1, 1)"
      }
  },
  "@keyframes _show-up-clock": {
      "0%": {
          "opacity": "0",
          "-webkit-transform": "scale(0.7)",
          "-ms-transform": "scale(0.7)",
          "transform": "scale(0.7)"
      },
      "to": {
          "opacity": "1",
          "-webkit-transform": "scale(1)",
          "-ms-transform": "scale(1)",
          "transform": "scale(1)"
      }
  }
};

module.exports = styles