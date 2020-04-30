import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const { format: formatPrice } = new Intl.NumberFormat('en-UK', {
  style: 'currency',
  currency: 'EUR',
});
