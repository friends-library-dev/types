// eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
export const checkoutErrors = {
  INVALID_FN_REQUEST_BODY: 'INVALID_FN_REQUEST_BODY',
  SHIPPING_NOT_POSSIBLE: 'SHIPPING_NOT_POSSIBLE',
  ERROR_ACQUIRING_LULU_OAUTH_TOKEN: 'ERROR_ACQUIRING_LULU_OAUTH_TOKEN',
  ERROR_CREATING_STRIPE_PAYMENT_INTENT: 'ERROR_CREATING_STRIPE_PAYMENT_INTENT',
  ERROR_CAPTURING_STRIPE_PAYMENT_INTENT: 'ERROR_CAPTURING_STRIPE_PAYMENT_INTENT',
  ERROR_AUTHORIZING_STRIPE_PAYMENT_INTENT: 'ERROR_AUTHORIZING_STRIPE_PAYMENT_INTENT',
  ERROR_SENDING_EMAIL: 'ERROR_SENDING_EMAIL',
  ERROR_UPDATING_FLP_ORDER: 'ERROR_UPDATING_FLP_ORDER',
  ERROR_UPDATING_FLP_ORDERS: 'ERROR_UPDATING_FLP_ORDERS',
  STRIPE_PAYMENT_INTENT_NOT_FOUND: 'STRIPE_PAYMENT_INTENT_NOT_FOUND',
  STRIPE_PAYMENT_INTENT_ALREADY_CAPTURED: 'STRIPE_PAYMENT_INTENT_ALREADY_CAPTURED',
  ERROR_RETRIEVING_STRIPE_PAYMENT_INTENT: 'ERROR_RETRIEVING_STRIPE_PAYMENT_INTENT',
  ERROR_CREATING_PRINT_JOB: 'ERROR_CREATING_PRINT_JOB',
  ERROR_RETRIEVING_PRINT_JOB_DATA: 'ERROR_RETRIEVING_PRINT_JOB_DATA',
  INVALID_FETCH_FLP_ORDER_URL: 'INVALID_FETCH_FLP_ORDER_URL',
  INVALID_PATCH_FLP_ORDER_URL: 'INVALID_PATCH_FLP_ORDER_URL',
  INVALID_PRINT_JOB_STATUS_URL: 'INVALID_PRINT_JOB_STATUS_URL',
  INVALID_SEND_ORDER_CONFIRMATION_EMAIL_URL: 'INVALID_SEND_ORDER_CONFIRMATION_EMAIL_URL',
  FLP_ORDER_NOT_FOUND: 'FLP_ORDER_NOT_FOUND',
  ERROR_FETCHING_PRINT_JOB_STATUS: 'ERROR_FETCHING_PRINT_JOB_STATUS',
  PRINT_JOB_NOT_FOUND: 'PRINT_JOB_NOT_FOUND',
} as const;

export type CheckoutError = keyof typeof checkoutErrors;
