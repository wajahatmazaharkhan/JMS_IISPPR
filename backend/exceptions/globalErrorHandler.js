import ApiError from "./apiError.js";

export const globalErrorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  const statusCode = err.statusCode || 500;
  const payload = {
    status: err.status || "error",
    message: err.message || "Internal server error",
  };

  // Only expose stack trace for operational errors in dev
  if (process.env.NODE_ENV !== "production") {
    payload.stack = err.stack;
  }

  if (!(err instanceof ApiError)) {
    console.error("Unhandled error", err);
  }

  res.status(statusCode).json(payload);
};
