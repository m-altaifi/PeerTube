import { JobState } from '@peertube/peertube-models'
import { jobTypes } from '@server/lib/job-queue/job-queue.js'
import { exists } from './misc.js'

const jobStates = new Set<JobState>([
  'active',
  'completed',
  'failed',
  'waiting',
  'delayed',
  'waiting-children',
  'prioritized',
  'wait',
  'repeat'
])

function isValidJobState (value: JobState) {
  return exists(value) && jobStates.has(value)
}

function isValidJobType (value: any) {
  return exists(value) && jobTypes.includes(value)
}

// ---------------------------------------------------------------------------

export {
  isValidJobState,
  isValidJobType,
  jobStates
}
