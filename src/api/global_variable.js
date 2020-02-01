const userId = ''
const corpId = ''
const baseURL = 'www.baidu.com'
const defaultImg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAEN0lEQVR4Xu2aP2tUURTE53wEwT+FWiumtBFiYyPYaKVFtLZRY6el2Imdgn4C0yhYpDDY2aSwEsFCsbERIoLfQI48SEAtdu7L7mbvzplt5+beOzM/zr7lJeBP6QSitHubhwEoDoEBMADFEyhu3xPAABRPoLh9TwADUDyB4vY9AQxA8QSK2/cEMADjEsjMVQBrAM4AWAFwZNwOXj3jBH4A+AjgC4CtiNgas/+oCZCZ6wCejDnAaw88gY2IuNF6ajMAmZmtm3rd4hOIiKZumxZl5gsA1xdvyzcYkcDdiHjK1lMAMvMSgDdsI+tdJnA+IrYn3awFgIGiO13a86VYAs8j4ta0ALwFcJGdZL3LBN5FxIVpAdgBcKxLe74US+BnRBydFgA//bOYO9bZr4GWZwAD0HHB7GoGgCUkrhsA8YKZPQPAEhLXDYB4wcyeAWAJiesGQLxgZs8AsITEdQMgXjCzZwBYQuK6ARAvmNkzACwhcd0AiBfM7BkAlpC4bgDEC2b2DABLSFw3AOIFM3sGgCUkrhsA8YKZPQPAEhLXDYB4wcyeAWAJiesGQLxgZs8AsITEdQMgXjCzZwBYQuK6ARAvmNkzACwhcd0AiBfM7BkAlpC4bgDEC2b2DABLSFw3AOIFM3sGgCUkrhsA8YKZPQPAEhLXDYB4wcyeAWAJiesGQLxgZs8AsITEdQMgXjCzZwBYQuK6ARAvmNkzACwhcd0AiBfM7BkAlpC4bgDEC2b2DABLSFw3AOIFM3sGgCUkrhsA8YKZPQPAEhLXDYB4wcyeAWAJiesGQLxgZs8AsITEdQMgXjCzZwBYQuK6ARAvmNkzACwhcd0AiBfM7BkAlpC4bgDEC2b2DABLSFw3AOIFM3sGgCUkrhsA8YKZPQPAEhLXDYB4wcyeAWAJiesGQLxgZs8AsITEdQMgXjCzNwsAPgFYYQdZ7zKBLxFxetLNgl07M18CuMrWWe8ygc2IuDItAI8A3O/Sni/FEngcERO7a5kAJwB8AHCYnWa9qwS+ATgbEb+mmgDDH2fm8BUwfBX4szwJnIuI9+y6dALsbZCZawA22IbWu0jgdkQ8a7lJMwC7k+AQgOGZ4GbL5l5z4Am8BrAeEd9bTx4FwF/T4CSA4efFqQU/GzxoNTrndQ/nvP+k7XcAfAbwdUzxexvuC4AFmv3n6E6eTa5FxKteMhl7j6UGoIMH1KUuf8hv6QFYIARLX74MAAuAQKJ8KQAOEAKZ8uUAOAAIpMqXBGCOEMiVLwvAHCCQLF8agBlCIFu+PAAzgEC6/BIATAGBfPllANgHBCXKLwXACAjKlF8OgAYISpVfEoBdCFYB3ANwefft2SaA4f/ntse+TVv29RIvg/ZbQmYeB/A7IoZ36iU/pQEo2fh/pg1AcQoMgAEonkBx+54ABqB4AsXtewIYgOIJFLfvCWAAiidQ3P4fVDPQkDciXl4AAAAASUVORK5CYII="
const upjtJtImg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhFMTQ3MzZGMjZFRTExRUE5MTlCQjdCQ0Y5NDFDODVDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhFMTQ3MzcwMjZFRTExRUE5MTlCQjdCQ0Y5NDFDODVDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEUxNDczNkQyNkVFMTFFQTkxOUJCN0JDRjk0MUM4NUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEUxNDczNkUyNkVFMTFFQTkxOUJCN0JDRjk0MUM4NUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Oh/GgAAACA0lEQVR42ryXSyhFQRjH7+HgChsiiYiUiDwij82N2LC0wMZVkpWFhZtHFEtW7k7kUWxvt0TKzsIreSRKKYSVyHNz4/hPDZ1OZ+Y85371q3vnmznf/8zM+b4ZSVEUz599SKkeB9YAqsCsUcdk5fn/t+SSgARwAnJBObgyKyDG446NgSKQCJZArNmBbggoBQHV/zowGC0B5E0XQJymfRIUR0PAAKjWafeCRSCLFJAPpjj+GjAkSoAE5kCSQb8JukdcF9AHmkz0iwfLOnvEkYA8MG2hfwUYcUsAmfp5kGJx3ChNUI4FmJ16rZElWKFLYltAAZhxmLDG7Qogb7BG0riqLQIeOWPuwBb4VrUFtHlDNimgFVyDA/AAzsE+CIEsxphN0A/SQTPwgUK6jIduVcMnkMbw9dI0LawaZnOCE9sTXQtqOb5XcClaQD3HR9b/R7SARo4vJPo8kAPKGL53sC5aQDtNy3q2Cr5EC/Az2sk3HbTyIDsCfJzpJ2t/IVrAMKM9wvG5JqANtDB8QaP7gG59t5CKM8ApyNTxkcCV4NNMUDupmBSUDUZwsuO7zAY3WoJOUKK5cnWAM3rv0xoptd3gyG4205bjXbBDz/VvtNR6GWNfQA8IO7lYaGfghn5m9/Tc72V862F6wnEUnLcJZfp2fnrpJOf/W7BND6XHToKqN+GvAAMAW9tpEHGtDVoAAAAASUVORK5CYII="
const downjtJtImg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk2MUMzOTAwMjZFRTExRUFBN0Q0RDk1NTQ3NTRDRDhDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk2MUMzOTAxMjZFRTExRUFBN0Q0RDk1NTQ3NTRDRDhDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTYxQzM4RkUyNkVFMTFFQUE3RDREOTU1NDc1NENEOEMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTYxQzM4RkYyNkVFMTFFQUE3RDREOTU1NDc1NENEOEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6VtKy7AAACwElEQVR42ryXTWgTQRTHZzebtZuk26pJiy1NtcFKVBCxKMWLWPH7oy3Yg0KLIIpIQA9SsTchFXoQ/AJppQqCJ6tSQQ9+oBc/qZEqVlCqFgWpoGA91GhZ/w8nkoadTXbdzYMfQ/btzPvvzJuZFyn86iTLMgXsAh1gAQiBMXAbnAMp5oJ9iSemBcxYHbgMlua8X8/ZBwbBfvCJuWQyb2vBfVADRsGkybsS2AZegK1uC1gNtoAIiIGZfCk+m/Qh3xXQ6qaA8+B51nOagQtgCXhm0s8HLoJlbgkQ2TjYIJiJALgEgl4KyIjYI/BRch71WgDZdXBL4EtwIZ4KIOsWPPeDY8UQcA8MC3wtYKHXAhjfGUxwRiSKIWAAGALfTr4zPBUwZrEMpWCz1wLI7lr4mosh4IGFb6PdMZ0IeGThKwNxrwV8BF8t/CvsDKbk8dP128YDUg3wEjwGI2CloM9y0A/CYC1YBeaDN2ZHej4BN8ARPmjGfoFvFn3o8roJ1mSN/xt0OlkCCrYD/Mg5eiss+kTB+pyP6wFPTE8wwzDyrlNk5NReNGcdHvdUQTWgDkz/TxL2gjsOgtMMdoiCFywAA9A07QYTNgV0o2/KlW2Igd6jOWQjOAVOCnZekNeWlYrNL6Kl2A6a8ryX5lM/xS+okixk20mYk5B1/EIyrQVVyceq/KHk01g7Je0MflULzbYALuIgmuN/11BiAdnPNFlhmqSwoOwfvlbb0jbLp015dRSz9vLFp3VZHapUgiyq6iyiaCwEEYok/9xUGjtcaHAnM6ABnf4zJscfxgcn3l41mPEvj2r8es9AtLnP7cvIxzOWTrhqXnhIXRWNrzEDvZmXSiQl1Ve9rt/NekClbQLmgtn89zQ7MafpDJJuVGLSZKte32ln6q0uI9o25YXUd/PUsnRjoKrrQ/r7ogPhhndO8umPAAMARSmR62UGbC0AAAAASUVORK5CYII="
const pageSize = 10
const logId=''
const ddPhone=''
const indexTabId=0;

export default {
  baseURL,
  defaultImg,
  pageSize,
  userId,
  corpId,
  upjtJtImg,
  downjtJtImg,
  logId,
  ddPhone,
  indexTabId
}