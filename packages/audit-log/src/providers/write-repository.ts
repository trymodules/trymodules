import type { Model as AuditLog } from '../models/audit-log.js';

export abstract class WriteRepository {
  /**
   * Insert multiple logs.
   * @param logs The logs to insert.
   */
  abstract insertMany(...logs: Array<AuditLog>): Promise<void>;
}
