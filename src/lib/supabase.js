import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export const isSupabaseReady = Boolean(supabaseUrl && supabaseKey);
export const isSupabaseConfigured = isSupabaseReady;

/*
 * ── Run once in Supabase → SQL Editor ──────────────────────
 *
 * CREATE TABLE registrations (
 *   id                   uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
 *   created_at           timestamptz DEFAULT now(),
 *   type                 text,          -- 'course' | 'workshop'
 *   item_id              text,
 *   item_title           text,
 *   name                 text,
 *   email                text,
 *   phone                text,
 *   age                  text,
 *   experience           text,
 *   goal                 text,
 *   status               text,
 *   mode                 text,
 *   analyticshala_student text,
 *   amount_paise         integer,
 *   payment_id           text
 * );
 *
 * ── To view & export registrations ─────────────────────────
 * In Supabase → Table Editor → registrations
 * Or: SELECT * FROM registrations ORDER BY created_at DESC;
 * ────────────────────────────────────────────────────────── */
