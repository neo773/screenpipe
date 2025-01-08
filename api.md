# Shared

Types:

- <code><a href="./src/resources/shared.ts">HealthCheckResponse</a></code>

# Healthcheck

Methods:

- <code title="get /healthcheck">client.healthcheck.<a href="./src/resources/healthcheck.ts">retrieve</a>() -> HealthCheckResponse</code>

# Audio

Types:

- <code><a href="./src/resources/audio.ts">AudioListResponse</a></code>

Methods:

- <code title="get /audio/list">client.audio.<a href="./src/resources/audio.ts">list</a>() -> AudioListResponse</code>

# Vision

Types:

- <code><a href="./src/resources/vision.ts">MonitorInfo</a></code>
- <code><a href="./src/resources/vision.ts">VisionListResponse</a></code>

Methods:

- <code title="post /vision/list">client.vision.<a href="./src/resources/vision.ts">list</a>() -> VisionListResponse</code>

# Tags

Types:

- <code><a href="./src/resources/tags.ts">TagDeleteResponse</a></code>

Methods:

- <code title="delete /tags/{content_type}/{id}">client.tags.<a href="./src/resources/tags.ts">delete</a>(contentType, id, { ...params }) -> TagDeleteResponse</code>

# Pipes

Types:

- <code><a href="./src/resources/pipes/pipes.ts">PipeUpdateResponse</a></code>
- <code><a href="./src/resources/pipes/pipes.ts">PipeListResponse</a></code>
- <code><a href="./src/resources/pipes/pipes.ts">PipeDeleteResponse</a></code>
- <code><a href="./src/resources/pipes/pipes.ts">PipeDisableResponse</a></code>
- <code><a href="./src/resources/pipes/pipes.ts">PipeDownloadResponse</a></code>
- <code><a href="./src/resources/pipes/pipes.ts">PipeEnableResponse</a></code>

Methods:

- <code title="post /pipes/update">client.pipes.<a href="./src/resources/pipes/pipes.ts">update</a>({ ...params }) -> unknown</code>
- <code title="get /pipes/list">client.pipes.<a href="./src/resources/pipes/pipes.ts">list</a>() -> unknown</code>
- <code title="post /pipes/delete">client.pipes.<a href="./src/resources/pipes/pipes.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /pipes/disable">client.pipes.<a href="./src/resources/pipes/pipes.ts">disable</a>({ ...params }) -> unknown</code>
- <code title="post /pipes/download">client.pipes.<a href="./src/resources/pipes/pipes.ts">download</a>({ ...params }) -> unknown</code>
- <code title="post /pipes/enable">client.pipes.<a href="./src/resources/pipes/pipes.ts">enable</a>({ ...params }) -> unknown</code>

## Info

Types:

- <code><a href="./src/resources/pipes/info.ts">InfoRetrieveResponse</a></code>

Methods:

- <code title="get /pipes/info/{pipe_id}">client.pipes.info.<a href="./src/resources/pipes/info.ts">retrieve</a>(pipeId) -> unknown</code>

# Health

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">retrieve</a>() -> HealthCheckResponse</code>

# RawSql

Types:

- <code><a href="./src/resources/raw-sql.ts">RawSqlCreateResponse</a></code>

Methods:

- <code title="post /raw_sql">client.rawSql.<a href="./src/resources/raw-sql.ts">create</a>({ ...params }) -> unknown</code>

# Add

Types:

- <code><a href="./src/resources/add.ts">AddContentResponse</a></code>

Methods:

- <code title="post /add">client.add.<a href="./src/resources/add.ts">create</a>({ ...params }) -> AddContentResponse</code>

# Speakers

Types:

- <code><a href="./src/resources/speakers/speakers.ts">Speaker</a></code>
- <code><a href="./src/resources/speakers/speakers.ts">SpeakerDeleteResponse</a></code>
- <code><a href="./src/resources/speakers/speakers.ts">SpeakerHallucinationResponse</a></code>
- <code><a href="./src/resources/speakers/speakers.ts">SpeakerMergeResponse</a></code>
- <code><a href="./src/resources/speakers/speakers.ts">SpeakerSimilarResponse</a></code>

Methods:

- <code title="post /speakers/update">client.speakers.<a href="./src/resources/speakers/speakers.ts">update</a>({ ...params }) -> Speaker</code>
- <code title="post /speakers/delete">client.speakers.<a href="./src/resources/speakers/speakers.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /speakers/hallucination">client.speakers.<a href="./src/resources/speakers/speakers.ts">hallucination</a>({ ...params }) -> unknown</code>
- <code title="post /speakers/merge">client.speakers.<a href="./src/resources/speakers/speakers.ts">merge</a>({ ...params }) -> unknown</code>
- <code title="get /speakers/similar">client.speakers.<a href="./src/resources/speakers/speakers.ts">similar</a>({ ...params }) -> SpeakerSimilarResponse</code>

## Unnamed

Types:

- <code><a href="./src/resources/speakers/unnamed.ts">UnnamedListResponse</a></code>

Methods:

- <code title="get /speakers/unnamed">client.speakers.unnamed.<a href="./src/resources/speakers/unnamed.ts">list</a>({ ...params }) -> UnnamedListResponse</code>

## Search

Types:

- <code><a href="./src/resources/speakers/search.ts">SearchListResponse</a></code>

Methods:

- <code title="get /speakers/search">client.speakers.search.<a href="./src/resources/speakers/search.ts">list</a>({ ...params }) -> SearchListResponse</code>

# Experimental

## Frames

Types:

- <code><a href="./src/resources/experimental/frames.ts">MergeVideosResponse</a></code>

Methods:

- <code title="post /experimental/frames/merge">client.experimental.frames.<a href="./src/resources/experimental/frames.ts">merge</a>({ ...params }) -> MergeVideosResponse</code>

## Media

Types:

- <code><a href="./src/resources/experimental/media.ts">MediaValidateResponse</a></code>

Methods:

- <code title="get /experimental/validate/media">client.experimental.media.<a href="./src/resources/experimental/media.ts">validate</a>({ ...params }) -> unknown</code>
