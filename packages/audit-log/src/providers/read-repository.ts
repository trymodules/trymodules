export type ListOptions = {
  /**
   * Filters to apply to the list operation.
   */
  filters?: ListFilters;

  /**
   * Pagination options for the list operation.
   */
  pagination?: PaginationRequest;
};

export type ListFilters = {
  /**
   * The application ID to filter by.
   */
  applicationId?: string;

  /**
   * The actor ID to filter by.
   */
  actorId?: string;

  /**
   * The source to filter by.
   */
  source?: string;

  /**
   * The event to filter by.
   */
  event?: string;

  /**
   * The target to filter by.
   */
  target?: string;

  /**
   * Timestamp to filter from (inclusive).
   */
  from?: number;

  /**
   * Timestamp to filter to (inclusive).
   */
  to?: number;
};

export type PaginationRequest<TCursor = unknown> = {
  /**
   * The cursor to start from.
   */
  cursor?: TCursor;

  /**
   * The number of items to return.
   */
  limit?: number;
};

export type PaginationResponse = {};

export abstract class ReadRepository {
  /**
   * Get a list of logs.
   * @param opts Options for the list operation.
   */
  abstract list(opts: ListOptions): Promise<void>;
}
