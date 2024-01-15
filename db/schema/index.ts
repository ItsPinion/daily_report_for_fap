import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const reportSchema = sqliteTable("table", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  date: text("date")
    .default(sql`CURRENT_DATE`)
    .notNull(),
  time: text("time").notNull(),
  today: text("today").notNull(),
  tomorrow: text("tomorrow").notNull(),
  bottleneck: text("bottleneck").notNull(),
});