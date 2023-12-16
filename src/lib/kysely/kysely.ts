import { Kysely, PostgresDialect, type Selectable } from 'kysely';
import type { DB } from 'kysely-codegen';
import { Pool } from 'pg';

import type { Course } from 'kysely-codegen';

import { DATABASE_URL } from '$env/static/private';

export const db = new Kysely<DB>({
    dialect: new PostgresDialect({
      pool: new Pool({
        connectionString: DATABASE_URL
      }),
    }),
  });

export type CourseSelect = Selectable<Course>;
