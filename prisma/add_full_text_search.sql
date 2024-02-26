ALTER TABLE "Stream" ADD COLUMN "searchVector" tsvector
    GENERATED ALWAYS AS (to_tsvector('english', coalesce(name, ''))) STORED;

CREATE INDEX stream_search_idx ON "Stream" USING GIN ("searchVector");
