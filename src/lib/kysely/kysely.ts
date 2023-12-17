import { Kysely, PostgresDialect, type Selectable } from 'kysely';
import type { Activity, DB, ScormActivity, Section, SectionActivity, VideoActivity } from 'kysely-codegen';
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

export type SectionSelect = Selectable<Section>;
export type SectionActivitySelect = Selectable<SectionActivity>;

export type ActivitySelect = Selectable<Activity>;
export type ScormActivitySelect = Selectable<ScormActivity>;
export type VideoActivitySelect = Selectable<VideoActivity>;
