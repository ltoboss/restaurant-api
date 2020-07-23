import * as sentryNode from '@sentry/node';
const dsn = process.env.KRACK_SENTRY_DSN || 'https://6de62514786645c0ae20f6bb283f7c4b@sentry.io/1794427'; //'';
if (dsn) sentryNode.init({ dsn });

export const sentryRequestHandler = sentryNode.Handlers.requestHandler;
export const sentryErrorHandler = sentryNode.Handlers.errorHandler;