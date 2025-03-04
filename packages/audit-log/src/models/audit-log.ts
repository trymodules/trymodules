import * as z from 'zod';

const schema = z.object({
  /**
   * The timestamp of the event (in milliseconds since the Unix epoch).
   */
  timestamp: z.number().int().positive(),

  /**
   * The application ID that the event occurred in (e.g user-profile).
   */
  applicationId: z.string().nonempty(),

  /**
   * The actor ID that performed the event (e.g. "user ID", "system").
   */
  actorId: z.string().nonempty(),

  /**
   * The source of the event (e.g. "web", "api").
   */
  source: z.string().nonempty(),

  /**
   * The event that occurred (e.g. "user.created", "user.updated").
   */
  event: z.string().nonempty(),

  /**
   * The target of the event (e.g. "user ID", "system").
   */
  target: z.string().nonempty(),

  /**
   * The changes that occurred during the event.
   */
  changes: z.object({}).passthrough().optional(),

  /**
   * The metadata associated with the event (any extra attribute).
   */
  metadata: z.object({}).passthrough().optional(),
});

type AuditLog<TMetadata = unknown> = z.infer<typeof schema> & {
  changes: Record<string, unknown>;
  metadata?: TMetadata;
};

export { schema };
export type { AuditLog as Model };
